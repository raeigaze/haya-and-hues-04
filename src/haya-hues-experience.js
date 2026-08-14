/* HAYA & HUES — scroll reveal */
(function () {
  const init = () => {
    const els = document.querySelectorAll(
      'section,.product-card,.collection-card,.service-card,.contact-form,.contact-card,.admin-panel'
    );

    els.forEach((el, i) => {
      if (el.classList.contains('hh-reveal')) return;

      el.classList.add('hh-reveal');
      el.style.transitionDelay =
        Math.min((i % 4) * 70, 210) + 'ms';
    });

    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -45px 0px'
      }
    );

    document
      .querySelectorAll('.hh-reveal')
      .forEach(el => observer.observe(el));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
