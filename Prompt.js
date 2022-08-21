let name = prompt("what is your name ?", "User")
console.log("Hii " + name)

let status = confirm("Do you want to Delete this status")

if (status == true) {
  alert("Status is Deleted")
} else {
  alert("Status is Not Deleted")
}
