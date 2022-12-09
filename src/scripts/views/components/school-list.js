/* eslint-disable array-callback-return */
import './school-item';

class SchoolList extends HTMLElement {
  /**
   * @param {any} schools
   */
  set schools(schools) {
    this._schools = schools;

    this.render();
  }

  render() {
    this.innerHTML = '';

    if (typeof this._schools !== 'undefined' && this._schools.length) {
      this._schools.map((school, i) => {
        const schoolItem = document.createElement('school-item');
        schoolItem.school = school;

        schoolItem.classList.add(
          'col-lg-4',
          'col-md-6',
          'wow',
          'animate__animated',
          'animate__fadeInUp',
        );
        schoolItem.setAttribute('data-wow-delay', `${(i + 10) / 30}s`);

        this.appendChild(schoolItem);
      });
    } else {
      this.innerHTML = `
        <div class="col wow animate__animated animate__bounceInDown alert alert-warning alert-dismissible fade show text-center h5" role="alert">
          <i class="bi bi-info-circle me-1"></i>
          <strong>Oopss!</strong> Tidak ada sekolah untuk ditampilkan.
        </div>`;
    }
  }
}

customElements.define('school-list', SchoolList);
