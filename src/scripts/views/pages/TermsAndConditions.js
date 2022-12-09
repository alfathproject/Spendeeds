import '../components/header-section';
import '../components/terms-conditions';

export default {
  render() {
    return `
      <!-- Header Start -->
      <header-section class="container-fluid bg-primary py-5 mb-5 page-header d-block"></header-section>
      <!-- Header End -->

      <!-- Terms And Condition Start -->
      <terms-conditions></terms-conditions>
      <!-- Terms And Condition End -->`;
  },

  async afterRender() {
    const headerSection = document.querySelector('header-section');
    headerSection.header = {
      title: 'Terms and Conditions',
      page: 'Terms and Conditions',
    };
  },
};
