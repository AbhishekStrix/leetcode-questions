/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    let count = 0;
    let maxVal = 0;
    for (let i = 0; i < k; i++) {
        if ('aeiou'.includes(s[i])) {
            count++
        }
    }
    maxVal = count;
    for (let i = k; i < s.length; i++) {
       if('aeiou'.includes(s[i-k])){
        count--;
       }

       if('aeiou'.includes(s[i])){
        count++;
       }
    maxVal = Math.max(maxVal, count)
    }
    return maxVal;
};