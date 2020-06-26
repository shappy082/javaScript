// 2.1
// let array1 = [1, 2, 30, 400]
// let array2 = array1.filter(item => item > 10)
// console.log(array2)

// 2.2
// let array1 = [1, 2, 3, 4]
// let array2 = array1.filter(item => item % 2 == 1)
// console.log(array2)

// 2.3
// let array1 = [1, "1", 2, {}]
// let array2 = array1.filter(item => typeof item == 'number')
// console.log(array2)

// 2.4
// let array1 = ["apple", "banana", "orange", "pineapple", "watermelon"]
// let array2 = array1.filter(item => item.length > 6)
// console.log(array2)

// 2.5
let array1 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
  { name: "pineapple", age: 16 },
  { name: "peach", age: 24 },
];
let array2 = array1.filter(item => item.age < 18)
console.log(array2)