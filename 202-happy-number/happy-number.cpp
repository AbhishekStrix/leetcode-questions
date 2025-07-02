class Solution {
public:
    bool isHappy(int n) {
        unordered_set<int> mp;
        while (n != 1 && mp.find(n) == mp.end()) {
            mp.insert(n);
            n = sumofSquares(n);
        }
          return n == 1;
    }
        int sumofSquares(int n) {
            int ni = 0;
            int rem=0;
            while (n > 0) {
                rem = n % 10;
                ni += rem * rem;
                n = n / 10;
            }
            return ni;
        }

};