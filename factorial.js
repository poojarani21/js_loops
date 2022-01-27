var num = require("readline-sync");
var n =num.questionInt("enter a number: ");
fact = 1;
while (n > 0){
    fact = fact * n;
    n = n - 1
}
console.log(fact,"factorial")