/**
 * Problem:
 * Implement an algorithm to determine if a string has all unique characters.
 * 
 * Bonus:
 * Implement the algorithm without using a data structure.
 * 
 * @param {string} str String to analyze
 * @return True if all unique characters. False otherwise.
 */

class IsUnique {
    boolean isUniqueChars(String str) {
        if (str.length() > 128)
            return false;

        boolean[] char_set = new boolean[128];
        for (int i = 0; i < str.length(); i++) {
            int val = str.charAt(i);
            // already found this char in string
            if (char_set[val]) {
                return false;
            }
            char_set[val] = true;
        }
        return true;
    }
}