/*
Chạy chương trình mẫu để xem kết quả của các phương thức của chuỗi
*/

function run() {
    var str = "JavaScript";
    str.charAt(0); // returns "J"

    str.charAt(str.length - 1); // returns "t"

    'ABC'.charCodeAt(0); // returns 65

    "Java".concat("Script"); // returns "JavaScript"

    "JavaScript".indexOf("J"); // returns 0
    "JavaScript".indexOf("X"); // returns -1

    'canal'.lastIndexOf('a'); // returns 3
    'canal'.lastIndexOf('x'); // returns -1

    "Ab".replace('b', 'a'); // returns Aa

    "Mozilla".substr(1, 2); // returns "oz"
    "Mozilla".substr(0, 4); // returns "Mozi"

    "Mozilla".substring(1, 3); // returns "oz"

    var str = 'The quick brown fox jumps over the lazy dog.';

    str.slice(31); // returns "the lazy dog."
    str.slice(4, 19); // returns "quick brown fox"
    str.slice(-4); // returns "dog."

    "Abc".toLowerCase(); // returns "abc"

    "Abc".toUpperCase(); // returns "ABC"

    "The quick brown fox".split(' '); // returns ['The', 'quick', 'brown', 'fox']
    "11,22".split(','); // returns ['11', '22']

    str = 'To be, or not to be, that is the question.';

    str.includes('To be'); // true
    str.includes('question'); // true
    str.includes('nonexistent'); // false
    str.includes('To be', 1); // false
    str.includes('TO BE'); // false
    str.includes(''); // true
}

/*
Danh sách các phương thức phổ biến của chuỗi

Phương thức             Mô tả

charAt()                Nó cung cấp giá trị char hiện tại tại chỉ mục được chỉ định.
charCodeAt()            Nó cung cấp giá trị Unicode của một ký tự có trong chỉ mục được chỉ định.
concat()                Nó cung cấp một sự kết hợp của hai hoặc nhiều chuỗi.
indexOf()               Nó cung cấp vị trí của một giá trị char có trong chuỗi đã cho.
lastIndexOf()           Nó cung cấp vị trí của một giá trị char có trong chuỗi đã cho bằng cách tìm kiếm một ký tự từ vị trí cuối cùng.
search()                Nó tìm kiếm một biểu thức chính quy định trong một chuỗi đã cho và trả về vị trí của nó nếu xảy ra khớp.
match()                 Nó tìm kiếm một biểu thức chính quy định trong một chuỗi đã cho và trả về biểu thức chính quy đó nếu xảy ra khớp.
replace()               Nó thay thế một chuỗi nhất định với sự thay thế được chỉ định.
substr()                Nó được sử dụng để tìm nạp một phần của chuỗi đã cho trên cơ sở vị trí và độ dài bắt đầu được chỉ định.
substring()             Nó được sử dụng để tìm nạp một phần của chuỗi đã cho trên cơ sở chỉ mục đã chỉ định.
slice()                 Nó được sử dụng để tìm nạp một phần của chuỗi đã cho. Nó cho phép chúng ta gán chỉ số tích cực cũng như tiêu cực.
toLowerCase()           Nó chuyển đổi chuỗi đã cho thành chữ thường.
toLocaleLowerCase()     Nó chuyển đổi chuỗi đã cho thành chữ thường trên cơ sở ngôn ngữ hiện tại của máy chủ.
toUpperCase()           Nó chuyển đổi chuỗi đã cho thành chữ in hoa.
toLocaleUpperCase()     Nó chuyển đổi chuỗi đã cho thành chữ in hoa trên cơ sở ngôn ngữ hiện tại của máy chủ.
toString()              Nó cung cấp một chuỗi đại diện cho đối tượng cụ thể.
valueOf()               Nó cung cấp giá trị nguyên thủy của đối tượng chuỗi.
split()	                split() biến 1 chuỗi thành 1 mảng các chuỗi, bằng cách tách chuỗi theo ký tự dc chỉ định
includes()	            include () xác định xem một chuỗi có thể được tìm thấy trong một chuỗi khác hay không, trả về true hoặc false khi thích hợp.
*/