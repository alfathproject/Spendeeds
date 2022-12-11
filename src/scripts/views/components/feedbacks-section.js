import './feedback-list';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel';

class FeedbacksSection extends HTMLElement {
  /**
   * @param {any} schools
   */
  set feedbacks(feedbacks) {
    this._feedbacks = feedbacks;

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <div class="text-center">
          <h6 class="section-title bg-white text-center text-primary px-3">Testimonial</h6>
          <h1 class="mb-5">Feedback Pengguna!</h1>
        </div>
        <feedback-list class="owl-carousel testimonial-carousel position-relative"></feedback-list>
      </div>`;

    const feedbackList = document.querySelector('feedback-list');
    feedbackList.feedbacks = this._feedbacks;
  }
}

customElements.define('feedbacks-section', FeedbacksSection);
