//==== Bagian 7 ====

// Nama: Gusti Dimas Achmad
// Tanggal: 17 Oktober 2026
// Tujuan: Menebak, menguji, dan menjelaskan perilaku JavaScript.

//=== 7.1 Tebak ===

//== Potongan A ==

// Tebakan A1: 8, karena trim menghapus spasi di ujung, lalu length menghitung jumlah karakter "Hai Kawan".
console.log("  Hai Kawan  ".trim().length);
// Hasil asli: 9

// Tebakan A2: "KOPI", karena teks diubah menjadi huruf besar sebelum slice mengambil indeks 0 sampai sebelum 4.
console.log("Kopi Susu".toUpperCase().slice(0, 4));
// Hasil asli: "KOPI"

// Tebakan A3: 3, karena split menghasilkan tiga bagian.
console.log("a,b,c".split(",").length);
// Hasil asli: 3

// Tebakan A4: "bonana", karena replace mengganti kemunculan pertama.
console.log("banana".replace("a", "o"));
// Hasil asli: "bonana"

// Tebakan A5: "bonono", karena replaceAll mengganti semua huruf a.
console.log("banana".replaceAll("a", "o"));
// Hasil asli: "bonono"

// Tebakan A6: 42, karena parseInt membaca angka sampai karakter nonangka.
console.log(parseInt("42px"));
// Hasil asli: 42

// Tebakan A7: NaN, karena Number tidak bisa mengonversi seluruh "42px".
console.log(Number("42px"));
// Hasil asli: NaN

// Tebakan A8: 3, karena parseInt berhenti pada titik desimal.
console.log(parseInt("3.99"));
// Hasil asli: 3

// Tebakan A9: "string", karena toFixed mengembalikan teks.
console.log(typeof (3.14159).toFixed(2));
// Hasil asli: "string"

// Tebakan A10: "0.30", karena toFixed(2) membulatkan hasil ke dua desimal.
console.log((0.1 + 0.2).toFixed(2));
// Hasil asli: "0.30"

// Tebakan A11: "1010", karena perkalian dilakukan lebih dahulu,
// lalu string "10" digabung dengan hasil angka 10.
console.log("10" + 5 * 2);
// Hasil asli: "1010"

// Tebakan A12: true, karena !0 adalah true dan !"" juga true, sehingga true && true menghasilkan true.
console.log(!0 && !"");
// Hasil asli: true

//== Potongan B ==

let angka = [10, 20, 30, 40];
let potongan = angka.slice(1, 3);
let hapus = angka.splice(1, 2);

// Tebakan B1: [20, 30], karena slice mengambil indeks 1 dan 2.
console.log(potongan);
// Hasil asli: [20, 30]

// Tebakan B2: [20, 30], karena splice mengambil dua elemen mulai indeks 1 dan mengembalikan elemen yang dihapus.
console.log(hapus);
// Hasil asli: [20, 30]

// Tebakan B3: [10, 40], karena splice menghapus 20 dan 30 dari array asli setelah slice selesai.
console.log(angka);
// Hasil asli: [10, 40]

function ganda(n) {
    return n * 2;
}

function cetak(n) {
    console.log(n * 2);
}

// Tebakan B4: 10, karena ganda(4) menghasilkan 8 dan ganda(1) menghasilkan 2; 8 + 2 = 10.
console.log(ganda(4) + ganda(1));
// Hasil asli: 10

function cetakSementara(n) {
    console.log(n * 2);
}

// Tebakan B5: dua baris, yaitu 8 lalu undefined.
// cetak(4) mencetak 8, tetapi tidak mengembalikan nilai.
console.log(cetak(4));
// Hasil asli:
// 8
// undefined

const toko = {
    nama: "Senja",
    stok: 5,
    jual(n) {
        this.stok -= n;
        return this.stok;
    },
};

toko.jual(2);

// Tebakan B6: 2, karena stok 5 dikurangi 2 pada pemanggilan pertama, lalu dikurangi 1 pada pemanggilan kedua.
console.log(toko.jual(1));
// Hasil asli: 2

// Tebakan B7: true, karena properti stok ada pada object toko.
console.log("stok" in toko);
// Hasil asli: true

// Tebakan B8-B10: nama, stok, jual.
// for...in menampilkan kunci properti object satu per satu.
for (let k in toko) {
    console.log(k);
}
// Hasil asli:
// nama
// stok
// jual

//== Potongan C ==

let hasil = "";

for (let i = 1; i <= 6; i++) {
    if (i === 2) {
        continue;
    }
    if (i === 5) {
        break;
    }
    hasil += i;
}

// Tebakan C1: "134", karena i=2 dilewati dan perulangan berhenti ketika i mencapai 5.
console.log(hasil);
// Hasil asli: "134"

let n = 3;
let kali = 1;

while (n > 0) {
    kali *= n;
    n--;
}

// Tebakan C2: 6, karena kali menjadi 1*3*2*1.
console.log(kali);
// Hasil asli: 6

