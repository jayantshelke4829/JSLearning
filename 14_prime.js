
function isPrime(num){
  let count = 0
  for (let index = 0; index <= num; index++) {
      if (num%index==0) {
        count++
      }   
      
  }
  if (count==2) {
    console.log(`Number is prime`);
  } 
  else{
    console.log(`Number is not prime`);
  }
}
isPrime(11)
isPrime(12)

