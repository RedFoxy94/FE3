/*var number = prompt('Введите число','');
if ((parseInt(number))%2==0) {
  alert("Четное число");
  } else {
     alert("Нечетное число"); // 1)
    }
	  
var x = prompt('Введите число','');
if (x < 0) {
  alert("х отрицательное число");
  } else if (x > 0) {
     alert("х положительное число"); 
  } else if (x == 0) {
     alert("х = 0"); // 2)
  }
  
 var test = true;
 if(test == false){
	 alert ('неверно'); 
 } else if (test == true) {
alert ('верно'); //3)
 }
 var test = false;
switch (test) {
  case true:
    alert( 'неверно' ); 
	break;
  case false:
    alert( 'верно' ); //3)switch
	break;
}


var x = prompt('Введите x','');
x = parseInt(x);
var y = prompt('Введите y','');
y = parseInt(y);
 a = x + y;
	if (a > 10){
		alert(a * 10);
	}else if(a < 10){
		alert(a / 10); //4)
	}
	
var x = prompt('Введите 5 или 0 или -3 или 2','');
	if(x > 0 && x < 5){
		alert('Верно');
	}else{
		alert('Неверно');
	}   				//5)
	
	var x = prompt('Введите 5 или 0 или -3 или 2','');
	x = parseInt(x);
		if(x == 0 || x == 2){
			alert(x / 10);
		}else{
			alert(x + 7);  //6)
		}   
	
	var x = prompt('Введите 1 или 0 или 3 или 2','');
		if(x != 0 && x != 3){
			alert('Верно');
	    }else{
			alert('Неверно');  //7)
		}   
var x = prompt('Введите 5 или 0 или -3 или 9','');
	x = parseInt(x);
		if(x > 0 && x < 5){
			alert(++x);
		}else{
			alert(--x); //8)
		}
		
var x = prompt('Введите 1 или 3 или 0','');
x = parseInt(x);
var y = prompt('Введите 6 или 3 или 5','');
y = parseInt(y);
	if(x <= 1 && y >= 3){
		alert(x + y);
	}else{
		alert('Неверно'); //9)
	} 
	
var x = prompt('Введите x','');
x = parseInt(x);
var y = prompt('Введите y','');
y = parseInt(y);
	if(x > 2 && x < 11 || y >= 6 && y < 14){
		alert(x + 2);
	}else{
		alert(x + 5); //10)
	} 
	
	var greeting = '';
	var lang = prompt('Введите "ru" или "en" или "de"','');
		if(lang == 'ru'){
			greeting = 'Привет';
			alert(greeting);
		}
		if(lang == 'en'){
			greeting = 'Hi';
			alert(greeting);
		}
		if(lang == 'de'){
			greeting = 'Hallo';
			alert(greeting); //11)
		}
		
var greeting = '';
var lang = prompt('Введите "ru" или "en" или "de"','');
switch (lang) {
  case 'ru':
  greeting = 'Привет';
    alert(greeting); 
	break;
  case 'en':
  greeting = 'Hi';
    alert(greeting); 
	break;
   case 'de':
   greeting = 'Hallo';
	alert(greeting);  //11)switch
	break;
}
		
var month = prompt('Выберете месяц 1,2,3,4,5,6,7,8,9,10,11,12','');
if (month == 12 || month == 1 || month == 2 ) {
	alert('зима');
} else if (month == 3 || month == 4 || month == 5) {
	alert('весна');
}else if (month == 6 || month == 7 || month == 8) {
	alert('лето');
}else if (month == 9 || month == 10 || month == 11) {
	alert('осень');   //12)
}
function zubaka(zub) {
	switch (zub) {
		
	}
}

var lang = prompt('Выберете "ru" или "en"','');
var day = prompt('Введите 1,2,3,4,5,6,7','');
var ruDays = {
	1:'Понедельник', 
	2:'Вторник', 
	3:'Среда', 
	4:'Четверг',
	5:'Пятница',
	6:'Суббота',
	7:'Воскресенье'
};
var enDays = {
	1:'Monday',
	2:'Tuesday',
	3:'Wednesday', 
	4:'Thursday', 
	5:'Friday', 
	6:'Saturday', 
	7:'Sunday'
};;
var result = '';
if (lang == 'ru') {
	result = ruDays[day];
	alert(result);
} else  if (lang == 'en'){
	result = enDays[day];
	alert(result);   ////13)
}

							////////Д.З 2/////
							

var x = prompt('Выберете число','');
a = 2;
i = 1;
while(i < x) {
	i++;
	a = 2 * a;
}
	alert(a);   ////1)
*/

var x = prompt('Выберете число','');
var i = 1;
while(i < x) {
	i++;
	a = x % i;break 
	if (x % i == 0){
		
	}
}
alert(a);
