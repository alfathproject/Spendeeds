import './review-list';

class SchoolReviewsSectioin extends HTMLElement {
  /**
   * @param {any} school
   */
  set reviews(reviews) {
    this._reviews = reviews;

    this.render();
  }

  render() {
    this.innerHTML = `
      <!-- Review Form -->
      <div class="container-xxl pt-0 pb-5">
        <div class="container">
          <div class="text-center wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
            <h6 class="section-title bg-white text-center text-primary px-3 mb-4">School Reviews</h6>
          </div>
          <div class="row g-4">
            <div class="col wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
              <form>
                <div class="row g-3">
                  <div class="col-md-3">
                    <div class="form-floating">
                      <input type="text" class="form-control" id="name" placeholder="Nama Kamu ..">
                      <label for="name">Nama Anda</label>
                    </div>
                  </div>
                  <div class="col-9 col-md-6">
                    <div class="form-floating">
                      <input type="text" class="form-control" id="name" placeholder="Tinggalkan komentar disini ..">
                      <label for="message">Komentar</label>
                    </div>
                  </div>
                  <div class="col-3">
                    <button class="btn btn-primary w-100 h-100 fs-5" type="submit"><i class="bi bi-send-check me-md-3"></i><span class="d-none d-md-inline-block">Send Review</span></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <review-list id="reviewList" class="row g-4 justify-content-center"></review-list>
        </div>
      </div>`;

    const reviewList = document.querySelector('#reviewList');
    reviewList.reviews = this._reviews;
  }
}

customElements.define('school-reviews-section', SchoolReviewsSectioin);
