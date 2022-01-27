var num = require("readline-sync");
var n = num.questionInt("enter any number: ")
for ( let i = 0; i < n; i++){
    console.log(i*i);
}