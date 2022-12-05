import '../components/header-section';
import '../components/about-section';
import '../components/services-section';
import '../components/team-section';

export default {
  render() {
    return `
      <!-- Header Start -->
      <header-section class="container-fluid bg-primary py-5 mb-5 page-header d-block"></header-section>
      <!-- Header End -->
    
    
      <!-- Service Start -->
      <services-section class="container-xxl py-5"></services-section>
      <!-- Service End -->
    
    
      <!-- About Start -->
      <about-section class="container-xxl py-5" id="about"></about-section>
      <!-- About End -->
    
    
      <!-- Team Start -->
      <team-section class="container-xxl py-5"></team-section>
      <!-- Team End -->`;
  },

  async afterRender() {
    const headerSection = document.querySelector('header-section');
    headerSection.header = {
      title: 'About Us',
      page: 'About',
    };
  },
};
