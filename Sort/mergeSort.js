//归并排序
//写法1
// 分割数组时直接将数组分割为两个数组，合并时直接合并数组。
// 优点：思路简单，写法简单
// 缺点：空间复杂度略高，需要复制多个数组
/*function mergeSort(array) {
    if(array.length<2) return array;
    const mid=Math.floor(array.length/2);
    const front=array.slice(0,mid);
    const end=array.slice(mid);
    return merge(mergeSort(front),mergeSort(end));
}

function merge(front,end){
    const temp=[];
    while(front.length&&end.length){
        if(front[0]<end[0]){
            temp.push(front.shift());
        }else{
            temp.push(end.shift());
        }
    }
    while(front.length){
        temp.push(front.shift());
    }
    while(end.length){
        temp.push(end.shift());
    }
    return temp;
}*/

//写法2
//记录数组的索引，使用left、right两个索引来限定当前分割的数组。
// 优点：空间复杂度低，只需一个temp存储空间，不需要拷贝数组
// 缺点：写法复杂
function mergeSort(array,left,right){
    if(array.length < 2) return array;
    if(left<right){
        const mid=Math.floor((left+right)/2);
        mergeSort(array,left,mid);
        mergeSort(array,mid+1,right);
        return merge(array,left,right);
    }
}
function merge(array,left,right){
    let temp=[];
    const mid=Math.floor((left+right)/2);
    let leftIndex=left;
    let rightIndex=mid+1;
    let tempIndex=0;
    while(leftIndex<=mid&&rightIndex<=right){
        if(array[leftIndex]<array[rightIndex]){
            temp[tempIndex++]=array[leftIndex++]
        }else{
            temp[tempIndex++]=array[rightIndex++];
        }
    }
    while (leftIndex <= mid) {
        temp[tempIndex++] = array[leftIndex++]
    }
    while (rightIndex <= right) {
        temp[tempIndex++] = array[rightIndex++]
    }
    tempIndex=0;
    for(let i=left;i<=right;i++){
        array[i]=temp[tempIndex++];
    }
    return array;
}
//console.log(mergeSort([4,8,2,6,1,5,7]))
console.log(mergeSort([4,8,2,6,1,5,7],0,6))
