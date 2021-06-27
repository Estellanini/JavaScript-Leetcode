//描述
// 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。
// 假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，
// 但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）
//示例1
// 输入：[1,2,3,4,5],[4,3,5,1,2]
// 返回值：false

function IsPopOrder(pushV, popV) {
    let stack1=[];
    for(let i=0;i<pushV.length;i++){
        stack1.push(pushV[i]);
        console.log("向stack1中推入pushV    stack1:",stack1,"  popV:",popV)
        let recordlength=stack1.length;
        for(let i=0;i<recordlength;i++){
            if(stack1[stack1.length-1]===popV[0]){
                console.log("双双出栈元素：",popV[0]);
                popV.shift();
                stack1.pop();
                console.log("如果推入stack1的元素与popV栈顶相同，则双双出栈   stack1:",stack1,"  popV:",popV);
            }
        }
    }
    console.log("此时pushV中的元素已全部推入stack1   stack1:",stack1,"popV:",popV);
    return  (popV.length===0)?true:false;
}

console.log(IsPopOrder([1,2,3,4,5],[4,3,5,1,2]))//flase
