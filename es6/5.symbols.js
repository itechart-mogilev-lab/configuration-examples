console.log(Symbol("foo") === Symbol("foo"));

console.log(Symbol('4545'))


let metadata = Symbol.for('my symbol');
console.log(Symbol.keyFor(metadata));


let data = { id: 1 };
data[metadata] = { privateInfo: {} };

console.log(data);

console.log("ENUMERATE PROPERTIES");
for (let prop in data) {
  console.log(prop, data[prop]);
}
 
let symbols = Object.getOwnPropertySymbols(data);


if (data[Symbol.for('my symbol')]) {
  console.log('yeeehooo')
}









console.log("STANDARD SYMBOLS");



let a = [1, 2, 3, 4]

let arrayIterator = a[Symbol.iterator]();
console.log(arrayIterator.next())
console.log(arrayIterator.next())
console.log(arrayIterator.next())
console.log(arrayIterator.next())
console.log(arrayIterator.next())



// class Collection {
//   *[Symbol.iterator]() {
//     var i = 0;
//     while (this[i] !== undefined) {
//       yield this[i];
//       ++i;
//     }
//   }
// }
// var myCollection = new Collection();
// myCollection[0] = 1;
// myCollection[1] = 2;
// for (var value of myCollection) {
//   console.log(value); // 1, then 2
// }











// class MyReplacer {
//   constructor(value) {
//     this.value = value;
//   }
//   [Symbol.replace](string, replacer) {
//     // var index = string.indexOf(this.value);
//     // if (index === -1) {
//     //   return string;
//     // }
//     // if (typeof replacer === "function") {
//     //   replacer = replacer.call(undefined, this.value, string);
//     // }
//     // return `${string.slice(0, index)}${replacer}${string.slice(
//     //   index + this.value.length
//     // )}`;


//     return 'hahaha'
//   }
// }

// var fooReplaced = "foobar".replace(new MyReplacer("foo"), "baz");
// var barMatcher = "foobar".replace(new MyReplacer("bar"), function() {
//   return "baz";
// });
// assert.equal(fooReplaced, "bazbar");
// assert.equal(barReplaced, "foobaz");









// class AnswerToLifeAndUniverseAndEverything {
//     [Symbol.toPrimitive](hint) {
//         if (hint === 'string') {
//             return 'Like, 42, man';
//         } else if (hint === 'number') {
//             return 42;
//         } else if (hint === 'boolean') {
//             return false;
//         } else {
//             // when pushed, most classes (except Date)
//             // default to returning a number primitive
//             return 42;
//         }
//     }
// }

// var answer = new AnswerToLifeAndUniverseAndEverything();
// +answer === 42;
// Number(answer) === 42;
// ''+answer === 'Like, 42, man';
// String(answer) === 'Like, 42, man';

// let boolResult = Boolean(answer);












class Collection {
  get type() {
    return 'MyCollection'
  }


    get [Symbol.toStringTag]() {
      return 'MyCollection';
    }
  
  }
  var x = new Collection();
console.log(x.type);

  Object.prototype.toString.call(x) === '[object MyCollection]'