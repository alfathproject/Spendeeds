import '../components/header-section';
import SchoolDbSource from '../../data/schooldb-source';
import UrlParser from '../../routes/url-parser';

export default {
  async render() {
    return `
      <!-- Header -->
      <header-section class="container-fluid bg-primary py-5 mb-5 page-header d-block"></header-section>

      <!-- Schools -->
      <div class="container">
        <div class="text-center wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3">Acreditated</h6>
          <h1 class="mb-5">Acreditated Schools</h1>
        </div>
        <school-list id="akreditasiSchoolsList" class="row g-4 justify-content-center"></school-list>
      </div>`;
  },

  async afterRender() {
    const headerSection = document.querySelector('header-section');
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    headerSection.header = {
      title: `Akreditasi : ${url.id.toUpperCase()}`,
      page: `Akreditasi ${url.id.toUpperCase()}`,
    };

    const akreditasi = await SchoolDbSource.akreditasi(url.id);
    const schoolList = document.querySelector('#akreditasiSchoolsList');
    schoolList.schools = akreditasi;
  },
};
