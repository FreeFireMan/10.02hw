/* 1 создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте ) */
/*const human = {
    name: 'Dima',
    age: 20,
    job: 'programmer'
}
const book = {
    title: 'Twilight',
    author: 'Stephanie Meyer',
    yearOfIssue: 2005
}
const car = {
    producer: 'MINI',
    model: 'Cooper',
    doors: 3
}
const dog = {
    nickname: 'Dobby',
    color: 'red',
    lovelyEat: 'meat'
}
const flat = {
    city: 'Kyiv',
    rooms: 3,
    bathrooms: 2
} */

/* 2 создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } }; */
/*const human = {
    name: 'Dima',
    age: 20,
    job: {
        AAA: 'programmer', 
        BBB: 'accountant'
    },
    hobby: ['computer games', 'dance']
}
const book = {
    title: 'Twilight',
    author: 'Stephanie Meyer',
    yearOfIssue: 2005,
    mediaType: {
        Print: 'Hardcover',
        e_Book: 'Kindle',
        audioBook: 'CD'
    },
    protagonists: ['Bella', 'Edward', 'Jacob']
}
const car = {
    producer: 'MINI',
    model: 'Cooper',
    doors: 3,
    characteristic: {
        tankVolume: 20,
        maxSpeed: '180 km/h'
    },
    design: ['black', 'yellow', 'blue', 'green', 'red']
}
const crochetHook = {
    type: {
        1: 'silk',
        2.5: 'cotton',
        4: 'plush'
    },
    colors: ['red', 'green', 'blue']
}
const flat = {
    city: 'Kyiv',
    rooms: {
        bedrooms: 3,
        bathrooms: 2,
        kitchen: 1
    },
    furniture: ['bed', 'table', 'cupboard']
} */

/* 3 При помощи for in вывести все ключи всех объектов из задания 1 и 2 */
/*for (const key in human) {
    console.log(key);
}
for (const key in book) {
    console.log(key);
}
for (const key in car) {
    console.log(key);
}
for (const key in crochetHook) {
    console.log(key);
}
for (const key in flat) {
    console.log(key);
} */

/* 4 При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2 */
/*console.log(Object.keys(human)); 
console.log(Object.keys(book)); 
console.log(Object.keys(car)); 
console.log(Object.keys(crochetHook)); 
console.log(Object.keys(flat)); */

/* 5 Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными) */
/*const cars = [
    { model: 'Mini',
    yearOfIssue: 2019,
    power: 115,
    color: 'yellow' },
    { model: 'Toyota',
    yearOfIssue: 2015,
    power: 135,
    color: 'red' },
    { model: 'BMW',
    yearOfIssue: 2016,
    power: 180,
    color: 'black' },
    { model: 'Mazda',
    yearOfIssue: 2018,
    power: 105,
    color: 'white' },
    { model: 'Seat',
    yearOfIssue: 2018,
    power: 115,
    color: 'white' },
    { model: 'Volkswagen',
    yearOfIssue: 2020,
    power: 130,
    color: 'blue' },
    { model: 'Porshe',
    yearOfIssue: 2020,
    power: 220,
    color: 'yellow' },
    { model: 'Opel',
    yearOfIssue: 2010,
    power: 98,
    color: 'silver' },
    { model: 'Lanos',
    yearOfIssue: 2003,
    power: 90,
    color: 'gray' },
    { model: 'Reno',
    yearOfIssue: 2015,
    power: 110,
    color: 'black' },
]; */

/* 6 Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными) */
/*const cities = [
    { city: 'Kyiv',
    population: '4 million people',
    country: 'Ukrain',
    region: 'Kyiv'},
    { city: 'Paris',
    population: '1,5 million people',
    country: 'France',
    region: 'Paris'},
    { city: 'New York',
    population: '10 million people',
    country: 'USA',
    region: 'New York'},
    { city: 'Odessa',
    population: '700 thousand people',
    country: 'Ukrain',
    region: 'Odessa'},
    { city: 'London',
    population: '7 million people',
    country: 'Great Britain',
    region: 'London'},
]; */

/* 7 Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж. */
/*const cars2 = [
    { model: 'Mini',
    yearOfIssue: 2019,
    power: 115,
    color: 'yellow',
    driver: {
        name: 'Nataliia',
        age: 24,
        sex: 'woman',
        experience: 4 } },
    { model: 'Toyota',
    yearOfIssue: 2015,
    power: 135,
    color: 'red',
    driver: {
        name: 'Dima',
        age: 30,
        sex: 'man',
        experience: 8 } },
    { model: 'BMW',
    yearOfIssue: 2016,
    power: 180,
    color: 'black',
    driver: {
        name: 'Oleg',
        age: 45,
        sex: 'man',
        experience: 23 } },
    { model: 'Mazda',
    yearOfIssue: 2018,
    power: 105,
    color: 'white',
    driver: {
        name: 'Katya',
        age: 25,
        sex: 'woman',
        experience: 1.5 } },
    { model: 'Seat',
    yearOfIssue: 2018,
    power: 115,
    color: 'white',
    driver: {
        name: 'Alex',
        age: 34,
        sex: 'man',
        experience: 15 } }
]; */

