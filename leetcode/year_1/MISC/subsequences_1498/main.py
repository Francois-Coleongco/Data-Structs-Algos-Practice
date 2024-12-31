def quicksort(nums: list[int]):
    print("this is nums", nums)

    if len(nums) <= 1:
        return nums

    pivot = nums[-1]

    L = []
    E = []
    G = []

    for num in nums:
        if num < pivot:
            L.append(num)
        elif num > pivot:
            G.append(num)
        else:
            E.append(num)

    return quicksort(L) + E + quicksort(G)


def numSubSeq(sorted_nums: list[int], target: int):
    print(sorted_nums)
    print(target)

    i = 0


    res = []

    j = len(sorted_nums) - 1

    greatest = None

    while j >= i:
        if sorted_nums[i] + sorted_nums[j] <= target:
            greatest = j
            print("greatest", greatest)
            break
        else:
            j -= 1
            continue


    print(res)
    



# need to find THE NUMBER of subsequences in here that are under or equal to the target
# of nums, which subsequences of nums produce an int <= target


def main():

    my_nums = [1,2,3,4]

    sorted_nums = quicksort(my_nums)

    print("res", sorted_nums)

    numSubSeq(sorted_nums, 5)


if __name__ == "__main__":
    main()
