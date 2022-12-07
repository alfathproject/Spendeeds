class CategoriesSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set categories(categories) {
    this._categories = categories;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <div class="text-center wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3">Categories</h6>
          <h1 class="mb-5">Schools Categories</h1>
        </div>
        <div class="row g-3">
          <div class="col-lg-7 col-md-6">
            <div class="row g-3">
              <div class="col-lg-12 col-md-12 wow animate__animated animate__zoomIn" data-wow-delay="0.1s">
                <a href="/#/acreditated" class="position-relative d-block overflow-hidden" href="/#/">
                  <img class="img-fluid" src="./img/cat-1.jpg" alt="">
                  <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style="margin: 1px;">
                    <h5 class="m-0">Acreditated</h5>
                    <small class="text-primary">${this._categories.acreditatedSchoolsNumber}</small>
                  </div>
                </a>
              </div>
              <div class="col-lg-6 col-md-12 wow animate__animated animate__zoomIn" data-wow-delay="0.3s">
                <a href="/#/popular" class="position-relative d-block overflow-hidden" href="/#/">
                  <img class="img-fluid" src="./img/cat-2.jpg" alt="">
                  <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style="margin: 1px;">
                    <h5 class="m-0">Most Popular</h5>
                    <small class="text-primary">${this._categories.popularSchoolsNumber}</small>
                  </div>
                </a>
              </div>
              <div class="col-lg-6 col-md-12 wow animate__animated animate__zoomIn" data-wow-delay="0.5s">
                <a href="/#/category/C" class="position-relative d-block overflow-hidden" href="/#/">
                  <img class="img-fluid" src="./img/cat-3.jpg" alt="">
                  <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style="margin: 1px;">
                    <h5 class="m-0">In West Jakarta</h5>
                    <small class="text-primary">C</small>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 wow animate__animated animate__zoomIn" data-wow-delay="0.7s" style="min-height: 350px;">
            <a href="/#/category/P" class="position-relative d-block h-100 overflow-hidden" href="/#/">
              <img class="img-fluid position-absolute w-100 h-100" src="./img/cat-4.jpg" alt="" style="object-fit: cover;">
              <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style="margin:  1px;">
                <h5 class="m-0">In South Jakarta</h5>
                <small class="text-primary">P</small>
              </div>
            </a>
          </div>
        </div>
      </div>`;
  }
}

customElements.define('categories-section', CategoriesSection);
