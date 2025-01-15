function maxProfit(prices: number[]): number {

	// buy and sell will occur before and after respectively as we go in one direction only
	
	let min_price = Infinity
	let max_prof = 0

	prices.forEach((price) => {
		min_price =	Math.min(min_price, price) // set a new minimum price if current price is less

		max_prof = Math.max(max_prof, price - min_price) // if we come across a higher number than the minimum, we can get max_profit
	})

	return max_prof


};


maxProfit([7,1,5,3,6,4])
