for (let i = 1; i < 11; i++) {
  console.log(i)
}

let name = {
  naam: "ayush",
  vai: 19
};
for (let i in name) { // gives index
  console.log(name[i])
}

let friend = ["Ayush", "Hitesh"];
for (let i of friend) { // gives element
  console.log(i)
}
