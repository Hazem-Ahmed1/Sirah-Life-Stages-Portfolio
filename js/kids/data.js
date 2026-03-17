/* ===========================================
   APP DATA — All page content in one place
   =========================================== */

const STAR_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.11 815.53">' +
  '<path class="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 ' +
  '207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 ' +
  '392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.05,-407.78z"/></svg>';

const APP_DATA = {

  /* ---- Page Config (icons, subtitles used by renderers) ---- */
  config: {
    heightHeaderIcon: '<img src="https://cdn-icons-png.flaticon.com/128/3468/3468377.png" alt="" class="cartoon-icon">',
    heightSubtitle: 'تتبع نمو طفلك بمرور الوقت',
    summaryHeightIcon: '<img src="https://cdn-icons-png.flaticon.com/128/3468/3468292.png" alt="" class="summary-cartoon">',
    summaryWeightIcon: '<img src="https://cdn-icons-png.flaticon.com/128/3468/3468081.png" alt="" class="summary-cartoon">',
    summaryChartIcon: '<img src="https://cdn-icons-png.flaticon.com/128/2965/2965567.png" alt="" class="summary-cartoon">',
    certsHeaderIcon: '<img src="https://cdn-icons-png.flaticon.com/128/3468/3468294.png" alt="" class="cartoon-icon">',
    certsSubtitle: 'وثّق إنجازات وشهادات طفلك',
    eduHeaderIcon: '<img src="https://cdn-icons-png.flaticon.com/128/3468/3468254.png" alt="" class="cartoon-icon">',
    eventsHeaderIcon: '<img src="https://cdn-icons-png.flaticon.com/128/3468/3468377.png" alt="" class="img-fluid cartoon-icon">'
  },

  /* ---- Profile ---- */
  profile: {
    name: 'محمد عبدالله',
    intro: 'انا اسمي',
    ageText: 'و عمري 6 سنوات',
    badges: ['مرحلة الطفولة'],
    bio: 'طفل مرح يحب الاستكشاف والتعلم واللعب مع أصدقائه',
    stats: [
      { num: 7, labelKey: 'statPosts', label: 'الأحداث' },
      { num: 3, labelKey: 'statPoints', label: 'القياسات' },
      { num: 2, labelKey: 'statCategories', label: 'الشهادات' },
      { num: 2, labelKey: 'statStages', label: 'مراحل' }
    ]
  },

  /* ---- Tab Definitions ---- */
  tabs: [
    { id: 'tab-home', icon: 'fas fa-home', labelKey: 'tabHome', label: 'الرئيسية', active: true },
    { id: 'tab-birth', icon: 'fas fa-baby-carriage', labelKey: 'tabBirth', label: 'الولادة' },
    { id: 'tab-height', icon: 'fas fa-ruler-vertical', labelKey: 'tabHeight', label: 'الطول' },
    { id: 'tab-certificates', icon: 'fas fa-certificate', labelKey: 'tabCertificates', label: 'الشهادات' },
    { id: 'tab-education', icon: 'fas fa-graduation-cap', labelKey: 'tabEducation', label: 'التعليم' },
    { id: 'tab-info', icon: 'fas fa-calendar-check', labelKey: 'tabInfo', label: 'الأحداث' }
  ],

  /* ---- Theme Dots ---- */
  themes: [
    { name: 'playfulRed',     gradient: 'linear-gradient(135deg,#e74c3c 0%,#ff9800 50%,#ffb74d 100%)',  title: 'Playful Red', active: true },
    { name: 'oceanBlue',      gradient: 'linear-gradient(135deg,#1e88e5 0%,#42a5f5 50%,#90caf9 100%)',  title: 'Ocean Blue' },
    { name: 'forestGreen',    gradient: 'linear-gradient(135deg,#43a047 0%,#66bb6a 50%,#a5d6a7 100%)',  title: 'Forest Green' },
    { name: 'sunsetOrange',   gradient: 'linear-gradient(135deg,#ff6f00 0%,#ff9800 50%,#ffcc80 100%)',  title: 'Sunset Orange' },
    { name: 'purpleDreams',   gradient: 'linear-gradient(135deg,#7b1fa2 0%,#ab47bc 50%,#ce93d8 100%)',  title: 'Purple Dreams' },
    { name: 'candyPink',      gradient: 'linear-gradient(135deg,#ec407a 0%,#f48fb1 50%,#f8bbd0 100%)',  title: 'Candy Pink' },
    { name: 'skyBlue',        gradient: 'linear-gradient(135deg,#039be5 0%,#4fc3f7 50%,#b3e5fc 100%)',  title: 'Sky Blue' },
    { name: 'sunshineYellow', gradient: 'linear-gradient(135deg,#fbc02d 0%,#fdd835 50%,#fff59d 100%)',  title: 'Sunshine Yellow' },
    { name: 'berryPurple',    gradient: 'linear-gradient(135deg,#8e24aa 0%,#ba68c8 50%,#e1bee7 100%)',  title: 'Berry Purple' },
    { name: 'mintFresh',      gradient: 'linear-gradient(135deg,#26a69a 0%,#4db6ac 50%,#b2dfdb 100%)',  title: 'Mint Fresh' }
  ],

  /* ---- Sidebar Quick Info ---- */
  sidebarInfo: [
    { icon: 'fas fa-calendar-day', iconClass: '',               value: '2003-7-15',                     labelKey: 'labelBirthDate',    label: 'تاريخ الميلاد' },
    { icon: 'fas fa-hospital',     iconClass: 'info-icon-pink', value: 'مستشفى الملك فهد، الرياض',      labelKey: 'labelBirthPlace',   label: 'مكان الولادة', valueKey: 'valBirthPlace' },
    { icon: 'fas fa-weight',       iconClass: 'info-icon-purple', value: '3.2 كج',                      labelKey: 'labelWeight',       label: 'الوزن عند الولادة', valueKey: 'valWeight' },
    { icon: 'fas fa-ruler-vertical', iconClass: 'info-icon-blue', value: '115 سم',                      labelKey: 'labelCurrentHeight', label: 'الطول الحالي', valueKey: 'valHeight' },
    { icon: 'fas fa-university',   iconClass: 'info-icon-green', value: 'الروضة الدولية بالرياض',       labelKey: 'labelEducation',    label: 'التعليم', valueKey: 'valEducation' }
  ],

  /* ---- Birth Data ---- */
  birth: {
    footprint: 'https://images.unsplash.com/photo-1560328055-e938bb2ed50a?w=500&h=280&fit=crop',
    info: [
      { icon: 'fas fa-baby',           iconClass: '',                 labelKey: 'birthName',       label: 'اسم المولود',       value: 'محمد عبدالله العمري',      id: 'birthNameVal' },
      { icon: 'fas fa-calendar-day',   iconClass: 'birth-icon-pink',  labelKey: 'birthDateLabel',  label: 'تاريخ الولادة',     value: '2003-7-15',                id: 'birthDateVal' },
      { icon: 'fas fa-clock',          iconClass: 'birth-icon-purple', labelKey: 'birthTimeLabel', label: 'وقت الولادة',       value: '3:45 صباحاً',              id: 'birthTimeVal' },
      { icon: 'fas fa-ruler-vertical', iconClass: 'birth-icon-blue',  labelKey: 'birthHeightLabel', label: 'الطول عند الولادة', value: '50 سم',                   id: 'birthHeightVal' },
      { icon: 'fas fa-weight',         iconClass: 'birth-icon-green', labelKey: 'birthWeightLabel', label: 'الوزن عند الولادة', value: '3.2 كج',                  id: 'birthWeightVal' },
      { icon: 'fas fa-hospital',       iconClass: 'birth-icon-orange', labelKey: 'birthPlaceLabel', label: 'مكان الولادة',     value: 'مستشفى الملك فهد، الرياض', id: 'birthPlaceVal' },
      { icon: 'fas fa-tint',           iconClass: 'birth-icon-pink',  label: 'فصيلة الدم',                                     value: 'O+' },
      { icon: 'fas fa-male',           iconClass: 'birth-icon-blue',  label: 'اسم الأب',                                       value: 'عبدالله محمد العمري' },
      { icon: 'fas fa-female',         iconClass: 'birth-icon-purple', label: 'اسم الأم',                                      value: 'فاطمة أحمد الزهراني' },
      { icon: 'fas fa-user-md',        iconClass: 'birth-icon-green', label: 'الطبيب',                                         value: 'د. خالد محمد العمر' }
    ],
    photos: [
      { src: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&h=360&fit=crop', wide: true },
      { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=300&fit=crop' },
      { src: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=300&h=300&fit=crop' },
      { src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=300&fit=crop' },
      { src: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=300&h=300&fit=crop' },
      { src: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=300&h=300&fit=crop' },
      { src: 'https://images.unsplash.com/photo-1560781590-9e4d15d12a99?w=300&h=300&fit=crop' }
    ]
  },

  /* ---- Measurements ---- */
  measurements: [
    {
      day: 'الاثنين', date: '2004-3-15', time: '10:00 صباحاً',
      recorded: 'الاثنين 15-3-2004 – 10:30 صباحاً',
      height: 72, weight: 9.5, age: '9 أشهر', stage: 'الطفولة المبكرة',
      heightIcon: 'fa-solid fa-arrow-up', weightIcon: 'fa-solid fa-dumbbell',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=250&fit=crop',
      cartoonHTML: '<img src="https://cdn-icons-png.flaticon.com/128/3468/3468292.png" alt="" class="measurement-cartoon">',
      animation: 'scroll-reveal'
    },
    {
      day: 'الأربعاء', date: '2005-7-15', time: '11:00 صباحاً',
      recorded: 'الأربعاء 15-7-2005 – 11:30 صباحاً',
      height: 88, weight: 12.8, age: 'سنتان', stage: 'الطفولة المبكرة',
      heightIcon: 'fas fa-ruler-vertical', weightIcon: 'fas fa-weight',
      image: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=400&h=250&fit=crop',
      cartoonHTML: '<img src="https://cdn-icons-png.flaticon.com/128/3468/3468081.png" alt="" class="measurement-cartoon">',
      animation: 'scroll-reveal-left'
    },
    {
      day: 'الأحد', date: '2009-9-1', time: '9:00 صباحاً',
      recorded: 'الأحد 1-9-2009 – 9:30 صباحاً',
      height: 115, weight: 21, age: '6 سنوات', stage: 'المرحلة الابتدائية',
      heightIcon: 'fas fa-ruler-vertical', weightIcon: 'fas fa-weight',
      image: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=400&h=250&fit=crop',
      cartoonHTML: '<img src="https://cdn-icons-png.flaticon.com/128/3468/3468377.png" alt="" class="measurement-cartoon">',
      animation: 'scroll-reveal-right'
    }
  ],

  heightSummary: { latestHeight: '115 سم', latestWeight: '21 كج', total: 3 },

  /* ---- Certificates ---- */
  certificates: [
    {
      title: 'شهادة التخرج من الروضة',
      place: 'الروضة الدولية بالرياض',
      details: 'تخرج محمد من مرحلة رياض الأطفال بتفوق وامتياز. أقيم حفل تخرج مميز تضمن عروضاً مسرحية وأناشيد جميلة بحضور جميع أولياء الأمور. لحظات فخر لا تُنسى.',
      day: 'الخميس', date: '2009-6-15', time: '6:00 مساءً',
      badge: 'تخرج', badgeClass: 'cert-badge-grad', badgeIcon: 'fas fa-graduation-cap',
      titleIcon: 'fas fa-graduation-cap', titleIconColor: '#7c4dff',
      age: '6 سنوات', stage: 'رياض الأطفال',
      thumbnail: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=600&h=300&fit=crop',
      photos: [
        'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=500&fit=crop'
      ],
      video: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      title: 'شهادة حفظ القرآن الكريم',
      place: 'حلقات مسجد الراجحي - الرياض',
      details: 'أتمّ محمد حفظ 10 أجزاء من القرآن الكريم بتقدير ممتاز. تم تكريمه من إمام المسجد بحضور والديه. إنجاز عظيم يستحق التوثيق والاحتفاء.',
      day: 'الجمعة', date: '2011-3-20', time: 'بعد صلاة الجمعة',
      badge: 'تكريم', badgeClass: 'cert-badge-honor', badgeIcon: 'fas fa-medal',
      titleIcon: 'fas fa-quran', titleIconColor: '#00897b',
      age: '7 سنوات', stage: 'المرحلة الابتدائية',
      thumbnail: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800&h=500&fit=crop',
      photos: [
        'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1585036156171-384164a8c6c4?w=800&h=500&fit=crop'
      ],
      video: ''
    }
  ],

  /* ---- Events (unified) ---- */
  events: [
    {
      year: '2004', title: 'أول خطوات محمد', type: 'إنجاز',
      badge: 'إنجاز شخصي', badgeClass: 'evt-milestone', badgeIcon: 'fas fa-star',
      stage: 'الطفولة المبكرة', day: 'الاثنين', date: '2004-3-15', time: '3:30 مساءً',
      age: '9 أشهر', eduStage: 'الطفولة المبكرة',
      desc: 'خطا محمد أولى خطواته بمفرده اليوم! كانت لحظة مذهلة ومؤثرة للعائلة بأكملها. بدأ بالمشي متمسكاً بالأثاث ثم تجرأ وخطا 5 خطوات بمفرده نحو والدته.',
      shortDesc: 'خطا محمد أولى خطواته بمفرده اليوم! كانت لحظة مذهلة ومؤثرة للعائلة بأكملها.',
      thumbnail: 'https://images.unsplash.com/photo-1519340333755-56e9c1d3611c?w=600&h=300&fit=crop',
      photos: ['https://images.unsplash.com/photo-1519340333755-56e9c1d3611c?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=500&fit=crop'],
      video: '', showInHome: false, showInEvents: true
    },
    {
      year: '2004', title: 'التطعيمات الأساسية', type: 'طبي',
      badge: 'صحة', badgeClass: 'evt-medical', badgeIcon: 'fas fa-heartbeat',
      stage: 'الطفولة المبكرة', day: 'الأربعاء', date: '2004-10-20', time: '10:00 صباحاً',
      age: 'سنة واحدة', eduStage: 'الطفولة المبكرة',
      desc: 'أكمل محمد جميع التطعيمات الأساسية المقررة لعمر السنة الأولى. الطبيب أكد أن نموه طبيعي وصحته ممتازة. وزنه 10.5 كجم وطوله 76 سم.',
      shortDesc: 'أكمل محمد جميع التطعيمات الأساسية. الطبيب أكد أن نموه طبيعي وصحته ممتازة.',
      thumbnail: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=300&fit=crop',
      photos: ['https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=500&fit=crop'],
      video: '', showInHome: false, showInEvents: true
    },
    {
      year: '2006', title: 'حفل عيد الميلاد الثالث', type: 'احتفال',
      badge: 'اجتماعي', badgeClass: 'evt-social', badgeIcon: 'fas fa-users',
      stage: 'الطفولة المبكرة', day: 'السبت', date: '2006-7-15', time: '5:00 مساءً',
      age: '3 سنوات', eduStage: 'الطفولة المبكرة',
      desc: 'احتفال كبير بعيد ميلاد محمد الثالث مع العائلة والأصدقاء. حضر 25 طفلاً من روضة الأطفال. كعكة جميلة على شكل سيارة. محمد سعيد جداً!',
      shortDesc: 'احتفال كبير مع العائلة والأصدقاء. كعكة جميلة وألعاب ومسابقات وهدايا.',
      thumbnail: 'https://images.unsplash.com/photo-1530023367847-a683933f4172?w=600&h=300&fit=crop',
      photos: ['https://images.unsplash.com/photo-1530023367847-a683933f4172?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&h=500&fit=crop'],
      video: 'https://www.w3schools.com/html/mov_bbb.mp4', showInHome: false, showInEvents: true
    },
    {
      year: '2007', title: 'أول رحلة إلى البحر', type: 'رحلة',
      badge: 'عائلي', badgeClass: 'evt-family', badgeIcon: 'fas fa-home',
      stage: 'الطفولة المبكرة', day: 'الأربعاء', date: '2007-6-20', time: 'طوال اليوم',
      age: '4 سنوات', eduStage: 'الطفولة المبكرة',
      desc: 'رحلة عائلية لا تُنسى إلى شاطئ البحر الأحمر. محمد رأى البحر للمرة الأولى وكان متحمساً جداً. لعب بالرمل، جمع الأصداف، وسبح مع والده. 3 أيام رائعة في جدة.',
      shortDesc: 'رحلة عائلية لا تُنسى إلى البحر الأحمر. لعب بالرمل وسبح مع والده.',
      thumbnail: 'https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=600&h=300&fit=crop',
      photos: ['https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=500&fit=crop'],
      video: '', showInHome: false, showInEvents: true
    },
    {
      year: '2008', title: 'أول يوم في الروضة', type: 'تعليم',
      badge: 'تعليم', badgeClass: 'evt-education', badgeIcon: 'fas fa-school',
      stage: 'رياض الأطفال', day: 'السبت', date: '2007-9-1', time: '7:30 صباحاً',
      age: '4 سنوات', eduStage: 'رياض الأطفال',
      desc: 'أول يوم لمحمد في الروضة الدولية. كان متحمساً ومتوتراً قليلاً لكنه سرعان ما تأقلم مع زملائه الجدد. بداية رائعة لمسيرته التعليمية.',
      shortDesc: 'أول يوم لمحمد في الروضة. بداية رائعة لمسيرته التعليمية مع أصدقاء جدد.',
      thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=300&fit=crop',
      photos: ['https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=500&fit=crop'],
      video: '', showInHome: true, showInEvents: true
    },
    {
      year: '2009', title: 'حفل تخرج الروضة', type: 'تخرج',
      badge: 'إنجاز', badgeClass: 'evt-milestone', badgeIcon: 'fas fa-trophy',
      stage: 'رياض الأطفال', day: 'الاثنين', date: '2009-6-15', time: '6:00 مساءً',
      age: '6 سنوات', eduStage: 'رياض الأطفال',
      desc: 'تخرج محمد من الروضة بتفوق وامتياز. حفل رائع بحضور الأهل والأصدقاء تضمن عروض مسرحية وأناشيد. لحظات فخر واعتزاز.',
      shortDesc: 'تخرج بتفوق وامتياز. حفل رائع بحضور الأهل والأصدقاء.',
      thumbnail: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=600&h=300&fit=crop',
      photos: ['https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&h=500&fit=crop'],
      video: 'https://www.w3schools.com/html/mov_bbb.mp4', showInHome: true, showInEvents: false
    },
    {
      year: '2009', title: 'أول يوم في المدرسة الابتدائية', type: 'تعليم',
      badge: 'بداية جديدة', badgeClass: 'evt-education', badgeIcon: 'fas fa-school',
      stage: 'المرحلة الابتدائية', day: 'الثلاثاء', date: '2009-9-1', time: '6:45 صباحاً',
      age: '6 سنوات', eduStage: 'المرحلة الابتدائية',
      desc: 'أول يوم لمحمد في المرحلة الابتدائية بمدرسة النخبة الأهلية. ارتدى الزي المدرسي بفخر وكان متحمساً للقاء معلمه الجديد وزملائه.',
      shortDesc: 'أول يوم في الابتدائية. ارتدى الزي المدرسي بفخر ولقاء زملاء جدد.',
      thumbnail: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=300&fit=crop',
      photos: ['https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop'],
      video: '', showInHome: true, showInEvents: false
    }
  ],

  eventFilters: [
    { year: 'all', label: 'الكل', icon: 'fas fa-layer-group', active: true },
    { year: '2004', label: '2003 - 2004' },
    { year: '2005', label: '2004 - 2005' },
    { year: '2006', label: '2005 - 2006' },
    { year: '2007', label: '2006 - 2007' },
    { year: '2008', label: '2007 - 2008' },
    { year: '2009', label: '2008 - 2009' }
  ],

  /* ---- Education ---- */
  education: {
    stageTabs: [
      { id: 'early', icon: 'fas fa-baby', label: 'رياض الأطفال', active: true },
      { id: 'primary', icon: 'fas fa-school', label: 'الابتدائية' }
    ],
    stages: {
      early: {
        panelId: 'eduStageEarly',
        headerIcon: 'https://cdn-icons-png.flaticon.com/128/2913/2913133.png',
        name: 'رياض الأطفال',
        school: 'الروضة الدولية بالرياض',
        years: '2007 - 2009',
        yearCards: [
          {
            title: 'روضة – السنة الأولى', age: '4 سنوات', dateRange: '2007 - 2008',
            grade: 'ممتاز', height: '103 سم', weight: '17.8 كج',
            school: 'الروضة الدولية بالرياض',
            photos: ['https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=500&fit=crop'],
            video: '',
            events: [
              { type: 'تكريم', title: 'طفل الشهر', details: 'اختاره المعلمون لأسلوبه الرائع في التعامل مع زملائه وحرصه على المشاركة في الأنشطة الصفية.', date: '2008-3-18', displayDay: 'الثلاثاء', displayDate: '18-3-2008', photos: ['https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop'], video: '', dotColor: '#ff9800', badgeBg: '#fff3e0', badgeColor: '#e65100', shortDesc: 'اختاره المعلمون لأسلوبه الرائع' },
              { type: 'حفلة', title: 'حفل عيد الميلاد الخامس', details: 'احتفل أصدقاؤه بعيد ميلاده في الروضة. فرحة كبيرة وهدايا جميلة من الأصدقاء والمعلمات.', date: '2008-7-15', displayDay: 'الثلاثاء', displayDate: '15-7-2008', photos: ['https://images.unsplash.com/photo-1530023367847-a683933f4172?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=500&fit=crop'], video: '', dotColor: '#7c4dff', badgeBg: '#ede7f6', badgeColor: '#4a148c', shortDesc: 'احتفل أصدقاؤه بعيد ميلاده' }
            ]
          },
          {
            title: 'روضة – السنة الثانية', age: '5 سنوات', dateRange: '2008 - 2009',
            grade: 'ممتاز', height: '110 سم', weight: '19.5 كج',
            school: 'الروضة الدولية بالرياض',
            photos: ['https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=500&fit=crop'],
            video: '',
            events: [
              { type: 'تخرج', title: 'حفل تخرج الروضة', details: 'تخرج محمد من مرحلة رياض الأطفال بتفوق وامتياز. أقيم حفل تخرج مميز تضمن عروضاً مسرحية وأناشيد جميلة بحضور أولياء الأمور.', date: '2009-6-15', displayDay: 'الاثنين', displayDate: '15-6-2009', photos: ['https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&h=500&fit=crop'], video: 'https://www.w3schools.com/html/mov_bbb.mp4', dotColor: '#4caf50', badgeBg: '#e8f5e9', badgeColor: '#1b5e20', shortDesc: 'تخرج بتفوق وامتياز من الروضة' }
            ]
          }
        ]
      },
      primary: {
        panelId: 'eduStagePrimary',
        headerIcon: 'https://cdn-icons-png.flaticon.com/128/2602/2602414.png',
        name: 'الابتدائية',
        school: 'مدرسة النخبة الأهلية - الرياض',
        years: '2009 - 2015',
        yearCards: [
          {
            title: 'أولى ابتدائي', age: '6 سنوات', dateRange: '2009 - 2010',
            grade: 'ممتاز', height: '115 سم', weight: '21 كج',
            school: 'مدرسة النخبة الأهلية - الرياض',
            photos: ['https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop'],
            video: '',
            events: [
              { type: 'تكريم', title: 'الطالب المثالي', details: 'تم تكريم محمد كأفضل طالب في الصف الأول الابتدائي للفصل الدراسي الأول. حصل على شهادة تقدير ودرع التميز.', date: '2010-1-15', displayDay: 'الجمعة', displayDate: '15-1-2010', photos: ['https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&h=500&fit=crop'], video: '', dotColor: '#ff9800', badgeBg: '#fff3e0', badgeColor: '#e65100', shortDesc: 'تكريم كأفضل طالب في الصف' }
            ]
          },
          { title: 'ثاني ابتدائي', age: '7 سنوات', dateRange: '2010 - 2011', placeholder: true },
          { title: 'ثالث ابتدائي', age: '8 سنوات', dateRange: '2011 - 2012', placeholder: true },
          { title: 'رابع ابتدائي', age: '9 سنوات', dateRange: '2012 - 2013', placeholder: true },
          { title: 'خامس ابتدائي', age: '10 سنوات', dateRange: '2013 - 2014', placeholder: true },
          { title: 'سادس ابتدائي', age: '11 سنة', dateRange: '2014 - 2015', placeholder: true }
        ]
      }
    }
  }
};
