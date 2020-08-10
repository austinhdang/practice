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
 * @param  str The string to analyze
 * @return The original or "compressed" string
 */

class StringCompression {
    String compressString(String str) {
        // check final length and return the input string if it's longer
        int finalLength = getCompressedLength(str);
        if (finalLength >= str.length()) {
            return str;
        }

        // initial capacity
        StringBuilder compressedStr = new StringBuilder(finalLength);
        int numConsecutive = 0;
        // count the number of consecutive characters
        for (int i = 0; i < str.length(); i++) {
            numConsecutive++;

            /* If next character is different, increase the length */
            if (i + 1 >= str.length() || str.charAt(i) != str.charAt(i + 1)) {
                compressedStr.append(str.charAt(i));
                compressedStr.append(numConsecutive);
                numConsecutive = 0;
            }
        }
        return compressedStr.toString();
    }

    int getCompressedLength(String str) {
        int compressedLength = 0;
        int numConsecutive = 0;
        for (int i = 0; i < str.length(); i++) {
            numConsecutive++;

            /* If the next character is different, increase the length */
            if (i + 1 >= str.length() || str.charAt(i) != str.charAt(i + 1)) {
                compressedLength += 1 + String.valueOf(numConsecutive).length();
                numConsecutive = 0;
            }
        }
        return compressedLength;
    }
}