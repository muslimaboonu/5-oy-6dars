// uyga vazifa
//    1-misol (map, filter)
// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];
// function getNamesByGrade(students, grade) {
//   const result = students
//     .map((student) => {
//       if (student.percent > 85) {
//         return { name: student.name, percent: student.percent, grade: 5 };
//       } else if (student.percent <= 85 && student.percent > 70) {
//         return { name: student.name, percent: student.percent, grade: 4 };
//       } else {
//         return { name: student.name, percent: student.percent, grade: 3 };
//       }
//     })
//     .filter((item) => item.grade == grade);
//   return result;
// }
// console.log(getNamesByGrade(students, 5));
//    2-misol (reduse)
//    3-misol (map)
// const numbers = [1, 2, 3, 4, 5];
// let result = numbers.map((item) => {
//   return item ** 2;
// });
// console.log(result);

//    5-misol (split, map, join)
// let text = "George Raymond Richard Martin";
// //   .split(" ")
// //   .map((item) => item.charAt());
// let textSplited = text.split(" ");

// let firstLetter = textSplited.map((item) => item.charAt());

// let result = firstLetter.join("");
// console.log(result);

//    6-misol (sort)
// const people = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ];
// people.sort((a, b) => a.age - b.age);
// const young = people[0].age;
// const old = people[people.length - 1].age;
// const ageDifference = old - young;
// console.log(ageDifference);

// 7-misol (filter)
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// const oddNumbers = numbers.filter((num) => num % 2 !== 0);
// console.log("Juft sonlar:", evenNumbers);
// console.log("Toq sonlar:", oddNumbers);

// 8-misol (reduce)

// 9-misol (sort)

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
// const idSort = products.sort((a, b) => a.id - b.id);
// const nameSort = products.sort((a, b) => a.name.length - b.name.length);
// const priceSort = products.sort((a, b) => a.price - b.price);
// const ratingSort = products.sort((a, b) => a.rating - b.rating);
// const discountSort = products.sort((a, b) => a.discount - b.discount);
// console.log(discountSort);

// 10-misol (sort)

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
// const ratingSort = products.sort((a, b) => a.rating - b.rating);
// console.log(ratingSort.at());
// console.log(ratingSort.at(-1));

// 20-misol (Object.entries, map, join)
// function digitSum(n) {
//   if (n < 10) return n;
//   return (n % 10) + digitSum(Math.floor(n / 10));
// }
// console.log(digitSum(1234));
// console.log(digitSum(987));
// console.log(digitSum(5));
// 21-misol (rekursiv funksiya)
// 22-misol (reduce)
// 23-misol (map)
// const pupils = [
//  {
//    name: "Elbek",
//    protcent: 95,
//  },
//  {
//    name: "Zafar",
//    protcent: 78,
//  },
//  {
//    name: "Aziz",
//    protcent: 83,
//  },
//  {
//    name: "Jasur",
//    protcent: 88,
//  },
//  {
//    name: "Bobur",
//    protcent: 66,
//  },
//  {
//    name: "Kamron",
//    protcent: 75,
//  },
//];
//function getNamesByGrade(pupils, grade) {
//  const result = pupils.map((student) => {
//    if (student.percent >= 90) {
//      return { name: student.name, percent: student.percent, grade: 5 };
//    } else if (student.percent <= 90 && student.percent >= 80) {
//      return { name: student.name, percent: student.percent, grade: 4 };
//    } else if (student.percent <= 80 && student.percent >= 70) {
//      return { name: student.name, percent: student.percent, grade: 3 };
//    } else {
//      return { name: student.name, percent: student.percent, grade: 2 };
//    }
//  });
//}
//console.log();
// 24-misol (map)
// function assignPassStatus(pupils) {
//   return pupils.map((students) => ({
//     ...students,
//     isPassed: students.protcent > 70,
//   }));
// }
// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];
// console.log(assignPassStatus(pupils));

// 25-misol (reduce)
