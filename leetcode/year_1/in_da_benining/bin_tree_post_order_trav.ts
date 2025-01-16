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

function preorderTraversal(root: TreeNode | null): number[] {

    let prev = []

    if (root === null) {
        return []
    }
    if (root.left !== null) {
        console.log("on root.left", root.left)
        prev = prev.concat(preorderTraversal(root.left))
    }
    if (root.right !== null) {
        console.log("on root.right", root.right)
        prev = prev.concat(preorderTraversal(root.right))
    }

    console.log(
        "this is prev", prev
    )

    return [root.val, ...prev]

};
