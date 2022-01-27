var pm = require("readline-sync");
var isPrimeNumber = pm.questionInt("enter any number: ");
let i = 2
var count = 0
while ( i < isPrimeNumber ){
    if (isPrimeNumber % i === 0){
        count= count+1
    }
    i++
}
if (count === 0){
    console.log(isPrimeNumber,"is a prime number")
}
else{
    console.log(isPrimeNumber,"not a prime numbeer")
}