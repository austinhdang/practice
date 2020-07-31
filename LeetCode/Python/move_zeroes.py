"""
Problem:
Given an array nums, write a function to move all 0's to the end of it while
maintaining the relative order of the non-zero elements.

Example:
Input: [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]

Note:
- You must do this in-place without making a copy of the array.
- Minimize the total number of operations.
"""


def moveZeroes(nums: [int]) -> None:
    """
    Do not return anything, modify nums in-place instead.
    """
    nonZeroIdx = 0
    for i in range(len(nums)):
        # if the current element is not 0
        if nums[i] != 0:
            # put the non-zero elements at the beginning of the list
            nums[nonZeroIdx] = nums[i]
            nonZeroIdx += 1
    # fill in the remainder of the list with 0's
    for i in range(nonZeroIdx, len(nums)):
        nums[i] = 0
