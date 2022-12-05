class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="navbar-collapse" id="navbarNavAltMarkup">
                <a class="navbar-brand" href="">
                    <img src="./images/inclusive.png" alt="Logo App bar" width="50" height="50">
                    SN-SchoolFinder
                </a>
                <ul class="navbar-nav me-3 mb-3 mb-lg-0">
                    <li class="nav-item"><a class="sn-home nav-link" href="">Home</a></li>
                    <li class="nav-item"><a class="sn-schools nav-link" href="">List School</a></li>
                    <li class="nav-item"><a class="sn-about nav-link" href="">About Us</a></li>
                </ul>
            </div>
        `;
    }
}

customElements.define("nav-bar", NavBar);