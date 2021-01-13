let number = prompt("Enter number", "Number goes here")
console.log(number)

let agree = confirm("Confirm?")
console.log(agree)

const startTime = new Date()
console.log(startTime)

let now = new Date()

alert(now-startTime)

const date = new Date()

let dateFormat = {
    day: date.getDay(),
    month: date.getMonth(),
    year: date.getFullYear()
}

console.log("The date is ", dateFormat.day, dateFormat.month, dateFormat.year)
