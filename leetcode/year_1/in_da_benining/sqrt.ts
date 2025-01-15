function binary_search(low: number, high: number, x: number) {


	let mid = Math.floor((high + low) / 2)// don't floor it like in the regular binary search because you want to preserve decimals

	if (low > high) {
		return mid
	}

	let possible_square = mid * mid

	if (x == possible_square) {
		//  is the root
		return mid
	}
	else if (x > possible_square) {
		// here the mid needs to be set higher because possible_square isn't big enough
		// new low is set to mid

		return binary_search(mid + 1, high, x) // this could skip over the root

	}
	else {
		// condition here is: x < possible_square ===> which means
		// here the mid needs to be set lower because possible_square is too large compared to x
		// new high is set to mid


		// PROBLEM IN HERE+++
		// PROBLEM IN HERE+++
		// PROBLEM IN HERE+++
		// PROBLEM IN HERE+++
		// PROBLEM IN HERE+++

		return binary_search(low, mid - 1, x)

	}
}

function mySqrt(x: number): number {

	// currently works only for whole num roots

	return binary_search(1, x, x) // starts with 1, 4, 4


};


mySqrt(8) // when it isnt a perfect square it jumps over
