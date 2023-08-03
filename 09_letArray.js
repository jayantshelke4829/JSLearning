
let array = [4,5,4,5,8,5,7,8,9,7,8]
    let newArray = [];
    
    
    for(let i of array) {
        if(newArray.indexOf(i) === -1) {
            newArray.push(i);
        }
    }
    console.log(newArray);






