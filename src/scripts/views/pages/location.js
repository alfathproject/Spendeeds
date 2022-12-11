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
          <h6 class="section-title bg-white text-center text-primary px-3">Lokasi</h6>
          <h1 class="mb-5">Lokasi Sekolah</h1>
        </div>
        <school-list id="locationSchoolsList" class="row g-4 justify-content-center"></school-list>
      </div>`;
  },

  async afterRender() {
    const headerSection = document.querySelector('header-section');
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    headerSection.header = {
      title: `${decodeURI(url.id.toUpperCase())}`,
      page: `${decodeURI(url.id.toUpperCase())}`,
    };

    const location = await SchoolDbSource.location(decodeURI(url.id));
    const schoolList = document.querySelector('#locationSchoolsList');
    schoolList.schools = location;
  },
};
