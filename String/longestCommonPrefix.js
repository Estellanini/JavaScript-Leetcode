//编写一个函数来查找字符串数组中的最长公共前缀。
//示例1
//输入：["abca","abc","abca","abc","abcc"]
//返回值："abc"

//思路一：先排序，然后只比较第一个字符串与最后一个字符串
function longestCommonPrefix( strs ) {
    if(!strs.length) return '';
    if(strs.length === 1) return strs[0];
    strs.sort();
    let first=strs[0];
    let last=strs[strs.length-1];
    let res='';
    for(let i=0;i<first.length;i++){
        if(first[i]===last[i]){
            res+=first[i]
        }else{
            break;
        }
    }
    return res;
}

var longstrs=["abca","abc","abca","abc","abcc"]
longestCommonPrefix( longstrs )
