//==== Bagian 6 ====

// Nama: gusti Dimas Achmad 
// Tanggal: 17 Oktober 2026
// Tujuan: Memperbaiki 15 bug pada kode kasir.

// FIX 1: Referensi saldo harus menggunakan this.saldo agar mengakses properti milik object pelanggan.
const TARIF_PAJAK = 0.11;
const harga = { kopi: 20000, teh: 7500, roti: 15000 };
let keranjang = ["kopi", "teh", "roti", "teh"];
let jumlahMember = "5";

const pelanggan = {
    nama: "rina",
    saldo: 100000,

    bayar(jumlah) {
        // FIX 1
        this.saldo -= jumlah;
        return this.saldo;
    },
};

// Subtotal
let subtotal = 0;

// FIX 2: Gunakan <, bukan <=, supaya indeks tidak melewati indeks terakhir array dan menghasilkan undefined.
for (let i = 0; i < keranjang.length; i++) {
    subtotal += harga[keranjang[i]];
}

// Diskon
let persen;

// FIX 3: Periksa batas subtotal tertinggi terlebih dahulu.
// Jika 50000 diperiksa setelah 25000, diskon 10% tidak tercapai.
if (subtotal >= 50000) {
    persen = 10;
} else if (subtotal >= 25000) {
    persen = 5;
} else {
    persen = 0;
}

let diskon = (subtotal * persen) / 100;

// Promo hari
let hari = "jumat";
let promo;

switch (hari) {
    case "jumat":
        promo = 3000;
        // FIX 4: break mencegah jatuh ke case sabtu/minggu.
        break;
    case "sabtu":
    case "minggu":
        promo = 5000;
        break;
    default:
        promo = 0;
}

// Pajak
// FIX 5: Pajak harus dihitung dari subtotal - diskon - promo.
let pajak = (subtotal - diskon - promo) * TARIF_PAJAK;

// Total
let total = subtotal - diskon - promo + pajak;

// Uang bayar dari formulir
let uangBayarTeks = "100.000";

// FIX 6: Hapus pemisah ribuan sebelum konversi ke Number.
// parseInt("100.000") membaca bagian bilangan bulat sebelum titik.
let uangBayar = Number(uangBayarTeks.replaceAll(".", ""));
let kembalian = uangBayar - total;

// Status
let status;

// FIX 7: Gunakan perbandingan >=, bukan assignment =.
// Assignment akan mengganti uangBayar dengan nilai total.
if (uangBayar >= total) {
    status = "Lunas";
} else {
    status = "Kurang";
}

// Nama rapi
// FIX 8: slice(0, 1) mengambil huruf pertama.
// slice(1) mengambil sisa nama tanpa huruf pertama.
let namaRapi =
    pelanggan.nama.slice(0, 1).toUpperCase() +
    pelanggan.nama.slice(1);

// Keranjang: hapus "teh" pertama, lalu tambah "air" di akhir.

// FIX 9: splice mengubah array asli; slice hanya membuat potongan baru.
const indeksTeh = keranjang.indexOf("teh");
if (indeksTeh !== -1) {
    keranjang.splice(indeksTeh, 1);
}

// FIX 10: push menambahkan air ke akhir array.
// unshift justru menambahkan elemen ke awal.
keranjang.push("air");

// Member bertambah 1
// FIX 11: jumlahMember berupa string, jadi konversi ke Number
// agar "5" + 1 tidak menghasilkan string "51".
let jumlahMemberBaru = Number(jumlahMember) + 1;

// Rata-rata per item ditambah biaya kemasan 10
// FIX 12: toFixed() menghasilkan string; ubah kembali ke Number
// sebelum menjumlahkan biaya kemasan.
let rataRata = Number((total / 4).toFixed(2));
let rataRataTotal = rataRata + 10;

// Format rupiah
function formatRupiah(angka) {
    // FIX 13: return diperlukan agar function mengembalikan hasil.
    return "Rp " + angka;
}

// Cetak hasil
console.log(subtotal, diskon, promo, pajak, total);
console.log(uangBayar, kembalian, status);
console.log(namaRapi);
console.log(keranjang);
console.log(jumlahMemberBaru);
console.log(rataRataTotal);
console.log(formatRupiah(kembalian));
console.log(pelanggan.bayar(30000));

// FIX 14: for...of digunakan untuk array/iterable,
// sedangkan for...in digunakan untuk mengiterasi kunci object.
for (let kunci in harga) {
    console.log(kunci + ": " + harga[kunci]);
}

