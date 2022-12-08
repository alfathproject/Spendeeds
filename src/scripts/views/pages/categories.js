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
      <!-- Header Start -->
      <header-section class="container-fluid bg-primary py-5 mb-5 page-header d-block"></header-section>
      <!-- Header End -->
    
    
      <!-- Categories Start -->
      <categories-section class="container-xxl py-5 category" id="category"></categories-section>
      <!-- Categories Start -->


      <!-- Schools Start -->
      <categorized-schools-section class="container-xxl py-5"></categorized-schools-section>
      <!-- Schools End -->
    
    
      <!-- Search Start -->
      <search-section class="container-xxl py-5"></search-section>
      <!-- Search End -->
    
    
      <!-- Schools Start -->
      <popular-schools-section class="container-xxl py-5"></popular-schools-section>
      <!-- Schools End -->

    
      <!-- Schools Start -->
      <acreditated-schools-section class="container-xxl py-5"></acreditated-schools-section>
      <!-- Schools End -->
    `;
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
