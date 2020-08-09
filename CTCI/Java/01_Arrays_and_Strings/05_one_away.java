/**
 * Problem:
 * There are three types of edits that can be performed on strings:
 * 1) Insert a character
 * 2) Remove a character
 * 3) Replace a character
 * Given two strings, write a function to check if they are one edit
 * (or zero edits) away.
 * 
 * Example:
 * pale,  ple  -> true
 * pales, pale -> true
 * pale,  bale -> true
 * pale,  bake -> false
 * 
 * @param s1 The first string to analyze
 * @param s2 The second string to analyze
 * @return True if strings are 0 or 1 edit apart. False otherwise.
 */

class OneAway {
    boolean oneEditAway(String s1, String s2) {
        // check lengths
        if (Math.abs(s1.length() - s2.length()) > 1) {
            return false;
        }

        /* Get the shorter and longer strings */
        String str1 = s1.length() < s2.length() ? s1 : s2;
        String str2 = s1.length() > s2.length() ? s2 : s1;

        int idx1 = 0, idx2 = 0;
        boolean isDifferent = false;
        while (idx1 < str1.length() && idx2 < str2.length()) {
            if (str1.charAt(idx1) != str2.charAt(idx2)) {
                // make sure this is the first difference found
                if (isDifferent)
                    return false;
                isDifferent = true;

                // on replace, move the shorter pointer
                if (str1.length() == str2.length()) {
                    idx1++;
                }
            } else {
                // if they're matching, move the shorter pointer
                idx1++;
            }
            // we always move the pointer for the longer string
            idx2++;
        }
        return true;
    }
}