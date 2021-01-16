const nums = [1,2,3,4,5,6,7,8,9,10]

const setNums = new Set(nums)
console.log(setNums)

for (const num of setNums){
    console.log(num)
}

setNums.add(11)
console.log(setNums)

setNums.delete(1)

console.log(setNums.has(4))

setNums.clear()

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

let d = a.filter((num => !B.has(num)))
let D = new Set(d)

console.log(D)

//map appears to make a dictionary type data structure