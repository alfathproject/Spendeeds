import '../components/header-section';
import '../components/detail-school-section';
import UrlParser from '../../routes/url-parser';
import SchoolDbSource from '../../data/schooldb-source';

export default {
  render() {
    return `
      <!-- Header Start -->
      <header-section class="container-fluid bg-primary py-5 mb-5 page-header d-block"></header-section>
      <!-- Header End -->
    
    
      <!-- Schools Start -->
      <detail-school-section class="container-xxl py-5"></detail-school-section>
      <!-- Schools End -->`;
  },

  async afterRender() {
    const headerSection = document.querySelector('header-section');
    headerSection.header = {
      title: 'School Detail',
      page: 'Detail',
    };

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const school = await SchoolDbSource.detail(url.id);

    const detailSchoolSection = document.querySelector('detail-school-section');
    detailSchoolSection.school = school;
  },
};
