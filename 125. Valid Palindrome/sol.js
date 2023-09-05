var revString = (str, itr=0, rev="")=>{    
    if(itr < str.length){
        rev=str[itr]+rev;
        itr++;
        return revString(str, itr, rev);
    }
    return rev;
}
var isPalindrome = function(s) {
    let filterdStr= s.replace(/[^a-zA-Z0-9 ]/g, '').replace(/ /g,'').toLowerCase();
    return filterdStr===revString(filterdStr);
};

console.log(isPalindrome("race a car"));