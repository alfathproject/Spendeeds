/* eslint-disable no-unused-vars */
import { createAlertTemplate } from '../templates/template-creator';

class SearchSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <div class="text-center wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
          <h6 class="section-title bg-white text-center text-primary px-3">Mencari Sekolah?</h6>
          <h1 class="mb-5">Tuliskan Pencarian Disini</h1>
        </div>
        <div class="row g-4 justify-content-center">
          <div class="col wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
            <div class="row g-3">
              <div class="col-md-6 offset-md-2">
                <h6 class="text-muted ms-1 wow animate__animated animate__fadeIn">Cara Mudah Menemukan Sekolah Sesuai Kebutuhanmu</h6>
              </div>
            </div>
            <form action="/#/schools/search" method="GET" class="row g-3" id="searchForm">
              <div class="col-md-6 offset-md-2">
                <input type="text" name="query" class="form-control form-control-lg wow animate__animated animate__fadeInLeft" id="query" placeholder="Masukkan nama sekolah, lokasi, atau NPSN">
                <button class="btn btn-link float-end pe-0 wow animate__animated animate__fadeInUp" id="advancedSearchButton" type="button" data-bs-toggle="collapse" data-bs-target="#advancedSearch" aria-expanded="false" aria-controls="advancedSearch">Filter Pencarian</button>
                <div class="collapse float-end rounded" id="advancedSearch">
                  <div class="card card-body">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group mb-3">
                          <label for="npsn">NPSN :</label>
                          <input type="text" name="npsn" class="form-control" id="npsn" placeholder="NPSN">
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group mb-3">
                          <label for="schoolName">Nama Sekolah :</label>
                          <input type="text" name="schoolName" class="form-control" id="schoolName" placeholder="Nama Sekolah">
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group mb-3">
                          <label for="location">Lokasi :</label>
                          <input type="text" name="location" class="form-control" id="location" placeholder="Lokasi">
                        </div>
                      </div>
                    </div>
                    <div class="row mt-3">
                      <div class="col-md-2 pe-0">
                        <label for="akreditasi">Akreditasi :</label>
                      </div>
                      <div class="col">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="akreditasi" id="All" value="All" checked>
                          <label class="form-check-label" for="All">Semua</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="akreditasi" id="A" value="A">
                          <label class="form-check-label" for="A">A</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="akreditasi" id="B" value="B">
                          <label class="form-check-label" for="B">B</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="akreditasi" id="C" value="C">
                          <label class="form-check-label" for="C">C</label>
                        </div>
                      </div>
                      <div class="col-md-2">
                        <button type="reset" class="btn btn-primary btn-sm w-100">Reset</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2 d-flex align-items-end wow animate__animated animate__fadeInRight">
                <button class="btn btn-primary btn-block w-100 h-100" style="border-radius: 5px;"><i class="bi bi-search" style="font-size: 2rem;"></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>`;

    let toggled = false;
    if ($('#query').attr('disabled', false)) toggled = true;

    $('#advancedSearchButton').on('click', () => {
      $('#query').attr('disabled', !!toggled).val(null);
      toggled = !toggled;
    });

    $('#searchForm').on('submit', (e) => {
      e.preventDefault();

      const form = document.getElementById('searchForm');
      const formData = new FormData(form);
      const search = new URLSearchParams(formData);
      const queryString = search.toString();

      let inputs = [];
      for (const [key, value] of formData) { if (value && value !== 'All') inputs = inputs.push(value); }

      if (inputs.length < 1) {
        $('#query').trigger('focus');
        createAlertTemplate.alert(
          'warning',
          'Oopss!',
          "The Search field isn't filled yet!",
        );
      } else {
        window.location.href = `/#/search?${queryString}`;
      }
    });
  }
}

customElements.define('search-section', SearchSection);
