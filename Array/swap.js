//给定一个排序数组
//输出里面交换顺序的是哪两个数字
//例：输入：[2,6,4,5,3]
//输出：2 5
//因为第二个数和第五个数交换顺序了


//let arr=[1,3,12,15,26,36,178,51,60,72,79,90,91,96,102,111,116,119,130,131,143,144,154,164,174,47,183,186,193]
let arr=[2,6,4,5,3,9,10,11]
let res=[];
let left=0;
let right=arr.length-1;
while(left<arr.length+1){
    if(arr[left]>arr[left+1]){
        res.push(left+1);
        break;
    }
    left++;
}
while(right>=0){
    if(arr[right]<arr[right-1]){
        res.push(right+1);
        break;
    }
    right--;
}
console.log(res.join(" "));
//1 3 12 15 26 36 178 51 60 72 79 90 91 96 102 111 116 119 130 131 143 144 154 164 174 47 183 186 193
//本地以及正确答案：7 26
//牛客弱智系统里：2 27
