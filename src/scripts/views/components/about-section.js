class AboutSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-6 wow animate__animated animate__fadeInLeft" data-wow-delay="0.1s" style="min-height: 400px;">
            <div class="position-relative h-100">
              <img class="img-fluid position-absolute w-100 h-100" src="./img/spendeeds/logo/Spendeeds-Light-Icon.png" alt="Gambar Perusahaan" style="object-fit: cover;">
            </div>
          </div>
          <div class="col-lg-6 wow animate__animated animate__fadeInRight" data-wow-delay="0.3s">
            <h6 class="section-title bg-white text-start text-primary pe-3">Selamat Datang</h6>
            <h1 class="mb-4">Tentang Spendeeds</h1>
            <p class="mb-4">Spendeeds adalah sebuah aplikasi yang memberikan kemudahan bagi pelajar penyandang disabilitas agar dapat menentukan pendidikan sesuai dengan kualitas dan kebutuhan pelajar.</p>
            <p class="mb-4">Dengan adanya Spendeeds dapat menentukan pendidikan inklusif Sekolah Luar Biasa yang ada di wilayah Jakarta dengan mempertimbangkan jarak, popularitas, dan akreditasi sekolah dengan kualitas sekolah sebagai berikut :</p>
            <div class="row gy-2 gx-4 mb-4">
              <div class="col-sm-6">
                <p class="mb-0"><i class="bi bi-arrow-right text-primary me-2"></i>Pengajar Berkualitas</p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0"><i class="bi bi-arrow-right text-primary me-2"></i>Kelas Profesional</p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0"><i class="bi bi-arrow-right text-primary me-2"></i>Bersertifikat International</p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0"><i class="bi bi-arrow-right text-primary me-2"></i>Latihan Proyek</p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0"><i class="bi bi-arrow-right text-primary me-2"></i>Perpustakaan</p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0"><i class="bi bi-arrow-right text-primary me-2"></i>Pengembangan Skill</p>
              </div>
            </div>
            <!-- <a class="btn btn-primary py-3 px-5 mt-2" href="/#/">Read More</a> -->
          </div>
        </div>
      </div>`;
  }
}

customElements.define('about-section', AboutSection);
