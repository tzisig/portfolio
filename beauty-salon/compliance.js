(function() {
  'use strict';

  var LANG = (document.documentElement.lang || 'en').substring(0, 2).toLowerCase();
  var isHeb = LANG === 'he' || LANG === 'iw';
  function t(he, en) { return isHeb ? he : en; }

  var BTN_COLOR = { bg:'#a83a30', fg:'#000', hover:'#963127', active:'#852a20', light:false };

  var BIZ = { name: document.title ? document.title.split('|')[0].trim() : 'Business', phone:'555-0100', email:'info@example.com' };
  try {
    var sd = document.querySelector('script[type="application/ld+json"]');
    if (sd) { var d=JSON.parse(sd.textContent); if(d.name)BIZ.name=d.name; if(d.telephone)BIZ.phone=d.telephone; if(d.email)BIZ.email=d.email; }
  } catch(e){}

  var C = BTN_COLOR;
  var sizeStep = 0; // 0=normal, 1-5=levels

  function css(sel, rules) {
    var s = document.createElement('style');
    s.textContent = sel + '{' + rules + '}';
    document.head.appendChild(s);
  }

  function addSkip() {
    if (document.getElementById('a11y-skip')) return;
    var el = document.createElement('a');
    el.id = 'a11y-skip';
    el.href = '#a11y-main';
    el.textContent = t('דלג לתוכן','Skip to content');
    el.style.cssText = 'position:absolute;top:-200px;left:0;z-index:10000;background:'+C.bg+';color:#000;padding:12px 24px;border-radius:0 0 8px 8px;font-size:1rem;text-decoration:none;';
    el.addEventListener('focus',function(){this.style.top='0'});
    el.addEventListener('blur',function(){this.style.top='-200px'});
    document.body.insertBefore(el,document.body.firstChild);
    var main = document.querySelector('main') || document.querySelector('section:first-of-type');
    if (main && !main.id) main.id = 'a11y-main';
  }

  function addToolbar() {
    if (document.getElementById('a11y-bar')) return;

    // Inject CSS for the font-size scaling
    css('#a11y-size', 'display:none');

    var bar = document.createElement('div');
    bar.id = 'a11y-bar';
    bar.setAttribute('role','toolbar');
    bar.setAttribute('aria-label',t('נגישות','Accessibility'));
    bar.style.cssText = 'position:fixed;top:50%;right:0;transform:translateY(-50%);z-index:999;display:flex;flex-direction:column;gap:4px;padding:8px;border-radius:10px 0 0 10px;background:'+C.bg+';';

    function makeBtn(label, text, fn) {
      var btn = document.createElement('button');
      btn.textContent = text;
      btn.setAttribute('aria-label',label);
      btn.title = label;
      btn.style.cssText = 'width:44px;height:44px;border:none;border-radius:6px;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;background:'+C.bg+';color:#fff;transition:background 0.15s;';
      btn.addEventListener('mouseenter',function(){this.style.background=C.hover});
      btn.addEventListener('mouseleave',function(){this.style.background=C.bg});
      btn.addEventListener('click',fn);
      return btn;
    }

    // A+ button: toggle through size levels
    var sizes = [0, 110, 120, 135, 155, 180]; // 0 = off
    var btnA = makeBtn(t('הגדל טקסט','Increase text'), 'A+', function() {
      sizeStep = (sizeStep + 1) % sizes.length;
      var tag = document.getElementById('a11y-size');
      if (!tag) { tag = document.createElement('style'); tag.id = 'a11y-size'; document.head.appendChild(tag); }
      if (sizeStep === 0) {
        tag.textContent = '';
        document.documentElement.classList.remove('a11y-sized');
        var rb = document.getElementById('a11y-reset-btn');
        if (rb) rb.remove();
      } else {
        document.documentElement.classList.add('a11y-sized');
        tag.textContent = 'html.a11y-sized { font-size: ' + sizes[sizeStep] + '%!important; }';
        // check if reset button exists
        if (!document.getElementById('a11y-reset-btn')) {
          var rb = makeBtn(t('אפס גודל','Reset size'), '✕', function() {
            sizeStep = 0;
            var t2 = document.getElementById('a11y-size');
            if (t2) t2.textContent = '';
            document.documentElement.classList.remove('a11y-sized');
            this.remove();
          });
          rb.id = 'a11y-reset-btn';
          rb.title = t('אפס גודל טקסט','Reset text size');
          rb.setAttribute('aria-label', t('אפס גודל','Reset size'));
          rb.style.fontSize = '16px';
          bar.insertBefore(rb, btnA);
        }
      }
    });

    // Contrast button
    var btnC = makeBtn(t('ניגודיות גבוהה','High contrast'), '◐', function() {
      document.documentElement.classList.toggle('a11y-con');
      var active = document.documentElement.classList.contains('a11y-con');
      this.style.background = active ? C.hover : C.bg;
      this.style.boxShadow = active ? 'inset 0 0 0 2px #ff0' : 'none';
    });

    // Stop animations button
    var btnS = makeBtn(t('עצור אנימציות','Stop animations'), '▶', function() {
      document.documentElement.classList.toggle('a11y-stop');
      this.style.background = document.documentElement.classList.contains('a11y-stop') ? C.hover : C.bg;
    });

    bar.appendChild(btnA);
    bar.appendChild(btnC);
    bar.appendChild(btnS);
    document.body.appendChild(bar);
    css('.max-w-6xl, main, .container', 'padding-right:70px !important');
  }

  function addDeclaration() {
    if (document.getElementById('a11y-dec')) return;
    var sec = document.createElement('section');
    sec.id = 'a11y-dec';
    sec.style.cssText = 'padding:48px 24px;background:#f8f9fa;border-top:3px solid '+C.bg+';';
    var d = document.createElement('div');
    d.style.cssText = 'max-width:1200px;margin:0 auto;';
    if (isHeb) {
      d.innerHTML = '<h2 style="font-size:1.6rem;margin-bottom:16px;">הצהרת נגישות</h2>' +
        '<p style="margin-bottom:12px;line-height:1.7;">'+BIZ.name+' פועלת להנגיש את אתר האינטרנט שלה, בהתאם לתקן ישראלי 5568 ברמה AA.</p>' +
        '<p style="margin-bottom:12px;line-height:1.7;">בוצעו התאמות: ניווט מקלדת, טקסט חלופי לתמונות, ניגודיות צבעים, הגדלת טקסט, עצירת אנימציות.</p>' +
        '<p style="margin-bottom:12px;line-height:1.7;">אם נתקלת בבעיה, נשמח לשמוע.</p>' +
        '<p style="margin-bottom:4px;line-height:1.7;"><strong>רכז/ת נגישות:</strong> [שם]</p>' +
        '<p style="margin-bottom:4px;line-height:1.7;"><strong>טלפון:</strong> <a href="tel:'+BIZ.phone.replace(/[^0-9]/g,'')+'" style="color:'+C.bg+';">'+BIZ.phone+'</a></p>' +
        '<p style="margin-bottom:4px;line-height:1.7;"><strong>דוא"ל:</strong> <a href="mailto:'+BIZ.email+'" style="color:'+C.bg+';">'+BIZ.email+'</a></p>' +
        '<p style="margin-top:16px;font-size:0.85rem;opacity:0.7;">עודכן ביולי 2026.</p>';
    } else {
      d.innerHTML = '<h2 style="font-size:1.6rem;margin-bottom:16px;">Accessibility Declaration</h2>' +
        '<p style="margin-bottom:12px;line-height:1.7;">'+BIZ.name+' is committed to web accessibility per Israeli Standard 5568 level AA.</p>' +
        '<p style="margin-bottom:12px;line-height:1.7;">Adjustments include: keyboard nav, alt text, color contrast, text resize, stop animations.</p>' +
        '<p style="margin-bottom:12px;line-height:1.7;">Please contact us if you encounter any issues.</p>' +
        '<p style="margin-bottom:4px;line-height:1.7;"><strong>Accessibility Coordinator:</strong> [Name]</p>' +
        '<p style="margin-bottom:4px;line-height:1.7;"><strong>Phone:</strong> <a href="tel:'+BIZ.phone.replace(/[^0-9]/g,'')+'" style="color:'+C.bg+';">'+BIZ.phone+'</a></p>' +
        '<p style="margin-bottom:4px;line-height:1.7;"><strong>Email:</strong> <a href="mailto:'+BIZ.email+'" style="color:'+C.bg+';">'+BIZ.email+'</a></p>' +
        '<p style="margin-top:16px;font-size:0.85rem;opacity:0.7;">Updated July 2026.</p>';
    }
    sec.appendChild(d);
    document.body.appendChild(sec);
  }

  function addCookie() {
    if (document.getElementById('a11y-c') || localStorage.getItem('a11y-consent')) return;
    var b = document.createElement('div');
    b.id = 'a11y-c';
    b.setAttribute('role','dialog');
    b.setAttribute('aria-label',t('עוגיות','Cookies'));
    b.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:1001;padding:20px 24px;background:'+C.bg+';color:#fff;font-size:0.95rem;color:#fff;';
    var inner = document.createElement('div');
    inner.style.cssText = 'max-width:1200px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;gap:16px;justify-content:space-between;';
    var text = document.createElement('p');
    text.style.cssText = 'flex:1;min-width:260px;margin:0;';
    text.innerHTML = t('אתר זה משתמש בעוגיות. בהמשך השימוש, אתה מסכים למדיניות הפרטיות.','This site uses cookies. By continuing, you agree to our privacy policy.');
    var wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;gap:8px;flex-shrink:0;';
    var ok = document.createElement('button');
    ok.textContent = t('אישור','Accept');
    ok.style.cssText = 'padding:10px 24px;background:'+C.hover+';color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:600;';
    ok.addEventListener('mouseenter',function(){this.style.background=C.active});
    ok.addEventListener('mouseleave',function(){this.style.background=C.hover});
    ok.addEventListener('click',function(){localStorage.setItem('a11y-consent','true');b.remove()});
    var x = document.createElement('button');
    x.textContent = '✕';
    x.setAttribute('aria-label',t('סגור','Close'));
    x.style.cssText = 'padding:6px 12px;background:transparent;color:#fff;border:1px solid rgba(255,255,255,0.3);border-radius:4px;cursor:pointer;font-size:1rem;';
    x.addEventListener('click',function(){b.remove()});
    wrap.appendChild(ok); wrap.appendChild(x);
    inner.appendChild(text); inner.appendChild(wrap);
    b.appendChild(inner);
    document.body.appendChild(b);
  }

  function addCheckbox() {
    document.querySelectorAll('form').forEach(function(form) {
      if (form.querySelector('.a11y-cb')) return;
      var sb = form.querySelector('input[type="submit"], button[type="submit"]');
      if (!sb) return;
      var g = document.createElement('div');
      g.className = 'a11y-cb';
      g.style.cssText = 'margin-bottom:16px;';
      var l = document.createElement('label');
      l.style.cssText = 'display:flex;align-items:flex-start;gap:8px;font-size:0.85rem;line-height:1.4;cursor:pointer;';
      var cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.id = 'x-'+Math.random().toString(36).substr(2,6);
      cb.required = true;
      cb.style.cssText = 'margin-top:3px;flex-shrink:0;width:18px;height:18px;accent-color:'+C.bg+';';
      var sp = document.createElement('span');
      sp.innerHTML = t('אני מאשר/ת את <a href="#" style="color:'+C.bg+';text-decoration:underline;">מדיניות הפרטיות</a>.','I agree to the <a href="#" style="color:'+C.bg+';text-decoration:underline;">Privacy Policy</a>.');
      l.appendChild(cb); l.appendChild(sp); g.appendChild(l);
      try { form.insertBefore(g, sb); } catch(e) { form.appendChild(g); }
      form.addEventListener('submit',function(e){
        if (!cb.checked) {
          e.preventDefault();
          cb.style.outline = '2px solid #dc2626';
          var m = document.getElementById('x-msg');
          if (!m) { m=document.createElement('p'); m.id='x-msg'; m.style.cssText='color:#dc2626;font-size:0.85rem;margin-top:4px;'; m.textContent=t('יש לאשר את מדיניות הפרטיות.','Please agree to the Privacy Policy.'); g.appendChild(m); }
        } else { cb.style.outline=''; var m=document.getElementById('x-msg'); if(m)m.remove(); }
      });
    });
  }

  function addFooter() {
    document.querySelectorAll('footer').forEach(function(f){
      if (f.querySelector('.a11y-links')) return;
      var d = document.createElement('div');
      d.className = 'a11y-links';
      d.style.cssText = 'margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.3);font-size:0.85rem;';
      d.innerHTML = '<a href="#" style="color:#ffffff;text-decoration:underline;opacity:0.8;margin:0 8px;">'+t('מדיניות פרטיות','Privacy Policy')+'</a><a href="#" style="color:#ffffff;text-decoration:underline;opacity:0.8;margin:0 8px;">'+t('תנאי שימוש','Terms of Service')+'</a><a href="#" style="color:#ffffff;text-decoration:underline;opacity:0.8;margin:0 8px;">'+t('הצהרת נגישות','Accessibility')+'</a>';
      var bottom = f.querySelector('[class*="bottom"]');
      if (bottom) bottom.appendChild(d); else f.appendChild(d);
    });
  }

  function addAria() {
    var nav = document.querySelector('nav');
    if (nav && !nav.getAttribute('aria-label')) nav.setAttribute('aria-label',t('ניווט','Navigation'));
    if (!document.querySelector('main, [role="main"]')) {
      var sec = document.querySelector('section');
      if (sec) sec.setAttribute('role','main');
    }
    document.querySelectorAll('footer').forEach(function(f){if(!f.getAttribute('role'))f.setAttribute('role','contentinfo')});
  }

  function init() {
    css('.a11y-con', 'background:#000!important;color:#fff!important');
    css('.a11y-con p,.a11y-con h1,.a11y-con h2,.a11y-con h3,.a11y-con h4,.a11y-con h5,.a11y-con h6,.a11y-con li,.a11y-con span:not(.sr-only),.a11y-con a,.a11y-con label,.a11y-con th,.a11y-con td,.a11y-con figcaption,.a11y-con blockquote,.a11y-con small,.a11y-con strong,.a11y-con em,.a11y-con legend,.a11y-con summary,.a11y-con button:not(#a11y-bar *),.a11y-con input,.a11y-con textarea,.a11y-con select,.a11y-con option', 'color:#fff!important');
    css('.a11y-con a', 'color:#ffff00!important;text-decoration:underline!important');
    css('.a11y-con section,.a11y-con div:not(#a11y-bar),.a11y-con header,.a11y-con footer,.a11y-con nav,.a11y-con article,.a11y-con aside,.a11y-con main,.a11y-con figure', 'background:#000!important');
    css('.a11y-stop *,.a11y-stop *::before,.a11y-stop *::after', 'animation-duration:0s!important;transition-duration:0s!important');
    css('#a11y-bar button.active', 'background:'+C.hover+'!important');

    requestAnimationFrame(function() {
      addSkip();
      addToolbar();
      addDeclaration();
      addCookie();
      addCheckbox();
      addFooter();
      addAria();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
