const CONFIG = {
  BASE_URL: '',
  BASE_IMAGE_URL: (size) => `.../images/${size}/`,
  BASE_CATEGORY_IMAGE_URL: (img) => `../../public/categoryimg/${img}`,
  CACHE_NAME: 'spendeeds_cache',
  DATABASE_NAME: 'spendeeds_db',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'spendeeds_obj',
};

export default CONFIG;
