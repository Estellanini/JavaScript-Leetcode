//给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
//输入：[7,1,5,3,6,4]   输出：5
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

//解题思路
// 首先我们需要写出状态转换方程，那以什么为状态呢？题目要求最大利润，我们可以定义f(i)为 在第i天时股票可以获取的最大利润
// f(i)的值跟什么有关呢，此时就是最重要的一步发现重叠子问题，股票可能是在第i-1天前卖出的，也可能是在第i天卖出的，要取两者的最大值，
// 所以可以写出方程：**f(i) = Max(f(i-1), prices[i]-minprice)**其中的 minprice 为第i天之前的最低股票价格
// 接下来可以使用dp数组来存储f(i)的值
// 确定base case: dp[0] = 0 //在第0天没有买入股票，最大利润为0
// dp[i] = Max(dp[i-1], prices[i]-min)
// 因为每次用到的dp[i],均是dp[i-1]即第i-1天前可以获取的最大利润，只需要一个变量即可
// 此时可以进一步维护dp数组，将其直接用 maxprofit 代替：
// maxprofit = Math.max(maxprofit, prices[i]-minprice)
// 而初始状态的 maxprofit 即为0

function maxProfit_1(prices) {
    let Min=Number.MAX_VALUE;
    let MaxProfit=0;
    for(let i=0;i<prices.length;i++){
        Min=Math.min(Min,prices[i]);
        MaxProfit=Math.max(MaxProfit,prices[i]-Min);
    }
    return MaxProfit;
}

console.log(maxProfit_1([7,1,5,3,6,4]))//5
