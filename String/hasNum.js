//描述
// 给定字符串 str，检查其是否包含数字，包含返回 true，否则返回 false
//示例1 输入： 'abc123'  输出：true

/*function containsNumber(str) {
    let res;
    if(str.indexOf(0||1||2||3||4||5||6||7||8||9)==-1){
        res=false;
    }
    else res=true;
    return res;
}*/
function containsNumber(str) {
    return (str.indexOf(0||1||2||3||4||5||6||7||8||9)==-1)?false:true;
}
console.log(containsNumber('abc'))
