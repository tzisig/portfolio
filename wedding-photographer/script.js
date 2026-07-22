(function () {
  'use strict';

  // === Portfolio Filter ===
  var filterBtns = document.querySelectorAll('.filter-btn');
  var galleryItems = document.querySelectorAll('.gallery-item');

  if (filterBtns.length && galleryItems.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        var filter = btn.getAttribute('data-filter');

        galleryItems.forEach(function (item) {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.classList.remove('hide');
          } else {
            item.classList.add('hide');
          }
        });
      });
    });
  }

  // === Mobile Nav ===
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  var navLinkItems = navLinks ? navLinks.querySelectorAll('a') : [];

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });

    navLinkItems.forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  // === Scroll Effect for Nav ===
  var nav = document.getElementById('mainNav');
  var ticking = false;

  function handleScroll() {
    if (!ticking) {
      requestAnimationFrame(function() {
        if (window.scrollY > 60) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // === FAQ Accordion ===
  var faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');

        faqItems.forEach(function (other) {
          other.classList.remove('open');
        });

        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });

  // === Form Submission (prevent default for demo) ===
  var form = document.getElementById('inquiryForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // === AUTOMATION ENGINE: form -> WhatsApp lead message ===
      var PHOTOGRAPHER_WHATSAPP = "972584433181";
      var name = document.getElementById('formName').value.trim();
      var email = document.getElementById('formEmail').value.trim();
      var phone = document.getElementById('formPhone') ? document.getElementById('formPhone').value.trim() : '';
      var date = document.getElementById('formDate') ? document.getElementById('formDate').value : '';
      var venue = document.getElementById('formVenue') ? document.getElementById('formVenue').value.trim() : '';
      var referral = document.getElementById('formReferral') ? document.getElementById('formReferral').value.trim() : '';
      var msg = document.getElementById('formMessage') ? document.getElementById('formMessage').value.trim() : '';

      var message =
        'New inquiry from the website:\n' +
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Phone: ' + (phone || 'Not specified') + '\n' +
        'Wedding date: ' + (date || 'Not specified') + '\n' +
        'Venue: ' + (venue || 'Not specified') + '\n' +
        'How they heard about us: ' + (referral || 'Not specified') + '\n' +
        'Details: ' + msg;

      window.open('https://wa.me/' + PHOTOGRAPHER_WHATSAPP + '?text=' + encodeURIComponent(message), '_blank');

      alert('Thank you for your inquiry. We will respond within 24 hours.');
      form.reset();
    });
  }
})();
