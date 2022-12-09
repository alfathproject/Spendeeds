class HeroImage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <style>
                .con-img {
                    background-image: linear-gradient(rgba(0, 0, 0, .6), 
                    rgba(0, 0, 0, .6)), 
                    url("./images/needs.jpg");
                    filer: brightness(50%);
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;   
                    font-family: 'Poor Story', cursive;
                }
            </style>

            <div class="con-img mw-100 p-5 d-flex justify-content-center align-items-center">
                <div class="text-center w-75 p-5">
                    <h1 class="fw-bold">Special Needs - School Finder</h1>
                    <hr>
                    <p class="pt-2 pb-2 m-0">
                        Find the special school you need by selecting the condition relevant to your child
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium molestiae, 
                        ea doloribus nulla eos molestias quae soluta minus non, velit, tenetur animi nemo 
                        rem ab. Sed aspernatur dignissimos tempore sequi!
                    </p>
                    <hr>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style="margin-top: -100px">
                <path fill="#ffffff" fill-opacity="1" d="M0,32L60,48C120,64,240,96,360,101.3C480,107,600,85,720,85.3C840,85,960,107,1080,101.3C1200,96,1320,64,1380,48L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
        `;
  }
}

customElements.define('hero-image', HeroImage);
