/*
Cho 1 mảng số tự nhiên datas.
In ra "Yes" nếu mảng có phần tử có giá trị "5".
Nếu không in ra "No"

Ví dụ:
datas = [1, 2, 3, 4, 6]; Print: "No"
datas = [1, 2, 3, 5, 6]; Print: "Yes"
Đầu vào: datas
Đầu ra: "Yes" hoặc "No"
*/

function run(datas) {
    var check = datas.includes(5);
    if (check == true) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

/*
Phương thức include() xác định xem một mảng có bao gồm một giá trị nhất định trong số các mục nhập của nó hay không.
Trả về true hoặc false khi thích hợp.

Cú pháp
arr.includes(valueToFind[, fromIndex])

valueToFind: Giá trị muốn kiểm tra.
fromIndex (Tùy chọn): Vị trí trong mảng để bắt đầu tìm kiếm valueToFind; đầu tìm kiếm tại fromIndex khi fromIndex mang giá trị dương, hoặc tại array.length + fromIndex khi fromIndex mang giá trị âm (sử dụng giá trị tuyệt đối của fromIndex làm số lượng kí tự tính từ cuối mảng làm vị trí bắt đầu).
Giá trị mặc định là 0.

Ví dụ
var array1 = [1, 2, 3];

console.log(array1.includes(2));
// output: true

var pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// output: true

console.log(pets.includes('at'));
// output: false

Ví dụ với fromIndex
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(3);     // true
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
*/