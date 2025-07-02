class Solution {

	private StringBuilder tree_one = new StringBuilder();
	private StringBuilder tree_two = new StringBuilder();

	private void traverse_left(TreeNode tn, StringBuilder tree_str) {

		if (tn == null) {
			tree_str.append("null");
			return;
		}

		tree_str.append(tn.val);

		traverse_left(tn.left, this.tree_one);
		traverse_left(tn.right, this.tree_two);

	}

	private void traverse_right(TreeNode tn, StringBuilder tree_str) {

		if (tn == null) {
			tree_str.append("null");
			return;
		}

		tree_str.append(tn.val);

		traverse_right(tn.right, this.tree_two);
		traverse_right(tn.left, this.tree_one);

	}

	public boolean isSymmetric(TreeNode root) {
		TreeNode left = root.left;
		TreeNode right = root.right;

		traverse_left(left, this.tree_one);
		traverse_right(right, this.tree_two);

		return this.tree_one.toString().equals(this.tree_two.toString())
	}
}
