// crypto Modal
const open = document.getElementById("btn-cry-open");
const close = document.getElementById("btn-cry-close");
const modal = document.getElementById("modalWrapper");

//crypto Modal
open.onclick = () => {
  modal.style.display = "flex";
};
close.onclick = () => {
  modal.style.display = "none";
};
