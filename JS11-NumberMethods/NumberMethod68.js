/*
Cho n là 1 tham số.
Viết chương trình kiểm tra n có phải là số hay không

Ví dụ:
Cho n = ''; In ra false
Cho n = 'abc'; In ra false
Cho n = 23; In ra true
Cho n = 34.5; In ra true
Cho n = '23.8'; In ra true
Đầu vào: n
Đầu ra: Kiểm tra n có phải là số hay không (true hay false)
*/

function run(n) {
    let num = Number.parseInt(n);
    let check = Number.isInteger(num);
    console.log(check);
}


/*
Number.isFinite()
The Number.isFinite() method determines whether the passed value is a finite number.

Syntax
Number.isFinite(value)

Example
Number.isFinite(Infinity);  // false
Number.isFinite(NaN);       // false
Number.isFinite(-Infinity); // false

Number.isFinite(0);         // true
Number.isFinite(2456);      // true

Number.isInteger()
The Number.isInteger() method determines whether the passed value is an integer.

Syntax
Number.isInteger(value)

Example
Number.isInteger(0);         // true
Number.isInteger(1);         // true
Number.isInteger(-100000);   // true
Number.isInteger(99999999999999999999999); // true

Number.isInteger(0.1);       // false
Number.isInteger(Math.PI);   // false

Number.parseFloat()
The Number.parseFloat() method parses a string argument and returns a floating point number.

Syntax
Number.parseFloat(string)

Example
Number.parseFloat('10') //10
Number.parseFloat('10.00') //10
Number.parseFloat('237,21') //237
Number.parseFloat('237.21') //237.21
Number.parseFloat('12 34 56') //12
Number.parseFloat(' 36 ') //36
Number.parseFloat('36 is my age') //36

Number.parseFloat('-10') //-10
Number.parseFloat('-10.2') //-10.2

As you can see Number.parseFloat() is pretty flexible.
It can also convert strings with words, extracting the first number, but the string must start with a number:

Number.parseFloat('I am Flavio and I am 36') //NaN

Number.parseInt()
The Number.parseInt() method parses a string argument and returns an integer of the specified radix or base.

Syntax
Number.parseInt(string,[ radix])

Example
Number.parseInt('10') //10
Number.parseInt('10.00') //10
Number.parseInt('237,21') //237
Number.parseInt('237.21') //237
Number.parseInt('12 34 56') //12
Number.parseInt(' 36 ') //36
Number.parseInt('36 is my age') //36

As you can see Number.parseInt() is pretty flexible.
It can also convert strings with words, extracting the first number, but the string must start with a number:

Number.parseInt('I am Flavio and I am 36') //NaN
You can add a second parameter to specify the radix.
Radix 10 is default but you can use octal or hexadecimal number conversions too:

Number.parseInt('10', 10) //10
Number.parseInt('010') //10
Number.parseInt('010', 8) //8
Number.parseInt('10', 8) //8
Number.parseInt('10', 16) //16
*/