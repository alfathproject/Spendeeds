import './school-list';
import UrlParser from '../../routes/url-parser';

class ResultsSection extends HTMLElement {
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
          <h6 class="section-title bg-white text-center text-primary px-3">Sekolah</h6>
          <h1 class="mb-5">Hasil Pencarian</h1>
        </div>
        <school-list id="resultsList" class="row g-4 justify-content-center"></school-list>
      </div>`;

    const schoolList = document.querySelector('#resultsList');
    schoolList.schools = this._schools;

    const url = UrlParser.parseActiveUrlWithoutQuery();
    const params = new URLSearchParams(url.query);
    const query = {};
    for (const [key, value] of params.entries()) {
      query[key] = value;
    }

    $('#query').val(query.query);

    if (query.npsn || query.schoolname || query.location || (query.akreditasi !== 'all')) $('#advancedSearchButton').trigger('click');
    $('#npsn').val(query.npsn);
    $('#schoolName').val(query.schoolname);
    $('#location').val(query.location);
    $('input[name=akreditasi]')
      .filter(`[value="${query.akreditasi.toUpperCase()}"]`)
      .attr('checked', true);
  }
}

customElements.define('results-section', ResultsSection);
