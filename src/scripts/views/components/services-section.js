class ServicesSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-3 col-sm-6 h-100 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
            <div class="service-item text-center pt-3">
              <div class="p-4">
                <i class="bi bi-mortarboard-fill text-primary mb-4" style="font-size: 3rem;"></i>
                <h5 class="mb-3">Pengajar Berkualitas</h5>
                <p>Tenaga Pengajar yang berkualitas, profesional, dan mampu memberikan pengajaran yang memuaskan</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 h-100 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
            <div class="service-item text-center pt-3">
              <div class="p-4">
                <i class="bi bi-person-workspace text-primary mb-4" style="font-size: 3rem;"></i>
                <h5 class="mb-3">Kelas Profesional</h5>
                <p>Kegiatan belajar mengajar yang mengacu pada kurikulum yang berjalan dan direncanakan</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 h-100 wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
            <div class="service-item text-center pt-3">
              <div class="p-4">
                <i class="bi bi-house-check text-primary mb-4" style="font-size: 3rem;"></i>
                <h5 class="mb-3">Latihan Proyek</h5>
                <p>Proyek yang ditugaskan dapat memberikan latihan kepada pelajar agar dapat lebih meningkatkan skill yang dimiliki</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 h-100 wow animate__animated animate__fadeInUp" data-wow-delay="0.7s">
            <div class="service-item text-center pt-3">
              <div class="p-4">
                <i class="bi bi-book text-primary mb-4" style="font-size: 3rem;"></i>
                <h5 class="mb-3">Perpustakaan</h5>
                <p>Memiliki perpustakaan dengan koleksi buku lengkap, menarik, dan berguna bagi siswa</p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }
}

customElements.define('services-section', ServicesSection);
