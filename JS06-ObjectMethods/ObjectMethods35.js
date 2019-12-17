/*
Cho đoạn chương trình mẫu.
Tạo 1 object me từ person.
Gán name và job từ dữ liệu dc truyền vào.
Và chạy printIntroduction của me

Ví dụ: cho name = "Trung"; job = "developer";
In ra: "My name is Trung. My job is developer"

Đầu vào: name, job
Đầu ra: "My name is {name}. My job is {job}"

Gợi ý
Đọc phần lý thuyết để hiểu về Object.create()
*/

function run(name, job) {
    const person = {
        name: "",
        job: "",
        printIntroduction: function() {
            console.log(`My name is ${this.name}. My job is ${this.job}`);
        }
    };

    const me = Object.create(person);
    me.name = name;
    me.job = job;
    me.printIntroduction();
}

/*
Phương thức Object.create() tạo một đối tượng mới, sử dụng một đối tượng hiện có làm nguyên mẫu của đối tượng mới được tạo.

Cú pháp
Object.create(proto, [propertiesObject])

proto
Đối tượng nên là nguyên mẫu của đối tượng mới được tạo.

propertiesObject
Không bắt buộc.
Nếu được chỉ định và khác không được xác định, một đối tượng có các thuộc tính riêng có thể đếm được (nghĩa là các thuộc tính đó được xác định theo chính nó và không thể đếm được các thuộc tính dọc theo chuỗi nguyên mẫu của nó) chỉ định các mô tả thuộc tính được thêm vào đối tượng mới được tạo, với các tên thuộc tính tương ứng.
Các thuộc tính này tương ứng với đối số thứ hai của Object.defineProperties().

Ví dụ:
const a = {
  x: 1,
  add_numbers: function () {
    var added_number = this.x + this.y;
	console.log(added_number);
  }
};

const b = Object.create(a);

b.y = 2; 

b.add_numbers(); // output: 3
*/