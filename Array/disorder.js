//数组乱序
function disorder(array) {
    const length = array.length;
    let current = length - 1;
    let random;
    while (current >-1) {
        random = Math.floor(length * Math.random());//随机下标
        [array[current], array[random]] = [array[random], array[current]];//交换
        current--;
    }
    return array;
}

console.log(disorder([1,2,3,4,5,6,7,8,9,0]))
