// string conversion
// merubah tipe data menjadi string
console.log(typeof String(null), String(null), "\n");
console.log(typeof String(undefined), String(undefined), "\n");
console.log(typeof String(100), String(100), "\n");
console.log(typeof String(NaN), String(NaN), "\n");
console.log(typeof String(true), String(true), "\n");

// numerical conversion
// dalam function mathematic dan expression mathematic conversion numeric terjadi secara otomatis
console.log("3" / "3");
// tapi khusus untuk operator + maka akan menggabungkan keduannya
console.log("3" + "3");
console.log("3" - undefined); // operasi matematika yang salah satu bilangannya bukan berupa number / secara otomatis tidak bisa diconvert ke tipe data number maka hasil operasinya akan berupa NaN

// untuk secara eksplisit mengconvert sebuah value ke type data number maka juga bisa menggunakan function Number()
console.log(typeof Number(undefined), Number(undefined), "\n"); // NaN itu juga merupakan tipe data number
console.log(typeof Number("10hai"), Number("10hai"), "\n");
console.log(typeof Number.parseInt("10hai"), Number.parseInt("10hai"), "\n");
console.log(typeof Number.parseInt("hai10"), Number.parseInt("hai10"), "\n");

// Boolean conversion
// nilai yang secara intuitif kosong, seperti 0, empty string, null, undefined, dan NaN akan menjadi false,
// selain itu akan menjadi true
console.log(typeof Boolean(""), Boolean(""), "\n");
