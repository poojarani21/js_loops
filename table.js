var tbl = require("readline-sync");
var num = tbl.questionInt("enter any table to write a table: ");

for (let i=1;i<=10;i++){
    multi = num*i
    console.log(num,"*",i,"=",multi)
}




