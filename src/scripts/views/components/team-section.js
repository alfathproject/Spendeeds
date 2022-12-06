import './team-item';

class TeamSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <div class="text-center wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3">Team</h6>
          <h1 class="mb-5">Our Team</h1>
        </div>
        <div class="row g-4">
          <team-item class="col-lg-3 col-md-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s"></team-item>
          <team-item class="col-lg-3 col-md-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s"></team-item>
          <team-item class="col-lg-3 col-md-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.5s"></team-item>
          <team-item class="col-lg-3 col-md-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.7s"></team-item>
        </div>
      </div>`;
  }
}

customElements.define('team-section', TeamSection);
