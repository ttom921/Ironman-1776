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

// var JSONObject = { "key": 1 };
// var keyArray = Object.keys(JSONObject);
// console.log(keyArray);

// const a = 123;
// let b = 123;
// a = 456;
// b = 456;

// const name = 'Andy';
// //ES5寫法
// var str5 = 'Hello' + name + "!";

// //ES6寫法
// const str6 = `Hello ${name}`;

// //ES5寫法
// var html5 = "<div>";
// html5 += "<p>Hello World</p>";
// html5 += "</div>";

// //ES6寫法
// const html6 = `
//   <div>
//     <p>Hello World</p>
//   </div>  
// `;

//ES5寫法
// var arr = [1, 2, 3];
// var obj = { d: 1, e: 2, f: 3 };
// var a = arr[0],
//     b = arr[1],
//     c = arr[2];
// var d = obj.d,
//     e = obj.e,
//     f = obj.f;
// console.log(a, b, c);
// console.log(d, e, f);


//ES6寫法
// const arr = [1, 2, 3];
// const obj = { d: 1, e: 2, f: 3 };
// const [a, b, c] = arr; // a = arr[0], b = arr[1], c = arr[2]
// const { d, e, f } = obj;// d = obj.d, e = obj.e, f = obj.f
// console.log(a, b, c);    // 1 2 3
// console.log(d, e, f);    // 1 2 3

// //ES5寫法
// var name = 'Andy';
// var obj = {
//     name: name
// };

//ES6寫法
// const name = 'Andy';
// const obj = { name };
// console.log(obj.name);

//ES5寫法
// var arr = [1, 2, 3];
// var marr = arr.map(function (element) {
//     return element * 2;
// });
// console.log(marr);
//ES6寫法
// const arr=[1,2,3];
// const mapArr=arr.map(element=>element*2);
// console.log(mapArr);

class square {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calcArea() {
        return this.width * this.height;
    }
}
const square1 = new square(10, 10);
const area = square1.calcArea();
console.log(area);
