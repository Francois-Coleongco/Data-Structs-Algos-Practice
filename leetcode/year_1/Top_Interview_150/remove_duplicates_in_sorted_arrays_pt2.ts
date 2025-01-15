function removeDuplicates(nums: number[]): number {

	const nums_length = nums.length

	let g = 1 // offset by one because the first at index 0 is unique

	let two_count = 1

	for (let i = 0; i < nums_length - 1; i++) {
		if (nums[i] !== nums[i+1]) {
			two_count = 0
			nums[g] = nums[i+1]
			g++
			// we encountered first time here
			two_count++
		}
		else {
			two_count++
			if (two_count === 2) {
				nums[g] = nums[i+1]
				g++

			} 
		}

	}


	return g
    
};


removeDuplicates([0,0,1,1,1,2,2,3,3,4])
