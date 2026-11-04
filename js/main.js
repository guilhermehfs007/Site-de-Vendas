/**
 * Sea Salt Artesanato — Interatividade e Acessibilidade Vanilla JS
 */

(function () {
  'use strict';

  // 1. Acessibilidade de foco para links de âncora
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus({ preventScroll: true });
      }
    });
  });

  // 2. Sombra no header ao rolar a página
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }, { passive: true });
  }

  // 3. Suporte a fade-in progressivo para imagens carregadas
  var lazyImages = document.querySelectorAll('img[loading="lazy"]');
  lazyImages.forEach(function (img) {
    if (img.complete) {
      img.classList.add('is-loaded');
    } else {
      img.addEventListener('load', function () {
        img.classList.add('is-loaded');
      });
    }
  });
})();
