//思想：将左侧序列看成一个有序序列，每次将一个数字插入该有序序列。插入时，从有序序列最右侧开始比较，若序列中比较的数较大，则将此序列中比较的数后移一位。
// 时间复杂度: O(n^2)      空间复杂度:O(1)     稳定性：稳定
function insertSort(array){
    for(let i=1;i<array.length;i++) {
        let target = i;//target：待插入元素：因为我们先确定第一个元素是暂时有序的，所以tmp存放无序序列的第二个元素
        for (let j = i - 1; j >= 0; j--) {
            if (array[target] < array[j]) {
                [array[target], array[j]] = [array[j], array[target]]
                target = j;
            } else {
                break;
            }
        }
    }
    return array;
}

console.log(insertSort([4,6,8,5,9]))
