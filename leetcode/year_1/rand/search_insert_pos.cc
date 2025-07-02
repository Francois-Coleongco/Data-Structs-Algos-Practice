#include <iostream>
#include <vector>

class Solution {
  int arr[5] = {1, 2, 3, 4, 5};

private:
  int search_recursive(std::vector<int> &nums, int low, int mid, int high,
                       int target) {
    if (low > high) {
      std::cout << "NOT FOUND\n";
      std::cout << "should be at " << mid << std::endl;
      return 1;
    }
    if (target < nums[mid]) {
      std::cout << "called first" << std::endl;
      search_recursive(nums, low, low + ((mid - 1 - low) / 2), mid - 1, target);
    } else if (nums[mid] < target) {
      std::cout << "called second" << std::endl;
      search_recursive(nums, mid + 1, ((mid + 1 + (high - mid)) / 2), high,
                       target);
    } else {
      if (target == nums[mid]) {
        std::cout << "found at " << mid << std::endl;
      } else {
        std::cout << "should be at " << mid << std::endl;
      }
      return 0;
    }
    return 0;
  }

public:
  int searchInsert(std::vector<int> &nums, int target) {}
};
