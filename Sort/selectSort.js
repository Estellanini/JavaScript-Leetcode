//选择排序：每次循环选取一个最小的数字放到前面的有序序列中。
function selectSort(array){
    for(let i=0;i<array.length-1;i++){
        let minIndex=i;
        for(let j=i+1;j<array.length;j++){
            if(array[j]<array[minIndex]){
                minIndex=j;
            }
        }
        [array[minIndex],array[i]]=[array[i],array[minIndex]];
    }
    return array;
}

console.log(selectSort([2,5,1,7,4]));
