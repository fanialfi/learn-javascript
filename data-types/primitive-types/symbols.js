// symbol adalah sebuah type data immutable primitive yang unik yang tidak dapat diubah

// create new symbol
let s = Symbol("fani");
console.log(s);

// Symbol() function akan membuat unique value setiap kali dibuat
let ss = Symbol("fani");
console.log(s === ss);
