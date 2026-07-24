/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const st= new Set();
    let left=0;
    let right =0;
    let mx=0;
    let count=0;
    while(right<s.length){
        if(st.has(s[right])){
            st.delete(s[left]);
            left++;
            count--;
        }
        else{
            st.add(s[right]);
            count++;
            right++;
            mx=Math.max(count,mx)
        }
    }
    return mx;
};