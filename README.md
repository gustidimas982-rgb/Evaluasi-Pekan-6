# Evaluasi Pekan 6 — Kedai Senja

## Deskripsi Proyek

Proyek ini merupakan aplikasi simulasi kasir sederhana untuk Kedai Senja menggunakan JavaScript. Proyek ini dibuat untuk mempraktikkan pengolahan data, pembersihan data, perhitungan transaksi, pembuatan laporan, latihan logika pemrograman, perbaikan kode, serta eksperimen untuk memahami perilaku JavaScript.

## Cara Menjalankan

1. Unduh atau clone repositori GitHub `evaluasi-pekan-6`.
2. Buka folder proyek menggunakan Visual Studio Code atau editor kode lainnya.
3. Jalankan setiap halaman HTML dengan membukanya di browser. Bisa juga menggunakan ekstensi Live Server di Visual Studio Code.
4. Buka Developer Tools pada browser dengan menekan `F12`, lalu pilih tab **Console** untuk melihat hasil program.

Halaman yang tersedia:

- `index.html` — pengolahan data, simulasi mesin kasir, dan laporan harian.
- `logika.html` — latihan logika menggunakan fungsi dan perulangan JavaScript.
- `perbaikan.html` — demonstrasi perbaikan kesalahan kode.
- `eksperimen.html` — prediksi hasil kode dan eksperimen perilaku JavaScript.

Setiap halaman HTML menjalankan file JavaScript masing-masing.

## Teknologi yang Digunakan

- **HTML5** untuk struktur halaman.
- **JavaScript** untuk logika program, pengolahan data, simulasi transaksi, dan eksperimen.
- **Git** untuk mengelola versi kode.
- **GitHub** untuk menyimpan repositori dan mengelola Pull Request.

## Penulis

[Nama Kamu]

## Riwayat Commit

Hasil perintah `git log --oneline --graph`:

```text
[TEMPEL HASIL ASLI DARI TERMINAL DI SINI]
```

## Jawaban Pertanyaan

### 1. Kenapa pekerjaan dibagi ke banyak branch, bukan semuanya di `main`?

Pekerjaan dibagi ke beberapa branch agar setiap bagian dapat dikerjakan secara terpisah dan lebih teratur. Misalnya, fitur mesin kasir dapat dikembangkan di branch tersendiri tanpa langsung mengubah kode utama. Cara ini memudahkan pengujian, pelacakan perubahan, dan perbaikan kesalahan. Setelah pekerjaan selesai dan diperiksa, perubahan dapat digabungkan ke branch `main`.

### 2. Apa fungsi `.gitignore` dan apa yang dimasukkan ke dalamnya?

File `.gitignore` digunakan untuk menentukan file atau folder yang tidak perlu dilacak dan dimasukkan ke dalam commit Git. File ini membantu menjaga repositori tetap bersih serta mencegah file sementara atau file lokal yang tidak diperlukan ikut terunggah.

Dalam proyek ini, `.gitignore` dapat berisi file dan folder seperti:

- `node_modules/`, jika folder tersebut digunakan.
- `.vscode/`, jika pengaturan editor bersifat pribadi.
- File sistem seperti `.DS_Store` dan `Thumbs.db`.
- File log seperti `*.log`.

File utama proyek, seperti HTML, JavaScript, `README.md`, dan `.gitignore`, tidak boleh diabaikan.

### 3. Apa beda merge lokal dengan Pull Request di GitHub?

Merge lokal dilakukan di komputer menggunakan Git untuk menggabungkan perubahan dari satu branch ke branch lain. Proses ini dapat dilakukan melalui terminal tanpa harus membuat Pull Request.

Pull Request (PR) dilakukan melalui GitHub untuk mengusulkan agar perubahan dari suatu branch digabungkan ke branch tujuan. PR memungkinkan perubahan ditinjau, didiskusikan, dan diperiksa sebelum digabungkan. Dalam proyek ini, branch `docs/tebak-jelaskan` harus digabungkan melalui Pull Request di GitHub sesuai instruksi tugas.