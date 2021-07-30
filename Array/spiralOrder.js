//螺旋矩阵
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
/*ar spiralOrder = function(matrix) {
    /!*
        [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]
        几个关键位置 四个拐弯角 top 、right、bottom、left
        顺时针 [left, right] -> [top, bottom] -> [right, left] -> [bottom, top]
        一次性遍历完 当res的长度等于row * col 即所有元素遍历完成 终止while循环
    *!/
    if (!matrix.length) return []

    const res = [], row = matrix.length, col = matrix[0].length, size = row * col
    let t = 0, r = col - 1, b = row - 1, l = 0 // 遍历顺序的边 分为为 上、右、下、左

    while (res.length !== size) {
        // 从左往右
        for (let i = l; i <= r; i++) res.push( matrix[t][i] )
        t++

        // 从上往下
        for (let i = t; i <= b; i++) res.push( matrix[i][r] )
        r--

        // 检查一次是否遍历完
        if (res.length === size) break

        // 从右往左
        for (let i = r; i >= l; i--) res.push( matrix[b][i] )
        b--
        // 从下往上
        for (let i = b; i >= t; i--) res.push( matrix[i][l] )
        l++

    }

    return res
};*/
//判断出路线都是有固定方向的 先→再↓再←再↑再→.....一直循环到没数字
// 因此定义4个方向边界 当触及边界时即按固定方向转向 且其对应的边界值向内收缩1
// 若没触及边界 即按自身方向继续行走 改变坐标值直到触边界/数字全部遍历过

function spiralOrder (matrix) {
    let res=[],i=0,j=0;
    let m=matrix[0].length-1,n=matrix.length-1
    if(n<0) return [];
    let turn= m===0?'d':'r';
    let boundl=0,boundr=m,boundu=0,boundd=n;

    for(let a=0;a<(m+1)*(n+1);a++){
        res.push(matrix[i][j]);
        if(turn==='r'){
            j++;
            if(j===boundr){
                boundu++;
                turn='d';
            }
        }else if(turn==='d'){
            i++;
            if(i===boundd){
                boundr--;
                turn='l';
            }
        }else if(turn==='l'){
            j--;
            if(j===boundl){
                boundd--;
                turn='u';
            }
        }else if(turn==='u'){
            i--;
            if(i===boundu){
                boundl++;
                turn='r';
            }
        }
    }
    return res;
}

console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))

