let listVideo = document.querySelectorAll(".header__ru_none .header__ru_list");
let mainVideo = document.querySelector(".header__ru_cart a");
let header__en__link = document.querySelector(".header__ru_cart .header__en__link");

listVideo.forEach(a => {
    a.onclick = () => {
    listVideo.forEach(header__ru_list => header__ru_list.classList.remove("active"));
    a.classList.add("active");
    if (a.classList.contains("active")) {
      let text = a.children[0].innerHTML;
      header__en__link.innerHTML = text;
    }
  };
});

// ------------------------------------------------------------------------------------------
/* PLEASE DO NOT COPY AND PASTE THIS CODE. */
(function(){var w=window,C='___grecaptcha_cfg',cfg=w[C]=w[C]||{},N='grecaptcha';var gr=w[N]=w[N]||{};gr.ready=gr.ready||function(f){(cfg['fns']=cfg['fns']||[]).push(f);};w['__recaptcha_api']='https://www.google.com/recaptcha/api2/';(cfg['render']=cfg['render']||[]).push('onload');w['__google_recaptcha_client']=true;var d=document,po=d.createElement('script');po.type='text/javascript';po.async=true;po.src='https://www.gstatic.com/recaptcha/releases/8G7OPK94bhCRbT0VqyEVpQNj/recaptcha__ru.js';po.crossOrigin='anonymous';po.integrity='sha384-8RsbPZShXcK4zdMGctMjYG7MOy3VinYDzvItxXOYvTNSCwu4vCAoNB7D/NMg0/CG';var e=d.querySelector('script[nonce]'),n=e&&(e['nonce']||e.getAttribute('nonce'));if(n){po.setAttribute('nonce',n);}var s=d.getElementsByTagName('script')[0];s.parentNode.insertBefore(po, s);})();