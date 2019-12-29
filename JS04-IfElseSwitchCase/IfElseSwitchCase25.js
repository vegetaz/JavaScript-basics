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
        sorted_str = a + "," + b + "," + c + "," + d;
    } else if (a > b && b > d && d > c) {
        sorted_str = a + "," + b + "," + d + "," + c;
    } else if (a > c && c > b && b > d) {
        sorted_str = a + "," + c + "," + b + "," + d;
    } else if (a > c && c > d && d > b) {
        sorted_str = a + "," + c + "," + d + "," + b;
    } else if (a > d && d > b && b > c) {
        sorted_str = a + "," + d + "," + b + "," + c;
    } else if (a > d && d > c && c > b) {
        sorted_str = a + "," + d + "," + c + "," + b;
    } else if (b > a && a > c && c > d) {
        sorted_str = b + "," + a + "," + c + "," + d;
    } else if (b > a && a > d && d > c) {
        sorted_str = b + "," + a + "," + d + "," + c;
    } else if (b > c && c > d && d > a) {
        sorted_str = b + "," + c + "," + d + "," + a;
    } else if (b > c && c > a && a > d) {
        sorted_str = b + "," + c + "," + a + "," + d;
    } else if (b > d && d > a && a > c) {
        sorted_str = b + "," + d + "," + a + "," + c;
    } else if (b > d && d > c && c > a) {
        sorted_str = b + "," + d + "," + c + "," + a;
    } else if (c > a && a > b && b > d) {
        sorted_str = c + "," + a + "," + b + "," + d;
    } else if (c > a && a > d && d > b) {
        sorted_str = c + "," + a + "," + d + "," + b;
    } else if (c > b && b > a && a > d) {
        sorted_str = c + "," + b + "," + a + "," + d;
    } else if (c > b && b > d && d > a) {
        sorted_str = c + "," + b + "," + d + "," + a;
    } else if (c > d && d > b && b > a) {
        sorted_str = c + "," + d + "," + b + "," + a;
    } else if (c > d && d > a && a > b) {
        sorted_str = c + "," + d + "," + a + "," + b;
    } else if (d > a && a > b && b > c) {
        sorted_str = d + "," + a + "," + b + "," + c;
    } else if (d > a && a > c && c > b) {
        sorted_str = d + "," + a + "," + c + "," + b;
    } else if (d > b && b > a && a > c) {
        sorted_str = d + "," + b + "," + a + "," + c;
    } else if (d > b && b > c && c > a) {
        sorted_str = d + "," + b + "," + c + "," + a;
    } else if (d > c && c > b && b > a) {
        sorted_str = d + "," + c + "," + b + "," + a;
    } else if (d > c && c > a && a > b) {
        sorted_str = d + "," + c + "," + a + "," + b;
    }

    console.log(sorted_str);
}

/*
Cố gắng nhớ lại kiến thức if...else
*/

/*
function run(a, b, c, d) {
    var sorted_str = "";

    var arr = [a,b,c,d];
    var sorted = arr.sort(function(x, y) {
        return y - x;
    });
    
    sorted_str = sorted[0] + ',' + sorted[1] + ',' + sorted[2] + ',' + sorted[3];

    console.log(sorted_str);
}
*/