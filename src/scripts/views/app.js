import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ content }) {
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
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
