class Solution {
public:
    bool wordPattern(string pattern, string s) {

        vector<string> words;
        string token;
        int nw = 0;
        stringstream ss(s);

        while (getline(ss, token, ' ')) {
            words.push_back(token);
            nw++;
        }
        int n=pattern.length();
        if(n!=nw)return false;

        unordered_map<string, char> mp;
        set<char>st;
       for(int i=0;i<n;i++){
        string word=words[i];
        char pat=pattern[i];

        if(mp.find(word)==mp.end() && st.find(pat)==st.end()){
          mp[word]=pat;
          st.insert(pat);
        }
        else if(mp[word]!=pattern[i]){
        return false;
        }

       }
       return true;

        
    }
};