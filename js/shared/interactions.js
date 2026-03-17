/* ===========================================
   INTERACTIONS — Modals, event handlers, filters
   =========================================== */
(function () {
  'use strict';

  /* ---- Picture Frame Modal ---- */
  const modal = document.getElementById('pictureFrameModal');
  if (!modal) return;
  const overlay = modal.querySelector('.picture-frame-modal-overlay');
  const closeBtn = document.getElementById('pictureFrameClose');
  const frameImg = document.getElementById('pictureFrameImg');
  const frameLabel = document.getElementById('pictureFrameLabel');
  const prevBtn = document.getElementById('framePrev');
  const nextBtn = document.getElementById('frameNext');
  const counterEl = document.getElementById('frameCounter');
  const counterCurr = document.getElementById('frameCurrentIdx');
  const counterTotal = document.getElementById('frameTotalIdx');

  let frameImages = [];
  let frameCurrentIdx = 0;

  function showFrameImage(idx) {
    frameCurrentIdx = idx;
    frameImg.src = frameImages[idx];
    if (counterCurr) counterCurr.textContent = idx + 1;
  }

  function openFrameModal(imageSrc, label) {
    frameImages = [imageSrc];
    frameCurrentIdx = 0;
    frameImg.src = imageSrc;
    frameLabel.textContent = label || '';
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    counterEl.style.display = 'none';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function openFrameCarousel(images, startIdx, label) {
    frameImages = images;
    frameCurrentIdx = startIdx || 0;
    frameImg.src = frameImages[frameCurrentIdx];
    frameLabel.textContent = label || '';
    if (counterCurr) counterCurr.textContent = frameCurrentIdx + 1;
    if (counterTotal) counterTotal.textContent = frameImages.length;
    if (images.length > 1) {
      prevBtn.style.display = 'flex';
      nextBtn.style.display = 'flex';
      counterEl.style.display = 'block';
    } else {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
      counterEl.style.display = 'none';
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function frameGoPrev() {
    if (frameImages.length < 2) return;
    showFrameImage((frameCurrentIdx - 1 + frameImages.length) % frameImages.length);
  }
  function frameGoNext() {
    if (frameImages.length < 2) return;
    showFrameImage((frameCurrentIdx + 1) % frameImages.length);
  }

  prevBtn.addEventListener('click', function (e) { e.stopPropagation(); frameGoPrev(); });
  nextBtn.addEventListener('click', function (e) { e.stopPropagation(); frameGoNext(); });

  function closeFrameModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    frameImages = [];
    var infoPanel = document.getElementById('pictureFrameInfo');
    if (infoPanel) infoPanel.style.display = 'none';
  }

  closeBtn.addEventListener('click', closeFrameModal);
  overlay.addEventListener('click', closeFrameModal);

  document.addEventListener('keydown', function (e) {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeFrameModal();
    if (e.key === 'ArrowLeft') frameGoNext();
    if (e.key === 'ArrowRight') frameGoPrev();
  });

  /* ---- Cover & Avatar clicks ---- */
  var coverGradient = document.querySelector('.cover-gradient');
  if (coverGradient) {
    coverGradient.style.cursor = 'pointer';
    coverGradient.addEventListener('click', function () {
      openFrameModal(
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=600&fit=crop',
        document.documentElement.dir === 'rtl' ? 'صورة الغلاف' : 'Cover Photo'
      );
    });
  }

  var avatarCircle = document.querySelector('.avatar-circle');
  if (avatarCircle) {
    avatarCircle.style.cursor = 'pointer';
    avatarCircle.addEventListener('click', function (e) {
      e.stopPropagation();
      openFrameModal(
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=800&fit=crop',
        document.documentElement.dir === 'rtl' ? 'الصورة الشخصية' : 'Profile Picture'
      );
    });
  }

  /* ---- Measurement image click ---- */
  document.addEventListener('click', function (e) {
    var measurementImg = e.target.closest('.measurement-image-wrap img, .measurement-photo');
    if (!measurementImg) return;
    e.stopPropagation();
    var card = measurementImg.closest('.measurement-card');
    var infoPanel = document.getElementById('pictureFrameInfo');
    var infoTab = document.getElementById('frameInfoTab');
    var infoDate = document.getElementById('frameInfoDate');
    var infoStats = document.getElementById('frameInfoStats');
    if (card && infoPanel) {
      var dayName = (card.querySelector('.day-name') || {}).textContent || '';
      var dayDate = (card.querySelector('.day-date') || {}).textContent?.trim() || '';
      var dayTime = (card.querySelector('.day-time') || {}).textContent?.trim() || '';
      var heightVal = '', heightUnit = '', weightVal = '', weightUnit = '';
      card.querySelectorAll('.measure-stat').forEach(function (s) {
        var icon = s.querySelector('.measure-stat-icon');
        var val = (s.querySelector('.measure-stat-val') || {}).textContent || '';
        var unit = (s.querySelector('.measure-stat-unit') || {}).textContent || '';
        if (icon && icon.classList.contains('icon-height')) { heightVal = val; heightUnit = unit; }
        else if (icon && icon.classList.contains('icon-width')) { weightVal = val; weightUnit = unit; }
      });
      var isAr = document.documentElement.dir === 'rtl';
      infoTab.innerHTML = '<i class="fas fa-ruler-vertical"></i> ' + (isAr ? 'سجل القياسات' : 'Measurements');
      infoDate.innerHTML = '<i class="fas fa-calendar-alt"></i> ' + dayName + ' ' + dayDate + (dayTime ? ' &nbsp;&bull;&nbsp; <i class="fas fa-clock"></i> ' + dayTime : '');
      var statsHtml = '';
      if (heightVal) statsHtml += '<span class="frame-stat"><i class="fas fa-arrows-alt-v"></i> ' + (isAr ? 'الطول: ' : 'Height: ') + heightVal + ' ' + heightUnit + '</span>';
      if (weightVal) statsHtml += '<span class="frame-stat"><i class="fas fa-weight"></i> ' + (isAr ? 'الوزن: ' : 'Weight: ') + weightVal + ' ' + weightUnit + '</span>';
      infoStats.innerHTML = statsHtml;
      infoPanel.style.display = 'block';
    } else if (infoPanel) {
      infoPanel.style.display = 'none';
    }
    openFrameModal(measurementImg.src, document.documentElement.dir === 'rtl' ? 'صورة القياس' : 'Measurement Photo');
  });

  document.addEventListener('mouseover', function (e) {
    var img = e.target.closest('.measurement-image-wrap img');
    if (img) img.style.transform = 'scale(1.03)';
  });
  document.addEventListener('mouseout', function (e) {
    var img = e.target.closest('.measurement-image-wrap img');
    if (img) img.style.transform = '';
  });

  /* ---- Certificate button handlers ---- */
  document.addEventListener('click', function (e) {
    var wrap = e.target.closest('.cert-card-wrap');
    if (!wrap) return;

    if (e.target.closest('.cert-btn-details')) {
      e.stopPropagation();
      var d = wrap.dataset;
      var mainImg = wrap.querySelector('.cert-main-img');
      var imgSrc = mainImg ? mainImg.src : '';
      var ip = document.getElementById('pictureFrameInfo');
      var iTab = document.getElementById('frameInfoTab');
      var iDate = document.getElementById('frameInfoDate');
      var iStats = document.getElementById('frameInfoStats');
      if (ip) {
        var badgeIcon = d.certBadge === 'تخرج' ? 'fa-graduation-cap' : 'fa-medal';
        var badgeColor = d.certBadge === 'تخرج' ? '#7c4dff' : '#ff9800';
        iTab.innerHTML = '<i class="fas fa-certificate"></i> ' + d.certTitle + ' <span style="margin-right:8px;padding:2px 10px;border-radius:12px;font-size:0.75rem;color:#fff;background:' + badgeColor + '"><i class="fas ' + badgeIcon + '"></i> ' + d.certBadge + '</span>';
        iDate.innerHTML = '<i class="fas fa-calendar-alt"></i> ' + (d.certDay || '') + ' ' + (d.certDate || '') + (d.certTime ? ' &nbsp;\u2022&nbsp; <i class="fas fa-clock"></i> ' + d.certTime : '') + '<br><i class="fas fa-map-marker-alt" style="margin-top:6px"></i> ' + (d.certPlace || '');
        iStats.innerHTML = '<span style="font-size:0.85rem;line-height:1.7;color:rgba(255,255,255,0.8);">' + (d.certDetails || '') + '</span>';
        ip.style.display = 'block';
      }
      openFrameModal(imgSrc, d.certTitle);
      return;
    }

    if (e.target.closest('.cert-btn-photos')) {
      e.stopPropagation();
      try { var photos = JSON.parse(wrap.dataset.certPhotos || '[]'); } catch (ex) { var photos = []; }
      if (photos.length > 0) {
        var ip2 = document.getElementById('pictureFrameInfo');
        if (ip2) ip2.style.display = 'none';
        openFrameCarousel(photos, 0, wrap.dataset.certTitle || '');
      }
      return;
    }

    if (e.target.closest('.cert-btn-video')) {
      e.stopPropagation();
      var videoUrl = wrap.dataset.certVideo || '';
      if (!videoUrl) return;
      var vm = document.getElementById('certVideoModal');
      var vp = document.getElementById('certVideoPlayer');
      if (vm && vp) { vp.src = videoUrl; vm.classList.add('active'); document.body.style.overflow = 'hidden'; vp.play(); }
    }
  });

  /* ---- Birth photos click ---- */
  document.addEventListener('click', function (e) {
    var birthImg = e.target.closest('.birth-photos-grid img');
    if (!birthImg) return;
    e.stopPropagation();
    var grid = birthImg.closest('.birth-photos-grid');
    var allImgs = Array.from(grid.querySelectorAll('img')).map(function (i) { return i.src; });
    var idx = allImgs.indexOf(birthImg.src);
    var isAr = document.documentElement.dir === 'rtl';
    openFrameCarousel(allImgs, idx >= 0 ? idx : 0, isAr ? 'صور الولادة' : 'Birth Photos');
  });

  document.querySelectorAll('.birth-photos-grid img').forEach(function (img) {
    img.style.cursor = 'pointer';
    img.style.transition = 'transform 0.2s';
    img.addEventListener('mouseenter', function () { this.style.transform = 'scale(1.03)'; });
    img.addEventListener('mouseleave', function () { this.style.transform = ''; });
  });

  /* ---- Cert Video Modal close ---- */
  (function () {
    var vm = document.getElementById('certVideoModal');
    if (!vm) return;
    var vc = document.getElementById('certVideoClose');
    var vo = vm.querySelector('.cert-video-overlay');
    var vp = document.getElementById('certVideoPlayer');
    function closeVideo() { vm.classList.remove('active'); document.body.style.overflow = ''; if (vp) { vp.pause(); vp.src = ''; } }
    if (vc) vc.addEventListener('click', closeVideo);
    if (vo) vo.addEventListener('click', closeVideo);
    document.addEventListener('keydown', function (e) { if (vm.classList.contains('active') && e.key === 'Escape') closeVideo(); });
  })();

  /* ---- Events Year Filter ---- */
  (function () {
    var filterBtns = document.querySelectorAll('.events-filter-btn');
    var eventCards = document.querySelectorAll('#eventsList > .event-card[data-event-year]');
    var noResults = document.getElementById('eventsNoResults');
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var year = btn.dataset.year;
        var visible = 0;
        eventCards.forEach(function (card) {
          if (year === 'all' || card.dataset.eventYear === year) { card.classList.remove('hidden-by-filter'); visible++; }
          else { card.classList.add('hidden-by-filter'); }
        });
        if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
      });
    });
  })();

  /* ---- Events Media Buttons ---- */
  document.addEventListener('click', function (e) {
    var evtCard = e.target.closest('.event-card');
    if (!evtCard) return;

    if (e.target.closest('.evt-btn-details')) {
      e.stopPropagation();
      var d = evtCard.dataset;
      var mainImg = '';
      try { var ph = JSON.parse(d.evtPhotos || '[]'); mainImg = ph[0] || ''; } catch (x) { }
      var ip = document.getElementById('pictureFrameInfo');
      var iTab = document.getElementById('frameInfoTab');
      var iDate = document.getElementById('frameInfoDate');
      var iStats = document.getElementById('frameInfoStats');
      if (ip) {
        iTab.innerHTML = '<i class="fas fa-calendar-check"></i> ' + d.evtTitle + ' <span style="margin-right:8px;padding:2px 10px;border-radius:12px;font-size:0.75rem;color:#fff;background:var(--primary)">' + d.evtBadge + '</span>';
        iDate.innerHTML = '<i class="fas fa-calendar-alt"></i> ' + (d.evtDay || '') + ' ' + (d.evtDate || '') + (d.evtTime ? ' &nbsp;\u2022&nbsp; <i class="fas fa-clock"></i> ' + d.evtTime : '') + '<br><i class="fas fa-child" style="margin-top:6px"></i> المرحلة: <strong>' + (d.evtStage || '') + '</strong> &nbsp;•&nbsp; نوع الحدث: <strong>' + (d.evtType || '') + '</strong>';
        iStats.innerHTML = '<div style="font-size:0.85rem;line-height:1.7;color:rgba(255,255,255,0.8);">' + (d.evtDesc || '') + '</div>';
        ip.style.display = 'block';
      }
      if (mainImg) openFrameModal(mainImg, d.evtTitle);
      return;
    }

    if (e.target.closest('.evt-btn-photos')) {
      e.stopPropagation();
      try { var photos = JSON.parse(evtCard.dataset.evtPhotos || '[]'); } catch (x2) { var photos = []; }
      if (photos.length > 0) {
        var ip2 = document.getElementById('pictureFrameInfo');
        if (ip2) ip2.style.display = 'none';
        openFrameCarousel(photos, 0, evtCard.dataset.evtTitle || '');
      }
      return;
    }

    if (e.target.closest('.evt-btn-video')) {
      e.stopPropagation();
      var videoUrl = evtCard.dataset.evtVideo || '';
      if (!videoUrl) return;
      var vm = document.getElementById('certVideoModal');
      var vp = document.getElementById('certVideoPlayer');
      if (vm && vp) { vp.src = videoUrl; vm.classList.add('active'); document.body.style.overflow = 'hidden'; vp.play(); }
    }
  });

  /* ---- Home "View All Events" ---- */
  (function () {
    var viewAllBtn = document.getElementById('homeViewAllEvents');
    if (!viewAllBtn) return;
    viewAllBtn.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelectorAll('.tab-link').forEach(function (l) { l.classList.remove('active'); });
      document.querySelectorAll('.tab-panel').forEach(function (p) { p.classList.remove('active'); });
      var evtLink = document.querySelector('.tab-link[href="#tab-info"]');
      var evtPanel = document.getElementById('tab-info');
      if (evtLink) evtLink.classList.add('active');
      if (evtPanel) { evtPanel.classList.add('active'); evtPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
    });
  })();

  /* ---- Education Stage Tabs ---- */
  (function () {
    var tabs = document.querySelectorAll('.edu-stage-tab');
    var panels = { early: document.getElementById('eduStageEarly'), primary: document.getElementById('eduStagePrimary') };
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        Object.values(panels).forEach(function (p) { if (p) p.classList.remove('active'); });
        if (panels[tab.dataset.stage]) panels[tab.dataset.stage].classList.add('active');
      });
    });
  })();

  /* ---- Education Event Media Buttons ---- */
  document.addEventListener('click', function (e) {
    var eventItem = e.target.closest('.edu-event-item');
    if (!eventItem) return;

    if (e.target.closest('.edu-btn-details')) {
      e.stopPropagation();
      var yearCard = eventItem.closest('.edu-year-card');
      var d = eventItem.dataset;
      var yd = yearCard ? yearCard.dataset : {};
      var mainImg = '';
      try { var photos = JSON.parse(d.eventPhotos || '[]'); mainImg = photos[0] || ''; } catch (x) { }

      var ip = document.getElementById('pictureFrameInfo');
      var iTab = document.getElementById('frameInfoTab');
      var iDate = document.getElementById('frameInfoDate');
      var iStats = document.getElementById('frameInfoStats');
      if (ip) {
        var typeColor = d.eventType === 'تكريم' ? '#ff9800' : d.eventType === 'تخرج' ? '#4caf50' : '#7c4dff';
        iTab.innerHTML = '<i class="fas fa-school"></i> ' + (yd.eduTitle || '') + ' <span style="margin-right:8px;padding:2px 10px;border-radius:12px;font-size:0.75rem;color:#fff;background:' + typeColor + '">' + d.eventType + '</span>';
        var dateHtml = '<i class="fas fa-calendar-alt"></i> ' + (d.eventDate || '');
        if (yd.eduSchool) dateHtml += '<br><i class="fas fa-map-marker-alt" style="margin-top:6px"></i> ' + yd.eduSchool;
        if (yd.eduGrade) dateHtml += ' &nbsp;•&nbsp; التقدير: <strong>' + yd.eduGrade + '</strong>';
        iDate.innerHTML = dateHtml;
        var statsHtml = '';
        if (yd.eduHeight) statsHtml += '<span class="frame-stat"><i class="fas fa-ruler-vertical"></i> ' + yd.eduHeight + '</span>';
        if (yd.eduWeight) statsHtml += '<span class="frame-stat"><i class="fas fa-weight"></i> ' + yd.eduWeight + '</span>';
        statsHtml += '<div style="margin-top:8px;font-size:0.85rem;line-height:1.7;color:rgba(255,255,255,0.8);">' + (d.eventTitle || '') + '<br>' + (d.eventDetails || '') + '</div>';
        iStats.innerHTML = statsHtml;
        ip.style.display = 'block';
      }
      if (mainImg) openFrameModal(mainImg, d.eventTitle);
      return;
    }

    if (e.target.closest('.edu-btn-photos')) {
      e.stopPropagation();
      try { var photos2 = JSON.parse(eventItem.dataset.eventPhotos || '[]'); } catch (x2) { var photos2 = []; }
      if (photos2.length > 0) {
        var ip2 = document.getElementById('pictureFrameInfo');
        if (ip2) ip2.style.display = 'none';
        openFrameCarousel(photos2, 0, eventItem.dataset.eventTitle || '');
      }
      return;
    }

    if (e.target.closest('.edu-btn-video')) {
      e.stopPropagation();
      var videoUrl = eventItem.dataset.eventVideo || '';
      if (!videoUrl) return;
      var vm2 = document.getElementById('certVideoModal');
      var vp2 = document.getElementById('certVideoPlayer');
      if (vm2 && vp2) { vp2.src = videoUrl; vm2.classList.add('active'); document.body.style.overflow = 'hidden'; vp2.play(); }
    }
  });

  window.openPictureFrame = openFrameModal;
  window.openFrameCarousel = openFrameCarousel;
})();
