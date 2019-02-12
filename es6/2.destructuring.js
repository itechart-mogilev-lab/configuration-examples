let order = {
  id: 1,
  description: "some order",
  customer: {
    id: 34,
    name: "Ruslan"
  },
  lines: [{ product: 234 }, { product: 345 }]
};

// let id = order.id;
// let customerName = order.customer.name;

let {
  id,
  customer: { name: customerName }
} = order;

let {
  lines: [, { product }] // skip elements in array
} = order;

console.log(customerName);
console.log(product);

function SomeFunctionThatExpectsObjectWithID({ id }) {}
function SomeFunctionThatExpectsObjectWithID(order) {
  //
  //

  let id = order.id;
}

// Spread and Rest operators
let a = [2, 3, 4];
let b = [1, ...a];

let orderCopy = { ...order, id: 2 };
// let anotherCopy = Object.assign({}, order, {id: 2})

// let deepCopy = { ...order, customer: { ...order.customer }, lines: [...order.lines] };
let deepCopy = JSON.parse(JSON.stringify(order))




let { lines, ...restOrderProps } = order;














// :)
let m = 5;
let n = 4;
[m, n] = [n, m];
console.log("m", m, "n", n);
