/*
Cho 2 số tự nhiên a và b.
Viết chương trình để in ra kết quả so sánh (true or false) của a và b.
Những toán tử so sánh sau 
a == b, a != b, a > b, a < b, b >= a, b <= a

Ví dụ: Cho a = 10, b = 11, kết quả sẽ là:
a == b is false
a != b is true
a > b is false
a < b is true
b >= a is true
b <= a is false
Đầu vào: 2 số a và b.
*/

function run(a, b) {
    console.log("a == b is " + (a == b));
    console.log("a != b is " + (a != b));
    console.log("a > b is " + (a > b));
    console.log("a < b is " + (a < b));
    console.log("b >= a is " + (b >= a));
    console.log("b <= a is " + (b <= a));
}

/*
Các toán tử đẳng thức == (có nghĩa là bằng) và != (Có nghĩa là không bằng) so sánh các giá trị cùng loại và trả về giá trị Boolean true nếu giá trị của các toán hạng bằng nhau hoặc ngược lại là false.
*/