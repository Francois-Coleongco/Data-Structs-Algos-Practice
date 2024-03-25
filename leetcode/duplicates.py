# https://leetcode.com/problems/find-all-duplicates-in-an-array/description/

class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        
        counter = set()

        new = []

        for i in nums:

            if i in counter:
                # second time
                new.append(i)
            counter.add(i)

        print(counter)

        print(new)

        return new