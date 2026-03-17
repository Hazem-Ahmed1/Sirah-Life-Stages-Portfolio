/* ===========================
   KIDS THEME PALETTES
   =========================== */
const kidsThemes = {
  playfulRed: {
    primary: '#e74c3c', primaryLight: '#ff7043',
    gradientStart: '#e65100', gradientMid: '#ff9800', gradientEnd: '#ffb74d',
    bgPage: '#fff0ef', bgCard: '#ffffff', bgWhite: '#ffffff',
    textDark: '#2c3e50', textMuted: '#7f8c8d', border: '#f0e0de', borderSoft: '#f0e0de'
  },
  oceanBlue: {
    primary: '#1e88e5', primaryLight: '#42a5f5',
    gradientStart: '#1565c0', gradientMid: '#1e88e5', gradientEnd: '#90caf9',
    bgPage: '#e3f2fd', bgCard: '#ffffff', bgWhite: '#ffffff',
    textDark: '#1a237e', textMuted: '#546e7a', border: '#bbdefb', borderSoft: '#e3f2fd'
  },
  forestGreen: {
    primary: '#43a047', primaryLight: '#66bb6a',
    gradientStart: '#2e7d32', gradientMid: '#43a047', gradientEnd: '#a5d6a7',
    bgPage: '#e8f5e9', bgCard: '#ffffff', bgWhite: '#ffffff',
    textDark: '#1b5e20', textMuted: '#558b2f', border: '#c8e6c9', borderSoft: '#e8f5e9'
  },
  sunsetOrange: {
    primary: '#ff6f00', primaryLight: '#ff9800',
    gradientStart: '#e65100', gradientMid: '#ff6f00', gradientEnd: '#ffcc80',
    bgPage: '#fff3e0', bgCard: '#ffffff', bgWhite: '#ffffff',
    textDark: '#e65100', textMuted: '#ef6c00', border: '#ffe0b2', borderSoft: '#fff3e0'
  },
  purpleDreams: {
    primary: '#7b1fa2', primaryLight: '#ab47bc',
    gradientStart: '#6a1b9a', gradientMid: '#8e24aa', gradientEnd: '#ce93d8',
    bgPage: '#f3e5f5', bgCard: '#ffffff', bgWhite: '#ffffff',
    textDark: '#4a148c', textMuted: '#6a1b9a', border: '#e1bee7', borderSoft: '#f3e5f5'
  },
  candyPink: {
    primary: '#ec407a', primaryLight: '#f48fb1',
    gradientStart: '#d81b60', gradientMid: '#ec407a', gradientEnd: '#f8bbd0',
    bgPage: '#fce4ec', bgCard: '#ffffff', bgWhite: '#ffffff',
    textDark: '#880e4f', textMuted: '#c2185b', border: '#f8bbd0', borderSoft: '#fce4ec'
  },
  skyBlue: {
    primary: '#039be5', primaryLight: '#4fc3f7',
    gradientStart: '#0277bd', gradientMid: '#0288d1', gradientEnd: '#b3e5fc',
    bgPage: '#e1f5fe', bgCard: '#ffffff', bgWhite: '#ffffff',
    textDark: '#01579b', textMuted: '#0277bd', border: '#b3e5fc', borderSoft: '#e1f5fe'
  },
  sunshineYellow: {
    primary: '#fbc02d', primaryLight: '#fdd835',
    gradientStart: '#f57f17', gradientMid: '#fbc02d', gradientEnd: '#fff59d',
    bgPage: '#fffde7', bgCard: '#ffffff', bgWhite: '#ffffff',
    textDark: '#f57f17', textMuted: '#f9a825', border: '#fff9c4', borderSoft: '#fffde7'
  },
  berryPurple: {
    primary: '#8e24aa', primaryLight: '#ba68c8',
    gradientStart: '#6a1b9a', gradientMid: '#7b1fa2', gradientEnd: '#e1bee7',
    bgPage: '#f3e5f5', bgCard: '#ffffff', bgWhite: '#ffffff',
    textDark: '#4a148c', textMuted: '#6a1b9a', border: '#e1bee7', borderSoft: '#f3e5f5'
  },
  mintFresh: {
    primary: '#26a69a', primaryLight: '#4db6ac',
    gradientStart: '#00897b', gradientMid: '#26a69a', gradientEnd: '#b2dfdb',
    bgPage: '#e0f2f1', bgCard: '#ffffff', bgWhite: '#ffffff',
    textDark: '#004d40', textMuted: '#00695c', border: '#b2dfdb', borderSoft: '#e0f2f1'
  }
};

