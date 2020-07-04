"""
Problem:
Given an array of integers, write a function that returns true if and only if
the number of occurrences of each value in the array is unique.

Params:
arr - the array of integers to analyze

Returns:
True if the number of occurrences of each value in the array is unique.
Otherwise return false.

Examples:
uniqueOccurrences([1, 2, 2, 1, 1, 3]) # true
uniqueOccurrences([1, 2]) # false
uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]) # true
"""


def uniqueOccurrences(arr):
    occurrences = []
    for i in set(arr):
        occurrence = arr.count(i)
        if occurrence in occurrences:
            return False
        else:
            occurrences.append(occurrence)
        return True
