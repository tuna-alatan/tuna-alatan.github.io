document.addEventListener('DOMContentLoaded', function () {
  var currentFile = window.location.pathname.split('/').pop() || 'index.html';
  var links = document.querySelectorAll('.nav-link');

  links.forEach(function (link) {
    var linkFile = (link.getAttribute('href') || '').split('#')[0];
    if (linkFile === currentFile || (currentFile === '' && linkFile === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  document.querySelectorAll('[data-current-year]').forEach(function (year) {
    year.textContent = String(new Date().getFullYear());
  });
});
