   //converting to string
   
   let num = 123;
let strNum = String(num); // "123"

let bool = true;
let strBool = String(bool); // "true"

let value = null;
let strNull = String(value); // "null"

let arr = [1, 2];
let strArr = String(arr); // "1,2"
//converting to number
    let str = "99.5";
let n = Number(str); // 99.5

let strSpaces = "   100   ";
let numSpaces = Number(strSpaces); // 100

let invalidStr = "apple";
let notANumber = Number(invalidStr); // NaN
