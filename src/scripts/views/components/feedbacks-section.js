import './feedback-item';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel';

class FeedbacksSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <div class="text-center">
          <h6 class="section-title bg-white text-center text-primary px-3">Testimonial</h6>
          <h1 class="mb-5">User Feedbacks!</h1>
        </div>
        <div class="owl-carousel testimonial-carousel position-relative">
          <feedback-item class="testimonial-item text-center"></feedback-item>
          <feedback-item class="testimonial-item text-center"></feedback-item>
          <feedback-item class="testimonial-item text-center"></feedback-item>
          <feedback-item class="testimonial-item text-center"></feedback-item>
          <feedback-item class="testimonial-item text-center"></feedback-item>
        </div>
      </div>`;
  }
}

customElements.define('feedbacks-section', FeedbacksSection);
