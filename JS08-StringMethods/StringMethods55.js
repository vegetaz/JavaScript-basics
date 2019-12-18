/*
Tạo function với 2 tham số (a và b) trả về true hoạc false phụ thuộc vào tống số ký tự của a và b.
Nếu số ký tự của a bằng số ký tự của b thì trả về true nếu không trả về false

Ví dụ
Cho a = 'AB'; b = 'CD'; in ra true
Cho a = 'BA'; b = 'XYZ'; in ra false
Đầu vào: a and b
Đầu ra: true hoạc false; Nếu số ký tự của a bằng số ký tự của b
*/

function run(a, b) {
    if (a.length == b.length) {
        return true;
    }
    return false;
}