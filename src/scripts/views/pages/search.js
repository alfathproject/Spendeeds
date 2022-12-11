import '../components/header-section';
import '../components/search-section';
import '../components/results-section';
import UrlParser from '../../routes/url-parser';
import SchoolDbSource from '../../data/schooldb-source';

export default {
  render() {
    return `
      <!-- Header -->
      <header-section class="container-fluid bg-primary py-5 mb-5 page-header d-block"></header-section>
    
      <!-- Search -->
      <search-section class="container-xxl py-5"></search-section>
    
      <!-- Results -->
      <results-section class="container-xxl py-5"></results-section>`;
  },

  async afterRender() {
    const headerSection = document.querySelector('header-section');
    headerSection.header = {
      title: 'Cari Sekolah',
      page: 'Cari',
    };

    const url = UrlParser.parseActiveUrlWithoutQuery();
    const params = new URLSearchParams(url.query);

    const query = {};
    for (const [key, value] of params.entries()) {
      query[key] = value;
    }

    const schools = await SchoolDbSource.search(query);
    const ResultsSection = document.querySelector('results-section');
    ResultsSection.schools = schools;
  },
};
