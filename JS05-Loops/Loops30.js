/*
Cho 1 mảng số tự nhiên.
Dùng for-of tính tổng các sô dương trong mảng và in ra kết quả
Ví dụ:  [0, 2, -4, 8]
In ra: 10
Đầu vào: datas
Đầu ra: tính tổng các sô dương trong mảng và in ra kết quả
*/

function run(datas) {
    sum = 0;
    for (i of datas) {
        if (i > 0) {
            sum += i;
        }
    }
    console.log(sum);
}

/*
Cú pháp for...of để chạy vòng lặp trên String, Array.
Hoặc các đối tượng tương tự như Array

Cú pháp
for (variable of iterable) {
  statement
}

variable
Tên biến đại diện cho một phần tử được loop.

iterable
Array, String,... các đối tượng để chạy vòng lặp
*/