//对于一个字符串，请设计一个高效算法，计算其中最长回文子串的长度。
//给定字符串A以及它的长度n，请返回最长回文子串。
//输入："abc1234321ab"
//返回值：1234321


//方法一：暴力判断是否回文(超时)
/*
function longestPalindrome(str){
    let longstr="";//记录最长回文串
    let nowstr="";//记录当前回文串
    for(let i=0;i<str.length;i++){//i记录当前遍历字符串的开始位置，循环依次向后遍历
        nowstr="";//每次新的一轮开始时，将临时记录回文串的变量清空
        for(j=i;j<str.length;j++){//每次开始循环是以当前i所在的下标位置为开始遍历字符串的起始位置，直到遍历到结束位置
            nowstr+=str.charAt(j);//逐个增加字符串的长度
            if(isPalindrome(nowstr)&&nowstr.length>longstr.length){
            //将当前的字符串传入isPalindrome进行回文判断，如果是回文串，则判断当前回文串长度是否大于之前记录的最长回文串的长度，如果大于之前的回文串，则更新之前的记录即可
                longstr=nowstr;//更新回文串
            }
        }
    }
    return longstr;//返回最终的最长的回文串
}
function isPalindrome(s){//判断是否为回文串
    return s===s.split("").reverse().join("");
}
*/


//方法2：动态规划法
/*var longestPalindrome = function(s) {
    if(s.length == 0) return '';
    let res = s[0];
    const dp = [];
    // 从后向前判断回文串，逐步延申字符串
    for(let i = s.length - 1; i >= 0; i--){
        dp[i] = [];
        for(let j = i; j < s.length; j++){
            // case1: a
            if(j - i === 0) dp[i][j] = true;
            // case2: aa
            else if(j - i == 1 && s[j] === s[i]) dp[i][j] = true;
            // state transition
            else if(s[i] === s[j] && dp[i + 1][j - 1]) dp[i][j] =true;

            // update res
            if(dp[i][j] && j - i + 1 > res.length) res = s.slice(i, j + 1);
        }
    }
    return res;
};
console.log(longestPalindrome("abc1234321ab"))*/


//方法三：中心扩展法
function search(s,l,r){
    let left=l;
    let right=r;
    while(left>=0&&right<s.length&&s[left]===s[right]){
        left--;
        right++;
    }
    return right-left-1;
}


function longestPalindrome(s){
    var start=end=0;
    for(let i=0;i<s.length;i++){
        let len1=search(s,i,i);
        let len2=search(s,i,i+1);
        var len=Math.max(len1,len2);
        if(len>end-start){
            start=i-Math.floor((len-1)/2);
            end=i+Math.floor((len/2));
        }
    }
    return s.slice(start,end+1);
}
console.log(longestPalindrome("abc1234321ab"))


//方法四：Manachar法
