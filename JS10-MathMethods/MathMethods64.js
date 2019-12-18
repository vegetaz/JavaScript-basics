/*
Cho 1 số tự nhiên n.
Viết chương trình để kiểm trả n có phải là kết quả bình phương của 1 số tự nhiên hay không

Ví dụ:
Cho n = 16; In ra true
Cho n= 18; In ra false
Đầu vào: n
Đầu ra: true hay false. true nếu n là kết quả bình phương của 1 số tự nhiên
*/

function run(n) {
    let i = 0;
    while (i < n) {
        if (i == Math.sqrt(n)) {
            return true;
        }
        ++i;
    }
    return false;
}

/*
Math.sqrt() trả về giá trị căn bậc 2 của 1 số

Cú pháp
Math.sqrt(x)

Ví dụ:
Math.sqrt(9); // 3
Math.sqrt(2); // 1.414213562373095

Math.sqrt(1);  // 1
Math.sqrt(0);  // 0
Math.sqrt(-1); // NaN
Math.sqrt(-0); // -0
*/