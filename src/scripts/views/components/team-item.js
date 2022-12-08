class TeamItem extends HTMLElement {
  /**
   * @param {any} team
   */
  set team(team) {
    this._team = team;

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="team-item bg-light">
        <div class="overflow-hidden">
          <img class="img-fluid" src="./img/${this._team.photo}" alt="">
        </div>
        <div class="position-relative d-flex justify-content-center" style="margin-top: -23px;">
          <div class="bg-light d-flex justify-content-center pt-2 px-1">
            <a class="btn btn-sm-square btn-primary mx-1" href="https://web.facebook.com/${this._team.sosmed.facebook}" target="_blank"><i class="bi bi-facebook"></i></a>
            <a class="btn btn-sm-square btn-primary mx-1" href="https://twitter.com/${this._team.sosmed.twitter}" target="_blank"><i class="bi bi-twitter"></i></a>
            <a class="btn btn-sm-square btn-primary mx-1" href="https://www.instagram.com/${this._team.sosmed.instagram}" target="_blank"><i class="bi bi-instagram"></i></a>
          </div>
        </div>
        <div class="text-center p-4">
          <h5 class="mb-0">${this._team.name}</h5>
          <small>${this._team.job}</small>
        </div>
      </div>`;
  }
}

customElements.define('team-item', TeamItem);
