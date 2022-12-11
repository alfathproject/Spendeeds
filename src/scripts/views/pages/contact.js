export default {
  render() {
    return `
      <!-- Header -->
      <header-section class="container-fluid bg-primary py-5 mb-5 page-header d-block"></header-section>

      <!-- Contact -->
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
            <h6 class="section-title bg-white text-center text-primary px-3">Kontak Kami</h6>
            <h1 class="mb-5">Kami Siap Membantu!</h1>
          </div>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <h5>Hubungi Kami</h5>
              <p class="mb-4">Untuk mewujudkan pendidikan sesuai dengan kualitas yang diinginkan agar dapat menjaga semangat juang dan mimpi-mimpi peserta didik bisa terealisasikan dan bercahaya.</p>
              <div class="d-flex align-items-center mb-3">
                <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style="width: 50px; height: 50px;">
                  <i class="bi bi-geo-alt-fill text-white"></i>
                </div>
                <div class="ms-3">
                  <h5 class="text-primary">Kantor</h5>
                  <p class="mb-0">Jl Kemanggisan Ilir, DKI Jakarta</p>
                </div>
              </div>
              <div class="d-flex align-items-center mb-3">
                <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style="width: 50px; height: 50px;">
                  <i class="bi bi-telephone-fill text-white"></i>
                </div>
                <div class="ms-3">
                  <h5 class="text-primary">Kontak</h5>
                  <p class="mb-0">0-21-530-7714</p>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style="width: 50px; height: 50px;">
                  <i class="bi bi-envelope-fill text-white"></i>
                </div>
                <div class="ms-3">
                  <h5 class="text-primary">Email</h5>
                  <p class="mb-0">info@gmail.com</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
              <iframe class="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.48788418327!2d106.68943088528376!3d-6.229728025911178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta!5e0!3m2!1sen!2sid!4v1669741975346!5m2!1sen!2sid" frameborder="0" style="min-height: 300px; border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            <div class="col-lg-4 col-md-12 wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
              <form>
                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input type="text" class="form-control" id="name" placeholder="Your Name">
                      <label for="name">Nama</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input type="email" class="form-control" id="email" placeholder="Your Email">
                      <label for="email">Email</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating">
                      <input type="text" class="form-control" id="subject" placeholder="Subject">
                      <label for="subject">Subjek</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating">
                      <textarea class="form-control" placeholder="Leave a message here" id="message" style="height: 150px"></textarea>
                      <label for="message">Pesan</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary w-100 py-3" type="submit">Kirim Pesan</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>`;
  },

  async afterRender() {
    const headerSection = document.querySelector('header-section');
    headerSection.header = {
      title: 'Kontak Kami',
      page: 'Kontak',
    };
  },
};
