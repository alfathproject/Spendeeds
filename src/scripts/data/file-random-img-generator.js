/*
  This file is used to generate random image for each school
  run this file using node file-random-img-generator.js or
  node src/scripts/data/file-random-img-generator.js
*/

const fs = require('fs');
const data = require('./data.json');
const categorydata = require('./category.json');

// get image data from categoryData and update the image
const categoryDataUpdateImage = categorydata.map((category) => {
  const random = Math.floor(Math.random() * 36) + 1;
  const newRandomImage = `.categoryimg/cat-${random}.jpg`;
  category.gambar = newRandomImage;
  return category;
});

/*
  recreate the data from data.json and categoryDataUpdateImage to new data
  new data should be like this:
  [
    {
      "npsn": 10000001,
      "nama_sekolah": "SDN 0001",
      "alamat": "Jl. Raya Cibadak No. 1",
      "kelurahan": "Cibadak",
      "kecamatan": "Cibadak",
      "jumlah_siswa": 200,
      "jumlah_guru": 10,
      "kepala_sekolah": "Budi Santoso",
      "telp_sekolah": "021-1234567",
      "akreditasi": "A",
      "latitude": -6.123456,
      "longitude": 106.123456,
      "category": {
        "id_category": 1,
        "npsn": 10000001,
        "gambar": "../../public/categoryimg/cat-1.jpg"
        "deskripsi": "Sekolah Dasar"
      }
    },
    {
      "npsn": 10000002,
      "nama_sekolah": "SDN 0002",
      "alamat": "Jl. Raya Cibadak No. 2",
      "kelurahan": "Cibadak",
      "kecamatan": "Cibadak",
      "jumlah_siswa": 200,
      "jumlah_guru": 10,
      "kepala_sekolah": "Budi Santoso",
      "telp_sekolah": "021-1234567",
      "akreditasi": "A",
      "latitude": -6.123456,
      "longitude": 106.123456,
      "category": {
        "id_category": 2,
        "npsn": 10000002,
        "gambar": "../../public/categoryimg/cat-2.jpg"
        "deskripsi": "Sekolah Dasar"
      }
    },
    etc...
  ]
*/
const newData = data.map((school) => {
  const dataNpsn = data.map((school1) => school1.nama_sekolah);
  const dataNpsnIndex = dataNpsn.map((i) => dataNpsn.indexOf(i) + 1);
  const categoryData = categoryDataUpdateImage.filter((category) => Number(category.id_category) === Number(dataNpsnIndex[dataNpsn.indexOf(school.nama_sekolah)]));
  const newSchool = {
    ...school,
    category: categoryData[0],
  };
  return newSchool;
});

// write the new data to category-data.json
const newJsonData = JSON.stringify(newData);
fs.writeFile('src/scripts/data/category-data.json', newJsonData, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
