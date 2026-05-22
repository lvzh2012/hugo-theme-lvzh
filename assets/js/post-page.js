(function () {
  'use strict';

  var progressBar = document.querySelector('.reading-progress__bar');
  var backToTop = document.querySelector('.back-to-top');
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function updateProgress() {
    if (!progressBar) return;
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = Math.min(100, Math.max(0, progress)) + '%';
  }

  function updateBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > 400) {
      backToTop.hidden = false;
      backToTop.classList.add('is-visible');
    } else {
      backToTop.classList.remove('is-visible');
      backToTop.hidden = true;
    }
  }

  function onScroll() {
    updateProgress();
    updateBackToTop();
  }

  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* TOC collapse toggle (desktop) */
  var layout = document.querySelector('.post-page__layout');
  var tocToggle = document.querySelector('.post-toc__toggle');
  var tocExpand = document.querySelector('.post-toc-expand');
  var tocStorageKey = 'lvzh-toc-collapsed';

  function setTocCollapsed(collapsed) {
    if (!layout) return;
    layout.classList.toggle('is-toc-collapsed', collapsed);
    if (tocToggle) {
      tocToggle.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
      tocToggle.setAttribute('aria-label', collapsed ? '展开目录' : '收起目录');
    }
    if (tocExpand) {
      tocExpand.hidden = !collapsed;
    }
    try {
      localStorage.setItem(tocStorageKey, collapsed ? '1' : '0');
    } catch (e) {
      /* ignore */
    }
  }

  if (layout && (tocToggle || tocExpand)) {
    var savedCollapsed = false;
    try {
      savedCollapsed = localStorage.getItem(tocStorageKey) === '1';
    } catch (e) {
      /* ignore */
    }
    setTocCollapsed(savedCollapsed);

    if (tocToggle) {
      tocToggle.addEventListener('click', function () {
        setTocCollapsed(true);
      });
    }

    if (tocExpand) {
      tocExpand.addEventListener('click', function () {
        setTocCollapsed(false);
      });
    }
  }

  /* TOC scroll spy */
  var tocLinks = document.querySelectorAll('.post-toc__nav a, .post-toc-mobile__nav a');
  if (!tocLinks.length) return;

  var headings = [];
  tocLinks.forEach(function (link) {
    var id = link.getAttribute('href');
    if (!id || id.charAt(0) !== '#') return;
    var heading = document.querySelector(id);
    if (heading) headings.push({ link: link, heading: heading });
  });

  if (!headings.length) return;

  function setActiveLink(activeLink) {
    tocLinks.forEach(function (link) {
      link.classList.toggle('is-active', link === activeLink);
    });
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        var visible = entries
          .filter(function (entry) { return entry.isIntersecting; })
          .sort(function (a, b) { return a.boundingClientRect.top - b.boundingClientRect.top; });

        if (visible.length) {
          var match = headings.find(function (item) {
            return item.heading === visible[0].target;
          });
          if (match) setActiveLink(match.link);
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    headings.forEach(function (item) {
      observer.observe(item.heading);
    });
  }
})();
