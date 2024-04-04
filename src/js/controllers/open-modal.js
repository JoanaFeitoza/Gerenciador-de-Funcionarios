const updateButton = document.getElementById("updateDetails");
const cancelButton = document.getElementById("cancel");
const favDialog = document.getElementById("favDialog");

updateButton.addEventListener("click", () => favDialog.showModal());
cancelButton.addEventListener("click", () => favDialog.close());
