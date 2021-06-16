//vivo2020届春季校园招聘在线编程考试
//在vivo产线上，每位职工随着对手机加工流程认识的熟悉和经验的增加，日产量也会不断攀升。
// 假设第一天量产1台，接下来2天(即第二、三天)每天量产2件，接下来3天(即第四、五、六天)每天量产3件 ... ...
// 以此类推，请编程计算出第n天总共可以量产的手机数量。

//1 2 2 3 3 3 4 4 4 4 5 5 5 5 5...
//求1-n个数的总和
//输入：11 输出：35
//输入：5 输出：11
/*
function solution( n ) {
    for(let i=1;i<=n;i++){
        if(n<=(1+i)*i/2){
            let res=0;
            for(let j=1;j<=i-1;j++){
                res+=j*j;
            }
            return res+i*(n-((i-1)*i/2));
        }
    }
}
*/

function solution(n){
    let ans = 0;
    for(let i=1; n>0; ++i){
        console.log("i=",i,"n=",n,"min=",Math.min(i, n))
        ans += i * Math.min(i, n);
        n -= i;
        console.log("ans=",ans,"n=",n);
    }
    return ans;
}

console.log(solution(11))

