/*
Cho 1 object person  = {firstName:"Trung", lastName:"Vuong", age:50, eyeColor:"blue"};
Lấy ra tất cả các tên thuộc tính của object và in chúng ra

Đầu vào: Không có
Đầu ra: 
firstName
lastName
age
eyeColor

Gợi ý
Đọc phần lý thuyết để hiểu về Object.keys()
*/

function run() {
    var person  = {
        firstName: "Trung",
        lastName: "Vuong",
        age: 50,
        eyeColor: "blue"
    };
    var key = Object.keys(person);
    console.log(key);
}

/*
Phương thức Object.keys() trả về một mảng các tên thuộc tính có thể đếm được của một đối tượng cụ thể, theo thứ tự như chúng ta nhận được với một vòng lặp thông thường.

Cú pháp
Object.keys(obj);

Ví dụ:
const object1 = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.keys(object1));
// output: Array ["a", "b", "c"]

Mô tả
Object.keys() trả về một mảng có các phần tử là các chuỗi tương ứng với các thuộc tính tìm thấy trực tiếp trên đối tượng.
Thứ tự của các thuộc tính giống như thứ tự được đưa ra bằng cách lặp qua các thuộc tính của đối tượng theo cách thủ công.
*/