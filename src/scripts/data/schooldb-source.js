/* eslint-disable no-dupe-else-if */
import API_ENDPOINT from '../globals/api-endpoint';

class SchoolDbSource {
  static async schools() {
    const response = await fetch(API_ENDPOINT.SCHOOLS);
    const responseJson = await response.json();
    return responseJson.sort((a, b) => b.jumlah_siswa - a.jumlah_siswa);
  }

  static async popularSchools() {
    const response = await fetch(API_ENDPOINT.SCHOOLS);
    const responseJson = await response.json();
    return responseJson
      .filter((school) => school.jumlah_siswa >= 200)
      .sort((a, b) => b.jumlah_siswa - a.jumlah_siswa)
      .slice(0, 3);
  }

  static async allPopularSchools() {
    const response = await fetch(API_ENDPOINT.SCHOOLS);
    const responseJson = await response.json();
    return responseJson
      .filter((school) => school.jumlah_siswa >= 200)
      .sort((a, b) => b.jumlah_siswa - a.jumlah_siswa);
  }

  static async acreditatedSchools() {
    const response = await fetch(API_ENDPOINT.SCHOOLS);
    const responseJson = await response.json();
    return responseJson
      .filter((school) => school.akreditasi === 'A')
      .sort((a, b) => b.jumlah_siswa - a.jumlah_siswa)
      .slice(0, 6);
  }

  static async allAcreditatedSchools() {
    const response = await fetch(API_ENDPOINT.SCHOOLS);
    const responseJson = await response.json();
    return responseJson
      .filter((school) => school.akreditasi === 'A')
      .sort((a, b) => b.jumlah_siswa - a.jumlah_siswa);
  }

  static async akreditasi(akreditasi) {
    const response = await fetch(
      API_ENDPOINT.AKREDITASI(akreditasi.toUpperCase()),
    );
    const responseJson = await response.json();
    return responseJson.sort((a, b) => b.jumlah_siswa - a.jumlah_siswa);
  }

  static async location(location) {
    const response1 = await fetch(API_ENDPOINT.LOCATION1(location));
    const response1Json = await response1.json();
    const response2 = await fetch(API_ENDPOINT.LOCATION2(location));
    const response2Json = await response2.json();
    const mergedResponse = [...response1Json, ...response2Json];
    return mergedResponse.sort((a, b) => b.jumlah_siswa - a.jumlah_siswa);
  }

  static async school(id) {
    const schoolResponse = await fetch(API_ENDPOINT.SCHOOL(id));
    const schoolResponseJson = await schoolResponse.json();
    const reviewsResponse = await fetch(API_ENDPOINT.REVIEWS(id));
    const reviewsResponseJson = await reviewsResponse.json();
    return { schoolResponseJson, reviewsResponseJson };
  }

  static async getResult(key, endpoint) {
    let responseJson = [];
    if (key && (key !== '') && (key !== 'all')) {
      const response = await fetch(endpoint);
      responseJson = await response.json();
    }
    return responseJson;
  }

  static async search(query) {
    const resultByKeywords = await this.getResult(query.query, API_ENDPOINT.SEARCH(query.query));
    const resultByNPSN = await this.getResult(query.npsn, API_ENDPOINT.SEARCHNPSN(query.npsn));
    const resultBySchoolName = await this.getResult(query.schoolname, API_ENDPOINT.SEARCHSCHOOLNAME(query.schoolname));
    const resultByLocation1 = await this.getResult(query.location, API_ENDPOINT.LOCATION1(query.location));
    const resultByLocation2 = await this.getResult(query.location, API_ENDPOINT.LOCATION2(query.location));
    const resultByLocation3 = await this.getResult(query.location, API_ENDPOINT.LOCATION3(query.location));
    const resultByAkreditasi = await this.getResult(query.akreditasi.toUpperCase(), API_ENDPOINT.AKREDITASI(query.akreditasi.toUpperCase()));

    const mergedResponse = [
      ...resultByKeywords,
      ...resultByNPSN,
      ...resultBySchoolName,
      ...resultByLocation1,
      ...resultByLocation2,
      ...resultByLocation3,
      ...resultByAkreditasi,
    ];

    const finalResult = Array.from(
      mergedResponse.reduce(
        (entryMap, e) => entryMap.set(e.id, { ...entryMap.get(e.id) || {}, ...e }),
        new Map(),
      ).values(),
    );

    return finalResult.sort((a, b) => b.jumlah_siswa - a.jumlah_siswa);
  }

  static async addReview(review, schoolID) {
    await fetch(API_ENDPOINT.REVIEWS(schoolID), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(review),
    });

    const response = await fetch(API_ENDPOINT.REVIEWS(schoolID));
    const responseJson = response.json();
    return responseJson;
  }
}

export default SchoolDbSource;
