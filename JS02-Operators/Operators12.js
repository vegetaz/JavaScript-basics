/*
Cho 1 số a. Tìm phần dư của
a chia cho 5
a chia cho 3
a chia cho 2

Và in các phần dư ra màn hình
Ví dụ
Cho a = 13, in ra
remainder of a divided by 5 is 3
remainder of a divided by 3 is 1
remainder of a divided by 2 is 1
Đầu vào: a
Đầu ra: Các phần dư của a
*/

function run(a) {
    var r1 = a % 5;
    console.log('remainder of a divided by 5 is ' + r1);

    var r2 = a % 3;
    console.log('remainder of a divided by 3 is ' + r2);

    var r3 = a % 2;
    console.log('remainder of a divided by 2 is ' + r3);
}