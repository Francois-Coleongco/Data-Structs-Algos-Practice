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

function getIntersectionNode(
	headA: ListNode | null,
	headB: ListNode | null,
): ListNode | null {
	let seen: ListNode[] = [];

	let walkA: ListNode = headA;
	let walkB: ListNode = headB;

	while (walkA !== null || walkB !== null) {

		let ans_node: ListNode | null = null;

		if (walkA !== null) {
			if (!seen.includes(walkA)) {
				seen.push(walkA);
				walkA = walkA.next;
			}
            else {
			  ans_node = walkA
            }
		}

		if (walkB !== null) {
			if (!seen.includes(walkB)) {
				seen.push(walkB);
				walkB = walkB.next;
			}
			else {
			  ans_node = walkB
            }}

        if (ans_node !== null) {
            return ans_node
        }
	}

}

