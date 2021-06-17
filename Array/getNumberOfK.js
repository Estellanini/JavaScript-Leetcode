function GetNumberOfK(data, k)
{
    let start=data.indexOf(k);
    let end=data.lastIndexOf(k);
    console.log(start,end)
    if(start==-1&&end==-1) return 0;
    else return end-start+1;
}

console.log(GetNumberOfK([1,3,3,3,3,4,5],2))
