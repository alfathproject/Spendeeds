class FeedbackItem extends HTMLElement {
  /**
   * @param {any} restaurant
   */
  set feedback(feedback) {
    this._nama = feedback.nama;
    this._feedback = feedback.feedback;
    // this._tanggal = feedback.tanggal;

    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const tanggal = feedback.tanggal.split('/');

    this._tanggal = new Date(
      Number(tanggal[0]),
      Number(tanggal[1] - 1),
      Number(tanggal[2]),
    ).toLocaleDateString('id-ID', options);

    this.render();
  }

  render() {
    this.innerHTML = `
      <img class="border rounded-circle p-2 mx-auto mb-3" src="https://i.pravatar.cc/300" alt="Avatar Penulis" style="width: 80px; height: 80px;">
      <h5 class="mb-0">${this._nama}</h5>
      <p>${this._tanggal}</p>
      <div class="testimonial-text bg-light text-center p-4">
        <p class="mb-0">${this._feedback}</p>
      </div>`;
  }
}

customElements.define('feedback-item', FeedbackItem);
