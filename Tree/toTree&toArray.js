var array = [
    { pid: null, id: 1 },
    { pid: 1, id: 2 },
    { pid: 1, id: 5 },
    { pid: 2, id: 3 },
    { pid: 2, id: 4 }
]

function ToTree(arr){
    return dfs(arr, null);
}
function dfs(arr, local_id){
    const res = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].pid === local_id){
            res.push(arr[i]);
        }
    }
    if(res.length === 0){
        return [];
    }
    for(let i = 0; i < res.length; i++){
        // 递归接上黄老爷的腿
        let temp = dfs(arr, res[i].id);
        if(temp.length !== 0) {
            res[i].children = temp;
        }
    }
    return res;
}
console.log(ToTree(array));


var tree = [{
    pid: null,
    id: 1,
    children: [{
        pid: 1,
        id: 2,
        children: [{
            pid: 2,
            id: 3,
            children: []
        }, {
            pid: 2,
            id: 4,
            children: []
        }]
    }, {
        pid: 1,
        id: 5,
        children: []
    }]
}]

function toArray(node){
    let queue = node,
        data = [];
    while(queue.length !== 0){
        let shift = queue.shift();
        data.push({
            id: shift.id,
            pid: shift.pid
        });
        let children = shift.children;
        if(children) {
            for(let i = 0; i < children.length; i++){
                queue.push(children[i]);
            }
        }
    }
    return data;
}

console.log(toArray(tree));
