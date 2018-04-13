/**
 * Implements an "animal shelter" where people must adopt either the "oldest" of all animals at the
 * shelter, or they can select whether they would prefer a dog or a cat.
 *
 * Time: enqueue O(1), dequeue O(N)
 * Additional space: enqueue O(N) (store index), dequeue O(1)
 */
export class AnimalShelter {

  constructor() {
    this.cats = [];
    this.dogs = [];
    this.index = 0;
  }

  enqueueCat(element) {
    this.cats.push({ value: element, index: this.index++ });
  }

  enqueueDog(element) {
    this.dogs.push({ value: element, index: this.index++ });
  }

  dequeueCat() {
    if (!this.cats.length) {
      return undefined;
    }
    return this.cats.shift().value;
  }

  dequeueDog() {
    if (!this.dogs.length) {
      return undefined;
    }
    return this.dogs.shift().value;
  }

  dequeueAny() {
    if (!this.cats.length && !this.dogs.length) {
      return undefined;
    } else if (!this.cats.length) {
      return this.dequeueDog();
    } else if (!this.dogs.length) {
      return this.dequeueCat();
    }
    return this.cats[0].index < this.dogs[0].index ? this.dequeueCat() : this.dequeueDog();
  }
}