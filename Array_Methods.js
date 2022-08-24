//let arr = [1,2,3,4,5]
let arr = new Array(1, 2, 3, 4, 5, 5, 5) // Second way to create array

//Push
console.log("Push")
console.log(arr)
arr.push(6) // add at end
console.log(arr)

//Unshift
console.log("Unshift")
console.log(arr)
arr.unshift(0) // add at start
console.log(arr)

//Pop
console.log("Pop")
console.log(arr)
arr.pop() // remove last element
console.log(arr)

//Shift
console.log("Shift")
console.log(arr)
arr.shift() // remove start element
console.log(arr)

//Indexof
console.log("Indexof")
console.log(arr)
console.log(arr.indexOf(5)) // give first index of element

//Indexof
console.log("Lastindexof")
console.log(arr)
console.log(arr.lastIndexOf(5)) // give last index of element

//Include
console.log("Include")
console.log(arr)
console.log(arr.includes(0)) // check if num is present or not and return in boolean

//Find
let names = [
  {
    name: "Ayush",
    age: 19
  },
  {
    name: "Hitesh",
    age: 20
  },
  {
    name: "Ayush",
    age: 20
  }
]

let emp = [
  {
    name: "Ayush",
    age: 19
  },
  {
    name: "Hitesh",
    age: 20
  },
  {
    name: "Ayush",
    age: 20
  }
]

console.log(names.find(function check(ele) { return ele.name == "Ayush" })) // Inline callback function
console.log(names.find((ele) => { return ele.name == "Ayush" })) // Arrow function
console.log(names.find(ele => ele.name == "Ayush")) //by default return
for (i in names) {
  console.log(names[i].name) // use to access obj in arr
}

// Slice
console.log(arr)
console.log(arr.slice(1, 3)) // it start from index 1 & second parameter next index to last will be deleted

// Spread Operator
names = ["Ayush", "Ketan"]
console.log(names)
emp = []
console.log(emp)

// Pass by Reference
emp = names
console.log(names)
console.log(emp)

names[0] = "Hitesh" // names[0] is change in both bcz emp = names arr memory location
console.log(names)
console.log(emp)

names = ["Ayush", "Ketan"]
console.log(names)
emp = []
console.log(emp)

// Pass by value
emp = [...names]
console.log(names)
console.log(emp)

names[0] = "Hitesh" // names[0] is only change in names arr
console.log(names)
console.log(emp)

// For Each
names = ["Ayush", "Ketan", "Ayush"]
names.forEach((name,index) => { name == "Ayush" ? console.log("At Index",index,"Available") : console.log("not available") })

// Filter
console.log(names.filter((name) => name == "Ayush"))

// Map
console.log(arr.map(ele => ele * 2)) // it does not change the real arr
console.log(arr)
let arr1 = arr.map(ele => ele * 5) // if want to make change permanent then create new variable
console.log(arr1)
