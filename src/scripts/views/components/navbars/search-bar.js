class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `
            <style>
                input {
                    background-color: #c9d1d9 !important;
                }
            </style>

            <form class="d-flex" role="search">
                <input id="searchElement" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-info" type="submit">Search</button>
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

customElements.define("search-bar", SearchBar);