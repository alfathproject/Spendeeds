class HeroImage extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .con-img {
                    background-image: linear-gradient(rgba(0, 0, 0, 0.5), 
                    rgba(0, 0, 0, 0.5)), 
                    url("./images/needs.jpg");
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;   
                    font-family: 'Poor Story', cursive;
                }
            </style>

            <div class="con-img mw-100 p-5 d-flex justify-content-center align-items-center">

                <div class="text-center w-75 p-5">
                    <h1 class="fw-bold">School Needs - School Finder</h1>
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
        `;
    }
}

customElements.define("hero-image", HeroImage);