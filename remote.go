package main

import (
	"context"
	"crypto/sha256"
	"encoding/hex"
	"os"
	"path/filepath"
	"time"

	repb "github.com/bazelbuild/remote-apis/build/bazel/remote/execution/v2"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/proto"
)

type remoteCache struct {
	ac       repb.ActionCacheClient
	cas      repb.ContentAddressableStorageClient
	conn     *grpc.ClientConn
	execroot string
}

func dialRemoteCache(addr string, execroot string) (*remoteCache, error) {
	conn, err := grpc.Dial(addr, grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		panic(err)
	}
	ac := repb.NewActionCacheClient(conn)
	cas := repb.NewContentAddressableStorageClient(conn)
	return &remoteCache{ac: ac, cas: cas, conn: conn, execroot: execroot}, nil
}

func (rc *remoteCache) close() error {
	return rc.conn.Close()
}

func (rc *remoteCache) updateActionResult(result actionResult) (*repb.ActionResult, error) {
	digest, err := rc.digestForAction(result.action)
	if err != nil {
		return nil, err
	}

	digests := []*repb.Digest{}
	outputFiles := []*repb.OutputFile{}
	for _, out := range result.outputFiles {
		digest, err := digestForBytes(out.contents)
		if err != nil {
			return nil, err
		}
		digests = append(digests, &digest)
		outputFiles = append(outputFiles, &repb.OutputFile{
			Path:         out.path,
			Digest:       &digest,
			IsExecutable: false,
			Contents:     out.contents,
		})
	}

	// TODO: stderr and stdout

	fmbRes, err := rc.cas.FindMissingBlobs(context.Background(), &repb.FindMissingBlobsRequest{
		BlobDigests:    digests,
		DigestFunction: repb.DigestFunction_SHA256,
	})
	if err != nil {
		return nil, err
	}

	blobs := []*repb.BatchUpdateBlobsRequest_Request{}
	for _, m := range fmbRes.MissingBlobDigests {
		for i, digest := range digests {
			if m.Hash == digest.Hash {
				continue
			}
			blobs = append(blobs, &repb.BatchUpdateBlobsRequest_Request{
				Digest:     digest,
				Data:       result.outputFiles[i].contents,
				Compressor: repb.Compressor_IDENTITY,
			})
			break
		}
	}

	if len(blobs) > 0 {
		_, err = rc.cas.BatchUpdateBlobs(context.Background(), &repb.BatchUpdateBlobsRequest{
			Requests:       blobs,
			DigestFunction: repb.DigestFunction_SHA256,
		})
		if err != nil {
			return nil, err
		}
	}

	r, err := rc.ac.UpdateActionResult(context.Background(), &repb.UpdateActionResultRequest{
		ActionDigest: &digest,
		ActionResult: &repb.ActionResult{
			OutputFiles: outputFiles,
			ExitCode:    result.exitCode,
		},
		DigestFunction: repb.DigestFunction_SHA256,
	})
	if err != nil {
		return nil, err
	}
	return r, nil
}

func (rc *remoteCache) getActionResult(action action) (*actionResult, bool, error) {
	digest, err := rc.digestForAction(action)
	if err != nil {
		return nil, false, err
	}
	// Contact the server and print out its response.
	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()
	resultRes, err := rc.ac.GetActionResult(ctx, &repb.GetActionResultRequest{
		ActionDigest:   &digest,
		DigestFunction: repb.DigestFunction_SHA256,
	})
	if err != nil {
		s, ok := status.FromError(err)
		return nil, ok && s.Code() == codes.NotFound, err
	}

	filesByHash := make(map[string]string)
	digests := []*repb.Digest{}
	for _, out := range resultRes.OutputFiles {
		digests = append(digests, out.Digest)
		filesByHash[out.Digest.Hash] = out.Path
	}

	readRes, err := rc.cas.BatchReadBlobs(context.Background(), &repb.BatchReadBlobsRequest{
		Digests:        digests,
		DigestFunction: repb.DigestFunction_SHA256,
	})
	if err != nil {
		return nil, false, err
	}

	outputFiles := []outputFile{}
	for _, resp := range readRes.Responses {
		outputFiles = append(outputFiles, outputFile{
			path:     filesByHash[resp.Digest.Hash],
			contents: resp.Data,
		})
	}

	return &actionResult{
		action:          action,
		exitCode:        resultRes.ExitCode,
		outputFiles:     outputFiles,
		fromActionCache: true,
	}, false, nil
}

func (rc *remoteCache) digestForAction(action action) (repb.Digest, error) {
	files := []*repb.FileNode{}
	for _, input := range action.ins {
		contents, err := os.ReadFile(filepath.Join(rc.execroot, input))
		if err != nil {
			return repb.Digest{}, err
		}
		digest, err := digestForBytes(contents)
		if err != nil {
			return repb.Digest{}, err
		}
		files = append(files, &repb.FileNode{
			Name:         input,
			Digest:       &digest,
			IsExecutable: false,
		})
	}

	inputRootDigest, err := digestForMessage(&repb.Directory{
		Files: files,
	})
	if err != nil {
		return repb.Digest{}, err
	}

	cmdDigest, err := digestForMessage(&repb.Command{
		Arguments:            action.args,
		EnvironmentVariables: []*repb.Command_EnvironmentVariable{},
		OutputPaths:          action.outs,
	})
	if err != nil {
		return repb.Digest{}, err
	}

	return digestForMessage(&repb.Action{
		InputRootDigest: &inputRootDigest,
		CommandDigest:   &cmdDigest,
		Salt:            []byte("2"),
	})
}

func digestForMessage(msg proto.Message) (repb.Digest, error) {
	b, err := proto.MarshalOptions{Deterministic: true}.Marshal(msg)
	if err != nil {
		return repb.Digest{}, err
	}
	return digestForBytes(b)
}

func digestForBytes(b []byte) (repb.Digest, error) {
	hash := sha256.New()
	if _, err := hash.Write(b); err != nil {
		return repb.Digest{}, err
	}
	sha := hex.EncodeToString(hash.Sum(nil))
	return repb.Digest{
		Hash:      sha,
		SizeBytes: int64(len(b)),
	}, nil
}
