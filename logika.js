//==== Bagian 5 ====

// Nama: Gusti Dimas Achmad
// Tanggal: 17 Oktober 2026
// Tujuan: Melatih logika, perulangan, array, dan function.

//=== Function Hitung Faktorial ===

function hitungFaktorial(n) {
    if (n < 0) {
        return null;
    }

    let hasil = 1;
    let angka = 1;

    // while dipakai karena perulangan berjalan sampai angka mencapai n.
    while (angka <= n) {
        hasil *= angka;
        angka++;
    }

    return hasil;
}

//=== Function Cek Palindorm ===

function cekPalindrom(teks) {
    const teksBersih = teks.trim().toLowerCase();

    if (teksBersih.length === 0) {
        return false;
    }

    // Dua indeks bergerak dari ujung yang berlawanan.
    // Tidak menggunakan reverse().
    let kiri = 0;
    let kanan = teksBersih.length - 1;

    while (kiri < kanan) {
        if (teksBersih[kiri] !== teksBersih[kanan]) {
            return false;
        }

        kiri++;
        kanan--;
    }

    return true;
}

//=== Function Hitung Vokal ===

function hitungVokal(teks) {
    const teksKecil = teks.toLowerCase();
    const vokal = "aiueo";
    let jumlah = 0;

    for (const huruf of teksKecil) {
        if (vokal.includes(huruf)) {
            jumlah++;
        }
    }

    return jumlah;
}

//=== Function Cari Terbesar ===

function cariTerbesar(daftar) {
    if (daftar.length === 0) {
        return null;
    }

    let nilaiTerbesar = daftar[0];
    let indeksTerbesar = 0;

    // Mulai dari indeks 1 karena indeks 0 sudah menjadi nilai awal.
    for (let i = 1; i < daftar.length; i++) {
        if (daftar[i] > nilaiTerbesar) {
            nilaiTerbesar = daftar[i];
            indeksTerbesar = i;
        }
    }

    // Perbandingan menggunakan > membuat indeks pertama
    // tetap dipilih ketika nilai terbesar muncul lebih dari sekali.
    return {
        nilai: nilaiTerbesar,
        indeks: indeksTerbesar
    };
}

//=== Fuction Hapus Duplikat ===

function hapusDuplikat(daftar) {
    const hasil = [];

    for (const elemen of daftar) {
        // includes() memeriksa apakah elemen sudah ada di hasil.
        if (!hasil.includes(elemen)) {
            hasil.push(elemen);
        }
    }

    // Array hasil merupakan array baru.
    // Array daftar tidak diubah.
    return hasil;
}

//=== Function Cek Bilangan Prima ===

function cekBilanganPrima(n) {
    if (n < 2 || !Number.isInteger(n)) {
        return false;
    }

    let prima = true;

    // Cukup memeriksa pembagi sampai akar n.
    // Jika ditemukan pembagi, break menghentikan perulangan.
    for (let pembagi = 2; pembagi * pembagi <= n; pembagi++) {
        if (n % pembagi === 0) {
            prima = false;
            break;
        }
    }

    return prima;
}

//=== pengujian Semua Contoh ===

console.log("===== 1. HITUNG FAKTORIAL =====");
console.log("5 ->", hitungFaktorial(5));     // 120
console.log("0 ->", hitungFaktorial(0));     // 1
console.log("1 ->", hitungFaktorial(1));     // 1
console.log("-3 ->", hitungFaktorial(-3));   // null

console.log("\n===== 2. CEK PALINDROM =====");
console.log('"Katak" ->', cekPalindrom("Katak"));     // true
console.log('" Malam " ->', cekPalindrom(" Malam ")); // true
console.log('"Kopi" ->', cekPalindrom("Kopi"));       // false
console.log('"" ->', cekPalindrom(""));               // false

console.log("\n===== 3. HITUNG VOKAL =====");
console.log('"Kedai Senja" ->', hitungVokal("Kedai Senja")); // 5
console.log('"RHYTHM" ->', hitungVokal("RHYTHM"));            // 0
console.log('"Aiueo" ->', hitungVokal("Aiueo"));              // 5

console.log("\n===== 4. CARI TERBESAR =====");
console.log(
    "[12, 45, 7, 45, 30] ->",
    cariTerbesar([12, 45, 7, 45, 30])
); // { nilai: 45, indeks: 1 }

console.log("[3] ->", cariTerbesar([3])); // { nilai: 3, indeks: 0 }
console.log("[] ->", cariTerbesar([]));   // null

console.log("\n===== 5. HAPUS DUPLIKAT =====");

const angkaAsli = [1, 2, 2, 3, 1];
console.log("[1, 2, 2, 3, 1] ->", hapusDuplikat(angkaAsli));
// [1, 2, 3]
console.log("Array asli setelah function:", angkaAsli);
// [1, 2, 2, 3, 1]

const hurufAsli = ["a", "b", "a"];
console.log('["a", "b", "a"] ->', hapusDuplikat(hurufAsli));
// ["a", "b"]
console.log("Array asli setelah function:", hurufAsli);
// ["a", "b", "a"]

const daftarKosong = [];
console.log("[] ->", hapusDuplikat(daftarKosong));
// []
console.log("Array asli setelah function:", daftarKosong);
// []

console.log("\n===== 6. CEK BILANGAN PRIMA =====");
console.log("2 ->", cekBilanganPrima(2));   // true
console.log("17 ->", cekBilanganPrima(17)); // true
console.log("15 ->", cekBilanganPrima(15)); // false
console.log("1 ->", cekBilanganPrima(1));   // false
console.log("0 ->", cekBilanganPrima(0));   // false

//=== 
// 8. JAWABAN TEORI
// ==================================================

/*
1. LANGKAH-LANGKAH MENGHITUNG FAKTORIAL

   Contoh: hitungFaktorial(5)

   Awalnya, hasil = 1 dan angka = 1.

   Putaran 1: 1 × 1 = 1
   Putaran 2: 1 × 2 = 2
   Putaran 3: 2 × 3 = 6
   Putaran 4: 6 × 4 = 24
   Putaran 5: 24 × 5 = 120

   Setelah itu, angka menjadi 6 dan perulangan berhenti
   karena sudah lebih besar dari 5. Hasil akhirnya 120.


2. Function membuat array baru bernama hasil.
   Data asli hanya dibaca, tidak diubah atau dihapus.

   includes() digunakan untuk mengecek apakah data sudah ada.
   Jika belum ada, data ditambahkan ke array hasil dengan push().
   Karena yang diubah hanya array hasil, data asli tetap aman.


3. break menghentikan perulangan saat pembagi ditemukan.
   Jika dihapus, hasilnya tetap benar, tetapi program melakukan
   pemeriksaan tambahan sehingga bisa lebih lambat.


4. Array kosong tidak memiliki nilai terbesar.
   null digunakan untuk menandakan bahwa tidak ada hasil.
   Sementara itu, 0 adalah angka yang bisa menjadi nilai nyata.


5. Dua Jenis Perulangan Yang Digunakan

   a. while pada hitungFaktorial
      Digunakan untuk mengulang perkalian sampai kondisi salah.

   b. for...of pada hapusDuplikat
      Digunakan untuk memeriksa setiap elemen array tanpa
      perlu mengambil indeksnya.

   Selain itu, cariTerbesar menggunakan for karena membutuhkan
   indeks untuk mengetahui posisi nilai terbesar.
*/