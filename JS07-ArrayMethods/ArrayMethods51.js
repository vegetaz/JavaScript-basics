/*
Cho mảng datas.
Đảo ngước các phần tử của mảng và in ra mảng mới

Ví dụ: datas = ["A", "B", "C"];

In ra: ["C", "B", "A"]

Đầu vào: datas
Đầu ra: In ra mảng mới
*/

function run(datas) {
    var arr = datas.reverse(datas);
    console.log(arr);
}

/*
Phương thức reverse() đảo ngược thứ tự của chính mảng đó.
Phần tử đầu tiên của mảng trở thành phần tử cuối và ngược lại, phần tử cuối trở thành phần tử đầu tiên của mảng.

Cú pháp
arr.reverse()

Ví dụ:
var array1 = ['one', 'two', 'three'];
console.log('array1: ', array1);
// expected output: Array ['one', 'two', 'three']

var reversed = array1.reverse(); 
console.log('reversed: ', reversed);
// expected output: Array ['three', 'two', 'one']

// Careful: reverse is destructive. It also changes the original array 
console.log('array1: ', array1);
// expected output: Array ['three', 'two', 'one']​
*/