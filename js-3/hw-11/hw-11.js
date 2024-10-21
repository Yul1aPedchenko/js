//1
const bankAccount = {
  ownerName: "Yul",
  accountNumber: 12345,
  balance: 2000,
  deposit(amount) {
    this.balance += amount;
    updateBalance();
    alert("Новий баланс: " + this.balance);
  },
  withdraw(amount) {
    if (amount > this.balance) {
      alert("Недостатньо коштів");
      return;
    } else {
      this.balance -= amount;
      updateBalance();
      alert("Новий баланс: " + this.balance);
    }
  },
  displayInfo() {
    document.getElementById("balance").innerText = `Баланс: ${this.balance}`;
  },
};
bankAccount.displayInfo();
function updateBalance() {
  document.getElementById("balance").textContent = bankAccount.balance;
}
function deposit() {
  let amount = prompt("Введіть суму поповнення:");
  if (!isNaN(amount) && amount > 0) {
    bankAccount.deposit(parseFloat(amount));
  } else {
    alert("Неправильний формат суми.");
  }
}
function withdraw() {
  let amount = prompt("Введіть суму зняття:");
  if (!isNaN(amount) && amount > 0) {
    bankAccount.withdraw(parseFloat(amount));
  } else {
    alert("Хибний формат суми");
  }
}

//2
function checkTemp() {
  const fieldTemp = document.getElementById("temperature").value;
  const weather = {
    temperature: fieldTemp,
    humidity: 0,
    windSpeed: 0,
  };
  const isCold = (temperature) => {
    return temperature < 0;
  };
  if (isCold(weather.temperature)) {
    console.log("Температура нище нуля");
  } else {
    console.log("Температура вище нуля або 0");
  }
}
//3
function checkInfo() {
  const fieldEmail = document.getElementById("email").value;
  const fieldPassword = document.getElementById("password").value;
  const user = {
    name: "user",
    email: fieldEmail,
    password: fieldPassword,
  };
  const check = function (email, password) {
    if (email.includes("@") && password.length >= 6) {
      console.log(true);
    } else {
      console.log(false);
    }
  };
  check(user.email, user.password);
}

function checkSimilarity() {
  const fieldEmail = document.getElementById("email2").value;
  const fieldPassword = document.getElementById("password2").value;
  const user = {
    name: "user",
    email: "ex@gmail.com",
    password: "ex12345",
  };
  if (user.email === fieldEmail && user.password === fieldPassword) {
    console.log(true);
  } else {
    console.log(false);
  }
}

//4
const movie = {
  title: "Титанік",
  director: "Джеймс Кемерон",
  year: 1997,
  rating: 8,
  isRated() {
    return this.rating > 8;
  },
  displayInfo() {
    document.getElementById("title").innerText = `Title: ${this.title}`;
    document.getElementById(
      "director"
    ).innerText = `Director: ${this.director}`;
    document.getElementById("year").innerText = `Year: ${this.year}`;
    document.getElementById("rating").innerText = `Rating: ${this.rating}`;
  },
};
function updateMovie() {
  const newRating = parseFloat(document.getElementById("changeRating").value);
  if (!isNaN(newRating) && newRating > 8) {
    movie.rating = newRating;
    movie.displayInfo();
    const title = document.getElementById("title");
    title.style.color = "green";
  } else if (isNaN(newRating)) {
    alert('Будь ласка, введіть число')
  } else {
    movie.rating = newRating;
    movie.displayInfo();
  }
}
movie.displayInfo();