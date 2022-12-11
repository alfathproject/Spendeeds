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
    console.log(result);

    return { category: categoryResponseJson, categorized: result.sort((a, b) => b.jumlah_siswa - a.jumlah_siswa) };
  }
}

export default CategoryDbSource;
