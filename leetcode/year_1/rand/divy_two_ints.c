#include <stdio.h>

int divide(int dividend, int divisor) {
  int negative = 0;

  if ((dividend >= 0 && divisor < 0) || (dividend < 0 && divisor >= 0)) {
    negative = 1; // quotient should be negative
    printf("set to negative");
  }

  dividend = dividend < 0 ? -dividend : dividend; // absolute the dividend

  divisor = divisor < 0 ? -divisor : divisor; // absolute the divisor


  int count = 0;
  for (; dividend >= divisor; dividend -= divisor, ++count) {
    printf("went once");
  }
  return negative == 1 ? -count : count;
}

int main() {
  int quotient = divide(7, -3);
  printf("%d\n", quotient);
}
