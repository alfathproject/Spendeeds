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
    const delayCounter = (i) => i + 0.2;

    // eslint-disable-next-line prefer-const
    let i = 0.1;
    // eslint-disable-next-line array-callback-return
    this._schools.map((school) => {
      const schoolItem = document.createElement('school-item');
      schoolItem.school = school;

      schoolItem.classList.add(
        'col-lg-4',
        'col-md-6',
        'wow',
        'animate__animated',
        'animate__fadeInUp',
      );
      schoolItem.setAttribute('data-wow-delay', `${i}s`);

      delayCounter(i);

      this.appendChild(schoolItem);
    });
  }
}

customElements.define('school-list', SchoolList);
