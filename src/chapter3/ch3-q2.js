/**
 * Implements a stack that has a function min which returns the minimum element.
 */
 export class StackWithMin {

   constructor() {
     this.array = [];
   }

   push(value) {
     const min = this.min();
     this.array.push({
       value,
       previousMin: typeof min === 'undefined' || value < min ? value : min
     });
   }

   pop() {
     return this.array.length
       ? this.array.pop().value
       : undefined;
   }

   min() {
     return this.array.length
       ? this.array[this.array.length - 1].previousMin
       : undefined;
   }

   isEmpty() {
     return this.array.length === 0;
   }
 }
