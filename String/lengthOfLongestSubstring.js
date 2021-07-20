//无重复字符的最长子串
//给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
//示例 1:
// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
//示例 2:
// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
//示例 3:
// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
//示例 4:
// 输入: s = ""
// 输出: 0

//滑动窗口法
//解题思路
// 1、用双指针维护一个滑动窗口，用来剪切子串。
// 2、不断移动右指针，直到遇到重复字符的时候把左指针移到前面的重复字符的下一位。（相当于把前面的重复字符删除）
// 3、移动指针过程中，记录窗口长度的最大值即为答案。

function lengthOfLongestSubstring(s){
    let l=0;
    let res=0;
    let map=new Map();
    for(let r=0;r<s.length;r++){
        if(map.has(s[r])&& map.get(s[r]) >= l){
            l=map.get(s[r])+1;
        }
        console.log(s.slice(l,r+1))
        res=Math.max(res,r-l+1);
        map.set(s[r],r);
        console.log("map",map)
    }
    return res;
}

//遍历法
//代码的思路比较简单，就是维护一个数组arr，对原字符串遍历，判断字符是否在arr里面，
// 不在的话就直接push进去，再重新判断max的大小；
// 在的话就将之前重复arr字符之前的项全部去除，再重新push进去。

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let arr = [];
    let max = 0;
    for(let item of s){
        if(arr.includes(item)){
            let index = arr.indexOf(item);
            arr.splice(0, index + 1);
        }
        arr.push(item);
        max = max > arr.length ? max : arr.length;
    }
    return max;
};

console.log(lengthOfLongestSubstring("abbcdea"))
