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
              <img class="img-fluid position-absolute w-100 h-100" src="./img/spendeeds/about.jpg" alt="Gambar Perusahaan" style="object-fit: cover;">
            </div>
          </div>
          <div class="col-lg-6 wow animate__animated animate__fadeInRight" data-wow-delay="0.3s">
            <h6 class="section-title bg-white text-start text-primary pe-3">About Us</h6>
            <h1 class="mb-4">Welcome to Spendeeds</h1>
            <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
            <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <div class="row gy-2 gx-4 mb-4">
              <div class="col-sm-6">
                <p class="mb-0"><i class="bi bi-arrow-right text-primary me-2"></i>Skilled Headmasters</p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0"><i class="bi bi-arrow-right text-primary me-2"></i>Professional Classes</p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0"><i class="bi bi-arrow-right text-primary me-2"></i>International Certificate</p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0"><i class="bi bi-arrow-right text-primary me-2"></i>Home Projects</p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0"><i class="bi bi-arrow-right text-primary me-2"></i>Book Library</p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0"><i class="bi bi-arrow-right text-primary me-2"></i>Professional Classes</p>
              </div>
            </div>
            <!-- <a class="btn btn-primary py-3 px-5 mt-2" href="/#/">Read More</a> -->
          </div>
        </div>
      </div>`;
  }
}

customElements.define('about-section', AboutSection);
