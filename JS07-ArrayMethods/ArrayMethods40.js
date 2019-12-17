/*
Cho 2 mảng a và b.
Gộp a vào b và in ra mảng b mới

Ví dụ:
a = ['a', 'b', 'c'];
b = [1, 2, 3];
In ra: [ 1, 2, 3, 'a', 'b', 'c' ]

Đầu vào: a và b
Đầu ra: Gộp a vào b và in ra mảng b mới
*/

function run(a, b) {
    b = b.concat(a);
    console.log(b);
}

/*
Phương thức concat() dùng để kết nối 2 hay nhiều mảng với nhau.
Phương thức này không làm thay đổi các mảng đã có mà thay vào đó sẽ trả về 1 mảng mới.

Cú pháp
var new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])

Ví dụ
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var new_array = array1.concat(array2);
console.log(new_array );
// output: ["a", "b", "c", "d", "e", "f"]

// or 

var num1 = [1, 2, 3],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];

var nums = num1.concat(num2, num3);

console.log(nums); 
// output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/