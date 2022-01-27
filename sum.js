var sum = 0;
for (let i =1; i<=10; i++){
    let num = require("readline-sync");
    let n = num.questionInt("enter the number here: ");
    sum = sum + n
}
console.log(sum)