$(document).ready(function(){
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.dropdown-trigger');
        var instances = M.Dropdown.init(elems, options);
    });
      
      // Or with jQuery
      
    $('.dropdown-trigger').dropdown();

// -------------------------------===========-------------------------------
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, options);
    });
  
    // Or with jQuery
  
    $(document).ready(function(){
      $('.modal').modal();
    });

  // -------------------------------===========-------------------------------

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, options);
    });
  
    // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
    // var collapsibleElem = document.querySelector('.collapsible');
    // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);
  
    // Or with jQuery
  
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });
})

// -------------------------------===========-------------------------------

const buttons = document.querySelectorAll('.faq__title__h3');
buttons.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    this.parentNode.classList.toggle('faq__active');
    
    buttons.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('faq__active');
      }
    });
  });
});

// -------------------------------===========-------------------------------

const buttons_1 = document.querySelectorAll('.footer__menu__link');
buttons_1.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    this.parentNode.classList.toggle('footer__menu__active');
    
    buttons_1.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('footer__menu__active');
      }
    });
  });
});

// -------------------------------===========-------------------------------

const buttons_2 = document.querySelectorAll('.footer__link__none');
buttons_2.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    this.parentNode.classList.toggle('footer__none__active');
    
    buttons_2.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('footer__none__active');
      }
    });
  });
});

// -------------------------------===========-------------------------------

// -------------------------------===========-------------------------------

const buttons_3 = document.querySelectorAll('.msk_yangiliklari_in__share__button');
buttons_3.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    this.parentNode.classList.toggle('msk_yangiliklari_in__active');
    
    buttons_3.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('msk_yangiliklari_in__active');
      }
    });
  });
});

// -------------------------------===========-------------------------------

const buttons_4 = document.querySelectorAll('.header__bottom__link');
buttons_4.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    this.parentNode.classList.toggle('header__bottom__active');
    
    buttons_4.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('header__bottom__active');
      }
    });
  });
});

// -------------------------------===========-------------------------------

const buttons_5 = document.querySelectorAll('.header__link__none__item');
buttons_5.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    this.parentNode.classList.toggle('header__link__none__active');
    
    buttons_5.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('header__link__none__active');
      }
    });
  });
});

// -------------------------------===========-------------------------------

const buttons_6 = document.querySelectorAll('.axborotnomalar__auto');
buttons_6.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    this.parentNode.classList.toggle('axborotnomalar__active');
    
    buttons_6.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('axborotnomalar__active');
      }
    });
  });
});

// -------------------------------===========-------------------------------

const buttons_7 = document.querySelectorAll('.kop_beriladigan_savollar__title__h2');
buttons_7.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    this.parentNode.classList.toggle('kop_beriladigan_savollar__active');
    
    buttons_7.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('kop_beriladigan_savollar__active');
      }
    });
  });
});

// -------------------------------===========-------------------------------

const buttons_8 = document.querySelectorAll('.saylovchi_lugati__title');
buttons_8.forEach(function(button, index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    this.parentNode.classList.toggle('saylovchi_lugati__active');
    
    buttons_8.forEach(function(button2, index2) {
      if ( index !== index2 ) {
        button2.parentNode.classList.remove('saylovchi_lugati__active');
      }
    });
  });
});

// -------------------------------===========-------------------------------

$( ".leadership__button" ).click(function() {
  $(this ).each(function( i ) {
    if ( this.style.position !== "relative" ) {
      this.style.position = "relative";
      let Catalog_max__pro__ul_link = document.querySelectorAll('.leadership__list__item');
      for(let i = 0; i<Catalog_max__pro__ul_link.length; i++){
          Catalog_max__pro__ul_link[i].addEventListener('click',function(){
              for(let j = 0; j<Catalog_max__pro__ul_link.length;j++){
                  Catalog_max__pro__ul_link[j].classList.remove('leadership__active');
              }
              this.classList.add('leadership__active');
          })
      }
      
    } else {
      this.style.position = "";
      let Catalog_max__pro__ul_link = document.querySelectorAll('.leadership__list__item');
      for(let i = 0; i<Catalog_max__pro__ul_link.length; i++){
          Catalog_max__pro__ul_link[i].addEventListener('click',function(){
              for(let j = 0; j<Catalog_max__pro__ul_link.length;j++){
                  Catalog_max__pro__ul_link[j].classList.remove('leadership__active');
              }
              this.classList.add('leadership__active_12');
          })
      }
    }
  });
});

// -------------------------------===========-------------------------------

