/*
Cho 1 số tự nhiên a.
Sử dụng toán tử gán vào những toán tử sau và in giá trị của a sau khi thay đổi
a = a * 2; 
a = a + 9;
a = a - 4;
a = a / 3;
a = a % 3;

Ví dụ: Cho a = 5, In ra sẽ là 
10
19
15
5
2
Đầu vào: một số tự nhiên a
Đầu ra: giá trị của a sau khi thay đổi
*/
function run(a) {
    a *= 2;
    console.log(a);

    a += 9;
    console.log(a);

    a -= 4;
    console.log(a);

    a /= 3;
    console.log(a);

    a %= 3;
    console.log(a);
}
/*
Assignment operators (most popular):  =   +=  -=   *=   /=   %=
Mặc dù chúng ta thảo luận về chúng không phải là những toán tử đầu tiên, nhưng đây là các toán tử được sử dụng thường xuyên nhất, đặc biệt là toán tử gán đơn giản = để gán giá trị cho một biến (cũng được gọi là gán giá trị cho biến).
Chúng ta đã nhiều lần thấy các ví dụ về việc sử dụng các phép gán đơn giản. 
Chú ý duy nhất có thể có trong việc sử dụng phép gán đơn giản là khi kiểu biến ở vế bên trái không tương đồng với giá trị hoặc loại biến ở  vế bên phải. Sự khác biệt về kiểu có thể dẫn đến thu hẹp hoặc mở rộng giá trị trong trường hợp kiểu biến là nguyên thủy, boxing hoặc unboxing khi một biến là loại nguyên thủy và biến còn lại là loại tham chiếu.
Chúng ta sẽ thảo luận về Thu hẹp và mở rộng conversion of kiểu nguyên thủy và Boxing và unboxing giữa kiểu nguyên thủy và kiểu tham chiếu sau.  

Cách viết tắt của toán tử gán (+= -= *= /= %=) được gọi là toán tử gán phức hợp.
*/