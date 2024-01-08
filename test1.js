// const name = 'Kasia';
// const age = 25;
// const course = 'spaghetti';

// console.log(name);
// console.log(age);
// console.log(course);

// const petName = 'Pela';
// const agePet= 13;
// console.log(`cześc, jestem ${name} i mam kota ${petName}. który ma ${agePet}lat`);

// console.log("cześc jestem "+ name + " i mam kota " + petName);

// const col = ['b', 'c', 'd'];

// for (let i = 0; i < col.length; i++) {
// 	console.log(col[i]);
// }

// const letters = ['c', 'd'];
// letters.unshift('a', 'b');
// console.log(letters);
// letters.push('e', 'f');

// console.log(letters);

// const color = ['red'];
// color.unshift('blue');
// color.push('black');
// console.log(color);

// for (let i = 0; i < color.length; i++) {
// 	console.log(`moj ulubiony kolor to ${color[i].charAt(0).toUpperCase() + color[i].slice(1)}`);
// }

// const cars = 'Audi, Merc, BMW, Nissan, Dodge';
// const carsArr = cars.split(', ');

// carsArr.length > 3 ? console.log('jest ok') : console.log('nie jest ok');
// if (carsArr.includes('Audi')) {
// 	carsArr.push('Lambo');
// } else {
// 	carsArr.pop();
// }
// console.log(carsArr);

// function test() {
// 	console.log('czesc');
// }
// test();
// ----

// function data(name, age) {
// 	console.log(`czesc mam na imie ${name} i mam ${age} lat`);
// }

// data("Kasia", 35);
// ------------

// const test3 = (name) => console.log('Mam na imei Kasia');

// const test4 = (name, age) => console.log(name, age);
// test4('name', 123);

// const add = (num1, num2) => {
// 	return num1 * num2;
// };
// const days = ['pon', 'wt', 'sr'];
// const days3 = days.forEach.Each(day=>console.log(day));

// ___________________________

// Zadanie #1 - Dodaj elementy i sprawdź czy są parzyste

// let score;
// const add = (x, y) => {
// 	score = x + y;
// 	if (score % 2 === 0) {
// 		evenMsg();
// 	} else {
// 		oddMsg();
// 	}
// };

// const evenMsg = () => {
// 	console.log(`liczba ${score} jest parzysta`);
// };
// const oddMsg = () => {
// 	console.log(`liczba ${score} jest nieprzysta`);
// };

// add(10, 11);

// _
// const add = (x, y) => {
// 	const score = x + y;
// 	score % 2 === 0 ? evenMsg(score) : oddMsg(score);
// };

// const evenMsg = (num) => {
// 	console.log(`liczba ${num} jest parzrzysta`);
// };

// const oddMsg = (num) => {
// 	console.log(`liczba ${num} jest nieparzrzysta`);
// };

// add(1, 2);

// >>>>>>>>>>>>>>>>>>>>>
// Zadanie #2 - Konwerter °F na °C

// let celcius;
// let temp;
// const fahrenheit = (c) => {
// 	celcius = c;
// 	temp = celcius * 1.8 + 32;
// 	console.log(`${c} = ${temp}`);
// };

// fahrenheit(20);

// """""""""""""""""""
// Zadanie #3 - Callback & forEach

// const num = 10;
// const numbers = [];
// for (let i = 0; i < num; i++) {
// 	numbers.push(i);
// }
// console.log(numbers);

// const check = (x) => {
// 	if (x % 3 ===0 && x !== 0) {
// 		console.log(`${x} jest podzielne przez 3`);
// 	} else {
// 		console.log(`${x} nie jest podzielne przez 3`);
// 	}
// };
// numbers.forEach(check);

// _________________________________
// tworzenie elementów

// const ulList = document.createElement('ul');
// const liItem = document.createElement('li');
// liItem.textContent = 'cześć';
// document.body.appendChild(ulList);
// ulList.appendChild(liItem);
// ______________________________

// sekcja 10, zad 1

// const img = document.querySelector('img');
// img.setAttribute('src', 'alt');

// const test = () => {
// 	console.log('czesc');
// };
// test();
// setTimeout(test, 5000);

// ------------------lekcja 120

// const newUser = {
// 	name: 'Lisa',
// 	age: 23,
// 	car: {
// 		brand: 'audi',
// 		model: 'a3',
// 		color: 'czarnt',
// 	},
// };

// console.log(`${newUser.name} jezdzi samochodem ${newUser.car.brand}`);

// ----------------------
// const user = {
// 	name: 'Klaudia',
// 	age: 23,
// 	'fav color': 'czerwony',
// };
// user.country = 'Polska';
// user['fav-color'] = 'niebieski';
// const dogName = 'Drops';
// const dogAge = 5;
// const dog = {
// 	dogName,
// 	dogAge,
// };
// ----------------------

// const user = {
// 	name: "Kasia",
// };

// console.log(user.name);
// ----------------------

