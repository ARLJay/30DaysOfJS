let array = [0, 1, 2]

let ten = "10"

array[0] += +ten

let user1 = {
    name: "Alistair",
    role: "Student",
    country: "UK"
}
const multiLine = "I 67am a\
multiline string w5th a  0 lot\
of 2 n2umber4s 0k"

console.log(multiLine.match(/\d+/g))

let nameCountry = user1.name + user1.country;

console.log(`my name is ${user1.name} and i live in the ${user1.country}`)

console.log(nameCountry, nameCountry.length)

console.log(array == user1)
