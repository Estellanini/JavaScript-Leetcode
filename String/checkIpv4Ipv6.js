function checkIpv4(IP){
    let arr=IP.split(".");
    if(arr.length!==4) return false;
    for(let i of arr){
        if(Object.is(Number(i),NaN)||Number(i)>255||Number(i)<0||i[0]==='0'&&i.length!==1){
            return false;
        }
    }
    return true;
}
function checkIpv6(IP){
    let arr=IP.split(":");
    if(arr.length!==8) return false;
    for(let i of arr){
        if(i.length>4||Object.is(parseInt(i,16),NaN)){
            return false;
        }
    }
    return true;
}
function solve(IP){
    return checkIpv4(IP)?'IPv4':(checkIpv6(IP)?'IPv6':"Neither");
}

console.log(solve("2001:0db8:85a3:0:0:8A2E:0370:7334"));//IPv6
console.log(solve("256.256.256.256"));//Neither
console.log(solve("172.16.254.1"));//IPv4
