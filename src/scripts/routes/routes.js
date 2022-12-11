import Home from '../views/pages/home';
import Schools from '../views/pages/schools';
import Detail from '../views/pages/detail';
import Search from '../views/pages/search';
import Categories from '../views/pages/categories';
import Category from '../views/pages/category';
import Favorites from '../views/pages/favorites';
import About from '../views/pages/about';
import Contact from '../views/pages/contact';
import Popular from '../views/pages/popular';
import Acreditated from '../views/pages/acreditated';
import Akreditasi from '../views/pages/akreditasi';
import Location from '../views/pages/location';
import TermsAndConditions from '../views/pages/TermsAndConditions';
import Faqs from '../views/pages/faqs';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/schools': Schools,
  '/popular': Popular,
  '/acreditated': Acreditated,
  '/akreditasi/:id': Akreditasi,
  '/location/:id': Location,
  '/detail/:id': Detail,
  '/favorites': Favorites,
  '/about': About,
  '/contact': Contact,
  '/terms-and-conditions': TermsAndConditions,
  '/frequently-asked-questions': Faqs,
  '/search?:query': Search,
  '/categories': Categories,
  '/category/:id': Category,
};

export default routes;
