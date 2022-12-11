// import _ from 'lodash';
// import data from './data.json';
// import datacategories from './category-data.json';
// import reviews from './review.json';

// parsedReviews.push({
//   id_review: 1,
//   npsn: 2,
//   nama: 3,
//   komentar: 4,
//   tanggal: 5,
// });

// const newData = JSON.stringify(reviewsData);

// fs.writeFile('./review.json', newData, (err) => {
//   if (err) throw err;
//   console.log('New data added');
// });

// class SchoolDbSource {
//   static async schools() {
//     return data.sort((a, b) => b.jumlah_siswa - a.jumlah_siswa);
//   }

//   static async popularSchools() {
//     const schools = await this.schools();
//     return schools.filter((school) => school.jumlah_siswa >= 200).slice(0, 3);
//   }

//   static async allPopularSchools() {
//     const schools = await this.schools();
//     return schools.filter((school) => school.jumlah_siswa >= 200);
//   }

//   static async acreditatedSchools() {
//     const schools = await this.schools();
//     return schools.filter((school) => school.akreditasi === 'A').slice(0, 6);
//   }

//   static async allAcreditatedSchools() {
//     const schools = await this.schools();
//     return schools.filter((school) => school.akreditasi === 'A');
//   }

//   static async akreditasi(akreditasi) {
//     return _.filter(data, (item) => (item.akreditasi
//       ? item.akreditasi.toString().toLowerCase() === akreditasi
//       : item.akreditasi));
//   }

//   static async location(location) {
//     return data.filter(
//       (item) => (item.kecamatan
//         ? item.kecamatan.toString().toLowerCase() === location
//         : item.kecamatan)
//         || (item.kelurahan
//           ? item.kelurahan.toString().toLowerCase() === location
//           : item.kelurahan),
//     );
//   }

//   static async detail(npsn) {
//     const school = data.filter((item) => Number(item.npsn) === Number(npsn));
//     const schoolReviews = reviews.filter(
//       (item) => Number(item.npsn) === Number(npsn),
//     );
//     return { school, schoolReviews };
//   }

//   static async search(query) {
//     const keywords = query.query.length ? query.query : null;
//     const npsn = query.npsn.length ? query.npsn : null;
//     const schoolname = query.schoolname.length ? query.schoolname : null;
//     const location = query.location.length ? query.location : null;
//     const akreditasi = query.akreditasi !== 'all' ? query.akreditasi : null;

//     return _.filter(
//       data,
//       (school) => (school.npsn
//         ? school.npsn.toString().includes(npsn || keywords)
//         : school.npsn)
//         || (school.nama_sekolah
//           ? school.nama_sekolah
//             .toString()
//             .toLowerCase()
//             .includes(schoolname || keywords)
//           : school.nama_sekolah)
//         || (school.alamat
//           ? school.alamat
//             .toString()
//             .toLowerCase()
//             .includes(location || keywords)
//           : school.alamat)
//         || (school.kelurahan
//           ? school.kelurahan
//             .toString()
//             .toLowerCase()
//             .includes(location || keywords)
//           : school.kelurahan)
//         || (school.kecamatan
//           ? school.kecamatan
//             .toString()
//             .toLowerCase()
//             .includes(location || keywords)
//           : school.kecamatan)
//         || (school.akreditasi
//           ? school.akreditasi.toString().toLowerCase().includes(akreditasi)
//           : school.akreditasi),
//     ).sort((a, b) => b.jumlah_siswa - a.jumlah_siswa);
//   }

//   static async getLatestReviewID() {
//     return reviews.sort((a, b) => b.id_review - a.id_review);
//   }

//   static async addReview(review) {
//     const reviewsData = fs.readFileSync('./review.json');
//     const parsedReviews = JSON.parse(reviewsData);

//     parsedReviews.push({
//       id_review: review.data,
//       npsn: review.npsn,
//       nama: review.nama,
//       komentar: review.review,
//       tanggal: review.tanggal,
//     });

//     // const newData = JSON.stringify(reviewsData);

//     // fs.writeFile('./review.json', newData, (err) => {
//     //   if (err) throw err;
//     //   console.log('New data added');
//     //   return reviews;
//     // });
//   }

//   // category data
//   static async category() {
//     return datacategories;
//   }

//   static async categorized(category) {
//     return datacategories.filter(
//       (school) => school.kecamatan.charAt(0).toLowerCase() === category,
//     );
//     // return datacategories.filter((school) => school.kecamatan.charAt(0).toLowerCase() === category);
//   }

//   // random image review generator
//   // static async randomImageReview(id) {
//   //   const datareview = reviews.filter(
//   //     (review) => Number(review.id_review) === Number(id),
//   //   );
//   //   const random = Math.floor(Math.random() * 37);
//   //   const configimg = `../../public/categoryimg/cat-${random}.jpg`;
//   //   datareview.gambar = configimg;
//   //   return datareview;
//   // }
// }

// export default SchoolDbSource;
