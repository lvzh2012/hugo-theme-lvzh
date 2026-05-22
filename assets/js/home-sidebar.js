(function () {
  'use strict';

  var sidebarItems = document.querySelectorAll('.home-sidebar__item');
  if (!sidebarItems.length) return;

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var clickTimers = {};

  sidebarItems.forEach(function (item) {
    var index = item.getAttribute('data-index');
    var targetId = 'post-' + index;
    var detailUrl = item.getAttribute('data-href');

    item.addEventListener('click', function (e) {
      e.preventDefault();

      if (clickTimers[index]) {
        clearTimeout(clickTimers[index]);
        clickTimers[index] = null;
        window.location.href = detailUrl;
        return;
      }

      clickTimers[index] = setTimeout(function () {
        clickTimers[index] = null;

        var target = document.getElementById(targetId);
        if (!target) return;

        target.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'center'
        });

        target.classList.add('is-highlighted');
        setTimeout(function () {
          target.classList.remove('is-highlighted');
        }, 1500);

        sidebarItems.forEach(function (el) {
          el.classList.toggle('is-active', el === item);
        });
      }, 250);
    });
  });

  var wrappers = document.querySelectorAll('.post-card-wrapper');
  if (!wrappers.length || !('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        sidebarItems.forEach(function (item) {
          var idx = item.getAttribute('data-index');
          item.classList.toggle('is-active', 'post-' + idx === id);
        });
      });
    },
    { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
  );

  wrappers.forEach(function (w) {
    observer.observe(w);
  });
})();
