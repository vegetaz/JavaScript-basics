/*
Cho 1 số nguyên dương n.
Viết một chương trình đếm và in ra màn hình có bao nhiêu lần số đã cho chia hết cho 2. 
Ví dụ:
Với n = 7, đầu ra là "0"
Vì 7 không chia hết cho 2. Tổng số lần 7 chia hết cho 2 là 0.
Với n = 8, đầu ra là "3"
Vì 8 chia 2 được 4, 4 chia 2 được 2, 2 chia 2 được 1 và 1 không chia hết cho 2. Tổng số lần 8 chia hết cho 2 là 3.
Đầu vào: 1 số nguyên n nhập từ bàn phím
Điều kiện tiền đề:
1 ≤ n ≤ 1000000
Đầu ra: số lần mà số đã cho n có thể chia hết cho 2.
*/

function run(n) {
    let i = 0;
    do {
        if (n % 2 == 0) {
            i++;
        }
        n /= 2;
    }
    while (n % 2 == 0)

    console.log(i);
}

/*
Tương tự như lệnh while, lệnh do...while xử lí 1 biểu thức điều kiện và 1 khối lệnh được lặp lại cho đến khi giá trị của biểu thức cho ra giá trị false:
do {
  //statement or block
} while (condition)

Tuy nhiên nó xử lí khối lệnh một lần trước khi biểu thức điều kiện được kiểm tra, nghĩa là khối lệnh đó sẽ được xử lí ít nhất 1 lần.
*/