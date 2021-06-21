let queue1=[];
let queue2=[];

function push(x){
    if(queue1.length===0){
        queue1.push(x);
        while(queue2.length){
            queue1.push(queue2.shift());
        }
    }
    else if(queue2.length===0){
        queue2.push(x);
        while(queue1.length){
            queue2.push(queue1.shift());
        }
    }
}

function pop(){
    if(queue1.length!==0){
        return queue1.shift();
    }else{
        return queue2.shift();
    }
}
push(1);
console.log("第一个队列:"+queue1+"  第二个队列:"+queue2);
push(2);
console.log("第一个队列:"+queue1+"  第二个队列:"+queue2);
push(3);
console.log("第一个队列:"+queue1+"  第二个队列:"+queue2);;
pop();
console.log("第一个队列:"+queue1+"  第二个队列:"+queue2);
push(4);
console.log("第一个队列:"+queue1+"  第二个队列:"+queue2);
pop();
console.log("第一个队列:"+queue1+"  第二个队列:"+queue2);
push(5);
console.log("第一个队列:"+queue1+"  第二个队列:"+queue2);
pop();
console.log("第一个队列:"+queue1+"  第二个队列:"+queue2);
pop();
console.log("第一个队列:"+queue1+"  第二个队列:"+queue2);



