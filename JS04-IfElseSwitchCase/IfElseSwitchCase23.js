/*
Cho 1 số từ 0 đến 6.
Viết chương trình để in ra thứ trong tuần
number: 0 => Thứ trong tuần: Sunday
number: 1 => Thứ trong tuần: Monday
number: 2 => Thứ trong tuần: Tuesday
number: 3 => Thứ trong tuần: Wednesday
number: 4 => Thứ trong tuần: Thursday
number: 5 => Thứ trong tuần: Friday
number: 6 => Thứ trong tuần: Saturday
Ví dụ:
Cho number = 0; in ra: Sunday
Cho number = 4; in ra: Thursday
Cho number = 6; in ra: Saturday
Đầu vào: 1 số từ 0 đến 6
Đầu ra: In ra thứ trong tuần
*/

function run(the_number) {
    var day_of_week_name = '';
    switch (the_number) {
        case 0:
            day_of_week_name = 'Sunday';
            break;
        case 1:
            day_of_week_name = 'Monday';
            break;
        case 2:
            day_of_week_name = 'Tuesday';
            break;
        case 3:
            day_of_week_name = 'Wednesday';
            break;
        case 4:
            day_of_week_name = 'Thursday';
            break;
        case 5:
            day_of_week_name = 'Friday';
            break;
        case 6:
            day_of_week_name = 'Saturday';
            break;
        default:
            break;
    }
    console.log(day_of_week_name);
}

/*
Bạn có thể dùng nhiều lệnh if...else…if , như đã cung cấp ở phần trước, để thực hiện 1 nhánh với nhiều lối đi.
Tuy nhiên điều đó không phải là giải pháp tốt nhất, đặc biệt là khi tất cả các nhánh phụ thuộc vào giá trị của một biến duy nhất.
Tuy nhiên ở đây mỗi trường hợp xác định bằng một lệnh điều kiện, bạn có thể sử dụng lệnh switch...case, lệnh mà dễ đọc và hiểu hơn.
switch...case
Kiểu của biểu thức là trả về giá trị của biến x có thể một trong các kiểu char, byte, short, int, Character, Byte, Short, Integer, String hoặc enum.
Hãy chú ý từ khóa break, nó buộc lệnh switch...case dừng lại.
Nếu không có nó, việc này chỉ được chấp nhận khi case đó không có bất kỳ một lệnh nào, ngược lại, lệnh case đó sẽ bị báo lỗi cú pháp.
Chúng ta sẽ nói về lệnh break trong một khóa phía sau về các lệnh rẽ nhánh.

Switch với nhiều trường hơp và có cũng cách sử lý
Có nhiều trường hợp một phạm vi không phải là giải pháp phù hợp, nhưng bạn cần áp dụng cùng một thực thi cho nhiều giá trị.
Đây là nơi mà câu lệnh chuyển đổi có thể rất tiện dụng.
Thay vì tạo một câu lệnh if lộn xộn với nhiều đánh giá biểu thức, bạn có thể 'xếp chồng' các trường hợp.
Đây là một biến thể, tất cả đều rất đơn giản, trong ngày của ví dụ trong tuần.
Ở đây tôi trình bày cách bạn có thể sử dụng câu lệnh chuyển đổi trong ứng dụng lịch.
*/