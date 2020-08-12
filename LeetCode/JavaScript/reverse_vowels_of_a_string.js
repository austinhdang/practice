/**
 * Problem:
 * Write a function that takes a string as input and reverse only the vowels of
 * a string.
 * 
 * Example 1:
 * Input: "hello"
 * Output: "holle"
 * 
 * Example 2:
 * Input: "leetcode"
 * Output: "leotcede"
 * 
 * Note:
 * The vowels does not include the letter "y".
 * 
 * @param {string} s The string to modify
 * @return {string} The input string with the vowels reversed
 */

var reverseVowels = function(s) {
  if (!s) return s;

  let p1 = 0;
  let p2 = s.length - 1;
  let isP1Vowel, isP2Vowel;
  const vowels = new Set([ 'a', 'e', 'i', 'o', 'u' ]);
  s = s.split('');
  while (p1 <= p2) {
    /* Check if characters are vowels */
    isP1Vowel = vowels.has(s[p1].toLowerCase());
    isP2Vowel = vowels.has(s[p2].toLowerCase());

    // if character at pointer 1 is not a vowel, increment pointer
    if (!isP1Vowel) p1++;
    // if character at pointer 2 is not a vowel, decrement pointer
    if (!isP2Vowel) p2--;
    /* If chars are vowels, swap and increment/decrement respective pointers */
    if (isP1Vowel && isP2Vowel) {
      [ s[p1], s[p2] ] = [ s[p2], s[p1] ];
      p1++;
      p2--;
    }
  }
  return s.join('');
};
