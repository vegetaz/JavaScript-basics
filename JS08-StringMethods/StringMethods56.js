/*
Cho 1 chuỗi str.
Viết chương trình kiểm tra chuỗi có chứa "script" hay không

Ví dụ: 
Cho str = "javascript"; In ra true
Cho str = "abc"; In ra false
Cho str = "string contains a substring"; In ra false
Đầu vào: str
Đầu ra: true or false. true nếu chuỗi có chưa "script"
*/

function run(str) {
    var check = str.includes('script');
    console.log(check);
}

/*
Phương thức includes() xác định xem một chuỗi có thể được tìm thấy trong một chuỗi khác hay không, trả về true hoặc false khi thích hợp.

Cú pháp
str.includes(searchString[, position])

Ví dụ
const str = 'To be, or not to be, that is the question.';

console.log(str.includes('To be'));       // true
console.log(str.includes('question'));    // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('To be', 1));    // false
console.log(str.includes('TO BE'));       // false
console.log(str.includes(''))             // true
*/