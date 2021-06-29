//描述
// 输入两个无环的单链表，找出它们的第一个公共结点。（注意因为传入数据是链表，所以错误测试数据的提示是用其他方式显示的，保证传入数据是正确的）
function FindFirstCommonNode(pHead1, pHead2){
    if(!pHead1||!pHead2) return null;
    let a=pHead1;
    let b=pHead2;
    while(a!==b){////找到相同节点就结束

        a= a!==null?a.next:pHead2;//走完自己，开始走另一个，这样在长度上就是相同的，逐个走完就行
        b= b!==null?b.next:pHead1;

        // a.next==null?a=a.next:a=pHead2;
        //  b.next==null?b=b.next:b=pHead1;

    }
    return a;

}
//测试数据有问题
//pHead1: 1 2 3 6 7
let pHead1={
    val:1,
    next:{
        val:2,
        next:{
            val:3,
            next:{
                val:6,
                next:{
                    val:7,
                    next:null
                }
            }
        }
    }
}

//pHead2: 4 5 6 7
let pHead2={
    val:4,
    next:{
        val:5,
        next:{
            val:6,
            next:{
                val:7,
                next:null
            }
        }
    }
}

console.log(FindFirstCommonNode(pHead1,pHead2))
