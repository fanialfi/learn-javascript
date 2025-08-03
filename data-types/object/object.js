// object adalah sebuah struktur tipe data yang mempunyai key value yang saling berhubungan

// contoh pembuatan empty object
let userOne = new Object();
let userTwo = {};

console.log(userOne);
console.log(userTwo);

// membuat object langsung beserta key-valuenya

let user = {
  name: "fanialfi",
  email: "fanialfirdaus@gmail.com",
  age: 19,
};

console.log(user);
// pengaksesan properti valuenya dapat dilakukan dengan menggunakan dot notation
console.log(`hello, my name is : ${user.name}`);

user.isAdmin = true;
console.log(user);

// untuk menghapus properti dapat dengan menggunakan delete operator
delete user.age;
console.log(user);

function createUser(name, age, email) {
  return {
    name,
    email,
    age,
  };
}

let newUser = createUser("alpi", 19, "fanialfi.space");
console.log(newUser);

// mengecek apakah sebuah properti ada
console.log("name" in newUser);
