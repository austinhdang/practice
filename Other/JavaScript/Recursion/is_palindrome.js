/* Problem:
 * Write a recursive function that returns true if the string passed to it is
 * a palindrome (reads the same forward and backward). Otherwise it returns
 * false.
 * 
 * Params:
 * str - the string to analyze
 * 
 * Return:
 * True or false if the string passed in is a palindrome.
 * 
 * Examples:
 * isPalindrome('awesome') // false
 * isPalindrome('foobar') // false
 * isPalindrome('tacocat') // true
 * isPalindrome('amanaplanacanalpanama') // true
 * isPalindrome('amanaplanacanalpandemonium') // false
 */

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}
