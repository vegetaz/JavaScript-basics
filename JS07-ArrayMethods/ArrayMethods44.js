/*
Cho 1 mảng số tự nhiên datas.
Tìm ra số dương đầu tiên trong mảng và in ra chỉ mục và giá trị với định dạng "{index} {value}"

Ngoài ra, in ra "No result" nếu không có số dương nào trong mảng

Ví dụ: 
datas = [-1, -2, 3, 4,-5]; Print: "2 3"
datas = [-1, 2, 3, 4,-5]; Print: "1 2"
datas = [-1, -2]; Print: "No result"
Đầu vào: datas
Đầu ra: số dương đầu tiên trong mảng
*/

function isPositiveNumber(element) {
    return element >= 0;
}

function run(datas) {
    var val = datas.find(isPositiveNumber);
    var ind = datas.findIndex(isPositiveNumber);
    if (val && i != -1) {
        console.log(ind + ' ' + val);
    } else {
        console.log('No result');
    }
}

/*
Array.find()
Phương thức find() trả về giá trị của phần tử đầu tiên trong mảng thỏa mãn hàm kiểm tra được cung cấp.
Nếu không, không xác định được trả lại.

Cú pháp
arr.find(callback(element[, index[, array]])[, thisArg])

callback: Một hàm để kiểm tra cho từng phần tử, lấy ba đối số:
    element: Phần tử hiện tại đang được xử lý trong mảng.
    index (Optional): Chỉ mục của phần tử hiện tại đang được xử lý trong mảng.
    array (Optional): Các mảng được gọi theo.

thisArg: Một giá trị để sử dụng như thế này khi thực hiện callback.

Ví dụ:
var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);
// expected output: 12

Array.findIndex()
Phương thức findIndex() trả về chỉ mục của phần tử đầu tiên trong mảng thỏa mãn hàm kiểm tra được cung cấp.
Mặt khác, nó trả về -1, chỉ ra rằng không có phần tử nào vượt qua bài kiểm tra.

Cú pháp:
arr.findIndex(callback(element[, index[, array]])[, thisArg])
callback: Một hàm để kiểm tra cho từng phần tử, lấy ba đối số:
    element: Phần tử hiện tại đang được xử lý trong mảng.
    index (Optional): Chỉ mục của phần tử hiện tại đang được xử lý trong mảng.
    array (Optional): Các mảng được gọi theo.

thisArg: Một giá trị để sử dụng như thế này khi thực hiện callback.

Ví dụ:
var array1 = [5, 12, 8, 130, 44];

function isLargeNumber(element) {
  return element > 13;
}

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
*/