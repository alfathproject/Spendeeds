import '../components/header-section';
import '../components/feedbacks-section';

export default {
  render() {
    return `
      <!-- Header Start -->
      <header-section class="container-fluid bg-primary py-5 mb-5 page-header d-block"></header-section>
      <!-- Header End -->

      
      <!-- Testimonial Start -->
      <feedbacks-section class="container-xxl py-5 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s"></feedbacks-section>
      <!-- Testimonial End -->`;
  },

  async afterRender() {
    const headerSection = document.querySelector('header-section');
    headerSection.header = {
      title: 'User Feedbacks',
      page: 'Feedbacks',
    };
  },
};
