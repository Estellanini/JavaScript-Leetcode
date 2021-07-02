//冒泡排序
//思想：循环数组，比较当前元素和下一个元素，如果当前元素比下一个元素大，小的元素向上冒泡。
// 这样一次循环之后最后一个数就是本数组最大的数。下一次循环继续上面的操作，不循环已经排序好的数。

/*function bubbleSort(array){
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length-i-1;j++){
            if(array[j]>array[j+1]){
                [array[j],array[j+1]]=[array[j+1],array[j]];

            }
        }
    }
    return array;
}*/

// 优化：当一次循环没有发生冒泡，说明已经排序完成，停止循环。
function bubbleSort(array) {
    for (let i=0; i<array.length; i++) {
        let complete = true;
        for (let j=0; j<array.length-1-i; j++) {
            // 比较相邻数
            if (array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
                complete = false;
            }
        }
        // 没有冒泡结束循环
        if (complete) {
            break;
        }
    }
    return array;
}
console.log(bubbleSort([2,5,6,1,7]));
