class Solution {
public:
    int divide(int dividend, int divisor) {
        int negative = 0;

        dividend = dividend < 0 ? -dividend : dividend; // absolute the dividend

        divisor = divisor < 0 ? -divisor : divisor; // absolute the divisor

        if ((dividend >= 0 && divisor < 0) || (dividend< 0 && divisor >= 0)) {
            negative = 1; // quotient should be negative
        }

        int count = 0;
        for (;dividend > 0; dividend -= divisor, ++count) {
        }
        return negative == 0 ? -count : count;
    }
};
