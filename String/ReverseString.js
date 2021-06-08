//写出一个程序，接受一个字符串，然后输出该字符串反转后的字符串。（字符串长度不超过1000）
//输入： "abcd"   返回值："dcba"

function ReverseString( str ) {
    console.log(str.split(""));//(15) ["I", " ", "a", "m", " ", "a", " ", "s", "t", "u", "d", "e", "n", "t", "."]
    console.log(str.split(" "));//(4) ["I", "am", "a", "student."]
    return str.split("").reverse().join("");
}

ReverseString('I am a student.');


function Judge( str ) {
    console.log(str===str.split("").reverse().join(""))
    return str===str.split("").reverse().join("");
}
Judge("abcba");
