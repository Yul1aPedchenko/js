// container.addEventListener("mousemove", _.debounce((event) => {
//     moveBox(event);
//   }, 100));
const input = document.getElementById("inputEl");
const listBody = document.getElementById("list");
input.addEventListener(
  "input",
  _.debounce((e) => {
    listBody.innerHTML = "";
    fetchCountries(e.target.value)
      .then((countries) => renderCountries(countries))
      .catch((error) => console.log(error));
  }, 500)
);

function fetchCountries(userText) {
  return fetch(`https://restcountries.com/v3.1/name/${userText}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}
function renderCountries(arr) {
  if (arr.length === 1) {
    country = arr[0];
    markup = `<li class="only-country">
            <p class="country-name">${country.name.common}</p>
              <div class="country-wrap">
              <div class="info-wrap">
                  <p class="capital">Capital: ${country.capital}</p>
                  <p class="population">Population: ${country.population}</p>
                  <ul class="languages">
                  </ul>
              </div>
          <div class="flag">
              <p class="flag-text">${country.flag}</p>
          </div>
    </div>
        </li>`;
    listBody.insertAdjacentHTML("beforeend", markup);
    renderLanguages(Object.values(country.languages));
  } else {
    markup = [];
    console.log(arr);
    for (let i = 0; i < Math.min(arr.length, 10); i++) {
      console.log(arr[i]);
      markup.push(`<li class="country">
            <p class="country-name">${arr[i].name.common}</p>
            </li>`);
    }
    listBody.insertAdjacentHTML("beforeend", markup.join(""));
  }
}
function renderLanguages(arr) {
  markup = arr.map((lang) => {
    return `<li class="lang">
            <p class="country-lang">${lang}</p>
        </li>`;
  });
  document
    .querySelector(".languages")
    .insertAdjacentHTML("beforeend", markup.join(""));
}
