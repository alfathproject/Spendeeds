/* eslint-disable camelcase, no-multi-assign, prefer-destructuring, max-len */
import '../components/header-section';
import '../components/detail-school-section';
import '../components/school-reviews-section';
import UrlParser from '../../routes/url-parser';
import SchoolDbSource from '../../data/schooldb-source';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';
import FavoriteSchoolIdb from '../../data/favorite-school-idb';

export default {
  render() {
    return `
      <!-- Header -->
      <header-section class="container-fluid bg-primary py-5 mb-5 page-header d-block"></header-section>
    
      <!-- School Detail -->
      <detail-school-section class="container-xxl py-5"></detail-school-section>
    
      <!-- School Reviews -->
      <school-reviews-section class="container-xxl py-5"></school-reviews-section>
      
      <!-- Favorite Button Container -->
      <div id="favoriteButtonContainer"></div>`;
  },

  async afterRender() {
    const headerSection = document.querySelector('header-section');
    headerSection.header = {
      title: 'School Detail',
      page: 'Detail',
    };

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { schoolResponseJson, reviewsResponseJson } = await SchoolDbSource.school(url.id);

    const detailSchoolSection = document.querySelector('detail-school-section');
    detailSchoolSection.school = schoolResponseJson;

    const schoolReviewsSection = document.querySelector('school-reviews-section');
    schoolReviewsSection.reviews = { reviews: reviewsResponseJson, schoolID: schoolResponseJson.id };

    if (!schoolResponseJson) {
      detailSchoolSection.innerHTML = "Oops.. School isn't available";
    } else {
      FavoriteButtonPresenter.init({
        favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
        favoriteSchools: FavoriteSchoolIdb,
        school: schoolResponseJson,
      });
    }
  },
};
