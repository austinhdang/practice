"""
Problem:
Given a non-empty array of digits representing a non-negative integer,
increment one to the integer. The digits are stored such that the most
significant digit is at the head of the list, and each element in the array
contains a single digit. You may also assume the integer does not contain
any leading zero, except for the number 0 itself.

Examples:
Input:  [1, 2, 3] -> the array represents the integer 123
Output: [1, 2, 4] -> the array represents the integer 124

Input:  [4, 3, 2, 1] -> the array represents the integer 4321
Output: [4, 3, 2, 2] -> the array represents the integer 4322
"""


def plusOne(digits: list[int]) -> list[int]:
    # loop through array backwards
    i = len(digits) - 1
    is_adding = True
    while is_adding:
        # if least significant digit isn't 9, add 1 and we're done
        if digits[i] != 9:
            digits[i] += 1
            is_adding = False
        # if all digits are 9, set most significant digit to 1, push 0 to end
        elif i - 1 < 0:
            digits[i] = 1
            digits.append(0)
            is_adding = False
        # if least significant digit is 9, set it to 0 and check next digit
        else:
            digits[i] = 0
            i -= 1
    return digits
