// import API_ENDPOINT from '../globals/api-endpoint';
import data from './data.json';
import datareviews from './reviews-data.json';
import config from '../globals/config';

class SchoolDbSource {
  static async schools() {
    return data;
  }

  static async popularSchools() {
    const filteredSchools = data.sort((a, b) => b.jumlah_siswa - a.jumlah_siswa);
    return filteredSchools.filter((school) => school.jumlah_siswa >= 200).slice(0, 3);
  }

  static async acreditatedSchools() {
    const filteredSchools = data.sort((a, b) => b.jumlah_siswa - a.jumlah_siswa);
    return filteredSchools.filter((school) => school.akreditasi === 'A').slice(0, 6);
  }

  static async detail(npsn) {
    return data.filter((school) => Number(school.npsn) === Number(npsn));
  }

  static async categorized(category) {
    return data.filter((school) => school.kecamatan.charAt(0).toLowerCase() === category);
  }

  // random image review generator
  static async randomImageReview(id) {
    const datareview = datareviews.filter((review) => Number(review.id_review) === Number(id));
    const random = Math.floor(Math.random() * 37);
    const configimg = config.BASE_CATEGORY_IMAGE_URL(`cat-${random}.jpg`);
    datareview.gambar = configimg;
    return datareview;
  }

  // static async list() {
  //   const response = await fetch(API_ENDPOINT.LIST);
  //   const responseJson = await response.json();
  //   return responseJson.schools;
  // }

  // static async detailSchool(id) {
  //   const response = await fetch(API_ENDPOINT.DETAIL(id));
  //   const responseJson = await response.json();
  //   return responseJson.school;
  // }

  // static async addReview(data) {
  //   const response = await fetch(API_ENDPOINT.REVIEW, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   const responseJson = await response.json();
  //   return responseJson.customerReviews;
  // }
}

export default SchoolDbSource;
