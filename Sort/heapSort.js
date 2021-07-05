//堆排序
//实质：是一种选择排序
// 基本思想：先把数组构造成一个大顶堆（父节点大于其子节点），然后把堆顶（数组最大值，数组第一个元素）和 数组最后一个元素交换，
// 这样就把最大值放到了数组最后边。把数组长度n-1，再进行构造堆，把剩余的第二大值放到堆顶，输出堆顶（放到剩余未排序数组最后面）。
// 以此类推，直至数组排序完成。

//将第target个元素进行下沉，孩子节点有比他大的就下沉
//就是某节点和其子节点比较，若是构建大顶堆，则子节点比这个节点大，则互换
function adjust(array,target,len){
    //array[target]是当前父节点
    //i<len的目的是对结点 target 以下的结点全部做顺序调整
    for(let i=2*target+1;i<len;i=2*i+1){
        if(i+1<len&&array[i]<array[i+1]){
            i=i+1; // 找到两个孩子中较大的一个，再与父节点比较
        }
        if(array[target]<array[i]){
            [array[i], array[target]] = [array[target], array[i]];
            target = i;// 交换后，target的下标变为 i
        }else{
            break;
        }
    }
}

function heapSort(array) {
    //初始化大顶堆，从第一个非叶子节点开始
    for(let i=Math.floor(array.length/2-1);i>=0;i--){
        adjust(array,i,array.length);
    }
    //排序，每一次for循环找出一个当前最大值，数组长度减一
    for(let i=array.length-1;i>0;i--){
        [array[0],array[i]]=[array[i],array[0]];
        adjust(array,0,i);
    }
    return array;
}

console.log(heapSort([4, 6, 8, 5, 9, 1, 2, 5, 3, 2]))
