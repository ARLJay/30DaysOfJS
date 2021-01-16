const retSqr = (n) => {
    return n**2
}

function cube(retSqr, n){
    return retSqr(n) * n
}

const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 3 * m + t
        }
    return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10))

let i = 0
function logNum(){
    console.log(i)
    i++
}


setTimeout(logNum, 2000)
//setInterval(logNum, 2000)

const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum)

