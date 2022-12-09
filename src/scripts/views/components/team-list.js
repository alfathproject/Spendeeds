/* eslint-disable array-callback-return */
import './team-item';

class TeamList extends HTMLElement {
  /**
   * @param {any} team
   */
  set team(team) {
    this._team = team;

    this.render();
  }

  render() {
    this.innerHTML = '';

    if (typeof this._team !== 'undefined' && this._team.length) {
      this._team.map((team, i) => {
        const teamItem = document.createElement('team-item');
        teamItem.team = team;

        teamItem.classList.add(
          'col-md-6',
          'col-lg-3',
          'wow',
          'animate__animated',
          'animate__fadeInUp',
        );
        teamItem.setAttribute('data-wow-delay', `${(i + 10) / 15}s`);

        this.appendChild(teamItem);
      });
    } else {
      this.innerHTML = `
        <div class="col wow animate__animated animate__bounceInDown alert alert-warning alert-dismissible fade show text-center h5" role="alert">
          <i class="bi bi-info-circle me-1"></i>
          <strong>Oopss!</strong> Tidak ada team untuk ditampilkan.
        </div>`;
    }
  }
}

customElements.define('team-list', TeamList);
