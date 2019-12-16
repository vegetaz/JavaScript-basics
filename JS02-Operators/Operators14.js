/*
Cho 2 số a và b.
Viết chương trình sử dụng toán tử logic để in ra kết quả (true or false) của a và b.
Các quan hệ logic sau 
(a%2 == 0) && (b%2 == 0)
(a%2 == 0) || (b%2 == 0)
!(a > b)

Ví dụ: Cho a = 20, b = 11, Kết quả sẽ là:
((a%2 == 0) && (b%2 == 0)) is false
((a%2 == 0) || (b%2 == 0)) is true
!(a > b) is false
Đầu vào: 2 số  a and b.
*/

function run(a, b) {
    console.log("((a%2 == 0) && (b%2 == 0)) is " + ((a % 2 == 0) && (b % 2 == 0)));
    console.log("((a%2 == 0) || (b%2 == 0)) is " + ((a % 2 == 0) || (b % 2 == 0)));
    console.log("!(a > b) is " + !(a > b));
}

/*
Các toán tử sau được gọi là toán tử logic JavaScript.
Toán tử     Tên     Mẫu                             Mô tả
&&          AND     expession1 && expression2       Cả hai biểu thức phải trả về true nếu kết quả là true
||          OR      Lexpession1 || expression2      Một trong các biểu thức phải trả về true nếu kết quả sẽ đúng
!           NOT     !expression                     Trả về true nếu expression là false và ngược lại trả về false nếu expression là true

*/