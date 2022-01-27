var givenString = require("readline-sync");
var inputString = givenString.question("enter any string: ");
var x =" "
const s = inputString
console.log(s)

for (let str = inputString.length-1; str>=0; str--){
      x= x + inputString[str]
    // console.log(x)
  }

        console.log(x)
        if (s===x){
            console.log("it is a palendrome string")
        }
        else{
            console.log("it is not a palendrome string")
        }

// const n=require("readline-sync");
// var name=n.question("enter name: ")
// const store=name;
// var string=""
// for (let i=name.length-1;i>=0;i--) {
//    string=string+name[i]
// }
// if (store===string) {
//    console.log("its palindrome string")
// }
// else {
//    console.log("it's not a palindrome string")
// }

