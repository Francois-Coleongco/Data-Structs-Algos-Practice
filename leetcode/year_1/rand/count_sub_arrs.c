#include <stdio.h>
int countSubarrays(int *nums, int numsSize) {
  int counter = 0;
  for (size_t i = 2; i < numsSize; ++i) {
    float first_num = nums[i - 2];
    float second_num = nums[i - 1];
    float third_num = nums[i];

    if (first_num + third_num == second_num / 2) {
      ++counter;
    }
  }

  return counter;
}

int main() {
  int arr[] = {-1, -4, -1, 4};
  printf("subarrs: %d\n", countSubarrays(arr, 4));
}
