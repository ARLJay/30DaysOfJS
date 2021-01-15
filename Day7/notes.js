function fn_a(){
    console.log("fn_a")
}

function fn_b(){
    return("fn_b")
}

function fn_c(c){
    return c + " fn_c"
}

fn_a()

console.log(fn_b())

console.log(fn_c("c"))

//first class function
function map(fn){
    for (arg of arguments){
        console.log(fn(arg))
    }
}

const logAllNums = (...args) => {
    console.log(args)
}

logAllNums(1, 2, 3, 4)

let num = function(){
    console.log("Stuff")
}

const square = function(n){
    return n*n
}

console.log(square(8))

const square2 = n => {
    return n*n
}

console.log(square2(7))

//Need to learn about self invoking functions

function fn_d(d = "d"){
    console.log(d + " fn_d")
}

fn_d()
