/**
 * Removes duplicates from an unsorted linked list.
 * Stores each unique value in a set to check for duplicates.
 *
 * N = |list|
 * Time: O(N)
 * Additional space: O(N)
 */
export const removeDuplicatesSet = (list) => {
  if (!list) {
    return list;
  }
  let current = list;
  const set = new Set();
  set.add(current.val);
  while (current.next) {
    if (set.has(current.next.val)) {
      // Remove the node
      current.next = current.next.next;
    } else {
      // Store the node's value
      set.add(current.next.val);
      current = current.next;
    }
  }
  return list;
};
