let personalDetails = {
    name : "Raghu",
    surName : "Suryawanshi",
    emailID : "raghu123@gmail.com",
    phone : 7878626298,
}
let collegeDetails = {
    nickName : "Ram",
    rollNo : 24,
    
    altPhone : 9878626298,
}
let mergedObject = Object.assign({} , personalDetails, collegeDetails);
console.log(mergedObject);
let friends = ["Ashutosh","Niketan","Vinay","Sanket","Vishwajit"]
let frz = Object.freeze(`${friends}`)
console.log(frz);
friends["Ashutosh"] = "Uday"
console.log(`${friends}`);
for (const iterator of friends) {
    console.log(`${iterator}`);
}
let reverseString = function(str){
   
    let reverse =''
    for (let index = str.length-1; index >= 1; index-- ) {
        const
         char = str.charAt(index);
        
        if (char != '' ) {
            reverse = reverse.concat(char)
            
        }

    }
    console.log(reverse)}
    reverseString("Codemind Technology")
