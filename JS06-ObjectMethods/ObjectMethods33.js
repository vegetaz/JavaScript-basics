/*
Cho 1 tên (name) và 1 số là (year_of_birth) là năm sinh.
Viết 1 chương trình khai báo 1 object với các thuộc tính sau
name: name
year_of_birth: year_of_birth
address: "Ha Noi"
1. In object ra màn hình
2. Tính toán tuổi (age) and và in tuổi (age) ra màn hình với định rạng "{name} is {age} years old"
age = năm nay - year_of_birth 
Ví dụ: Cho name = "Tom", year_of_birth = 1988 và nếu năm hiện tại là 2019, In ra tuổi sẽ là "Tom is 31 years old"
Đầu vào: name, year_of_birth
Đầu ra: In ra object và tin nhắn với định dạnh "{name} is {age} years old"

Gợi ý
Sử dụng đoạn code sau để lấy năm hiện tại

var d = new Date();
var current_year = d.getFullYear();
*/

function run(name, year_of_birth) {
    var d = new Date();
    var current_year = d.getFullYear();
    // define a object 
    var person = new Object();
    person.name = name;
    person.year_of_birth = year_of_birth;
    person.address = 'Ha Noi';

    // Calculate age
    var old = current_year - person.year_of_birth;

    console.log(person); // print object
    console.log(person.name + " is " + old + " years old");
}

/*
A. Object

1 object (đối tượng) là 1 thực thể có trạng thái và hành vi  (properties and method).
Ví dụ: car, pen, bike, chair, glass, keyboard, monitor etc.

JavaScript là một ngôn ngữ dựa trên đối tượng.
Mọi thứ đều là một đối tượng trong JavaScript..
JavaScript là dựa trên mẫu không dựa trên lớp.
Ở đây, chúng ta không tạo lớp để lấy đối tượng. Nhưng, chúng tôi trực tiếp tạo đối tượng.

Có 3 cách để khái báo đối tượng.
1. By object literal (Theo nghĩa đen)
Cú pháp tạo đối tượng sử dụng đối tượng bằng chữ được đưa ra dưới đây:

var datas = {property1:value1, property2:value2.....propertyN:valueN};
// Example: 
var datas = {
	name: "Trung", 
	age: "31",
	adress: "Ha Noi"
};

2. Bằng cách tạo trực tiếp đối tượng (sử dụng từ khóa new)
Cú pháp tạo đối tượng trực tiếp được đưa ra dưới đây:

var objectname = new Object();  
objectname.property1 = value1;
objectname.property2 = value2;
objectname.property3 = value3;
//Example:
var datas = new Object(); 
datas.name = "Trung";
datas.age = 31;
datas.address = "Ha Noi";

3. Sử dụng object constructor (using new keyword)
Ở đây, bạn cần tạo hàm với các đối số. Mỗi giá trị đối số có thể được chỉ định trong đối tượng hiện tại bằng cách sử dụng từ khóa này.

Từ khóa this đề cập đến đối tượng hiện tại.
Ví dụ về việc tạo đối tượng bởi hàm tạo đối tượng được đưa ra dưới đây:

function emp(id,name,salary){  
	this.id=id;  
	this.name=name;  
	this.salary=salary;  
}  
var e = new emp(103,"Vimal", 2000);

Truy cập thuộc tính của object

Bạn có thể truy cập vào thuộc tính của object bằng 2 cách:

objectName["propertyName"];

Hay

objectName.propertyName

Ví dụ:

var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

console.log(person["firstName"]); // Output: John

// or
 
console.log(person.firstName); // Output: John

B. Methods of Object

Object cũng có cách phương thức.
Phương thức là hành động có thể được thực hiện trên các object.
Các phương thức được lưu trữ trong các thuộc tính như việc định nghĩa hàm.
Các phương thức khác nhau của Object như sau:
Chúng ta sẽ đi vào chi tiết 1 số các phương thức chính của object trong các phần sau.

Phương thức                                Mô tả

Object.assign()                            Phương thức này được sử dụng để sao chép các thuộc tính có thể đếm được và sở hữu từ một đối tượng nguồn sang một đối tượng đích
Object.create()                            Phương pháp này được sử dụng để tạo một đối tượng mới với các thuộc tính và đối tượng nguyên mẫu được chỉ định.
Object.defineProperty()                    Phương pháp này được sử dụng để khai báo hay xác định thuộc tính của object
Object.defineProperties()                  Phương pháp này được sử dụng để tạo mới hay khai báo nhiều thuộc tính của object
Object.entries()                           Phương thức này trả về một mảng với các mảng của các tên thuộc tính, giá trị.
Object.freeze()                            Phương pháp này ngăn chặn các thuộc tính hiện có bị loại bỏ.
Object.getOwnPropertyDescriptor()          Phương thức này trả về một mô tả thuộc tính cho thuộc tính được chỉ định của đối tượng được chỉ định.
Object.getOwnPropertyDescriptors()         Phương thức này trả về tất cả các mô tả thuộc tính riêng của một đối tượng nhất định.
Object.getOwnPropertyNames()               Phương thức này trả về một mảng của tất cả các thuộc tính (liệt kê hoặc không) được tìm thấy.
Object.getOwnPropertySymbols()             Phương thức này trả về một mảng của tất cả các thuộc tính khóa ký hiệu riêng.
Object.getPrototypeOf()                    Phương thức này trả về nguyên mẫu của đối tượng đã chỉ định.
Object.is()                                Phương pháp này xác định xem hai giá trị có cùng giá trị hay không
Object.isExtensible()                      Phương pháp này xác định nếu một đối tượng có thể mở rộng
Object.isFrozen()                          Phương pháp này xác định nếu một đối tượng đã bị đóng băng.
Object.isSealed()                          Phương pháp này xác định nếu một đối tượng được niêm phong.
Object.keys()                              Phương thức này trả về một mảng các tên thuộc tính riêng của đối tượng đã cho.
Object.preventExtensions()                 Phương pháp này được sử dụng để ngăn chặn mọi phần mở rộng của một đối tượng.
Object.seal()                              Phương pháp này ngăn các thuộc tính mới được thêm vào và đánh dấu tất cả các thuộc tính hiện có là không thể cấu hình.
Object.setPrototypeOf()                    Phương thức này đặt nguyên mẫu của một đối tượng được chỉ định cho một đối tượng khác.
Object.values()                            Phương thức này trả về một mảng các giá trị.

*/