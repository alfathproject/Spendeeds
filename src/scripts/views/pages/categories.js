import '../components/header-section';
import '../components/categories-section';
import '../components/search-section';
import '../components/popular-schools-section';
import '../components/acreditated-schools-section';
import '../components/categorized-schools-section';
import '../components/feedbacks-section';
import SchoolDbSource from '../../data/schooldb-source';

export default {
  render() {
    return `
      <!-- Header -->
      <header-section class="container-fluid bg-primary py-5 mb-5 page-header d-block"></header-section>
    
      <!-- Categories -->
      <categories-section class="container-xxl py-5 category" id="category"></categories-section>

      <!-- Categorized Schools -->
      <categorized-schools-section class="container-xxl py-5"></categorized-schools-section>
    
      <!-- Search -->
      <search-section class="container-xxl py-5"></search-section>
    
      <!-- Popular Schools -->
      <popular-schools-section class="container-xxl py-5"></popular-schools-section>
    
      <!-- Acreditated Schools -->
      <acreditated-schools-section class="container-xxl py-5"></acreditated-schools-section>`;
  },

  async afterRender() {
    const headerSection = document.querySelector('header-section');
    headerSection.header = {
      title: 'School Categories',
      page: 'Categories',
    };

    const popularSchools = await SchoolDbSource.popularSchools();
    const PopularSchoolsSection = document.querySelector('popular-schools-section');
    PopularSchoolsSection.schools = popularSchools;

    const acreditatedSchools = await SchoolDbSource.acreditatedSchools();
    const AcreditatedSchoolsSection = document.querySelector('acreditated-schools-section');
    AcreditatedSchoolsSection.schools = acreditatedSchools;

    const schools = await SchoolDbSource.schools();
    const CategoriesSection = document.querySelector('categories-section');
    const categories = {
      popularSchoolsNumber: popularSchools.length,
      acreditatedSchoolsNumber: acreditatedSchools.length,
      schools,
    };
    CategoriesSection.categories = categories;
  },
};
