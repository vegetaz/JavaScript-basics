/*
Cho 2 objects. 
object1 = { foo: "bar", a: 5 };
object2 = {name: "foo", d: 10 };

Viết chương trình để copy những giá trị của object1 sang object2 và in ra object mới

Đầu vào: Không có
Đầu ra: { name: 'foo', d: 10, foo: 'bar', a: 5 }

Gợi ý
Sử dụng Object.assign() để giải quyết vấn đề.
Đọc phần lý thuyết để hiểu về Object.assign()
*/

function run() {
    var object1 = { foo: "bar", a: 5 };

    var object2 = { name: "foo", d: 10 };

    Object.assign(object2, object1);

    console.log(object2);
}

/*
Object.assign() được sử dụng để sao chép các giá trị của tất cả thuộc tính có thể liệt kê từ một hoặc nhiều đối tượng nguồn đến một đối tượng đích.
Nó sẽ  trả về đối tượng đích đó.

Cú pháp
Object.assign(target, ...sources)

Ví dụ
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

Mô tả
Các thuộc tính trong đối tượng đích sẽ bị ghi lại bởi các thuộc tính trong đối tượng nguồn nếu chúng có cùng key.
Tương tự, các thuộc tính nguồn sau sẽ ghi đè lên những thuộc tính nguồn trước. 

Phương thức Object.assign() chỉ sao chép những giá trị liệt kê được và và các thuộc tính của bản thân nó đến đối tượng đích.
Nó sử dụng  [[Get]] trên nguồn và [[Set]] trên đích, vì vậy nó sẽ gọi các hàm getter và setter.
Vì lý do đó nó chỉ định Object.getOwnPropertyDescriptor() và Object.defineProperty() để thay thế.

// Cloning an object
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }

// Merging objects with same properties
var o1 = { a: 1, b: 1, c: 1 };
var o2 = { b: 2, c: 2 };
var o3 = { c: 3 };

var obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
*/