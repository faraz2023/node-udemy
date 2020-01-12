//const square = function(x) {
//  return x * x;
//};

//const square = x => {
//  return x * x;
//};

const square = x => x * x;

console.log(square(10));

const event = {
  name: "Birthday Party",
  guestList: ["faraz", "niloofar", "sarina"],
  printGuestList() {
    console.log("Guset list for " + this.name);

    this.guestList.forEach(guest => console.log(guest));
  },
  extra: "none"
};

event.printGuestList();
