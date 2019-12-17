/*
Cho 1 số n.
Sử dụng while loop để in ra các số chẵn từ 1 tới n
Ví dụ:
n = 7; In ra: 2,4,6
n = 10; In ra: 2,4,6,8,10
Đầu vào: n
Đầu ra: các số chẵn từ 1 tới n
*/

function run(n) {
    var output = "";
    var i = 0;
    while (i < n) {
        if (i % 2 == 0) {
            output = output + i;
        }
        i++;
    }

    console.log(output);
}

/*
Lệnh while xử lí 1 biểu thức điều kiện và 1 khối lệnh được lặp lại cho đến khi giá trị của biểu thức cho ra giá trị false:

while (condition){
  //do something
}

Đây là 2 điều cần chú ý:
Dấu {} là không cần thiết khi chỉ có một câu lệnh cần được xử lí lặp lại, tuy nhiên việc sử dụng nó được cân nhắc hơn cho tính đồng nhất và tốt hơn cho việc hiểu mã lệnh.
Lệnh có thể không được xử lí bất kỳ lần nào (khi biểu thức điều kiện trả về false ngay từ ban đầu)
*/