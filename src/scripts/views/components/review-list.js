/* eslint-disable array-callback-return */
import './review-item';

class ReviewList extends HTMLElement {
  /**
   * @param {any} reviews
   */
  set reviews(reviews) {
    this._reviews = reviews;

    this.render();
  }

  render() {
    this.innerHTML = '';

    if (typeof this._reviews !== 'undefined' && this._reviews.length) {
      this._reviews.map((review) => {
        const reviewItem = document.createElement('review-item');
        reviewItem.review = review;

        reviewItem.classList.add(
          'col-12',
          'wow',
          'animate__animated',
          'animate__fadeInUp',
        );
        reviewItem.setAttribute('data-wow-delay', '0.3s');

        this.appendChild(reviewItem);
      });
    } else {
      this.innerHTML = `
        <div class="col wow animate__animated animate__bounceInDown alert alert-info alert-dismissible fade show text-center h5" role="alert">
          <i class="bi bi-info-circle me-1"></i>
          <strong>Oopss!</strong> Belum memiliki review.
        </div>`;
    }
  }
}

customElements.define('review-list', ReviewList);
