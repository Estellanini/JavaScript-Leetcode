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
/*function reverseList(pHead){
    let currentNode=null;//当前节点
    let headNode=pHead;//当前链表头节点
    while(pHead&&pHead.next){
        currentNode=pHead.next;
        pHead.next=currentNode.next;
        currentNode.next=headNode;
        headNode=currentNode;
    }
    return headNode;

}*/
//迭代法
/*
function reverseList(head){
    let prev=null;
    let cur=head;
    while(cur){
        const next=cur.next;
        cur.next=prev;
        prev=cur;
        cur=next;
        console.log("cur",cur)
        console.log("prev",prev)
    }
    return prev;
}
*/

//递归法
function reverseList(head) {
    if(head==null || head.next==null) return head;
    const last=reverseList(head.next);
    head.next.next=head;
    head.next=null;
    return last;
};
console.log(reverseList(Head));

