/*
Cho 1 mảng datas. 

Xóa phần tử đầu tiên của mảng 
Xóa phần tử cuối cùng của mảng 
Thêm phần tử "X" vào cuối mảng
In ra mảng mới

Ví dụ:
cho datas = ['A', 'B', 'C']; In ra: ['B', 'X']
Đầu vào: datas
Đầu ra: In ra mảng mới
*/

function run(datas) {
    datas.shift();
    datas.pop();
    datas.push('X');
    console.log(datas);
}

/*
Array.shift()
Phương thức shift() xóa phần tử đầu tiên của mảng và trả về phần tử bị xóa này.
Phương thức này sẽ thay đổi độ dài của mảng.

Cú pháp
arr.shift()

Example
var array1 = ["A", "B", "C"];

var firstElement = array1.shift();

console.log(array1);
// output: Array ["B", "C"]

console.log(firstElement);
// output: A

Array.unshift()
Phương thức unshift() thêm một hoặc nhiều phần tử vào vị trí đầu mảng sau đó trả về chiều dài của mảng mới.

Cú pháp
arr.unshift(element1[, ...[, elementN]])

Example
var array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]

Array.pop()
Phương thức pop() xóa đi phần tử cuối cùng của mảng và trả về phần tử này.
Phương thức này sẽ thay đổi chiều dài của mảng.

Cú pháp
arr.pop()

Ví dụ
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// output: "tomato"

console.log(plants);
// output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// output: Array ["broccoli", "cauliflower", "cabbage"]

Array.push()
Phương thức push() thêm 1 hay nhiều phần tử vào cuối mảng và trả về độ dài của mảng mới.

Cú pháp
arr.push(element1[, ...[, elementN]])

Ví dụ
var animals = ['pigs', 'goats', 'sheep'];

console.log(animals.push('cows'));
// output: 4

console.log(animals);
// output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens');

console.log(animals);
// output: Array ["pigs", "goats", "sheep", "cows", "chickens"]
*/