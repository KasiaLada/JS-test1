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

const test3 = (name) => console.log('Mam na imei Kasia');

const test4 = (name, age) => console.log(name, age);
test4('name', 123);

const add = (num1, num2) => {
	return num1 * num2;
};
const days = ['pon', 'wt', 'sr'];
const days3 = days.forEach.Each(day=>console.log(day));