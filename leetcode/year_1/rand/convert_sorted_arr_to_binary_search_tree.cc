#include <iostream>
#include <vector>

struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode() : val(0), left(nullptr), right(nullptr) {}
  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
  TreeNode(int x, TreeNode *left, TreeNode *right)
      : val(x), left(left), right(right) {}
};

class Solution {
    TreeNode root;
private:
  TreeNode 
public:
  TreeNode *sortedArrayToBST(std::vector<int> &nums) {
    size_t len = nums.size();
    size_t mid_idx = len / 2;




  }
};
