// comparison operators digunakan untuk operasi perbandingan / statement logic
// untuk membandingkan / menentukan apakah variabel / value antara yang lain merupakan equal atau tidak

// Equality operator (==)
// mengecek apakah kedua operand adalah sama, operasi ini menghasilkan nilai boolean
console.log("10" == 10); // hanya membandingkan nilainya saja
console.log(`undefined == undefined : ${undefined == undefined}`);
console.log(`undefined == null : ${undefined == null}`);
console.log(`undefined == NaN : ${undefined == NaN}`);

// Inequality operator (!=)
// mengecek apakah kedua operand adalah tidak sama, operasi ini menghasilkan nilai boolean dan hanya membandingkan nilainya saja
console.log("10" != 10); // false
console.log(false != "hai"); // true
console.log(`undefined != undefined : ${undefined != undefined}`);
console.log(`undefined != null : ${undefined != null}`);
console.log(`undefined != NaN : ${undefined != NaN}`);

// Strict Equality operator (===)
// mengecek apakah kedua operand adalah sama, operasi ini menghasilkan nilai boolean, dan operasi ini juga membandingkan tipe data operand
console.log("10" === 10); // false
console.log(10 === 10); // true
console.log(1 === 10); // false
console.log(`undefined === undefined : ${undefined === undefined}`);
console.log(`undefined === null : ${undefined === null}`);
console.log(`null === null : ${null === null}`);
console.log(`undefined === NaN : ${undefined === NaN}`);
console.log(`NaN === NaN : ${NaN === NaN}`);

// Strict Inequality operator (!==)
// mengecek apakah kedua operand adalah beda, operasi ini menghasilkan nilai boolean, dan operasi ini juga membandingkan tipe data operand
console.log("10" !== 10); // true
console.log(10 !== 11); // true
console.log(`undefined !== undefined : ${undefined !== undefined}`);
console.log(`undefined !== null : ${undefined !== null}`);
console.log(`undefined !== NaN : ${undefined !== NaN}`);
// jika salah satu operand baik perbandingan nilai menghasilkan true / kedua operand nilainya berbeda maka menghasilkan true
// jika salah satu operand tipe datanya berbeda maka akan menghasilkan true
// dengan kata lain nilai dan tipe datanya harus sama untuk menghasilkan false

// Object.is()
// menentukan apakah 2 value adalah sama
// gunakan Object.is() ketika ingin menangani NaN atau membedakan antara +0 dan -0
console.log(`\nObject.is(5, 5) : ${Object.is(5, 5)}`); // true
console.log(`Object.is(5, "5") : ${Object.is(5, "5")}`); // false
console.log(`Object.is(null, null) : ${Object.is(null, null)}`); // true
console.log(`Object.is(NaN, NaN) : ${Object.is(NaN, NaN)}`); // true
console.log(`Object.is(+0, -0) : ${Object.is(+0, -0)}`); // false
