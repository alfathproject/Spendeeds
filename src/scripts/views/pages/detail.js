import '../components/header-section';
import '../components/detail-school-section';
import UrlParser from '../../routes/url-parser';
import SchoolDbSource from '../../data/schooldb-source';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';
import FavoriteSchoolIdb from '../../data/favorite-school-idb';

export default {
  render() {
    return `
      <!-- Header Start -->
      <header-section class="container-fluid bg-primary py-5 mb-5 page-header d-block"></header-section>
      <!-- Header End -->
    
    
      <!-- Schools Start -->
      <detail-school-section class="container-xxl py-5"></detail-school-section>
      <!-- Schools End -->
      
      
      <!-- Favorite Button Start -->
      <div id="favoriteButtonContainer"></div>
      <!-- Favorite Button End -->`;
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

    FavoriteButtonPresenter.init({
      favoriteButtonContainer: document.querySelector(
        '#favoriteButtonContainer',
      ),
      favoriteSchools: FavoriteSchoolIdb,
      school: {
        npsn: school[0].npsn,
        nama_sekolah: school[0].nama_sekolah,
        alamat: school[0].alamat,
        kelurahan: school[0].kelurahan,
        kecamatan: school[0].kecamatan,
        jumlah_siswa: school[0].jumlah_siswa,
        jumlah_guru: school[0].jumlah_guru,
        kepala_sekolah: school[0].kepala_sekolah,
        telp_sekolah: school[0].telp_sekolah,
        akreditasi: school[0].akreditasi,
        latitude: school[0].latitude,
        longitude: school[0].longitude,
      },
    });
  },
};
