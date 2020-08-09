/** 
 * Problem:
 * Given two strings, write a method to decide if one is a permutation of the
 * other.
 * 
 * @param s1 The first string to analyze
 * @param s2 The second string to analyze
 * @return True if one string is a permutation of the other. False
 * otherwise.
 */

class CheckPermutation {
    // Solution #1: Sort the Strings
    String sort(String str) {
        char[] content = str.toCharArray();
        java.util.Arrays.sort(content);
        return new String(content);
    }

    boolean permutation1(String s1, String s2) {
        // Cannot be permutation if strings are different lengths
        if (s1.length() != s2.length()) {
            return false;
        }
        return sort(s1).equals(sort(s2));
    }

    // Solution #2: Check if the two strings have identical character counts
    boolean permutation2(String s1, String s2) {
        // Permutations must be same length
        if (s1.length() != s2.length()) {
            return false;
        }

        // Assumption that characters are ASCII
        int[] letters = new int[128];
        for (int i = 0; i < s1.length(); i++) {
            letters[s1.charAt(i)]++;
        }

        for (int i = 0; i < s2.length(); i++) {
            letters[s2.charAt(i)]--;
            if (letters[s2.charAt(i)] < 0) {
                return false;
            }
        }
        // letters has no neg values, and therefore no pos values either
        return true;
    }
}