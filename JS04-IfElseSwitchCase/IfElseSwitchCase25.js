/*
Viết chương trình javascript để sắp xếp 4 số (a, b, c, d).
Và in ra kết quả. 
Ví dụ:
Cho a = 3; b = 2; c= 9; d= -1; In ra "9,3,2,-1";
Cho a = 3; b = 3; c= 8; d= -5; In ra "8,3,3,-5";
Đầu vào: a, b, c, d
Đầu ra: sắp xếp 4 số (a, b, c, d). Và in ra kết quả. 
*/

function run(a, b, c, d) {
    var sorted_str = "";

    if (a > b && b > c && c > d) {
        sorted_str = a + ", " + b + ", " + c + ", " + d;
    } else if (b > c && c > d && d > a) {
        sorted_str = b + ", " + c + ", " + d + ", " + a;
    }

    console.log(sorted_str);
}

/*
Cố gắng nhớ lại kiến thức if...else
*/