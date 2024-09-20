console.log('Задание 1');
let mounth=5; // prompt('Введите число от 1 до 12')
console.log(mounth);
let mounths = ['Январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
console.log(mounths[mounth-1]);

console.log('Задание 2');
let dostavka=250
let tovar1=[15000, 'Процессор', dostavka];
let tovar2=[25000, 'Видеокарта', dostavka];
let tovar3=[5000, 'Блок питания', dostavka];
let sum = tovar1[0] + tovar2[0] + tovar3[0] + tovar1[2] + tovar2[2] + tovar3[2];
console.log(`Общая стоимость товаров: ${sum}`);

console.log('Задание 3');
let arr = [23, 41, 16, 52, 14];
console.log(`Максимальное число из массива ${arr} - ${Math.max(...arr)}, а минимальное - ${Math.min(...arr)}`);

console.log('Задание 4');
arr = [Math.floor(Math.random(1)*10+1), 
    Math.floor(Math.random(1)*10+1), 
    Math.floor(Math.random(1)*10+1), 
    Math.floor(Math.random(1)*10+1), 
    Math.floor(Math.random(1)*10+1)];
console.log(arr);
console.log(arr.sort(function(a,b) {return a-b}));
console.log(arr.sort(function(a,b) {return b-a}));

console.log('Задание 5');
arr = ["Hi", "Hello", "Bonjour"];
arr.push("Hola");
console.log(arr);

console.log('Задание 6');
let a = ['a', 'b', 'c'];
let b = [1, 2, 3];
console.log(a.concat(b));

console.log('Задание 7');
arr = [1, 2, 3];
console.log(arr);
console.log(arr.reverse());

console.log('Задание 8');
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
let res = fruits.includes("Banana");
console.log(res);

console.log('Задание 9');
const array = [2, 5, 9];
res1 = array.indexOf(5);
delete array[res1];
console.log(array);