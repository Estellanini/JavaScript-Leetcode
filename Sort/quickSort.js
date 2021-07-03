//快速排序
//思想：选定一个基准数，通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据要比基准数小，另一部分的所有数据要比基准数大，
// 再按这种方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，使整个数据变成有序序列。（冒泡排序每次消除一个逆序，快速排序每次消除多个逆序）

//**写法1**：单独开辟两个存储空间`left`和`right`来存储每次递归比`target`小和大的序列，每次递归直接返回`left、target、right`拼接后的数组，
// 浪费大量存储空间，写法简单。
/*function quickSort(array) {
    if(array.length<2){
        return array;
    }
    const target=array[0];
    const left=[];
    const right=[];
    for(let i=1;i<array.length;i++){
        if(array[i]<target){
            left.push(array[i]);
        }else{
            right.push(array[i])
        }
    }
    return quickSort(left).concat([target],quickSort(right));
}*/

//写法2
function quickSort(array,start,end){
    if(end-start<1) return;
    const target=array[start];
    let l=start;
    let r=end;
    while(l<r) {
        while(l<r&&array[r]>=target){
            r--;
        }
        array[l]=array[r];
        while(l<r&&array[l]<target){
            l++;
        }
        array[r]=array[l];
    }
    array[l]=target;
    quickSort(array,start,l-1);
    quickSort(array,l+1,end);
    return array;
}

console.log(quickSort([4,8,3,2,1,6,7,1],0,7))

//[4,8,3,2,1,6,7,1]



















