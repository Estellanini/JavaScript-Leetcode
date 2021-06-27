//描述
// 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
//示例1
// 输入：{1,3,5},{2,4,6}
// 返回值：{1,2,3,4,5,6}


/*function ListNode(x) {
    this.val = x;
    this.next = null;
}*/
let pHead1={
    val:1,
    next:{
        val:3,
        next:{
            val:5,
            next:null
        }
    }
}
let pHead2={
    val:2,
    next:{
        val:4,
        next:{
            val:6,
            next:null
        }
    }
}
function Merge(pHead1 ,pHead2)
{
    if(pHead1===null) return pHead2;
    if(pHead2===null) return pHead1;
    if(pHead1.val<=pHead2.val){
        pHead1.next=Merge(pHead1.next,pHead2);
        return pHead1;
    }else{
        pHead2.next=Merge(pHead1,pHead2.next);
        return pHead2;
    }
}

console.log(Merge(pHead1,pHead2))
