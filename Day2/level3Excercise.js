//1,4

let loveStr = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'

let pattern = /love/gi
console.log(loveStr.match(pattern).length)

let salary = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

regEx = /\d+/g

nums = salary.match(regEx)
console.log(+(12 * nums[0]) + (+nums[1]) + +(12 * nums[2]))