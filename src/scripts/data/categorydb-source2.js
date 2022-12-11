import _ from 'lodash';
import categories from './category.json';
import schools from './data.json';

class CategoryDbSource {
  static async categories() {
    return categories;
  }

  static async detail(id) {
    const category = _.find(categories, (item) => Number(item.id) === Number(id));
    const school = _.map(schools, (item) => item.id_kategori.includes(category.id));
    return { category, school };
  }
}

export default CategoryDbSource;
