/*
Cho 1 số n.
Viết một chương trình để tính toán và in ra màn hình giai thừa của số đã nhập (n!)
Ví dụ:
Với n = 5, đầu ra được in ra màn hình là  "120"
Vì 5! = 5 * 4 * 3 * 2 * 1 = 120
Với n = 3, đầu ra được in ra màn hình là  "6"
Vì 3! = 3 * 2 * 1 = 6
Đầu vào: 1 số nguyên n nhập từ bàn phím
Điều kiện tiền đề:
1 ≤ n ≤ 20
Đầu ra: giai thừa của số đã cho n
*/

function run(n) {
    var factorial = 1;

    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    console.log(factorial);
}

/*
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
Statement 1 is executed (one time) before the execution of the code block.
Statement 2 defines the condition for executing the code block.
Statement 3 is executed (every time) after the code block has been executed.
*/