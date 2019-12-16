/*
Cho chương trình mẫu.
Khai báo các biến để chương trình in ra các giá trị sau
Đầu vào: Không có
Đầu ra: hiển thị các giá trị sau
24
JavaScript
[ 1, 2 ]
{ a: 'x', b: 'y' }
*/

function run() {
    var my_number = 24;
    var my_string = 'JavaScript';
    var my_array = [1, 2];
    var my_object = {
        a: 'x',
        b: 'y'
    };

    console.log(my_number);
    console.log(my_string);
    console.log(my_array);
    console.log(my_object);
};

/*
Các kiểu dữ liệu về cơ bản chỉ định loại dữ liệu nào có thể được lưu trữ và các sử dụng trong một chương trình.
Có sáu loại dữ liệu cơ bản trong JavaScript có thể được chia thành ba loại chính: nguyên thủy (hoặc sở cấp), hỗn hợp (hoặc tham chiếu) và các loại dữ liệu đặc biệt.
Chuỗi, Số và Boolean là các kiểu dữ liệu nguyên thủy.
Object, Array và Function (là tất cả các loại đối tượng) là các kiểu dữ liệu hỗn hợp.
Trong đó Undefined và Null là các loại dữ liệu đặc biệt.

Các kiểu dữ liệu nguyên thủy chỉ có thể giữ một giá trị tại một thời điểm, trong khi các kiểu dữ liệu hỗn hợp có thể chứa các tập hợp các giá trị và các thực thể phức tạp hơn.

String (Kiểu chuỗi)
Kiểu dữ liệu chuỗi được sử dụng để thể hiện dữ liệu văn bản (nghĩa là các chuỗi ký tự).
Chuỗi được tạo bằng cách sử dụng dấu ngoặc đơn hoặc kép bao quanh một hoặc nhiều ký tự.

Number (Kiểu số)
Kiểu dữ liệu số được sử dụng để biểu thị các số dương hoặc âm có hoặc không có vị trí thập phân hoặc các số được viết bằng ký hiệu số mũ như 1.5e-4 (tương đương 1.5x10-4)
Kiểu dữ liệu Số cũng bao gồm một số giá trị đặc biệt đó là: Vô cực, âm vô cực và NaN.
Vô cực đại diện cho  ∞, lớn hơn bất kỳ số nào.
Vô cực là kết quả của việc chia một số khác không cho 0.
Trong khi NaN đại diện cho giá trị đặc biệt Not-a-Number (Không phải là số).
Đó là kết quả của một phép toán không hợp lệ hoặc không xác định, như căn bậc 2 của -1, hay chia 0 cho 0. v.v

Boolean
Kiểu dữ liệu Boolean chỉ có thể chứa hai giá trị: true hoặc false.
Nó thường được sử dụng để lưu trữ các giá trị như có (đúng) hoặc không (sai), on(đúng) hoặc off(sai), v.v.

Null
Đây là một loại dữ liệu đặc biệt khác chỉ có thể có một giá trị - giá trị null.
Giá trị null có nghĩa là không có giá trị.
Nó không tương đương với một chuỗi rỗng ("") hoặc 0, nó chỉ đơn giản là không có gì.
Một biến có thể được làm trống rỗng , xóa bỏ nội dung hiện tại của nó bằng cách gán cho nó giá trị null.

Object (Kiểu đối tượng)
Object là một kiểu dữ liệu phức tạp cho phép bạn lưu trữ các tập dữ liệu.
An object contains properties, defined as a key-value pair.
A property key (name) is always a string, but the value can be any data type, like strings, numbers, booleans, or complex data types like arrays, function and other objects.
You'll learn more about objects in upcoming chapters.
Một object chứa các thuộc tính, được định nghĩa là một cặp key-value.
key (tên thuộc tính) luôn là 1 chuỗi, Nhưng value (giá trị) của nó có thể là bất kỳ loại dữ liệu nào, như chuỗi, số, booleans hoặc các loại dữ liệu phức tạp như mảng, hàm và các đối tượng khác.

Array (Kiểu mảng)
Mảng là một loại đối tượng được sử dụng để lưu trữ nhiều giá trị trong một biến.
Mỗi giá trị (còn được gọi là một phần tử) trong một mảng có một vị trí số, được gọi là chỉ mục của nó và nó có thể chứa dữ liệu của bất kỳ loại dữ liệu nào - số, chuỗi, booleans, hàm, đối tượng và thậm chí các mảng khác.
Chỉ số mảng bắt đầu từ 0, do đó phần tử mảng đầu tiên là arr[0] không phải là arr[1].
Cách đơn giản nhất để tạo một mảng là bằng cách chỉ định các thành phần mảng dưới dạng một danh sách được phân tách bằng dấu phẩy được bao quanh bởi dấu ngoặc vuông.

Function (Kiểu hàm)
Hàm này là đối tượng có thể gọi được cái mà thực thi một khối lệnh.
Vì các hàm là các đối tượng, vì vậy có thể gán chúng cho các biến.
*/