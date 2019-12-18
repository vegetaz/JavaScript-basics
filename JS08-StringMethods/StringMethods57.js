/*
Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với ký tự đầu được viết hoa.

Ví dụ
Cho "this is Test"; In ra "This is Test"
Cho "hello a"; In ra "Hello a"
Đầu vào: str
Đầu ra: In ra chuỗi với ký tự đầu được viết hoa.
*/

function uc_first(str) {
    var first_letter = str.charAt(0);
    var rest = str.slice(1);

    var str1 = first_letter.toUpperCase();
    var str2 = str1.concat(rest);
    console.log(str2);
}

/*
charAt()
Phương thức charAt() trả về 1 ký tự của chuỗi ở vị trị được chỉ  định mà không sửa đổi chuỗi gốc.

Cú pháp
character = str.charAt(index)

Ví dụ
var anyString = 'Brave new world';
console.log("The character at index 0   is '" + anyString.charAt()   + "'"); 
// No index was provided, used 0 as default

console.log("The character at index 0   is '" + anyString.charAt(0)   + "'");
console.log("The character at index 1   is '" + anyString.charAt(1)   + "'");
console.log("The character at index 2   is '" + anyString.charAt(2)   + "'");
console.log("The character at index 999 is '" + anyString.charAt(999) + "'");

// The character at index 0   is 'B'

// The character at index 0   is 'B'
// The character at index 1   is 'r'
// The character at index 2   is 'a'
// The character at index 999 is ''

slice()
Phương thức slice() trích xuất một phần của chuỗi và trả về nó dưới dạng một chuỗi mới mà không sửa đổi chuỗi gốc.

Cú pháp
str.slice(beginIndex[, endIndex])

Ví dụ
var str1 = 'The morning is upon us.';

console.log( str1.slice(1, 8) ); 
// returns "he morn" create new string from index 1 to index 8 of str1
console.log( str1.slice(4, -2) ); 
// returns "morning is upon u" create new string from index 4 to index (last index - 2) of str1
console.log( str1.slice(12) ); 
// returns "is upon us." create new string from index 12 to end of str1
console.log( str1.slice(30) ); 
// returns "" create new string from index 30 to end of str1. But the length of str1 is 23

toUpperCase()
Phương thức toUpperCase() trả về giá trị chuỗi được chuyển đổi thành chữ hoa (giá trị sẽ được chuyển đổi thành chuỗi nếu không phải là một chuỗi).

Cú pháp
str.toUpperCase()

Ví dụ
console.log('alphabet'.toUpperCase()); // 'ALPHABET'

concat()
Phương thức concat() nối các đối số chuỗi với chuỗi được gọi và trả về một chuỗi mới.

Syntax
str.concat(string2[, string3, ..., stringN])

Example
var str1 = 'Hello';
var str2 = 'World';

console.log(str1.concat(str2));
// expected output: "HelloWorld"

console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(', ', str1));
// expected output: "World, Hello"
*/