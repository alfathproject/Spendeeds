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
          <h6 class="section-title bg-white text-center text-primary px-3">Our Team</h6>
          <h1 class="mb-5">Meet Our Team!</h1>
        </div>
        <team-list id="teamList" class="row g-4 justify-content-center"></team-list>
      </div>`;

    const teamList = document.querySelector('#teamList');
    teamList.team = this._team;
  }

  async afterRender(){
    const team = await teamSource.team();
    const teamList = document.querySelector('#team-list');
    const delayCounter = (i) => i + 0.2;
    let i = 0.1;
    team.forEach((member)=>{
      const teamItem = document.createElement('team-item');
      teamItem.team = member;

      teamItem.classList.add(
        'col-lg-3',
        'col-md-6',
        'wow',
        'animate__animated',
        'animate__fadeInUp',
      );

      teamItem.setAttribute('data-wow-delay', `${i}s`);

      delayCounter(i);

      teamList.appendChild(teamItem);
    })
  } 
}

customElements.define('team-section', TeamSection);
