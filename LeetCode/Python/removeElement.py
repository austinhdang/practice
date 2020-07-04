"""
Problem:
Given an array of integers and a value, remove all instances of that value
in-place and return the new length.

Do not allocate new space for another array. You must do this by modifying the
input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond
the new length.

Params:
nums - the array of integers to remove from
val - the value to remove from the array

Returns:
The new length of the array with the values removed.

Examples:
removeElement([3, 2, 2, 3], 3) # 2
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2) # 5
"""


def removeElement(nums, val):
    count = 0
    for i in range(len(nums)):
        if nums[i] != val:
            nums[count] = nums[i]
            count += 1
    return count
