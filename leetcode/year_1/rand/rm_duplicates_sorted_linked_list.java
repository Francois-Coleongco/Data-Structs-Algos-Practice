public class ListNode {
	int val;
	ListNode next;

	ListNode() {
	}

	ListNode(int val) {
		this.val = val;
	}

	ListNode(int val, ListNode next) {
		this.val = val;
		this.next = next;
	}
}

class Solution {
	public ListNode deleteDuplicates(ListNode head) {

		ListNode tail = head;

		ListNode walk = tail;

		while (walk != null) {
			if (walk.val != tail.val) {

				tail.next = walk;
				tail = walk;
			}
			walk = walk.next;
		}

		return tail;

	}
}
