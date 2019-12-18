/*
Cho 1 số n.
Viết chương trình kiểm tra n là số nguyên dương hay không

Ví dụ:
For n = 34; Print: true
For n = -34; Print: false
For n = 3.32333; print:  false
Đầu vào: n
Đầu ra: true hoac false. true nếu n là số nguyên dương
*/

function run(n) {
    var check = Number.isInteger(n);
    console.log(check);
}

/*
Đối tượng JavaScript Number là một đối tượng bao bọc cho phép bạn làm việc với các giá trị số.
Một đối tượng Number có thể được tạo ra sử dụng hàm khởi tạo Number().

Các phương thức phổ biến của number

Phương thức                 Mô tả

Number.isFinite()           Nó xác định xem giá trị đã cho có phải là số hữu hạn hay không.
Number.isInteger()          Nó xác định xem giá trị đã cho có phải là số nguyên hay không.
Number.parseFloat()         Nó chuyển đổi chuỗi đã cho thành một số dấu phẩy động.
Number.parseInt()           Nó chuyển đổi chuỗi đã cho thành một số nguyên.
Number.prototype.toFixed()  Nó trả về chuỗi đại diện cho một số có chữ số chính xác sau dấu thập phân.
Number.prototype.toString() Nó trả về số đã cho dưới dạng chuỗi.

Ví dụ
Number.isFinite(1/0); // false
Number.isFinite(10/5); // true
Number.isFinite(0/0); // false

Number.isInteger(99999999999999999999999); // true
Number.isInteger(0.1);       // false
Number.isInteger(Math.PI);   // false

Number.parseFloat('10') //10
Number.parseFloat('10.00') //10
Number.parseFloat('237,21') //237
Number.parseFloat('237.21') //237.21
Number.parseFloat('12 34 56') //12
Number.parseFloat(' 36 ') //36
Number.parseFloat('36 is my age') //36

Number.parseInt('10') //10
Number.parseInt('10.00') //10
Number.parseInt('237,21') //237
Number.parseInt('237.21') //237
Number.parseInt('12 34 56') //12
Number.parseInt(' 36 ') //36
Number.parseInt('36 is my age') //36

var numObj = 12345.6789;
numObj.toFixed();       // Returns '12346': note rounding, no fractional part
numObj.toFixed(1);      // Returns '12345.7': note rounding
numObj.toFixed(6);      // Returns '12345.678900': note added zeros

(10).toString();    // Returns '10'
(17).toString();     // Returns '17'
(17.2).toString();   // Returns '17.2'
*/