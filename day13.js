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

//buffer的測試程式
// var array1 = Buffer.from("123");
// console.log(array1);
// var array2 = Buffer.from("abc");
// console.log(array2);
// var array3 = Buffer.from("ABC");
// console.log(array3);
// var totallength = array1.length + array2.length + array3.length;
// var buf = Buffer.concat([array1, array2, array3], totallength);
// console.log(buf);

// const obj = {
//     name: 'Andy',
//     contest: 'IT-Ironman'
// }

// const arr = [{
//     name: 'Andy',
//     contest: 'IT-Ironman'
// }, {
//     name: 'Andy',
//     contest: 'IT-Ironman2'
// }];

//Array.forEach(function(element){})
// var arr = [1, 2, 3];
// arr.forEach(function (element) {
//     console.log(element);
// });

//Array.map(function(element) {})
// var arr = [1, 2, 3];
// var arr2 = arr.map(function (element) {
//     return element * 2;
// });
// console.log(arr);
// console.log(arr2);

//Array.filter(function(element) {})
// var arr = [1, 2, 3];
// var arr2 = arr.filter(function (element) {
//     return element < 3;
// });
// console.log(arr2);

//Array.reduce(function(accumulator, currentValue) {})
// var arr = [1, 2, 3];
// var sum = arr.reduce(function (accumulator, curentValue) {
//     //console.log("acc=" + accumulator);
//     //console.log("curvalue=" + curentValue);
//     return accumulator += curentValue;
// });
// console.log(sum);

//Array.indexOf(element)
// var arr = [1, 2, 3];
// var index = arr.indexOf(1);
// console.log(index);

// JSON.parse(JSONstring)

// var JSONStrng = '{"key":1}';
// var JSONObject = JSON.parse(JSONStrng);
// console.log(JSONObject);

// // JSON.stringify(JSONObject)

// var JSONObject = { "key": 1 };
// var JSONStrng = JSON.stringify(JSONObject);
// console.log(JSONStrng);

//Object.keys(JSONObject)

var JSONObject = { "key": 1 };
var keyArray = Object.keys(JSONObject);
console.log(keyArray);