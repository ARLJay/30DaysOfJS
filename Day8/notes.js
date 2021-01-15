//vars can be passed without parameters

let a = 5
let b = 10

function scope(){
    console.log(a,b)
    let c = 15
    if (true){
        let a = "6"
        let b = "11"
        console.log(a,b)
    }
    console.log(a,b)
    console.log(c)
}

scope()//c cannot be accessed outside scope

const obj = {
    a: 1,
    b: 2,
    c: 3,

    returnNum : function() {
        return (5)
    }
}

const obj2 = Object.assign({}, obj)

console.log(obj.a, obj["a"])

console.log(Object.keys(obj.a))
console.log(obj2.hasOwnProperty("d"))