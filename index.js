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
    window.location.href = "page.html";
  } else {
    alert("Código super secreto inválido!! Tente novamente");
  }
}
