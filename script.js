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


//==== BAGIAN 3 ====

//=== Object Kasir ===

const kasir = {
    menu: menu,
    saldoKas: 0,
    riwayat: [],
    pecahan: [50000, 20000, 10000, 5000, 2000, 1000],

    //== Mencari Menu ==
    cariMenu(nama) {
        const namaDicari = String(nama).trim().toLowerCase();

        for (const item of this.menu) {
            if (item.nama.toLowerCase() === namaDicari) {
                return item;
            }
        }

        return null;
    },

    //== Menghitung Subtotal ==
    hitungSubtotal(pesanan) {
        let subtotal = 0;
        const itemValid = [];
        const itemTidakValid = [];

        for (const item of pesanan) {
            const dataMenu = this.cariMenu(item.menu);

            if (!dataMenu) {
                itemTidakValid.push({
                    menu: item.menu,
                    alasan: "Menu tidak ditemukan"
                });
                continue;
            }

            if (item.jumlah <= 0) {
                itemTidakValid.push({
                    menu: item.menu,
                    alasan: "Jumlah harus lebih dari 0"
                });
                continue;
            }

            if (dataMenu.stok < item.jumlah) {
                itemTidakValid.push({
                    menu: item.menu,
                    alasan: "Stok tidak mencukupi"
                });
                continue;
            }

            const hargaItem = dataMenu.harga * item.jumlah;

            subtotal += hargaItem;

            itemValid.push({
                menu: dataMenu.nama,
                jumlah: item.jumlah,
                harga: hargaItem
            });
        }

        return {
            subtotal,
            itemValid,
            itemTidakValid
        };
    },

    //== Menghitung Promo Hari ==
    hitungPromoHari(hari) {
        let promo = 0;

        switch (String(hari).trim().toLowerCase()) {
            case "jumat":
                promo = 3000;
                break;

            case "sabtu":
            case "minggu":
                promo = 5000;
                break;

            default:
                promo = 0;
                break;
        }

        return promo;
    },

    //== Menghitung Diskon ==
    hitungDiskon(subtotal, persenVoucher) {
        let persenSubtotal;

        if (subtotal >= 100000) {
            persenSubtotal = 15;
        } else if (subtotal >= 50000) {
            persenSubtotal = 10;
        } else if (subtotal >= 25000) {
            persenSubtotal = 5;
        } else {
            persenSubtotal = 0;
        }

        const persenTerpakai = Math.max(
            persenSubtotal,
            persenVoucher
        );

        return Math.round(subtotal * persenTerpakai / 100);
    },

    //== Menghitung Pajak ==
    hitungPajak(nilai, tarif = 0.11) {
        return Math.round(nilai * tarif);
    },

    //== Menghitung Kembalian dengan Pecahan ==
    hitungKembalianPecahan(kembalian) {
        if (kembalian < 0) {
            return null;
        }

        let sisa = kembalian;
        const hasil = {};

        for (const pecahan of this.pecahan) {
            let jumlahLembar = 0;

            while (sisa >= pecahan) {
                sisa -= pecahan;
                jumlahLembar++;
            }

            if (jumlahLembar > 0) {
                hasil[pecahan] = jumlahLembar;
            }
        }

        hasil.sisa = sisa;

        return hasil;
    },

    //== Memproses Transaksi ==
    prosesTransaksi(trx) {
        let hasil;

        if (!trx.pelanggan) {
            hasil = {
                kode: trx.kode,
                pelanggan: trx.pelanggan,
                status: "DITOLAK",
                alasan: "Nama pelanggan kosong"
            };

            this.riwayat.push(hasil);
            return hasil;
        }

        if (!trx.pesanan.length) {
            hasil = {
                kode: trx.kode,
                pelanggan: trx.pelanggan,
                status: "DITOLAK",
                alasan: "Pesanan kosong"
            };

            this.riwayat.push(hasil);
            return hasil;
        }

        const {
            subtotal,
            itemValid,
            itemTidakValid
        } = this.hitungSubtotal(trx.pesanan);

        if (itemValid.length === 0) {
            hasil = {
                kode: trx.kode,
                pelanggan: trx.pelanggan,
                status: "DITOLAK",
                alasan: "Tidak ada item valid"
            };

            this.riwayat.push(hasil);
            return hasil;
        }

        const promoHari = this.hitungPromoHari(trx.hari);

        const diskon = this.hitungDiskon(
            subtotal,
            trx.persenVoucher
        );

        const nilaiSetelahDiskon = Math.max(
            0,
            subtotal - diskon - promoHari
        );

        const pajak = this.hitungPajak(nilaiSetelahDiskon);

        const total = nilaiSetelahDiskon + pajak;

        const uangBayar = trx.uangBayar;
        const kembalian = uangBayar - total;

        const status = uangBayar >= total ? "LUNAS" : "KURANG";

        let pecahanKembalian = null;

        if (status === "LUNAS") {
            for (const item of itemValid) {
                const dataMenu = this.cariMenu(item.menu);

                dataMenu.stok -= item.jumlah;
            }

            this.saldoKas += total;

            pecahanKembalian =
                this.hitungKembalianPecahan(kembalian);
        }

        hasil = {
            kode: trx.kode,
            pelanggan: trx.pelanggan,
            status,
            subtotal,
            promoHari,
            diskon,
            pajak,
            total,
            uangBayar,
            kembalian,
            pecahanKembalian,
            itemValid,
            itemTidakValid
        };

        this.riwayat.push(hasil);

        return hasil;
    },

    //== Mencetak Struk ==
    cetakStruk(hasil) {
        console.log("\n========================================");
        console.log("          KEDAI SENJA");
        console.log("========================================");
        console.log(`Kode transaksi : ${hasil.kode}`);
        console.log(`Pelanggan      : ${hasil.pelanggan}`);

        if (hasil.status === "DITOLAK") {
            console.log("Status         : DITOLAK");
            console.log(`Alasan         : ${hasil.alasan}`);
            console.log("========================================");
            return;
        }

        console.log("----------------------------------------");
        console.log("DAFTAR ITEM VALID");

        for (let i = 0; i < hasil.itemValid.length; i++) {
            const item = hasil.itemValid[i];

            console.log(
                `${i + 1}. ${item.menu} | ` +
                `${item.jumlah} unit | ${formatRupiah(item.harga)}`
            );
        }

        if (hasil.itemTidakValid.length > 0) {
            console.log("----------------------------------------");
            console.log("ITEM TIDAK VALID");

            for (const item of hasil.itemTidakValid) {
                console.log(`- ${item.menu}: ${item.alasan}`);
            }
        }

        console.log("----------------------------------------");
        console.log(`Subtotal       : ${formatRupiah(hasil.subtotal)}`);
        console.log(`Promo hari     : ${formatRupiah(hasil.promoHari)}`);
        console.log(`Diskon         : ${formatRupiah(hasil.diskon)}`);
        console.log(`Pajak          : ${formatRupiah(hasil.pajak)}`);
        console.log(`Total          : ${formatRupiah(hasil.total)}`);
        console.log(`Uang bayar     : ${formatRupiah(hasil.uangBayar)}`);

        if (hasil.kembalian >= 0) {
            console.log(`Kembalian      : ${formatRupiah(hasil.kembalian)}`);
        } else {
            console.log(
                `Kekurangan     : ${formatRupiah(Math.abs(hasil.kembalian))}`
            );
        }

        console.log(`Status         : ${hasil.status}`);

        if (hasil.pecahanKembalian !== null) {
            console.log("Pecahan kembalian:");

            for (const [pecahan, jumlah] of Object.entries(
                hasil.pecahanKembalian
            )) {
                if (pecahan === "sisa") {
                    console.log(`  Sisa         : ${formatRupiah(jumlah)}`);
                } else {
                    console.log(
                        `  ${formatRupiah(Number(pecahan))} : ${jumlah} lembar`
                    );
                }
            }
        }

        console.log("========================================");
    }
};


