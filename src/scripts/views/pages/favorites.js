import '../components/header-section';
import '../components/search-section';
import '../components/favorited-schools-section';

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
      <favorited-schools-section class="container-xxl py-5"></favorited-schools-section>
      <!-- Schools End -->`;
  },

  async afterRender() {
    const headerSection = document.querySelector('header-section');
    headerSection.header = {
      title: 'Favorited Schools',
      page: 'Favorited',
    };
  },
};
