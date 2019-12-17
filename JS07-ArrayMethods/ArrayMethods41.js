/*
Cho 1 mảng các số tự nhiên datas.
In ra "Yes" Nếu tất cả các phần từ của mạng là số chẵn

Nếu không in ra "No"

Ví dụ:
datas = [1, 2, 3, 4, 5];  In ra: "No"
datas = [2, 4, 6]; In ra: "Yes"
Đầu vào: datas
Đầu ra: "Yes" hoặc "No"
*/

function isEvenNumber(element) {
    return element % 2 == 0;
}

function run(datas) {
    var check = datas.every(isEvenNumber);
    if (check) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

/*
Phương thức every() kiểm tra xem tất cả các phần tử trong mảng có vượt qua kiểm tra được thực hiện bởi hàm được cung cấp hay không.
Nó trả về giá trị Boolean.

Ví dụ:
function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true

Cú pháp
arr.every(callback(element[, index[, array]])[, thisArg])

callback: Một hàm để kiểm tra cho từng phần tử, lấy ba đối số:
    element: Phần tử hiện tại đang được xử lý trong mảng.
    index (Optional): Chỉ mục của phần tử hiện tại đang được xử lý trong mảng.
    array (Optional): Các mảng được gọi theo.

thisArg: Một giá trị để sử dụng như thế này khi thực hiện callback.

Mô tả
Mỗi phương thức thực thi hàm gọi lại được cung cấp một lần cho mỗi phần tử có trong mảng cho đến khi nó tìm thấy hàm trong đó gọi lại trả về giá trị false.
Nếu một phần tử như vậy được tìm thấy, mọi phương thức ngay lập tức trả về false. Mặt khác, nếu hàm callback trả về một giá trị true cho tất cả các phần tử, phương thức every sẽ trả về true.

Ví dụ: Ví dụ sau kiểm tra xem tất cả các phần tử trong mảng có lớn hơn 10 không.

function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
*/