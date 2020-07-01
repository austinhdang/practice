"""
a: the array to be rotated
d: the number of left rotations

Print a single line of n space-separated integers denoting the final state of
the array after performing d left rotations
"""


def leftRotation(a, d):
    newArray = a[d:] + a[:d]
    return " ".join(map(str, newArray))
