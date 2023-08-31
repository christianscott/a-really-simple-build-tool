package main

import "testing"

func TestTopoSort(t *testing.T) {
	dg := digraph{edges: make(map[string]stringSet)}
	dg.insert("a", "b")
	dg.insert("b", "c")
	dg.insert("c", "d")
	sorted, err := dg.toposort()
	if err != nil {
		t.Fatal(err)
	}
	if len(sorted) != 4 {
		t.Fatal("expected 4 nodes in sorted graph")
	}
	if !stringArrEqual(sorted, []string{"a", "b", "c", "d"}) {
		t.Fatal("unexpected sorted graph")
	}
}

func stringArrEqual(a, b []string) bool {
	if len(a) != len(b) {
		return false
	}
	for i, v := range a {
		if b[i] != v {
			return false
		}
	}
	return true
}
