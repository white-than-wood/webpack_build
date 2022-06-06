// 赋值复制
import {count, addCount} from '@/index';

import './style.css';

console.log(count);
addCount();
console.log(count);

function func() {
	return new Promise((resolve, reject) => {
		const data = 100;
		resolve(`Gary ${data} Yin`);
	});
}

function *generator() {
	yield 'generator';
}

async function bash() {
	return 'push';
}

let init = generator();
const data = init.next();
console.log(data.value, data.done);

func().then((data) => {
	console.log(data);
}).catch((err) => {
	console.error(err);
});

bash().then((data) => {
	console.log(data);
}).catch((err) => {
	console.error(err);
});

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	static hobby = 'programming~~'
}

const person = new Person('Gary', 28);
console.log(person.name, person.age);

console.log(String.raw`I'm Gary\n28 year's old~`);
console.log(Person.hobby);

const root = document.getElementById('root');
root.innerText = 'webpack build!!!!';