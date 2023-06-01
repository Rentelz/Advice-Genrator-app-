const genrator = document.querySelector(".genratorBtn");
const adviceNumber = document.querySelector(".adviceNumber");
const adviceContent = document.querySelector(".advice-content");

genrator.addEventListener("click", function () {
  console.log("click");

  // Show the loading icon

  const cache = Date.now();
  const url = "https://api.adviceslip.com/advice?_=" + cache; // Append cache-buster parameter

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.slip.id);
      console.log(data.slip.advice);

      // Hide the loading icon

      adviceNumber.textContent = data.slip.id;
      adviceContent.textContent = data.slip.advice;
    });
});
