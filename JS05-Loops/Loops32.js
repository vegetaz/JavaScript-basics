/*
Cho 1 chuỗi str_input.
Viết chương trình đảo ngược chuỗi và in ra kết quả
Ví dụ:
Cho: str_input = "program"; in ra: "margorp"
Cho: str_input = "data"; in ra: "atad"
Đầu vào: str_input 
Đầu ra: đảo ngược chuỗi và in ra kết quả
*/

function run(str_input) {
    var newStr = '';
    for (var i = str_input.length - 1; i >= 0; i--) {
        newStr = newStr + str_input[i];
    }
    return newStr;
}

/*
Nhớ lại việc sử dụng vòng lặp for cho chuỗi
*/