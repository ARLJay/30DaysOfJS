let array = Array()

let array2 = []

let array3 = [
    1.0, 0.0, 0.0,
    0.0, 1.0, 0.0,
    0.0, 0.0, 1.0
]

console.log(array3)

for (i = 0; i < 3; i++){
    for (j = 0; j < 3; j++){
        console.log(array3[3*i + j])
    }
}

let str = "Hello There"

let array4 = str.split(" ")
console.log(array4)

array4[1] = "there"
console.log(array4[array4.length - 1])

let index = array4.indexOf("there")
index != -1 ? console.log("not there") : console.log("there is there")

console.log(array4.includes("General Kenobi"))

console.log(Array.isArray(array4))

str2 = Array.toString()
console.log(str2)

let numbers = [1,2,3,4,5]
console.log(numbers.slice(1,4))

numbers.push(6)
//arrays can be interacted with using push/pop
//pop removes last, shift removes first

let descending = numbers.reverse()

array2d =  [0,1][1,0]
console.log(array2d[0][1])
