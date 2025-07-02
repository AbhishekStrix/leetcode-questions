class Solution {
public:
    bool isAnagram(string s, string t) {
        unordered_map<char, int> mp;
        if (s.length() != t.length())
            return false;
        for (char& ch : s) {
            mp[ch]++;
        }

        for (char& ch : t) {
            mp[ch]--;

            if (mp[ch] < 0) {
                return false;
            }
        }

        return true;
    }
};