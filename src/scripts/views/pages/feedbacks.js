import '../components/header-section';
import '../components/feedbacks-section';

export default {
  render() {
    return `
      <!-- Header -->
      <header-section class="container-fluid bg-primary py-5 mb-5 page-header d-block"></header-section>
      
      <!-- Testimonial -->
      <feedbacks-section class="container-xxl py-5 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s"></feedbacks-section>`;
  },

  async afterRender() {
    const headerSection = document.querySelector('header-section');
    headerSection.header = {
      title: 'Feedback Pengguna',
      page: 'Feedback',
    };
  },
};
