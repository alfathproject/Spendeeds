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

    console.log(tanggal[0]);
    this._tanggal = new Date(
      Number(tanggal[0]),
      Number(tanggal[1]),
      Number(tanggal[2]),
    ).toLocaleDateString('id-ID', options);

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="card mt-3">
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>${this._komentar}</p>
            <footer class="small blockquote-footer mt-1"><i class="bi bi-person"></i> <strong class="me-2">${this._nama}</strong> <small><i class="bi bi-calendar2-day fs-6"></i> ${this._tanggal}</small></footer>
          </blockquote>
        </div>
      </div>`;
  }
}

customElements.define('review-item', ReviewItem);
