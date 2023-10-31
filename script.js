// Задание 1
// let a = [1, 2, 3, 0, 4, 5, 6]
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i] * a[i])
// }

// Задание 2
// let numbers = [1, 2, 3, 0, 4, 5, 6];
// let numbersGreaterThanZero = true;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] <= 0) {
//         numbersGreaterThanZero = false
//         break
//     }
// }
// if (numbersGreaterThanZero) {
//     console.log('Все элементы в массиве больше 0')
// } else {
//     console.log('Есть элемент в массиве с 0')
// }

// Задание 3
// numbers = [1, 2, -3, 0, 4, -5, 6]
// let numbersNotNegative = true
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//         numbersNotNegative = false
//         break
//     }
// }
// if (numbersNotNegative) {
//     console.log('В массиве нет отрицательных чисел')
// } else {
//     console.log('В массиве есть отрицательные числа')
// }

// Задание 4
// numbers = [1, 2, -3, 0, 4, 5, -6]
// let numbersNegative = []
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//         numbersNegative.push(numbers[i])
//     }
// }
// console.log(numbersNegative)