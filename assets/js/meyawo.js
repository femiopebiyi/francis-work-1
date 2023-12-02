/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});


const check = document.querySelector(".btn-primary")

check.addEventListener("click", function(){
    
    let section = document.getElementById("portfolio");
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    
  }
})

const instagram = document.querySelector(".ti-instagram");

instagram.addEventListener("click", function(){
    let instagramURL = "https://www.instagram.com/jypark7430/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"

    window.open(instagramURL, "_blank")
})