//==== BAGIAN 2 ====

//=== 2.1 Data ===

/*
Nama    : [Gusti Dimas Achmad]
Tanggal : 17 Oktober 2026
Tujuan  : Membersihkan data transaksi Kedai Senja,
          mengubah data teks menjadi tipe data yang tepat,
          serta menyiapkan data untuk pemrosesan transaksi.
*/

//== 2.1.1 Data Kedai ==

const kedai = {
    nama: "Kedai Senja",
    pemilik: "Gusti Dimas Achmad",
    kota: "Probolinggo",
    tahunBerdiri: 2026,
    sedangBuka: true,
    nomorWhatsApp: "081336011353",
    website: null,
    jamOperasional: {
        buka: "08:00",
        tutup: "22:00"
    }
};

console.log("=== DATA KEDAI ===");
console.log(kedai);

//== 2.1.2 Data Menu ==

const menu = [
    {
        nama: "Kopi Susu",
        kategori: "Minuman",
        harga: 18000,
        stok: 20
    },
    {
        nama: "Kopi Hitam",
        kategori: "Minuman",
        harga: 12000,
        stok: 15
    },
    {
        nama: "Matcha Latte",
        kategori: "Minuman",
        harga: 22000,
        stok: 10
    },
    {
        nama: "Es Teh",
        kategori: "Minuman",
        harga: 5000,
        stok: 30
    },
    {
        nama: "Roti Bakar",
        kategori: "Makanan",
        harga: 12000,
        stok: 12
    },
    {
        nama: "Nasi Goreng",
        kategori: "Makanan",
        harga: 25000,
        stok: 10
    },
    {
        nama: "Kentang Goreng",
        kategori: "Camilan",
        harga: 15000,
        stok: 0
    },
    {
        nama: "Cokelat Panas",
        kategori: "Minuman",
        harga: 16000,
        stok: 8
    }
];

console.log("=== DAFTAR MENU ===");
console.table(menu);

//== 2.1.3 Data Transaksi Mentah ==

const transaksiMentah = [
    {
        kode: "trx-001",
        pelanggan: "  rina   WULANDARI ",
        hari: " JUMAT ",
        uangBayar: "150.000",
        voucher: " diskon10 ",
        pesanan: [
            { menu: " kopi SUSU", jumlah: "2" },
            { menu: "ROTI bakar ", jumlah: "1" }
        ]
    },
    {
        kode: "trx-002",
        pelanggan: " bUDI santoso ",
        hari: "Sabtu",
        uangBayar: "75000",
        voucher: " ",
        pesanan: [
            { menu: " es TEH ", jumlah: "2" },
            { menu: "NASI goreng", jumlah: "1" }
        ]
    },
    {
        kode: "trx-003",
        pelanggan: " siti   rahmawati ",
        hari: " MINGGU ",
        uangBayar: "50000",
        voucher: "DISKON5",
        pesanan: [
            { menu: "matcha LATTE ", jumlah: "2" }
        ]
    },
    {
        kode: "trx-004",
        pelanggan: " dedi Kurniawan ",
        hari: " Rabu ",
        uangBayar: "10000",
        voucher: "",
        pesanan: [
            { menu: " nasi goreng ", jumlah: "1" }
        ]
    },
    {
        kode: "trx-005",
        pelanggan: "   ",
        hari: "KAMIS",
        uangBayar: "100000",
        voucher: "diskon10",
        pesanan: [
            { menu: "Kopi Susu", jumlah: "1" }
        ]
    },
    {
        kode: "trx-006",
        pelanggan: " maya PUTRI ",
        hari: " Senin ",
        uangBayar: "50000",
        voucher: "",
        pesanan: []
    },
    {
        kode: "trx-007",
        pelanggan: " AGUS setiawan ",
        hari: " selasa ",
        uangBayar: "50000",
        voucher: " DISKON10 ",
        pesanan: [
            { menu: "Menu Rahasia", jumlah: "1" },
            { menu: "Kopi Susu", jumlah: "0" },
            { menu: "Kentang Goreng", jumlah: "-2" }
        ]
    }
];

console.log("=== TRANSAKSI MENTAH ===");
console.log(transaksiMentah);

//=== 2.2 Function Pembersih Data ===

// Function Declaration
// Membersihkan spasi dan menyeragamkan penulisan nama.
function bersihkanNama(teks) {
    if (typeof teks !== "string") {
        return "";
    }

    const teksBersih = teks
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase();

    if (teksBersih === "") {
        return "";
    }

    return teksBersih
        .split(" ")
        .map(kata =>
            kata.charAt(0).toUpperCase() + kata.slice(1)
        )
        .join(" ");
}

// Function Expression
// Mengubah teks menjadi angka dan menghapus titik pemisah ribuan serta spasi.
const ubahKeAngka = function (teks) {
    if (typeof teks !== "string" && typeof teks !== "number") {
        return 0;
    }

    const teksBersih = String(teks)
        .replaceAll(".", "")
        .replaceAll(" ", "");

    if (teksBersih.trim() === "") {
        return 0;
    }

    const angka = Number(teksBersih);

    return Number.isFinite(angka) ? angka : 0;
};

// Arrow Function
// Mengambil angka persen dari kode voucher DISKON.
const ambilPersenVoucher = (kode) => {
    if (typeof kode !== "string") {
        return 0;
    }

    const kodeBersih = kode.trim().toUpperCase();
    const hasil = kodeBersih.match(/^DISKON(\d+)$/);

    return hasil ? Number(hasil[1]) : 0;
};

