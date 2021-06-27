//描述
// 输入一个链表的头节点，按链表从尾到头的顺序返回每个节点的值（用数组返回）。
//示例1
// 输入：{1,2,3}
// 返回值：[3,2,1]

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
let Head={
    val:1,
    next:{
        val:2,
        next:{
            val:3,
            next:null
        }
    }
}
function printListFromTailToHead(head) {
    let array=[];
    while(head){
        array.unshift(head.val);
        head=head.next;
    }
    return array;
}

console.log(printListFromTailToHead(Head));//[3, 2, 1]
