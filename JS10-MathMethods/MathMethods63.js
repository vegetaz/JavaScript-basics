/*
Cho 4 số a, b,c và d.
In ra số lớn nhất và số nhỏ nhất.

Ví dụ:
Cho a = 1; b =2; c = 3; d = 4; In ra "4 1";
Đầu vào: a, b,c và d
Đâu ra: In ra số lớn nhất và số nhỏ nhất.
*/

function run(a, b, c, d) {
    let ln = Math.max(a, b, c, d);
    let nn = Math.min(a, b, c, d);
    console.log(ln, nn);
}

/*
Math.max()
Math.max() trả vế số lớn nhất trong các số đã cho

Cú pháp
Math.max([value1[, value2[, ...]]])

Ví dụ:
console.log(Math.max(1, 3, 2));
// output: 3

console.log(Math.max(-1, -3, -2));
// output: -1

Math.min()
Math.min() trả về số nhỏ nhất trong cách số đã cho, hoặc NaN nếu các tham số không phải là kiểu số

Cú pháp
Math.min([value1[, value2[, ...]]])

Ví dụ:
console.log(Math.min(2, 3, 1));
// output: 1

console.log(Math.min(-2, -3, -1));
// output: -3
*/