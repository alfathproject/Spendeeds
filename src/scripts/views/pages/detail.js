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
    const detail = await SchoolDbSource.detail(url.id);

    const detailSchoolSection = document.querySelector('detail-school-section');
    detailSchoolSection.school = detail.school;

    const schoolReviewsSection = document.querySelector('school-reviews-section');
    schoolReviewsSection.reviews = detail.schoolReviews;

    const schoolItem = Object.values(detail.school)[0];
    const school = {
      npsn: schoolItem.npsn,
      nama_sekolah: schoolItem.nama_sekolah,
      alamat: schoolItem.alamat,
      kelurahan: schoolItem.kelurahan,
      kecamatan: schoolItem.kecamatan,
      jumlah_siswa: schoolItem.jumlah_siswa,
      jumlah_guru: schoolItem.jumlah_guru,
      kepala_sekolah: schoolItem.kepala_sekolah,
      telp_sekolah: schoolItem.telp_sekolah,
      akreditasi: schoolItem.akreditasi,
      latitude: schoolItem.latitude,
      longitude: schoolItem.longitude,
    };

    FavoriteButtonPresenter.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      favoriteSchools: FavoriteSchoolIdb,
      school,
    });
  },
};
