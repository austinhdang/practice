/**
 * Problem:
 * Given a valid (IPv4) IP address, return a defanged version of that IP
 * address. 
 * 
 * A defanged IP address replaces every period "." with "[.]".
 * 
 * Example 1:
 * Input: address = "1.1.1.1"
 * Output: "1[.]1[.]1[.]1"
 * 
 * Example 2:
 * Input: address = "255.100.50.0"
 * Output: "255[.]100[.]50[.]0"
 * 
 * Constraints:
 * The given address is a valid IPv4 address.
 * 
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  // check if string is empty or null
  if (!address) return address;
  // split string into array of characters
  address = address.split('');
  let periodCount = 0;
  /* loop through string and count periods */
  for (let char of address) {
    if (char === '.') periodCount++;
  }
  let len = address.length;
  // allocate room for extra chars (add 2 extra spaces for each existing period)
  let newLength = len - 1 + 2 * periodCount;
  /* loop through array backwards and replace periods with '[.]' */
  for (let i = len - 1, j = newLength; i >= 0 && j > i; i--, j--) {
    if (address[i] === '.') {
      address[j--] = ']';
      address[j--] = '.';
      address[j] = '[';
    } else {
      address[j] = address[i];
    }
  }
  // return string converted back from array of characters
  return address.join('');
};
