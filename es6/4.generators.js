function* SimpleFibonacciGenerator(num) {
  if (num > 0) yield 1;
  if (num > 1) yield 1;

  let a = 1;
  let b = 1;

  for (let i = 3; i <= num; i++) {
    let c = a + b;

    // returns completes generator
    if (c > 6) return;

    a = b;
    b = c;
    yield c;
  }
}

let iterator = SimpleFibonacciGenerator(4);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


// let gen = SimpleFibonacciGenerator(4);

// while(true) {
//   let iteration = gen.next();
//   if (iteration.done) break;


//   let value = iteration.value;
// }




// Generator returns iterable object
console.log("===FOR".padEnd(15, "="));
for (let item of SimpleFibonacciGenerator(7)) {
  console.log(item);
}





















// Nested generators
function* NestedGenerator() {
  yield "a";
  yield "b";
  yield* SimpleFibonacciGenerator(4);
  yield "c";
}
console.log("===NESTED".padEnd(15, "="));
for (let item of NestedGenerator()) {
  console.log(item);
}
