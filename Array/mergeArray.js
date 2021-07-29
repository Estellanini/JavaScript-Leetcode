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

function merge(nums1, m, nums2, n) {
    return [...nums1.slice(0,m),...nums2].sort((a,b)=>a-b);
}

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))//[ 1, 2, 2, 3, 5, 6 ]
//leetcode解法
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m,n);
    //nums1.push.apply(nums1,nums2);
    nums1.push(...nums2);
    nums1.sort((a,b)=>a-b)
};
