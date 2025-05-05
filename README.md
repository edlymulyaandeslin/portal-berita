# 📰 Portal Berita

Portal Berita adalah aplikasi web untuk menampilkan dan mengelola berita terkini secara dinamis. Aplikasi ini dibangun menggunakan **Laravel** sebagai backend dan **React.js** sebagai frontend melalui **Inertia.js**, serta menggunakan **Tailwind CSS** untuk styling modern yang responsif.

---

## 🚀 Fitur Utama

-   Menampilkan daftar berita dengan pagination
-   Berita utama ditampilkan secara menonjol (highlight)
-   Halaman detail berita lengkap dengan gambar dan sumber
-   Desain responsif dan user-friendly
-   Integrasi komponen dinamis berbasis React
-   Siap dikembangkan menjadi portal berita profesional

---

## 🧰 Teknologi yang Digunakan

-   **[Laravel 10.x](https://laravel.com/)** — Framework PHP modern
-   **[Inertia.js](https://inertiajs.com/)** — Penghubung frontend React dan backend Laravel tanpa API
-   **[React](https://react.dev/)** — UI library modern untuk SPA
-   **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS framework
-   **[Vite](https://vitejs.dev/)** — Build tool cepat untuk frontend modern

---

## 📦 Cara Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/username/portal-berita.git
cd portal-berita
```

### 2. Install Dependency

```bash
composer install
npm install
```

### 3. Setup Environment

```bash
cp .env.example .env
php artisan key:generate
```

### 4. Jalankan Migration

```bash
php artisan migrate
```

#### or

```bash
php artisan migrate --seed
```

### 5. Jalankan Server

```bash
composer run dev
```
