/*
Cho 3 số a, b và c.
Hoàn thành chương trình để in ra số lớn nhất
Ví dụ:
Cho a = 5, b = 7, c = 1, Kết quả in ra nên là The greatest number is 7
Cho a = 2, b = 2, c = 2, Kết quả in ra nên là The greatest number is 2
Đầu vào : a, b, c
Đầu ra: Tìm số lớn nhất và in ra màn hình với định dạng: The greatest number is MaxNumber
*/

function run(a, b, c) {
    var greatest = a;
    if (b > a && b > c) {
        greatest = b;
    } else if (c > a && c > b) {
        greatest = c;
    }
    console.log("The greatest number is " + greatest);
}

/*
if..else
Cấu trúc if...else cho phép xử lí một khối lệnh nếu biểu thức trong if có giá trị là true, ngược lại, khối lệnh khác được xử lí.
Bạn có thể thấy dễ ràng hơn cho việc đọc code khi dấu {} được sử dụng thích hợp.
Như trong phần trước của lệnh if, mỗi khối lệnh có thể có nhiều khối lệnh con khác với lệnh if khác, và cứ như thế có thể có nhiều khối lệnh con phía trong nếu cần thiết.
if...else if-...-else
Bạn có thể sử dụng hình thức này để tránh tạo ra nhiều khối lệnh con và làm code dễ để đọc và hiểu hơn.
*/