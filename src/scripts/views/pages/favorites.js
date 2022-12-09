import '../components/header-section';
import '../components/search-section';
import '../components/favorited-schools-section';
import FavoriteSchoolIdb from '../../data/favorite-school-idb';

export default {
  async render() {
    return `
      <!-- Header -->
      <header-section class="container-fluid bg-primary py-5 mb-5 page-header d-block"></header-section>
    
      <!-- Search -->
      <search-section class="container-xxl py-5"></search-section>
    
      <!-- Schools -->
      <favorited-schools-section class="container-xxl py-5"></favorited-schools-section>`;
  },

  async afterRender() {
    const headerSection = document.querySelector('header-section');
    headerSection.header = {
      title: 'Favorited Schools',
      page: 'Favorited',
    };

    const favoritedSchools = await FavoriteSchoolIdb.schools();
    const favoritedSchoolsSection = document.querySelector('favorited-schools-section');
    favoritedSchoolsSection.schools = favoritedSchools;
  },
};