//== Menjalankan Seluruh Transaksi ==

// Percobaan pertama: gunakan target besar agar semua transaksi diproses.
// Percobaan kedua: ubah target menjadi 100000, muat ulang halaman, dan transaksi
// terakhir yang diproses adalah TRX-003. Setelah pengujian, kembalikan target ke besar.

const TARGET_KAS = 1000000000;

console.log("\n========== MULAI TRANSAKSI ==========");

for (const trx of transaksiBersih) {
    const hasil = kasir.prosesTransaksi(trx);

    kasir.cetakStruk(hasil);

    if (kasir.saldoKas >= TARGET_KAS) {
        console.log("Target kas tercapai");
        break;
    }
}

console.log("\n========== RINGKASAN KASIR ==========");
console.log("Saldo kas:", formatRupiah(kasir.saldoKas));
console.log("Jumlah transaksi:", kasir.riwayat.length);
console.log("Stok akhir:");
console.table(kasir.menu);

/*
Pertanyaan:
1. this merujuk pada object yang menjalankan method.
   Jadi, this.menu berarti menu milik object kasir.

2. switch digunakan untuk memilih promo berdasarkan hari.
   Sabtu dan Minggu mendapat promo Rp 5.000.
   break digunakan agar program tidak lanjut ke case lain.

3. Array kosong memiliki length 0.
   Karena 0 dianggap Falsy, !0 menghasilkan true.

   Contoh nilai Falsy:
   - false
   - 0
   - ""
   - null
   - undefined
   - NaN

4. break menghentikan perulangan atau keluar dari switch.
   continue melewati proses saat ini dan lanjut ke iterasi
   berikutnya.

   Contoh:
   - break menghentikan transaksi jika target kas tercapai.
   - continue melewati item yang tidak valid.

5. Object digunakan untuk menyimpan beberapa hasil sekaligus,
   yaitu subtotal, item valid, dan item tidak valid.

   Dengan begitu, program bisa menghitung tagihan sekaligus
   mengetahui item yang berhasil atau gagal diproses.

6. MENGAPA while DIGUNAKAN DI DALAM for...of?

   for...of digunakan untuk memeriksa setiap pecahan uang,
   sedangkan while menghitung jumlah pecahan untuk kembalian.

   Contoh kembalian Rp 53.380:
   - Rp 50.000: 1 lembar
   - Rp 2.000: 1 lembar
   - Rp 1.000: 1 lembar
   - Sisa Rp 380

   Sebenarnya, cara ini bisa menggunakan pembagian (/)
   dan sisa bagi (%). Namun, for...of dan while tetap
   digunakan karena diminta dalam latihan.
*/

