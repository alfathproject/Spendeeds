class TeamItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="team-item bg-light">
        <div class="overflow-hidden">
          <img class="img-fluid" src="./img/team-1.jpg" alt="">
        </div>
        <div class="position-relative d-flex justify-content-center" style="margin-top: -23px;">
          <div class="bg-light d-flex justify-content-center pt-2 px-1">
            <a class="btn btn-sm-square btn-primary mx-1" href="#"><i class="bi bi-facebook"></i></a>
            <a class="btn btn-sm-square btn-primary mx-1" href="#"><i class="bi bi-twitter"></i></a>
            <a class="btn btn-sm-square btn-primary mx-1" href="#"><i class="bi bi-instagram"></i></a>
          </div>
        </div>
        <div class="text-center p-4">
          <h5 class="mb-0">DALIMAN, S.Pd</h5>
          <small>Headmaster</small>
        </div>
      </div>`;
  }
}

customElements.define('team-item', TeamItem);
