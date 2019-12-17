/*
Cho 1 mảng số tự nhiên datas.
Lấy tất cả các số dương thành 1 mảng mới và in ra nó

Ví dụ:
datas = [1,- 2, 3, 4,-5];  in ra: [1, 3, 4]
Đầu vào: datas
Đầu ra: mảng các số dương
*/

function isPositiveNumber(element) {
    return element >= 0;
}

function run(datas) {
    var arr = datas.filter(isPositiveNumber);
    console.log(arr);
}

/*
Phương thức filter() tạo ra một mảng mới với tất cả các phần tử vượt qua kiểm tra được thực hiện bởi hàm được cung cấp.

Ví dụ
function isBigEnough(value) {
  return value >= 10;
}
var array1 = [12, 5, 8, 130, 44];

var filtered = array1.filter(isBigEnough);
// output: [12, 130, 44]

Cú pháp
var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])

callback: Một hàm để kiểm tra cho từng phần tử, lấy ba đối số:
    element: Phần tử hiện tại đang được xử lý trong mảng.
    index (Optional): Chỉ mục của phần tử hiện tại đang được xử lý trong mảng.
    array (Optional): Các mảng được gọi theo.

thisArg: Một giá trị để sử dụng như thế này khi thực hiện callback.

Mô tả
filter() sẽ thực thi hàm callback trên từng phần tử của mảng, và xây dựng một mảng mới với các phần tử mà giá trị trả về của callback nếu ép kiểu sẽ mang giá trị true.
callback chỉ được thực thi tại những chỉ mục (index) của mảng mà chúng được gán giá trị; nó không được thực thi tại chỉ mục đã bị xóa hoặc chưa từng được gán giá trị.
Những phần tử không thỏa điều kiện tại hàm thử callback sẽ bị bỏ qua, không được cho vào mảng mới.
*/