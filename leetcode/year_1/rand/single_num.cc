#include <vector>
class Solution {
public:
  int singleNumber(std::vector<int> &nums) {
    int res = nums[0];
    size_t size = nums.size();

    for (size_t i = 1; i < size; ++i) {
      res ^= nums[i];
    }

    return res;
  }
};
