const getLength = (list) => {
  let length = 0;
  while (list) {
    length++;
    list = list.next;
  }
  return length;
};

const getNext = (list, count) => {
  while (count) {
    list = list.next;
    count--;
  }
  return list;
};

/**
 * Given two (singly) linked lists, returns the intersecting node if the two
 * lists intersect.
 *
 * N = max(|listA\, |listB\)
 * Time: O(N)
 * Additional space: O(1)
 */
export const getIntersectingNode = (listA, listB) => {
  const lengthA = getLength(listA);
  const lengthB = getLength(listB);
  let difference = Math.abs(lengthA - lengthB);
  if (lengthA > lengthB) {
    listA = getNext(listA, difference);
  } else if (lengthB > lengthA) {
    listB = getNext(listB, difference);
  }
  while (listA && listB) {
    if (listA === listB) {
      return listA;
    }
    listA = listA.next;
    listB = listB.next;
  }
  return undefined;
};
