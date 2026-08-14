/* HAYA & HUES — TARGETED SCROLL REVEAL */

(function(){

  function init(){

    const selectors = [
      '.trust',
      '.split',
      '.feature',
      '.edit',
      '.grid .card',
      '.collections a',
      '.about',
      '.contact form',
      '.checkout form',
      '.product',
      '.cartitem',
      '.summary'
    ];

    const elements =
      document.querySelectorAll(selectors.join(','));

    elements.forEach((el,index)=>{

      if(el.classList.contains('hh-animate')){
        return;
      }

      el.classList.add('hh-animate');

      const delay =
        Math.min((index % 4) * 70,210);

      el.style.transitionDelay =
        delay + 'ms';

    });

    if(!('IntersectionObserver' in window)){

      elements.forEach(el=>{
        el.classList.add('hh-visible');
      });

      return;
    }

    const observer =
      new IntersectionObserver(
        entries=>{

          entries.forEach(entry=>{

            if(entry.isIntersecting){

              entry.target.classList.add(
                'hh-visible'
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold:.08,
          rootMargin:'0px 0px -45px 0px'
        }
      );

    elements.forEach(el=>{
      observer.observe(el);
    });

  }

  if(document.readyState === 'loading'){

    document.addEventListener(
      'DOMContentLoaded',
      init
    );

  }else{

    init();

  }

})();
