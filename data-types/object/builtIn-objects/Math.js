function difference(a, b) {
  return Math.abs(a - b);
}

console.log(difference(3, 5));
console.log(Math.abs(444.4));

// membulatkan angka ke atas ke bilangan terdekat
console.log(Math.ceil(9.5));
console.log(Math.ceil(9.3));
console.log(Math.ceil(9.1));
console.log(Math.ceil(9.6));

// membulatkan angka ke bawah ke bilangan terdekat
console.log(Math.floor(9.9));

console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

console.log(Math.sqrt(71)); // menghitung akar kuadrat
console.log(Math.pow(2, 2)); // menghitung pangkat

console.log(Math.floor(Math.random() * 10) + 1);

console.log(Math.trunc(9.9999)); // menghilangkan bilangan desimalnya / menghapus angka dibelakang tanda titik
// menambil bilangan bulatnya saja
