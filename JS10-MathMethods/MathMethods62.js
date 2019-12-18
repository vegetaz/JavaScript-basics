/*
Chạy code mẫu và xem kết quả trả về

Đầu vào: None
Đầu ra: None
*/

function run() {
    console.log(Math.abs(-3)); // returns 3
    console.log(Math.abs(4)); // returns 4

    console.log(Math.acos(1)); // 0
    console.log(Math.acos(2)); // NaN

    console.log(Math.asin(0)); // 0
    console.log(Math.asin(2)); // NaN

    console.log(Math.atan(0)); // 0

    console.log(Math.cbrt(8)); // 2

    console.log(Math.ceil(1)); // 1
    console.log(Math.ceil(1.01)); // 2

    console.log(Math.floor(5.95)); // 5
    console.log(Math.floor(5)); // 5

    console.log(Math.hypot(3, 4)); // 5
    console.log(Math.hypot(5, 12)); // 13

    console.log(Math.max(1, 3, 2)); // 3
    console.log(Math.max(-1, -3, -2)); // -1

    console.log(Math.min(1, 3, 2)); // 1
    console.log(Math.min(-1, -3, -2)); // -2

    console.log(Math.pow(2, 3)); // 8
    console.log(Math.pow(7, 2)); // 49

    console.log(Math.round(5.95)); // 6
    console.log(Math.round(5.5)); // 6
    console.log(Math.round(5.05)); // 5

    console.log(Math.sqrt(4)); // 2
    console.log(Math.sqrt(9)); // 3

    console.log(Math.trunc(13.37)); // 13
    console.log(Math.trunc(-0.123)); // -0
    console.log(Math.trunc(0.123)); // 0
}

/*
Math là một đối tượng tích hợp có các thuộc tính và phương thức cho các hằng số và hàm toán học.
Không phải là một đối tượng chức năng.
Math làm việc với kiểu Number.
Nó không làm việc với kiểu BigInt.
Không giống như các đối tượng toàn cục khác, Math không phải là một hàm tạo.
Tất cả các thuộc tính và phương pháp của Math là tĩnh.
Bạn gọi hằng số pi là Math.PI và bạn gọi hàm sin là Math.sin (x), trong đó x là đối số của phương thức.
Các hằng số được xác định với độ chính xác đầy đủ của các số thực trong JavaScript.

Các phương thức phổ biến của Math

Phương thức     Mô tả

abs()           Trả về giá trị tuyệt đối của số đã cho
acos()          Trả về arccosine của số đã cho bằng radian.
asin()          Trả về arcsine của số đã cho bằng radian.
atan()          Trả về arc-tangentcủa số đã cho bằng radian.
cbrt()          Trả về căn bậc ba của số đã cho
ceil()          Trả về một giá trị nguyên nhỏ nhất, lớn hơn hoặc bằng số đã cho.
cos()           Trả về cosin của số đã cho.
cosh()          Trả về cosin hyperbol của số đã cho.
exp()           Trả về dạng số mũ của số đã cho.
floor()         Trả về giá trị nguyên lớn nhất, thấp hơn hoặc bằng số đã cho.
hypot()         Trả về căn bậc hai của tổng bình phương của các số đã cho.
log()           Trả về logarit tự nhiên của một số.
max()           Trả về giá trị tối đa của các số đã cho.
min()           Trả về giá trị tối thiểu của các số đã cho.
pow()           Nó trả về giá trị số mũ.
random()        Nó trả về số ngẫu nhiên trong khoảng từ 0 (đã bao gồm) và 1 (độc quyền).
round()         Nó trả về giá trị nguyên gần nhất của số đã cho.
sign()          Nó trả về dấu của số đã cho
sin()           Nó trả về sin của số đã cho.
sinh()          Nó trả về hyperbolic sine của số đã cho.
sqrt()          Nó trả về căn bậc hai của số đã cho
tan()           Nó trả về tangent của số đã cho.
tanh()          Nó trả về hyperbolic tangent của số đã cho.
trunc()         Nó trả về một phần nguyên của số đã cho.
*/