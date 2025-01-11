// Notifikasi Utility Function
function showNotification(message, type = "success") {
  const notificationContainer = document.createElement("div");
  notificationContainer.classList.add("notification", `notification-${type}`);
  notificationContainer.textContent = message;

  // Tambahkan ke body
  document.body.appendChild(notificationContainer);

  // Hapus notifikasi setelah 3 detik
  setTimeout(() => {
    notificationContainer.classList.add("fade-out");
    notificationContainer.addEventListener("transitionend", () => {
      notificationContainer.remove();
    });
  }, 3000);
}

// Event untuk Form Submit
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("kontakForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;

    if (nama && email && pesan) {
      showNotification("Pesan Anda berhasil dikirim. Terima kasih!", "success");
      form.reset(); // Reset form setelah submit
    } else {
      showNotification("Harap lengkapi semua bidang!", "error");
    }
  });
});
