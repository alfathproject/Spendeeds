import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Schools from '../views/pages/schools';
import Categories from '../views/pages/categories';
import Category from '../views/pages/category';
import Favorites from '../views/pages/favorites';
import Feedbacks from '../views/pages/feedbacks';
import About from '../views/pages/about';
import Contact from '../views/pages/contact';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/schools': Schools,
  '/detail/:id': Detail,
  '/categories': Categories,
  '/category/:id': Category,
  '/favorites': Favorites,
  '/feedbacks': Feedbacks,
  '/about': About,
  '/contact': Contact,
};

export default routes;
