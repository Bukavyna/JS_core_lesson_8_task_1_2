

//////// 8_1 !
// Порахувати кількість пробілів.

/*
let myStr = prompt(`Напишіть щось з пробілами`)//`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, pariatur.`;

for (let i=0; i<myStr.length; i++){
	if (myStr.charAt(i) === ` `) {

		console.log((i))
	}
}
*/


//////// 8_2 !!
// Чи правельно введена електронна адреса.

/*
let address = prompt(`Введіть електронну адресу`);

if (address.includes('@') && address.includes('.') && !address.includes(' ') && !address.includes('@.') && !address.startsWith('@') && !address.startsWith('@, 1') && !address.endsWith('@') && !address.endsWith('@, 1')) {
	console.log(`Адреса введена правильно`);
	alert(`Адреса введена правильно`);
}

else {
	console.log(`Адреса введена неправильно`);
	alert(`Адреса введена неправильно`);
}
*/


//////// Завдання 8_3  !!!
//////// Знайти кількість щдинакових слів !!!

/*
let find = prompt(`Введіть запит`);

let start = 0;
let sum = find.split(" ");
for (let i=0; i<=sum.length; i++) {
	if (sum[i] === `html`) {
		start ++;
	}
}

console.log(`${start}`);
*/


//////// Завдання 8_4 !!!!
//Видалити слово з р'ядка

/*
let myStr5 = prompt(`Напишіть посилання з http`);

console.log('String.split()', myStr5.split(`http://`));
console.log('String.split()', myStr5.split(`https://`));
*/

