var a = 10;
let b = 20;
const c = 30;

// block scope
(() => {
  let a = 40;
  console.log(a); // akan mengakses variabel a yang ada di blok function
})();

(() => {
  console.log(b); // akan mengecek dulu di scope function ada variabel b atau nggak, jika enggak makaa akan naik 1 tingkat
})();
console.log(c);

const fanialfi = "fanialfi";
console.log(fanialfi);
fanialfi = "hhh"; // error
console.log(fanialfi);
