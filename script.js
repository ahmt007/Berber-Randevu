
document.getElementById("randevuForm").addEventListener("submit", function (e) {
  const saat = document.getElementById("saat").value;
  const tarih = document.querySelector("input[name='tarih']").value;
  const key = tarih + "-" + saat;
  const randevular = JSON.parse(localStorage.getItem("randevular") || "[]");

  if (randevular.includes(key)) {
    e.preventDefault();
    document.getElementById("message").innerText = "⚠️ Bu saat dolu. Lütfen başka bir saat seçin.";
  } else {
    randevular.push(key);
    localStorage.setItem("randevular", JSON.stringify(randevular));
    document.getElementById("message").innerText = "✅ Randevunuz alındı!";
  }
});
