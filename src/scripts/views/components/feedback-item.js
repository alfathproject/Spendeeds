class FeedbackItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <img class="border rounded-circle p-2 mx-auto mb-3" src="./img/testimonials/testimonial-1.jpg" alt="Avatar Penulis" style="width: 80px; height: 80px;">
      <h5 class="mb-0">Lorem Ipsum</h5>
      <p>Profession</p>
      <div class="testimonial-text bg-light text-center p-4">
        <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
      </div>`;
  }
}

customElements.define('feedback-item', FeedbackItem);
