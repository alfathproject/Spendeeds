import '../components/header-section';
import '../components/search-section';
import '../components/popular-schools-section';
import SchoolDbSource from '../../data/schooldb-source';

export default {
  render() {
    return `
      <!-- Header  -->
      <header-section class="container-fluid bg-primary py-5 mb-5 page-header d-block"></header-section>
    
      <!-- Popular Schools  -->
      <popular-schools-section class="container-xxl py-5"></popular-schools-section>`;
  },

  async afterRender() {
    const headerSection = document.querySelector('header-section');
    headerSection.header = {
      title: 'Sekolah Populer',
      page: 'Populer',
    };

    const popularSchools = await SchoolDbSource.allPopularSchools();
    const PopularSchoolsSection = document.querySelector('popular-schools-section');
    PopularSchoolsSection.schools = popularSchools;
  },
};
