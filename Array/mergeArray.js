/*function merge( A, m, B, n ) {
    if (m===0) return B;
    A=A.slice(0,m);
    let res=[...A,...B];
    res=res.sort((a,b)=>a-b);
    return res;
}*/


function merge( A, m, B, n ) {
    A.splice(m, A.length - m, ...B)
    A.sort((a, b) =>  a - b)
    return;
}
//console.log(merge( [1,2,3,0,0,0],3,[2,5,6],3))//[1, 2, 2, 3, 5, 6]
console.log(merge([],0,[1,2,3],3))

