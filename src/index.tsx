// 赋值复制
import {count, addCount} from '@';
import {Component} from 'react';
import {render} from 'react-dom';
import virus from './assets/virus.jpeg';

import './style';

console.log(count);
addCount();
console.log(count);

function func() {
    return new Promise((resolve, reject) => {
        const data = 100;
        resolve(`Gary ${data} Yin`);
    });
}

function* generator() {
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
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    static hobby = 'programming~~'
}

const person = new Person('Gary', 28);
console.log(person?.name, person?.age);

console.log(String.raw`I'm Gary\n28 year's old~`);
console.log(Person.hobby);

const root: HTMLElement | null = document.getElementById('root');
root && (root.innerText = 'webpack build!!!!');

class Goods extends Component {
    render() {
        return <div>
            Goods!!!!
            <img src={virus} alt='百毒不侵' />
        </div>;
    }
}

render(<Goods/>, document.getElementById('root'));