/**
 * Problem:
 * Write a method to replace all spaces in a string with '%20'. You may assume
 * that the string has sufficient space at the end to hold the additional
 * characters, and that you are given the "true" length of the string.
 * 
 * Example:
 * Input:  "Mr John Smith    ", 13
 * Output: "Mr%20John%20Smith"
 * 
 * @param  {string} url The string to modify
 * @param  {number} len The true length of the string
 * @return {string}     The updated string
 */

function urlify(url, len) {
  // base case - check if string is empty or null
  if (!url || len === 0) return url;
  // split string into array of characters
  url = url.split('');
  // initialize space count variable
  let spaceCount = 0;
  // loop through string and count spaces
  for (let char of url) {
    if (char === ' ') spaceCount++;
  }
  // allocate room for extra chars (add 2 extra spaces for each existing space)
  let newLength = len - 1 + 2 * spaceCount;
  // loop through array backwards and replace spaces with '%20'
  for (let i = len - 1, j = newLength; i >= 0 && j > i; i--, j--) {
    if (url[i] === ' ') {
      url[j--] = '0';
      url[j--] = '2';
      url[j] = '%';
    } else {
      url[j] = url[i];
    }
  }
  // return string converted back from array of characters
  return url.join('');
}
