/* ===========================================
   BOOK CAROUSEL — Life Book photo viewer
   =========================================== */
(function () {
  'use strict';

  var modal = document.getElementById('bookCarouselModal');
  if (!modal) return;
  var overlay = modal.querySelector('.book-carousel-overlay');
  var closeBtn = document.getElementById('bookCarouselClose');
  var prevBtn = document.getElementById('bookPrev');
  var nextBtn = document.getElementById('bookNext');
  var pageLeft = document.getElementById('bookPageLeft');
  var pageRight = document.getElementById('bookPageRight');
  var pageFlip = document.getElementById('bookPageFlip');
  var flipFront = pageFlip.querySelector('.book-flip-front');
  var flipBack = pageFlip.querySelector('.book-flip-back');
  var thumbsWrap = document.getElementById('bookThumbs');
  var counterCurr = document.getElementById('bookCurrentIdx');
  var counterTotal = document.getElementById('bookTotalIdx');
  var sidebarGrid = document.getElementById('sidebarPhotoGrid');
  var yearLabel = document.getElementById('bookYearLabel');
  var bookInfoSource = document.getElementById('bookInfoSource');
  var bookInfoTitle = document.getElementById('bookInfoTitle');
  var bookInfoDate = document.getElementById('bookInfoDate');
  var bookInfoMeta = document.getElementById('bookInfoMeta');
  var openLifeBookLink = document.getElementById('openLifeBook');
  var thumbsViewport = document.getElementById('bookThumbsViewport');
  var thumbsPrevBtn = document.getElementById('bookThumbsPrev');
  var thumbsNextBtn = document.getElementById('bookThumbsNext');
  var THUMBS_PER_PAGE = 10;
  var thumbPage = 0;

  var monthMap = {
    '\u064a\u0646\u0627\u064a\u0631': '01', '\u0641\u0628\u0631\u0627\u064a\u0631': '02', '\u0645\u0627\u0631\u0633': '03', '\u0623\u0628\u0631\u064a\u0644': '04',
    '\u0645\u0627\u064a\u0648': '05', '\u064a\u0648\u0646\u064a\u0648': '06', '\u064a\u0648\u0644\u064a\u0648': '07', '\u0623\u063a\u0633\u0637\u0633': '08',
    '\u0633\u0628\u062a\u0645\u0628\u0631': '09', '\u0623\u0643\u062a\u0648\u0628\u0631': '10', '\u0646\u0648\u0641\u0645\u0628\u0631': '11', '\u062f\u064a\u0633\u0645\u0628\u0631': '12'
  };

  function parseArabicDate(str) {
    if (!str) return '9999-99-99';
    var m = str.match(/(\d{1,2})\s+(\S+)\s+(\d{4})/);
    if (m) return m[3] + '-' + (monthMap[m[2]] || '01') + '-' + m[1].padStart(2, '0');
    var m2 = str.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
    if (m2) return m2[3] + '-' + m2[2].padStart(2, '0') + '-' + m2[1].padStart(2, '0');
    var m3 = str.match(/(\d{4})/);
    if (m3) return m3[1] + '-06-01';
    return '9999-99-99';
  }

  var entries = [];
  var currentIdx = 0;
  var isFlipping = false;

  function collectAllEntries() {
    entries = [];

    /* Birth Tab */
    var birthDate = '15 \u0645\u0627\u0631\u0633 2019';
    var birthSortKey = parseArabicDate(birthDate);
    var birthYear = '2019';
    var birthMeta = '';
    document.querySelectorAll('.birth-info-item').forEach(function (item) {
      var label = item.querySelector('.birth-info-label');
      var value = item.querySelector('.birth-info-value');
      if (label && value) birthMeta += '<div class="meta-row"><i class="fas fa-circle" style="font-size:5px;color:#baa894;margin-top:7px"></i><span class="meta-label">' + label.textContent + ': </span><span class="meta-value">' + value.textContent + '</span></div>';
    });

    var footprintImg = document.querySelector('.birth-footprint-card img');
    if (footprintImg && footprintImg.src) {
      entries.push({ src: footprintImg.src, tab: '\u0627\u0644\u0648\u0644\u0627\u062f\u0629', tabIcon: 'fas fa-baby', tabColor: '#e91e63', year: birthYear, sortKey: birthSortKey, title: '\u0628\u0635\u0645\u0629 \u0627\u0644\u0642\u062f\u0645', dateDisplay: birthDate, meta: birthMeta });
    }
    document.querySelectorAll('.birth-photos-grid img').forEach(function (img, i) {
      if (!img.src) return;
      entries.push({ src: img.src, tab: '\u0627\u0644\u0648\u0644\u0627\u062f\u0629', tabIcon: 'fas fa-baby', tabColor: '#e91e63', year: birthYear, sortKey: birthSortKey + '-' + String(i).padStart(2, '0'), title: '\u0635\u0648\u0631 \u0627\u0644\u0648\u0644\u0627\u062f\u0629 (' + (i + 1) + ')', dateDisplay: birthDate, meta: birthMeta });
    });

    /* Height Tab */
    document.querySelectorAll('.measurement-item').forEach(function (item) {
      var dayName = (item.querySelector('.day-name') || {}).textContent || '';
      var dayDate = (item.querySelector('.day-date') || {}).textContent?.replace(/[\u200f\u200e]/g, '').trim() || '';
      var dayTime = (item.querySelector('.day-time') || {}).textContent?.replace(/[\u200f\u200e]/g, '').trim() || '';
      var sortKey = parseArabicDate(dayDate);
      var yearMatch = dayDate.match(/(\d{4})/);
      var year = yearMatch ? yearMatch[1] : '2020';
      var hVal = '', wVal = '';
      item.querySelectorAll('.measure-stat').forEach(function (st) {
        var v = (st.querySelector('.measure-stat-val') || {}).textContent || '';
        var u = (st.querySelector('.measure-stat-unit') || {}).textContent || '';
        if (u.includes('\u0633\u0645')) hVal = v + ' ' + u;
        if (u.includes('\u0643\u062c')) wVal = v + ' ' + u;
      });
      var meta = '<div class="meta-row"><i class="fas fa-ruler-vertical"></i><span class="meta-label">\u0627\u0644\u0637\u0648\u0644: </span><span class="meta-value">' + hVal + '</span></div>';
      meta += '<div class="meta-row"><i class="fas fa-weight"></i><span class="meta-label">\u0627\u0644\u0648\u0632\u0646: </span><span class="meta-value">' + wVal + '</span></div>';
      var img = item.querySelector('.measurement-photo');
      if (img && img.src) {
        entries.push({ src: img.src, tab: '\u0627\u0644\u0642\u064a\u0627\u0633\u0627\u062a', tabIcon: 'fas fa-ruler-vertical', tabColor: '#2196f3', year: year, sortKey: sortKey, title: '\u0642\u064a\u0627\u0633 ' + dayDate, dateDisplay: dayName + ' ' + dayDate, meta: meta });
      }
    });

    /* Certificates Tab */
    document.querySelectorAll('.cert-card-wrap').forEach(function (card) {
      var d = card.dataset;
      var certDate = d.certDate || '';
      var sortKey = parseArabicDate(certDate);
      var yearMatch = certDate.match(/(\d{4})/);
      var year = yearMatch ? yearMatch[1] : '2024';
      var meta = '<div class="meta-row"><i class="fas fa-map-marker-alt"></i><span class="meta-label">\u0627\u0644\u0645\u0643\u0627\u0646: </span><span class="meta-value">' + (d.certPlace || '') + '</span></div>';
      meta += '<div class="meta-row"><i class="fas fa-award"></i><span class="meta-label">\u0627\u0644\u0646\u0648\u0639: </span><span class="meta-value">' + (d.certBadge || '') + '</span></div>';
      if (d.certDetails) meta += '<div class="meta-row" style="margin-top:6px"><i class="fas fa-align-right"></i><span>' + d.certDetails + '</span></div>';
      var mainImg = card.querySelector('.cert-main-img');
      if (mainImg && mainImg.src) {
        entries.push({ src: mainImg.src, tab: '\u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a', tabIcon: 'fas fa-certificate', tabColor: '#ff9800', year: year, sortKey: sortKey, title: d.certTitle || '', dateDisplay: (d.certDay || '') + ' ' + certDate, meta: meta });
      }
      try {
        var photos = JSON.parse(d.certPhotos || '[]');
        photos.forEach(function (src, i) {
          if (mainImg && src === mainImg.src) return;
          entries.push({ src: src, tab: '\u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a', tabIcon: 'fas fa-certificate', tabColor: '#ff9800', year: year, sortKey: sortKey + '-' + String(i).padStart(2, '0'), title: (d.certTitle || '') + ' (' + (i + 2) + ')', dateDisplay: (d.certDay || '') + ' ' + certDate, meta: meta });
        });
      } catch (e) { }
    });

    /* Education Tab */
    document.querySelectorAll('.edu-event-item').forEach(function (evtItem) {
      var d = evtItem.dataset;
      var yearCard = evtItem.closest('.edu-year-card');
      var yd = yearCard ? yearCard.dataset : {};
      var evtDate = d.eventDate || '';
      var sortKey = parseArabicDate(evtDate);
      var yearMatch = evtDate.match(/(\d{4})/);
      var year = yearMatch ? yearMatch[1] : '2024';
      var meta = '<div class="meta-row"><i class="fas fa-school"></i><span class="meta-label">\u0627\u0644\u0645\u062f\u0631\u0633\u0629: </span><span class="meta-value">' + (yd.eduSchool || '') + '</span></div>';
      meta += '<div class="meta-row"><i class="fas fa-calendar"></i><span class="meta-label">\u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u062f\u0631\u0627\u0633\u064a\u0629: </span><span class="meta-value">' + (yd.eduDate || '') + '</span></div>';
      meta += '<div class="meta-row"><i class="fas fa-star"></i><span class="meta-label">\u0627\u0644\u062a\u0642\u062f\u064a\u0631: </span><span class="meta-value">' + (yd.eduGrade || '') + '</span></div>';
      if (d.eventDetails) meta += '<div class="meta-row" style="margin-top:6px"><i class="fas fa-align-right"></i><span>' + d.eventDetails + '</span></div>';
      try {
        var photos = JSON.parse(d.eventPhotos || '[]');
        photos.forEach(function (src, i) {
          entries.push({ src: src, tab: '\u0627\u0644\u062a\u0639\u0644\u064a\u0645', tabIcon: 'fas fa-graduation-cap', tabColor: '#4caf50', year: year, sortKey: sortKey + '-' + String(i).padStart(2, '0'), title: d.eventTitle || '', dateDisplay: evtDate, meta: meta });
        });
      } catch (e) { }
    });

    /* Events Tab */
    document.querySelectorAll('.event-card[data-event-year]').forEach(function (card) {
      var d = card.dataset;
      var evtDate = d.evtDate || '';
      var sortKey = parseArabicDate(evtDate);
      var year = d.eventYear || '';
      var meta = '<div class="meta-row"><i class="fas fa-bookmark"></i><span class="meta-label">\u0646\u0648\u0639 \u0627\u0644\u062d\u062f\u062b: </span><span class="meta-value">' + (d.evtType || '') + '</span></div>';
      meta += '<div class="meta-row"><i class="fas fa-child"></i><span class="meta-label">\u0627\u0644\u0645\u0631\u062d\u0644\u0629: </span><span class="meta-value">' + (d.evtStage || '') + '</span></div>';
      if (d.evtBadge) meta += '<div class="meta-row"><i class="fas fa-tag"></i><span class="meta-label">\u0627\u0644\u062a\u0635\u0646\u064a\u0641: </span><span class="meta-value">' + d.evtBadge + '</span></div>';
      if (d.evtDesc) meta += '<div class="meta-row" style="margin-top:6px"><i class="fas fa-align-right"></i><span>' + d.evtDesc + '</span></div>';
      var mainImg = card.querySelector('.event-card-thumbnail img');
      if (mainImg && mainImg.src) {
        entries.push({ src: mainImg.src, tab: '\u0627\u0644\u0623\u062d\u062f\u0627\u062b', tabIcon: 'fas fa-calendar-check', tabColor: '#9c27b0', year: year, sortKey: sortKey, title: d.evtTitle || '', dateDisplay: (d.evtDay || '') + ' ' + evtDate, meta: meta });
      }
      try {
        var photos = JSON.parse(d.evtPhotos || '[]');
        photos.forEach(function (src, i) {
          if (mainImg && src.split('?')[0] === mainImg.src.split('?')[0]) return;
          entries.push({ src: src, tab: '\u0627\u0644\u0623\u062d\u062f\u0627\u062b', tabIcon: 'fas fa-calendar-check', tabColor: '#9c27b0', year: year, sortKey: sortKey + '-' + String(i).padStart(2, '0'), title: (d.evtTitle || '') + ' (' + (i + 2) + ')', dateDisplay: (d.evtDay || '') + ' ' + evtDate, meta: meta });
        });
      } catch (e) { }
    });

    entries.sort(function (a, b) { return a.sortKey.localeCompare(b.sortKey); });
    return entries;
  }

  /* Sidebar photo grid */
  function populateSidebar() {
    if (!sidebarGrid) return;
    collectAllEntries();
    sidebarGrid.innerHTML = '';
    var step = Math.max(1, Math.floor(entries.length / 9));
    var shown = [];
    for (var i = 0; i < entries.length && shown.length < 9; i += step) shown.push(entries[i]);
    shown.forEach(function (entry) {
      var div = document.createElement('div');
      div.className = 'photo-item';
      div.innerHTML = '<img src="' + entry.src + '" alt="">';
      div.style.cursor = 'pointer';
      div.addEventListener('click', function () {
        var idx = entries.indexOf(entry);
        openCarousel(idx >= 0 ? idx : 0);
      });
      sidebarGrid.appendChild(div);
    });
  }

  /* Thumbnails */
  function buildThumbs() {
    thumbsWrap.innerHTML = '';
    entries.forEach(function (entry, i) {
      var t = document.createElement('div');
      t.className = 'book-thumb' + (i === currentIdx ? ' active' : '');
      t.innerHTML = '<img src="' + entry.src + '" alt="">';
      t.addEventListener('click', function () { goTo(i); });
      thumbsWrap.appendChild(t);
    });
    scrollThumbsToIdx(currentIdx);
  }

  function scrollThumbsToIdx(idx) {
    var thumbSize = 62;
    var vpWidth = thumbsViewport ? thumbsViewport.offsetWidth : 620;
    var visibleCount = Math.floor(vpWidth / thumbSize) || THUMBS_PER_PAGE;
    thumbPage = Math.floor(idx / visibleCount);
    thumbsWrap.style.transform = 'translateX(' + (thumbPage * visibleCount * thumbSize) + 'px)';
  }

  if (thumbsPrevBtn) {
    thumbsPrevBtn.addEventListener('click', function () {
      var thumbSize = 62;
      var vpWidth = thumbsViewport ? thumbsViewport.offsetWidth : 620;
      var visibleCount = Math.floor(vpWidth / thumbSize) || THUMBS_PER_PAGE;
      thumbPage = Math.min(Math.ceil(entries.length / visibleCount) - 1, thumbPage + 1);
      thumbsWrap.style.transform = 'translateX(' + (thumbPage * visibleCount * thumbSize) + 'px)';
    });
  }
  if (thumbsNextBtn) {
    thumbsNextBtn.addEventListener('click', function () {
      var thumbSize = 62;
      var vpWidth = thumbsViewport ? thumbsViewport.offsetWidth : 620;
      var visibleCount = Math.floor(vpWidth / thumbSize) || THUMBS_PER_PAGE;
      thumbPage = Math.max(0, thumbPage - 1);
      thumbsWrap.style.transform = 'translateX(' + (thumbPage * visibleCount * thumbSize) + 'px)';
    });
  }

  /* Update pages */
  function updatePages() {
    var entry = entries[currentIdx];
    if (!entry) return;
    pageLeft.querySelector('img').src = entry.src;
    pageLeft.classList.remove('empty-page');
    bookInfoSource.innerHTML = '<i class="' + entry.tabIcon + '"></i> ' + entry.tab;
    bookInfoSource.style.background = entry.tabColor;
    bookInfoTitle.textContent = entry.title;
    bookInfoDate.innerHTML = '<i class="fas fa-calendar-alt"></i> ' + entry.dateDisplay;
    bookInfoMeta.innerHTML = entry.meta;
    yearLabel.textContent = entry.year;
    counterCurr.textContent = currentIdx + 1;
    counterTotal.textContent = entries.length;
    thumbsWrap.querySelectorAll('.book-thumb').forEach(function (t, i) { t.classList.toggle('active', i === currentIdx); });
    scrollThumbsToIdx(currentIdx);
  }

  /* Flip animation */
  function flipTo(newIdx, direction) {
    if (isFlipping || newIdx < 0 || newIdx >= entries.length || newIdx === currentIdx) return;
    isFlipping = true;
    var oldImg = entries[currentIdx] ? entries[currentIdx].src : '';
    var newImg = entries[newIdx] ? entries[newIdx].src : '';
    if (direction === 'next') {
      pageFlip.className = 'book-page-flip flip-from-right';
      flipFront.querySelector('img').src = oldImg;
      flipBack.querySelector('img').src = newImg;
      flipFront.style.borderRadius = '0 8px 8px 0';
      flipBack.style.borderRadius = '8px 0 0 8px';
    } else {
      pageFlip.className = 'book-page-flip flip-from-left';
      flipFront.querySelector('img').src = oldImg;
      flipBack.querySelector('img').src = newImg;
      flipFront.style.borderRadius = '8px 0 0 8px';
      flipBack.style.borderRadius = '0 8px 8px 0';
    }
    pageFlip.style.display = 'block';
    requestAnimationFrame(function () { pageFlip.classList.add('flipping'); });
    setTimeout(function () {
      currentIdx = newIdx;
      updatePages();
      pageFlip.style.display = 'none';
      pageFlip.className = 'book-page-flip';
      isFlipping = false;
    }, 620);
  }

  function goNext() { if (currentIdx + 1 < entries.length) flipTo(currentIdx + 1, 'next'); }
  function goPrev() { if (currentIdx - 1 >= 0) flipTo(currentIdx - 1, 'prev'); }
  function goTo(idx) { if (idx !== currentIdx && !isFlipping) flipTo(idx, idx > currentIdx ? 'next' : 'prev'); }

  function openCarousel(startIdx) {
    if (entries.length === 0) collectAllEntries();
    if (entries.length === 0) return;
    currentIdx = startIdx || 0;
    buildThumbs();
    updatePages();
    pageFlip.style.display = 'none';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCarousel() { modal.classList.remove('active'); document.body.style.overflow = ''; }

  closeBtn.addEventListener('click', closeCarousel);
  overlay.addEventListener('click', closeCarousel);
  nextBtn.addEventListener('click', goNext);
  prevBtn.addEventListener('click', goPrev);

  document.addEventListener('keydown', function (e) {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeCarousel();
    if (e.key === 'ArrowLeft') goNext();
    if (e.key === 'ArrowRight') goPrev();
  });

  if (openLifeBookLink) {
    openLifeBookLink.addEventListener('click', function (e) {
      e.preventDefault();
      collectAllEntries();
      openCarousel(0);
    });
  }

  populateSidebar();

  document.querySelectorAll('[data-tab]').forEach(function (tab) {
    tab.addEventListener('click', function () { setTimeout(populateSidebar, 100); });
  });
})();