let x = 0;

do {
    x += 5;
} while (x < 3);

// Tebakan C3: 5, karena do...while menjalankan blok dahulu sebelum mengecek kondisi.
console.log(x);
// Hasil asli: 5

// Tebakan C4-C6: AA, Bb, Cc.
// for...of membaca tiap karakter, lalu toLowerCase membuat salinan huruf kecil untuk digabungkan.
for (let huruf of "ABC") {
    console.log(huruf + huruf.toLowerCase());
}
// Hasil asli:
// Aa
// Bb
// Cc

//=== 7.2 Eksperiment ===

console.log("\n===== EKSPERIMEN 1: HOISTING FUNCTION =====");

// Function declaration bisa dipanggil sebelum definisi.
console.log(tambahDeclaration(2, 3)); // Hasil: 5

function tambahDeclaration(a, b) {
    return a + b;
}

// Function expression const belum dapat dipakai sebelum inisialisasi.
// Jika baris berikut diaktifkan sebelum deklarasi const di bawah,
// akan muncul ReferenceError karena temporal dead zone.
//
// console.log(tambahExpression(2, 3));
// Error: ReferenceError: Cannot access 'tambahExpression'
// before initialization

const tambahExpression = function (a, b) {
    return a + b;
};

console.log(tambahExpression(2, 3)); // Hasil: 5


console.log("\n===== EKSPERIMEN 2: SLICE VS SPLICE =====");

const daftarAsli = [1, 2, 3, 4];
const hasilSlice = daftarAsli.slice(1, 3);

console.log("Hasil slice:", hasilSlice);       // [2, 3]
console.log("Asli setelah slice:", daftarAsli); // [1, 2, 3, 4]

const hasilSplice = daftarAsli.splice(1, 2);

console.log("Hasil splice:", hasilSplice);       // [2, 3]
console.log("Asli setelah splice:", daftarAsli); // [1, 4]


console.log("\n===== EKSPERIMEN 3: for...in VS for...of =====");

const buah = ["apel", "jeruk", "mangga"];

for (const indeks in buah) {
    console.log("for...in:", indeks, typeof indeks);
}
// Hasil: indeks berupa teks "0", "1", "2".

for (const nilai of buah) {
    console.log("for...of:", nilai);
}
// Hasil: "apel", "jeruk", "mangga".

console.log("typeof indeks array:", typeof Object.keys(buah)[0]);
// Hasil: "string"


console.log("\n===== EKSPERIMEN 4: toFixed MENGHASILKAN STRING =====");

const hasilToFixed = (5).toFixed(1);

console.log("Nilai toFixed:", hasilToFixed); // "5.0"
console.log("Tipe:", typeof hasilToFixed);   // "string"
console.log("(5).toFixed(1) + 1:", (5).toFixed(1) + 1);
// Hasil: "5.01", bukan 6.1


console.log("\n===== EKSPERIMEN 5: NILAI FALSY DAN TRUTHY =====");

const nilaiFalsy = [
    ["false", false],
    ["0", 0],
    ['""', ""],
    ["null", null],
    ["undefined", undefined],
    ["NaN", NaN],
];

for (const [nama, nilai] of nilaiFalsy) {
    if (nilai) {
        console.log(nama + " masuk if");
    } else {
        console.log(nama + " tidak masuk if");
    }
}
// Keenam nilai tersebut tidak masuk ke cabang if.

const nilaiTruthy = [
    ['"0"', "0"],
    ["[]", []],
    ["{}", {}],
];

for (const [nama, nilai] of nilaiTruthy) {
    if (nilai) {
        console.log(nama + " masuk if");
    } else {
        console.log(nama + " tidak masuk if");
    }
}
// Ketiganya masuk ke cabang if karena truthy.

/*
Pertanyaan:
1. Perkalian dikerjakan lebih dulu, jadi 5 * 2 = 10.
   Setelah itu, "10" + 10 menggabungkan teks dan angka.
   Hasilnya adalah "1010", bukan 20.


2. slice() membuat array baru tanpa mengubah array asli.
   splice() menghapus atau mengubah isi array asli.

   Keduanya bisa menghasilkan [20, 30], tetapi cara kerjanya
   berbeda.


3. cetak(4) mencetak angka 8 dari dalam function.
   Karena tidak ada return, hasil function adalah undefined.
   Akibatnya, console.log luar mencetak undefined juga.


4. - i = 1: hasil menjadi "1".
   - i = 2: dilewati oleh continue.
   - i = 3: hasil menjadi "13".
   - i = 4: hasil menjadi "134".
   - i = 5: perulangan berhenti karena break.

   Jadi, hasil akhirnya adalah "134".

5. do...while menjalankan kode dulu, baru memeriksa kondisi.
   Nilai x awalnya 0, lalu bertambah menjadi 5.
   Karena kondisi x < 3 salah, perulangan berhenti.
   Jadi, kode tetap berjalan satu kali.
*/