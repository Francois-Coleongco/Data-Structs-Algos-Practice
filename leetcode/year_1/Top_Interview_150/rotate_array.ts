var rotate = function(nums, k) {
     k = k % nums.length;
    nums.unshift(...nums.splice(nums.length - k))

	console.log(nums)
}
rotate([1,2,3], 1)
