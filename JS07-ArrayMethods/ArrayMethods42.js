/*
Cho 1 mảng các số tự nhiên datas.
In ra "Yes" Nếu 1 vài phần từ của mạng là số chẵn

Nếu không, in ra "No"

Ví dụ:
datas = [1, 2, 3, 4, 5]; In ra: "Yes"
datas = [1, 1, 3, 1, 5]; In ra: "No"
Đầu vào: datas
Đầu ra: "Yes" hoạc "No"
*/

function isEvenNumber(element) {
    return element % 2 == 0;
}

function run(datas) {
    var check = datas.some(isEvenNumber);
    if (check) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

/*
Phương thức some() kiểm tra xem ít nhất một phần tử trong mảng có vượt qua kiểm tra được thực hiện bởi hàm được cung cấp hay không.
Nó trả về giá trị Boolean.

Ví dụ
var array1 = [1, 2, 3, 101, 5];
var array2 = [1, 2, 3, 5];

var isBig= function(element) {
  // checks whether an element is even
  return element >= 100;
};

console.log(array1.some(isBig));
// output: true

console.log(array2.some(isBig));
// output: false

Cú pháp
arr.some(callback(element[, index[, array]])[, thisArg])

callback: Một hàm để kiểm tra cho từng phần tử, lấy ba đối số:
    element: Phần tử hiện tại đang được xử lý trong mảng.
    index (Optional): Chỉ mục của phần tử hiện tại đang được xử lý trong mảng.
    array (Optional): Các mảng được gọi theo.

thisArg: Một giá trị để sử dụng như thế này khi thực hiện callback.

Mô tả
Phương thức some() thực thi hàm callback một lần và lặp qua từng phần tử của mảng cho đến khi hàm callback trả về một giá trị truthy (tức là true khi được chuyển sang kiểu Boolean).
Nếu như có một phần tử thoả mãn, some() sẽ lập tức trả về true.
Ngược lại sẽ trả về false.
callback được gọi chỉ khi các phần tử của mảng có giá trị.

Ví dụ bên dưới đang kiểm tra xem có phần tử nào lớn hơn 10 hay không.
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
*/