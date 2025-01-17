/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function traverser(walk: ListNode) {
	return walk.next;
}

function getIntersectionNode(
	headA: ListNode | null,
	headB: ListNode | null,
): ListNode | null {
	let seen: Set<ListNode> = {};

	let walkA: ListNode = headA;
	let walkB: ListNode = headB;

	while (walkA !== null && walkB !== null) {

		if (seen.has(walkA.val)) {

		}
		seen.add(walkA.val)
		seen.add(walkB.val)

		walkA = traverser(walkA);
		walkB = traverser(walkB);
	}
}
