/*
Cho 1 mảng số tự nhiên datas.
Tìm và in ra chỉ mục đầu tiên của giá trị 2 và chỉ mục cuối cùng của giá trị 2 trong mảng

Ví dụ:
datas = [-1, 2, 3, 4, 2, 6]; Print: "1 4"
datas = [0, 6]; Print: "No result"
Đầu vào: datas
Đầu ra: chỉ mục đầu tiên của giá trị 2 và chỉ mục cuối cùng của giá trị 2
*/

function run(datas) {
    var firstIndex = datas.indexOf(2);
    var lastIndex = datas.lastIndexOf(2);
    if (firstIndex && lastIndex != -1) {
        console.log(firstIndex + ' ' + lastIndex);
    } else {
        console.log('No result');
    }
}

/*
Array.indexOf()
Phương thức indexOf() trả về chỉ mục đầu tiên mà tại đó một phần tử đã cho có thể được tìm thấy trong mảng hoặc -1 nếu không có.

Cú pháp:
arr.indexOf(searchElement[, fromIndex])

searchElement: Phần tử cần tìm trong mảng.
fromIndex (Optional): Vị trí index nơi bắt đầu tìm kiếm. Nếu index lớn hơn hoặc bằng số phần tử trong mảng, -1 sẽ được trả về, việc tìm kiếm sẽ không xảy ra. Nếu giá trị fromIndex là một số âm, vị trí index được tính từ cuối mảng. Lưu ý: cho dù fromIndex là số âm, kết quả tìm kiếm vẫn tính từ đầu mảng trở về sau. Nếu index bằng 0, cả mảng sẽ được tìm kiếm. Mặc định: 0 (cả mảng sẽ được tìm kiếm)

Ví dụ:
var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1

Array.lastIndexOf()
Phương thức lastIndexOf() trả về chỉ mục cuối cùng mà tại đó một phần tử đã cho có thể được tìm thấy trong mảng hoặc -1 nếu không có. Mảng được tìm kiếm ngược, bắt đầu từ fromIndex.

Cú pháp:
arr.lastIndexOf(searchElement[, fromIndex])

searchElement: Phần tử cần tìm trong mảng.
fromIndex (Optional): Vị trí index nơi bắt đầu tìm kiếm.
                        Nếu index lớn hơn hoặc bằng số phần tử trong mảng, -1 sẽ được trả về, việc tìm kiếm sẽ không xảy ra.
                        Nếu giá trị fromIndex là một số âm, vị trí index được tính từ cuối mảng.
                        Lưu ý: cho dù fromIndex là số âm, kết quả tìm kiếm vẫn tính từ đầu mảng trở về sau.
                        Nếu index bằng 0, cả mảng sẽ được tìm kiếm.
                        Mặc định: 0 (cả mảng sẽ được tìm kiếm)

Ví dụ:
var animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 1

var numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2);     // 3
numbers.lastIndexOf(7);     // -1
numbers.lastIndexOf(2, 3);  // 3
numbers.lastIndexOf(2, 2);  // 0
numbers.lastIndexOf(2, -2); // 0
numbers.lastIndexOf(2, -1); // 3
*/