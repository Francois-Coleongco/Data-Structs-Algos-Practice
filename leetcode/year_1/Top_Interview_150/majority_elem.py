def majorityElement(nums: list[int]) -> int|None:
    
    major_elem = None

    seen: dict[int, int] = {}
    for i in nums:
        if i in seen:
            seen[i] += 1
        else:
            seen[i] = 1
    
    items_in_seen = seen.items()
    freqs_in_seen = seen.values()

    highest_freq = max(freqs_in_seen)

    for i in range(len(items_in_seen)):
        for key, value in items_in_seen:
            if value == highest_freq:
                major_elem = key

    return major_elem

def main():
    print(majorityElement([1,1,2,4,5]))

if __name__ == "__main__":
    main()
