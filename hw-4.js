//1
function checkFields() {
  const fieldValueOne = document.getElementById("text-one").value;
  const fieldValueTwo = document.getElementById("text-two").value;
  if (fieldValueOne !== "" && fieldValueTwo !== "") {
    alert("Обидва поля заповнені");
  } else {
    alert("Не всі поля заповнені");
  }
}

//2
function checkFieldsTwo() {
  const fieldNumberOne = parseFloat(
    document.getElementById("number-one").value
  );
  const fieldNumberTwo = parseFloat(
    document.getElementById("number-two").value
  );
  if (fieldNumberOne + fieldNumberTwo > 10) {
    alert("Сума більша за 10");
  } else {
    alert("Сума менша або дорівнює 10");
  }
}

//3
function checkFieldsJs() {
  const fieldValueText = document.getElementById("text-check").value;
  if (fieldValueText.includes("JavaScript")) {
    alert("Текст містить слово JavaScript");
  } else {
    alert("Текст не містить слово JavaScript");
  }
}

//4
function checkNumber() {
  const fieldValueNumber = document.getElementById("number-four").value;
  if (fieldValueNumber > 10 && fieldValueNumber < 20) {
    alert("Число входить в діапазон від 10 до 20");
  } else {
    alert("Число не входить в діапазон від 10 до 20");
  }
}

//5
function checkForm() {
  const fieldValueName = document.getElementById("full-name").value;
  const fieldValueEmail = document.getElementById("email").value;
  const fieldValuePassword = document.getElementById("password").value;
  if (
    fieldValueName.length > 3 &&
    fieldValueEmail.includes("@") &&
    fieldValueEmail.includes(".") &&
    fieldValuePassword.length > 6
  ) {
      window.location.href = "../another.html";
    //   alert('Я не знаю, чого вас не перекинуло на іншу сторінку, але та фігня не працюєю. Можливо це через те, що html файл не має хостингу :))')
  } else {
    alert("False");
  }
}