/* 8 проитерировать каждый массив из задания 5,6,7 при помощи while. */
/*let i = 0;
while (i < cars.length) {
    console.log(cars[i]);
    i++;
}
let a = 0;
while (a < cities.length) {
    console.log(cities[a]);
    a++;
}
let j = 0;
while (j < cars2.length) {
    console.log(cars2[j]);
    j++;
} */

/* 9 проитерировать каждый массив из задания 5,6,7 при помощи for. */
/*for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
for (let i = 0; i < cars2.length; i++) {
    console.log(cars2[i]);
} */

/* 10 проитерировать каждый массив из задания 5,6,7 при помощи  for of. */
/*for (const i of cars) {
    console.log(i);
}
for (const i of cities) {
    console.log(i);
}
for (const i of cars2) {
    console.log(i);
} */

/* 11 взять объекты из задания 1 и превратить каждый в json. */
/*let humanS = JSON.stringify(human);
let bookS =JSON.stringify(book);
let carS =JSON.stringify(car);
let dogS =JSON.stringify(dog);
let flatS =JSON.stringify(flat); */

/* 12 взять json из задания 11 и превратить их обратно в объекты. */
/*JSON.parse(humanS);
JSON.parse(bookS);
JSON.parse(carS);
JSON.parse(dogS);
JSON.parse(flatS); */

/* 13 взять массив из задания 5,в цикле перебрать его объекты превратив их в json . */
/*for (const i of cars) {
    JSON.stringify(i);
} */

/* 14 взять массив из задания 6,в цикле перебрать его объекты превратив их в json . */
/*for (const i of cities) {
    JSON.stringify(i);
} */

/* 15 взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив. */
/*const carsNew = [];
for (const i of cars2) {
    carsNew.push(JSON.stringify(i));
} */

/* 16 Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills */
/*const users = [
    { name: 'Alex',
    skills: ['js', 'html'] },
    { name: 'Max',
    skills: ['css', 'html'] },
    { name: 'Helen',
    skills: ['html', 'css', 'js'] },
    { name: 'Artur',
    skills: ['js', 'react'] },
    { name: 'Svetlana',
    skills: ['js', 'react', 'vue'] },
];

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
    for (let j = 0; j < users[i].skills.length; j++) {
        console.log(i + ' ' + users[i].skills[j]);
    }
}

for (const user of users) {
    console.log(user);
    for (const key of user.skills) {
        console.log(key);
    }
} */

/* 17 Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив */
/*const users = [
    { name: 'Alex',
    skills: ['js', 'html'] },
    { name: 'Max',
    skills: ['css', 'html'] },
    { name: 'Helen',
    skills: ['html', 'css', 'js'] },
    { name: 'Artur',
    skills: ['js', 'react'] },
    { name: 'Svetlana',
    skills: ['js', 'react', 'vue'] },
];
const skillsAll = [];

for (const user of users) {
    console.log(user);
    for (const key of user.skills) {
        console.log(key);
        skillsAll.push(key);
    }
} */

/* 18 За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта. */
/*let users = [
    {name: 'vasya', 
    age: 31, 
    status: false, 
    skills: ['java', 'js']}, 
    {name: 'petya', 
    age: 30, 
    status: true, 
    skills: ['java', 'js', 'html']}, 
    {name: 'kolya', 
    age: 29, 
    status: true, 
    skills: ['mysql', ',mongo']}, 
    {name: 'olya', 
    age: 28, 
    status: false, 
    skills: ['java', 'js']}, 
    {name: 'max', 
    age: 30, 
    status: true, 
    skills: ['mysql', ',mongo']}
];
for (const user of users) {
    console.log(user);
    for (const i of user.skills) {
        console.log(i);
    }
} */

/* 19 З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив. */
/*let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}]; 

const addressAll = []; 

for (const user of users) {
    addressAll.push(user.address);
}
console.log(addressAll); */

/* 20 За допомоги циклу проітерувати  масив users, записати кожного юзера в свiй блок за допомоги document.createElement. Всі данні в одному блоці. */
/*for (const user of users) {
    let div = document.createElement('div');
    div.innerText = `${user.name}, ${user.age}, ${user.status}, address: ${user.address.city}, ${user.address.country}, ${user.address.street}, ${user.address.houseNumber}.`;
    document.body.appendChild(div);
} */

/* 21 За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4) */
/*for (const user of users) {
    let div = document.createElement('div');
    document.body.appendChild(div);
        
    let divName = document.createElement('div');
    divName.innerText = user.name;
    div.append(divName);
    
    let divAge = document.createElement('div');
    divAge.innerText = user.age;
    div.append(divAge);

    let divStatus = document.createElement('div');
    divStatus.innerText = user.status;
    div.append(divStatus);

    let divAddress = document.createElement('div');
    divAddress.innerText = user.address.city + ' ' + user.address.country + ' ' + user.address.street + ' ' + user.address.houseNumber;
    div.append(divAddress);
} */

