class FootBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-3 col-md-6 d-flex justify-content-center align-items-center">
            <img src="./img/Spendeeds-Light.png" alt="SPENDEEDS LOGO" class="w-75">
          </div>
          <div class="col-lg-3 col-md-6">
            <h4 class="text-white mb-3">Quick Link</h4>
            <a class="btn btn-link" href="/#/"><i class="bi bi-chevron-right me-2" style="font-size: .7rem;"></i>Home</a>
            <a class="btn btn-link" href="/#/schools"><i class="bi bi-chevron-right me-2" style="font-size: .7rem;"></i>List of Schools</a>
            <a class="btn btn-link" href="/#/categories"><i class="bi bi-chevron-right me-2" style="font-size: .7rem;"></i>School Categories</a>
            <a class="btn btn-link" href="/#/favorites"><i class="bi bi-chevron-right me-2" style="font-size: .7rem;"></i>Favorited Schools</a>
            <a class="btn btn-link" href="/#/feedbacks"><i class="bi bi-chevron-right me-2" style="font-size: .7rem;"></i>User Feedbacks</a>
            <a class="btn btn-link" href="/#/about"><i class="bi bi-chevron-right me-2" style="font-size: .7rem;"></i>About</a>
            <a class="btn btn-link" href="/#/contact"><i class="bi bi-chevron-right me-2" style="font-size: .7rem;"></i>Contact Us</a>
          </div>
          <div class="col-lg-3 col-md-6">
            <h4 class="text-white mb-3">Contact</h4>
            <p class="mb-2"><i class="bi bi-geo-alt-fill me-3"></i>Jl Kemanggisan Ilir, DKI Jakarta</p>
            <p class="mb-2"><i class="bi bi-telephone-fill me-3"></i>0-21-530-7714</p>
            <p class="mb-2"><i class="bi bi-envelope-fill me-3"></i>email@gmail.com</p>
            <div class="d-flex pt-2">
              <a class="btn btn-outline-light btn-social" href="#"><i class="bi bi-twitter"></i></a>
              <a class="btn btn-outline-light btn-social" href="#"><i class="bi bi-facebook"></i></a>
              <a class="btn btn-outline-light btn-social" href="#"><i class="bi bi-youtube"></i></a>
              <a class="btn btn-outline-light btn-social" href="#"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h4 class="text-white mb-3">Get in touch</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div class="position-relative mx-auto" style="max-width: 400px;">
              <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email">
              <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="copyright">
          <div class="row">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
              Copyright &copy; 2022, All Right Reserved.
            </div>
            <div class="col-md-6 text-center text-md-end">
              <div class="footer-menu">
                <a href="#">Term & Conditions</a>
                <a href="#">Help</a>
                <a href="#">FAQs</a>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }
}

customElements.define('foot-bar', FootBar);
