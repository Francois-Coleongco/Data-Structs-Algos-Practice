#include <algorithm>
#include <iostream>
#include <vector>

class Solution {
public:
  std::vector<int> twoSum(std::vector<int> &nums, int target) {

    std::vector cpy = nums;

    std::sort(nums.begin(), nums.end());

    int left = 0;
    int right = nums.size() - 1;

    for (; left < right;) {
      int left_val = nums[left];
      int right_val = nums[right];
      int total = left_val + right_val;
      if (total == target) {
        std::cout << "found target, returning" << "\n";
        break;
      } else if (total > target) {
        --right;
      } else if (total < target) {
        ++left;
      }
    }

    for (size_t i = 0; i < cpy.size(); ++i) {
      if (nums[left] == cpy[i]) {
        left = i;
        std::cout << "set the left in here" << std::endl;
        break;
      }
    }

    for (size_t i = 0; i < cpy.size(); ++i) {
      if (nums[right] == cpy[i] && i != left) {
        right = i;
        std::cout << "set the right in here" << std::endl;
        break;
      }
    }
    std::cout << "this is the left and right idxs " << left << " | " << right
              << "\n";

    return std::vector({left, right});
  }
};
