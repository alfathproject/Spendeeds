class CategoriesSection extends HTMLElement {
  /**
   * @param {any} schools
   */
  set categories(categories) {
    this._id1 = categories[0].id;
    this._kategori1 = categories[0].kategori;
    this._gambar1 = categories[0].gambar;

    this._id2 = categories[1].id;
    this._kategori2 = categories[1].kategori;
    this._gambar2 = categories[1].gambar;

    this._id3 = categories[2].id;
    this._kategori3 = categories[2].kategori;
    this._gambar3 = categories[2].gambar;

    this._id4 = categories[3].id;
    this._kategori4 = categories[3].kategori;
    this._gambar4 = categories[3].gambar;

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
                <a class="position-relative d-block overflow-hidden" href="/#/category/${this._id1}">
                  <img class="img-fluid" src="./img/categories/${this._gambar1}" alt="Kategori ${this._kategori1}">
                  <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style="margin: 1rem;">
                    <h5 class="mb-0">${this._kategori1}</h5>
                  </div>
                </a>
              </div>
              <div class="col-lg-6 col-md-12 wow animate__animated animate__zoomIn" data-wow-delay="0.3s">
                <a class="position-relative d-block overflow-hidden" href="/#/category/${this._id2}">
                  <img class="img-fluid" src="./img/categories/cat-1.jpg" alt="Kategori ${this._kategori2}">
                  <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style="margin: 1rem;">
                    <h5 class="mb-0">${this._kategori2}</h5>
                  </div>
                </a>
              </div>
              <div class="col-lg-6 col-md-12 wow animate__animated animate__zoomIn" data-wow-delay="0.5s">
                <a class="position-relative d-block overflow-hidden" href="/#/category/${this._id3}">
                  <img class="img-fluid" src="./img/categories/cat-1.jpg" alt="Kategori ${this._kategori3}">
                  <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style="margin: 1rem;">
                    <h5 class="mb-0">${this._kategori3}</h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 wow animate__animated animate__zoomIn" data-wow-delay="0.7s"
            style="min-height: 350px;">
            <a class="position-relative d-block h-100 overflow-hidden" href="/#/category/${this._id4}">
              <img class="img-fluid position-absolute w-100 h-100" src="./img/categories/cat-1.jpg"
                alt="Kategori ${this._kategori4}" style="object-fit: cover;">
              <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style="margin:  1rem;">
                <h5 class="mb-0">${this._kategori4}</h5>
              </div>
            </a>
          </div>
        </div>
      </div>`;
  }
}

customElements.define('categories-section', CategoriesSection);
