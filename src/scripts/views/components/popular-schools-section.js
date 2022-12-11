import UrlParser from '../../routes/url-parser';
import './school-list';

class PopularSchoolsSection extends HTMLElement {
  /**
   * @param {any} schools
   */
  set schools(schools) {
    this._schools = schools;

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <div class="text-center wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3">Populer</h6>
          <h1 class="mb-5">Sekolah Populer</h1>
        </div>
        <school-list id="popularSchoolsList" class="row g-4 justify-content-center"></school-list>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3" id="moreAcreditatedButtonContainer"></div>
      </div>`;

    const schoolList = document.querySelector('#popularSchoolsList');
    schoolList.schools = this._schools;

    const moreAcreditatedButtonContainer = document.querySelector('#moreAcreditatedButtonContainer');

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    if (url.resource !== 'popular') {
      moreAcreditatedButtonContainer.innerHTML = `
        <a href="#/popular" class="btn btn-primary py-md-3 px-md-5 wow animate__animated animate__fadeInLeft" data-wow-delay="0.8s">Lebih Banyak<i class="bi bi-arrow-right ms-3"></i></a>`;
    } else {
      moreAcreditatedButtonContainer.remove();
    }
  }
}

customElements.define('popular-schools-section', PopularSchoolsSection);
