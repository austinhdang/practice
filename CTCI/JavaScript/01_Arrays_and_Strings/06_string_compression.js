/**
 * Problem:
 * Implement a method to perform basic string compression using the counts of
 * repeated characters. If the "compressed" string would not become smaller
 * than the original string, your method should return the original string.
 * You can assume the string has only uppercase and lowercase letters (a - z).
 * 
 * Example:
 * Input: aabcccccaaa
 * Output: a2b1c5a3
 * 
 * @param  {string} str The string to analyze
 * @return {string}     The original or "compressed" string
 */

function compressString(str) {
  if (!str) return null;
  let compressedStr = '';
  let charCount = 0;
  // loop through string
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // if current character is not the first and is different than the previous
    if (char !== str[i - 1] && i > 0) {
      // add the previous character and its frequency to compressed string
      compressedStr += str[i - 1] + charCount;
      // reset counter for current character
      charCount = 1;
    } else {
      charCount++;
    }
  }
  // return compressed string if shorter than original, otherwise original
  return compressedStr.length < str.length ? compressedStr : str;
}
