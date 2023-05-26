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
