function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  let walk = head; // [1,2,3,4]
  while (walk.next !== null) {

    let value = walk.val;

    while (!((walk.next.val % value == 0) && (walk.val % value == 0))) {
      // while it is not the gcd, decrement value by 1
      value -= 1;
	  console.log("walking", value)
    }

	console.log("final value", value, "for", walk.val, walk.next.val)

    // while loop will terminate once value is the gcd. now we can uhm... brainnnnn do braing thiignssgiosaijijgoiwigj okay. okay new node.

    let new_node = new ListNode();

    new_node.val = value;

    new_node.next = walk.next;

    walk.next = new_node;

	walk = walk.next.next
  }

  return head
}
