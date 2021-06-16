function ListNode(x){
    this.val = x;
    this.next = null;
}

function reverseList(pHead){
    //声明变量记录prev、cur分别代表前一个和当前节点
    let prev=null;
    let cur=pHead;
    //当cur是节点时，进行迭代操作
    while(cur){
        //先保存当前节点的下一个节点
        const next=cur.next;
        cur.next=prev;
        prev=cur;
        cur=next;
    }
    //返回值代表
    return prev;
}


