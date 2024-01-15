// Для задоного массива выводить в консоль число если оно чётное
// Как только цикл дойдёт до 23 разорвать цикл
const numbers = [4, 3, 10, 99, 23, 41, 5, 12, 23, 41, 12, 32];

for (let i = 0; i < numbers.length; i++) {
    if (numbers [i] % 2 === 0) {
        console.log (numbers [i])
    }

    if (numbers [i] === 23) {
        break
    }
}

// Для заданного массива написать цикл который выведет в консоль
// Код html элемента одной строкой
/*
<ul>
        <li><h1>Hello Jack Smith</h1></li>
        <li><h1>Hello Bob Summers</h1></li>
        <li><h1>Hello Sarah Gold</h1></li>
        <li><h1>Hello Susan Vega</h1></li>
        <li><h1>Hello Mary Roberts</h1></li>
</ul>
*/
const people = [{name: 'Jack', surname: 'Smith'}, {name: 'Bob', surname: 'Summers'}, {name: 'Sarah', surname: 'Gold'}, {name: 'Susan', surname: 'Vega'}, {name: 'Mary', surname: 'Roberts'}];

for (let i = 0; i < people.length; i++) {
       htmlElement = `<ul><li><h1>Hello ${people[i].name} ${people[i].surname}</h1></li></ul>`
    console.log(htmlElement);
}


// Напишите функцию которая будет принимать два аргумента (start, end)
// Для каждого числа в диапозоне от start до end будет выводить число
// И Четное оно Или нечетное

function evenOrNot (start, end) {
 for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    }
    else {
        console.log(`${i} is not even`);
    }
 }
}

evenOrNot (20, 34)


Напишите функцию которая принимает три числа в качестве аргумента
Находит наибольшее из трёх

function biggestNUmber (num1, num2, num3) {
    let biggestNum = 0;
    const numbers = [num1, num2, num3]
    for (let i = 0; i < numbers.length; i++) {
        if (numbers [i] > biggestNum) {
            biggestNum = numbers [i]
        }
    }
    return biggestNum
}

const result = biggestNUmber (30, 50, 80);
console.log(result);



// Fizz Buzz
// Для диапозона чисел от 1 до 100
// написать программу которая выведет в консоль число и FIZZ если число делится на 3 без остатка
// выведет в консоль число и BUZZ если число делится на 5 без остатка
// выведет в консоль число и FIZZ BUZZ если число делится на 3 и на 5 без остатка

for (var i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i + " FizzBuzz");
    }  
    else if (i % 3 == 0) {
         console.log( i + " Fizz");
    }
    else if (i % 5 == 0) {
        console.log(i + " Buzz");
    } else {console.log(i)}}