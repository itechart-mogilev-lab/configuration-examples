// 1. simple array iteration
let array = [1, 2, 3, 4];

console.log("===ARRAY".padEnd(15, "="));
for (let item of array) {
  console.log(item);
}





















// 2. iterate generator
function* GetValues() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

console.log("===GENERATOR".padEnd(15, "="));
for (let item of GetValues()) {
  console.log(item);
}














// 3. Custom iterator
class CustomValuesProducer {
  constructor(startValue) {
    this.startValue = startValue;
  }

  *[Symbol.iterator]() {
    yield this.startValue++;
    yield this.startValue++;
    yield this.startValue++;
    yield this.startValue++;
  }
}

console.log("===SYMBOL".padEnd(15, "="));
for (let item of new CustomValuesProducer(1)) {
  console.log(item);
}








// 4. what is iterator?
let anotherArray = [1, 2, 3, 4];

console.log("===ITERATOR".padEnd(15, "="));
let iterator = anotherArray[Symbol.iterator]();

while (true) {
  let iteration = iterator.next();
  console.log(iteration);
  if (iteration.done) break;

  // do something with iteration.value
}
