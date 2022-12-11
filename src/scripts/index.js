import 'regenerator-runtime';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';
import '../styles/style.scss';
import '../styles/style.css';
import './views/components/head-bar';
import './views/components/foot-bar';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({ content: document.querySelector('#content') });

window.addEventListener('hashchange', () => {
  app.renderPage();
  $('html, body').animate({ scrollTop: 0 });
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
