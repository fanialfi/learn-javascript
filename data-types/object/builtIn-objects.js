// built-in object Number
let num = Number(354);
let numNull = Number(null); // akan di convert menjadi 0
let numUndefined = Number(undefined);

if (Number.isNaN(numUndefined)) {
  console.log(`numUndefined is not number`);
}

console.log(num);
console.log(Number.parseFloat("354"));

console.log(Number.parseFloat(10).toFixed(2));

// built-in object math
// built-in Math bekerja dengan type Number dan tidak dapat berfungsi dengan type BigInt
// Math tidak bisa digunakan dengan menggunakan `new` operator

// let math = new Math(); // TypeError: Math is not a constructor

console.log(Math.LN10);
