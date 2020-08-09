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
 * @param url The string to modify
 * @param trueLength The true length of the string
 */

class URLify {
    void urlify(char[] str, int trueLength) {
        int spaceCount = 0, i = 0;
        for (i = 0; i < trueLength; i++) {
            if (str[i] == ' ') {
                spaceCount++;
            }
        }
        int index = trueLength + spaceCount * 2;
        if (trueLength < str.length) {
            // end array
            str[trueLength] = '\0';
        }
        for (i = trueLength - 1; i >= 0; i--) {
            if (str[i] == ' ') {
                str[index - 1] = '0';
                str[index - 2] = '2';
                str[index - 3] = '%';
                index -= 3;
            } else {
                str[index - 1] = str[i];
                index--;
            }
        }
    }
}