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
          <h6 class="section-title bg-white text-center text-primary px-3">Sekolah</h6>
          <h1 class="mb-5">Kategori Sekolah berdasarkan Kecamatan</h1>
        </div>
        <div class="container-fluid">
          <div class="row justify-content-center text-center wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
            <div class="col"><a href="/#/categorized/A">a</a></div>
            <div class="col"><a href="/#/categorized/B">b</a></div>
            <div class="col"><a href="/#/categorized/C">c</a></div>
            <div class="col"><a href="/#/categorized/D">d</a></div>
            <div class="col"><a href="/#/categorized/E">e</a></div>
            <div class="col"><a href="/#/categorized/F">f</a></div>
            <div class="col"><a href="/#/categorized/G">g</a></div>
            <div class="col"><a href="/#/categorized/H">h</a></div>
            <div class="col"><a href="/#/categorized/I">i</a></div>
            <div class="col"><a href="/#/categorized/J">j</a></div>
            <div class="col"><a href="/#/categorized/K">k</a></div>
            <div class="col"><a href="/#/categorized/L">l</a></div>
            <div class="col"><a href="/#/categorized/M">m</a></div>
            <div class="col"><a href="/#/categorized/N">n</a></div>
            <div class="col"><a href="/#/categorized/O">o</a></div>
            <div class="col"><a href="/#/categorized/P">p</a></div>
            <div class="col"><a href="/#/categorized/Q">q</a></div>
            <div class="col"><a href="/#/categorized/R">r</a></div>
            <div class="col"><a href="/#/categorized/S">s</a></div>
            <div class="col"><a href="/#/categorized/T">t</a></div>
            <div class="col"><a href="/#/categorized/U">u</a></div>
            <div class="col"><a href="/#/categorized/V">v</a></div>
            <div class="col"><a href="/#/categorized/W">w</a></div>
            <div class="col"><a href="/#/categorized/X">x</a></div>
            <div class="col"><a href="/#/categorized/Y">y</a></div>
            <div class="col"><a href="/#/categorized/Z">z</a></div>
          </div>
        </div>
      </div>`;
  }
}

customElements.define('categorized-schools-section', CategorizedSchoolsSection);
