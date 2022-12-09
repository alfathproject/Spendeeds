class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
            <form class="d-flex" role="search">
                <input id="searchElement" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn text-light" type="submit" style="background-color: #0ea5e9"><i class="bi bi-search"></i></button>
            </form>
        `;

    // this.querySelector("form").addEventListener("submit", event => {
    //     event.preventDefault();
    //     try {
    //         this._clickEvent();
    //     } catch (e) {
    //         console.log(e);
    //         alert('Please enter a search term');
    //     }
    // });
  }
}

customElements.define('search-bar', SearchBar);
