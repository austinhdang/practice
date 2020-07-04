/* Problem:
 * Write a recursive function which accepts a string and returns a new string
 * in reverse.
 * 
 * Params:
 * str - the string to reverse
 * 
 * Return:
 * A new string, which is the reverse of the string passed in
 * 
 * Examples:
 * reverse('awesome') // 'emosewa'
 * reverse('rithmschool') // 'loohcsmhtir'
 */

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}
