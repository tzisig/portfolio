document.addEventListener('DOMContentLoaded', function() {
  initForms();
  initMobileMenu();
});

function initForms() {
  const forms = document.querySelectorAll('.contact-form');
  forms.forEach(function(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      let isValid = true;

      const requiredFields = form.querySelectorAll('[required]');
      requiredFields.forEach(function(field) {
        const group = field.closest('.form-group');
        const errorEl = group ? group.querySelector('.error-message') : null;

        if (!field.value.trim()) {
          isValid = false;
          if (group) group.classList.add('has-error');
          if (errorEl) errorEl.textContent = 'This field is required.';
        } else {
          if (group) group.classList.remove('has-error');
        }
      });

      const emailFields = form.querySelectorAll('input[type="email"]');
      emailFields.forEach(function(field) {
        const group = field.closest('.form-group');
        const errorEl = group ? group.querySelector('.error-message') : null;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (field.value.trim() && !emailRegex.test(field.value.trim())) {
          isValid = false;
          if (group) group.classList.add('has-error');
          if (errorEl) errorEl.textContent = 'Please enter a valid email address.';
        }
      });

      if (isValid) {
        const successMsg = form.querySelector('.success-message');
        if (successMsg) {
          successMsg.classList.add('show');
          successMsg.setAttribute('tabindex', '-1');
          successMsg.focus();
        }
        form.querySelectorAll('.form-group').forEach(function(g) { g.classList.remove('has-error'); });
        form.reset();
      }
    });
  });
}

function initMobileMenu() {
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const nav = document.querySelector('.nav-links');
      if (nav) {
        nav.classList.toggle('active');
        const expanded = btn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
        btn.setAttribute('aria-expanded', expanded);
      }
    });
  });
}
