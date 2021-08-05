//判断链表是否有环，返回true、false
//思路：一个走两步，一个走一步，如果链表中有环，必会相遇。

function hasCycle(head) {
    let one=head;
    let two=head;
    while(two!=null&&two.next!=null){
        one=one.next;
        two=two.next.next;
        if(one===two){
            return true;
        }
    }
    return false;
}

function hasCycle(head) {
    const visited = new Set();
    while (head !== null) {
        if (visited.has(head)) {
            return true;
        } else {
            visited.add(head);
            head = head.next;
        }
    }
    return false;
}

//判断链表是否有环,返回入环节点
function detectCycle1(head) {
    const visited = new Set();

    while (head !== null) {
        if (visited.has(head)) {
            return head; // 有环，此时的节点为入环节点
        } else {
            visited.add(head);
            head = head.next;
        }
    }
    return null;
}

