console.log("TASK 1");
class Account {
  constructor({ email, login }) {
    this.email = email;
    this.login = login;
  }
  getInfo() {
    return `Login: ${this.login}, Email: ${this.email}`;
  }
}
console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

console.log(mango.getInfo()); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

console.log(poly.getInfo()); // Login: Poly, Email: poly@mail.com