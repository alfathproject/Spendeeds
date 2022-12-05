/* eslint-disable no-undef */
import './feedback-item';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel';

class FeedbacksSection extends HTMLElement {
  connectedCallback() {
    this.render();

    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      center: true,
      margin: 24,
      dots: true,
      loop: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
      },
    });
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
