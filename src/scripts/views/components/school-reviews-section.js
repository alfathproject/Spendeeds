import './review-list';
import ReviewFormInitiator from '../../utils/review-form-initiator';

class SchoolReviewsSectioin extends HTMLElement {
  /**
   * @param {any} data
   */
  set reviews({ reviews, schoolID }) {
    this._reviews = reviews;
    this._schoolID = schoolID;

    this.render();
  }

  render() {
    this.innerHTML = `
      <!-- Review Form -->
      <div class="container-xxl pt-0 pb-5">
        <div class="container">
          <div class="text-center wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
            <h6 class="section-title bg-white text-center text-primary px-3 mb-4">Review Sekolah</h6>
          </div>
          <div class="row g-4">
            <div class="col wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
              <form class="reviewForm" enctype="application/json" method="post">
                <div class="row g-3">
                  <div class="col-md-3">
                    <div class="form-floating">
                      <input type="text" name="name" class="form-control" id="name" placeholder="Nama Kamu ..">
                      <label for="name">Nama Anda</label>
                    </div>
                  </div>
                  <div class="col-9 col-md-6">
                    <div class="form-floating">
                      <input type="text" name="review" class="form-control" id="review" placeholder="Tinggalkan komentar disini ..">
                      <label for="review">Komentar</label>
                    </div>
                  </div>
                  <div class="col-3">
                    <button class="btn btn-primary w-100 h-100 fs-5" type="submit"><i class="bi bi-send-check me-md-3"></i><span class="d-none d-md-inline-block">Send Review</span></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <review-list id="reviewList" class="row g-4 justify-content-center mt-3"></review-list>
        </div>
      </div>`;

    const reviewList = document.querySelector('#reviewList');
    reviewList.reviews = this._reviews;

    document.querySelector('.reviewForm').addEventListener('submit', (e) => {
      e.preventDefault();

      const date = new Date();
      const y = date.getFullYear();
      const m = date.getMonth() + 1;
      const d = date.getDate();
      const dateString = `${y}/${m}/${d}`;

      const review = {
        nama: document.querySelector('input[name="name"]').value,
        komentar: document.querySelector('input[name="review"]').value,
        tanggal: dateString,
      };

      ReviewFormInitiator.init(review, this._schoolID);
    });
  }
}

customElements.define('school-reviews-section', SchoolReviewsSectioin);
