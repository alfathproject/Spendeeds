import CONFIG from './config';

const API_ENDPOINT = {
  SCHOOLS: `${CONFIG.BASE_URL}/schools`,
  SCHOOL: (id) => `${CONFIG.BASE_URL}/schools/${id}`,
  REVIEWS: (id) => `${CONFIG.BASE_URL}/schools/${id}/reviews`,
  AKREDITASI: (akreditasi) => `${CONFIG.BASE_URL}/schools?akreditasi=${akreditasi}`,
  LOCATION1: (location) => `${CONFIG.BASE_URL}/schools?kelurahan_like=${location}`,
  LOCATION2: (location) => `${CONFIG.BASE_URL}/schools?kecamatan_like=${location}`,
  SEARCH: (query) => `${CONFIG.BASE_URL}/schools?q=${query}`,
  SEARCHNPSN: (npsn) => `${CONFIG.BASE_URL}/schools?npsn_like=${npsn}`,
  SEARCHSCHOOLNAME: (schoolName) => `${CONFIG.BASE_URL}/schools?nama_sekolah_like=${schoolName}`,
  LOCATION3: (location) => `${CONFIG.BASE_URL}/schools?alamat_like=${location}`,
  CATEGORIES: `${CONFIG.BASE_URL}/categories`,
  CATEGORY: (id) => `${CONFIG.BASE_URL}/categories/${id}`,
  TEAM: `${CONFIG.BASE_URL}/team`,
};

export default API_ENDPOINT;
