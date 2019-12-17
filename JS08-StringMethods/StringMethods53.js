/*
Cho 1 chuỗi name.
Viết chương trình thêm phương thức mới cho chuỗi để kiểm tra chuỗi là chuỗi lớn hay không.
Chuỗi lớn là chuỗi có trên 10 ký tự

Và in kết quả ra màn hình "true" hay "false"

Ví dụ:
name = "JS"; in ra"false"
name = "JavaScriptJavaScript"; in ra "true"
Đầu vào: name
Đầu ra: "true" hay "false"
*/

String.prototype.is_big = function(str) {
    if (this.length > 10) {
        return true
    }
    return false;
};

function run(name) {
    var result = name.is_big();
    console.log(result);
}

/*
Các giá trị nguyên thủy, như "John Doe", thông thường không thể có thuộc tính hay phương thức (vì chúng không phải là 1 object).

Nhưng trong JS thì có vì JavaScript đối xử với các giá trị nguyên thủy như object.

Thuộc tính	    Mô tả
length	        Trả về độ dài của chuỗi
prototype	    Cho phép bạn thêm thuộc tính hay phương thức

1. length
Trả về độ dài của chuỗi
Độ dài của chuối rỗng là 0.

Cú pháp:
string.length

Ví dụ:
var txt = "JS";
var sln = txt.length; // sln is 2

2. prototype
Cho phép bạn thêm thuộc tính hay phương thức
Lưu ý: Thuộc tính hay phương thức này sẽ là toàn cục nghĩa là nó có thể được dùng cho tất cả chuỗi khác

Cú pháp:
object.prototype.name = value

Ví dụ:
String.prototype.add_more = function (char) {
    return this + char;
};
var a = "Java";
var new_string  = a.add_more("Script"); // new_string is JavaScript
*/