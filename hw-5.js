//1
function checkOptions() {
  const select = document.getElementById("drinks");
  const selectedValue = select.options[select.selectedIndex].value;
  if (selectedValue == "coffee") {
    alert("Ви вибрали каву");
  } else if (selectedValue == "tea") {
    alert("Ви вибрали чай");
  } else if (selectedValue == "juice") {
    alert("Ви вибрали сік");
  }
}

//2
function checkDay() {
  const fieldDay = document.getElementById("text-day").value;
  switch (fieldDay) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thurthday":
    case "Friday":
      alert("Робочий день");
      break;
    case "Saturday":
    case "Sunday":
      alert("Вихідний");
      break;
    default:
      alert("Неправильно введений день");
  }
}

//3
function checkMonth() {
  const fieldMonth = document.getElementById("month").value;
  if ((fieldMonth < 3 && fieldMonth > 0) || fieldMonth == 12) {
    alert("Winter");
  } else if (fieldMonth > 2 && fieldMonth < 6) {
    alert("Spring");
  } else if (fieldMonth > 5 && fieldMonth < 9) {
    alert("Summer");
  } else if (fieldMonth > 8 && fieldMonth < 12) {
    alert("Autome");
  } else {
    alert("such a month does not exist");
  }
}

//4
function checkDaysInMonth() {
  const fieldMonthsDays = document.getElementById("months-days").value;
  if (fieldMonthsDays == 2) {
    alert("28 or 29");
  } else if (
    fieldMonthsDays == 1 ||
    fieldMonthsDays == 3 ||
    fieldMonthsDays == 5 ||
    fieldMonthsDays == 7 ||
    fieldMonthsDays == 8 ||
    fieldMonthsDays == 10 ||
    fieldMonthsDays == 12
  ) {
    alert("31");
  } else {
    alert("30");
  }
}

//5
function checkColor() {
  const fieldColor = document.getElementById("color").value;
  switch (fieldColor) {
    case "червоний":
      alert("стоп");
      break;
    case "жовтий":
      alert("чекати");
      break;
    case "зелений":
      alert("йти");
      break;
    default:
      alert("Введіть один з кольорів світлофора з маленької букви");
  }
}

//6
function checkMath() {
  const selectMath = document.getElementById("math").value;
  const num1 = parseFloat(document.getElementById("number-one").value);
  const num2 = parseFloat(document.getElementById("number-two").value);
  let result;
  switch (selectMath) {
    case "+":
      alert(num1 + num2);
      break;
    case "-":
      alert(num1 - num2);
      break;
    case "*":
      alert(num1 * num2);
      break;
    case "/":
      if (num2 !== 0) {
        alert(num1 / num2);
      } else {
        alert("Invalid operation");
      }
      break;
    default:
      alert("Invalid operation");
  }
}
