var e = 2; 
f = 1 + (e *= 2);
console.log(f); // 1) f = 5 *= означает что переменной которой мы присвоили число умножаем на определенное чило

var m = +"1";
n = 100 + m;
alert(n); //2) n = 101

var a = +"1";
var b = +true;
var c = +null;
var d = +false;
z = a + b + c + d;
console.log(z); // 3)

var firstName = 'John ',  lastName = 'Smith',
name = firstName + lastName;
console.log(name);  // 4)name = JohnSmith

var l = 10;
p = l - 1;
console.log(p); //5) p = 9 

var a = 5;
alert(typeof a); 
var a = 'test';
alert(typeof a);
var a = undefined;
alert(typeof a); 
var a = null;
alert(typeof a); 
var a = true;
alert(typeof a); 
var a = { name: "Вася" };
alert(typeof a);  //6) объявление переменных


var x = 20 , y = 4 , z = 2;
q = x - y / z;
console.log(q);
if (q > 0) {
  alert( 'больше нуля' );
} else if (q < 0) {
  alert( 'меньше нуля' );
} else {
  alert( 'Да' ); //7)больше 0
}
var x = 1 , y = 6 , z = 3;
q = x - y / z;
console.log(q);
if (q > 0) {
  alert( 'больше нуля' );
} else if (q < 0) {
  alert( 'меньше нуля' );
} else {
  alert( 'Да' ); //7) меньше 0
}

var x = 23 , y = 15 , z = 7;
if (x < y && x < z) {
  alert( 'x min значение' );
}else if (y < x && y < z) {
	alert( 'y min значение' );
}else if (z < x && z < y) {
alert( 'z min значение' ); //8) min число
}



