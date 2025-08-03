// BinInt adalah sebuah object built-in javascript, ini dapat menampung nilai angka yang sudah melebihi batas tipe data number biasa

const alsoHuge = BigInt(9007199254740991);
console.log(alsoHuge);
console.log(typeof alsoHuge); // untuk cek tipe data sebuah variabel menggunakan keyword typeof

const a = Number.MAX_VALUE;
console.log(`max value integer = ${a}`);
console.log(`type data dari variabel a = ${typeof a}`);

const b = BigInt(1);
console.log(`type data dari variabel b = ${typeof b}`);

const c = Number.MAX_VALUE + 1;
console.log(`max value integer = ${c}`);
console.log(`type data dari variabel c = ${typeof c}`);

const d = BigInt(Number.MAX_VALUE);
console.log(`bigint = ${d}`);
console.log(`type data dari variabel d = ${typeof d}`);

const e = BigInt(100);
console.log(`bigint = ${e}`);

// untuk pembuatan tipe data bigInt harus menggunakan keyword BigInt() kalau tidak maka akan menjadi tipe data number biasa