/* ===========================
   THEME CHANGE FUNCTION
   =========================== */
function changeTheme(dotElement) {
  const themeName = dotElement.dataset.theme;
  if (!themeName || !kidsThemes[themeName]) return;

  const theme = kidsThemes[themeName];
  const root = document.documentElement;

  root.style.setProperty('--primary', theme.primary);
  root.style.setProperty('--primary-light', theme.primaryLight);
  root.style.setProperty('--gradient-start', theme.gradientStart);
  root.style.setProperty('--gradient-mid', theme.gradientMid);
  root.style.setProperty('--gradient-end', theme.gradientEnd);
  root.style.setProperty('--bg-page', theme.bgPage);
  root.style.setProperty('--bg-card', theme.bgCard);
  root.style.setProperty('--bg-white', theme.bgWhite);
  root.style.setProperty('--text-dark', theme.textDark);
  root.style.setProperty('--text-muted', theme.textMuted);
  root.style.setProperty('--border', theme.border);
  root.style.setProperty('--border-soft', theme.borderSoft);

  document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active-dot'));
  dotElement.classList.add('active-dot');
  localStorage.setItem('selectedTheme', themeName);
}

/* ===========================
   CUSTOM TAB SWITCHING
   =========================== */
function initTabs() {
  const links = document.querySelectorAll('.tab-link');
  const panels = document.querySelectorAll('.tab-panel');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      links.forEach(l => l.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      this.classList.add('active');
      const panel = document.querySelector(this.getAttribute('href'));
      if (panel) {
        panel.classList.add('active');
        panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });
}

/* ===========================
   LIKE BUTTON TOGGLE
   =========================== */
function initLikeButtons() {
  document.querySelectorAll('.action-btn-like').forEach(btn => {
    btn.addEventListener('click', function () {
      this.classList.toggle('liked');
      const icon = this.querySelector('i');
      if (this.classList.contains('liked')) {
        icon.classList.replace('fa-thumbs-up', 'fa-thumbs-down');
        this.style.color = '#c0392b';
        this.style.background = '#fde8e8';
      } else {
        icon.classList.replace('fa-thumbs-down', 'fa-thumbs-up');
        this.style.color = '';
        this.style.background = '';
      }
    });
  });
}

/* ===========================
   PHOTO ITEMS CLICK
   =========================== */
function initPhotoItems() {
  document.querySelectorAll('.photo-item').forEach(item => {
    item.addEventListener('click', function () {
      this.style.transform = 'scale(0.95) rotate(2deg)';
      setTimeout(() => { this.style.transform = ''; }, 200);
    });
  });
}

/* ===========================
   SCROLL SHADOW ON NAVBAR
   =========================== */
function initScrollShadow() {
  const navbar = document.querySelector('.top-navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 5
      ? '0 2px 12px rgba(0,0,0,0.1)'
      : '0 1px 4px rgba(0,0,0,0.06)';
  });
}

/* ===========================
   SOAP BUBBLES
   =========================== */
let bubblesActive = true;
let bubbleInterval = null;