/*
Catatan Bug:

1. Jenis: Error saat program dijalankan (ReferenceError).
   Penyebab: saldo dipanggil tanpa deklarasi atau referensi object.
   Perbaikan: gunakan this.saldo di dalam method pelanggan.

2. Jenis: Tidak error, tetapi hasil salah.
   Penyebab: kondisi i <= keranjang.length membuat loop mencapai
   indeks di luar batas array. harga[undefined] menghasilkan
   undefined, lalu subtotal menjadi NaN.
   Perbaikan: gunakan i < keranjang.length.

3. Jenis: Tidak error, tetapi hasil salah.
   Penyebab: batas >= 25000 diperiksa lebih dahulu sehingga
   subtotal 50000 mendapatkan diskon 5%, bukan 10%.
   Perbaikan: periksa batas 50000 terlebih dahulu.

4. Jenis: Tidak error, tetapi hasil salah.
   Penyebab: tanpa break setelah case jumat, eksekusi berlanjut
   ke case sabtu/minggu dan promo berubah menjadi 5000.
   Perbaikan: tambahkan break setelah promo Jumat.

5. Jenis: Tidak error, tetapi hasil salah.
   Penyebab: operasi perkalian hanya diterapkan pada promo.
   Pajak seharusnya 11% dari seluruh nilai setelah diskon dan promo.
   Perbaikan: gunakan (subtotal - diskon - promo) * TARIF_PAJAK.

6. Jenis: Tidak error, tetapi hasil salah.
   Penyebab: parseInt("100.000") membaca bagian bilangan bulat
   sebelum titik, yaitu 100. Titik dianggap sebagai pemisah
   desimal, bukan pemisah ribuan.
   Perbaikan: hapus titik terlebih dahulu, lalu gunakan Number().

7. Jenis: Tidak error, tetapi hasil salah.
   Penyebab: operator = melakukan assignment, bukan perbandingan.
   uangBayar ditimpa menjadi total; nilainya menjadi 46620.
   Karena angka tersebut truthy, status selalu "Lunas".
   Perbaikan: gunakan uangBayar >= total.

8. Jenis: Tidak error, tetapi hasil salah.
   Penyebab: slice(0) mengambil seluruh nama dari indeks 0,
   sehingga huruf pertama "r" ikut ditambahkan dua kali.
   Perbaikan: gunakan slice(1) untuk mengambil sisa nama.

9. Jenis: Tidak error, tetapi hasil salah.
   Penyebab: slice(1, 1) menghasilkan array kosong dan tidak
   menghapus elemen dari array asli.
   Perbaikan: gunakan splice(indeks, 1).

10. Jenis: Tidak error, tetapi hasil salah.
    Penyebab: unshift menambahkan elemen di awal array.
    Perbaikan: gunakan push untuk menambahkan "air" di akhir.

11. Jenis: Tidak error, tetapi hasil salah.
    Penyebab: "5" + 1 menggabungkan string menjadi "51".
    Perbaikan: konversi "5" ke angka menggunakan Number().

12. Jenis: Tidak error, tetapi hasil salah.
    Penyebab: toFixed(2) mengembalikan string "11655.00".
    Menambahkan 10 akan menghasilkan penggabungan string.
    Perbaikan: bungkus hasil toFixed() dengan Number().

13. Jenis: Tidak error, tetapi hasil salah.
    Penyebab: function membuat ekspresi string tetapi tidak
    mengembalikannya. Hasil pemanggilan menjadi undefined.
    Perbaikan: tambahkan return.

14. Jenis: Error saat program dijalankan (TypeError).
    Penyebab: for...of tidak dapat langsung mengiterasi object
    biasa seperti harga karena object tersebut bukan iterable.
    Perbaikan: gunakan for...in untuk mengiterasi kunci object.

15. Jenis: Tidak error, tetapi hasil salah.
    Penyebab: bug logika pada pengecekan status menggunakan
    assignment (baris 7) membuat uangBayar berubah menjadi total.
    Dengan nilai yang sudah tertimpa, hasil kembalian dan status
    menjadi tidak sesuai.
    Perbaikan: gunakan perbandingan uangBayar >= total agar
    uangBayar tetap 100000 dan kembalian tetap 53380.

Pertanyaan:

1. Karena tanda = digunakan untuk mengisi nilai variabel,
   bukan untuk membandingkan nilai.

   Jadi, uangBayar berubah menjadi 46620.
   Karena angka tersebut bukan 0, program menganggapnya true
   dan menjalankan bagian "Lunas".

2. Karena parseInt() berhenti membaca saat menemukan titik.
   Jadi, hasilnya hanya 100.

   Agar hasilnya 100000, hapus titik terlebih dahulu:
   Number("100.000".replaceAll(".", ""))
   Hasilnya adalah 100000.
*/