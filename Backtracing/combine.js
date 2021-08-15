//给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。你可以按 任何顺序 返回答案。
//输入：n = 4, k = 2
// 输出：
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

function combine (n, k) {
    let res=[];
    function search(startIndex,path){
        if(path.length==k){
            //使用slice因为： path是数组，是引用数据类型，如果直接插进去，进去的实际是地址，相当于浅拷贝，后面再对path操作的话，两个地方的path都会变化.slice会返回新数组
            res.push(path.slice());
            return ;
        }
        for(let i=startIndex;i<=n;i++){
            path.push(i);
            search(i+1,path);
            path.pop();
        }
    }
    search(1,[]);
    return res;
}