/* 22 За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості */
/*for (const user of users) {
    let div = document.createElement('div');
    document.body.appendChild(div);
        let divName = document.createElement('div');
        divName.innerText = user.name;
        div.append(divName);
        
        let divAge = document.createElement('div');
        divAge.innerText = user.age;
        div.append(divAge);

        let divStatus = document.createElement('div');
        divStatus.innerText = user.status;
        div.append(divStatus);

        let divAddress = document.createElement('div');
        div.append(divAddress);
            let divCity = document.createElement('div');
            divCity.innerText = user.address.city;
            divAddress.append(divCity);

            let divCountry = document.createElement('div');
            divCountry.innerText = user.address.country;
            divAddress.append(divCountry);

            let divStreet = document.createElement('div');
            divStreet.innerText = user.address.street;
            divAddress.append(divStreet);

            let divHN = document.createElement('div');
            divHN.innerText = user.address.houseNumber;
            divAddress.append(divHN);
} */

/* 23 Дано 2 масиви з рівною кількістю об'єктів. Масиви: З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" . Записати цей об'єкт в новий масив
Частковий приклад реультату:
let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....] */
/*let usersWithId = [
    { id: 1, 
    name: 'vasya', 
    age: 31, 
    status: false }, 
    { id: 2, 
    name: 'petya', 
    age: 30, 
    status: true }, 
    { id: 3, 
    name: 'kolya', 
    age: 29, 
    status: true }, 
    { id: 4, 
    name: 'olya', 
    age: 28, 
    status: false }
];

let citiesWithId = [
    { user_id: 3, 
    country: 'USA', 
    city: 'Portland' }, 
    { user_id: 1, 
    country: 'Ukraine', 
    city: 'Ternopil' }, 
    { user_id: 2, 
    country: 'Poland', 
    city: 'Krakow' }, 
    { user_id: 4, 
    country: 'USA', 
    city: 'Miami' }
];

let usersWithCities = usersWithId;
for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (user.id === city.user_id) {
            usersWithId = user.address = city;
        }
    }
}
console.log(usersWithCities); */

/* 24 створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу */
/*document.getElementsByTagName('div')[0];
document.getElementsByClassName('class')[0];
document.getElementById('id'); */

/* 25 змінити цей текст використовуючи селектори id, class,  tag */
/*document.getElementsByTagName('div')[0].innerText = 'Hello';
document.getElementsByClassName('class')[0].innerText = 'Goodbye';
document.getElementById('id').innerText = 'Very good!'; */

/* 26 змінити висоту та ширину блоку використовуючи селектори id, class, tag */
/*document.getElementsByTagName('div')[0].style.width = '500px';
document.getElementsByClassName('class')[0].style.height = '500px';
document.getElementById('id').style.border = '1px solid black'; */

/* 27 за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені */
/*let table = document.createElement('table');
let tr = document.createElement('tr');
table.append(tr);
for (let i = 0; i < 3; i++) {
    let td = document.createElement('td');
    td.style.border = '1px solid black';
    tr.append(td);
}

table.style.width = '200px';
table.style.height = '200px';
document.body.appendChild(table); */

/* 28 за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені */
/*let table = document.createElement('table');

for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');
    table.append(tr);
    for (let j = 0; j < 3; j++) {
        let td = document.createElement('td');
        td.style.border = '1px solid black';
        tr.append(td);
    }
}

table.style.width = '200px';
table.style.height = '200px';
document.body.appendChild(table); */

/* 29 за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені */
/*let table = document.createElement('table');

for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');
    table.append(tr);
    for (let j = 0; j < 5; j++) {
        let td = document.createElement('td');
        td.style.border = '1px solid black';
        tr.append(td);
    }
}

table.style.width = '200px';
table.style.height = '200px';
document.body.appendChild(table); */

/* 30 за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt */
/*let n = prompt('String: ');
let m = prompt('Cell: ');

let table = document.createElement('table');

for (let i = 0; i < n; i++) {
    let tr = document.createElement('tr');
    table.append(tr);
    for (let j = 0; j < m; j++) {
        let td = document.createElement('td');
        td.style.border = '1px solid black';
        tr.append(td);
    }
}

table.style.width = '200px';
table.style.height = '200px';
document.body.appendChild(table); */

/* 31 Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
 - знайти всі елементі, які мають class */
/*document.querySelectorAll('[class]') */;

/* 32 знайти всі параграфи ,та змінити текст на hello oktenweb! */
/*for (const i of document.getElementsByTagName('p')) {
    i.innerText = 'Hello okten!';
} */

/* 33 знайти всі div та змінити ім колір на червоний */
/*for (const i of document.getElementsByTagName('div')) {
    i.style.color = 'red';
} */

