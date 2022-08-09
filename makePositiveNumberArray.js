function onlyPositive(number){
    let newArray=[]
    for(let i=0;i<number.length;i++)
    {
        if(number[i]>=0)
        {
            newArray.push(number[i])
        }
        else
        {
            break;
        }
    }
    return newArray

}
var numbers=[15,58,22,-10,99,88,55,22,-55,44,55,88]
console.log(onlyPositive(numbers))