class ReviewItem extends HTMLElement {
  /**
   * @param {any} restaurant
   */
  set review(review) {
    this._nama = review.nama;
    this._komentar = review.komentar;
    // this._tanggal = review.tanggal;

    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const tanggal = review.tanggal.split('/');

    this._tanggal = new Date(
      Number(tanggal[0]),
      Number(tanggal[1] - 1),
      Number(tanggal[2]),
    ).toLocaleDateString('id-ID', options);

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="card">
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p class="fs-5">${this._komentar}</p>
            <footer class="small blockquote-footer mt-2">
              <i class="bi bi-person-circle me-1"></i> <strong class="me-3">${this._nama.toUpperCase()}</strong>
              <i class="bi bi-calendar2-day me-1"></i> ${this._tanggal}</footer>
          </blockquote>
        </div>
      </div>`;
  }
}

customElements.define('review-item', ReviewItem);
