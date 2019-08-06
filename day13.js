// var x = 1;   // x 無 integer
// var y = "1"; // y 為 string
// var z = x + y;
// console.log(z);

// var x = 123;
// var y = "123";
// console.log(x == y);

// var x = 123;
// var y = "123";
// console.log(x === y);

// var array1 = ["Vijendra", "Singh"];
// var array2 = ["Singh", "Shakya"];
// var array3 = array1.concat(array2);

// console.log(array3);
// var resarr = [];
// resarr = [].concat(array1).concat(array2);
// console.log(resarr);

var array1 = Buffer.from("123");
console.log(array1);
var array2 = Buffer.from("abc");
console.log(array2);
var array3 = Buffer.from("ABC");
console.log(array3);
var totallength = array1.length + array2.length + array3.length;
var buf = Buffer.concat([array1, array2, array3], totallength);
console.log(buf);