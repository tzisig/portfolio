(function () {
  /* SERVICE CATEGORY SELECTOR */
  var serviceData = {
    haircuts: [
      { name: "Women's Haircut", desc: 'A precision cut tailored to your face shape, hair texture, and desired style. Includes consultation, shampoo, and blow-dry finish.', price: '$65+' },
      { name: "Men's Haircut", desc: 'Classic and modern cuts for men including scissor and clipper work, neckline shaping, and style consultation.', price: '$55+' },
      { name: "Children's Haircut", desc: 'Patient, gentle haircuts for children ages twelve and under in a calm and welcoming environment.', price: '$55+' },
      { name: 'Bang Trim', desc: 'Quick bang or fringe refresh between full haircuts.', price: '$18' }
    ],
    coloring: [
      { name: 'Full Color', desc: 'Single-process permanent or demi-permanent color applied from root to tip for rich, even coverage.', price: '$85+' },
      { name: 'Highlights', desc: 'Hand-painted or foil highlights for natural dimension and brightness. Customizable to any level of coverage.', price: '$110+' },
      { name: 'Balayage', desc: 'Freehand painting technique that creates soft, sun-kissed highlights with a natural grow-out.', price: '$150+' },
      { name: 'Color Correction', desc: 'Corrective color service for previous dye mishaps, uneven color, or unwanted tones. Consultation required.', price: '$180+' },
      { name: 'Root Touch-Up', desc: 'Quick root coverage between full color appointments. Matches your existing formula.', price: '$75+' }
    ],
    styling: [
      { name: 'Blowout', desc: 'Professional blow-dry and style using round brushes and product for a smooth, voluminous finish.', price: '$45+' },
      { name: 'Updo', desc: 'Elegant updo styling for special occasions including weddings, proms, and formal events.', price: '$75+' },
      { name: 'Curls and Waves', desc: 'Heat-styled curls or soft waves created with professional tools and techniques.', price: '$55+' },
      { name: 'Braiding', desc: 'Custom braided styles from simple French braids to intricate fishtail and Dutch braid designs.', price: '$50+' }
    ],
    bridal: [
      { name: 'Bridal Consultation', desc: 'A dedicated appointment to discuss your wedding hair vision, trial styles, and create a plan for your big day.', price: '$50' },
      { name: 'Bridal Hair Trial', desc: 'Full trial run of your wedding hairstyle so you can see the look before the day. Includes one revision appointment.', price: '$85' },
      { name: 'Wedding Day Styling', desc: 'On-location or in-salon styling for the bride. Includes trial and final styling on your wedding day.', price: '$250+' },
      { name: 'Bridal Party Package', desc: 'Hair styling for the bride plus up to four bridal party members. Includes trial for the bride.', price: '$500+' },
      { name: 'Mother of the Bride/Groom', desc: 'Styling for mothers of the couple. Consultation included to coordinate with the bridal look.', price: '$75+' }
    ],
    treatments: [
      { name: 'Deep Conditioning Treatment', desc: 'Intensive moisture treatment with steam and professional-grade masque to restore softness and shine.', price: '$35+' },
      { name: 'Keratin Smoothing Treatment', desc: 'Smoothing treatment that reduces frizz and curl for up to three months. Leaves hair silky and manageable.', price: '$150+' },
      { name: 'Scalp Therapy', desc: 'Soothing scalp treatment for dryness, flaking, or sensitivity. Includes exfoliation and nourishing serum.', price: '$45+' },
      { name: 'Express Facial', desc: 'Quick cleansing facial with gentle exfoliation, mask, and moisturizer for a fresh, glowing complexion.', price: '$55+' }
    ]
  };

  var menu = document.getElementById('service-menu');
  var catBtns = document.querySelectorAll('.cat-btn');

  function renderCategory(category) {
    var items = serviceData[category] || [];
    menu.innerHTML = items.map(function (item) {
      return '<div class="service-item"><div class="service-info"><h3 class="service-name">' + item.name + '</h3><p class="service-desc">' + item.desc + '</p></div><span class="service-price">' + item.price + '</span></div>';
    }).join('');
  }

  catBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var category = btn.getAttribute('data-category');
      catBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      requestAnimationFrame(function () {
        renderCategory(category);
      });
    });
  });

  /* MOBILE NAV */
  var toggleBtn = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    var navLinkEls = navLinks.querySelectorAll('a');
    toggleBtn.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });

    navLinkEls.forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  /* FAQ ACCORDION */
  document.querySelectorAll('.faq-question').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = this.parentElement;
      item.classList.toggle('open');
    });
  });

  /* FORM SUBMIT */
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // === AUTOMATION ENGINE: form -> WhatsApp lead message ===
      var BEAUTY_WHATSAPP = "972584433181";
      var name = document.getElementById('form-name').value.trim();
      var email = document.getElementById('form-email').value.trim();
      var phone = document.getElementById('form-phone').value.trim();
      var category = document.getElementById('form-category') ? document.getElementById('form-category').value : '';
      var service = document.getElementById('form-service') ? document.getElementById('form-service').value : '';
      var stylist = document.getElementById('form-stylist') ? document.getElementById('form-stylist').value : '';
      var date = document.getElementById('form-date') ? document.getElementById('form-date').value : '';
      var time = document.getElementById('form-time') ? document.getElementById('form-time').value : '';
      var notes = document.getElementById('form-notes') ? document.getElementById('form-notes').value.trim() : '';

      var message =
        'New booking request from the website:\n' +
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Phone: ' + phone + '\n' +
        'Category: ' + category + '\n' +
        'Service: ' + service + '\n' +
        'Preferred stylist: ' + stylist + '\n' +
        'Date: ' + date + '\n' +
        'Time: ' + time + '\n' +
        'Notes: ' + (notes || 'None');

      window.open('https://wa.me/' + BEAUTY_WHATSAPP + '?text=' + encodeURIComponent(message), '_blank');

      alert('Thank you for booking with Luna & Sage Studio. We will confirm your appointment within 24 hours. We look forward to seeing you!');
      form.reset();
    });
  }
})();
