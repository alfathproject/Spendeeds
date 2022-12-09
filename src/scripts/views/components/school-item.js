class SchoolItem extends HTMLElement {
  /**
   * @param {any} schools
   */
  set school(school) {
    this._school = school;

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="school-item bg-light">
        <div class="position-relative overflow-hidden">
          <img class="img-fluid" src="./img/schools/school-1.jpg" alt="Gambar ${this._school.nama_sekolah}">
          <div class="w-100 d-flex justify-content-between position-absolute bottom-0 start-0 mb-4">
            <a href="/#/akreditasi/${this._school.akreditasi}" class="flex-shrink-0 btn btn-sm btn-primary px-3" style="border-radius: 0 30px 30px 0;"><i class="bi bi-patch-check text-light me-2"></i>Akreditasi : ${this._school.akreditasi}</a>
            <a href="/#/detail/${this._school.npsn}" class="flex-shrink-0 btn btn-sm btn-primary px-3" style="border-radius: 30px 0 0 30px;">Read More</a>
          </div>
        </div>
        <div class="text-center p-4 pb-0">
          <a href="/#/detail/${this._school.npsn}" class="h4 d-block mb-3 text-truncate" title="${this._school.nama_sekolah}">${this._school.nama_sekolah}</a>
          <a href="/#/location/${this._school.kecamatan}" class="h6 d-block mb-4"><i class="bi bi-geo-alt text-danger me-2"></i>${this._school.kelurahan}, ${this._school.kecamatan}</a>
        </div>
        <div class="d-flex border-top">
          <small class="flex-fill text-center border-end p-2 text-truncate" title="${this._school.kepala_sekolah}"><i class="bi bi-person-fill-check text-primary me-2"></i>${this._school.kepala_sekolah}</small>
          <small class="flex-fill text-center border-end p-2" style="min-width: 125px;"><i class="bi bi-people-fill text-primary me-2"></i>${this._school.jumlah_guru} Teachers</small>
          <small class="flex-fill text-center p-2" style="min-width: 125px;"><i class="bi bi-people-fill text-primary me-2"></i>${this._school.jumlah_siswa} Students</small>
        </div>
      </div>`;
  }
}

customElements.define('school-item', SchoolItem);
