function kthFactor(n: number, k: number): number {
  // check only i = 2 to i = square root of n. do the modulus of n % i and see if it's 0. if it is 0 then append to factors list. then just index into the list using k and return that
  const square_root_n = Math.sqrt(n); // cant go over this, so in the loop below can just iterate i in whole numbers and check <= since i will always be whole, it will either be under or over square_root_n

  let factors: number[] = [1, n];

  for (let i = 2; i <= square_root_n; i++) {
    if (n % i == 0) {
      factors.push(i);

      if (n % (n / i) === 0 && !factors.includes(n / i)) {
        factors.push(n / i);
      }
    }
  }

  factors.sort((a, b) => a - b);
  console.log(factors);

  if (factors[k - 1] !== undefined) {
    return factors[k - 1];
  } else {
    return -1;
  }
}

console.log(kthFactor(12, 3));
