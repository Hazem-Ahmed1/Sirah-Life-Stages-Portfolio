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
    heightHeaderIcon: '<i class="fas fa-ruler-vertical" style="font-size:1.5rem;color:#D4AF37"></i>',
    heightSubtitle: 'تتبع النمو بمرور الوقت',
    summaryHeightIcon: '<i class="fas fa-arrows-alt-v" style="font-size:1.8rem;color:#D4AF37"></i>',
    summaryWeightIcon: '<i class="fas fa-weight" style="font-size:1.8rem;color:#D4AF37"></i>',
    summaryChartIcon: '<i class="fas fa-chart-line" style="font-size:1.8rem;color:#D4AF37"></i>',
    certsHeaderIcon: '<i class="fas fa-award" style="font-size:1.5rem;color:#D4AF37"></i>',
    certsSubtitle: 'وثّق إنجازاتك وشهاداتك',
    eduHeaderIcon: '<i class="fas fa-graduation-cap" style="font-size:1.5rem;color:#D4AF37"></i>',
    eventsHeaderIcon: '<i class="fas fa-calendar-check"></i>'
  },

  /* ---- Profile ---- */
  profile: {
    name: 'محمد عبدالله',
    intro: 'انا اسمي',
    ageText: 'و عمري 23 سنة',
    badges: ['مرحلة البلوغ'],
    bio: 'النضج والحكمة في رحلة الحياة',
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
    { id: 'tab-birth', icon: 'fas fa-heart', labelKey: 'tabBirth', label: 'الولادة' },
    { id: 'tab-height', icon: 'fas fa-ruler-vertical', labelKey: 'tabHeight', label: 'الطول' },
    { id: 'tab-certificates', icon: 'fas fa-certificate', labelKey: 'tabCertificates', label: 'الشهادات' },
    { id: 'tab-education', icon: 'fas fa-graduation-cap', labelKey: 'tabEducation', label: 'التعليم' },
    { id: 'tab-info', icon: 'fas fa-calendar-check', labelKey: 'tabInfo', label: 'الأحداث' }
  ],

  /* ---- Theme Dots ---- */
  themes: [
    { name: 'royalGold',      gradient: 'linear-gradient(135deg, #D4AF37 0%, #111827 100%)', title: 'Royal Gold', active: true },
    { name: 'platinumSilver', gradient: 'linear-gradient(135deg, #C0C0C0 0%, #0F172A 100%)', title: 'Platinum Silver' },
    { name: 'roseGold',       gradient: 'linear-gradient(135deg, #B76E79 0%, #1A0A0F 100%)', title: 'Rose Gold' },
    { name: 'indigoNight',    gradient: 'linear-gradient(135deg, #6366F1 0%, #020617 100%)', title: 'Indigo Night' }
  ],

  /* ---- Sidebar Quick Info ---- */
  sidebarInfo: [
    { icon: 'fas fa-calendar-day', iconClass: '',               value: '2003-7-15',                              labelKey: 'labelBirthDate',    label: 'تاريخ الميلاد' },
    { icon: 'fas fa-hospital',     iconClass: 'info-icon-pink', value: 'مستشفى الملك فهد، الرياض',               labelKey: 'labelBirthPlace',   label: 'مكان الولادة', valueKey: 'valBirthPlace' },
    { icon: 'fas fa-weight',       iconClass: 'info-icon-purple', value: '3.2 كج',                               labelKey: 'labelWeight',       label: 'الوزن عند الولادة', valueKey: 'valWeight' },
    { icon: 'fas fa-ruler-vertical', iconClass: 'info-icon-blue', value: '178 سم',                               labelKey: 'labelCurrentHeight', label: 'الطول الحالي', valueKey: 'valHeight' },
    { icon: 'fas fa-university',   iconClass: 'info-icon-green', value: 'جامعة الملك سعود - هندسة البرمجيات',    labelKey: 'labelEducation',    label: 'التعليم', valueKey: 'valEducation' }
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
      day: 'الثلاثاء', date: '2021-10-5', time: '10:00 صباحاً',
      recorded: 'الثلاثاء 5-10-2021 – 10:30 صباحاً',
      height: 176, weight: 70, age: '18 سنة', stage: 'المرحلة الجامعية',
      heightIcon: 'fa-solid fa-arrow-up', weightIcon: 'fa-solid fa-dumbbell',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=250&fit=crop',
      cartoonHTML: '<i class="fas fa-arrows-alt-v" style="font-size:1.5rem;color:#D4AF37;margin-left:8px"></i>',
      animation: 'scroll-reveal'
    },
    {
      day: 'الخميس', date: '2023-10-12', time: '11:00 صباحاً',
      recorded: 'الخميس 12-10-2023 – 11:30 صباحاً',
      height: 177, weight: 73, age: '20 سنة', stage: 'المرحلة الجامعية',
      heightIcon: 'fas fa-ruler-vertical', weightIcon: 'fas fa-weight',
      image: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=400&h=250&fit=crop',
      cartoonHTML: '<i class="fas fa-weight" style="font-size:1.5rem;color:#D4AF37;margin-left:8px"></i>',
      animation: 'scroll-reveal-left'
    },
    {
      day: 'الأحد', date: '2026-1-15', time: '9:00 صباحاً',
      recorded: 'الأحد 15-1-2026 – 9:30 صباحاً',
      height: 178, weight: 75, age: '22 سنة', stage: 'العمل',
      heightIcon: 'fas fa-ruler-vertical', weightIcon: 'fas fa-weight',
      image: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=400&h=250&fit=crop',
      cartoonHTML: '<i class="fas fa-ruler-vertical" style="font-size:1.5rem;color:#D4AF37;margin-left:8px"></i>',
      animation: 'scroll-reveal-right'
    }
  ],

  heightSummary: { latestHeight: '178 سم', latestWeight: '75 كج', total: 3 },

  /* ---- Certificates ---- */
  certificates: [
    {
      title: 'بكالوريوس هندسة البرمجيات',
      place: 'جامعة الملك سعود - الرياض',
      details: 'تخرج محمد من كلية علوم الحاسب والمعلومات بتقدير امتياز مع مرتبة الشرف الأولى. مشروع تخرجه كان نظام ذكاء اصطناعي لتحليل البيانات الطبية حصل على تقدير ممتاز.',
      day: 'الأربعاء', date: '2025-6-18', time: '7:00 مساءً',
      badge: 'تخرج', badgeClass: 'cert-badge-grad', badgeIcon: 'fas fa-graduation-cap',
      titleIcon: 'fas fa-graduation-cap', titleIconColor: '#7c4dff',
      age: '22 سنة', stage: 'المرحلة الجامعية',
      thumbnail: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=600&h=300&fit=crop',
      photos: [
        'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=800&h=500&fit=crop'
      ],
      video: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      title: 'شهادة AWS Cloud Practitioner',
      place: 'أمازون ويب سيرفيسز - عن بُعد',
      details: 'حصل محمد على شهادة AWS Cloud Practitioner كأول شهادة مهنية في مسيرته. اجتاز الاختبار بنسبة 92% بعد شهرين من الدراسة المكثفة.',
      day: 'الخميس', date: '2025-11-20', time: '3:00 مساءً',
      badge: 'شهادة مهنية', badgeClass: 'cert-badge-honor', badgeIcon: 'fas fa-certificate',
      titleIcon: 'fas fa-cloud', titleIconColor: '#ff9800',
      age: '22 سنة', stage: 'العمل',
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop',
      photos: [
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop',
        'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=500&fit=crop'
      ],
      video: ''
    }
  ],

  /* ---- Events (unified) ---- */
  events: [
    {
      year: '2021', title: 'أول يوم في الجامعة', type: 'تعليم',
      badge: 'تعليم', badgeClass: 'evt-education', badgeIcon: 'fas fa-school',
      stage: 'المرحلة الجامعية', day: 'الأحد', date: '2021-9-5', time: '8:00 صباحاً',
      age: '18 سنة', eduStage: 'المرحلة الجامعية',
      desc: 'أول يوم لمحمد في جامعة الملك سعود بكلية علوم الحاسب والمعلومات، قسم هندسة البرمجيات. كان متحمساً لبدء مرحلة جديدة من حياته الأكاديمية. تعرّف على زملائه في القسم وحضر المحاضرة التعريفية الأولى مع عميد الكلية. شعور بالفخر والمسؤولية مع بداية رحلة جامعية واعدة.',
      shortDesc: 'أول يوم في جامعة الملك سعود بكلية علوم الحاسب. بداية مرحلة أكاديمية جديدة.',
      thumbnail: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=300&fit=crop',
      photos: ['https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop'],
      video: '', showInHome: false, showInEvents: true
    },
    {
      year: '2022', title: 'قائمة العميد للتفوق', type: 'إنجاز',
      badge: 'إنجاز شخصي', badgeClass: 'evt-milestone', badgeIcon: 'fas fa-star',
      stage: 'المرحلة الجامعية', day: 'الخميس', date: '2022-12-15', time: '11:00 صباحاً',
      age: '19 سنة', eduStage: 'المرحلة الجامعية',
      desc: 'تم إدراج اسم محمد في قائمة العميد للتفوق الدراسي بعد حصوله على معدل فصلي 4.85 من 5.00 في الفصل الدراسي الأول من السنة الثانية. تكريم رسمي من عميد كلية علوم الحاسب بحضور أعضاء هيئة التدريس وأولياء الأمور. إنجاز يعكس اجتهاده وتميزه الأكاديمي.',
      shortDesc: 'إدراج اسم محمد في قائمة العميد بمعدل 4.85 من 5.00. تكريم رسمي من عميد الكلية.',
      thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=300&fit=crop',
      photos: ['https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop'],
      video: '', showInHome: false, showInEvents: true
    },
    {
      year: '2023', title: 'تدريب صيفي في أرامكو', type: 'مهني',
      badge: 'مهني', badgeClass: 'evt-family', badgeIcon: 'fas fa-briefcase',
      stage: 'المرحلة الجامعية', day: 'الخميس', date: '2023-6-15', time: '8:00 صباحاً',
      age: '20 سنة', eduStage: 'المرحلة الجامعية',
      desc: 'التحق محمد ببرنامج التدريب الصيفي في شركة أرامكو السعودية بقسم تقنية المعلومات. عمل على مشروع تطوير نظام داخلي لإدارة البيانات باستخدام تقنيات حديثة. اكتسب خبرة عملية قيّمة في بيئة عمل احترافية وتعلّم العمل ضمن فريق متعدد التخصصات لمدة 8 أسابيع.',
      shortDesc: 'تدريب صيفي في أرامكو بقسم تقنية المعلومات. خبرة عملية في بيئة احترافية.',
      thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=300&fit=crop',
      photos: ['https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=500&fit=crop'],
      video: '', showInHome: false, showInEvents: true
    },
    {
      year: '2024', title: 'العمل التطوعي في جمعية إنسان', type: 'اجتماعي',
      badge: 'اجتماعي', badgeClass: 'evt-social', badgeIcon: 'fas fa-users',
      stage: 'المرحلة الجامعية', day: 'الأحد', date: '2024-3-10', time: '9:00 صباحاً',
      age: '20 سنة', eduStage: 'المرحلة الجامعية',
      desc: 'شارك محمد في برنامج العمل التطوعي مع جمعية إنسان لرعاية الأيتام. قدّم ورش عمل تعليمية في البرمجة للأطفال وساهم في تنظيم فعاليات ترفيهية. تجربة إنسانية أثرت في شخصيته وعززت حسّ المسؤولية الاجتماعية لديه. أكمل أكثر من 120 ساعة تطوعية خلال الفصل الدراسي.',
      shortDesc: 'عمل تطوعي مع جمعية إنسان. ورش برمجة للأطفال وأكثر من 120 ساعة تطوعية.',
      thumbnail: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=300&fit=crop',
      photos: ['https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=500&fit=crop'],
      video: '', showInHome: false, showInEvents: true
    },
    {
      year: '2025', title: 'عرض مشروع التخرج', type: 'تعليم',
      badge: 'تعليم', badgeClass: 'evt-education', badgeIcon: 'fas fa-school',
      stage: 'المرحلة الجامعية', day: 'الخميس', date: '2025-5-8', time: '10:00 صباحاً',
      age: '21 سنة', eduStage: 'المرحلة الجامعية',
      desc: 'قدّم محمد مشروع تخرجه أمام لجنة التحكيم بكلية علوم الحاسب. المشروع عبارة عن نظام ذكاء اصطناعي متقدم لتحليل البيانات الطبية واستخلاص التشخيصات باستخدام تقنيات التعلم العميق. حصل المشروع على تقدير ممتاز وإشادة خاصة من المشرف الأكاديمي ورئيس القسم. تم ترشيح المشروع للمشاركة في معرض الابتكار الوطني.',
      shortDesc: 'عرض مشروع التخرج في الذكاء الاصطناعي. تقدير ممتاز وترشيح لمعرض الابتكار.',
      thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=300&fit=crop',
      photos: ['https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1535957998253-26ae1ef29506?w=800&h=500&fit=crop'],
      video: '', showInHome: true, showInEvents: true
    },
    {
      year: '2025', title: 'حفل التخرج الجامعي', type: 'تخرج',
      badge: 'إنجاز', badgeClass: 'evt-milestone', badgeIcon: 'fas fa-trophy',
      stage: 'المرحلة الجامعية', day: 'الأربعاء', date: '2025-6-18', time: '7:00 مساءً',
      age: '22 سنة', eduStage: 'المرحلة الجامعية',
      desc: 'تخرج محمد من جامعة الملك سعود بدرجة البكالوريوس في هندسة البرمجيات بتقدير امتياز مع مرتبة الشرف الأولى. حفل تخرج مهيب بحضور العائلة والأصدقاء ورئيس الجامعة. لحظة فخر واعتزاز تُتوّج أربع سنوات من الاجتهاد والتفوق. محمد كان من بين أفضل عشرة خريجين على مستوى الكلية.',
      shortDesc: 'تخرج بامتياز مع مرتبة الشرف الأولى من هندسة البرمجيات. من أفضل عشرة خريجين.',
      thumbnail: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=600&h=300&fit=crop',
      photos: ['https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=500&fit=crop'],
      video: 'https://www.w3schools.com/html/mov_bbb.mp4', showInHome: true, showInEvents: false
    },
    {
      year: '2025', title: 'أول يوم عمل', type: 'مهني',
      badge: 'بداية جديدة', badgeClass: 'evt-education', badgeIcon: 'fas fa-briefcase',
      stage: 'العمل', day: 'الاثنين', date: '2025-9-1', time: '8:30 صباحاً',
      age: '22 سنة', eduStage: 'العمل',
      desc: 'أول يوم لمحمد كمهندس برمجيات في شركة التقنية المتقدمة بالرياض. استقبله فريق العمل بحفاوة وتم تعريفه ببيئة العمل والمشاريع الحالية. بداية مسيرة مهنية واعدة في مجال تطوير البرمجيات والحلول التقنية المتقدمة. شعور بالحماس والفخر لبدء أول وظيفة رسمية بعد التخرج.',
      shortDesc: 'أول يوم كمهندس برمجيات في شركة التقنية المتقدمة. بداية مسيرة مهنية واعدة.',
      thumbnail: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&h=300&fit=crop',
      photos: ['https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop'],
      video: '', showInHome: true, showInEvents: false
    }
  ],

  eventFilters: [
    { year: 'all', label: 'الكل', icon: 'fas fa-layer-group', active: true },
    { year: '2021', label: '2021' },
    { year: '2022', label: '2022' },
    { year: '2023', label: '2023' },
    { year: '2024', label: '2024' },
    { year: '2025', label: '2025' },
    { year: '2026', label: '2026' }
  ],

  /* ---- Education ---- */
  education: {
    stageTabs: [
      { id: 'early', icon: 'fas fa-university', label: 'الجامعة', active: true },
      { id: 'primary', icon: 'fas fa-briefcase', label: 'العمل' }
    ],
    stages: {
      early: {
        panelId: 'eduStageEarly',
        headerIcon: 'https://cdn-icons-png.flaticon.com/128/2913/2913133.png',
        name: 'المرحلة الجامعية',
        school: 'جامعة الملك سعود - كلية علوم الحاسب',
        years: '2021 - 2025',
        yearCards: [
          {
            title: 'السنة الأولى - تحضيري', age: '18 سنة', dateRange: '2021 - 2022',
            grade: 'ممتاز', height: '176 سم', weight: '70 كج',
            school: 'جامعة الملك سعود - كلية علوم الحاسب',
            photos: ['https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop'],
            video: '',
            events: [
              { type: 'تكريم', title: 'تكريم الطالب المتفوق', details: 'تم تكريم محمد كطالب متفوق في السنة التحضيرية بعد حصوله على معدل فوق 4.75 من 5.00. حصل على شهادة تقدير من عمادة السنة التحضيرية.', date: '2022-1-15', displayDay: 'السبت', displayDate: '2022-1-15', photos: ['https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop'], video: '', dotColor: '#ff9800', badgeBg: '#fff3e0', badgeColor: '#e65100', shortDesc: 'تكريم كطالب متفوق في السنة التحضيرية' }
            ]
          },
          {
            title: 'السنة الثانية', age: '19 سنة', dateRange: '2022 - 2023',
            grade: 'ممتاز', height: '176 سم', weight: '71 كج',
            school: 'جامعة الملك سعود - كلية علوم الحاسب',
            photos: ['https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop'],
            video: '',
            events: [
              { type: 'تكريم', title: 'قائمة العميد', details: 'تم إدراج اسم محمد في قائمة العميد للتفوق الدراسي بمعدل فصلي 4.85 من 5.00. تكريم رسمي من عميد الكلية بحضور أعضاء هيئة التدريس.', date: '2022-12-15', displayDay: 'الخميس', displayDate: '2022-12-15', photos: ['https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&h=500&fit=crop'], video: '', dotColor: '#7c4dff', badgeBg: '#ede7f6', badgeColor: '#4a148c', shortDesc: 'إدراج في قائمة العميد بمعدل 4.85' }
            ]
          },
          {
            title: 'السنة الثالثة', age: '20 سنة', dateRange: '2023 - 2024',
            grade: 'ممتاز', height: '177 سم', weight: '73 كج',
            school: 'جامعة الملك سعود - كلية علوم الحاسب',
            photos: ['https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop'],
            video: '',
            events: [
              { type: 'مهني', title: 'تدريب أرامكو', details: 'التحق محمد ببرنامج التدريب الصيفي في أرامكو السعودية بقسم تقنية المعلومات. عمل على تطوير نظام داخلي لإدارة البيانات واكتسب خبرة عملية قيّمة لمدة 8 أسابيع.', date: '2023-6-15', displayDay: 'الخميس', displayDate: '2023-6-15', photos: ['https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=500&fit=crop'], video: '', dotColor: '#2196f3', badgeBg: '#e3f2fd', badgeColor: '#0d47a1', shortDesc: 'تدريب صيفي في أرامكو بقسم تقنية المعلومات' }
            ]
          },
          {
            title: 'السنة الرابعة', age: '21 سنة', dateRange: '2024 - 2025',
            grade: 'امتياز مع مرتبة الشرف', height: '177 سم', weight: '74 كج',
            school: 'جامعة الملك سعود - كلية علوم الحاسب',
            photos: ['https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&h=500&fit=crop'],
            video: '',
            events: [
              { type: 'تعليم', title: 'مشروع التخرج', details: 'قدّم محمد مشروع تخرجه في نظام ذكاء اصطناعي لتحليل البيانات الطبية. حصل على تقدير ممتاز وتم ترشيح المشروع لمعرض الابتكار الوطني.', date: '2025-5-8', displayDay: 'الخميس', displayDate: '2025-5-8', photos: ['https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=500&fit=crop'], video: '', dotColor: '#4caf50', badgeBg: '#e8f5e9', badgeColor: '#1b5e20', shortDesc: 'مشروع تخرج في الذكاء الاصطناعي بتقدير ممتاز' },
              { type: 'تخرج', title: 'حفل التخرج', details: 'تخرج محمد بدرجة البكالوريوس في هندسة البرمجيات بتقدير امتياز مع مرتبة الشرف الأولى. من بين أفضل عشرة خريجين على مستوى الكلية.', date: '2025-6-18', displayDay: 'الأربعاء', displayDate: '2025-6-18', photos: ['https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=800&h=500&fit=crop'], video: 'https://www.w3schools.com/html/mov_bbb.mp4', dotColor: '#D4AF37', badgeBg: '#fff8e1', badgeColor: '#f57f17', shortDesc: 'تخرج بامتياز مع مرتبة الشرف الأولى' }
            ]
          }
        ]
      },
      primary: {
        panelId: 'eduStagePrimary',
        headerIcon: 'https://cdn-icons-png.flaticon.com/128/2602/2602414.png',
        name: 'العمل',
        school: 'شركة التقنية المتقدمة - الرياض',
        years: '2025 - الحاضر',
        yearCards: [
          {
            title: 'مهندس برمجيات مبتدئ', age: '22 سنة', dateRange: '2025 - 2026',
            grade: '', height: '178 سم', weight: '75 كج',
            school: 'شركة التقنية المتقدمة - الرياض',
            photos: ['https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop'],
            video: '',
            events: [
              { type: 'إنجاز', title: 'إكمال أول مشروع', details: 'أكمل محمد أول مشروع برمجي كامل في الشركة بنجاح. كان المشروع عبارة عن تطوير واجهة برمجية لنظام إدارة العملاء. حصل على إشادة من مدير الفريق.', date: '2025-12-1', displayDay: 'الاثنين', displayDate: '2025-12-1', photos: ['https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop','https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop'], video: '', dotColor: '#4caf50', badgeBg: '#e8f5e9', badgeColor: '#1b5e20', shortDesc: 'إكمال أول مشروع برمجي بنجاح في الشركة' }
            ]
          },
          { title: 'مهندس برمجيات', age: '23 سنة', dateRange: '2026 - 2027', placeholder: true }
        ]
      }
    }
  }
};
