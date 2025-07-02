/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
  ListNode *mergeTwoLists(ListNode *list1, ListNode *list2) {
    ListNode *walk1 = list1;
    ListNode *walk2 = list2;
    ListNode *head = list1->val < list2->val ? list1 : list2;
    ListNode *tail = head;

    while (walk1) {
    	if (walk2) {
		if (walk1->val < walk2->val) {
			tail->next = walk1;
		} else {
			tail->next = walk2;
			walk2 = walk2->next;
		}
		tail = tail->next;
	} else {
		tail->next = walk1;

	}

	walk1 = walk1->next;
    }
  }
};
