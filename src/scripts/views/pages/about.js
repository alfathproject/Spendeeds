import '../components/header-section';
import '../components/about-section';
import '../components/services-section';
import '../components/team-section';

export default {
  render() {
    return `
      <!-- Header -->
      <header-section class="container-fluid bg-primary py-5 mb-5 page-header d-block"></header-section>
    
      <!-- Service -->
      <services-section class="container-xxl py-5"></services-section>
    
      <!-- About -->
      <about-section class="container-xxl py-5" id="about"></about-section>
    
      <!-- Team -->
      <team-section class="container-xxl py-5"></team-section>`;
  },

  async afterRender() {
    const headerSection = document.querySelector('header-section');
    headerSection.header = {
      title: 'About Us',
      page: 'About',
    };
  },
};
