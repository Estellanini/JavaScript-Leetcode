//合并两个有序数组

/*function merge( A, m, B, n ) {
    if (m===0) return B;
    A=A.slice(0,m);
    let res=[...A,...B];
    res=res.sort((a,b)=>a-b);
    return res;
}*/


/*function merge( A, m, B, n ) {
    A.splice(m, A.length - m, ...B)
    A.sort((a, b) =>  a - b)
    return;
}
//console.log(merge( [1,2,3,0,0,0],3,[2,5,6],3))//[1, 2, 2, 3, 5, 6]
console.log(merge([],0,[1,2,3],3))*/

/*function merge(nums1, m, nums2, n) {
    return [...nums1.slice(0,m),...nums2].sort((a,b)=>a-b);
}

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))//[ 1, 2, 2, 3, 5, 6 ]
//leetcode解法
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m,n);
    //nums1.push.apply(nums1,nums2);
    nums1.push(...nums2);
    nums1.sort((a,b)=>a-b)
};*/



//优质解法
//将空间复杂度降低到 O(1)
//将数组1和数组2中数的部分，从后向前遍历，二者较大值，放在数组1的最后（用0扩充的最后）
function merge(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, k = m + n - 1;
    while (i >= 0 || j >= 0) {
        if(i < 0) nums1[k--] = nums2[j--];
        else if(j < 0) nums1[k--] = nums1[i--];
        else if(nums1[i] < nums2[j]) nums1[k--] = nums2[j--];
        else nums1[k--] = nums1[i--];
    }
    return nums1;
}
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))

