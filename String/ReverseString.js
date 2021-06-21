//写出一个程序，接受一个字符串，然后输出该字符串反转后的字符串。（字符串长度不超过1000）
//输入： "abcd"   返回值："dcba"

function ReverseString( str ) {
    console.log(str.split(""));//(15) ["I", " ", "a", "m", " ", "a", " ", "s", "t", "u", "d", "e", "n", "t", "."]
    console.log(str.split(" "));//(4) ["I", "am", "a", "student."]
    return str.split("").reverse().join("");
}

//ReverseString('I am a student.');


function Judge( str ) {
    console.log(str===str.split("").reverse().join(""))
    return str===str.split("").reverse().join("");
}
Judge("abcba");



//如果在V8引擎下，并且是ACM模式，需要自己增加输入输出
/*var line=readline();
function ReverseString(str){
    return str.split(" ").reverse().join(" ");
}
console.log(ReverseString(line));*/

//或者只用一行代码解决此题
/*console.log(readline().split(" ").reverse().join(" "));*/

//去除空格
//输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
//如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。
function ReverseString1(str){
    console.log(str.trim().split(' ').filter(item => item!==''))
    //return str.trim().split(' ').filter(item => item!=='').reverse().join(' ');

}
console.log(ReverseString1("the sky  is blue"));
