/*
Cho 2 số a, b.
In ra kết quả của a chia cho b với 2 phần thập phân

Ví dụ:
Cho a = 1; b = 2; In ra "0.50";
Cho a = 1; b = 3; In ra "0.33";
Cho a = 2; b = 1; In ra "2.00";
Đầu vào: a, b
Đầu ra: In ra kết quả của a chia cho b với 2 phần thập phân
*/

function run(a, b) {
    let c = a / b;
    let d = c.toFixed(2);
    console.log(d);
}

/*
toFixed() sẽ chuyển đổi một số thành kiểu chuỗi, giữ lại số chữ số thập phân do người dùng xác định.

Cú pháp
numObj.toFixed([digits])

Ví dụ
var numObj = 12345.6789;

numObj.toFixed();       // Returns '12346': note rounding, no fractional part
numObj.toFixed(1);      // Returns '12345.7': note rounding
numObj.toFixed(6);      // Returns '12345.678900': note added zeros
*/