/**
 * Adds two numbers, each represented by a linked list, and returns the sum as a
 * linked list.
 *
 * Modifies listA in-place and attaches the remaining nodes in listB if listA
 * is shorter.
 *
 * N = max(|listA|, |listB|)
 * Time: O(N)
 * Additional space: O(1)
 */
export const addSumLists = (listA, listB) => {
  let currentA = listA;
  let currentB = listB;
  let carry;
  while (currentA) {
    if (currentB) {
      currentA.val += currentB.val;
    }
    if (currentA.val > 9) {
      currentA.val -= 10;
      carry = true;
    }
    if (!currentA.next && currentB) {
      currentA.next = currentB.next;
      currentB = null;
    }
    if (carry) {
      if (!currentA.next) {
        currentA.next = { next: null, val: 0 };
      }
      currentA.next.val += 1;
      carry = false;
    }
    currentA = currentA.next;
    if (currentB) {
      currentB = currentB.next;
    }
  }
  return listA;
};
