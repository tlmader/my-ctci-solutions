/**
 * Implements a set of stacks that starts a new stack when the previous stack exceeds some
 * threshold.
 *
 * N = number of elements
 * M = |maxSize|
 * Time: push O(1), pop O(1), popAt O(N)
 * Additional space: push O(1), pop O(1),
 *   popAt O(M) (assuming Array.splice uses a tempArray to shift)
 */
export class SetOfStacks {

  constructor(maxSize) {
    if (!maxSize) {
      throw new Error('maxSize argument is required');
    }
    this.maxSize = maxSize;
    this.stacks = [[]];
  }

  push(element) {
    if (this.currentStack.length === this.maxSize) {
      this.stacks.push([]);
    }
    this.currentStack.push(element);
  }

  pop(index = this.stacks.length - 1) {
    const stack = this.stacks[index];
    if (stack.length) {
      const element = stack.pop();
      if (stack.length === 0 && this.stacks.length > 1) {
        this.stacks.splice(index, 1);
      }
      return element;
    }
    return undefined;
  }

  isEmpty() {
    return this.currentStack.length === 0;
  }

  popAt(index) {
    index--; // index used in spec starts at 1
    const element = this.stacks[index] && this.stacks[index].pop();
    for (let i = index; i < this.stacks.length - 1; i++) {
      if (this.stacks[i].length < this.maxSize) {
        this.stacks[i].push(this.stacks[i + 1].splice(0, 1)[0]);
        if (this.stacks[i + 1].length === 0) {
          this.stacks.splice(i + 1, 1);
        }
      }
    }
    return element;
  }

  get currentStack() {
    return this.stacks[this.stacks.length - 1];
  }
}
