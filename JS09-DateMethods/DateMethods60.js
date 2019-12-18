/*
Cho đoạn code mẫu.
Khai báo kiểu dữ liệu ngày tháng (date) với những thông tin sau
    năm là 2019
    tháng là 11
    ngày là 24

Và in date 
    Đầu vào: Không có
    Đầu ra: In ra ngày đó
*/

function run() {
    var date = new Date(2019, 10, 24);

    console.log(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate());
}

/*
Tạo ra một thể hiện JavaScript Date đại diện cho một khoảnh khắc trong thời gian.
Đối tượng ngày được dựa trên giá trị thời gian là số mili giây kể từ ngày 1 tháng 1 năm 1970 UTC.

Cú pháp
new Date();
new Date(value);
new Date(dateString);
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);

Không tham số
Khi không có tham số nào được cung cấp, đối tượng Ngày mới được tạo sẽ biểu thị ngày và giờ hiện tại, được chỉ định trong múi giờ địa phương, kể từ thời điểm khởi tạo.

value
Giá trị số nguyên đại diện cho số mili giây kể từ 01/01/1970-00:00:00 UTC.

dateString
Giá trị chuỗi đại diện cho một ngày.
Chuỗi phải ở định dạng được công nhận bới phương thức Date.parse().

year
Giá trị số nguyên đại diện cho năm.
Các giá trị từ 0 đến 99 ứng với các năm từ 1900 đến 1999.

monthIndex
Giá trị số nguyên đại diện cho tháng, bắt đầu với 0 cho Tháng Một đến 11 cho Tháng Mười Hai.

day (Tùy chọn)
Tùy chọn.
Giá trị số nguyên đại diện cho ngày trong tháng.
Nếu không dc chỉ định, giá trị mặc định là 1.

hours (Tùy chọn)
Giá trị số nguyên đại diện cho giờ trong ngày.
Mặc định là 0.

minutes (Tùy chọn)
Giá trị số nguyên đại diện cho phần phút của một thời gian.
Mặc định là 0.

seconds (Tùy chọn)
Giá trị số nguyên đại diện cho phần giấy của một thời gian.
Mặc định là 0.

milliseconds (Tùy chọn)
Giá trị số nguyên đại diện cho phần mili giây của một thời gian.
Mặc định là 0.

Ví dụ:
var date1 = new Date(); // Current date

var date2 = new Date('December 17, 1995 03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

var date3 = new Date('1995-12-17T03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

var date = new Date(20189, 9); // Thu Oct 01 20189 00:00:00 GMT...
	
date = new Date(20189, 9, 25); // Sun Oct 25 20189 00:00:00 GMT ...
	
date = new Date(20189, 9, 25, 6); // Sun Oct 25 20189 06:00:00 GMT...
*/