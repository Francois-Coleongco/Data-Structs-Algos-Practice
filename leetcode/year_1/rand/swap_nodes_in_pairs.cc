#include <iostream>
struct ListNode {
  int val;
  ListNode *next;
  ListNode() : val(0), next(nullptr) {}
  ListNode(int x) : val(x), next(nullptr) {}
  ListNode(int x, ListNode *next) : val(x), next(next) {}
};
void print_list(struct ListNode *walk) {
  std::cout << "PRINTING LIST" << std::endl;
  for (; walk != nullptr; walk = walk->next) {
    std::cout << walk->val << " <--- value was" << std::endl;
  }
}

ListNode *swapPairs(ListNode *head) {
  struct ListNode *walk = head;
  if (head == nullptr) {
    return nullptr;
  } else if (head->next == nullptr) {
    return head;
  } else if (head->next->next == nullptr) {
    struct ListNode *old = head;
    head = head->next;
    head->next = old;
    head->next->next = nullptr;
    return head;
  }

  head = head->next;
  struct ListNode *prev = nullptr;

  for (prev = head; walk != nullptr && walk->next != nullptr;) {
    struct ListNode *future = walk->next->next;
    std::cout << "running in loop" << std::endl;
    std::cout << "thjis is walk " << walk->val << std::endl;
    std::cout << "thjis is walk NEXT " << walk->next->val << std::endl;

    if (future != nullptr) {
      std::cout << future->val << "future was" << std::endl;
    }

    if (prev != nullptr) {
      prev->next = walk->next;
    }

    struct ListNode *old_next = walk->next;
    walk->next = future;
    old_next->next = walk;

    prev = walk;
    walk = future;
  }
  return head;
}

int main() {
  struct ListNode a = ListNode();
  struct ListNode b = ListNode();
  struct ListNode c = ListNode();
  struct ListNode d = ListNode();

  a.next = &b;
  a.val = 1;
  b.next = &c;
  b.val = 2;
  c.next = &d;
  c.val = 3;
  d.next = nullptr;
  d.val = 4;

  print_list(&a);

  struct ListNode *ret = swapPairs(&a);

  print_list(ret);
}
