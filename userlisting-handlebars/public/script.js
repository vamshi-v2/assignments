let viewModal = document.getElementById("viewModal")
let editModal = document.getElementById("editModal");

let editForm = document.getElementById("editForm")
let viewForm = document.getElementById("viewForm")

// View button 

async function viewFunction(id) {
  const url = `/users/${id}`
  await fetch(url)
    .then(data => data.text())
    .then(html2data => viewForm.innerHTML = html2data)

  viewModal.style.display = "block";
  // document.querySelector("#viewForm header").style.display = "none"
  // document.querySelector("#viewForm footer").style.display = "none"
}

// Edit button 

async function editFunction(id) {
  const url = `/users/update/${id}`
  await fetch(url)
    .then(data => data.text())
    .then(html1data => editForm.innerHTML = html1data)

  editModal.style.display = "block";
  // document.querySelector("#editForm header").style.display = "none"
  // document.querySelector("#editForm footer").style.display = "none"
}

window.onclick = function (event) {
  if (event.target == editModal) {
    editModal.style.display = "none";
  }
  if (event.target == viewModal) {
    viewModal.style.display = "none";
  }
}

