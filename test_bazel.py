import unittest

from bazel import InternalAction, Label

class ActionTest(unittest.TestCase):
    def test_survives_serialization(self):
        action = InternalAction(
            target=Label("//:one"),
            args=["echo", "hello"],
            outs=[Label("//:output.txt")],
            srcs=[Label("//:input.txt")],
        )
        self.assertEqual(action, InternalAction.deserialize(action.serialize()))

if __name__ == '__main__':
    unittest.main()
