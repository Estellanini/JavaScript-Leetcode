//给出一个仅包含字符'(',')','{','}','['和']',的字符串，判断给出的字符串是否是合法的括号序列
// 括号必须以正确的顺序关闭，"()"和"()[]{}"都是合法的括号序列，但"(]"和"([)]"不合法

//输入："["  返回值：false
//输入："{[]}"  返回值：true

function isValid( s ) {
    if(s.length==1) return false;
    if(s.length%2==1) return false;
    let count=0;
    let length=s.length;
    while(count<length/2){
        s=s.replace("()","").replace("[]","").replace("{}","");
        count++;
        console.log(s.length)
        console.log(count,s)
    }
    if(s.length>0){
        return false;
    }else
        return true;
}


console.log(isValid("[](([[]]){}{[]}([]))"));