function createBubble() {
  const container = document.getElementById('bubbleContainer');
  if (!container || !bubblesActive) return;

  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  const size = Math.random() * 45 + 20;
  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';

  const side = Math.random() < 0.5 ? 'left' : 'right';
  if (side === 'left') bubble.style.left = Math.random() * 15 + '%';
  else bubble.style.right = Math.random() * 15 + '%';

  const sway1 = (Math.random() - 0.5) * 80;
  const sway2 = (Math.random() - 0.5) * 80;
  bubble.style.setProperty('--sway1', sway1 + 'px');
  bubble.style.setProperty('--sway2', sway2 + 'px');

  const duration = Math.random() * 8 + 12;
  const delay = Math.random() * 0.5;
  bubble.style.setProperty('--duration', duration + 's');
  bubble.style.setProperty('--delay', delay + 's');

  const hue = Math.random() * 360;
  bubble.style.borderColor = `hsla(${hue}, 80%, 80%, 0.25)`;

  container.appendChild(bubble);

  bubble.addEventListener('click', function (e) {
    e.stopPropagation();
    popBubble(this, e);
  });

  setTimeout(() => { if (bubble.parentNode) bubble.remove(); }, (duration + delay) * 1000 + 500);
}

function popBubble(bubble, event) {
  if (bubble.classList.contains('popping')) return;
  bubble.classList.add('popping');

  const centerX = event.clientX;
  const centerY = event.clientY;

  for (let i = 0; i < 12; i++) {
    const particle = document.createElement('div');
    particle.classList.add('bubble-particle');
    const angle = (Math.PI * 2 * i) / 12;
    const distance = 60 + Math.random() * 40;
    const px = Math.cos(angle) * distance;
    const py = Math.sin(angle) * distance;
    const pSize = 10 + Math.random() * 8;
    particle.style.width = pSize + 'px';
    particle.style.height = pSize + 'px';
    particle.style.left = (centerX - pSize / 2) + 'px';
    particle.style.top = (centerY - pSize / 2) + 'px';
    const h = Math.random() * 360;
    particle.style.background = `radial-gradient(circle at 30% 30%, hsla(${h},100%,80%,1), hsla(${h + 30},90%,60%,0.9))`;
    particle.style.boxShadow = `0 0 15px hsla(${h},100%,70%,0.9), 0 0 25px hsla(${h + 30},90%,60%,0.6), inset -2px -2px 5px rgba(255,255,255,0.8)`;
    particle.style.border = '2px solid rgba(255,255,255,0.6)';
    particle.style.setProperty('--px', px + 'px');
    particle.style.setProperty('--py', py + 'px');
    particle.style.animation = 'particleBurst 1s ease-out forwards';
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
  }

  setTimeout(() => { if (bubble.parentNode) bubble.remove(); }, 300);
}

function startBubbles() {
  if (bubbleInterval) return;
  bubblesActive = true;
  createBubble();
  bubbleInterval = setInterval(createBubble, 2000);
}

function stopBubbles() {
  bubblesActive = false;
  if (bubbleInterval) { clearInterval(bubbleInterval); bubbleInterval = null; }
}

function toggleBubbles() {
  const btn = document.getElementById('bubbleToggle');
  const container = document.getElementById('bubbleContainer');
  if (bubblesActive) {
    stopBubbles();
    container.classList.add('paused');
    if (btn) { btn.classList.add('paused'); btn.title = 'Start Bubbles'; }
  } else {
    if (container) container.classList.remove('paused');
    if (btn) { btn.classList.remove('paused'); btn.title = 'Stop Bubbles'; }
    startBubbles();
  }
  localStorage.setItem('bubblesActive', bubblesActive);
}

/* ===========================
   INIT ON DOM READY
   =========================== */
document.addEventListener('DOMContentLoaded', function () {
  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme && kidsThemes[savedTheme]) {
    const themeDot = document.querySelector(`[data-theme="${savedTheme}"]`);
    if (themeDot) changeTheme(themeDot);
  }

  initTabs();
  initLikeButtons();
  initPhotoItems();
  initScrollShadow();
  startBubbles();
});
