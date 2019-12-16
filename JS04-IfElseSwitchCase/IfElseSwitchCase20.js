/*
Cho 1 số tự nhiên n.
Viết chương trình kiểm tra n là số lẻ hay chẵn.
Nếu number là số chẵn , In ra "Even number" và "Done".
Ngoài ra, in "Done" ra màn hình.
Ví dụ:
Cho n = 10, kết quả nên in ra như sau:
Even number Done
Cho n = 151, Kết quả nên in ra là "Done"
Đầu vào:  n
Đầu ra: Nếu n là số chẵn, In ra màn hình "Even number" và "Done". Ngoài ra in "Done" ra màn hình
*/

function run(n) {
    var mes = "";
    if (n % 2 == 0) {
        mes = "Even number ";
    }
    mes += "Done";
    console.log(mes);
}

/*
Các lệnh lựa chọn có 3 biến thể:
Lệnh if 
Lệnh if...else 
Lệnh if...else if-...-else

Lệnh IF 
Câu lệnh if đơn giản cho phép thực thi một câu lệnh nhất định hoặc một khối điều kiện, chỉ khi kết quả của biểu thức đánh giá được thỏa mãn.
*/