let stack1=[];
let stack2=[];
function push(node) {
    stack1.push(node);
}

function pop() {
    if (stack2.length === 0) {
        while (stack1.length) {
            stack2.push(stack1.pop());
        }
    }
    return stack2.pop();
}

push(1);
console.log("第一个栈:"+stack1+"  第二个栈:"+stack2);
push(2);
console.log("第一个栈:"+stack1+"  第二个栈:"+stack2);
push(3);
console.log("第一个栈:"+stack1+"  第二个栈:"+stack2);
pop();
console.log("第一个栈:"+stack1+"  第二个栈:"+stack2);
pop();
console.log("第一个栈:"+stack1+"  第二个栈:"+stack2);
push(4);
console.log("第一个栈:"+stack1+"  第二个栈:"+stack2);
pop();
console.log("第一个栈:"+stack1+"  第二个栈:"+stack2);
push(5);
console.log("第一个栈:"+stack1+"  第二个栈:"+stack2);
pop();
console.log("第一个栈:"+stack1+"  第二个栈:"+stack2);
pop();
console.log("第一个栈:"+stack1+"  第二个栈:"+stack2);
