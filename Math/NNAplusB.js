let adda="";
let addb="";
function NNAplusB( a ,  b ) {
    // write code here
    for(let i=0;i<b;i++){
        adda+=a;
    }
    for(let i=0;i<a;i++){
        addb+=b;
    }
    console.log(adda)
    return parseInt(adda)+parseInt(addb);
}

console.log(NNAplusB(2,3))//222+33=255
