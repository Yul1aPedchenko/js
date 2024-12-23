const taskForm = document.getElementById("taskForm");
const newTaskInput = document.getElementById("newTask");
const taskList = document.getElementById("taskList");

document.addEventListener("DOMContentLoaded", loadTasks);

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskText = newTaskInput.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    saveTasks();
    newTaskInput.value = "";
  }
});

taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteTask")) {
    e.target.parentElement.remove();
    saveTasks();
  } else if (e.target.classList.contains("completeTask")) {
    const li = e.target.parentElement;
    li.classList.toggle("completed");
    saveTasks();
  }
});

function addTask(taskText, isCompleted = false) {
  const li = document.createElement("li");
  li.classList.toggle("completed", isCompleted);

  li.innerHTML = `
        <input type="checkbox" class="completeTask" ${
          isCompleted ? "checked" : ""
        }>
        <span>${taskText}</span>
        <button class="deleteTask">Del</button>
    `;

  taskList.appendChild(li);
}

function saveTasks() {
  const tasks = [];
  taskList.querySelectorAll("li").forEach((li) => {
    const taskText = li.querySelector("span").textContent;
    const isCompleted = li.classList.contains("completed");
    tasks.push({ text: taskText, completed: isCompleted });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => addTask(task.text, task.completed));
}

// 2
const loginInput = document.getElementById("login");
const passwordInput = document.getElementById("password");
const saveBtn = document.getElementById("saveBtn");
const loginBtn = document.getElementById("loginBtn");

window.addEventListener("load", () => {
  const savedLogin = localStorage.getItem("login");
  const savedPassword = localStorage.getItem("password");

  if (savedLogin && savedPassword) {
    loginInput.value = savedLogin;
    passwordInput.value = savedPassword;
  }
});

saveBtn.addEventListener("click", () => {
  const login = loginInput.value;
  const password = passwordInput.value;
  if (login && password) {
    localStorage.setItem("login", login);
    localStorage.setItem("password", password);
    alert("Данні успішно збереженні");
  } else {
    alert("Заповніть всі поля");
  }
});

loginBtn.addEventListener("click", () => {
  const savedLogin = localStorage.getItem("login");
  const savedPassword = localStorage.getItem("password");
  const login = loginInput.value;
  const password = passwordInput.value;
  if (login === savedLogin && password === savedPassword) {
    alert("Такий користувач є в системі");
  } else {
    alert("Перевірте данні, неправильний логін або пароль");
  }
});

// 3

const bookmarkNameInput = document.getElementById("bookmarkName");
const bookmarkUrlInput = document.getElementById("bookmarkUrl");
const addBookmarkBtn = document.getElementById("addBookmarkBtn");
const bookmarksList = document.getElementById("bookmarksList");

let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

function renderBookmarks() {
  bookmarksList.innerHTML = "";
  bookmarks.forEach((bookmark, index) => {
    const bookmarkItem = document.createElement("div");
    bookmarkItem.className = "bookmark-item";

    bookmarkItem.innerHTML = `
                    <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
                    <div>
                        <button class="edit-btn" onclick="editBookmark(${index})">Редагувати</button>
                        <button class="delete-btn" onclick="deleteBookmark(${index})">Видалити</button>
                    </div>
                `;

    bookmarksList.appendChild(bookmarkItem);
  });
}

addBookmarkBtn.addEventListener("click", () => {
  const name = bookmarkNameInput.value.trim();
  const url = bookmarkUrlInput.value.trim();

  if (name && url) {
    bookmarks.push({ name, url });
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    renderBookmarks();
    bookmarkNameInput.value = "";
    bookmarkUrlInput.value = "";
  } else {
    alert("Будь ласка, введіть назву та URL закладки.");
  }
});

function editBookmark(index) {
  const bookmark = bookmarks[index];
  const newName = prompt("Введіть нову назву:", bookmark.name);
  const newUrl = prompt("Введіть новий URL:", bookmark.url);

  if (newName && newUrl) {
    bookmarks[index] = { name: newName, url: newUrl };
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    renderBookmarks();
  }
}

function deleteBookmark(index) {
  if (confirm("Ви впевнені, що хочете видалити цю закладку?")) {
    bookmarks.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    renderBookmarks();
  }
}

renderBookmarks();

// 4

const userNameInput = document.getElementById("userName");
const userSurnameInput = document.getElementById("userSurname");
const userPhoneInput = document.getElementById("userPhone");
const userEmailInput = document.getElementById("userEmail");
const addUserBtn = document.getElementById("addUserBtn");
const usersList = document.getElementById("usersList");

let users = JSON.parse(localStorage.getItem("users")) || [];

function renderUsers() {
  usersList.innerHTML = "";
  users.forEach((user, index) => {
    const userItem = document.createElement("div");
    userItem.className = "bookmark-item";

    userItem.innerHTML = `
                    <h2 class="user-name">${user.name} ${user.surname}</h2>
                    <a href="#" class="user-phone">${user.phone}</a>
                    <a href="#" class="user-email">${user.email}</a>
                    <div>
                        <button class="edit-btn" onclick="editUser(${index})">Редагувати</button>
                        <button class="delete-btn" onclick="deleteUser(${index})">Видалити</button>
                    </div>
                `;

    usersList.appendChild(userItem);
  });
}

addUserBtn.addEventListener("click", () => {
  const name = userNameInput.value.trim();
  const surname = userSurnameInput.value.trim();
  const phone = userPhoneInput.value.trim();
  const email = userEmailInput.value.trim();

  if (name && phone) {
    users.push({ name, surname, phone, email });
    localStorage.setItem("users", JSON.stringify(users));
    renderUsers();
    userNameInput.value = "";
      userSurnameInput.value = "";
      userPhoneInput.value = '';
      userEmailInput.value = '';
  } else {
    alert("Спробуйте знову");
  }
});

function editUser(index) {
  const user = users[index];
  const newName = prompt("Введіть нове шьʼя:", user.name);
  const newSurname = prompt("Введіть нове прізвище (необовʼязково):", user.surname);
    const newPhone = prompt(
      "Введіть новий номер телефону:",
      user.phone
    );
    const newEmail = prompt("Введіть новий email:", user.email);
  if (newName && newPhone) {
    users[index] = { name: newName, surname: newSurname, phone: newPhone, email: newEmail };
    localStorage.setItem("users", JSON.stringify(users));
    renderUsers();
  }
}

function deleteUser(index) {
  if (confirm("Ви впевнені, що хочете видалити контакт?")) {
    users.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(users));
    renderUsers();
  }
}

renderUsers();