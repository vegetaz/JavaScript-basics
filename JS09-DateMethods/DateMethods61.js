/*
Cho 3 số tự nhiên year, month, day.
Sử dụng các phương thức date để khai báo year là năm, month là tháng và day là ngày và in ra ngày

Ví dụ: 
cho year = 2019; month = 6; day = 24; in ra "06/24/2019"
Đầu vào: year, month, day
Đầu ra: Khai báo year là năm, month là tháng và day là ngày và in ra ngày
*/

function run(year, month, day) {
    var d = new Date();

    d.setFullYear(year);
    d.setMonth(month - 1);
    d.setDate(day);

    console.log("Year is " + d.getFullYear());
    console.log("Month is " + (d.getMonth() + 1));
    console.log("Day is " + d.getDate());
}

/*
Các phương thức của date

Phương thức             Mô tả

getDate()               Nó trả về giá trị số nguyên từ 1 đến 31 đại diện cho ngày cho ngày đã chỉ định trên cơ sở giờ địa phương.
getDay()                Nó trả về giá trị nguyên từ 0 đến 6 đại diện cho ngày trong tuần trên cơ sở giờ địa phương.
getFullYears()          Nó trả về giá trị số nguyên biểu thị năm trên cơ sở giờ địa phương.
getHours()              Nó trả về giá trị nguyên từ 0 đến 23 đại diện cho giờ trên cơ sở giờ địa phương.
getMilliseconds()       Nó trả về giá trị số nguyên từ 0 đến 999 đại diện cho mili giây trên cơ sở thời gian địa phương.
getMinutes()            Nó trả về giá trị nguyên từ 0 đến 59 đại diện cho số phút trên cơ sở giờ địa phương.
getMonth()              Nó trả về giá trị nguyên từ 0 đến 11 đại diện cho tháng trên cơ sở giờ địa phương.
getSeconds()            Nó trả về giá trị nguyên từ 0 đến 60 đại diện cho giây trên cơ sở thời gian địa phương.
getUTCDate()            Nó trả về giá trị số nguyên từ 1 đến 31 đại diện cho ngày cho ngày đã chỉ định trên cơ sở thời gian thế gới.
getUTCDay()             Nó trả về giá trị nguyên từ 0 đến 6, đại diện cho ngày trong tuần trên cơ sở thời gian thế giới.
getUTCFullYears()       Nó trả về giá trị nguyên biểu thị năm trên cơ sở thời gian thế giới.
getUTCHours()           Nó trả về giá trị nguyên từ 0 đến 23 đại diện cho giờ trên cơ sở thời gian thế giới.
getUTCMinutes()         Nó trả về giá trị nguyên từ 0 đến 59 đại diện cho số phút trên cơ sở thời gian thế giới.
getUTCMonth()           Nó trả về giá trị nguyên từ 0 đến 11, đại diện cho tháng trên cơ sở thời gian thế giới+.
getUTCSeconds()         Nó trả về giá trị số nguyên từ 0 đến 60 đại diện cho giây trên cơ sở thời gian thế giới.
setDate()               Nó đặt 1 giá trị ngày cho ngày cụ thể trên cơ sở giờ địa phương.
setDay()                Nó đặt ngày cụ thể trong tuần trên cơ sở giờ địa phương.
setFullYears()          Nó đặt giá trị năm cho ngày đã chỉ định trên cơ sở giờ địa phương.
setHours()              Nó đặt giá trị giờ cho ngày đã chỉ định trên cơ sở giờ địa phương.
setMilliseconds()       Nó đặt giá trị mili giây cho ngày đã chỉ định trên cơ sở giờ địa phương.
setMinutes()            Nó đặt giá trị phút cho ngày đã chỉ định trên cơ sở giờ địa phương.
setMonth()              Nó đặt tháng cho ngày được chỉ định trên cơ sở giờ địa phương.
setSeconds()            Nó đặt giây cho ngày được chỉ định trên cơ sở giờ địa phương.
setUTCDate()            Nó đặt ngày cụ thể trong tuần trên cơ sở giờ thế giới.
setUTCDay()             Nó đặt ngày cụ thể trong tuần trên cơ sở thời gian thế giới.
setUTCFullYears()       Nó đặt giá trị năm cho ngày đã chỉ định trên cơ sở thời gian thế giới.
setUTCHours()           Nó đặt giá trị giờ cho ngày đã chỉ định trên cơ sở thời gian thế giới.
setUTCMilliseconds()    Nó đặt giá trị mili giây cho ngày đã chỉ định trên cơ sở thời gian thế giới.
setUTCMinutes()         Nó đặt giá trị phút cho ngày đã chỉ định trên cơ sở thời gian thế giới.
setUTCMonth()           Nó đặt giá trị phút cho ngày đã chỉ định trên cơ sở thời gian thế giới.
setUTCSeconds()         Nó đặt giá trị giây cho ngày đã chỉ định trên cơ sở thời gian thế giới.
toDateString()          Nó trả về phần ngày của một đối tượng Date.
toISOString()           Nó trả về ngày ở dạng chuỗi định dạng ISO.
toJSON()                Nó trả về một chuỗi đại diện cho đối tượng Date. Nó cũng tuần tự hóa đối tượng Date trong quá trình tuần tự hóa JSON.
toString()              Nó trả về ngày ở dạng chuỗi.
toTimeString()          Nó trả về phần thời gian của một đối tượng Date.
toUTCString()           Nó chuyển đổi ngày được chỉ định dưới dạng chuỗi bằng múi giờ UTC.
valueOf()               Nó trả về giá trị nguyên thủy của một đối tượng Date.
*/