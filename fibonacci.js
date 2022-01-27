var num = require("readline-sync");
var n = num.questionInt("enter any number: ");
var a = 0;
var b = 1;
var c = a + b
while (c <= n){
    console.log(c)
    a = b;
    b = c;
    c = c + b;
}
