#include <iostream>
#include <vector>

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
    search_recursive(nums, mid + 1, ((mid + 1 + (high - mid)) / 2), high, target);
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

int main() {
  std::vector<int> nums = {1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12};
  search_recursive(nums, 0, nums.size() / 2, nums.size() - 1, 8);
}
