// table Modal
const tableOpen = document.getElementById("btn-table-open");
const tableClose = document.getElementById("btn-table-close");
const tableModal = document.getElementById("table-modalWrapper");

// table modal
tableOpen.onclick = () => {
  tableModal.style.display = "flex";
};
tableClose.onclick = () => {
  tableModal.style.display = "none";
};
