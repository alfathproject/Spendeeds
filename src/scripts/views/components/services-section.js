class ServicesSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-3 col-sm-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
            <div class="service-item text-center pt-3">
              <div class="p-4">
                <i class="bi bi-mortarboard-fill text-primary mb-4" style="font-size: 3rem;"></i>
                <h5 class="mb-3">Skilled Headmasters</h5>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
            <div class="service-item text-center pt-3">
              <div class="p-4">
                <i class="bi bi-person-workspace text-primary mb-4" style="font-size: 3rem;"></i>
                <h5 class="mb-3">Professional Classes</h5>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
            <div class="service-item text-center pt-3">
              <div class="p-4">
                <i class="bi bi-house-check text-primary mb-4" style="font-size: 3rem;"></i>
                <h5 class="mb-3">Home Projects</h5>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.7s">
            <div class="service-item text-center pt-3">
              <div class="p-4">
                <i class="bi bi-book text-primary mb-4" style="font-size: 3rem;"></i>
                <h5 class="mb-3">Book Library</h5>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }
}

customElements.define('services-section', ServicesSection);