// Function Declaration
// Memformat angka menjadi Rupiah tanpa toLocaleString().
function formatRupiah(angka) {
    if (typeof angka !== "number" || !Number.isFinite(angka)) {
        angka = 0;
    }

    const angkaBulat = Math.trunc(angka);
    const tanda = angkaBulat < 0 ? "-" : "";
    const angkaTeks = String(Math.abs(angkaBulat));

    const angkaDenganTitik = angkaTeks.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        "."
    );

    return "Rp " + tanda + angkaDenganTitik;
}

//== 2.2.1 Pengujian Function ==
// Format keluaran: input => hasil

console.log("=== UJI bersihkanNama ===");

const ujiNama = [
    "  rina   WULANDARI ",
    "",
    "  kopi SUSU  "
];

for (const input of ujiNama) {
    console.log(`${JSON.stringify(input)} → ${JSON.stringify(bersihkanNama(input))}`);
}

console.log("=== UJI ubahKeAngka ===");

const ujiAngka = [
    "150.000",
    "75000",
    "abc",
    " 12 000 "
];

for (const input of ujiAngka) {
    console.log(`${JSON.stringify(input)} → ${ubahKeAngka(input)}`);
}

console.log("=== UJI ambilPersenVoucher ===");

const ujiVoucher = [
    " diskon10 ",
    "PROMO5",
    "",
    "DISKON25"
];

for (const input of ujiVoucher) {
    console.log(`${JSON.stringify(input)} → ${ambilPersenVoucher(input)}`);
}

console.log("=== UJI formatRupiah ===");

const ujiRupiah = [
    1250000,
    500,
    0,
    75000
];

for (const input of ujiRupiah) {
    console.log(`${input} → ${formatRupiah(input)}`);
}

//=== 2.3 Data Bersih ===
// Menggunakan for...of dan push sesuai instruksi.

const transaksiBersih = [];

for (const transaksi of transaksiMentah) {
    const pesananBersih = [];

    for (const item of transaksi.pesanan) {
        pesananBersih.push({
            menu: bersihkanNama(item.menu),
            jumlah: ubahKeAngka(item.jumlah)
        });
    }

    transaksiBersih.push({
        kode: transaksi.kode.toUpperCase(),
        pelanggan: bersihkanNama(transaksi.pelanggan),
        hari: transaksi.hari.trim().toLowerCase().replace(/\s+/g, " "),
        uangBayar: ubahKeAngka(transaksi.uangBayar),
        persenVoucher: ambilPersenVoucher(transaksi.voucher),
        pesanan: pesananBersih
    });
}

console.log("=== TRANSAKSI BERSIH ===");
console.log(transaksiBersih);
console.table(
    transaksiBersih.map(transaksi => ({
        kode: transaksi.kode,
        pelanggan: transaksi.pelanggan,
        hari: transaksi.hari,
        uangBayar: formatRupiah(transaksi.uangBayar),
        persenVoucher: transaksi.persenVoucher,
        jumlahItem: transaksi.pesanan.length
    }))
);

/*
Pertanyaan:
1. Perbedaan antara parseInt, parseFloat, dan Number yaitu:

   parseInt() mengambil angka bulat.
   parseFloat() mengambil angka desimal.
   Number() mengubah teks menjadi angka jika valid.

   Contohnya:
   parseInt("15.75")   = 15
   parseFloat("15.75") = 15.75
   Number("15.75")     = 15.75

   parseInt("150.000") menghasilkan 150, bukan 150000.
   Jadi, titik pemisah ribuan harus dihapus dulu.
   Contohnya, "150.000" diubah menjadi "150000",
   lalu dikonversi menggunakan Number().

2. toFixed() menghasilkan teks (string), bukan angka.

   Contohnya:
   const nilai = (10).toFixed(2);
   console.log(nilai); // "10.00"

   Jika ditambah angka:
   console.log(nilai + 5); // "10.005"

   Hasilnya digabung sebagai teks, bukan dijumlahkan.
   Agar bisa dijumlahkan, gunakan Number(nilai) + 5.

3. Perbedaan antara replace() DAN replaceAll() yaitu:

   replace() mengganti kecocokan pertama.
   replaceAll() mengganti semua kecocokan.

   Contohnya:
   "a a a".replace(" ", "-")    = "a-a a"
   "a a a".replaceAll(" ", "-") = "a-a-a"

   Dalam ubahKeAngka(), replaceAll() digunakan untuk
   menghapus semua titik dan spasi.

   Pada bersihkanNama(), replace(/\\s+/g, " ")
   digunakan untuk merapikan spasi yang berlebihan.

4. toUpperCase() menghasilkan teks baru, jadi variabel
   asli tidak berubah jika hasilnya tidak disimpan.

   Contohnya:
   let kode = "trx-001";
   kode.toUpperCase();
   console.log(kode); // "trx-001"

   Agar berubah, ketik:
   kode = kode.toUpperCase();
   console.log(kode); // "TRX-001"

5. Function declaration:
   function bersihkanNama(teks) { ... }
   Bentuk ini mudah dibaca dan bisa dipanggil sebelum ditulis dalam kode karena adanya hoisting.

   Function expression:
   const ubahKeAngka = function(teks) { ... };
   Bentuk ini menyimpan fungsi dalam konstanta.

   Arrow function:
   const ambilPersenVoucher = (kode) => { ... };
   Bentuk ini lebih singkat dan cocok untuk fungsi sederhana.
*/
