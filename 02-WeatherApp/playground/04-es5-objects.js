// object property shorthand

const name = "andrew";
const userAge = 27;

const user = {
  name, // = name: name
  age: userAge,
  location: "philly"
};

console.log(user);

// Object destructuring
// when you have an object and want to access its information

const product = {
  label: "red jacket",
  price: 3,
  stock: 200,
  salePrice: undefined
};

//const label = product.label
//rating default value will be 5
const { label, stock, rating = 5, nonExist } = product;
console.log(label + "    " + stock + "  " + rating + "  " + nonExist);

//usage in a function:
const transaction = (type, { lable, stock, rating = 5 }) => {
  console.log(type + "    " + lable + ":" + stock + ":" + rating);
};

transaction("order", product);
