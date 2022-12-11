class FaqsSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container">
            <div class="text-center wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                <h6 class="section-title bg-white text-center text-primary px-3">FAQs</h6>
                <h1 class="mb-5">Frequently Asked Questions</h1>
            </div>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Apa itu Spendeeds?</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Spendeeds adalah sebuah website yang berguna untuk memudahkan anak penyandang disabilitas menemukan sekolah yang cocok dan sesuai.
                        </div>
                    </div>
                    </div>
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Bagaimana cara menemukan rekomendasi sekolah di Spendeeds?</strong> 
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Pengguna dapat masuk mengisi kolom pencarian dengan menggunakan NPSN, nama sekolah, ataupun lokasi. Website akan memberikan hasil sesuai rekomendasi.
                        </div>
                    </div>
                    </div>
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Standar rekomendasi yang Spendeeds gunakan berdasarkan apa?</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Rekomendasi yang Spendeeds gunakan adalah berdasarkan sekolah terpopuler, lokasi terdekat, dan tingkat akreditasi tertinggi.
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
  }
}

customElements.define('faqs-section', FaqsSection);
