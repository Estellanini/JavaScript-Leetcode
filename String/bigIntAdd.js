//大数加法
//以字符串的形式读入两个数字，编写一个函数计算它们的和，以字符串形式返回。
// （字符串长度不大于100000，保证字符串仅由'0'~'9'这10种字符组成）
function bigintAdd(s,t){
    let maxLength=Math.max(s.length,t.length);
    s=s.padStart(maxLength,0);
    t=t.padStart(maxLength,0);
    let bit=0;
    let f=0;//进位
    let sum="";
    for(let i=maxLength-1;i>=0;i--){
        bit=parseInt(s[i])+parseInt(t[i])+f;
        f=Math.floor(bit/10);
        sum=bit%10+sum;
    }
    if(f==1) {
        sum="1"+sum;
    }
    return sum;
}

console.log(bigintAdd(9007199254740991,1234567899999999999))//结果为：1243575099254740990
