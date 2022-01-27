var n = require("readline-sync");
var num = n.questionInt("enter any number to check :  ");
var sum = 0;
a = num;
while (a > 0){
    let digit = a % 10
    sum = digit ** 3 + sum
    a = a / 10
if (sum == num){
    console.log(num,"is a armstrong number")
}
else {
    console.log(num,"is not a armstrong number")
}
}