/*
Cho 1 object person  = {firstName:"Trung", lastName:"Vuong", age:50, eyeColor:"blue"};

Lấy ra tất cả các giá trị của các thuộc tính trong object và in chúng ra

Đầu vào: Không có
Đầu ra: 
Trung
Vuong
50
blue

Gợi ý
Đọc phần lý thuyết để hiểu về Object.values()
*/

function run() {
    var person  = {
        firstName: "Trung",
        lastName: "Vuong",
        age: 50,
        eyeColor: "blue"
    };
    var values = Object.values(person);
    console.log(values);
}

/*
Phương thức Object.values() trả về một mảng các giá trị thuộc tính có thể đếm được của chính một đối tượng nhất định, theo cùng thứ tự được cung cấp bởi một vòng lặp for ... in

Cú pháp
Object.values(obj);

Ví dụ:
const object1 = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.values(object1));
// output: Array ["a", "b", "c"]

Object.values() trả về một mảng có các phần tử là các giá trị thuộc tính có thể đếm được tìm thấy trên đối tượng.
Thứ tự của các thuộc tính giống như thứ tự được đưa ra bằng cách lặp qua các giá trị thuộc tính của đối tượng theo cách thủ công.
*/