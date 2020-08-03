/**
 * Problem:
 * Design a stack that supports push, pop, top, and retrieving the minimum
 * element in constant time.
 * 
 * Constraints:
 * Methods pop, top, and getMin operations will always be called on non-empty
 * stacks.
 */

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.size = 0;
};

/** 
 * Push element onto stack.
 * @param {number} x Value of the element
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  let min;
  this.size === 0 ? (min = x) : (min = Math.min(x, this.getMin()));
  this.stack.push({ val: x, min });
  this.size++;
};

/**
 * Removes the element on top of the stack.
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop();
  this.size--;
};

/**
 * Get the top element.
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[size - 1].val;
};

/**
 * Retrieve the minimum element in the stack.
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.stack[size - 1].min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
