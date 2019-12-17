/*
Cho 1 mảng số tự nhiên datas.
Viết chương trinhg để sắp xếp mảng theo giá trị và in ra mảng mới đã sắp xếp

Ví dụ:
Cho datas = [1, 5, 2, 6, 8]; In ra: [1, 2, 5, 6, 8]
Đầu vào: datas
Đầu ra : in ra mảng đã sắp xếp
*/

function sortNumber(a, b) {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1
    }
    return 0;
}

function run(datas) {
    let arr = datas.sort(sortNumber);
    console.log(arr);
}

/*
Phương thức sort() sẽ sắp xếp các phần tử của mảng ngay tại chỗ (in place) và trả về mảng đó.
Kết quả sắp xếp có thể không ổn định (stable).
Cách sắp xếp mặc định là theo Unicode code point của chuỗi.

Độ phức tạp về thời gian và không gian của thuật toán sắp xếp sẽ tùy vào cách hiện thực.

Cú pháp
arr.sort([compareFunction]);

compareFunction (không bắt buộc) - Hàm dùng để xác định thứ tự sắp xếp.
Nếu bỏ qua, mảng sẽ được sắp xếp dựa vào giá trị Unicode code point của từng ký tự của chuỗi được chuyển đổi từ giá trị của phần tử.

Mô tả
Nếu không truyền compareFunction vào, các phần tử sẽ được sẽ được quy đổi về chuỗi kí tự và được so sánh dựa trên thứ tự của chuỗi kí tự đó trong bảng mã Unicode.
Chẳng hạn, "Banana" đứng trước "Cherry".
Còn nếu so sánh số học, 9 đứng trước 80, nhưng bởi vì các chữ số đã được quy đổi về chuỗi kí tự, nên "80" sẽ đứng trước "9" theo bảng mã Unicode.

Nếu truyền compareFunction vào, phần tử của mảng sẽ được sắp xếp dựa theo giá trị trả về của hàm so sánh.
Nếu a và b là hai phần tử được so sánh, thì:
- Nếu compareFunction(a, b) trả về nhỏ hơn 0, đặt chỉ số cho a nhỏ hơn so với chỉ số của b, tức là để a lên trước.
- Nếu compareFunction(a, b) trả về 0, giữ nguyên a và b, nhưng tiếp tục so sánh lần lượt các phần tử khác của mảng.
    Chú ý: quy định của ECMAscript không đảm bảo hành vi này, tương tự đối với tất cả các trình duyệt (ví dụ các phiên bản của Mozilla từ 2003).
- Nếu compareFunction(a, b) trả về lớn hơn 0, đặt chỉ số của b nhỏ hơn chỉ số của a, tức là để b lên trước.
- compareFunction(a, b) luôn phải trả về cùng một giá trị với mỗi cặp phần tử a và b. Nếu kết quả trả về không nhất quán thì thứ tự sắp xếp sẽ không xác định.

Ví dụ đơn giản cho hàm so sánh:
function compare(a, b) {
  if (a nhỏ hơn b) {
    return -1;
  }
  if (a lớn hơn b) {
    return 1;
  }
  // a bằng b
  return 0;
}

Để so sánh giữa các số, chỉ cần lấy a trừ cho b.
Hàm dưới đây sẽ sắp xếp mảng theo chiều tăng dần (nếu mảng không chứa Infinity và NaN):

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]
Các Object cũng có thể được sắp xếp với một trong những thuộc tính của chúng.

var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// ?sắp xếp theo value (giá trị)
items.sort(function (a, b) {
  return a.value - b.value;
});

// sắp xếp theo name (tên)
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // bỏ qua hoa thường
  var nameB = b.name.toUpperCase(); // bỏ qua hoa thường
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // name trùng nhau
  return 0;
});
*/