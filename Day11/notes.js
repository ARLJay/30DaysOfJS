const nums = [1, 2, 3]
let [n1, n2, n3] = nums

console.log(n1, n2, n3)

const nums2 = [
    [1, 3, 5],
    [2, 4, 6]
]

let [odd, even] = nums2

console.log(odd)

let [numm1, , numm3] = nums

console.log(numm1)
console.log(numm3)

const names = [undefined, 'Brook', 'David']
let [
    firstPerson = 'Alistair',
    secondPerson,
    thirdPerson,
    fourthPerson = 'John'
] = names

console.log(firstPerson, secondPerson)

const nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)

const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
    console.log(country, city)
}

const rect = {
    width: 20,
    height: 10
}
const calculatePerimeter = rectangle => {
    return 2 * (rectangle.width + rectangle.height)
}

console.log(calculatePerimeter(rect)) // 60

