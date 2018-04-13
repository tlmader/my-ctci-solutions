class Stack {

  constructor() {
    this.array = [];
  }

  push(element) {
    this.array.push(element);
  }

  pop() {
    return this.array.pop();
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  isEmpty() {
    return this.array.length === 0;
  }
}

/**
 * Sorts a stack such that the smallest items are on top.
 *
 * N = |stack|
 * Time: O(N^2)
 * Additional space: O(1)
 */
export const sortStack = (stack) => {
  const cache = new Stack();
  while (stack.length) {
    let current = stack.pop();
    if (current < cache.peek()) {
      while (!cache.isEmpty()) {
        if (current && current >= cache.peek()) {
          stack.push(current);
          current = null;
        }
        stack.push(cache.pop());
      }
      if (current) {
        stack.push(current);
      }
    } else {
      cache.push(current);
    }
  }
  while (!cache.isEmpty()) {
    stack.push(cache.pop());
  }
  return stack;
};
