import '../components/services-section';
import '../components/about-section';
import '../components/categories-section';
import '../components/search-section';
import '../components/popular-schools-section';
import '../components/acreditated-schools-section';
import '../components/team-section';
import '../components/feedbacks-section';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel';
import CategoryDbSource from '../../data/categorydb-source';
import SchoolDbSource from '../../data/schooldb-source';
import TeamDbSource from '../../data/teamdb-source2';

export default {
  render() {
    return `
      <!-- Carousel -->
      <div class="container-fluid p-0 mb-5">
        <div class="owl-carousel header-carousel position-relative">
          <div class="owl-carousel-item position-relative">
            <img class="img-fluid" src="./img/carousel/carousel-1.jpg" alt="">
            <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style="background: rgba(24, 29, 56, .7);">
              <div class="container">
                <div class="row justify-content-start">
                  <div class="col-sm-10 col-lg-8">
                    <h5 class="text-primary text-uppercase mb-3 animate__animated animate__slideInDown">Spendeeds help you to</h5>
                    <h1 class="display-3 text-white animate__animated animate__slideInDown">Explore Special Needs Schools</h1>
                    <p class="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                    <a href="#about" class="btn btn-light py-md-3 px-md-5 me-3 animate__animated animate__slideInLeft">About</a>
                    <a href="#category" class="btn btn-primary py-md-3 px-md-5 animate__animated animate__slideInRight">Explore Now<i class="bi bi-arrow-right ms-3"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="owl-carousel-item position-relative">
            <img class="img-fluid" src="./img/carousel/carousel-2.jpg" alt="">
            <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style="background: rgba(24, 29, 56, .7);">
              <div class="container">
                <div class="row justify-content-start">
                  <div class="col-sm-10 col-lg-8">
                    <h5 class="text-primary text-uppercase mb-3 animate__animated animate__slideInDown">Spendeeds help you to</h5>
                    <h1 class="display-3 text-white animate__animated animate__slideInDown">Provide Educational Informations
                    </h1>
                    <p class="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                    <a href="#about" class="btn btn-light py-md-3 px-md-5 me-3 animate__animated animate__slideInLeft">About</a>
                    <a href="#category" class="btn btn-primary py-md-3 px-md-5 animate__animated animate__slideInRight">Explore Now<i class="bi bi-arrow-right ms-3"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <!-- Service -->
      <services-section class="container-xxl py-5"></services-section>
    
      <!-- About -->
      <about-section class="container-xxl py-5" id="about"></about-section>
    
      <!-- Categories -->
      <categories-section class="container-xxl py-5 category" id="category"></categories-section>
    
      <!-- Search -->
      <search-section class="container-xxl py-5"></search-section>
    
      <!-- Popular Schools -->
      <popular-schools-section class="container-xxl py-5"></popular-schools-section>
    
      <!-- Acreditated Schools -->
      <acreditated-schools-section class="container-xxl py-5"></acreditated-schools-section>
    
      <!-- Team -->
      <team-section class="container-xxl py-5"></team-section>
    
      <!-- Testimonial -->
      <feedbacks-section class="container-xxl py-5 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s"></feedbacks-section>`;
  },

  async afterRender() {
    // Header carousel
    $('.header-carousel').owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      items: 1,
      dots: false,
      loop: true,
      nav: $(window).width() >= 580,
      navText: [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>',
      ],
    });

    const categories = await CategoryDbSource.categories();
    const CategoriesSection = document.querySelector('categories-section');
    CategoriesSection.categories = categories;

    const popularSchools = await SchoolDbSource.popularSchools();
    const PopularSchoolsSection = document.querySelector(
      'popular-schools-section',
    );
    PopularSchoolsSection.schools = popularSchools;

    const acreditatedSchools = await SchoolDbSource.acreditatedSchools();
    const AcreditatedSchoolsSection = document.querySelector(
      'acreditated-schools-section',
    );
    AcreditatedSchoolsSection.schools = acreditatedSchools;

    const team = await TeamDbSource.team();
    const TeamSection = document.querySelector('team-section');
    TeamSection.team = team;

    // Testimonial carousel
    $('.testimonial-carousel').owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      center: true,
      margin: 24,
      dots: true,
      loop: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
      },
    });
  },
};
