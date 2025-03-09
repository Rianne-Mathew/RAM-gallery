function openModal(title, note) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-text").innerText = note;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
