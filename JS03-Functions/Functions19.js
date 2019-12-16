/*
Cho chương trình mẫu.
Gọi hàm callback để hiển thị kết quả của a và b
Đầu vào: không có
Đầu ra: hiển thị kết quả của a và b
*/

function display_result(sum) {
    console.log('sum is ' + sum);
}

function add_two_numbers(callback, a, b) {
    var sum = a + b;
    display_result(sum);
}

function run() {
    var a = 5;
    var b = 7;
    add_two_numbers(display_result, a, b);
}

/*
Hàm callback là một hàm được truyền vào một hàm khác dưới dạng đối số, sau đó được gọi bên trong hàm ngoài để hoàn thành một số loại thường trình hoặc hành động.

Phương thức chuyển các hàm này sang các hàm khác để sử dụng chúng bên trong được sử dụng trong các thư viện JavaScript ở hầu hết mọi nơi.
Tên chung cho hàm được truyền vào là hàm callback.
Trong lập trình máy tính, một cuộc gọi lại là một đoạn mã thực thi được truyền dưới dạng đối số cho mã khác, dự kiến sẽ gọi lại (thực thi) đối số vào một thời điểm thuận tiện.
Lệnh gọi có thể ngay lập tức như trong một cuộc gọi lại đồng bộ hoặc nó có thể xảy ra vào thời gian sau, như trong một cuộc gọi lại không đồng bộ.
Chúng tôi sẽ quay lại các cuộc gọi lại đồng bộ và không đồng bộ trong một phần khác.

Không giới hạn việc gọi bao nhiêu lần
Một điều khác cần chú ý là bạn có thể chuyển bao nhiêu hàm callback tùy thích sang chức năng khác.
*/