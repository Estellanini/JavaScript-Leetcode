//长度最小的子数组
//给定一个含有 n 个正整数的数组和一个正整数 target 。
// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

/*解题思路
定义左右两个指针，一开始都指向头部。
右指针遍历数组。
若找到满足条件的子数组，记录min，并将左指针右移1。
若还满足条件，继续右移左指针，更新min，一直到不满足条件为止。
然后右指针继续遍历。重复3、4步骤
右指针遍历完毕后，结束。返回min。*/


/*function minSubArrayLen (target, nums) {
    // 数组长度
    const len = nums.length;
    // 定义左指针、右指针、和、最小长度
    // 最先长度初始值比len大
    let left = 0,
        right = 0,
        sum = 0,
        min = len + 1;
    // 右指针没走到头，就一直遍历
    while (right < len) {
        // 右指针走过的数累加到sum
        sum += nums[right];

        // 一旦sum>=target，就不断地走左指针
        while (sum >= target) {
            // 更新最小值
            // console.log(sum,min,right,left,right-left + 1)
            min = min < right - left + 1 ? min : right - left+1;
            // 先将左指针指的数移出sum，再将左指针右移1
            sum -= nums[left];
            left++;
        }
        // 不符合条件了，就继续走右指针
        right++;
    }
    // 若min变化过，则肯定不满足min > len，返回min
    // 没变化过，代表遍历完后没有找到符合条件的，返回0
    return min > len ? 0 : min;
}*/

//console.log(minSubArrayLen1(15,[5,1,3,5,10,7,4,9,2,8]));//2

//更简洁的代码
/*function minSubArrayLen(target, nums) {
    let len=nums.length;
    let left=0,right=0,sum=0,min=len+1;
    while(right<len){
        sum+=nums[right];
        while(sum>=target){
            min=min<right-left+1?min:right-left+1;
            sum-=nums[left++];
        }
        right++;
    }
    return min>len?0:min;
}*/

//相同的题目，输出符合条件的子数组
function minSubArrayLen1(target, nums) {
    let len=nums.length;
    let left=0,right=0,sum=0,min=len+1;
    let r=right;let l=left;
    let arr=[];
    while(right<len){
        sum+=nums[right];
        while(sum>=target){
            if(min>right-left+1){
                min=right-left+1;
                r=right;
                l=left;
            }
            sum-=nums[left];
            left++;
        }
        right++;
    }
   for(let i=l;i<=r;i++){
        arr.push(nums[i]);
    }
    return min>len?null:arr;
}
console.log(minSubArrayLen1(11, [1,1,1,1,1,1,1,1]));


