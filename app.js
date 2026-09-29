// misol-1

// str = 'hello'

// natija = {}

// function sanaHarf(str){
//     for (let i = 0; i < str.length; i++) {

//         let harf = str[i];

//         if (natija[harf]) {
//             natija[harf]++;
//         } else {
//             natija[harf] = 1;
//         }
//     }

//     return natija;
// }

// console.log(sanaHarf(str));

//misol-1

// const students = [
//     { name: "Quincy", percent: 96 },
//     { name: "Jason", percent: 84 },
//     { name: "Alexis", percent: 100 },
//     { name: "Sam", percent: 65 },
//     { name: "Katie", percent: 90 },
//     { name: "Anna", percent: 75 },
// ];

// function getNamesByGrade(students, grade) {

//     return students
//         .filter(student => {
//             if (grade === 5) {
//                 return student.percent >= 85 && student.percent <= 100;
//             }

//             if (grade === 4) {
//                 return student.percent >= 70 && student.percent < 85;
//             }

//             if (grade === 3) {
//                 return student.percent >= 60 && student.percent < 70;
//             }
//         })
//         .map(student => student.name);
// }

// console.log(getNamesByGrade(students, 5));


// misol-3

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.map(num => num * num);

// console.log(result);

//misol-7

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const juft = numbers.filter(num => num % 2 === 0);

// const toq = numbers.filter(num => num % 2 !== 0);

// console.log(juft);
// console.log(toq);

//9-misol

// let products = [
//     { id: 3, name: "Phone", price: 500, rating: 4.5, discount: 10 },
//     { id: 1, name: "Laptop", price: 1000, rating: 4.8, discount: 20 },
//     { id: 2, name: "Mouse", price: 50, rating: 4.2, discount: 5 }
// ];

// console.log(products.sort((a, b) => a.id - b.id));
// console.log(products.sort((a, b) => a.price - b.price));


//10misol

// let products = [
//     { id: 3, name: "Phone", price: 500, rating: 4.5, discount: 10 },
//     { id: 1, name: "Laptop", price: 1000, rating: 4.8, discount: 20 },
//     { id: 2, name: "Mouse", price: 50, rating: 4.2, discount: 5 }
// ];

// products.sort((a,b) => b.rating-a.rating)

// console.log(products[0]);

//misol - 11

// let products = [
//     { id: 3, name: "Phone", price: 500, rating: 4.5, discount: 10 },
//     { id: 1, name: "Laptop", price: 1000, rating: 4.8, discount: 20 },
//     { id: 2, name: "Mouse", price: 50, rating: 4.2, discount: 5 }
// ];

// products.sort((a,b) => a.price - b.price);

// console.log(products[0]);

//misol-13

// let products = [
//     { id: 3, name: "Phone", price: 500, rating: 4.5, discount: 10 },
//     { id: 1, name: "Laptop", price: 1000, rating: 4.8, discount: 20 },
//     { id: 2, name: "Mouse", price: 50, rating: 4.2, discount: 5 }
// ];

// let names = products.map(product => product.name);

// console.log(names);

//misol - 14

// let products = [
//     { id: 1, name: "Laptop", price: 1000, rating: 4.8, discount: 20 },
//     { id: 2, name: "Mouse", price: 50, rating: 4.2, discount: 5 },
//     { id: 3, name: "Phone", price: 500, rating: 4.5, discount: 10 },
//     { id: 4, name: "Keyboard", price: 100, rating: 4.3, discount: 15 },
//     { id: 5, name: "Monitor", price: 300, rating: 4.6, discount: 10 },
//     { id: 6, name: "Headphones", price: 150, rating: 4.7, discount: 25 }
// ];

// let product = products.find(product => product.id === 5);

// console.log(product.name);

// misol- 15


// let products = [ 
//   { 
//     id: 6, 
//     name: "Smarthpone", 
//     price: 12000, 
//     rating: 4.5, 
//     discount: 20, 
//   }, 
//   { 
//     id: 2, 
//     name: "Acer", 
//     price: 10000, 
//     rating: 4.3, 
//     discount: 10, 
//   }, 
//   { 
//     id: 1, 
//     name: "Mac book", 
//     price: 17000, 
//     rating: 4.7, 
//     discount: 40, 
//   }, 
//   { 
//     id: 4, 
//     name: "HP", 
//     price: 21000, 
//     rating: 4.1, 
//     discount: 30, 
//   }, 
//   { 
//     id: 5, 
//     name: "Dell", 
//     price: 35000, 
//     rating: 4.9, 
//     discount: 30, 
//   }, 
// ];

// products = products.filter(product => product.id !== 4)

// console.log(products);


//misol -16

// let str = "hello";

// let result = str.split("").every(char => 
//     (char >= "a" && char <= "z") || 
//     (char >= "A" && char <= "Z")
// );

// console.log(result);

//misol - 18

// let str = "Men Abdulaziz Programmerman";

// let result = str.split(" ").map(word => word.length);

// console.log(result);

// misol - 19

// let str = "Hello World";

// let result = str.split("").some(char => char === " ");

// console.log(result);

//misol - 23

// let students = [
//     { name: "Ali", percent: 95 },
//     { name: "Vali", percent: 85 },
//     { name: "Hasan", percent: 75 },
//     { name: "Husan", percent: 60 },
//     { name: "Aziz", percent: 100 },
//     { name: "Sardor", percent: 90 }
// ];

// let result = students.map(student => {
//     if (student.percent >= 90) {
//         student.grade = 5;
//     } else if (student.percent >= 80) {
//         student.grade = 4;
//     } else if (student.percent >= 70) {
//         student.grade = 3;
//     } else {
//         student.grade = 2;
//     }

//     return student;
// });

// console.log(result);

// misol - 24

let students = [
    { name: "Ali", percent: 95 },
    { name: "Vali", percent: 85 },
    { name: "Hasan", percent: 75 },
    { name: "Husan", percent: 60 },
    { name: "Aziz", percent: 100 },
    { name: "Sardor", percent: 90 }
];

let result = students.map(student => {
    if (student.percent >= 70) {
        student.isPassed = true;
    } else {
        student.isPassed = false;
    }

    return student;
});

console.log(result);