const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let sortedAges = ages.sort()
console.log(sortedAges[0], sortedAges[sortedAges.length -1])

(sortedAges.length % 2 == 0) ? (console.log((sortedAges[sortedAges.length /2] + sortedAges[sortedAges.length / 2 + 1]) /2)) : (console.log(sortedAges[Math.ceil(sortedAges.length / 2)]))

let total = 0
for (i = 0; i < sortedAges.length; i++){
    total += sortedAges[i]
}

console.log(total/sortedAges.length)

console.log("Range: ", sortedAges[sortedAges.length -1] - sortedAges[0])