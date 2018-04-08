/**
 * Checks if a linked list is a palindrome.
 *
 * N = |list|
 * Time: O(N)
 * Additional space: O(1)
 */
export const listIsPalindrome = (list) => {
  // Find middle
  let prev = null;
  let slow = list;
  let fast = list;
  while (fast && fast.next) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }
  // If fast is not null, then palindrome has a middle character
  if (fast) {
    slow = slow.next;
  }
  // Close left half
  prev.next = null;
  // Reverse right half
  let current = slow;
  prev = null;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  // Compare left and right
  while (list && prev) {
    if (list.val !== prev.val) {
      return false;
    }
    list = list.next;
    prev = prev.next;
  }
  return true;
};
