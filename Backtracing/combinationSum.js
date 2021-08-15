//给定一个无重复元素的正整数数组 candidates 和一个正整数 target ，找出 candidates 中所有可以使数字和为目标数 target 的唯一组合。
// candidates 中的数字可以无限制重复被选取。如果至少一个所选数字数量不同，则两种组合是唯一的。 
// 对于给定的输入，保证和为 target 的唯一组合数少于 150 个。
//输入: candidates = [2,3,6,7], target = 7
// 输出: [[7],[2,2,3]]


function combinationSum(candidates, target) {
    let res=[];
    function search(path,sum,startIndex){
        if(sum>target) return;
        if(sum==target){
            res.push(path.slice());
        }
        for(let i=startIndex;i<candidates.length;i++){
            sum+=candidates[i];
            path.push(candidates[i]);
            search(path,sum,i);// 关键点:不用i+1了，表示可以重复读取当前的数
            sum-=candidates[i];// 回溯
            path.pop();// 回溯
        }
    }
    search([],0,0);//注意：这里startIndex的初始值是0，因为可以重复读取当前的值
    return res;
}
