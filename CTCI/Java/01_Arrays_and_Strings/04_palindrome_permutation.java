/**
 * Problem:
 * Given a string, write a function to check if it is a permutation of a
 * palindrome. A palindrome is a word or phrase that is the same forwards and
 * backwards. A permutation is a rearrangement of letters. The palindrome does
 * not need to be limited to just dictionary words.
 * 
 * Example:
 * Input:  "Tact Coa"
 * Output: True (permutations: "taco cat", "atco cta", etc.)
 * 
 * @param str The string to analyze
 * @return True if input string is a permuation of a palindrome
 * (ignoring spaces). False otherwise.
 */

class PalindromePermutation {
    boolean isPermutationOfPalindrome(String str) {
        int numOdd = 0;
        // Frequency table to keep track of how many times a character appears
        int[] table = new int[Character.getNumericValue('z') - Character.getNumericValue('a' + 1)];
        for (char ch : str.toCharArray()) {
            int n = getCharNumber(ch);
            if (n != -1) {
                table[n]++;
                if (table[n] % 2 == 1) {
                    numOdd++;
                } else {
                    numOdd--;
                }
            }
        }
        // Only one character at most should have an odd count
        return numOdd <= 1;
    }

    /* Map each character to a number (case insensitive).
     * Non-letter characters map to -1 */
    int getCharNumber(Character ch) {
        int a = Character.getNumericValue('a');
        int z = Character.getNumericValue('z');
        int val = Character.getNumericValue(ch);
        if (a <= val && val <= z) {
            return val - a;
        }
        return -1;
    }
}