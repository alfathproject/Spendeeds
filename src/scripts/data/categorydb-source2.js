import _ from 'lodash';
import categories from './category.json';
import schools from './data.json';
import datacategories from './category-data.json';

class CategoryDbSource {
  static async categories() {
    return categories;
  }

  static async detail(id) {
    const category = _.find(categories, (item) => Number(item.id) === Number(id));
    const school = _.map(schools, (item) => item.id_kategori.includes(category.id));
    return { category, school };
  }
  
  static async categorized(category) {
    return datacategories.filter((school) => school.kecamatan.charAt(0).toLowerCase() === category);
  }
}


export default CategoryDbSource;
