class CategorizedSchoolsSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set schools(schools) {
    this._schools = schools;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <div class="text-center wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3">Schools</h6>
          <h1 class="mb-5">Categorized Schools By Kecamatan</h1>
        </div>
        <div class="container-fluid">
          <div class="row justify-content-center text-center wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
            <div class="col"><a href="/#/category/A">a</a></div>
            <div class="col"><a href="/#/category/B">b</a></div>
            <div class="col"><a href="/#/category/C">c</a></div>
            <div class="col"><a href="/#/category/D">d</a></div>
            <div class="col"><a href="/#/category/E">e</a></div>
            <div class="col"><a href="/#/category/F">f</a></div>
            <div class="col"><a href="/#/category/G">g</a></div>
            <div class="col"><a href="/#/category/H">h</a></div>
            <div class="col"><a href="/#/category/I">i</a></div>
            <div class="col"><a href="/#/category/J">j</a></div>
            <div class="col"><a href="/#/category/K">k</a></div>
            <div class="col"><a href="/#/category/L">l</a></div>
            <div class="col"><a href="/#/category/M">m</a></div>
            <div class="col"><a href="/#/category/N">n</a></div>
            <div class="col"><a href="/#/category/O">o</a></div>
            <div class="col"><a href="/#/category/P">p</a></div>
            <div class="col"><a href="/#/category/Q">q</a></div>
            <div class="col"><a href="/#/category/R">r</a></div>
            <div class="col"><a href="/#/category/S">s</a></div>
            <div class="col"><a href="/#/category/T">t</a></div>
            <div class="col"><a href="/#/category/U">u</a></div>
            <div class="col"><a href="/#/category/V">v</a></div>
            <div class="col"><a href="/#/category/W">w</a></div>
            <div class="col"><a href="/#/category/X">x</a></div>
            <div class="col"><a href="/#/category/Y">y</a></div>
            <div class="col"><a href="/#/category/Z">z</a></div>
          </div>
        </div>
      </div>`;
  }
}

customElements.define('categorized-schools-section', CategorizedSchoolsSection);
