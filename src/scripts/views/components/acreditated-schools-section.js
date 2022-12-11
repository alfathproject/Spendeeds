import UrlParser from '../../routes/url-parser';
import './school-list';

class AcreditatedSchoolsSection extends HTMLElement {
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
          <h6 class="section-title bg-white text-center text-primary px-3">Akreditasi</h6>
          <h1 class="mb-5">Sekolah Berakreditasi</h1>
        </div>
        <school-list id="acreditatedSchoolsList" class="row g-4 justify-content-center"></school-list>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-3" id="morePopularButtonContainer"></div>
      </div>`;

    const schoolList = document.querySelector('#acreditatedSchoolsList');
    schoolList.schools = this._schools;

    const morePopularButtonContainer = document.querySelector('#morePopularButtonContainer');

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    if (url.resource !== 'acreditated') {
      morePopularButtonContainer.innerHTML = `
        <a href="#/acreditated" class="btn btn-primary py-md-3 px-md-5 wow animate__animated animate__fadeInLeft" data-wow-delay="0.8s">More<i class="bi bi-arrow-right ms-3"></i></a>`;
    } else {
      morePopularButtonContainer.remove();
    }
  }
}

customElements.define('acreditated-schools-section', AcreditatedSchoolsSection);
