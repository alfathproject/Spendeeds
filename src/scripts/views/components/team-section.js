import './team-list';

class TeamSection extends HTMLElement {
  /**
   * @param {any} schools
   */
  set team(team) {
    this._team = team;

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <div class="text-center wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3">Tim Kami</h6>
          <h1 class="mb-5">Kenal Lebih Dekat!</h1>
        </div>
        <team-list id="teamList" class="row g-4 justify-content-center"></team-list>
      </div>`;

    const teamList = document.querySelector('#teamList');
    teamList.team = this._team;
  }
}

customElements.define('team-section', TeamSection);
