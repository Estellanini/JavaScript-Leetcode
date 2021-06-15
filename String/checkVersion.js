//一. 比较版本号时，请按从左到右的顺序依次比较它们的修订号。比较修订号时，只需比较忽略任何前导零后的整数值。比如"0.1"和"0.01"的版本号是相等的
// 二. 如果版本号没有指定某个下标处的修订号，则该修订号视为0。例如，"1.1"的版本号小于"1.1.1"。因为"1.1"的版本号相当于"1.1.0"，第3位修订号的下标为0，小于1
// 三.  version1 > version2 返回1，如果 version1 < version2 返回-1，不然返回0.
//输入："1.1","2.1"   返回值：-1
//输入："1.1","1.01"  返回值：0



/*
function compare( version1 ,  version2 ) {
    // write code here
    const v1 = version1.split('.')
    const v2 = version2.split('.')
    const len = Math.max(v1.length, v2.length)
    for (let i = 0; i < len; i++) {
        const n1 = Number(v1[i] || 0)
        console.log(Number(v1[i]))
        const n2 = Number(v2[i] || 0)
        console.log(n2)
        if (n1 > n2) return 1
        if (n1 < n2) return -1
    }
    return 0
}

console.log(compare("1.1","1.1.1"))
*/
/*let arr=["1","2","3"]
console.log(Number(arr[3]))*/
console.log(NaN>0)//false
console.log(NaN===0)//false
console.log(NaN||0)//0
console.log(5||0)//5
console.log(0||5)//5
