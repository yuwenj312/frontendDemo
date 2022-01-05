//Q1
const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
//implement a function for generating a new array which doubles the quantity and price in each object.
function doubles(itemsObject) {
  const res = [];
  for (let i = 0; i < itemsObject.length; i++) {
    res.push({
      quantity: itemsObject[i].quantity * 2,
      price: itemsObject[i].price * 2,
    });
  }
  return res;
}
console.log(doubles(itemsObject));
//implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
function filters(itemsObject) {
  const res = [];
  for (let i = 0; i < itemsObject.length; i++) {
    if (itemsObject[i].quantity > 2 && itemsObject[i].price > 300) {
      res.push({
        quantity: itemsObject[i].quantity,
        price: itemsObject[i].price,
      });
    }
  }
  return res;
}
console.log(filters(itemsObject));
// //implement a function to calculate the total value of the items.
function add(itemsObject) {
  let sum = 0;
  for (let i = 0; i < itemsObject.length; i++) {
    sum += itemsObject[i].price;
  }
  return sum;
}
console.log(add(itemsObject));

//Q2: implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";
function convert(string) {
  return string
    .replace(/[^a-zA-Z]/g, "")
    .trim()
    .toLowerCase();
}
console.log(convert(string));
