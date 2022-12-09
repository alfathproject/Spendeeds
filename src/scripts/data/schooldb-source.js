import _ from 'lodash';
import data from './data.json';
import datacategories from './category-data.json';
import reviews from './review.json';

class SchoolDbSource {
  static async schools() {
    return data.sort((a, b) => b.jumlah_siswa - a.jumlah_siswa);
  }

  static async popularSchools() {
    const schools = await this.schools();
    return schools.filter((school) => school.jumlah_siswa >= 200).slice(0, 3);
  }

  static async allPopularSchools() {
    const schools = await this.schools();
    return schools.filter((school) => school.jumlah_siswa >= 200);
  }

  static async acreditatedSchools() {
    const schools = await this.schools();
    return schools.filter((school) => school.akreditasi === 'A').slice(0, 6);
  }

  static async allAcreditatedSchools() {
    const schools = await this.schools();
    return schools.filter((school) => school.akreditasi === 'A');
  }

  static async detail(npsn) {
    const school = data.filter((item) => Number(item.npsn) === Number(npsn));
    const schoolReviews = reviews.filter((item) => Number(item.npsn) === Number(npsn));
    return { school, schoolReviews };
  }

  static async search(query) {
    const keywords = query.query.length ? query.query : null;
    const npsn = query.npsn.length ? query.npsn : null;
    const schoolname = query.schoolname.length ? query.schoolname : null;
    const location = query.location.length ? query.location : null;
    const akreditasi = query.akreditasi !== 'all' ? query.akreditasi : null;

    return _.filter(
      data,
      (school) => (school.npsn
        ? school.npsn.toString().includes(npsn || keywords)
        : school.npsn)
        || (school.nama_sekolah
          ? school.nama_sekolah
            .toString()
            .toLowerCase()
            .includes(schoolname || keywords)
          : school.nama_sekolah)
        || (school.alamat
          ? school.alamat
            .toString()
            .toLowerCase()
            .includes(location || keywords)
          : school.alamat)
        || (school.kelurahan
          ? school.kelurahan
            .toString()
            .toLowerCase()
            .includes(location || keywords)
          : school.kelurahan)
        || (school.kecamatan
          ? school.kecamatan
            .toString()
            .toLowerCase()
            .includes(location || keywords)
          : school.kecamatan)
        || (school.akreditasi
          ? school.akreditasi.toString().toLowerCase().includes(akreditasi)
          : school.akreditasi),
    ).sort((a, b) => b.jumlah_siswa - a.jumlah_siswa);
  }

  // category data
  static async category() {
    return datacategories;
  }

  static async categorized(category) {
    return data.filter(
      (school) => school.kecamatan.charAt(0).toLowerCase() === category,
    );
    return datacategories.filter((school) => school.kecamatan.charAt(0).toLowerCase() === category);
  }

  // random image review generator
  // static async randomImageReview(id) {
  //   const datareview = reviews.filter(
  //     (review) => Number(review.id_review) === Number(id),
  //   );
  //   const random = Math.floor(Math.random() * 37);
  //   const configimg = `../../public/categoryimg/cat-${random}.jpg`;
  //   datareview.gambar = configimg;
  //   return datareview;
  // }
}

export default SchoolDbSource;
