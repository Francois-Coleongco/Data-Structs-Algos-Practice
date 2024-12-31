def merge(nums1: list[int], m: int, nums2: list[int], n: int) -> None:
    """
    Do not return anything, modify nums1 in-place instead.
    """
    # find out which is the longer list. the longer one is the one you iterate through

    # note if n == 0 that means we don't gotta do anything

    k = m + n - 1
    i = m - 1 # i will be the nums1 pointer
    j = n - 1 # j will be the nums2 pointer

    

    while j >= 0: # will stop essentially when j is done
        if nums1[i] < nums2[j]:
            # put nums2[j] at nums1[k]
            nums1[k] = nums2[j]
            j -= 1 # move forward on nums2
        elif i >= 0 and nums1[i] > nums2[j]:
            # put nums1[i] at k
            nums1[k] = nums1[i]
            i -= 1
        else:
            nums1[k] = nums2[j]
            j -= 1

        k -= 1

def main():

    nums1 = [2, 0]
    nums2 = [1]

    merge(nums1, 1, nums2, 1)
    print(nums1)

if __name__ == "__main__":
    main()
