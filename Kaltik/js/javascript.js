document.getElementById("hitungLuas").addEventListener("click", function () {
  var sisi = parseFloat(document.getElementById("sisi").value);
  var luas = sisi * sisi;
  document.getElementById("hasilLuas").innerText = luas;
});

document
  .getElementById("hitungKeliling")
  .addEventListener("click", function () {
    var sisi = parseFloat(document.getElementById("sisi").value);
    var keliling = 4 * sisi;
    document.getElementById("hasilKeliling").innerText = keliling;
  });

// Mendapatkan elemen-elemen yang diperlukan
var sisiInput = document.getElementById("sisi");
var hasilLuas = document.getElementById("hasilLuas");
var hasilKeliling = document.getElementById("hasilKeliling");

// Mendapatkan tombol "Reset"
var resetButton = document.getElementById("reset");

// Menambahkan event listener untuk tombol "Reset"
resetButton.addEventListener("click", function () {
  // Mengatur ulang input dan hasil perhitungan
  sisiInput.value = "";
  hasilLuas.textContent = "";
  hasilKeliling.textContent = "";
});
