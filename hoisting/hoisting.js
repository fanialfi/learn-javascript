// execution context
// di JavaScript execution context terdiri dari 2 tahap, yaitu tahap creation dan taham execution
// tahap creation yaitu JavaScript akan membaca sebuah file js, apakah ada sebuah statement yang membuat sebuah variabel dan function atau tidak
// jika ada maka akan dibuat dulu
// variabel akan dibuat dengan nama variabel itu sendiri dan diisi nilai default _undefined_
// sedangkan function akan diisi dengan isi dari function itu
// pada tahap ini setelah variabel dan function global di create, maka akan dinaikkan / istilahnya hoisting

console.log(name); // undefined karena di face creation, file ini mengandung variabel dengan nama _name_ dan diisi nilai default _undefined_ dan dihoisting ke paling atas
var name = "fanialfi";
console.log(name); // "fanialfi" karena variabel _name_ sudah diganti isinya

// di balik layar
/*
  var name = undefined
  console.log(name)
  name = "fanialfi"
  console.log(name)
*/

console.log(sayHello);
console.log(sayHello.toString()); // .toString buat nampilin isi dari function, karena kalau di nodejs, nggak bisa nampilin
var nama = "fanialfi";
var umur = 19;
function sayHello() {
  console.log(`hello, nama saya ${nama} umur saya ${umur}`);
}

console.log(NaMe);
let NaMe = "fanialfi";
console.log(NaMe);

// NOTE
/*
 * semua function di javascript bisa di konversi ke string dengan menggunakan method function.toString()
 * hasilnya adalah source code dari function itu sendiri
 *
 * _var_ declaration mempunyai behavior "variabel itu bisa diakses sebelum baris deklarasinya variabel itu ditulis di source code" ketika di hoisting
 *
 * keyword _let_ dan _const_ juga akan dihoist, tapi tidak akan diberikan nilai default _undefined_ kayak _var_
 * variabel dengan keyword let dan const akan dimasukkan ke TDZ (Temporal Dead Zone) dan baru bisa diakses / dikeluarkan dari TDZ sampai baris deklarasinya di eksekusi
 */
