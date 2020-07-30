"""
Problem:
Given two strings s and t , write a function to determine if t is an anagram of
s.

Params:
s, t - strings to analyze

Returns:
True if the second string is an anagram of the first. False otherwise.

Note:
- You may assume the string contains only lowercase alphabets
"""


def isAnagram(s: str, t: str) -> bool:
    # check if strings are the same length
    if len(s) != len(t):
        return False
    # create lookup table
    lookup = {}
    # loop through first string and put chars and frequencies into the table
    for char in s:
        # if the letter exists, increment, otherwise set to 1
        if char in lookup:
            lookup[char] += 1
        else:
            lookup[char] = 1
    # loop through second string and search for characters
    for char in t:
        # if the letter doesn't exist or frequency is 0, it's not an anagram
        if (char not in lookup) or (lookup[char] <= 0):
            return False
        else:
            lookup[char] -= 1
    return True
