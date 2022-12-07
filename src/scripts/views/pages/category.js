import '../components/header-section';
import '../components/search-section';
import '../components/categorized-schools-section';
import '../components/categorized-section';
import SchoolDbSource from '../../data/schooldb-source';
import UrlParser from '../../routes/url-parser';

export default {
  async render() {
    return `
      <!-- Header Start -->
      <header-section class="container-fluid bg-primary py-5 mb-5 page-header d-block"></header-section>
      <!-- Header End -->
    
    
      <!-- Search Start -->
      <search-section class="container-xxl py-5"></search-section>
      <!-- Search End -->


      <!-- Schools Start -->
      <categorized-schools-section class="container-xxl py-5"></categorized-schools-section>
      <!-- Schools End -->


      <!-- Categories Start -->
      <categorized-section class="container-xxl py-5 category" id="category"></categorized-section>
      <!-- Categories Start -->
      `;
  },

  async afterRender() {
    const headerSection = document.querySelector('header-section');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const categorized = await SchoolDbSource.categorized(url.id.toLowerCase());

    headerSection.header = {
      title: `Category : ${url.id.toUpperCase()}`,
      page: `Category ${url.id.toUpperCase()}`,
    };

    const CategorizedSection = document.querySelector('categorized-section');
    CategorizedSection.schools = categorized;
  },
};
