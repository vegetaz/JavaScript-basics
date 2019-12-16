/*
Cho 2 số a và b.
Sử dụng hàm get_sum để tính tổng của a, b và in ra kết quả
Ví dụ:
Cho a = 5; b = 4; In ra: 9
Cho a = 1; b = 2; In ra: 3
Đầu vào: Không có
Đầu ra: hiển thị tổng của a và b
*/

function get_sum(x, y) {
    var i_sum = x + y;
    console.log(i_sum);
}

function run(a, b) {
    get_sum(a, b);
}

/*
Bạn có thể chỉ định tham số khi bạn khai báo function của mình để nhận giá trị đầu vào trong thời gian chạy.
Các tham số hoạt động như các biến giữ chỗ trong một function;
chúng được thay thế vào thời gian chạy bằng các giá trị (được gọi là đối số) được cung cấp cho function tại thời điểm gọi.

Các tham số được đặt trên dòng đầu tiên của hàm bên trong bộ dấu ngoặc đơn.

Bạn có thể định nghĩa bao nhiêu tham số tùy thích.
Tuy nhiên, đối với mỗi tham số bạn chỉ định, một đối số tương ứng cần được truyền cho hàm khi nó được gọi, nếu không giá trị của nó sẽ không được xác định undefined.
*/