var row = require("readline-sync");
var r = row.questionInt("enter any number: ");
var c = 0;
while (c <= 6){
    if (((c==0 || c==6) && (r!=0 && r!=3  && r!=4 && r!=5)) || ((c==1 || c==5) && (r!=4 && r!=5)) || ((c==2 || c==4) && (r!=5)) || ((c==3) && (r!=0))){
        console.log("*",end =" ")
    }
    else {
        console.log(' ',end =" ")
    }
    c = c + 1
}
console.log()
r = r + 1