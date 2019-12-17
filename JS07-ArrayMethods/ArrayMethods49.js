/*
Cho mảng số tự nhiên datas.
Chuyển tất cả các phần tử của mảng về giá trị tuyệt đối và in ra mảng mới

Ví dụ:
datas = [2, -1, -8];  In ra: [2, 1, 8]
Đầu vào: datas
Đầu ra: Chuyển tất cả các phần tử của mảng về giá trị tuyệt đối và in ra mảng mới
*/

function isAbsolute(element) {
    if (element < 0) {
        return element *= -1;
    }
    return element;
}

function run(datas) {
    var arr = datas.map(isAbsolute);
    console.log(arr);
}

/*
Phương thức map() tạo ra một mảng mới với kết quả gọi một hàm được cung cấp trên mọi phần tử trong mảng gọi.

Cú pháp
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
    // Return element for new_array
}[, thisArg])

currentValue:       Giá trị của phần tử trong mảng đang được xử lý
index (Tùy chọn):   Index của phần tử trong mảng đang được xử lý
array (Optional):   Mảng đang được gọi với map
thisArg (Tùy chọn): Giá trị gán cho từ khóa this bên trong callback.

Ví dụ
function double_value(x) {
	return x * 2;
}
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(double_value);

console.log(map1);
// output: Array [2, 8, 18, 32]

var numbers = [1, 2, 3, 4];
var filteredNumbers = numbers.map(function(num, index) {
  if(index < 3) {
     return num;
  }
});
//index goes from 0,so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]
*/