class HeadBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="/#/" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <img src="./img/spendeeds/logo/Speendeeds-Light-Landscape.png" alt="Logo Aplikasi" height="120">
      </a>
      <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0">
          <a href="/#/" class="nav-item nav-link active">Beranda</a>
          <div class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Fitur<i class="bi bi-chevron-down ms-2" style="font-size: .7rem; font-weight: 800;"></i></a>
            <div class="dropdown-menu fade-down m-0">
              <a href="/#/schools" class="dropdown-item">Daftar Sekolah</a>
              <a href="/#/categories" class="dropdown-item">Kategori Sekolah</a>
              <a href="/#/favorites" class="dropdown-item">Sekolah Favorit</a>
            </div>
          </div>
          <a href="/#/about" class="nav-item nav-link">Tentang</a>
          <a href="/#/contact" class="nav-item nav-link">Kontak Kami</a>
        </div>
        <a href="/#/schools" class="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Cari Sekarang<i class="bi bi-arrow-right ms-3"></i></a>
      </div>`;
  }
}

customElements.define('head-bar', HeadBar);
