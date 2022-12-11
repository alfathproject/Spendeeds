/* eslint-disable array-callback-return */
import './feedback-item';

class FeedbackList extends HTMLElement {
  /**
   * @param {any} feedbacks
   */
  set feedbacks(feedbacks) {
    this._feedbacks = feedbacks;

    this.render();
  }

  render() {
    this.innerHTML = '';

    if (typeof this._feedbacks !== 'undefined' && this._feedbacks.length) {
      this._feedbacks.map((feedback) => {
        const feedbackItem = document.createElement('feedback-item');
        feedbackItem.feedback = feedback;

        feedbackItem.classList.add(
          'testimonial-item',
          'text-center',
        );

        this.appendChild(feedbackItem);
      });
    } else {
      this.innerHTML = `
        <div class="col wow animate__animated animate__bounceInDown alert alert-info alert-dismissible fade show text-center h5" role="alert">
          <i class="bi bi-info-circle me-1"></i>
          <strong>Oopss!</strong> Feedback belum tersedia.
        </div>`;
    }
  }
}

customElements.define('feedback-list', FeedbackList);
