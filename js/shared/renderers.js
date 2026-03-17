/* ===========================================
   RENDERERS — Generate HTML from APP_DATA
   Generic renderer shared across kids/teen/adults
   =========================================== */

function escapeAttr(str) {
  return String(str).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function tabStarsHTML() {
  return [1,2,3,4,5,6].map(n => `<div class="tab-star tab-star-${n}">${STAR_SVG}</div>`).join('');
}

/* ---- Tabs ---- */
function renderTabs() {
  const el = document.getElementById('profileTabs');
  if (!el) return;
  el.innerHTML = APP_DATA.tabs.map(t =>
    `<li><a href="#${t.id}" class="tab-link${t.active ? ' active' : ''}" data-translate="${t.labelKey}">` +
    `<i class="${t.icon}"></i> ${t.label}${tabStarsHTML()}</a></li>`
  ).join('');
}

/* ---- Theme Dots ---- */
function renderThemeDots() {
  const el = document.getElementById('themeDots');
  if (!el) return;
  el.innerHTML = APP_DATA.themes.map(t =>
    `<span class="color-dot${t.active ? ' active-dot' : ''}" style="background:${t.gradient};" ` +
    `data-theme="${t.name}" onclick="changeTheme(this)" title="${t.title}"></span>`
  ).join('');
}

/* ---- Stats Bar ---- */
function renderStats() {
  const el = document.getElementById('statsRow');
  if (!el) return;
  el.innerHTML = APP_DATA.profile.stats.map(s =>
    `<div class="stat-item"><span class="stat-num">${s.num}</span>` +
    `<span class="stat-lbl" data-translate="${s.labelKey}">${s.label}</span></div>`
  ).join('');
}

/* ---- Event Card Template ---- */
function eventCardHTML(evt) {
  const photosJson = JSON.stringify(evt.photos);
  const videoBtn = evt.video
    ? '<button class="media-btn media-btn-dark evt-btn-video" title="فيديو"><i class="fas fa-video"></i></button>' : '';
  return `
    <div class="event-card scroll-reveal" data-event-year="${evt.year}"
         data-evt-title="${escapeAttr(evt.title)}"
         data-evt-type="${escapeAttr(evt.type)}"
         data-evt-badge="${escapeAttr(evt.badge)}"
         data-evt-badge-class="${evt.badgeClass}"
         data-evt-stage="${escapeAttr(evt.stage)}"
         data-evt-day="${evt.day}"
         data-evt-date="${evt.date}"
         data-evt-time="${escapeAttr(evt.time)}"
         data-evt-desc="${escapeAttr(evt.desc)}"
         data-evt-photos='${escapeAttr(photosJson)}'
         data-evt-video="${evt.video || ''}">
      <div class="event-card-inner">
        <span class="event-badge ${evt.badgeClass}"><i class="${evt.badgeIcon}"></i> ${evt.badge}</span>
        <div class="event-card-thumbnail">
          <img src="${evt.thumbnail}" alt="">
        </div>
        <div class="event-card-body">
          <div class="event-meta-tags">
            <span class="event-meta-tag"><i class="fas fa-bookmark"></i> ${evt.type}</span>
            <span class="event-meta-tag"><i class="fas fa-child"></i> ${evt.stage}</span>
          </div>
          <h4 class="event-card-title">${evt.title}</h4>
          <p class="event-card-desc">${evt.shortDesc}</p>
          <div class="event-date-row">
            <span class="event-day-name">${evt.day}</span>
            <span><i class="fas fa-calendar-alt"></i> ${evt.date}</span>
            <span><i class="fas fa-clock"></i> ${evt.time}</span>
            <span class="event-meta-tag"><i class="fas fa-child"></i> ${evt.age}</span>
            <span class="event-meta-tag"><i class="fas fa-bookmark"></i> ${evt.eduStage}</span>
          </div>
          <div class="post-media-btns">
            <button class="media-btn media-btn-blue evt-btn-details" title="التفاصيل"><i class="fas fa-th"></i></button>
            <button class="media-btn media-btn-green evt-btn-photos" title="الصور"><i class="fas fa-image"></i></button>
            ${videoBtn}
          </div>
        </div>
      </div>
    </div>`;
}

/* ---- Home Tab ---- */
function renderHomeTab() {
  const el = document.getElementById('tab-home');
  if (!el) return;
  const homeEvents = APP_DATA.events.filter(e => e.showInHome);
  el.innerHTML = `
    <div class="home-events-section">
      <div class="home-events-header">
        <h3><i class="fas fa-calendar-check"></i> آخر الأحداث</h3>
        <a href="#tab-info" class="home-events-viewall" id="homeViewAllEvents"><i class="fas fa-arrow-left"></i> عرض الكل</a>
      </div>
      <div class="events-list">${homeEvents.map(eventCardHTML).join('')}</div>
    </div>`;
}

/* ---- Birth Tab ---- */
function renderBirthTab() {
  const el = document.getElementById('tab-birth');
  if (!el) return;
  const b = APP_DATA.birth;

  const infoItems = b.info.map(i => {
    const lblAttr = i.labelKey ? ` data-translate="${i.labelKey}"` : '';
    const idAttr = i.id ? ` id="${i.id}"` : '';
    return `
      <div class="birth-info-item">
        <div class="birth-info-icon ${i.iconClass}"><i class="${i.icon}"></i></div>
        <div class="birth-info-detail">
          <span class="birth-info-label"${lblAttr}>${i.label}</span>
          <span class="birth-info-value"${idAttr}>${i.value}</span>
        </div>
      </div>`;
  }).join('');

  const photoItems = b.photos.map(p => {
    const style = p.wide
      ? 'border-radius:10px;overflow:hidden;height:200px;grid-column:1/-1;'
      : 'border-radius:10px;overflow:hidden;aspect-ratio:1;';
    return `<div style="${style}"><img src="${p.src}" alt="" style="width:100%;height:100%;object-fit:cover;"></div>`;
  }).join('');

  el.innerHTML = `
    <div class="birth-section">
      <div class="birth-header">
        <h3 class="birth-section-title"><i class="fas fa-baby"></i> <span data-translate="birthTitle">بيانات الولادة</span></h3>
      </div>
      <div class="birth-card birth-footprint-card scroll-reveal">
        <div class="birth-card-header"><i class="fas fa-shoe-prints"></i> <span data-translate="footprintTitle">بصمة القدم</span></div>
        <div class="footprint-container" id="footprintContainer">
          <img src="${b.footprint}" alt="بصمة القدم" style="width:100%;height:220px;object-fit:cover;border-radius:10px;display:block;">
        </div>
      </div>
      <div class="birth-card birth-info-card scroll-reveal">
        <div class="birth-card-header"><i class="fas fa-info-circle"></i> <span data-translate="birthInfoTitle">معلومات الولادة</span></div>
        <div class="birth-info-grid" id="birthInfoGrid">${infoItems}</div>
      </div>
      <div class="birth-card birth-photos-card scroll-reveal">
        <div class="birth-card-header"><i class="fas fa-camera"></i> <span data-translate="birthPhotosTitle">صور الولادة</span></div>
        <div class="birth-photos-grid" id="birthPhotosGrid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">${photoItems}</div>
      </div>
    </div>`;
}

/* ---- Height/Measurements Tab ---- */
function measurementHTML(m) {
  return `
    <div class="measurement-item ${m.animation}">
      <div class="measurement-card">
        <div class="measurement-day">
          <span class="day-name">${m.day}</span>
          <span class="day-date"><i class="fas fa-calendar-alt" style="margin-left:4px;font-size:0.7rem"></i> ${m.date}</span>
          <span class="day-time"><i class="fas fa-clock" style="margin-left:4px;font-size:0.7rem"></i> ${m.time}</span>
          <div class="measurement-note" style="font-size:0.7rem;color:#888;margin-top:4px">
            <i class="fas fa-edit" style="margin-left:4px;color:#aaa"></i> تم التسجيل: ${m.recorded}
          </div>
        </div>
        <div class="measurement-body">
          ${m.cartoonHTML}
          <div class="measurement-values">
            <div class="measure-stat">
              <div class="measure-stat-icon icon-height"><i class="${m.heightIcon}"></i></div>
              <span class="measure-stat-val">${m.height}</span>
              <span class="measure-stat-unit">سم</span>
            </div>
            <div class="measure-stat">
              <div class="measure-stat-icon icon-width"><i class="${m.weightIcon}"></i></div>
              <span class="measure-stat-val">${m.weight}</span>
              <span class="measure-stat-unit">كج</span>
            </div>
            <div class="d-flex gap-2 flex-wrap">
              <div class="measure-stat"><span class="event-meta-tag"><i class="fas fa-child"></i> ${m.age}</span></div>
              <div class="measure-stat"><span class="event-meta-tag"><i class="fas fa-bookmark"></i> ${m.stage}</span></div>
            </div>
          </div>
          <div class="measurement-image-wrap" style="cursor:pointer;">
            <img src="${m.image}" alt="" class="measurement-photo" style="width:100%;border-radius:10px;margin-top:10px;transition:transform 0.2s;">
          </div>
        </div>
      </div>
    </div>`;
}

function renderHeightTab() {
  const el = document.getElementById('tab-height');
  if (!el) return;
  const s = APP_DATA.heightSummary;
  const cfg = APP_DATA.config || {};
  const items = APP_DATA.measurements.map(measurementHTML).join('');
  el.innerHTML = `
    <div class="height-section" data-image-group="height">
      <div class="height-header">
        <div class="height-header-info">
          <div class="height-header-icon">
            ${cfg.heightHeaderIcon || '<i class="fas fa-ruler-vertical cartoon-icon" style="font-size:2.2rem;color:var(--primary)"></i>'}
          </div>
          <div>
            <h3 class="height-section-title" data-translate="heightTitle">سجل القياسات</h3>
            <p class="height-section-sub" data-translate="heightSubtitle">${cfg.heightSubtitle || 'تتبع نمو طفلك بمرور الوقت'}</p>
          </div>
        </div>
      </div>
      <div class="height-summary scroll-reveal">
        <div class="summary-card summary-card-pink">
          ${cfg.summaryHeightIcon || '<i class="fas fa-arrows-alt-v summary-cartoon" style="font-size:2rem;color:#ec407a"></i>'}
          <div class="summary-info">
            <span class="summary-label" data-translate="latestHeight">آخر طول</span>
            <span class="summary-value" id="latestHeightVal">${s.latestHeight}</span>
          </div>
        </div>
        <div class="summary-card summary-card-blue">
          ${cfg.summaryWeightIcon || '<i class="fas fa-weight summary-cartoon" style="font-size:2rem;color:#42a5f5"></i>'}
          <div class="summary-info">
            <span class="summary-label" data-translate="latestWidth">آخر وزن</span>
            <span class="summary-value" id="latestWeightVal">${s.latestWeight}</span>
          </div>
        </div>
        <div class="summary-card summary-card-green">
          ${cfg.summaryChartIcon || '<i class="fas fa-chart-line summary-cartoon" style="font-size:2rem;color:#66bb6a"></i>'}
          <div class="summary-info">
            <span class="summary-label" data-translate="totalMeasurements">عدد القياسات</span>
            <span class="summary-value" id="totalMeasurementsVal">${s.total}</span>
          </div>
        </div>
      </div>
      <div class="measurements-timeline" id="measurementsTimeline">${items}</div>
    </div>`;
}

/* ---- Certificates Tab ---- */
function certCardHTML(c) {
  const photosJson = JSON.stringify(c.photos);
  const videoBtn = c.video
    ? '<button class="media-btn media-btn-dark cert-btn-video" title="فيديو"><i class="fas fa-video"></i></button>' : '';
  return `
    <div class="cert-card-wrap scroll-reveal"
         data-cert-title="${escapeAttr(c.title)}"
         data-cert-place="${escapeAttr(c.place)}"
         data-cert-details="${escapeAttr(c.details)}"
         data-cert-day="${c.day}"
         data-cert-date="${c.date}"
         data-cert-time="${escapeAttr(c.time)}"
         data-cert-badge="${c.badge}"
         data-cert-photos='${escapeAttr(photosJson)}'
         data-cert-video="${c.video || ''}">
      <div class="cert-card">
        <div class="cert-thumbnail">
          <img src="${c.thumbnail}" alt="${c.title}" class="cert-main-img">
          <span class="cert-badge ${c.badgeClass}"><i class="${c.badgeIcon}"></i> ${c.badge}</span>
        </div>
        <div class="cert-card-body">
          <div class="mb-3">
            <span class="event-meta-tag"><i class="fas fa-child"></i> ${c.age}</span>
            <span class="event-meta-tag"><i class="fas fa-bookmark"></i> ${c.stage}</span>
          </div>
          <h4 class="cert-title"><i class="${c.titleIcon}" style="color:${c.titleIconColor};margin-left:6px"></i> ${c.title}</h4>
          <p class="cert-place"><i class="fas fa-map-marker-alt"></i> ${c.place}</p>
          <div class="cert-date-info">
            <span class="cert-day-name">${c.day}</span>
            <span class="cert-date"><i class="fas fa-calendar-alt"></i> ${c.date}</span>
            <span class="cert-time"><i class="fas fa-clock"></i> ${c.time}</span>
            <span class="event-meta-tag"><i class="fas fa-child"></i> ${c.age}</span>
            <span class="event-meta-tag"><i class="fas fa-bookmark"></i> ${c.stage}</span>
          </div>
          <div class="post-media-btns">
            <button class="media-btn media-btn-blue cert-btn-details" title="التفاصيل"><i class="fas fa-th"></i></button>
            <button class="media-btn media-btn-green cert-btn-photos" title="الصور"><i class="fas fa-image"></i></button>
            ${videoBtn}
          </div>
        </div>
      </div>
    </div>`;
}

function renderCertificatesTab() {
  const el = document.getElementById('tab-certificates');
  if (!el) return;
  const cfg = APP_DATA.config || {};
  el.innerHTML = `
    <div class="certificates-section">
      <div class="certs-header">
        <div class="certs-header-info">
          <div class="certs-header-icon">
            ${cfg.certsHeaderIcon || '<i class="fas fa-award cartoon-icon" style="font-size:2.2rem;color:var(--primary)"></i>'}
          </div>
          <div>
            <h3 class="certs-section-title" data-translate="certsTitle">الشهادات والإنجازات</h3>
            <p class="mt-3 certs-section-sub" data-translate="certsSubtitle">${cfg.certsSubtitle || 'وثّق إنجازاتك وشهاداتك'}</p>
          </div>
        </div>
      </div>
      <div class="certificates-grid" id="certificatesGrid">
        ${APP_DATA.certificates.map(certCardHTML).join('')}
      </div>
    </div>`;
}

/* ---- Education Tab ---- */
function eduEventHTML(evt, yearCard) {
  const photosJson = JSON.stringify(evt.photos);
  const videoBtn = evt.video
    ? '<button class="media-btn media-btn-dark edu-btn-video" title="فيديو"><i class="fas fa-video"></i></button>' : '';
  return `
    <div class="edu-event-item" data-event-type="${escapeAttr(evt.type)}"
         data-event-title="${escapeAttr(evt.title)}"
         data-event-details="${escapeAttr(evt.details)}"
         data-event-date="${evt.date}"
         data-event-photos='${escapeAttr(photosJson)}'
         data-event-video="${evt.video || ''}">
      <span class="edu-event-dot" style="background:${evt.dotColor};"></span>
      <div class="edu-event-content">
        <div class="edu-event-top">
          <strong>${evt.title}</strong>
          <span class="edu-event-badge-mini" style="background:${evt.badgeBg};color:${evt.badgeColor};">${evt.type}</span>
        </div>
        <p>${evt.shortDesc}</p>
        <span class="edu-event-date-small">${evt.displayDay}</span>
        <span class="edu-event-date-small"><i class="fas fa-calendar-alt"></i> ${evt.displayDate}</span>
      </div>
      <div class="post-media-btns">
        <button class="media-btn media-btn-blue edu-btn-details" title="التفاصيل"><i class="fas fa-th"></i></button>
        <button class="media-btn media-btn-green edu-btn-photos" title="الصور"><i class="fas fa-image"></i></button>
        ${videoBtn}
      </div>
    </div>`;
}

function eduYearCardHTML(yc, stageData) {
  if (yc.placeholder) {
    return `
      <div class="edu-year-card scroll-reveal"
           data-edu-title="${escapeAttr(yc.title)}" data-edu-date="${yc.dateRange}" data-edu-age="${yc.age}" data-edu-grade="" data-edu-photos='[]' data-edu-video="">
        <div class="edu-year-header" onclick="this.closest('.edu-year-card').classList.toggle('expanded')">
          <div class="edu-year-right">
            <span class="edu-timeline-dot dot-upcoming"></span>
            <div>
              <h5 class="edu-year-title">${yc.title}</h5>
              <span class="edu-year-meta"><i class="fas fa-child"></i> ${yc.age} &nbsp; <i class="fas fa-calendar"></i> ${yc.dateRange}</span>
            </div>
          </div>
          <div class="edu-year-left"><i class="fas fa-chevron-down edu-expand-icon"></i></div>
        </div>
        <div class="edu-year-body">
          <p style="text-align:center;color:var(--text-muted);padding:20px 0;"><i class="fas fa-hourglass-half" style="margin-left:6px;"></i> لم تبدأ بعد</p>
        </div>
      </div>`;
  }

  const photosJson = JSON.stringify(yc.photos);
  const eventsHTML = (yc.events || []).map(e => eduEventHTML(e, yc)).join('');
  const gradeHTML = yc.grade
    ? `<span class="edu-grade-badge grade-excellent">${yc.grade}<small>التقدير</small></span>` : '';

  return `
    <div class="edu-year-card scroll-reveal"
         data-edu-title="${escapeAttr(yc.title)}"
         data-edu-school="${escapeAttr(yc.school || stageData.school)}"
         data-edu-date="${yc.dateRange}"
         data-edu-grade="${yc.grade || ''}"
         data-edu-age="${yc.age}"
         data-edu-height="${yc.height || ''}"
         data-edu-weight="${yc.weight || ''}"
         data-edu-photos='${escapeAttr(photosJson)}'
         data-edu-video="${yc.video || ''}">
      <div class="edu-year-header" onclick="this.closest('.edu-year-card').classList.toggle('expanded')">
        <div class="edu-year-right">
          <span class="edu-timeline-dot"></span>
          <div>
            <h5 class="edu-year-title">${yc.title}</h5>
            <span class="edu-year-meta"><i class="fas fa-child"></i> ${yc.age} &nbsp; <i class="fas fa-calendar"></i> ${yc.dateRange}</span>
          </div>
        </div>
        <div class="edu-year-left">
          ${gradeHTML}
          <i class="fas fa-chevron-down edu-expand-icon"></i>
        </div>
      </div>
      <div class="edu-year-body">
        <div class="edu-year-stats">
          ${yc.height ? `<span class="edu-stat"><i class="fas fa-ruler-vertical"></i> الطول: <strong>${yc.height}</strong></span>` : ''}
          ${yc.weight ? `<span class="edu-stat"><i class="fas fa-weight"></i> الوزن: <strong>${yc.weight}</strong></span>` : ''}
        </div>
        <div class="edu-year-events">${eventsHTML}</div>
      </div>
    </div>`;
}

function renderEducationTab() {
  const el = document.getElementById('tab-education');
  if (!el) return;
  const edu = APP_DATA.education;
  const cfg = APP_DATA.config || {};

  const stageTabs = edu.stageTabs.map(st =>
    `<button class="edu-stage-tab${st.active ? ' active' : ''}" data-stage="${st.id}"><i class="${st.icon}"></i> ${st.label}</button>`
  ).join('');

  let stagePanels = '';
  for (const [key, stageData] of Object.entries(edu.stages)) {
    const isActive = edu.stageTabs.find(t => t.id === key)?.active;
    const cards = stageData.yearCards.map(yc => eduYearCardHTML(yc, stageData)).join('');
    const iconHTML = stageData.headerIconHTML || `<img src="${stageData.headerIcon}" alt="" class="edu-stage-icon">`;
    stagePanels += `
      <div class="edu-stage-panel${isActive ? ' active' : ''}" id="${stageData.panelId}">
        <div class="edu-stage-header-card">
          ${iconHTML}
          <div>
            <h4 class="edu-stage-name">${stageData.name}</h4>
            <p class="edu-stage-school">${stageData.school}</p>
            <span class="edu-stage-years"><i class="fas fa-calendar"></i> ${stageData.years}</span>
          </div>
        </div>
        ${cards}
      </div>`;
  }

  el.innerHTML = `
    <div class="education-section">
      <div class="edu-header">
        <div class="edu-header-info">
          <div class="edu-header-icon">
            ${cfg.eduHeaderIcon || '<i class="fas fa-graduation-cap cartoon-icon" style="font-size:2.2rem;color:var(--primary)"></i>'}
          </div>
          <div>
            <h3 class="edu-section-title">المراحل التعليمية</h3>
            <p class="edu-section-sub mt-1">بطاقة كل سنة دراسية</p>
          </div>
        </div>
      </div>
      <div class="edu-stage-tabs">${stageTabs}</div>
      ${stagePanels}
    </div>`;
}

/* ---- Events/Info Tab ---- */
function renderEventsTab() {
  const el = document.getElementById('tab-info');
  if (!el) return;
  const cfg = APP_DATA.config || {};
  const infoEvents = APP_DATA.events.filter(e => e.showInEvents);

  const filterBtns = APP_DATA.eventFilters.map(f =>
    `<button class="events-filter-btn${f.active ? ' active' : ''}" data-year="${f.year}">${f.icon ? `<i class="${f.icon}"></i> ` : ''}${f.label}</button>`
  ).join('');

  el.innerHTML = `
    <div class="events-section">
      <div class="events-header">
        <div class="events-header-info">
          <div class="events-header-icon">
            ${cfg.eventsHeaderIcon || '<i class="fas fa-calendar-check cartoon-icon" style="font-size:2.2rem;color:var(--primary)"></i>'}
          </div>
          <div>
            <h3 class="events-section-title">الأحداث</h3>
            <p class="events-section-sub">جميع الأحداث والمناسبات المهمة</p>
          </div>
        </div>
      </div>
      <div class="mt-4 events-filter">${filterBtns}</div>
      <div class="events-list" id="eventsList">
        ${infoEvents.map(eventCardHTML).join('')}
        <div class="events-no-results" id="eventsNoResults" style="display:none;">
          <i class="fas fa-search" style="font-size:2rem;color:var(--text-muted);opacity:0.4;"></i>
          <p>لا توجد أحداث في هذه الفترة</p>
        </div>
      </div>
    </div>`;
}

/* ---- Sidebar ---- */
function renderSidebar() {
  const infoEl = document.getElementById('sidebarQuickInfo');
  if (infoEl) {
    infoEl.innerHTML = APP_DATA.sidebarInfo.map(r => {
      const valAttr = r.valueKey ? ` data-translate="${r.valueKey}"` : '';
      return `
        <div class="info-row">
          <div class="info-icon ${r.iconClass}"><i class="${r.icon}"></i></div>
          <div class="info-text">
            <span class="info-value"${valAttr}>${r.value}</span>
            <span class="info-label" data-translate="${r.labelKey}">${r.label}</span>
          </div>
        </div>`;
    }).join('');
  }
}

/* ---- Render All ---- */
function renderAllSections() {
  renderTabs();
  renderThemeDots();
  renderStats();
  renderHomeTab();
  renderBirthTab();
  renderHeightTab();
  renderCertificatesTab();
  renderEducationTab();
  renderEventsTab();
  renderSidebar();
}

renderAllSections();
