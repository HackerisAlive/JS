var str = "Ayush is good boy and Ayush is Nice"
console.log(str)
var num = console.log(str.length)
console.log(str[1] = "7") // doesn't work
console.log(str.charAt(1))
console.log(str.substring(0, ))
console.log(str.slice(-num, -30))
console.log(str)
console.log(str.replace(/ayush/i, "HackerisAlive")) // /i is case insensitive
console.log(str.replace(/Ayush/g, "HackerisAlive")) // /g is global match
//console.log(str.replace(/ayush/g, "HackerisAlive")) // no change bcz it is case sensitive
console.log(str.replace(/ayush/ig, "HackerisAlive")) // it is case insensitive and global match
console.log(str.toUpperCase())
console.log(str.toLowerCase())
//A string can be converted to an array with the split() method
console.log(str.split("is"))
