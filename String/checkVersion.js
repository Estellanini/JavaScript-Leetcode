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