$(document).ready(function(){
  (function($){
    $('.statistics__numbers').each(function(){
        $(this).prop('Counter',0).animate({
            Counter:$(this).text()
        },
        {
            duration:5000,
            easing:"swing",
            step:function(now){
                $(this).text(Math.ceil(now));
            }  
       });
    })
  })(jQuery);
});

// -------------------------------===========-------------------------------

$(function(){
  let Catalog_max__pro__ul_link = document.querySelectorAll('.axborotnomalar__pagination__item');

  for(let i = 0; i<Catalog_max__pro__ul_link.length; i++){
      Catalog_max__pro__ul_link[i].addEventListener('click',function(){
          for(let j = 0; j<Catalog_max__pro__ul_link.length;j++){
              Catalog_max__pro__ul_link[j].classList.remove('axborotnomalar__pagination__active');
          }
          this.classList.add('axborotnomalar__pagination__active');

      })
  }
});

// -------------------------------===========-------------------------------

$(function(){
  let Catalog_max__pro__ul_link = document.querySelectorAll('.axborotnomalar__pagination_red__item');

  for(let i = 0; i<Catalog_max__pro__ul_link.length; i++){
      Catalog_max__pro__ul_link[i].addEventListener('click',function(){
          for(let j = 0; j<Catalog_max__pro__ul_link.length;j++){
              Catalog_max__pro__ul_link[j].classList.remove('active');
          }
          this.classList.add('active');

      })
  }
});

// -------------------------------===========-------------------------------

$(function(){
  let Catalog_max__pro__ul_link = document.querySelectorAll('.axborotnomalar__pagination_green__item');

  for(let i = 0; i<Catalog_max__pro__ul_link.length; i++){
      Catalog_max__pro__ul_link[i].addEventListener('click',function(){
          for(let j = 0; j<Catalog_max__pro__ul_link.length;j++){
              Catalog_max__pro__ul_link[j].classList.remove('active');
          }
          this.classList.add('active');

      })
  }
});

// -------------------------------===========-------------------------------

$(function(){
  let Catalog_max__pro__ul_link = document.querySelectorAll('.elektron_kullanmalar__link');

  for(let i = 0; i<Catalog_max__pro__ul_link.length; i++){
      Catalog_max__pro__ul_link[i].addEventListener('click',function(){
          for(let j = 0; j<Catalog_max__pro__ul_link.length;j++){
              Catalog_max__pro__ul_link[j].classList.remove('elektron_kullanmalar__active');
          }
          this.classList.add('elektron_kullanmalar__active');

      })
  }
});

// -------------------------------===========-------------------------------

$(function(){
  let Catalog_max__pro__ul_link = document.querySelectorAll('.fotogalereya__menu__link');

  for(let i = 0; i<Catalog_max__pro__ul_link.length; i++){
      Catalog_max__pro__ul_link[i].addEventListener('click',function(){
          for(let j = 0; j<Catalog_max__pro__ul_link.length;j++){
              Catalog_max__pro__ul_link[j].classList.remove('fotogalereya__menu__active');
          }
          this.classList.add('fotogalereya__menu__active');

      })
  }
});

// -------------------------------===========-------------------------------

$(function(){
  let Catalog_max__pro__link = document.querySelectorAll('.fotogalereya_in__item2');

  for(let i = 0; i<Catalog_max__pro__link.length; i++){
      Catalog_max__pro__link[i].addEventListener('click',function(){
          for(let j = 0; j<Catalog_max__pro__link.length;j++){
              Catalog_max__pro__link[j].classList.remove('active');
          }
          this.classList.add('active');

      })
  }
});

// -------------------------------===========-------------------------------


// Saylovchilar uchun eslatma-----===========-------------------------------

var i=0;
	$(".saylovchilar_uchun__menu__link").each(function(){
  length
	i++;
	$(this).attr("href","#mrx-"+i);
});

var i=0;
	$(".saylovchilar_uchun__item").each(function(){
  length
	i++;
	$(this).attr("id","mrx-"+i);
});


// directions_in id end
$('.saylovchilar_uchun__list .saylovchilar_uchun__item').hide();
$('.saylovchilar_uchun__list .saylovchilar_uchun__item:first').show();
$('.saylovchilar_uchun__menu li:first').addClass('saylovchilar_uchun__active');

// Change tab class and display content
$('.saylovchilar_uchun__menu a').on('click', function(event){
  event.preventDefault();
  $('.saylovchilar_uchun__menu li').removeClass('saylovchilar_uchun__active');
  $(this).parent().addClass('saylovchilar_uchun__active');
  $('.saylovchilar_uchun__list .saylovchilar_uchun__item').hide();
  $($(this).attr('href')).show();
});


// Saylovchilar uchun eslatma-----===========-------------------------------