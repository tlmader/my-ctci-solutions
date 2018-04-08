/**
 * Partitions a linked list around a value x, such that all nodes less than x
 * come before all nodes greater than or equal to x.
 *
 * N = |list|
 * Time: O(N)
 * Additional space: O(1)
 */
export const partitionList = (list, x) => {
  if (!list) {
    return list;
  }
  let current = list;
  let left = {};
  let right = {};
  const leftHead = left;
  const rightHead = right;
  while (current) {
    if (current.val < x) {
      left.next = current;
      left = left.next;
    } else {
      right.next = current;
      right = right.next;
    }
    current = current.next;
  }
  // Close right tail
  right.next = null;
  // Attach right head to left tail
  left.next = rightHead.next ? rightHead.next : null;
  return leftHead.next;
};
