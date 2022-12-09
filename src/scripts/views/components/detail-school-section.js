/* eslint-disable prefer-destructuring */
class DetailSchoolSection extends HTMLElement {
  /**
   * @param {any} schools
   */
  set school(school) {
    this._school = school[0];

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-6 wow animate__animated animate__fadeInLeft" data-wow-delay="0.1s" style="min-height: 400px;">
            <div class="position-relative h-100">
              <img class="img-fluid position-absolute w-100 h-100" src="./img/schools/school-1.jpg" alt="Gambar ${this._school.nama_sekolah}" style="object-fit: cover;">
            </div>
          </div>
          <div class="col-lg-6 wow animate__animated animate__fadeInRight" data-wow-delay="0.3s">
            <h6 class="section-title bg-white text-start text-primary pe-3">School Detail</h6>
            <h1 class="mb-3">${this._school.nama_sekolah || '-'}</h1>
            <p class="mb-3">
              <i class="bi bi-patch-check-fill text-primary me-2"></i>Akreditasi : ${this._school.akreditasi || '-'}
              <i class="bi bi-people-fill text-primary ms-4 me-2"></i>${this._school.jumlah_siswa || '-'} Siswa
              <i class="bi bi-people-fill text-primary ms-4 me-2"></i>${this._school.jumlah_guru || '-'} Guru
            </p>
            <p class="mb-4"><i class="bi bi-geo-alt-fill text-primary me-2"></i>${(this._kelurahan || this._kecamatan) ? `${this._kelurahan}, ${this._kecamatan}` : '-'}</p>
            <h5>Informasi Lengkap</h5>
            <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deserunt molestiae ipsum, eos vel recusandae animi omnis maiores architecto possimus, quae placeat sint rem ad..</p>
            <div class="row">
              <div class="col">
                <div class="d-flex align-items-center mb-3">
                  <div class="d-flex align-items-center justify-content-center bg-primary" style="width: 50px; height: 50px;">
                    <i class="bi bi-patch-check text-white fs-5"></i>
                  </div>
                  <div class="ms-3">
                    <h5 class="text-primary">Akreditasi</h5>
                    <p class="mb-0">${this._school.akreditasi}</p>
                  </div>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <div class="d-flex align-items-center justify-content-center bg-primary" style="width: 50px; height: 50px;">
                    <i class="bi bi-telephone text-white fs-5"></i>
                  </div>
                  <div class="ms-3">
                    <h5 class="text-primary">Kontak</h5>
                    <p class="mb-0">${this._school.telp_sekolah}</p>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="d-flex align-items-center justify-content-center bg-primary" style="width: 50px; height: 50px;">
                    <i class="bi bi-geo-alt text-white fs-5"></i>
                  </div>
                  <div class="ms-3">
                    <h5 class="text-primary">Alamat</h5>
                    <p class="mb-0">${this._school.alamat}</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="d-flex align-items-center mb-3">
                  <div class="d-flex align-items-center justify-content-center bg-primary" style="width: 50px; height: 50px;">
                    <i class="bi bi-tags text-white fs-5"></i>
                  </div>
                  <div class="ms-3">
                    <h5 class="text-primary">NPSN</h5>
                    <p class="mb-0">${this._school.npsn}</p>
                  </div>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <div class="d-flex align-items-center justify-content-center bg-primary" style="width: 50px; height: 50px;">
                    <i class="bi bi-person-bounding-box text-white fs-5"></i>
                  </div>
                  <div class="ms-3">
                    <h5 class="text-primary">Kepala Sekolah</h5>
                    <p class="mb-0">${this._school.kepala_sekolah}</p>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <div class="d-flex align-items-center justify-content-center bg-primary" style="width: 50px; height: 50px;">
                    <i class="bi bi-geo text-white fs-5"></i>
                  </div>
                  <div class="ms-3">
                    <h5 class="text-primary">Koordinat</h5>
                    <p class="mb-0">${this._school.latitude || this._school.longitude ? `${this._school.latitude}, ${this._school.longitude}` : '-'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }
}

customElements.define('detail-school-section', DetailSchoolSection);
