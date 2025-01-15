function removeDuplicates(nums: number[]): number {

	const nums_length = nums.length

	let g = 1 // offset by one because the first at index 0 is unique

	for (let i = 0; i < nums_length - 1; i++) {
		if (nums[i] !== nums[i+1]) {
			nums[g] = nums[i+1]
			g++
		}
	}

	return g
    
};


removeDuplicates([0,0,1,1,1,2,2,3,3,4])
