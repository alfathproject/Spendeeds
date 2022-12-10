import '../components/header-section';
import '../components/search-section';
import '../components/categorized-schools-section';
import '../components/categorized-section';
import SchoolDbSource from '../../data/schooldb-source';
import UrlParser from '../../routes/url-parser';

export default {
  async render() {
    return `
      <!-- Header -->
      <header-section class="container-fluid bg-primary py-5 mb-5 page-header d-block"></header-section>

      <!-- Categorized -->
      <categorized-section class="container-xxl py-5 category" id="category"></categorized-section>

      <!-- Schools -->
      <categorized-schools-section class="container-xxl py-5"></categorized-schools-section>`;
  },

  async afterRender() {
    const headerSection = document.querySelector('header-section');
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    headerSection.header = {
      title: `Category : ${url.id.toUpperCase()}`,
      page: `Category ${url.id.toUpperCase()}`,
    };

    const categorized = await SchoolDbSource.categorized(url.id.toLowerCase());
    const CategorizedSection = document.querySelector('categorized-section');
    CategorizedSection.schools = categorized;
  },
};
