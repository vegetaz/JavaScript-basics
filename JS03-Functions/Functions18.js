/*
Cho 1 chương trình mẫu.
Sử dụng function get_abs để lấy giá trị tuyệt đối của biến x và in ra màn hình
Đầu vào: Không có
Đầu ra: lấy giá trị tuyệt đối của biến x và in ra màn hình
*/

function get_abs(n) {
    var abs;
    if (n < 0) {
        n = n * -1;
    }
    abs = n;
    console.log(abs);
}

function run(n) {
    get_abs(n);
}

/*
Một function có thể trả về một giá trị cho tập lệnh gọi function là kết quả bằng cách sử dụng câu lệnh return.
Giá trị có thể thuộc bất kỳ loại nào, bao gồm mảng và đối tượng

Lệnh return thường được đặt là dòng cuối cùng của hàm trước dấu ngoặc nhọn đóng và kết thúc nó bằng dấu chấm phẩy ;.
Và nếu một function trả về một giá trị, nó sẽ dừng việc thực thi của function đó.
Nó có nghĩa là phần còn lại của mã sẽ không được thực thi.
*/