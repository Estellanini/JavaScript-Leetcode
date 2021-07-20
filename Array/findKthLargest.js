//数组中的第K个最大元素
//给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
//示例 1:
// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
//示例 2:
// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4

function findKthLargest (nums, k) {
    /*const sortnum=nums.sort((a,b)=>(b-a))
    return sortnum[k-1];*/
    return nums.sort((a,b)=>(b-a))[k-1];
};
console.log(findKthLargest([3,2,1,5,6,4],2))
