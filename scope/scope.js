// scope
// mereferensi bagaimana sebuah javascript menggunakan sebuah variable setelah dideklarasikan
// 3 tipe scope =
// - global scope
// - function scope
// - block scope

// global scope
// semua variabel yang didefinisikan diluar function dan diluar curly braces '{}' disebut global scope
// dan dapat diakses dari mana saja dalam kode / file javasctipt yang sama
let name = "fani alfirdaus";
(function () {
  console.log(`Hello my name is "${name}"`);
})();

{
  console.log(name);
}

// function scope
// sebuah variabel yang didefinisikan didalam sebuah function hanya bisa digunakan didalam function itu sendiri
function loggingUser() {
  let user = "fanialfi";
  console.log(`user : ${user}`);
}
loggingUser();
// console.log(user); // user is not defined

// block scope
// sebuah kode javascript apa saja yang dibungus menggunakan "{}" disebut block scope
// variable yang didefinisikan didalam block scope tidak bisa diakses diluar block
{
  const umur = 19;
  console.log(`hallo nama saya '${name}' dan umur saya '${umur}'`);
}
// console.log(`hallo nama saya '${name}' dan umur saya '${umur}'`); // umur is not defined
