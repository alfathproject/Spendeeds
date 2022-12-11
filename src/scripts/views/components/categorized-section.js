import './school-list';

class CategorizedSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set schools(schools) {
    this._schools = schools;

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <div class="text-center wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3">Sekolah</h6>
          <h1 class="mb-5">Kategori Sekolah</h1>
        </div>
        <school-list id="categorizedSchoolsList" class="row g-4 justify-content-center"></school-list>
      </div>`;

    const schoolList = document.querySelector('#categorizedSchoolsList');
    schoolList.schools = this._schools;
  }
}

customElements.define('categorized-section', CategorizedSection);
