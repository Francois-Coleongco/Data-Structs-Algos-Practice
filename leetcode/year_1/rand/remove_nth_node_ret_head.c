#include <stdio.h>

struct ListNode {
  int val;
  struct ListNode *next;
};

struct ListNode *removeNthFromEnd(struct ListNode *head, int n) {

  struct ListNode *walk = head;
  struct ListNode *len_walk = head;

  size_t len = 0;

  for (; len_walk != NULL;) {
    ++len;
    len_walk = len_walk->next;
  }

  size_t idx_to_rem = len - n;

  if (idx_to_rem < 0) {
    return NULL;
  }

  if (idx_to_rem == 0) {
    return head->next;
  }

  for (size_t i = 1; i < idx_to_rem; ++i) {
    walk = walk->next;
  }

  walk->next = walk->next->next;

  return head;
}
