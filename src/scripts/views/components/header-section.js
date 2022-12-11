class HeaderSection extends HTMLElement {
  /**
   * @param {any} restaurants
   */
  set header(header) {
    this._title = header.title;
    this._page = header.page;

    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container py-5">
        <div class="row justify-content-center">
          <div class="col-lg-10 text-center">
            <h1 class="display-3 text-white animate__animated animate__slideInDown">${this._title}</h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item text-white"><a href="/#/" class="text-white">Beranda</a></li>
                <li class="breadcrumb-item text-white">Halaman</li>
                <li class="breadcrumb-item text-white active" aria-current="page">${this._page}</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>`;
  }
}

customElements.define('header-section', HeaderSection);
