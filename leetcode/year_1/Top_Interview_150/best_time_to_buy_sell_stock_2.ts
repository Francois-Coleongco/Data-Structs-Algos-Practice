function maxProfit(prices: number[]): number {
  // buy and sell will occur before and after respectively as we go in one direction only

  let min_price = Infinity;

  let total = 0;

  let x = 0

  while (x < prices.length - 1) {
    console.log(min_price);
    min_price = Math.min(min_price, prices[x]);

	if ((prices[x]-min_price) > (prices[x+1]-min_price)) {
		console.log("attempt to sell", prices[x], "-", min_price)
	min_price = Infinity


	}
	else {
		console.log("dont attempt to sell", prices[x+1], "-", min_price)

		console.log("don't sell")
	}


    x += 1;
  }



  console.log(total);
}

maxProfit([1, 2, 3, 4, 5,3]);
