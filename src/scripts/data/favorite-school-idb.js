/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'npsn' });
  },
});

const FavoriteSchoolIdb = {
  async schools() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },

  async detail(npsn) {
    if (!npsn) return;
    return (await dbPromise).get(OBJECT_STORE_NAME, npsn);
  },

  async put(school) {
    if (!school.hasOwnProperty('npsn')) return;
    return (await dbPromise).put(OBJECT_STORE_NAME, school);
  },

  async delete(npsn) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, npsn);
  },
};

export default FavoriteSchoolIdb;
