import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteSchoolIdb = {
  async getSchool(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllSchools() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putSchool(school) {
    if (!school.hasOwnProperty('id')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, school);
  },
  async deleteSchool(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
  async searchSchools(query) {
    return (await this.getAllSchools()).filter((school) => {
      const loweredCaseSchoolName = (
        school.name || '-'
      ).toLowerCase();
      const jammedSchoolName = loweredCaseSchoolName.replace(
        /\s/g,
        '',
      );

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedSchoolName.indexOf(jammedQuery) !== -1;
    });
  },
};

export default FavoriteSchoolIdb;
