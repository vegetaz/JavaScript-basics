/*
Cho 1 mảng số tự nhiên datas.
Sử dụng Array.forEach() để in ra tất cả các phần tử chia hết cho 5 của mảng

Ví dụ:
datas = [1, 5, 30, 26]; in ra
5
30
Đầu vào: datas
Đầu ra: in ra tất cả các phần tử của mảng
*/

function run(datas) {
    datas.forEach(function(element) {
        if (element % 5 == 0) {
            console.log(element);
        }
    });
}

/*
Phương thức forEach() thực thi một hàm được cung cấp một lần cho mỗi phần tử mảng.
Có thể thay thế for để duyệt mảng

Cú pháp
arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);

callback: Hàm xử lý mỗi phần tử, có 3 tham số
    currentValue: Phần tử hiện tại đang được xử lý trong mảng
    index (tùy chọn): Chỉ mục của phần tử hiện tại đang được xử lý trong mảng.
    array (tùy chọn): Mảng đang được foreach() xử lý.

thisArg (tùy chọn): Giá trị được gán cho từ khóa this bên trong hàm callback khi được thực thi.

Ví dụ:
var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});

// output: "a"
// output: "b"
// output: "c"

function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

// Notice that index 2 is skipped since there is no item at
// that position in the array.
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
*/