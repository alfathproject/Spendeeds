class FeedbackItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <img class="border rounded-circle p-2 mx-auto mb-3" src="./img/testimonials/testimonial-1.jpg" alt="Avatar Penulis" style="width: 80px; height: 80px;">
      <h5 class="mb-0">Anggie</h5>
      <p>Pekerja</p>
      <div class="testimonial-text bg-light text-center p-4">
        <p class="mb-0">Aplikasi yang sangat berkualitas dan memberikan rekomendasi sekolah dengan baik.</p>
      </div>`;
  }
}

customElements.define('feedback-item', FeedbackItem);
