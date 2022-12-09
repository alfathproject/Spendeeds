import '../components/header-section';
import '../components/search-section';
import '../components/acreditated-schools-section';
import SchoolDbSource from '../../data/schooldb-source';

export default {
  render() {
    return `
      <!-- Header -->
      <header-section class="container-fluid bg-primary py-5 mb-5 page-header d-block"></header-section>
    
      <!-- Acreditated Schools -->
      <acreditated-schools-section class="container-xxl py-5"></acreditated-schools-section>`;
  },

  async afterRender() {
    const headerSection = document.querySelector('header-section');
    headerSection.header = {
      title: 'Acreditated Schools',
      page: 'Acreditated',
    };

    const acreditatedSchools = await SchoolDbSource.allAcreditatedSchools();
    const acreditatedSchoolsSection = document.querySelector('acreditated-schools-section');
    acreditatedSchoolsSection.schools = acreditatedSchools;
  },
};
