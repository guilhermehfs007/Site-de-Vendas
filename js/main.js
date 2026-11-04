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

  // 4. Registro de intenção de compra e cliques no WhatsApp
  document.querySelectorAll('a[href*="wa.me"]').forEach(function (waLink) {
    waLink.addEventListener('click', function () {
      var itemLabel = this.getAttribute('aria-label') || 'WhatsApp CTA';
      try {
        if (window.sessionStorage) {
          var count = parseInt(sessionStorage.getItem('wa_clicks') || '0', 10) + 1;
          sessionStorage.setItem('wa_clicks', count.toString());
        }
      } catch (err) {
        // sessionStorage restrito
      }
      // Log amigável para depuração local
      console.info('WhatsApp CTA clicado: ' + itemLabel);
    });
  });
})();
