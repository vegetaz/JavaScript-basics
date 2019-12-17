/*
Cho 1 object a.
In tất cả thuộc tính và giá trị với định dạng "{property} is {value}" 
Ví dụ: a = {name:"Peter", address: "Ha Noi"}
Kết quả cần in ra
name is Peter
address is Ha Noi
Đầu vào: Object a
Đầu ra: In tất cả thuộc tính và giá trị 
*/

function run() {
    var person = {
        name: "Tuan Phong",
        age: 1,
        addr: "Ha Noi",
        is_boy: true
    };
    for (prop in person) {
        console.log(prop + ' is ' + person[prop]);
    }
}

/*
Vòng lặp for ... in được sử dụng để lặp qua các thuộc tính của đối tượng.
Vì chúng tôi chưa thảo luận về Đối tượng, bạn có thể không cảm thấy thoải mái với vòng lặp này.
Nhưng một khi bạn hiểu cách các đối tượng hành xử trong JavaScript, bạn sẽ thấy vòng lặp này rất hữu ích.

Cú pháp
for (variable in object) {
  statement
}

variable
Một tên thuộc tính khác nhau được gán cho variable  trên mỗi lần lặp

object
Đối tượng có các thuộc tính không phải là Biểu tượng được lặp lại.
*/