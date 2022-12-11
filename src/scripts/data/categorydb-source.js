/* eslint-disable array-callback-return */
import { isUndefined } from 'lodash';
import API_ENDPOINT from '../globals/api-endpoint';

class CategoryDbSource {
  static async categories() {
    const response = await fetch(API_ENDPOINT.CATEGORIES);
    const responseJson = await response.json();
    return responseJson;
  }

  static async category(id) {
    const categoryResponse = await fetch(API_ENDPOINT.CATEGORY(id));
    const categoryResponseJson = await categoryResponse.json();
    const schoolResponse = await fetch(API_ENDPOINT.SCHOOLS);
    const schoolResponseJson = await schoolResponse.json();

    const filterByCategorys = [categoryResponseJson.id];
    const filterByCategorySet = new Set(filterByCategorys);
    const result = schoolResponseJson.filter((o) => o.id_kategori.some((c) => filterByCategorySet.has(c)));

    return { category: categoryResponseJson, categorizedSchool: result.sort((a, b) => b.jumlah_siswa - a.jumlah_siswa) };
  }

  static async categorized(category) {
    const response = await fetch(API_ENDPOINT.SCHOOLS);
    const responseJson = await response.json();
    const schools = responseJson.map((el) => {
      if (el.kecamatan) return el;
    });

    const filtered = [];
    schools.map((el) => {
      if (el) if (el.kecamatan.charAt(0).toLowerCase() === category) filtered.push(el);
    });
    return filtered;
  }
}

export default CategoryDbSource;
