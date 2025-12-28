# UAS-WEB
UAS PEMROGRAMAN WEB
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body>
<header class="navbar">
  <h1 class="logo">MyPortfolio</h1>
  <nav>
    <a href="#home">Home</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#skills">Skills</a>
    <a href="#contact">Contact</a>
  </nav>
</header>
<section id="home" class="hero">
  <div class="hero-container">
    <div class="hero-photo">
      <img src="Gambar WhatsApp 2025-12-12 pukul 15.06.07_0f8dd8ef.jpg" alt="Foto Profil">
    </div>
    <div class="hero-content">
      <h3>Profile</h3>
      <h1>Muhammad Rizqi Rahman</h1>
      <p about class="about">Adalah mahasiswa Universitas Pamulang, Fakultas Ilmu Komputer, Program Studi Sistem Informasi. Portofolio ini saya buat sebagai representasi kemampuan, pengalaman, dan proyek yang telah saya kembangkan di bidang teknologi informasi dan pengembangan website.</p>
      <button onclick="scrollToPortfolio()">Lihat Karya Saya</button>
    </div>
  </div>
</section>
<section id="portfolio" class="portfolio">
  <h2>Portofolio</h2>
  <div class="portfolio-grid">
    <div class="card">
      <img src="Cuplikan layar 2025-09-20 132239.png" alt="Project 1">
      <h3>Project 1</h3>
      <p>Membuat website dasar sederhana unpam.</p>
      <div class="card-btn">
      </div>
    </div>
    <div class="card">
      <img src="Cuplikan layar 2025-11-06 143743.png" alt="Project 2">
      <h3>Project 2</h3>
      <p>Membuat tampilan sederhana untuk lerning.</p>
      <div class="card-btn">
      </div>
    </div>
    <div class="card">
      <img src="Cuplikan layar 2025-12-16 093832.png" alt="Project 3">
      <h3>Project 3</h3>
      <p>Membuat website sederhana UTS menggunakan html dan css.</p>
      <div class="card-btn">
      </div>
    </div>
  </div>
</section>
<section id="skills" class="skills">
  <h2>Skills</h2>
  <div class="skill-list">
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
  </div>
</section>
<section id="contact" class="contact">
  <h2>Contact Me</h2>
  <form>
    <input type="text" placeholder="Nama">
    <input type="email" placeholder="Email">
    <textarea placeholder="Pesan"></textarea>
    <button type="submit">Kirim Pesan</button>
  </form>
</section>
<footer>
  <p>© 2025 Muhammad Rizqi Rahman</p>
</footer>
<script src="script.js"></script>
</body>
</html>

