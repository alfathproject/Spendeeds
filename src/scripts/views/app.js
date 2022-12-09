import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import '../utils/shell-initiator';
import { createLoaderTemplate } from './templates/template-creator';

class App {
  constructor({ content }) {
    this._content = content;
  }

  async renderPage() {
    this._content.innerHTML = createLoaderTemplate;

    let url = UrlParser.parseActiveUrlWithCombiner();

    if (url.split('?').length > 1) url = UrlParser.parseActiveUrlWithQuery();

    if (url !== '/skipContent') {
      const page = routes[url];

      try {
        this._content.innerHTML = await page.render();
        await page.afterRender();
      } catch (error) {
        console.log(error);
        console.log('404 Not found!');
      }
    }
  }
}

export default App;
