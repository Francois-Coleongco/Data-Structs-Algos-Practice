# https://leetcode.com/problems/median-of-two-sorted-arrays/description/
# using .sort would use a little less memory since it just replaces the old list

def findmedian(nums1 = [5,6,7,8], nums2 = [1,2,3,4,5]):

    a = nums1 + nums2

    b = sorted(a)

    print(b)

    index1 = round((len(a) / 2), 1) - 1

    print(index1)

    if ((index1 % 1) == 0):
        # round number
        index1 = int(index1)
        print(index1)
        print("sup")
        print(b[index1])

        ceil = index1 + 1
        floor = index1

        c = b[ceil]
        d = b[floor]
        

        return (d + ((c - d) / 2))
    
    else:
        index1 = int(index1 + 0.5)
        print(index1)
        return b[index1]
        # floating point
        
    #b[index2]

    #if len(b) % 2:
    #    return b[index1]
    #else:
    #    return b[index1]
        
