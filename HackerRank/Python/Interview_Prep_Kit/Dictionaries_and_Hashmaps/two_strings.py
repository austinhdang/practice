"""
Problem:
Given two strings, determine if they share a common substring.

Params:
-   s1, s2: two strings to analyze
Returns:
-   A string, either YES or NO based on whether the strings share a common
    substring.
"""


def twoStrings(s1, s2):
    if any(i in s2 for i in s1):
        return "YES"
    else:
        return "NO"
