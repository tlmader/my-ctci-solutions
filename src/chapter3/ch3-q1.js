/**
 * Uses a single array to implement three stacks.
 */
export class TripleStack {

  constructor() {
    this.array = [];
    this.length1 = 0;
    this.length2 = 0;
  }

  push(i, element) {
    switch (i) {
    case 1:
      this.array.unshift(element);
      this.length1++;
      break;
    case 2:
      this.array.splice(this.length1, 0, element);
      this.length2++;
      break;
    case 3:
      this.array.splice(this.length1 + this.length2, 0, element);
      break;
    }
  }

  pop(i) {
    switch (i) {
    case 1:
      if (this.length1 > 0) {
        this.length1--;
        return this.array.splice(0, 1)[0];
      }
      break;
    case 2:
      if (this.length2 > 0) {
        this.length2--;
        return this.array.splice(this.length1, 1)[0];
      }
      break;
    case 3:
      if (this.array.length > this.length1 + this.length2) {
        return this.array.splice(this.length1 + this.length2, 1)[0];
      }
      break;
    }
    return null;
  }

  peek(i) {
    switch (i) {
    case 1:
      if (this.length1 > 0) {
        return this.array[0];
      }
      break;
    case 2:
      if (this.length2 > 0) {
        return this.array[this.length1];
      }
      break;
    case 3:
      if (this.array.length > this.length1 + this.length2) {
        return this.array[this.length1 + this.length2];
      }
      break;
    }
    return null;
  }

  isEmpty(i) {
    switch (i) {
    case 1:
      return this.length1 === 0;
    case 2:
      return this.length2 === 0;
    case 3:
      return this.array.length - this.length1 - this.length2 === 0;
    }
    return null;
  }
}
