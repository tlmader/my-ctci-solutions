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
 * Implements a queue using two stacks.
 *
 * N = number of elements
 * Time: enqueue O(N), dequeue O(1)
 */
export class MyQueue {

  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(element) {
    // Move elements to stack 2
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(element);
    // Move elements back to stack 1
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {
    if (this.stack1.isEmpty()) {
      throw new Error('queue is empty');
    }
    return this.stack1.pop();
  }
}