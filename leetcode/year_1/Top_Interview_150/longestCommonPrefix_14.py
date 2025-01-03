def longestCommonPrefix(strs: list[str]) -> str:

    shortest_str_len = float("inf") # initialize as inf so if shortest is ever returned as -1 to next logic, we know some weird ass error occurred

    for i in range(len(strs)):
        if shortest_str_len > len(strs[i]):
            shortest_str_len = len(strs[i])

    longest_pref = ""

    if isinstance(shortest_str_len, int):
        for i in range(shortest_str_len):

            old = strs[0][i] # init with first char

            same = True

            for s in strs:

                if s[i] != old:
                    # not same and should not be appended. cut off
                    same = False


            if same == True:
                longest_pref += old
            else:
                break

        return longest_pref
    else:
        return ""

        
def main():

    strs = ["cat", "cash", "cam"]
    print(longestCommonPrefix(strs))

if __name__ == "__main__":
    main()
