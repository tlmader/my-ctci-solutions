/**
 * Returns the value of the Kth to last node in a linked list.
 *
 * N = |list|
 * Time: O(N)
 * Additional space: O(1)
 */
export const getKthToLast = (list, k) => {
  if (!list) {
    throw new Error('invalid list');
  }
  let i = 0;
  let kNode = list;
  while (list.next) {
    i++;
    if (i > k) {
      kNode = kNode.next;
    }
    list = list.next;
  }
  if (i < k) {
    throw new Error('list is not long enough');
  }
  return kNode.val;
};
