import '../components/header-section';
import '../components/search-section';
import '../components/acreditated-schools';
import SchoolDbSource from '../../data/schooldb-source';

export default {
  render() {
    return `
      <!-- Header Start -->
      <header-section class="container-fluid bg-primary py-5 mb-5 page-header d-block"></header-section>
      <!-- Header End -->
    
      <!-- Schools Start -->
      <acreditated-schools class="container-xxl py-5"></acreditated-schools>
      <!-- Schools End -->`;
  },

  async afterRender() {
    const headerSection = document.querySelector('header-section');
    headerSection.header = {
      title: 'Acreditated Schools',
      page: 'Acreditated',
    };

    const popularSchools = await SchoolDbSource.popularSchools();
    const PopularSchoolsSection = document.querySelector('acreditated-schools');
    PopularSchoolsSection.schools = popularSchools;
  },
};