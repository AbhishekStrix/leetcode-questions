class Solution {
public:
    int maxFrequencyElements(vector<int>& nums) {
        unordered_map<int, int> mp;
        int freq = 0;

        for (int& i : nums) {
            mp[i]++;
            freq = max(freq, mp[i]);
        }
        int result = 0;
        for(auto & [key,value]:mp){
            if(value==freq){
                result+=freq;
            }
        }
        return result;
    }
};