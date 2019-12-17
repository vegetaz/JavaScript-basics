/*
Tạo 1 mảng: [25, 154, 461, 67, 32, 43].

Chạy chương trình mẫu và xem kết quả 

Đầu vào: None
Đầu ra: In mảng
*/

function run() {
    var datas = [25, 154, 461, 67, 32, 43]; // define an array

    var length = datas.length; // get length of array datas

    console.log(datas.length); // output: 6

    datas.push(length); // Add new element to datas

    console.log(datas.length); // output: 7
}

/*
Array (mảng) là một đối tượng đại diện cho một tập hợp các loại phần tử tương tự..

Có 3 cách khai báo mạng

1. By array literal (Theo nghĩa đen)

Cú pháp tạo mảng bằng cách sử dụng mảng bằng chữ được đưa ra dưới đây:
var arrayname=[value1,value2.....valueN];
// Example: 
var emp=["Sonoo","Vimal","Ratan"];

2. Bằng cách tạo cá thể của Array trực tiếp (dùng từ khóa new)

Cú pháp tạo mảng trực tiếp được đưa ra dưới đây:

var arrayname=new Array();  
// Example: 
var emp = new Array();  
emp[0] = "Arun";  
emp[1] = "Varun";

3. Sử dụng Array constructor (Dùng từ khóa new)

Ở đây, bạn cần tạo cá thể của mảng bằng cách chuyển các đối số trong hàm tạo để chúng ta không phải cung cấp giá trị một cách rõ ràng.
Ví dụ về việc tạo đối tượng bằng hàm tạo mảng được đưa ra dưới đây.

var emp=new Array("Jai","Vijay","Smith");

Thuộc tính Array

Thuộc tính      Mô tả
Array.length    Thuộc tính length của một mảng trả về số phần tử trong mảng đó.
                Đó là một số nguyên 32 bit không dấu và luôn lớn hơn chỉ mục lớn nhất của mảng (chỉ mục lớn nhất chính là dộ dài của mảng trừ đi 1).

Phương thức của Array
Array cũng có các phương thức
Phương thức là hành động có thể được thực hiện trên các array.
Các phương thức được lưu trữ trong các thuộc tính như việc định nghĩa hàm.
Các phương thức khác nhau của array như sau: Chúng ta sẽ đi vào chi tiết 1 số các phương thức chính của array trong các phần sau.

Phương thức         Mô tả

concat()            Nó trả về một đối tượng mảng mới chứa hai hoặc nhiều mảng được hợp nhất.
copywithin()        Nó sao chép một phần của mảng đã cho bằng các phần tử của chính nó và trả về mảng đã sửa đổi.
every()             Nó xác định xem tất cả các phần tử của một mảng có thỏa mãn các điều kiện hàm được cung cấp hay không.
fill()              Nó điền các phần tử vào một mảng với các giá trị tĩnh.
filter()            Nó trả về mảng mới chứa các phần tử vượt qua các điều kiện hàm được cung cấp.
find()              It returns the value of the first element in the given array that satisfies the specified condition.
findIndex()         Nó trả về giá trị chỉ mục của phần tử đầu tiên trong mảng đã cho thỏa mãn điều kiện đã chỉ định.
forEach()           Nó gọi hàm được cung cấp một lần cho mỗi phần tử của một mảng.
includes()          Nó kiểm tra xem mảng đã cho có chứa phần tử đã chỉ định hay không.
indexOf()           Nó tìm kiếm phần tử được chỉ định trong mảng đã cho và trả về chỉ mục của trận đấu đầu tiên.
join()              Nó kết hợp các phần tử của một mảng dưới dạng một chuỗi.
lastIndexOf()       Nó tìm kiếm phần tử được chỉ định trong mảng đã cho và trả về chỉ mục cuối cùng.
map()               Nó gọi hàm được chỉ định cho mọi phần tử mảng và trả về mảng mới
pop()               Nó loại bỏ và trả về phần tử cuối cùng của một mảng.
push()              Nó thêm một hoặc nhiều phần tử vào cuối của một mảng.
reverse()           Nó đảo ngược các yếu tố của mảng nhất định.
shift()             Nó loại bỏ và trả về phần tử đầu tiên của một mảng.
slice()             Nó trả về một mảng mới chứa bản sao của một phần của mảng đã cho.
sort()              Nó trả về phần tử của mảng đã cho theo thứ tự được sắp xếp.
splice()            Nó thêm / xóa các phần tử đến / từ mảng đã cho.
unshift()           Nó thêm một hoặc nhiều phần tử vào đầu mảng đã cho.

*/