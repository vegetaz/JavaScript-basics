/*
Cho 2 số a và b.
In ra kết quả của a^2 + b^2

Ví dụ
Cho a = 1; b = 2; in ra 5
Cho a = 2; b = 5; in ra 29
Đầu vào: a và b 
Đầu ra: In ra kết quả của a^2 + b^2
*/

function run(a, b) {
    console.log(Math.pow(a, 2) + Math.pow(b, 2));
}

/*
Math.pow() trả về giá trị hàm mũ với cơ số (base) là tham số đầu tiên và mũ (exponent) là tham số thứ hai.

Cú pháp
Math.pow(base, exponent)

Ví dụ
console.log(Math.pow(3, 2));
// output: 9

console.log(Math.pow(7, 3));
// output: 343

console.log(Math.pow(4, 0.5));
// output: 2

console.log(Math.pow(7, -2));
// output: 0.02040816326530612

console.log(Math.pow(-7, 0.5));
// output: NaN​
*/