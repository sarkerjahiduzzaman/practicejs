function bestFriend(name2){
    let x=0;
    let lname;

    for(let i=0;i<names.length;i++)
    {

        if(names[i].length>x)
        {
             x=names[i].length
           
            lname=names[i]

        }
    }
    return lname

}
var names=['rahima','karim','jamalllll','putin','jahiduzzaman','jahid','tumi bondhu kala paki ami jeno ki boshontgo batashe ']
console.log(bestFriend(names))