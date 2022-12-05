import './school-list';

class FavoritedSchoolsSection extends HTMLElement {
  /**
   * @param {any} schools
   */
  set schools(schools) {
    this.render();

    const schoolList = document.querySelector('school-list');
    schoolList.schools = schools;
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <div class="text-center wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3">Schools</h6>
          <h1 class="mb-5">Favorited Schools</h1>
        </div>
        <school-list class="row g-4 justify-content-center"></school-list>
      </div>`;
  }
}

customElements.define('favorited-schools-section', FavoritedSchoolsSection);
