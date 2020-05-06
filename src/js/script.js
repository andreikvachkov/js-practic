// console.log("hello");
// alert("hello world");

// let answer = confirm("пидор или нет?");

// console.log(answer);

// let answer = prompt("пидор или нет?", "да");

// console.log(typeof(answer)); 

// let incr = 10,
//     decr = 10;


// console.log(++incr);
// console.log(decr++);

// console.log(5%2);


// if (2*4 == 7) {
//     console.log("yes")
// } else {
//     console.log("no")
// }



// // if (num < 49) {
// //     console.log("no")
// // } else if (num > 100) {
// //     console.log("Много")
// // } else {
// //     console.log("yes")
// // }

// // (num == 50) ? console.log("Верно") : console.log("Неверно");

// switch (num) {
//     case num < 49:
//         console.log("Неверно");
//         break;
//     case num > 100:
//         console.log("Много");
//         break;
//     case 50:
//         console.log("Верно")
//         break;
//     default:
//         console.log("шото не то");
//         break;
// }



// let num = 50;

// // while (num < 55) {
// //     console.log(num);
// //     num++;
// // }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55)

// for (let i = 1; i < 8; i++) {
//     console.log(i);
// }

// let num = 20;

// function showFirstMessage(text) {
//     alert(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("Hello");
// console.log(num); 

// function calc(a, b) {
//     return(a + b);
// }

// console.log(calc(3,4));

// // let calcc = function(a, b) {
// //     return(a + b);
// // }

// let calcc = (a,b) => a+b
// console.log(calcc(3,4));

// let str = "test";
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = "12.2px";
// // console.log(Math.round(twelve));
// console.log(parseInt(twelve));
// console.log(parseFloat(twelve));

// function first() {
//     setTimeout(function(){
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log("я учу" + lang);
//     callback();
// }

// function doone() {
//     console.log("я прошел 3 урок");
// }

// learnJS("JavaScript", doone);

                                                            // ОБЪЕКТЫ
// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };

// delete options.bool;

// console.log(options);

// for (let key in options) {
//     console.log('свойства ' + key + ' имеет значение' + options[key]);
// }
// console.log(Object.keys(options).length);

                                    //массивы

// let arr = [1, 2, 3, 4, 5, 6];

// // arr.pop();
// // arr.push("6");
// // arr.shift();
// // arr.unshift(1);

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// arr.forEach(function(item, i, mass){ 
//     console.log(i + ': ' + item + " (массив: " + mass + ')');
// });

// console.log(arr);

// let mass = [1, 3, 4, 6, 7];

// for (let key of mass) {
//     console.log(key);
// }


// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ["as", "sdaf", "fsdg", "rwer"],
//     i = arr.join(', ');
    
// console.log(i);

// let arr = [1, 2, 54, 6],
//     i = arr.sort(compareNum);

// function compareNum(a,b) {
//     return a-b;
// }
    
// console.log(arr);


                    //ООП
// let soldier = {
//     health: 400,
//     armor: 100
// };

// let john = {
//     health: 100
// };

// john.__proto__ = soldier;

// console.log(john);
// console.log(john.armor);






// как доставать информацию из документа
let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');


// изменение стилей объекта
box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i, hearts) {
//     item.style.backgroundColor = 'blue';
// });

//созздание новых элементов
let div = document.createElement('div'),
    text = document.createTextNode('gdfsghfdl');


div.classList.add('black');   // добавление класса элементу

// document.body.appendChild(div);  //добавление на страницу
// wrapper.appendChild(div);

div,innerHTML = '<h1>Hello World!</h1>';

document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);  //удвление элемента
wrapper.removeChild(heart[1]);

document.body.replaceChild(btn[2], circle[1]);  //замена элементов

console.log(div);