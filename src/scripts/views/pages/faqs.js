import '../components/header-section';
import '../components/faqs-section';

export default {
  render() {
    return `
      <!-- Header -->
      <header-section class="container-fluid bg-primary py-5 mb-5 page-header d-block"></header-section>

      <!-- FAQs -->
      <faqs-section></faqs-section>`;
  },

  async afterRender() {
    const headerSection = document.querySelector('header-section');
    headerSection.header = {
      title: 'Frequently Asked Questions',
      page: 'FAQs',
    };
  },
};
