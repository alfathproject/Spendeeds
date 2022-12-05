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
          <h6 class="section-title bg-white text-center text-primary px-3">Schools</h6>
          <h1 class="mb-5">Popular Schools</h1>
        </div>
        <school-list id="popularSchoolsList" class="row g-4 justify-content-center"></school-list>
      </div>`;

    const schoolList = document.querySelector('#popularSchoolsList');
    schoolList.schools = this._schools;
  }
}

customElements.define('popular-schools-section', PopularSchoolsSection);
