//希尔排序
//思想：先将整个待排元素序列分割成若干个子序列（由相隔某个“增量”的元素组成的）分别进行直接插入排序，
// 然后依次缩减增量再进行排序，待整个序列中的元素基本有序（增量足够小）时，
// 再对全体元素进行一次直接插入排序。因为直接插入排序在元素基本有序的情况下（接近最好情况），效率是很高的，
// 因此希尔排序在时间效率上比直接插入排序有较大提高。
// shellSort
function shellSort(array) {
    //gap为步长
    for(let gap = Math.floor(array.length/2); gap > 0; gap = Math.floor(gap/2)) {
        // 内层循环与插入排序的写法基本一致，只是每次移动的步长变为 gap
        for(let i=gap;i<array.length;i++){
            //target：待插入元素
            let target = i;
            for (let j = i - 1; j >= 0; j-=gap) {
                if (array[target] < array[j]) {
                    [array[target], array[j]] = [array[j], array[target]]
                    target = j;
                } else {
                    break;
                }
            }
        }
    }
    return array;
}

let arr = [2,5,10,7,10,32,90,9,11,1,0,10];
alert(shellSort(arr));
