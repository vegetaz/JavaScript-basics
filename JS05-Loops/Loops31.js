/*
Cho 1 mảng các số tự nhiên.
In ra các số trong mảng đó với điều kiện
Bỏ qua số đó nếu số đó chia hết cho 4
Thoát vòng lắp nếu số đó chia hết cho cả 4 và 3
Ví dụ: Cho datas = [1, 3 , 4 , 6 , 12, 5, 4 , 9]
In ra:
1
3
6
Đầu vào: datas 
Đầu ra: In ra các số trong mảng đó với điều kiện
*/

function run(datas) {
    for (let i of datas) {
        if ((i % 4 == 0) && (i % 3 == 0)) {
            break;
        }
        if (i % 4 == 0) {
            continue;
        }

        console.log(datas[i]);
    }
}

/*
Câu lệnh break "nhảy ra" của một vòng lặp.
Câu lệnh continue"nhảy qua" một lần lặp trong vòng lặp.

Break
Bạn đã thấy câu lệnh break được sử dụng trong một chương trước.
Nó được sử dụng để "nhảy ra" câu lệnh switch ().
Câu lệnh break cũng có thể được sử dụng để nhảy ra khỏi vòng lặp.
Câu lệnh break phá vỡ vòng lặp và tiếp tục thực thi mã sau vòng lặp (nếu có):
for (i = 0; i < 10; i++) {
 	if (i === 3) { break; }
	text += "The number is " + i + "\n";
}

Continue
Câu lệnh continue phá vỡ một lần lặp (trong vòng lặp), nếu một điều kiện được chỉ định xảy ra và tiếp tục với lần lặp tiếp theo trong vòng lặp.
Ví dụ sau ta bỏ qua giá trị 3:
for (i = 0; i < 10; i++) {
	  if (i === 3) { continue; }
	  text += "The number is " + i + "\n";
}
*/