import API_ENDPOINT from '../globals/api-endpoint';

class CategoryDbSource {
  static async categories() {
    const response = await fetch(API_ENDPOINT.CATEGORIES);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default CategoryDbSource;
