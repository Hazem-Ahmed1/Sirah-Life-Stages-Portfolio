/* ===========================
   TEEN THEME SWITCHER
   =========================== */
function changeTheme(dotElement) {
  var themeName = dotElement.dataset.theme;
  if (!themeName) return;
  document.body.className = document.body.className.replace(/theme-\S+/g, '').trim();
  document.body.classList.add('theme-' + themeName);
  document.querySelectorAll('.color-dot').forEach(function(d) { d.classList.remove('active-dot'); });
  dotElement.classList.add('active-dot');
  localStorage.setItem('teenTheme', themeName);
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
   NEON SHAPES SYSTEM
   =========================== */
function initNeonShapes() {
  var shapesContainer = document.createElement('div');
  shapesContainer.className = 'neon-shapes-container';
  shapesContainer.id = 'neonShapesContainer';
  document.body.appendChild(shapesContainer);

  var shapeTypes = ['triangle', 'square', 'diamond', 'circle', 'cross'];
  var neonColors = ['#A855F7', '#06B6D4', '#F472B6', '#22D3EE', '#818CF8', '#34D399', '#FB923C'];

  function spawnNeonShape() {
    var shape = document.createElement('div');
    var type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
    shape.className = 'neon-shape neon-shape-' + type;
    var color = neonColors[Math.floor(Math.random() * neonColors.length)];
    var size = 8 + Math.random() * 16;
    var x = Math.random() < 0.5 ? Math.random() * 18 : 82 + Math.random() * 18;
    var duration = 2 + Math.random() * 1.5;
    var rotation = Math.random() * 360;
    shape.style.setProperty('--shape-color', color);
    shape.style.setProperty('--size', size + 'px');
    shape.style.setProperty('--duration', duration + 's');
    shape.style.setProperty('--rotation', rotation + 'deg');
    shape.style.left = x + '%';
    shape.style.bottom = '-40px';
    shapesContainer.appendChild(shape);
    setTimeout(function() { if (shape.parentNode) shape.remove(); }, duration * 1000 + 100);
  }

  setInterval(function() {
    var count = 1 + Math.floor(Math.random() * 2);
    for (var i = 0; i < count; i++) setTimeout(spawnNeonShape, Math.random() * 400);
  }, 800);
}

/* ===========================
   INIT ON DOM READY
   =========================== */
document.addEventListener('DOMContentLoaded', function() {
  var saved = localStorage.getItem('teenTheme');
  if (saved) {
    var dot = document.querySelector('[data-theme="' + saved + '"]');
    if (dot) changeTheme(dot);
  }

  initTabs();
  initLikeButtons();
  initPhotoItems();
  initScrollShadow();
  initNeonShapes();
});
