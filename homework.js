// -------------------------- Home work --------------------------
// -------------------------- Еглевский Владислав Александрович --------------------------


//-------------------------Функции стрелки. Задачи.-----------------------------------

// 1. Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):
//
// function sum() {
//     const params = Array.prototype.slice.call(arguments);
//
//     if (!params.length) return 0;
//     return params.reduce(function (prev, next) { return prev + next; });
// }

//
// sum(1, 2, 3, 4); // 10
// sum(); // 0

const sum = (...argums) => {
    if(!argums.length) { return 0; };
    return argums.reduce( (prev, next) => prev + next );
};

console.log(sum(1, 2, 3, 4));
console.log(sum());



//------------------------------Деструктурирующее присваивание. Задачи.-------------------------------


//1. Используя rest оператор и деструктуризацию, создать функцию, которая принимает
// любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:
//
//     func(‘a’, ‘b’, ‘c’, ‘d’) →
// {
//     first: ‘a’,
//     other: [‘b’, ‘c’, ‘d’]
// }


const func = (first, ...others) => ({first , others});
console.log(func('a','b','c','d'));


//2. Организовать функцию getInfo, которая принимает объект вида
// { name: ...,  info: { employees: [...], partners: [ … ]  } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:
//

const organisation = {
  name: 'Google',
  info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing']   }
};

// getInfo(organisation); →
// Name: Google
// Partners: Microsoft Facebook


let getInfo = obj =>  {
    if(!obj.name) obj.name = 'unknown';
    const[first,second] = obj.info.partners;
    return (console.log(`Name: ${obj.name}`), console.log(`Partners: ${first} ${second}`));
};

getInfo(organisation);
