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
    heightHeaderIcon: '<i class="fas fa-ruler-vertical cartoon-icon" style="font-size:2.2rem;color:var(--primary)"></i>',
    heightSubtitle: 'تتبع نموك بمرور الوقت',
    summaryHeightIcon: '<i class="fas fa-arrows-alt-v summary-cartoon" style="font-size:2rem;color:#ec407a"></i>',
    summaryWeightIcon: '<i class="fas fa-weight summary-cartoon" style="font-size:2rem;color:#42a5f5"></i>',
    summaryChartIcon: '<i class="fas fa-chart-line summary-cartoon" style="font-size:2rem;color:#66bb6a"></i>',
    certsHeaderIcon: '<i class="fas fa-award cartoon-icon" style="font-size:2.2rem;color:var(--primary)"></i>',
    certsSubtitle: 'وثّق إنجازاتك وشهاداتك',
    eduHeaderIcon: '<i class="fas fa-graduation-cap cartoon-icon" style="font-size:2.2rem;color:var(--primary)"></i>',
    eventsHeaderIcon: '<i class="fas fa-calendar-check cartoon-icon" style="font-size:2.2rem;color:var(--primary)"></i>'
  },

  /* ---- Profile ---- */
  profile: {
    name: 'محمد عبدالله',
    intro: 'انا اسمي',
    ageText: 'و عمري 18 سنة',
    badges: ['مرحلة المراهقة'],
    bio: 'شاب طموح يسعى لاكتشاف شغفه وبناء مستقبله',
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
    { name: 'neon',     gradient: 'linear-gradient(135deg, #A855F7 0%, #06B6D4 50%, #F472B6 100%)', title: 'Neon', active: true },
    { name: 'electric', gradient: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 50%, #22C55E 100%)', title: 'Electric' },
    { name: 'creative', gradient: 'linear-gradient(135deg, #F97316 0%, #A855F7 50%, #EC4899 100%)', title: 'Creative' },
    { name: 'cosmic',   gradient: 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 50%, #22D3EE 100%)', title: 'Cosmic' }
  ],

  /* ---- Sidebar Quick Info ---- */
  sidebarInfo: [
    { icon: 'fas fa-calendar-day', iconClass: '',               value: '2003-7-15',                          labelKey: 'labelBirthDate',     label: 'تاريخ الميلاد' },
    { icon: 'fas fa-hospital',     iconClass: 'info-icon-pink', value: 'مستشفى الملك فهد، الرياض',           labelKey: 'labelBirthPlace',    label: 'مكان الولادة', valueKey: 'valBirthPlace' },
    { icon: 'fas fa-weight',       iconClass: 'info-icon-purple', value: '3.2 كج',                           labelKey: 'labelWeight',        label: 'الوزن عند الولادة', valueKey: 'valWeight' },
    { icon: 'fas fa-ruler-vertical', iconClass: 'info-icon-blue', value: '175 سم',                           labelKey: 'labelCurrentHeight', label: 'الطول الحالي', valueKey: 'valHeight' },
    { icon: 'fas fa-university',   iconClass: 'info-icon-green', value: 'ثانوية الملك فيصل',                 labelKey: 'labelEducation',     label: 'التعليم', valueKey: 'valEducation' }
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
      day: 'الأحد', date: '2016-9-4', time: '8:30 صباحاً',
      recorded: 'الأحد 4-9-2016 – 9:00 صباحاً',
      height: 158, weight: 48, age: '13 سنة', stage: 'المرحلة المتوسطة',
      heightIcon: 'fas fa-ruler-vertical', weightIcon: 'fas fa-weight',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=250&fit=crop',
      cartoonHTML: '<i class="fas fa-arrows-alt-v measurement-cartoon" style="font-size:1.8rem;color:var(--primary)"></i>',
      animation: 'scroll-reveal'
    },
    {
      day: 'الاثنين', date: '2018-9-3', time: '9:00 صباحاً',
      recorded: 'الاثنين 3-9-2018 – 9:30 صباحاً',
      height: 168, weight: 58, age: '15 سنة', stage: 'المرحلة الثانوية',
      heightIcon: 'fas fa-ruler-vertical', weightIcon: 'fas fa-weight',
      image: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=400&h=250&fit=crop',
      cartoonHTML: '<i class="fas fa-weight measurement-cartoon" style="font-size:1.8rem;color:var(--primary)"></i>',
      animation: 'scroll-reveal-left'
    },
    {
      day: 'الخميس', date: '2021-6-17', time: '10:00 صباحاً',
      recorded: 'الخميس 17-6-2021 – 10:30 صباحاً',
      height: 175, weight: 68, age: '18 سنة', stage: 'المرحلة الثانوية',
      heightIcon: 'fas fa-ruler-vertical', weightIcon: 'fas fa-weight',
      image: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=400&h=250&fit=crop',
      cartoonHTML: '<i class="fas fa-ruler-combined measurement-cartoon" style="font-size:1.8rem;color:var(--primary)"></i>',
      animation: 'scroll-reveal-right'
    }
  ],

  heightSummary: { latestHeight: '175 سم', latestWeight: '68 كج', total: 3 },

  /* ---- Certificates ---- */
  certificates: [
    {
      title: 'شهادة التفوق - المرحلة المتوسطة',
      place: 'متوسطة الأمير سلطان - الرياض',
      details: 'حصل محمد على المركز الأول على دفعته في المرحلة المتوسطة بمعدل 98%. تم تكريمه في حفل التفوق السنوي بحضور مدير التعليم ووالديه.',
      day: 'الخميس', date: '20-6-2018', time: '11:00 صباحاً',
      badge: 'تفوق', badgeClass: 'cert-badge-honor', badgeIcon: 'fas fa-medal',
      titleIcon: 'fas fa-award', titleIconColor: '#7c4dff',
      age: '15 سنة', stage: 'المرحلة المتوسطة',
      thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c8f1?w=600&h=300&fit=crop',
      photos: [
        'https://images.unsplash.com/photo-1523050854058-8df90110c8f1?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&h=500&fit=crop'
      ],
      video: ''
    },
    {
      title: 'المركز الأول - مسابقة الروبوتات',
      place: 'معرض العلوم والتقنية - الرياض',
      details: 'فاز فريق محمد بالمركز الأول في مسابقة الروبوتات على مستوى منطقة الرياض. صمموا روبوتاً قادراً على حل متاهات معقدة باستخدام الذكاء الاصطناعي.',
      day: 'السبت', date: '18-4-2020', time: '2:00 مساءً',
      badge: 'فائز', badgeClass: 'cert-badge-grad', badgeIcon: 'fas fa-trophy',
      titleIcon: 'fas fa-robot', titleIconColor: '#1976d2',
      age: '16 سنة', stage: 'المرحلة الثانوية',
      thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=300&fit=crop',
      photos: [
        'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop'
      ],
      video: 'https://www.w3schools.com/html/mov_bbb.mp4'
    }
  ],

  /* ---- Events (unified) ---- */
  events: [
    {
      year: '2016', title: 'الفوز بمسابقة الرياضيات', type: 'إنجاز',
      badge: 'إنجاز', badgeClass: 'evt-milestone', badgeIcon: 'fas fa-star',
      stage: 'المرحلة المتوسطة', day: 'الثلاثاء', date: '2016-11-15', time: '1:00 مساءً',
      age: '13 سنة', eduStage: 'المرحلة المتوسطة',
      desc: 'فاز محمد بالمركز الأول في مسابقة الرياضيات على مستوى منطقة الرياض. تنافس مع أكثر من 200 طالب من مختلف المدارس وأثبت تفوقه في حل المسائل الرياضية المعقدة.',
      shortDesc: 'فاز محمد بالمركز الأول في مسابقة الرياضيات على مستوى منطقة الرياض.',
      thumbnail: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600&h=300&fit=crop',
      photos: ['https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop'],
      video: '', showInHome: false, showInEvents: true
    },
    {
      year: '2017', title: 'الانضمام لفريق كرة القدم', type: 'رياضة',
      badge: 'رياضة', badgeClass: 'evt-social', badgeIcon: 'fas fa-futbol',
      stage: 'المرحلة المتوسطة', day: 'الأحد', date: '2017-2-5', time: '4:00 مساءً',
      age: '13 سنة', eduStage: 'المرحلة المتوسطة',
      desc: 'انضم محمد لفريق كرة القدم في المدرسة بعد اجتيازه اختبارات القبول. أظهر مهارة عالية في اللعب وأصبح من اللاعبين الأساسيين في الفريق خلال الموسم الأول.',
      shortDesc: 'انضم محمد لفريق كرة القدم المدرسي وأصبح من اللاعبين الأساسيين.',
      thumbnail: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=300&fit=crop',
      photos: ['https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&h=500&fit=crop'],
      video: '', showInHome: false, showInEvents: true
    },
    {
      year: '2018', title: 'حفل ختم القرآن الكريم', type: 'إنجاز',
      badge: 'إنجاز', badgeClass: 'evt-milestone', badgeIcon: 'fas fa-star',
      stage: 'المرحلة المتوسطة', day: 'السبت', date: '2018-3-10', time: 'بعد صلاة المغرب',
      age: '14 سنة', eduStage: 'المرحلة المتوسطة',
      desc: 'أتمّ محمد حفظ القرآن الكريم كاملاً في حلقات مسجد الراجحي بالرياض. أقيم حفل تكريم بحضور والديه وأسرته ومشايخ الحلقة. إنجاز عظيم يفخر به.',
      shortDesc: 'أتمّ محمد حفظ القرآن الكريم كاملاً. إنجاز عظيم يفخر به.',
      thumbnail: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=600&h=300&fit=crop',
      photos: ['https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1585036156171-384164a8c6c4?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=800&h=500&fit=crop'],
      video: '', showInHome: false, showInEvents: true
    },
    {
      year: '2018', title: 'المعسكر الصيفي', type: 'اجتماعي',
      badge: 'اجتماعي', badgeClass: 'evt-social', badgeIcon: 'fas fa-users',
      stage: 'المرحلة المتوسطة', day: 'الثلاثاء', date: '2018-7-10', time: 'صباحاً',
      age: '15 سنة', eduStage: 'المرحلة المتوسطة',
      desc: 'شارك محمد في المعسكر الصيفي في مدينة أبها لمدة أسبوع. استمتع بالأنشطة الخارجية والمغامرات مع زملائه، وتعلم مهارات القيادة والعمل الجماعي.',
      shortDesc: 'شارك محمد في المعسكر الصيفي في أبها مع أنشطة ومغامرات ممتعة.',
      thumbnail: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=300&fit=crop',
      photos: ['https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=800&h=500&fit=crop'],
      video: '', showInHome: false, showInEvents: true
    },
    {
      year: '2019', title: 'أول يوم في الثانوية', type: 'تعليم',
      badge: 'تعليم', badgeClass: 'evt-education', badgeIcon: 'fas fa-school',
      stage: 'المرحلة الثانوية', day: 'الأحد', date: '2018-9-2', time: '6:45 صباحاً',
      age: '15 سنة', eduStage: 'المرحلة الثانوية',
      desc: 'أول يوم لمحمد في ثانوية الملك فيصل بالرياض. مرحلة جديدة مليئة بالتحديات والطموحات. استقبله المعلمون والطلاب بحفاوة وبدأ يتعرف على بيئته الدراسية الجديدة.',
      shortDesc: 'أول يوم لمحمد في الثانوية. بداية مرحلة جديدة مليئة بالتحديات والطموحات.',
      thumbnail: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=300&fit=crop',
      photos: ['https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop'],
      video: '', showInHome: true, showInEvents: true
    },
    {
      year: '2020', title: 'مسابقة الروبوتات الوطنية', type: 'مسابقة',
      badge: 'مسابقة', badgeClass: 'evt-milestone', badgeIcon: 'fas fa-trophy',
      stage: 'المرحلة الثانوية', day: 'السبت', date: '2020-4-18', time: '9:00 صباحاً',
      age: '16 سنة', eduStage: 'المرحلة الثانوية',
      desc: 'فاز فريق محمد بالمركز الأول في مسابقة الروبوتات على مستوى منطقة الرياض. صمموا روبوتاً ذكياً قادراً على حل متاهات معقدة باستخدام تقنيات الذكاء الاصطناعي.',
      shortDesc: 'فاز فريق محمد بالمركز الأول في مسابقة الروبوتات على مستوى الرياض.',
      thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=300&fit=crop',
      photos: ['https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=500&fit=crop'],
      video: '', showInHome: true, showInEvents: false
    },
    {
      year: '2021', title: 'حفل التخرج من الثانوية', type: 'تخرج',
      badge: 'تخرج', badgeClass: 'evt-milestone', badgeIcon: 'fas fa-graduation-cap',
      stage: 'المرحلة الثانوية', day: 'الأحد', date: '2021-6-20', time: '7:00 مساءً',
      age: '18 سنة', eduStage: 'المرحلة الثانوية',
      desc: 'تخرج محمد من ثانوية الملك فيصل بتفوق وامتياز بمعدل 97%. أقيم حفل تخرج كبير بحضور أولياء الأمور ومسؤولي التعليم. لحظة فخر واعتزاز للعائلة.',
      shortDesc: 'تخرج محمد من الثانوية بتفوق وامتياز بمعدل 97%. لحظة فخر واعتزاز.',
      thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c8f1?w=600&h=300&fit=crop',
      photos: ['https://images.unsplash.com/photo-1523050854058-8df90110c8f1?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&h=500&fit=crop'],
      video: 'https://www.w3schools.com/html/mov_bbb.mp4', showInHome: true, showInEvents: false
    }
  ],

  eventFilters: [
    { year: 'all', label: 'الكل', icon: 'fas fa-layer-group', active: true },
    { year: '2016', label: '2015 - 2016' },
    { year: '2017', label: '2016 - 2017' },
    { year: '2018', label: '2017 - 2018' },
    { year: '2019', label: '2018 - 2019' },
    { year: '2020', label: '2019 - 2020' },
    { year: '2021', label: '2020 - 2021' }
  ],

  /* ---- Education ---- */
  education: {
    stageTabs: [
      { id: 'early', icon: 'fas fa-school', label: 'المرحلة المتوسطة', active: true },
      { id: 'primary', icon: 'fas fa-graduation-cap', label: 'المرحلة الثانوية' }
    ],
    stages: {
      early: {
        panelId: 'eduStageEarly',
        headerIconHTML: '<i class="fas fa-school edu-stage-icon" style="font-size:2rem;color:var(--primary)"></i>',
        name: 'المرحلة المتوسطة',
        school: 'متوسطة الأمير سلطان - الرياض',
        years: '2015 - 2018',
        yearCards: [
          {
            title: 'أولى متوسط', age: '12 سنة', dateRange: '2015 - 2016',
            grade: 'ممتاز', height: '152 سم', weight: '44 كج',
            school: 'متوسطة الأمير سلطان - الرياض',
            photos: ['https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop'],
            video: '',
            events: [
              { type: 'تكريم', title: 'تكريم الطالب المتفوق', details: 'تم تكريم محمد كأحد أفضل الطلاب في الصف الأول المتوسط. حصل على شهادة تقدير وجائزة التميز الدراسي.', date: '2016-1-20', displayDay: 'الأربعاء', displayDate: '20-1-2016', photos: ['https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&h=500&fit=crop'], video: '', dotColor: '#ff9800', badgeBg: '#fff3e0', badgeColor: '#e65100', shortDesc: 'تكريم كأحد أفضل الطلاب المتفوقين' }
            ]
          },
          {
            title: 'ثاني متوسط', age: '13 سنة', dateRange: '2016 - 2017',
            grade: 'ممتاز', height: '158 سم', weight: '48 كج',
            school: 'متوسطة الأمير سلطان - الرياض',
            photos: ['https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=500&fit=crop'],
            video: '',
            events: [
              { type: 'إنجاز', title: 'الفوز بمسابقة الرياضيات', details: 'فاز محمد بالمركز الأول في مسابقة الرياضيات على مستوى منطقة الرياض. تنافس مع أكثر من 200 طالب.', date: '2016-11-15', displayDay: 'الثلاثاء', displayDate: '15-11-2016', photos: ['https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop'], video: '', dotColor: '#7c4dff', badgeBg: '#ede7f6', badgeColor: '#4a148c', shortDesc: 'المركز الأول في مسابقة الرياضيات' }
            ]
          },
          {
            title: 'ثالث متوسط', age: '14 سنة', dateRange: '2017 - 2018',
            grade: 'ممتاز', height: '163 سم', weight: '53 كج',
            school: 'متوسطة الأمير سلطان - الرياض',
            photos: ['https://images.unsplash.com/photo-1523050854058-8df90110c8f1?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&h=500&fit=crop'],
            video: '',
            events: [
              { type: 'تخرج', title: 'حفل التخرج', details: 'تخرج محمد من المرحلة المتوسطة بتفوق وامتياز بمعدل 98%. أقيم حفل تكريم بحضور مدير التعليم ووالديه.', date: '2018-6-20', displayDay: 'الخميس', displayDate: '20-6-2018', photos: ['https://images.unsplash.com/photo-1523050854058-8df90110c8f1?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=800&h=500&fit=crop'], video: '', dotColor: '#4caf50', badgeBg: '#e8f5e9', badgeColor: '#1b5e20', shortDesc: 'تخرج بتفوق وامتياز بمعدل 98%' }
            ]
          }
        ]
      },
      primary: {
        panelId: 'eduStagePrimary',
        headerIconHTML: '<i class="fas fa-graduation-cap edu-stage-icon" style="font-size:2rem;color:var(--primary)"></i>',
        name: 'المرحلة الثانوية',
        school: 'ثانوية الملك فيصل - الرياض',
        years: '2018 - 2021',
        yearCards: [
          {
            title: 'أولى ثانوي', age: '15 سنة', dateRange: '2018 - 2019',
            grade: 'ممتاز', height: '168 سم', weight: '58 كج',
            school: 'ثانوية الملك فيصل - الرياض',
            photos: ['https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop'],
            video: '',
            events: [
              { type: 'مسابقة', title: 'مسابقة العلوم', details: 'شارك محمد في مسابقة العلوم على مستوى المدرسة وحقق المركز الثاني بمشروع عن الطاقة المتجددة.', date: '2019-3-10', displayDay: 'الأحد', displayDate: '10-3-2019', photos: ['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=500&fit=crop'], video: '', dotColor: '#1976d2', badgeBg: '#e3f2fd', badgeColor: '#0d47a1', shortDesc: 'المركز الثاني في مسابقة العلوم' }
            ]
          },
          {
            title: 'ثاني ثانوي', age: '16 سنة', dateRange: '2019 - 2020',
            grade: 'ممتاز', height: '172 سم', weight: '63 كج',
            school: 'ثانوية الملك فيصل - الرياض',
            photos: ['https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=500&fit=crop'],
            video: '',
            events: [
              { type: 'مسابقة', title: 'مسابقة الروبوتات', details: 'فاز فريق محمد بالمركز الأول في مسابقة الروبوتات على مستوى منطقة الرياض. صمموا روبوتاً ذكياً.', date: '2020-4-18', displayDay: 'السبت', displayDate: '18-4-2020', photos: ['https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop'], video: 'https://www.w3schools.com/html/mov_bbb.mp4', dotColor: '#7c4dff', badgeBg: '#ede7f6', badgeColor: '#4a148c', shortDesc: 'المركز الأول في مسابقة الروبوتات' }
            ]
          },
          {
            title: 'ثالث ثانوي', age: '17 سنة', dateRange: '2020 - 2021',
            grade: 'ممتاز', height: '175 سم', weight: '68 كج',
            school: 'ثانوية الملك فيصل - الرياض',
            photos: ['https://images.unsplash.com/photo-1523050854058-8df90110c8f1?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&h=500&fit=crop'],
            video: 'https://www.w3schools.com/html/mov_bbb.mp4',
            events: [
              { type: 'تخرج', title: 'حفل التخرج', details: 'تخرج محمد من ثانوية الملك فيصل بتفوق وامتياز بمعدل 97%. أقيم حفل تخرج كبير بحضور أولياء الأمور.', date: '2021-6-20', displayDay: 'الأحد', displayDate: '20-6-2021', photos: ['https://images.unsplash.com/photo-1523050854058-8df90110c8f1?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=800&h=500&fit=crop'], video: 'https://www.w3schools.com/html/mov_bbb.mp4', dotColor: '#4caf50', badgeBg: '#e8f5e9', badgeColor: '#1b5e20', shortDesc: 'تخرج بتفوق وامتياز بمعدل 97%' }
            ]
          }
        ]
      }
    }
  }
};
