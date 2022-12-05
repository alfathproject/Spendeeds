class LandingContent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
      <div class="mw-100 p-3 d-flex justify-content-center align-items-center text-dark">
          <div class="text-center w-75 p-3">
              <h1 class="fw-bold">Why School Is Important?</h1>
              <small class="text-muted">Especially for people who have a special needs</small>
              <hr>
              <div class="row">
                  <div class="col-md-7">
                      <p class="pt-2 pb-2 m-0" style="text-align: justify;">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore amet exercitationem unde,
                          mollitia dolore expedita, soluta, repellat fugit accusamus laudantium dolores totam voluptatibus
                          eaque iste voluptatum cumque laborum est reiciendis numquam saepe. Maiores aliquam, magnam qui
                          veniam exercitationem enim accusamus laborum, maxime ipsum nesciunt quia eaque? Cupiditate
                          asperiores corporis nam facilis? Harum, maiores? Perferendis quia, minus accusamus corrupti
                          magni consectetur blanditiis. Fuga cumque id, omnis exercitationem quisquam vel esse voluptas,
                          veniam error libero voluptatibus nostrum! Quibusdam obcaecati nam, repellendus assumenda harum
                          omnis, corporis labore quaerat explicabo eveniet minus veniam in corrupti dicta doloremque odit
                      </p>
                  </div>
                  <div class="col-md-5 d-flex align-items-center justify-content-center">
                      <img src="./images/about.jpg" class="rounded-circle shadow" width="275" height="275" style="object-fit: cover;">
                  </div>
              </div>
              <hr>
          </div>
      </div>
      <div class="mw-100 p-3 d-flex justify-content-center align-items-center text-dark">
          <div class="text-center w-75 p-3">
              <h1 class="fw-bold">What is SN-SchoolFinder?</h1>
              <small class="text-muted">Especially for people who have a special needs</small>
              <hr>
              <div class="row">
                  <div class="col d-flex align-items-center justify-content-center">
                      <img src="./images/about2.jpg" class="rounded-circle shadow" width="250" height="250" style="object-fit: cover;">
                  </div>
                  <div class="col">
                      <p class="pt-2 pb-2 m-0" style="text-align: justify;">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore amet exercitationem unde,
                          mollitia dolore expedita, soluta, repellat fugit accusamus laudantium dolores totam voluptatibus
                          eaque iste voluptatum cumque laborum est reiciendis numquam saepe. Maiores aliquam, magnam qui
                          veniam exercitationem enim accusamus laborum, maxime ipsum nesciunt quia eaque? Cupiditate
                          asperiores corporis nam facilis? Harum, maiores? Perferendis quia, minus accusamus corrupti
                          magni consectetur blanditiis. Fuga cumque id, omnis exercitationem quisquam vel esse voluptas,
                          veniam error libero voluptatibus nostrum! Quibusdam obcaecati nam, repellendus assumenda harum
                          omnis, corporis labore quaerat explicabo eveniet minus veniam in corrupti dicta doloremque odit
                      </p>
                  </div>
              </div>
              <hr>
          </div>
      </div>
      `;
    }
}

customElements.define("landing-content", LandingContent);
