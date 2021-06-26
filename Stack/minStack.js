//描述
// 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数，并且调用 min函数、push函数 及 pop函数 的时间复杂度都是 O(1)
// push(value):将value压入栈中
// pop():弹出栈顶元素
// top():获取栈顶元素
// min():获取栈中最小元素
//
// 示例:
// 输入:    ["PSH-1","PSH2","MIN","TOP","POP","PSH1","TOP","MIN"]
// 输出:    -1,2,1,-1
// 解析:
// "PSH-1"表示将-1压入栈中，栈中元素为-1
// "PSH2"表示将2压入栈中，栈中元素为2，-1
// “MIN”表示获取此时栈中最小元素==>返回-1
// "TOP"表示获取栈顶元素==>返回2
// "POP"表示弹出栈顶元素，弹出2，栈中元素为-1
// "PSH-1"表示将1压入栈中，栈中元素为1，-1
// "TOP"表示获取栈顶元素==>返回1
// “MIN”表示获取此时栈中最小元素==>返回-1

//示例1
// 输入： ["PSH-1","PSH2","MIN","TOP","POP","PSH1","TOP","MIN"]
// 返回值：-1,2,1,-1

//牛客
let stack=[];
function push(node)
{
    // write code here
    stack.push(node);
}
function pop()
{
    // write code here
    stack.pop();
}
function top()
{
    // write code here
    return stack[stack.length-1];

}
function min()
{
    // write code here
    return Math.min(...stack);
}

//力扣

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
    return Math.min(...this.stack);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
