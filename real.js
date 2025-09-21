// Data awal
let namaProduk = ["Laptop","Mouse","Keyboard"];
let harga = [7000000,200000,350000];
let stok = [5,10,7];

// Konversi data awal ke array objek
let produk = [];
for (let i = 0; i < namaProduk.length; i++) {
  produk.push({
    id: i + 1,
    namaProduk: namaProduk[i],
    harga: harga[i],
    stok: stok[i]
  });
}

// Fungsi tambah produk
function tambah() {  
  let nama = document.getElementById("namaProduk").value;
  let hargaProduk = parseInt(document.getElementById("harga").value);
  let stokProduk = parseInt(document.getElementById("stok").value);

  let id = produk.length > 0 ? produk[produk.length - 1].id + 1 : 1;
  produk.push({ id, namaProduk: nama, harga: hargaProduk, stok: stokProduk });

  let output = `Produk "${nama}" berhasil ditambahkan!`;
  document.getElementById("informasi").innerHTML = output;

  // reset input
  document.getElementById("namaProduk").value = "";
  document.getElementById("harga").value = "";
  document.getElementById("stok").value = "";
}

// Fungsi tampilkan produk
function tampilkan() {
  let output = "======== Daftar Produk ========<br>";
  if (produk.length === 0) {
    output += "Tidak ada produk.<br>";
  } else {
    produk.forEach(p => {
      output += `${p.id} | Nama: ${p.namaProduk} | Harga: ${p.harga} | Stok: ${p.stok}<br>`;
    });
  }
  output += "===============================<br>";
  document.getElementById("informasi").innerHTML = output;
}