//==== BAGIAN 4 ====

//=== Membuat Object Laporan ===

const laporan = {
    jumlahTransaksi: kasir.riwayat.length,

    jumlahLunas: 0,
    jumlahKurang: 0,
    jumlahDitolak: 0,

    pendapatan: 0,
    rataRata: 0,
    transaksiTerbesar: null,

    penjualanPerMenu: {},
    menuTerlaris: "",

    daftarDitolak: [],
    kodeLunas: [],
    ringkasanKode: "",

    menuStokMenipis: []
};

//=== Mengolah Riwayat Transaksi ===

for (const trx of kasir.riwayat) {
    if (trx.status === "LUNAS") {
        laporan.jumlahLunas++;

        laporan.pendapatan += trx.total;

        laporan.kodeLunas.push(trx.kode);

        if (
            laporan.transaksiTerbesar === null ||
            trx.total > laporan.transaksiTerbesar.total
        ) {
            laporan.transaksiTerbesar = trx;
        }

        for (const item of trx.itemValid) {
            if (item.menu in laporan.penjualanPerMenu) {
                laporan.penjualanPerMenu[item.menu] += item.jumlah;
            } else {
                laporan.penjualanPerMenu[item.menu] = item.jumlah;
            }
        }

    } else if (trx.status === "KURANG") {
        laporan.jumlahKurang++;

    } else if (trx.status === "DITOLAK") {
        laporan.jumlahDitolak++;

        laporan.daftarDitolak.push({
            kode: trx.kode,
            alasan: trx.alasan
        });
    }
}

//=== Menghitung Rata-Rata Pendapatan ===

if (laporan.jumlahLunas > 0) {
    laporan.rataRata = Number(
        (laporan.pendapatan / laporan.jumlahLunas).toFixed(0)
    );
}

//=== Menentukan Menu Terlaris ===

let jumlahTerjualTerbanyak = 0;

for (const namaMenu in laporan.penjualanPerMenu) {
    if (
        laporan.penjualanPerMenu[namaMenu] >
        jumlahTerjualTerbanyak
    ) {
        jumlahTerjualTerbanyak =
            laporan.penjualanPerMenu[namaMenu];

        laporan.menuTerlaris = namaMenu;
    }
}


//=== Membuat Ringkasan Kode Transaksi ===
// Menggunakan perulangan dan operator +=

for (let i = 0; i < laporan.kodeLunas.length; i++) {
    if (i > 0) {
        laporan.ringkasanKode += ", ";
    }

    laporan.ringkasanKode += laporan.kodeLunas[i];
}

//=== Mencari Menu dengan Stok Menipis ===

for (const item of kasir.menu) {
    if (item.stok < 3) {
        laporan.menuStokMenipis.push(item.nama);
    }
}

//=== Cetak Laporan Harian ===

console.log("\n");
console.log("==============================================");

console.log(`
${kedai.nama.toUpperCase()}
LAPORAN HARIAN
==============================================
Jumlah seluruh transaksi : ${laporan.jumlahTransaksi}
Transaksi lunas           : ${laporan.jumlahLunas}
Transaksi kurang          : ${laporan.jumlahKurang}
Transaksi ditolak         : ${laporan.jumlahDitolak}

Pendapatan                : ${formatRupiah(laporan.pendapatan)}
Rata-rata transaksi lunas : ${formatRupiah(laporan.rataRata)}

Transaksi terbesar:
${laporan.transaksiTerbesar
    ? `${laporan.transaksiTerbesar.kode} - ${formatRupiah(laporan.transaksiTerbesar.total)}`
    : "Belum ada transaksi lunas"}

Menu terlaris             : ${laporan.menuTerlaris || "Belum ada penjualan"}
Jumlah terjual terbanyak  : ${jumlahTerjualTerbanyak}

Kode transaksi lunas      : ${laporan.ringkasanKode || "Tidak ada"}
==============================================
`);

