#include <stdio.h>

struct ListNode {
  int val;
  struct ListNode *next;
};

struct ListNode *deleteDuplicates(struct ListNode *head) {

  struct ListNode *curr_tail = head;
  struct ListNode *walk = head;

  while (walk) {
    if (walk->val != curr_tail->val) {
      curr_tail->next = walk;
      printf("added here\n");
      curr_tail = walk;
    }
    walk = walk->next;
  }

  curr_tail->next = NULL;

  return head;
}
