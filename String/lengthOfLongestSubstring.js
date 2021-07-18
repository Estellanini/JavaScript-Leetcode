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

console.log(lengthOfLongestSubstring("abbcdea"))
