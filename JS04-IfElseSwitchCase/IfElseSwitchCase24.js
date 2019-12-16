/*
Cho điểm 5 môn Physics, Chemistry, Biology, Mathematics and Computer.
Tính toán điểm trung bình (%) và in Grade (cấp) theo bảng sau:
Điểm trung bình (%) >= 90% : Grade A
Điểm trung bình (%) >= 80% : Grade B
Điểm trung bình (%) >= 70% : Grade C
Điểm trung bình (%) >= 60% : Grade D
Điểm trung bình (%) >= 40% : Grade E
Điểm trung bình (%) < 40% : Grade F
Ví dụ: physics = 10, chemistry = 9.5, biology = 9.2, mathematics = 10, computer = 9.
Thì điểm trung bình (%) là 95.4. => Kết quả: Grade A
Đầu vào: physics, chemistry, biology, mathematics, computer
Đầu ra: grade 
*/

function run(physics, chemistry, biology, mathematics, computer) {
    var percentage = ((physics + chemistry + biology + mathematics + computer) / 50) * 100;
    var sz_grade = "";

    if (percentage >= 90) {
        sz_grade = "Grade A";
    } else if (percentage >= 80) {
        sz_grade = "Grade B";
    } else if (percentage >= 70) {
        sz_grade = "Grade C";
    } else if (percentage >= 60) {
        sz_grade = "Grade D";
    } else if (percentage >= 40) {
        sz_grade = "Grade E";
    } else {
        sz_grade = "Grade F";
    }

    console.log(sz_grade);
}

/*
Điểm trung bình (%) = ((physics + chemistry+ biology + mathematics  +computer) / 50) * 100
Và dùng if ... else để tính grade 
*/