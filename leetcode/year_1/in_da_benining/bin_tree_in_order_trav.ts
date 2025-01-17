/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/*
 * */

function inorderTraversal(root: TreeNode | null): number[] {

	let ans: number[] = []

	let stack: TreeNode[] = [root]

	let node = stack.pop()

	// go left most, recording all to stack. 

	while (stack.length > 0) { // we still ahve stuff to look through

		while (node !== null) {
			stack.push(node) // this pushes root back initially
			node = node.left
		}
		// at this point we have reached left most. therefore we should record the value of node

		node = stack.pop()
		ans.push(node.val)

		node = node.right

	}

	
    
};
