function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function checkAccess() {
  let accessCode = document.getElementById("access-code").value;
  const correctCode = "2905";

  if (accessCode == correctCode) {
    window.location.href = "homepage.html";
  } else {
    alert("Poxa amor é tão facinho, são só 4 dígitos!");
  }
}

document
  .getElementById("access-code")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("submit-button").click();
    }
  });

function countDays() {
  const startDate = new Date("2022-05-29");
  let nowDate = new Date();

  let diff = nowDate.getTime() - startDate.getTime();
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor(diff / (1000 * 60 * 60));
  let minutes = Math.floor(diff / (1000 * 60));
  let seconds = Math.floor(diff / 1000);
  document.getElementById("counter").innerHTML =
    "Passaram-se <span class='dias'>" +
    days +
    " dias</span>, <span class='hours'>" +
    hours +
    " horas</span>, <span class='minutes'>" +
    minutes +
    " minutos</span>, <span class='seconds'>" +
    seconds +
    " segundos</span> desde o ínicio dos meus dias mais felizes <3";
}
setInterval(countDays, 1000);
