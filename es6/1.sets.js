let set = new Set([1, 4, 5, 2, 3]);
let map = new Map([[1, "a"], [4, "d"], [5, "e"], [2, "b"], [3, "c"]]);

let weakSet = new WeakSet();
weakSet.add({ f: 1 });

let weakMap = new WeakMap();
weakMap.set({}, { f: 2 });

try {
  weakMap.set(1, { f: 1 });
} catch {
  console.log("can't use primitive types for keys in WeakMap");
}

console.log("items in set = ", set.size);
console.log("items in map = ", map.size);









// compare with POJO map
let obj = {
  1: "a",
  4: "d",
  5: "e",
  2: "b",
  3: "c"
};

console.log("ITEMS FROM MAP");
for (let item of map) {
  console.log(item);
}
console.log("ITEMS FROM OBJ");
for (let item in obj) {
  console.log(item, "=>", obj[item]);
}
