/*
Viết chương trình với đầu vào là 1 chuỗi ký tự.
Chuyển chuỗi đó thành chuỗi mới với các ký tự đầu tiên của từ dc viết hoa.

Ví dụ
Cho "the quick brown fox"; In ra "The Quick Brown Fox"
Cho "java script"; In ra "Java Script"
Đầu vào: str
Đầu ra: Chuyển chuỗi đó thành chuỗi mới với các ký tự đầu tiên của từ dc viết hoa
*/

function uc_first(word) {
    var splitStr = word.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}

function run(str) {
    console.log(uc_first(str));
}

/*
Phương thức split() biến một Chuỗi thành một mảng các chuỗi, bằng cách tách chuỗi theo 1 chuỗi đã chỉ định.

Cú pháp
str.split([separator[, limit]])

Ví dụ
var str = "The quick brown fox";

var words = str.split(' ');
console.log(words);
// returns ["The", "quick", "brown", "fox"]

var word_limit = str.split(' ', 2);
console.log(word_limit);
// returns ["The", "quick"]

["The", "quick"]

var chars = str.split('');
console.log(chars);
// return ["T", "h", "e", " ", "q", "u", "i", "c", "k", " ", "b", "r", "o", "w", "n", " ", "f", "o", "x"]

var strCopy = str.split();
console.log(strCopy);
// returns ["The quick brown fox"]

str = "Tom,Ken,Dan";

var names = str.split(',');
console.log(names);
// returns ["Tom", "Ken", "Dan"]
*/