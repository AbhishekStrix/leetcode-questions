/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    let count = 0;
    let maxVal = 0;
    for (let i = 0; i < k; i++) {
        if (s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u') {
            count++
        }
    }
    maxVal = count;
    for (let i = k; i < s.length; i++) {
       if(s[i-k]=='a' || s[i-k]=='e' || s[i-k]=='i' || s[i-k]=='o' || s[i-k]=='u'){
        count--;
       }

       if(s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u'){
        count++;
       }
    maxVal = Math.max(maxVal, count)
    }
    return maxVal;
};