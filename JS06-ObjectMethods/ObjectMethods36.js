/*
Cho đoạn code mẫu.
Dùng Object.entries để chuyển data thành mảng của mảng tên thuộc tính và giá trị và in nó ra

Ví dụ:
Nếu data = { a: 'x', b: 'y'};  In ra: [ ['a', 'x'], ['b', 'y'] ]
Đầu vào: data
Đầu ra:   Dùng Object.entries để chuyển data thành mảng của mảng tên thuộc tính và giá trị và in nó ra

Gợi ý
Đọc phần lý thuyết để biết về Object.entries
*/

function run() {
    var data = { a: 'x', b: 'y' };
    var obj = Object.entries(data);
    console.log(obj);
}

/*
Phương thức Object.entries() trả về một mảng các cặp thuộc tính [key, value] chính một đối tượng cụ thể, theo cùng thứ tự như vòng lặp for ...in.
Thứ tự của mảng được trả về bởi Object.entries() không phụ thuộc vào cách khai báo đối tượng.
Nếu có nhu cầu nếu có nhu cầu sắp xệp lại mảng có thể sử dụng Array.sort như Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));.

Nhưng chúng ta sẽ thảo luận về Array.sort trong phần sau.

Ví dụ:
const object1 = {
  a: 'somestring',
  b: 42
};

for (let [key, value] of Object.entries(object1)) {
  console.log(key + ': ' + value);
}

// expected output:
// "a: somestring"
// "b: 42"

Cú pháp:
Object.entries(obj)
obj: Đối tượng có các cặp thuộc tính [khóa, giá trị] 

Ví dụ:
const obj = { foo: 'bar', baz: 1988};
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 1988] ]​

Description
Object.entries() trả về một mảng có các phần tử là các mảng tương ứng với các cặp [key, value] thuộc tính chuỗi có thể đếm được được tìm thấy trực tiếp trên đối tượng.
Thứ tự của các thuộc tính giống như thứ tự được đưa ra bằng cách lặp qua các giá trị thuộc tính của đối tượng theo cách thủ công.

const obj = { foo: 'bar', baz: 1988};
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 1988] ]​​
*/