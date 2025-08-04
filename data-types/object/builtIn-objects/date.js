// Date adalah sebuah object yang merepresentasikan epoch sejak malam january 1 1970

let opsi = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "Asia/Jakarta",
};

let date = new Date(8.64e15 + 1); // jika membuat object Date dengan nilai timestamp yang sedikit melebihi batas yang diizinkan maka hasilnya akan menjadi "Invalid Date"
console.log(date);

let newDate = new Date(8.64e15);
console.log(newDate.toLocaleDateString("id-ID", opsi));
let dateEpoch = Date.now();
let currentDate = new Date(dateEpoch);
console.log(currentDate.toLocaleDateString("id-ID"));
