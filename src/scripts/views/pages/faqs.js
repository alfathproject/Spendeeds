import '../components/header-section';
import '../components/faqs-section';

export default {
  render() {
    return `
      <!-- Header Start -->
      <header-section class="container-fluid bg-primary py-5 mb-5 page-header d-block"></header-section>
      <!-- Header End -->

      <!-- FAQs Start -->
      <faqs-section></faqs-section>
      <!-- FAQs End -->`;  
  },

  async afterRender() {
    const headerSection = document.querySelector('header-section');
    headerSection.header = {
      title: 'Frequently Asked Questions',
      page: 'FAQs',
    };
  },
};