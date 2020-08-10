/**
 * Problem:
 * Assume you have a method isSubstring which checks if one word is a substring
 * of another. Given two strings, s1 and s2, write code to check if s2 is a
 * rotation of s1 using only one call to isSubstring.
 * 
 * Example:
 * Input: "waterbottle"
 * Output: true ("waterbottle" is a rotation of "erbottlewat")
 * 
 * Time Complexity: O(N), assuming isSubstring runs in O(A + B), where A and B
 * are the length of the strings.
 * 
 * @param s1 The first string to analyze
 * @param s2 The second string to analyze
 * @return True if s2 is a rotation of s1. False otherwise.
 */

class StringRotation {
    boolean isRotation(String s1, String s2) {
        int len1 = s1.length();
        int len2 = s2.length();
        // check that s1 and s2 are the same length and aren't empty
        if (len1 == len2 && len1 > 0 && len2 > 0) {
            // concatenate s1 with itself within a new buffer
            String s1Buffer = s1 + s1;
            return isSubstring(s1Buffer, s2);
        }
        return false;
    }

    /* Implementation of isSubstring function defined in the question.
     * Can only be called once. */
    boolean isSubstring(String str, String substr) {
        return str.contains(substr);
    }
}