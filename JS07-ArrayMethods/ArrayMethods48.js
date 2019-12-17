/*
Cho mảng datas.
Ghép và in tất cả các phần tử trong mảng dc ngăn cách nhau với dấu phảy và ký tự cách => ", "

Ví dụ:
datas = ["A", "B", "C"]; Print: "A, B, C"
datas = [1, 2, 3]; Print: "1, 2, 3"
Đầu vào: datas
Đầu ra: Ghép và in tất cả các phần tử trong mảng dc ngăn cách nhau với dấu phảy và ký tự cách => ", "
*/

function run(datas) {
    var arr = datas.join(', ');
    console.log(arr);
}

/*
Phương thức join() tạo và trả về một chuỗi mới bằng cách nối tất cả các phần tử trong một mảng (hoặc một đối tượng giống như mảng), được phân tách bằng dấu phẩy hoặc chuỗi phân tách được chỉ định.
Nếu mảng chỉ có một mục, thì mục đó sẽ được trả về mà không cần sử dụng dấu phân cách.

Cú pháp
var array_in_string = arr.join([separator]);

separator (tùy chọn): Là một chuỗi xác định dùng để ngăn cách các phần tử liền kề của mảng.
                        Nếu bỏ qua, các phần tử sẽ được ngăn cách bởi dấu phẩy (",").
                        Nếu là một chuỗi rỗng, các phần tử sẽ nối với nhau mà không có bất kì ký tự nào ngăn cách chúng.

Ví dụ:
var a = ['Wind', 'Water', 'Fire'];
a.join();      // 'Wind,Water,Fire'
a.join(', ');  // 'Wind, Water, Fire'
a.join(' + '); // 'Wind + Water + Fire'
a.join('');    // 'WindWaterFire'
*/