//=== Cetak Penjualan per Menu Menggunakan for...in ===

console.log("PENJUALAN PER MENU");

for (const namaMenu in laporan.penjualanPerMenu) {
    console.log(
        `${namaMenu}: ${laporan.penjualanPerMenu[namaMenu]} terjual`
    );
}

//=== Object Keys dan Values ===

console.log("\nKUNCI PENJUALAN PER MENU:");
console.log(Object.keys(laporan.penjualanPerMenu));

console.log("\nNILAI PENJUALAN PER MENU:");
console.log(Object.values(laporan.penjualanPerMenu));

//=== Memeriksa Jumlah Kode ===

const jumlahKodeRingkasan =
    laporan.ringkasanKode === ""
        ? 0
        : laporan.ringkasanKode.split(", ").length;

console.log("\nPEMERIKSAAN RINGKASAN KODE");
console.log("Jumlah kode dalam ringkasan:", jumlahKodeRingkasan);
console.log("Jumlah transaksi lunas:", laporan.jumlahLunas);
console.log(
    "Apakah jumlahnya sama?",
    jumlahKodeRingkasan === laporan.jumlahLunas
);

//=== Demo Array Method ===

console.log("\nDEMO ARRAY METHOD");

console.log(
    "Array kodeLunas asli:",
    laporan.kodeLunas
);

// includes(): memeriksa apakah kode terdapat dalam array.
const kodeContoh = laporan.kodeLunas[0];

console.log(
    `includes("${kodeContoh}"):`,
    laporan.kodeLunas.includes(kodeContoh)
);

// indexOf(): mencari indeks kode.
console.log(
    `indexOf("${kodeContoh}"):`,
    laporan.kodeLunas.indexOf(kodeContoh)
);

// slice(): mengambil dua kode pertama tanpa mengubah array asli.
const duaKodePertama = laporan.kodeLunas.slice(0, 2);

console.log("Dua kode pertama:", duaKodePertama);
console.log("Array asli setelah slice:", laporan.kodeLunas);

// splice(): menghapus kode pertama dari salinan array.
const salinanKode = laporan.kodeLunas.slice();

const kodeTerhapus = salinanKode.splice(0, 1);

console.log("Kode yang dihapus dari salinan:", kodeTerhapus);
console.log("Salinan setelah splice:", salinanKode);
console.log("Array asli setelah splice:", laporan.kodeLunas);

//=== Daftar Transaksi Ditolak ===

console.log("\nDAFTAR TRANSAKSI DITOLAK");
console.table(laporan.daftarDitolak);

//=== Menu Stok Menipis ===

console.log("\nMENU DENGAN STOK KURANG DARI 3");
console.log(laporan.menuStokMenipis);

//=== Object Laporan Lengkap ===

console.log("\nOBJECT LAPORAN LENGKAP");
console.log(laporan);

/*
Pertanyaan:
1. Object digunakan untuk menyimpan nama menu dan jumlah
   yang terjual. Dengan begitu, jumlah penjualan bisa dicari
   berdasarkan nama menu.

   Bracket notation digunakan karena nama menu diambil
   dari variabel item.menu.

2. Object.keys() mengambil nama properti dari object.
   Object.values() mengambil nilai dari properti tersebut.

   Dalam kode ini:
   - Object.keys() menampilkan nama menu.
   - Object.values() menampilkan jumlah yang terjual.

3. includes(), indexOf(), dan slice() tidak mengubah array asli.
   Sedangkan splice() mengubah array yang digunakan.

   Karena splice() digunakan pada salinan array, array
   kodeLunas yang asli tetap aman dan tidak berubah.

4. toFixed() menghasilkan teks (string), bukan angka.
   Karena rataRata harus berupa angka, hasilnya diubah
   menggunakan Number() agar bisa dihitung dengan benar.

5. Jika ringkasan kode transaksi LUNAS dibuat dengan benar,
   jumlah kode akan sama dengan jumlahLunas dan hasilnya true.

   Jika ringkasan kosong, jumlahnya dihitung sebagai 0.
   Pemisah ", " digunakan agar kode transaksi bisa dipisahkan
   dan dihitung kembali menggunakan split().
*/
