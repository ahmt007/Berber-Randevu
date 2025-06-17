
document.getElementById("randevuForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  fetch("https://script.google.com/macros/s/AKfycbyTF1z3YrBM0IlZDVFTLKUbr0IEFamaqRnZaNxgkwt-Sfcb91Na58-hUuiPxrM6G8k/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
  .then(response => {
    const mesaj = document.getElementById("mesaj");
    if (response.success) {
      mesaj.textContent = "Randevunuz başarıyla alındı.";
      mesaj.style.color = "lightgreen";
      form.reset();
    } else {
      mesaj.textContent = response.message || "Bu saat dolu. Lütfen başka bir saat seçin.";
      mesaj.style.color = "tomato";
    }
  })
  .catch(error => {
    document.getElementById("mesaj").textContent = "Bir hata oluştu. Lütfen tekrar deneyin.";
    console.error("Hata:", error);
  });
});
