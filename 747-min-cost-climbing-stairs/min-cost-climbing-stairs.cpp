class Solution {
public:
    int minCostClimbingStairs(vector<int>& cost) {
        int n= cost.size();
        int first=cost[0];
        int second=cost[1];
        for(int i=2;i<n;i++){
            int sum= cost[i]+min(first,second);
            first=second;
            second=sum;
        }
        return min(first,second);
    }
};