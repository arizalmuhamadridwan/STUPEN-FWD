class Pelanggan {
  constructor(nama, nomorTelepon, kendaraanDisewa) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = kendaraanDisewa;
  }

  tampilkanData() {
    return `Nama: ${this.nama}, Telepon: ${this.nomorTelepon}, Kendaraan: ${this.kendaraanDisewa}`;
  }
}

class SistemTransportasi {
  constructor() {
    this.daftarPelanggan = [];
  }

  tambahPelanggan(nama, nomorTelepon, kendaraanDisewa) {
    const pelangganBaru = new Pelanggan(nama, nomorTelepon, kendaraanDisewa);
    this.daftarPelanggan.push(pelangganBaru);
    console.log(`Informasi transaksi ${nama} telah di catat`);
  }

  tampilkanDaftarPelanggan() {
    console.log("Daftar Pelanggan yang Sedang Menyewa");
    if (this.daftarPelanggan.length === 0) {
      console.log("Belum ada pelanggan yang menyewa.");
    } else {
      this.daftarPelanggan.forEach((pelanggan, index) => {
        console.log(`${index + 1}. ${pelanggan.tampilkanData()}`);
      });
    }
  }
}

let sistem = new SistemTransportasi();

sistem.tambahPelanggan("Arizal", "088888888", "rxKing");

sistem.tampilkanDaftarPelanggan();
