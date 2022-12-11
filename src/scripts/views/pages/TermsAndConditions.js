import '../components/header-section';
import '../components/terms-conditions';

export default {
  render() {
    return `
      <!-- Header -->
      <header-section class="container-fluid bg-primary py-5 mb-5 page-header d-block"></header-section>

      <!-- Terms And Conditions -->
      <terms-conditions></terms-conditions>`;
  },

  async afterRender() {
    const headerSection = document.querySelector('header-section');
    headerSection.header = {
      title: 'Syarat dan Ketentuan',
      page: 'S&K',
    };
  },
};
