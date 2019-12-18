/*
Viết function với đầu vào là 1 chuỗi.
In ra 1 chuỗi được mã hóa và loại bỏ ký tự cách ở đầu và cuối chuỗi ban đầu

Ví dụ
Cho "javascript is cool  "; In ra "j4v45cr1pt 15 c00l"
Cho "programming is fun"; In ra "pr0gr4mm1ng 15 fun"
Cho "  become a coder"; In ra "b3c0m3 4 c0d3r"
Để function làm việc chính xác, Function nên thay thế tất cả các ký tự  'a' bằng 4, 'e' bằng 3, 'i' bằng 1, 'o' bằng 0, and 's' bằng 5.

Đầu vào: str
Đầu ra: In ra 1 chuỗi được mã hóa và loại bỏ ký tự cách ở đầu và cuối chuỗi ban đầu
*/

function run(str) {
    let str1 = str.replace(/a/g, '4');
    let str2 = str1.replace(/e/g, '3');
    let str3 = str2.replace(/i/g, '1');
    let str4 = str3.replace(/o/g, '0');
    let str5 = str4.replace(/s/g, '5');
    let str6 = str5.trim();
    console.log(str6);
}

/*
trim()
Phương thức trim() xóa bỏ khoảng trắng ở đầu vào cuối chuỗi.
Khoảng trắng trong trường hợp này là (Ký tự cách, tab, no-break space ...) và các ký tự kết thúc dòng  (LF, CR ...).

Cú pháp
str.trim()

Ví dụ
var greeting = '   Hello world!   ';

console.log(greeting);
// returns "   Hello world!   ";

console.log(greeting.trim());
// returns "Hello world!";

Mở rộng về phương thức trim
Phương thức trimStart() / trimLeft() trả về 1 chuỗi đã xóa bỏ khoảng trống bên trái/bắt đấu của nó.
trimLeft() or trimStart() không ảnh hưởng đến chuỗi gốc.

var str = '   foo  ';
console.log(str.length); // 8

str = str.trimStart();
console.log(str.length); // 5
console.log(str);        // 'foo   '

Phương thức trimEnd()/trimRight() trả về 1 chuỗi đã xóa bỏ khoảng trống bên phải/kết thúc của nó.
trimEnd() or trimRight() không ảnh hưởng đến chuỗi gốc.

var str = '   foo  ';
console.log(str.length); // 8

str = str.trimEnd();
console.log(str.length); // 6
console.log(str);        // '   foo'

replace()
Phương thức replace() trả về một chuỗi mới với một số hoặc tất cả các kết quả khớp của mẫu được thay thế bằng một chuỗi thay thế khác.
Mẫu có thể là một chuỗi hoặc RegExp và thay thế có thể là một chuỗi.
Nếu mẫu là một chuỗi, chỉ có mẫu đầu tiên sẽ được thay thế.

Cú pháp
var newStr = str.replace(regexp|substr, newSubstr)

Ví dụ
var str = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
Bạn sẽ thấy 2 từ "dog" trong biến str

Nếu bạn sử dụng 1 chuỗi làm mẫu cho phương thức replace(). Chỉ có từ "dog" đầu tiên dc thay thế.
var str = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(str.replace('dog', 'monkey'));
// Returns "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"

Nếu bạn sử dụng regexp cho phương thức replace() như sau. Tất cả từ "dog" sẽ được thay thế.
var str = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

var regex = /dog/gi;

console.log(str.replace(regex, 'ferret'));
// Returns "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"
*/