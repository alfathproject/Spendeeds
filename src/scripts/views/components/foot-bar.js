class FootBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container py-5">
        
        <div class="row g-5">
          <div class="col-lg-3 col-md-6 d-flex justify-content-center align-items-center">
            <img src="./img/spendeeds/logo/Spendeeds-Dark.png" alt="Logo Aplikasi" class="w-75">
          </div>
          <div class="col-lg-6 col-md-6">
            <h4 class="text-white mb-3">Akses Cepat</h4>
            <div class ="row g-2">
              <div class="col-lg-6">
                <a class="btn btn-link" href="/#/"><i class="bi bi-chevron-right me-2" style="font-size: .7rem;"></i>Home</a>
                <a class="btn btn-link" href="/#/schools"><i class="bi bi-chevron-right me-2" style="font-size: .7rem;"></i>Daftar Sekolah</a>
                <a class="btn btn-link" href="/#/categories"><i class="bi bi-chevron-right me-2" style="font-size: .7rem;"></i>Kategori Sekolah</a>
                <a class="btn btn-link" href="/#/favorites"><i class="bi bi-chevron-right me-2" style="font-size: .7rem;"></i>Sekolah Favorit</a>
              </div>
              <div class="col-lg-6">
                <a class="btn btn-link" href="/#/feedbacks"><i class="bi bi-chevron-right me-2" style="font-size: .7rem;"></i>Feedback Pengguna</a>
                <a class="btn btn-link" href="/#/about"><i class="bi bi-chevron-right me-2" style="font-size: .7rem;"></i>Tentang</a>
                <a class="btn btn-link" href="/#/contact"><i class="bi bi-chevron-right me-2" style="font-size: .7rem;"></i>Kontak Kami</a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h4 class="text-white mb-3">Kontak</h4>
            <p class="mb-2"><i class="bi bi-geo-alt-fill me-3"></i>Jl Kemanggisan Ilir, DKI Jakarta</p>
            <p class="mb-2"><i class="bi bi-telephone-fill me-3"></i>0-21-530-7714</p>
            <p class="mb-2"><i class="bi bi-envelope-fill me-3"></i>email@gmail.com</p>
            <div class="d-flex pt-2">
              <a class="btn btn-outline-light btn-social" href="#"><i class="bi bi-twitter"></i></a>
              <a class="btn btn-outline-light btn-social" href="#"><i class="bi bi-facebook"></i></a>
              <a class="btn btn-outline-light btn-social" href="#"><i class="bi bi-youtube"></i></a>
              <a class="btn btn-outline-light btn-social" href="#"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="copyright">
          <div class="row">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
              Copyright &copy; 2022, All Right Reserved.
            </div>
            <div class="col-md-6 text-center text-md-end">
              <div class="footer-menu">
                <a href="/#/terms-and-conditions">Term & Conditions</a>
                <a href="/#/">Help</a>
                <a href="/#/frequently-asked-questions">FAQs</a>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }
}

customElements.define('foot-bar', FootBar);
