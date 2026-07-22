/* ============================================
   Harrison Legal Advocates - Personal Injury Lawyer
   Script: Case type form, FAQ accordion, mobile nav
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile Navigation Toggle ---
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    document.querySelectorAll('.main-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Case Type Form: Dynamic Fields ---
  const caseTypeForm = document.getElementById('caseTypeForm');
  const caseTypeRadios = document.querySelectorAll('input[name="caseType"]');
  const dynamicField = document.getElementById('dynamicField');
  const dynamicQuestion = document.getElementById('dynamicQuestion');

  const caseTypeLabels = {
    'car-accident': {
      label: 'Describe Your Injuries',
      placeholder: 'Tell us about your injuries and how the accident happened. Include any medical treatment you have received.'
    },
    'workplace-injury': {
      label: 'Describe Your Injury and Employer',
      placeholder: 'Describe how you were injured, what your employer has said, and whether you have filed a workers\' compensation claim.'
    },
    'slip-fall': {
      label: 'Describe the Incident Location',
      placeholder: 'Where did the fall happen? What was the hazardous condition? Did anyone witness the accident?'
    },
    'medical-negligence': {
      label: 'Describe the Medical Incident',
      placeholder: 'Which healthcare provider was involved? What procedure or treatment led to your injury? Do you have medical records?'
    }
  };

  function updateDynamicField(value) {
    var config = caseTypeLabels[value] || caseTypeLabels['car-accident'];
    var labelEl = dynamicField.querySelector('label');
    if (labelEl) {
      labelEl.textContent = config.label;
    }
    if (dynamicQuestion) {
      dynamicQuestion.placeholder = config.placeholder;
    }
  }

  caseTypeRadios.forEach(function (radio) {
    radio.addEventListener('change', function () {
      if (this.checked) {
        updateDynamicField(this.value);
      }
    });
  });

  if (caseTypeForm) {
    caseTypeForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var formData = new FormData(caseTypeForm);
      var data = {};
      formData.forEach(function (value, key) {
        data[key] = value;
      });

      // === AUTOMATION ENGINE: form -> WhatsApp lead message ===
      var LAWYER_WHATSAPP = "972584433181";
      var waMessage =
        'New case review request from the website:\n' +
        'Case type: ' + (data.caseType || '') + '\n' +
        'Name: ' + (data.fullName || '') + '\n' +
        'Email: ' + (data.email || '') + '\n' +
        'Phone: ' + (data.phone || '') + '\n' +
        'Incident date: ' + (data.incidentDate || 'Not specified') + '\n' +
        'Details: ' + (data.dynamicQuestion || '') + '\n' +
        'Additional info: ' + (data.description || 'None') + '\n' +
        'Referral source: ' + (data.referral || 'Not specified');

      window.open('https://wa.me/' + LAWYER_WHATSAPP + '?text=' + encodeURIComponent(waMessage), '_blank');

      caseTypeForm.classList.add('hidden');
      document.getElementById('formSuccess').classList.remove('hidden');

      // Scroll to show success message
      document.getElementById('formSuccess').scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  // --- FAQ Accordion ---
  var faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function () {
        var isActive = item.classList.contains('active');

        // Close all FAQ items
        faqItems.forEach(function (other) {
          other.classList.remove('active');
          var otherBtn = other.querySelector('.faq-question');
          if (otherBtn) {
            otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current
        if (!isActive) {
          item.classList.add('active');
          question.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // --- Contact Form ---
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var formData = new FormData(contactForm);
      var data = {};
      formData.forEach(function (value, key) {
        data[key] = value;
      });

      // === AUTOMATION ENGINE: form -> WhatsApp lead message ===
      var LAWYER_WHATSAPP = "972584433181";
      var waMessage =
        'New inquiry from the website:\n' +
        'Name: ' + (data.contactName || '') + '\n' +
        'Email: ' + (data.contactEmail || '') + '\n' +
        'Phone: ' + (data.contactPhone || 'Not specified') + '\n' +
        'Case type: ' + (data.contactCaseType || 'Not specified') + '\n' +
        'Message: ' + (data.contactMessage || '') + '\n' +
        'Referral source: ' + (data.contactReferral || 'Not specified');

      window.open('https://wa.me/' + LAWYER_WHATSAPP + '?text=' + encodeURIComponent(waMessage), '_blank');

      // Show success feedback
      contactForm.innerHTML =
        '<div class="form-success" style="background: transparent; padding: 40px 0;">' +
          '<h3 style="color: #f5f0eb;">Thank you for reaching out.</h3>' +
          '<p style="color: #aaa;">We have received your message and will respond within 24 business hours. For urgent matters, call 555-0198.</p>' +
        '</div>';
    });
  }

});
