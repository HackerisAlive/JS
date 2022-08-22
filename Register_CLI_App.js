let id = 1;
let details = []
let obj = {}
while (true) {
  console.log("1. Enter the Details")
  console.log("2. Update the Details")
  console.log("3. Delete the Details")
  console.log("4. Show the Details")
  console.log("0. Exit")
  let input = prompt("Enter the Choose")
  switch (input) {
    case "1":
      insertele()
      break
    case "2":
      update()
      break
    case "3":
      del()
      break
    case "4":
      show()
      break
    case "0":
      return // getting out of infinite loop
    default:
      console.log("Enter the correct choice")
  }
}

function insertele() {
  let n = Number(prompt("Enter the ID")) // Typecasting
  for (let i = 0; i < n; i++) {
    details.push(
      obj = {
        "ID": id++,
        "Name": prompt("Enter Name"),
        "Age": prompt("Enter Age")
      }
    )
  }
}

function update() {
  let ind = Number(prompt("Enter the ID"))
  name = prompt("Enter Name")
  age = prompt("Enter Age")
  let confirmation = confirm("Are you sure ?") // confirm prompt
  if (confirmation == true) {
    details.splice(ind - 1, 1, obj = {
      "ID": ind,
      "Name": name,
      "Age": age
    }
    )
    // splice(index, (0/1), data)
    // index is the location
    // 0 is for not to override just shift by one index(old element will be not deleted and on next spot new element is entered)
    // 1 is for override(old element will be deleted and new element will be place on same index)
    console.log("Element is Updated")
  } else {
    console.log("Element is not Updated")
  }
}

function del() {
  let ind = Number(prompt("Enter the ID"))
  let confirmation = confirm("Are you sure ?")
  if (confirmation == true) {
    delete details[ind - 1];
    console.log("Element is Deleted")
  } else {
    console.log("Element is not Deleted")
  }
}

function show() {
  console.log(details)
}
