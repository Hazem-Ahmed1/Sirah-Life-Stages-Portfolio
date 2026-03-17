/* ===========================
   ADULT THEME SWITCHER
   =========================== */
function changeTheme(dot) {
  var theme = dot.getAttribute('data-theme');
  document.body.className = theme;
  document.querySelectorAll('.color-dot').forEach(function(d) { d.classList.remove('active-dot'); });
  dot.classList.add('active-dot');
  localStorage.setItem('adultTheme', theme);
}

/* ===========================
   TAB SWITCHING
   =========================== */
function initTabs() {
  const links = document.querySelectorAll('.tab-link');
  const panels = document.querySelectorAll('.tab-panel');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      links.forEach(l => l.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      this.classList.add('active');
      const panel = document.querySelector(this.getAttribute('href'));
      if (panel) { panel.classList.add('active'); panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
    });
  });
}

/* ===========================
   LIKE BUTTONS, PHOTO ITEMS, SCROLL SHADOW
   =========================== */
function initLikeButtons() {
  document.querySelectorAll('.action-btn-like').forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.toggle('liked');
      const icon = this.querySelector('i');
      if (this.classList.contains('liked')) { icon.classList.replace('fa-thumbs-up', 'fa-thumbs-down'); this.style.color = '#c0392b'; this.style.background = '#fde8e8'; }
      else { icon.classList.replace('fa-thumbs-down', 'fa-thumbs-up'); this.style.color = ''; this.style.background = ''; }
    });
  });
}

function initPhotoItems() {
  document.querySelectorAll('.photo-item').forEach(item => {
    item.addEventListener('click', function() { this.style.transform = 'scale(0.95) rotate(2deg)'; setTimeout(() => { this.style.transform = ''; }, 200); });
  });
}

function initScrollShadow() {
  const navbar = document.querySelector('.top-navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => { navbar.style.boxShadow = window.scrollY > 5 ? '0 2px 12px rgba(0,0,0,0.1)' : '0 1px 4px rgba(0,0,0,0.06)'; });
}

/* ===========================
   CURSOR LIGHT EFFECT
   =========================== */
function initCursorLight() {
  var light = document.createElement('div');
  light.id = 'cursorLight';
  document.body.appendChild(light);

  var style = document.createElement('style');
  style.textContent = '#cursorLight{position:fixed;top:0;left:0;width:350px;height:350px;border-radius:50%;pointer-events:none;z-index:9998;opacity:0;transition:opacity 0.3s;background:radial-gradient(circle,rgba(212,175,55,0.18) 0%,rgba(212,175,55,0.09) 35%,transparent 70%);transform:translate(-50%,-50%);mix-blend-mode:overlay;}';
  document.head.appendChild(style);

  function getThemeColor() {
    var cls = document.body.className;
    if (cls === 'platinumSilver') return 'rgba(192,192,192,';
    if (cls === 'roseGold') return 'rgba(183,110,121,';
    if (cls === 'indigoNight') return 'rgba(99,102,241,';
    return 'rgba(212,175,55,';
  }

  function updateLightColor() {
    var c = getThemeColor();
    light.style.background = 'radial-gradient(circle,' + c + '0.08) 0%,' + c + '0.04) 30%,transparent 70%)';
  }

  var observer = new MutationObserver(updateLightColor);
  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

  document.addEventListener('mousemove', function(e) {
    light.style.left = e.clientX + 'px';
    light.style.top = e.clientY + 'px';
    light.style.opacity = '1';
  });

  document.addEventListener('mouseleave', function() {
    light.style.opacity = '0';
  });
}

/* ===========================
   INIT ON DOM READY
   =========================== */
document.addEventListener('DOMContentLoaded', function() {
  var saved = localStorage.getItem('adultTheme');
  if (saved) {
    var dot = document.querySelector('[data-theme="' + saved + '"]');
    if (dot) changeTheme(dot);
  }

  initTabs();
  initLikeButtons();
  initPhotoItems();
  initScrollShadow();
  initCursorLight();
});
