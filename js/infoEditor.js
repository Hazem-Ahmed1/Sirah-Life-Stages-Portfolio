/* ===========================
   INFORMATION EDITOR
   Manage personal information & life events with localStorage
   =========================== */

(function () {
    'use strict';

    const STORAGE_KEY = 'informationData';

    const cartoonImages = [
        'https://cdn-icons-png.flaticon.com/128/3468/3468377.png',
        'https://cdn-icons-png.flaticon.com/128/3468/3468294.png',
        'https://cdn-icons-png.flaticon.com/128/3468/3468081.png',
        'https://cdn-icons-png.flaticon.com/128/2965/2965567.png',
        'https://cdn-icons-png.flaticon.com/128/3468/3468292.png'
    ];

    const daysAr = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    const daysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsAr = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    const monthsEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const eventTypesAr = {
        milestone: 'إنجاز شخصي',
        medical: 'طبي',
        social: 'اجتماعي',
        family: 'عائلي',
        other: 'أخرى'
    };

    const eventTypesEn = {
        milestone: 'Personal Milestone',
        medical: 'Medical',
        social: 'Social',
        family: 'Family',
        other: 'Other'
    };

    function loadInformation() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try { return JSON.parse(saved); } catch (e) { return []; }
        }
        return [];
    }

    function saveInformation(data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    function getLanguage() {
        return document.documentElement.getAttribute('lang') || 'ar';
    }

    function formatDayName(dateObj) {
        const lang = getLanguage();
        return lang === 'ar' ? daysAr[dateObj.getDay()] : daysEn[dateObj.getDay()];
    }

    function formatDate(dateObj) {
        const lang = getLanguage();
        const day = dateObj.getDate();
        const month = lang === 'ar' ? monthsAr[dateObj.getMonth()] : monthsEn[dateObj.getMonth()];
        const year = dateObj.getFullYear();
        return lang === 'ar' ? `${day} ${month} ${year}` : `${month} ${day}, ${year}`;
    }

    function formatTime(time) {
        if (!time) return '';
        const [hours, minutes] = time.split(':');
        const h = parseInt(hours);
        const lang = getLanguage();
        if (lang === 'ar') {
            const period = h >= 12 ? 'مساءً' : 'صباحاً';
            const hour12 = h % 12 || 12;
            return `${hour12}:${minutes} ${period}`;
        } else {
            const period = h >= 12 ? 'PM' : 'AM';
            const hour12 = h % 12 || 12;
            return `${hour12}:${minutes} ${period}`;
        }
    }

    function getRandomCartoon() {
        return cartoonImages[Math.floor(Math.random() * cartoonImages.length)];
    }

    function getEventBadgeClass(eventType) {
        const badges = {
            milestone: 'event-milestone',
            medical: 'event-medical',
            social: 'event-social',
            family: 'event-family',
            other: 'event-milestone'
        };
        return badges[eventType] || 'event-milestone';
    }

    function getEventIcon(eventType) {
        const icons = {
            milestone: 'fa-star',
            medical: 'fa-heartbeat',
            social: 'fa-users',
            family: 'fa-home',
            other: 'fa-bookmark'
        };
        return icons[eventType] || 'fa-bookmark';
    }

    function getEventTypeText(eventType) {
        const lang = getLanguage();
        return lang === 'ar' ? eventTypesAr[eventType] : eventTypesEn[eventType];
    }

    function renderInformation(infoArray) {
        const grid = document.getElementById('infoCardsGrid');
        if (!grid) return;

        grid.innerHTML = '';

        if (infoArray.length === 0) {
            grid.innerHTML = `
                <div class="certs-empty scroll-reveal">
                    <img src="${getRandomCartoon()}" alt="" class="empty-cartoon">
                    <p data-translate="noInformation">لم يتم إضافة معلومات بعد</p>
                    <button class="collect-btn collect-btn-orange" onclick="document.getElementById('addInfoBtn').click()">
                        <span class="collect-btn-text" data-translate="btnStartInfo">أضف أول معلومة</span>
                        <span class="collect-btn-bubbles">
                            <span class="collect-bubble cb-1"></span>
                            <span class="collect-bubble cb-2"></span>
                            <span class="collect-bubble cb-3"></span>
                        </span>
                    </button>
                </div>
            `;
            return;
        }

        infoArray.forEach((info, index) => {
            const dateObj = info.date ? new Date(info.date) : null;
            const dayName = dateObj ? formatDayName(dateObj) : '';
            const formattedDate = dateObj ? formatDate(dateObj) : '';
            const formattedTime = info.time ? formatTime(info.time) : '';

            const badgeClass = getEventBadgeClass(info.eventType);
            const badgeIcon = getEventIcon(info.eventType);
            const badgeText = getEventTypeText(info.eventType);

            const lang = getLanguage();
            const eventTypeLabel = lang === 'ar' ? 'نوع الحدث' : 'Event Type';
            const ageStageLabel = lang === 'ar' ? 'المرحلة' : 'Stage';

            const card = document.createElement('div');
            card.className = 'info-card-wrap scroll-reveal';
            card.setAttribute('data-image-group', `info-${index + 1}`);

            let thumbnailHTML = '';
            if (info.thumbnail) {
                thumbnailHTML = `<img src="${info.thumbnail}" alt="${info.title}">`;
            } else {
                thumbnailHTML = `<img src="${getRandomCartoon()}" alt="${info.title}" style="width:100px;height:100px;margin:auto;display:block;padding-top:80px;">`;
            }

            let photosHTML = '';
            if (info.photos && info.photos.length > 0) {
                photosHTML = '<div class="info-photos-row">';
                info.photos.forEach(photo => {
                    photosHTML += `<div class="info-extra-photo"><img src="${photo}" alt=""></div>`;
                });
                photosHTML += '</div>';
            }

            let dateInfoHTML = '';
            if (formattedDate || formattedTime) {
                const calendarIcon = lang === 'ar' ? '<i class="fas fa-calendar-alt"></i>' : '<i class="fas fa-calendar-alt"></i>';
                const clockIcon = lang === 'ar' ? '<i class="fas fa-clock"></i>' : '<i class="fas fa-clock"></i>';
                
                dateInfoHTML = `
                    <div class="info-date-info">
                        ${dayName ? `<span class="info-day-name">${dayName}</span>` : ''}
                        ${formattedDate ? `<span class="info-date">${calendarIcon} ${formattedDate}</span>` : ''}
                        ${formattedTime ? `<span class="info-time">${clockIcon} ${formattedTime}</span>` : ''}
                    </div>
                `;
            }

            card.innerHTML = `
                <div class="info-card">
                    <div class="info-event-badge ${badgeClass}">
                        <i class="fas ${badgeIcon}"></i>
                        <span>${badgeText}</span>
                    </div>
                    <div class="info-card-thumbnail">
                        ${thumbnailHTML}
                    </div>
                    <div class="info-card-body">
                        <div class="info-meta-row">
                            <span class="info-event-type"><i class="fas fa-bookmark"></i> ${eventTypeLabel}: <strong>${badgeText}</strong></span>
                            ${info.ageStage ? `<span class="info-age-stage"><i class="fas fa-child"></i> ${ageStageLabel}: <strong>${info.ageStage}</strong></span>` : ''}
                        </div>
                        <h4 class="info-card-title">${info.title}</h4>
                        ${info.details ? `<p class="info-card-details">${info.details}</p>` : ''}
                        ${dateInfoHTML}
                        ${photosHTML}
                    </div>
                    <div class="info-card-footer">
                        <button class="btn-delete-info" data-index="${index}" title="حذف"><i class="fas fa-trash-alt"></i></button>
                    </div>
                </div>
            `;

            grid.appendChild(card);
        });

        // Add delete functionality
        document.querySelectorAll('.btn-delete-info').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                const infoData = loadInformation();
                if (confirm(lang === 'ar' ? 'هل تريد حذف هذه المعلومة؟' : 'Delete this information?')) {
                    infoData.splice(index, 1);
                    saveInformation(infoData);
                    renderInformation(infoData);
                }
            });
        });
    }

    function initInfoEditor() {
        const modal = document.getElementById('infoModal');
        const openBtn = document.getElementById('addInfoBtn');
        const closeBtn = document.getElementById('closeInfoModal');
        const cancelBtn = document.getElementById('cancelInfoBtn');
        const overlay = modal ? modal.querySelector('.modal-overlay') : null;
        const form = document.getElementById('infoForm');

        if (!modal || !openBtn || !form) return;

        // Form inputs
        const inputEventType = document.getElementById('inputInfoEventType');
        const inputAgeStage = document.getElementById('inputInfoAgeStage');
        const inputTitle = document.getElementById('inputInfoTitle');
        const inputDetails = document.getElementById('inputInfoDetails');
        const inputDate = document.getElementById('inputInfoDate');
        const inputTime = document.getElementById('inputInfoTime');
        const inputThumbnail = document.getElementById('inputInfoThumbnail');
        const inputPhotos = document.getElementById('inputInfoPhotos');

        // Preview containers
        const thumbnailPreview = document.getElementById('infoThumbnailPreview');
        const photosPreview = document.getElementById('infoPhotosPreview');
        const thumbnailFileName = document.getElementById('infoThumbnailFileName');
        const photosFileName = document.getElementById('infoPhotosFileName');

        let thumbnailData = null;
        let photosData = [];

        // Thumbnail handler
        if (inputThumbnail && thumbnailPreview) {
            inputThumbnail.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        thumbnailData = event.target.result;
                        thumbnailPreview.innerHTML = `<img src="${thumbnailData}" alt="Preview" style="max-width:100%;max-height:200px;border-radius:12px;">`;
                        if (thumbnailFileName) thumbnailFileName.textContent = file.name;
                    };
                    reader.readAsDataURL(file);
                }
            });
        }

        // Extra photos handler
        if (inputPhotos && photosPreview) {
            inputPhotos.addEventListener('change', function(e) {
                const files = Array.from(e.target.files);
                photosData = [];
                photosPreview.innerHTML = '';
                
                if (files.length > 0 && photosFileName) {
                    photosFileName.textContent = `${files.length} صورة`;
                }

                files.forEach(file => {
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        photosData.push(event.target.result);
                        const img = document.createElement('img');
                        img.src = event.target.result;
                        img.style.cssText = 'max-width:100px;max-height:100px;border-radius:8px;margin:5px;';
                        photosPreview.appendChild(img);
                    };
                    reader.readAsDataURL(file);
                });
            });
        }

        function openModal() {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            form.reset();
            thumbnailData = null;
            photosData = [];
            if (thumbnailPreview) thumbnailPreview.innerHTML = '';
            if (photosPreview) photosPreview.innerHTML = '';
            if (thumbnailFileName) thumbnailFileName.textContent = '';
            if (photosFileName) photosFileName.textContent = '';
        }

        openBtn.addEventListener('click', openModal);
        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (cancelBtn) cancelBtn.addEventListener('click', (e) => { e.preventDefault(); closeModal(); });
        if (overlay) overlay.addEventListener('click', closeModal);

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });

        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();

                const eventType = inputEventType ? inputEventType.value : 'milestone';
                const ageStage = inputAgeStage ? inputAgeStage.value.trim() : '';
                const title = inputTitle ? inputTitle.value.trim() : '';
                const details = inputDetails ? inputDetails.value.trim() : '';
                const date = inputDate ? inputDate.value.trim() : '';
                const time = inputTime ? inputTime.value.trim() : '';

                // Title is required
                if (!title) {
                    if (inputTitle) {
                        inputTitle.focus();
                        inputTitle.style.borderColor = '#e74c3c';
                        setTimeout(() => { inputTitle.style.borderColor = ''; }, 1500);
                    }
                    return;
                }

                const newInfo = {
                    eventType: eventType,
                    ageStage: ageStage,
                    title: title,
                    details: details,
                    date: date,
                    time: time,
                    thumbnail: thumbnailData,
                    photos: photosData.length > 0 ? [...photosData] : [],
                    timestamp: new Date().toISOString()
                };

                const infoData = loadInformation();
                infoData.unshift(newInfo);
                saveInformation(infoData);
                renderInformation(infoData);
                closeModal();
            });
        }

        // Initial render
        const infoData = loadInformation();
        renderInformation(infoData);
    }

    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initInfoEditor);
    } else {
        initInfoEditor();
    }
})();
