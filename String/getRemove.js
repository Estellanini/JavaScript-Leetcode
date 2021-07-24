//删除字符串中的指定字符，例如删除字符串中的所有b
/*function getRemove(str){
    return str.split('b').join("");
}*/


//利用正则
//这里用 new RegExp()这个方法创建正则，第一个参数“a”指定了正则表达式的模式或其他正则表达式。
// 后一个参数是一个可选的字符串，包含属性 "g"、"i" 和 "m"，分别用于指定全局匹配、区分大小写的匹配和多行匹配。
// ECMAScript 标准化之前，不支持 m 属性。
function getRemove(str){
    //var reg=new RegExp("b","g");
    return str.replace(new RegExp("b","g"),"");
}
/*function getRemove(str){
    return str.replace("b","");//这种方法只会替换第一个b，所以最后结果是不对的，aabcbacd
}*/
console.log(getRemove("aabbcbacd"));//aacacd

