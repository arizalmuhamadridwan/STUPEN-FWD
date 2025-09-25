import users from "./data.js";
import { setData, tampilkanData, tambahData, hapusData } from "./controller.js";

// Set data awal
setData(users);

// Saat pertama kali load tampilkan data
tampilkanData();

// Event listener tombol
document.getElementById("tampil").addEventListener("click", () => {
  tampilkanData();
});

document.getElementById("tambah").addEventListener("click", () => {
  tambahData({
    nama: "Siti",
    umur: 12,
    alamat: "Perum Sahroni,  Solomerto, Etopia",
    email: "siti@gmail.com"
  });
});

document.getElementById("hapus").addEventListener("click", () => {
  hapusData(2); 
});
