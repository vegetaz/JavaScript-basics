/*
Viết chương trình in ra kiểu dữ liệu của các biến trong chương trình
*/

function run(datas) {
    var a = 12;

    var b = "javascript";

    var c = true;

    var d = ['Apple', 'Banana'];

    var e = { type: "Fiat", model: "500", color: "white" };

    var f = function() {
        console.log("javascript");
    };

    var g;

    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
    console.log(typeof d);
    console.log(typeof e);
    console.log(typeof f);
    console.log(typeof g);
}

/*
Toán tử typeof là toán tử đơn nguyên được đặt trước toán hạng đơn của nó, có thể là bất kỳ loại nào.
Giá trị của nó là một chuỗi chỉ ra kiểu dữ liệu của toán hạng.
Toán tử typeof ước tính thành "number", "string" hoặc "boolean" nếu toán hạng của nó là một số, chuỗi hoặc giá trị boolean và trả về giá trị đúng hoặc sai dựa trên đánh giá.

Dưới đây là danh sách các giá trị trả về cho Toán tử typeof..
Arr                 Chuỗi trả về bởi typeof
Number              "number"
String              "string"
Boolean             "boolean"
Object              "object"
Array               "object"
Function            "function"
Undefined           "undefined"
Null                "object"

*/