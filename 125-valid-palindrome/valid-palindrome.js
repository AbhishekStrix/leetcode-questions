/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    if(s.length==0)return true;
    let i=0;
    let j=s.length-1;
    var ans=true;
     while(i<j){
        if(s[i]!=s[j]){
         return  ans=false;
        }
       i++;
       j--;
     }
     return ans;

};