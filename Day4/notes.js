if (true) {
    console.log(true)
} else if (false){
    console.log("This is unreachable")
}

let value = 5

switch(value){
    case 1:
        console.log("1")
    case 5:
        console.log("Here")
}

switch(true){
    case value == 0:
        console.log("Value is 0")
        break;
    case value > 0:
        console.log("Value is greater than 0")

}

//let input = prompt("Input")