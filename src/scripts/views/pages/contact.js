import feedbackFormInitiator from '../../utils/feedback-form-initiator';

export default {
  render() {
    return `
      <!-- Header -->
      <header-section class="container-fluid bg-primary py-5 mb-5 page-header d-block"></header-section>

      <!-- Contact -->
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
            <h6 class="section-title bg-white text-center text-primary px-3">Contact Us</h6>
            <h1 class="mb-5">Contact For Any Query!</h1>
          </div>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <h5>Get In Touch</h5>
              <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur deserunt molestiae ipsum, eos vel recusandae animi omnis maiores architecto possimus, quae placeat sint rem ad..</p>
              <div class="d-flex align-items-center mb-3">
                <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style="width: 50px; height: 50px;">
                  <i class="bi bi-geo-alt-fill text-white"></i>
                </div>
                <div class="ms-3">
                  <h5 class="text-primary">Office</h5>
                  <p class="mb-0">Jl Kemanggisan Ilir, DKI Jakarta</p>
                </div>
              </div>
              <div class="d-flex align-items-center mb-3">
                <div class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style="width: 50px; height: 50px;">
                  <i class="bi bi-telephone-fill text-white"></i>
                </div>
                <div class="ms-3">
                  <h5 class="text-primary">Mobile</h5>
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
              <h5>Berikan Feedback Anda!</h5>
              <form class="mt-3" id="feedbackForm">
                <div class="row g-3">
                  <div class="col-12">
                    <div class="form-floating">
                      <input type="text" class="form-control" id="name" placeholder="Nama Lengkap" required>
                      <label for="name">Nama Lengkap</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating">
                      <textarea class="form-control" placeholder="Tuliskan Masukan Anda" id="feedback" style="height: 150px"  required></textarea>
                      <label for="feedback">Tuliskan Masukkan Anda</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary w-100 py-3" type="submit">Kirim Masukan<i class="bi bi-send-check ms-3"></i></button>
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
      title: 'Contact Us',
      page: 'Contact',
    };

    document.querySelector('#feedbackForm').addEventListener('submit', (e) => {
      e.preventDefault();

      const date = new Date();
      const y = date.getFullYear();
      const m = date.getMonth() + 1;
      const d = date.getDate();
      const dateString = `${y}/${m}/${d}`;

      const feedback = {
        nama: document.querySelector('#name').value,
        feedback: document.querySelector('#feedback').value,
        tanggal: dateString,
      };

      feedbackFormInitiator.init(feedback);
    });
  },
};
