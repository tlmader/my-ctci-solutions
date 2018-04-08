/**
 * Given a circular linked list, returns the node at the beginning of the loop.
 *
 * 
 */
export const getLoopNode = (list) => {
  if (!list) {
    return null;
  }
  const set = new Set();
  while (list.next) {
    if (set.has(list)) {
      return list;
    }
    set.add(list);
    list = list.next;
  }
  return null;
};
