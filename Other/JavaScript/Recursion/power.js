/* Problem:
 * Write a function that accepts a base and an exponent. The function should
 * return the power of the base to the exponent. This function should mimic the
 * functionality of Math.pow() - do not worry about negative bases and
 * exponents.
 * 
 * Params:
 * base - the base number
 * exponent - the exponent
 * 
 * Return:
 * The power of the base to the exponent
 * 
 * Examples:
 * power(2, 0) // 1
 * power(2, 1) // 4
 * power(2, 4) // 16
 */

function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}
