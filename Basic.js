// comparison operator compares the two operands
let x = 10, y = "10";
let z = x == y;
console.log(z)

// Strict equal operator
let i = 10, j = "10";
let k = i === j;
console.log(k)

let a = 9; //global scoped
function app() {
  if (9 == 9) {
    let t = 10; //block scoped
    for (var i = 1; i < 5; i++) {
      var b = i + t; //function scoped
      console.log(b)
    }
  }
  const pi = 3.14; //block scoped
  console.log(a)
  console.log(b)
  console.log(pi)
}
app()
console.log(a)
console.log("Ayush")
