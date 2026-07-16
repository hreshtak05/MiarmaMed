// ===== Language / i18n =====
const LANGS = ['hy', 'ru', 'en'];
let LANG = localStorage.getItem('lang');
if (!LANGS.includes(LANG)) LANG = 'hy';

const I18N = {
  hy: {
    title: 'MIARMA·MED — Ուսումնական կենտրոն',
    nav_about: 'Մեր մասին', nav_courses: 'Դասընթացներ', nav_why: 'Ինչու՞ մենք',
    nav_team: 'Դասախոս', nav_contact: 'Կապ', nav_links: 'Հղումներ',
    hero_eyebrow: 'Մասնագիտական ուսումնական կենտրոն',
    hero_title: 'Գիտելիք, որ ծնվում է<br><em>հոգատարությունից</em>',
    hero_lead: 'MIARMA·MED-ը պատրաստում է բժիշկների և մանկաբարձուհիների՝ մանկաբարձության և պրենատալ ուլտրաձայնային ախտորոշման ոլորտում՝ միջազգային չափանիշներով դասընթացների միջոցով։',
    hero_btn_courses: 'Դիտել դասընթացները', hero_btn_consult: 'Անվճար խորհրդատվություն',
    hero_trust: 'Մասնագիտական ուսուցում՝ մանկաբարձության և ուլտրաձայնային ախտորոշման ոլորտում',
    point_cert: 'Միջազգային հավաստագիր', point_practice: 'Պրակտիկ պարապմունքներ', point_instructor: 'Փորձառու դասախոս',
    about_eyebrow: 'Մեր մասին',
    about_title: 'Կենտրոն, որտեղ բժշկությունը հանդիպում է խնամքին',
    about_p1: 'MIARMA·MED ուսումնական կենտրոնը ստեղծվել է՝ բարձրացնելու մանկաբարձության և ուլտրաձայնային ախտորոշման մասնագետների որակավորումը Հայաստանում։',
    about_p2: 'Մենք համատեղում ենք տեսական խորը գիտելիքն ու գործնական պարապմունքները՝ ապահովելով, որ յուրաքանչյուր մասնակից ստանա ոլորտում վստահ աշխատելու հմտություններ։',
    about_li1: 'Միջազգային ուղեցույցների վրա հիմնված ծրագրեր',
    about_li2: 'Փոքր խմբեր՝ անհատական մոտեցմամբ',
    about_li3: 'Ժամանակակից սարքավորումներով պարապմունքներ',
    courses_eyebrow: 'Դասընթացներ', courses_title: 'Ընտրիր քո մասնագիտական ուղին',
    courses_lead: 'Ծրագրերը նախատեսված են ինչպես սկսնակ, այնպես էլ փորձառու մասնագետների համար։',
    courses_hint: 'Սեղմեք դասընթացի վրա՝ մանրամասները տեսնելու համար',
    card_open: 'Մանրամասն →',
    why_eyebrow: 'Ինչու՞ MIARMA·MED', why_title: 'Հիմքեր, որ ընտրեն հենց մեզ',
    f1_t: 'Միջազգային հավաստագիր', f1_d: 'Ավարտական վկայականը ճանաչվում է և հաստատում է ձեր որակավորումը։',
    f2_t: 'Իրական պրակտիկա', f2_d: 'Պարապմունքների մեծ մասը անցկացվում է իրական սարքավորումներով։',
    f3_t: 'Փորձառու դասախոս', f3_d: 'Դասավանդում են գործող բժիշկներ՝ տարիների կլինիկական փորձով։',
    f4_t: 'Աջակցություն ավարտից հետո', f4_d: 'Շրջանավարտներին ուղեկցում ենք կարիերայի առաջին քայլերում։',
    team_eyebrow: 'Դասախոս', team_title: 'Մասնագետ, որից արժե սովորել',
    team_name: 'Մարիաննա Ադամյան', team_role: 'բ․գ․թ, Մանկաբարձ-գինեկոլոգ',
    team_bio: 'Մանկաբարձ-գինեկոլոգ, ուլտրաձայնային ախտորոշման մասնագետ, ԵՊԲՀ դասախոս, MIARMA-MED ուսումնավարժական կենտրոնի հիմնադիր։',
    quote: '“MIARMA·MED-ի դասընթացից հետո ես վստահ եմ իմ աշխատանքում։ Պրակտիկ մոտեցումն ու դասախոսների աջակցությունը անգնահատելի էին։”',
    quote_initials: 'Ն.Ա', quote_by: 'Նարե Ավագյան',
    contact_eyebrow: 'Կապ', contact_title: 'Սկսիր քո ճանապարհը այսօր',
    contact_lead: 'Թողիր հայտը, և մենք կկապվենք քեզ հետ՝ դասընթացի մանրամասները ճշտելու համար։',
    contact_addr: 'Երևան, Հայաստան',
    form_name: 'Անուն Ազգանուն', form_name_ph: 'Ձեր անունը',
    form_phone: 'Հեռախոս', form_course: 'Հետաքրքրող դասընթաց',
    form_submit: 'Ուղարկել հայտը',
    form_note: 'Շնորհակալություն։ Մենք շուտով կկապվենք ձեզ հետ։',
    form_sent: 'Ուղարկված է ✓',
    footer_about: 'MIARMA·MED Training Center — մասնագիտական ուսուցում մանկաբարձության և ուլտրաձայնային ախտորոշման ոլորտում։',
    footer_sections: 'Բաժիններ', footer_contact: 'Կապ',
    footer_rights: '© 2026 MIARMA·MED. Բոլոր իրավունքները պաշտպանված են։',
    modal_enroll: 'Գրանցվել դասընթացին', badge_soon: 'Շուտով',
    reg_eyebrow: 'Գրանցում', reg_title: 'Գրանցվել դասընթացին',
    reg_name: 'Անուն, ազգանուն *', reg_phone: 'Հեռախոսահամար *', reg_email: 'Էլ. հասցե *',
    reg_profession: 'Մասնագիտություն *', reg_working: 'Աշխատո՞ւմ եք *',
    reg_choose: 'Ընտրել...', reg_yes: 'Այո', reg_no: 'Ոչ',
    reg_workplace: 'Ո՞ր բժշկական հաստատությունում', reg_workplace_ph: 'Հաստատության անվանումը',
    reg_experience: 'Ուլտրաձայնային ախտորոշման փորձ (եթե այո՝ նշեք ժամկետը)',
    reg_submit: 'Ուղարկել հայտը', reg_sending: 'Ուղարկվում է...',
    reg_success: 'Շնորհակալություն։ Ձեր հայտը ստացվեց, մենք շուտով կկապվենք ձեզ հետ։',
    reg_error: 'Ներողություն, սխալ առաջացավ։ Խնդրում ենք կրկին փորձել կամ զանգահարել մեզ։'
  },
  ru: {
    title: 'MIARMA·MED — Учебный центр',
    nav_about: 'О нас', nav_courses: 'Курсы', nav_why: 'Почему мы',
    nav_team: 'Преподаватель', nav_contact: 'Контакты', nav_links: 'Ссылки',
    hero_eyebrow: 'Профессиональный учебный центр',
    hero_title: 'Знания, рождённые<br><em>заботой</em>',
    hero_lead: 'MIARMA·MED готовит врачей и акушерок в области акушерства и пренатальной ультразвуковой диагностики по курсам, соответствующим международным стандартам.',
    hero_btn_courses: 'Смотреть курсы', hero_btn_consult: 'Бесплатная консультация',
    hero_trust: 'Профессиональное обучение в области акушерства и ультразвуковой диагностики',
    point_cert: 'Международный сертификат', point_practice: 'Практические занятия', point_instructor: 'Опытный преподаватель',
    about_eyebrow: 'О нас',
    about_title: 'Центр, где медицина встречается с заботой',
    about_p1: 'Учебный центр MIARMA·MED создан, чтобы повышать квалификацию специалистов в области акушерства и ультразвуковой диагностики в Армении.',
    about_p2: 'Мы сочетаем глубокие теоретические знания с практическими занятиями, чтобы каждый участник получил навыки уверенной работы в своей области.',
    about_li1: 'Программы, основанные на международных руководствах',
    about_li2: 'Малые группы с индивидуальным подходом',
    about_li3: 'Занятия на современном оборудовании',
    courses_eyebrow: 'Курсы', courses_title: 'Выбери свой профессиональный путь',
    courses_lead: 'Программы рассчитаны как на начинающих, так и на опытных специалистов.',
    courses_hint: 'Нажмите на курс, чтобы увидеть подробности',
    card_open: 'Подробнее →',
    why_eyebrow: 'Почему MIARMA·MED', why_title: 'Причины выбрать именно нас',
    f1_t: 'Международный сертификат', f1_d: 'Диплом об окончании признаётся и подтверждает вашу квалификацию.',
    f2_t: 'Реальная практика', f2_d: 'Большая часть занятий проводится на реальном оборудовании.',
    f3_t: 'Опытный преподаватель', f3_d: 'Преподают практикующие врачи с многолетним клиническим опытом.',
    f4_t: 'Поддержка после выпуска', f4_d: 'Мы сопровождаем выпускников на первых шагах карьеры.',
    team_eyebrow: 'Преподаватель', team_title: 'Специалист, у которого стоит учиться',
    team_name: 'Марианна Адамян', team_role: 'к.м.н., акушер-гинеколог',
    team_bio: 'Акушер-гинеколог, специалист ультразвуковой диагностики, преподаватель ЕГМУ, основатель учебного центра MIARMA·MED.',
    quote: '«После курса MIARMA·MED я уверена в своей работе. Практический подход и поддержка преподавателей были бесценны.»',
    quote_initials: 'Н.А', quote_by: 'Наре Авагян',
    contact_eyebrow: 'Контакты', contact_title: 'Начни свой путь сегодня',
    contact_lead: 'Оставьте заявку, и мы свяжемся с вами, чтобы уточнить детали курса.',
    contact_addr: 'Ереван, Армения',
    form_name: 'Имя Фамилия', form_name_ph: 'Ваше имя',
    form_phone: 'Телефон', form_course: 'Интересующий курс',
    form_submit: 'Отправить заявку',
    form_note: 'Спасибо! Мы скоро свяжемся с вами.',
    form_sent: 'Отправлено ✓',
    footer_about: 'MIARMA·MED Training Center — профессиональное обучение в области акушерства и ультразвуковой диагностики.',
    footer_sections: 'Разделы', footer_contact: 'Контакты',
    footer_rights: '© 2026 MIARMA·MED. Все права защищены.',
    modal_enroll: 'Записаться на курс', badge_soon: 'Скоро',
    reg_eyebrow: 'Регистрация', reg_title: 'Регистрация на курс',
    reg_name: 'Имя, фамилия *', reg_phone: 'Номер телефона *', reg_email: 'Эл. почта *',
    reg_profession: 'Специальность *', reg_working: 'Вы работаете? *',
    reg_choose: 'Выбрать...', reg_yes: 'Да', reg_no: 'Нет',
    reg_workplace: 'В каком медицинском учреждении', reg_workplace_ph: 'Название учреждения',
    reg_experience: 'Опыт в ультразвуковой диагностике (если да, укажите срок)',
    reg_submit: 'Отправить заявку', reg_sending: 'Отправляется...',
    reg_success: 'Спасибо! Ваша заявка получена, мы скоро свяжемся с вами.',
    reg_error: 'Извините, произошла ошибка. Попробуйте снова или позвоните нам.'
  },
  en: {
    title: 'MIARMA·MED — Training Center',
    nav_about: 'About', nav_courses: 'Courses', nav_why: 'Why us',
    nav_team: 'Instructor', nav_contact: 'Contact', nav_links: 'Links',
    hero_eyebrow: 'Professional training center',
    hero_title: 'Knowledge born of<br><em>care</em>',
    hero_lead: 'MIARMA·MED trains doctors and midwives in obstetrics and prenatal ultrasound diagnostics through courses built on international standards.',
    hero_btn_courses: 'View courses', hero_btn_consult: 'Free consultation',
    hero_trust: 'Professional training in obstetrics and ultrasound diagnostics',
    point_cert: 'International certificate', point_practice: 'Hands-on practice', point_instructor: 'Experienced instructor',
    about_eyebrow: 'About us',
    about_title: 'A center where medicine meets care',
    about_p1: 'The MIARMA·MED training center was founded to raise the qualifications of obstetrics and ultrasound diagnostics specialists in Armenia.',
    about_p2: 'We combine deep theoretical knowledge with hands-on practice so that every participant gains the skills to work confidently in the field.',
    about_li1: 'Programs based on international guidelines',
    about_li2: 'Small groups with an individual approach',
    about_li3: 'Training on modern equipment',
    courses_eyebrow: 'Courses', courses_title: 'Choose your professional path',
    courses_lead: 'Programs are designed for both beginners and experienced professionals.',
    courses_hint: 'Click a course to see the details',
    card_open: 'Details →',
    why_eyebrow: 'Why MIARMA·MED', why_title: 'Reasons to choose us',
    f1_t: 'International certificate', f1_d: 'The graduation certificate is recognized and confirms your qualification.',
    f2_t: 'Real practice', f2_d: 'Most sessions are conducted on real equipment.',
    f3_t: 'Experienced instructor', f3_d: 'Courses are taught by practicing physicians with years of clinical experience.',
    f4_t: 'Support after graduation', f4_d: 'We support graduates through the first steps of their careers.',
    team_eyebrow: 'Instructor', team_title: 'A specialist worth learning from',
    team_name: 'Marianna Adamyan', team_role: 'PhD (MD), Obstetrician-Gynecologist',
    team_bio: 'Obstetrician-gynecologist, ultrasound diagnostics specialist, lecturer at YSMU, founder of the MIARMA·MED training center.',
    quote: '“After the MIARMA·MED course I feel confident in my work. The practical approach and the instructors’ support were invaluable.”',
    quote_initials: 'N.A', quote_by: 'Nare Avagyan',
    contact_eyebrow: 'Contact', contact_title: 'Start your journey today',
    contact_lead: 'Leave a request and we will contact you to discuss the course details.',
    contact_addr: 'Yerevan, Armenia',
    form_name: 'Full name', form_name_ph: 'Your name',
    form_phone: 'Phone', form_course: 'Course of interest',
    form_submit: 'Send request',
    form_note: 'Thank you! We will be in touch soon.',
    form_sent: 'Sent ✓',
    footer_about: 'MIARMA·MED Training Center — professional training in obstetrics and ultrasound diagnostics.',
    footer_sections: 'Sections', footer_contact: 'Contact',
    footer_rights: '© 2026 MIARMA·MED. All rights reserved.',
    modal_enroll: 'Enroll in the course', badge_soon: 'Coming soon',
    reg_eyebrow: 'Registration', reg_title: 'Course registration',
    reg_name: 'Full name *', reg_phone: 'Phone number *', reg_email: 'Email *',
    reg_profession: 'Profession *', reg_working: 'Are you working? *',
    reg_choose: 'Select...', reg_yes: 'Yes', reg_no: 'No',
    reg_workplace: 'At which medical institution', reg_workplace_ph: 'Institution name',
    reg_experience: 'Ultrasound diagnostics experience (if yes, specify duration)',
    reg_submit: 'Send request', reg_sending: 'Sending...',
    reg_success: 'Thank you! Your request has been received, we will contact you soon.',
    reg_error: 'Sorry, something went wrong. Please try again or call us.'
  }
};

const T = (k) => (I18N[LANG] && I18N[LANG][k]) || I18N.hy[k] || k;

// ===== Course data =====
// Each text field has hy / ru / en versions.
// To add an image to a course, set `img` to a path, e.g. img:'assets/courses/echo.jpg'
const COURSES = [
  {
    t: {
      hy: 'Երկրաչափական վարժություններ՝ ձեռք–աչք համահունչ կոորդինացիայի բարելավման համար',
      ru: 'Геометрические упражнения для улучшения зрительно-моторной координации',
      en: 'Geometric exercises to improve hand–eye coordination'
    },
    levels: ['basic', 'intermediate'],
    desc: {
      hy: 'Գործնական վարժություններ՝ ձեռք–աչք համահունչ կոորդինացիան և ուլտրաձայնային տվիչի վստահ վերահսկումը զարգացնելու համար։',
      ru: 'Практические упражнения для развития зрительно-моторной координации и уверенного управления ультразвуковым датчиком.',
      en: 'Practical exercises to develop hand–eye coordination and confident control of the ultrasound probe.'
    },
    img: null
  },
  {
    t: {
      hy: 'Հղիության I եռամսյակի սքրինինգ հետազոտություն, մակարդակ 1',
      ru: 'Скрининговое исследование I триместра беременности, уровень 1',
      en: 'First-trimester pregnancy screening, level 1'
    },
    levels: ['basic', 'intermediate'],
    note: { hy: '1 օր ինտենսիվ դասընթաց', ru: '1 день, интенсивный курс', en: '1-day intensive course' },
    desc: {
      hy: 'Հղիության առաջին եռամսյակի սքրինինգային ուլտրաձայնային հետազոտության հիմունքները։',
      ru: 'Основы скринингового ультразвукового исследования первого триместра беременности.',
      en: 'Fundamentals of first-trimester screening ultrasound examination.'
    },
    img: null
  },
  {
    t: {
      hy: 'Հղիության I եռամսյակի ախտաբանություններ, մակարդակ 2',
      ru: 'Патологии I триместра беременности, уровень 2',
      en: 'First-trimester pathologies, level 2'
    },
    levels: ['basic', 'intermediate'],
    desc: {
      hy: 'Առաջին եռամսյակի ախտաբանությունների հայտնաբերում և գնահատում։',
      ru: 'Выявление и оценка патологий первого триместра.',
      en: 'Detection and assessment of first-trimester pathologies.'
    },
    img: null
  },
  {
    t: {
      hy: 'Հղիության II եռամսյակի նորմալ օրգանոգենեզ, 20+2 ձևաչափ',
      ru: 'Нормальный органогенез во II триместре, формат 20+2',
      en: 'Normal second-trimester organogenesis, 20+2 format'
    },
    levels: ['basic', 'intermediate'],
    desc: {
      hy: 'Պտղի նորմալ օրգանների ձևավորման (օրգանոգենեզի) գնահատում 20+2 ձևաչափով։',
      ru: 'Оценка нормального формирования органов плода (органогенеза) в формате 20+2.',
      en: 'Assessment of normal fetal organ development (organogenesis) using the 20+2 format.'
    },
    img: null
  },
  {
    t: {
      hy: 'Հղիության II եռամսյակի ֆետալ անոմալիաներ, մակարդակ 2',
      ru: 'Фетальные аномалии II триместра, уровень 2',
      en: 'Second-trimester fetal anomalies, level 2'
    },
    levels: ['intermediate', 'advanced'],
    desc: {
      hy: 'Երկրորդ եռամսյակի պտղի անոմալիաների ուլտրաձայնային ախտորոշում։',
      ru: 'Ультразвуковая диагностика аномалий плода во втором триместре.',
      en: 'Ultrasound diagnosis of fetal anomalies in the second trimester.'
    },
    img: null
  },
  {
    t: {
      hy: 'Պտղի նորմալ էխոկարդիոգրաֆիա, մակարդակ 1',
      ru: 'Нормальная эхокардиография плода, уровень 1',
      en: 'Normal fetal echocardiography, level 1'
    },
    levels: ['basic'],
    note: { hy: '1 օր ինտենսիվ դասընթաց', ru: '1 день, интенсивный курс', en: '1-day intensive course' },
    desc: {
      hy: 'Պտղի սրտի նորմալ էխոկարդիոգրաֆիայի հիմունքները։',
      ru: 'Основы нормальной эхокардиографии сердца плода.',
      en: 'Fundamentals of normal fetal cardiac echocardiography.'
    },
    img: null
  },
  {
    t: {
      hy: 'Պտղի էխոկարդիոգրաֆիա, ախտաբանություններ, մակարդակ 2',
      ru: 'Эхокардиография плода, патологии, уровень 2',
      en: 'Fetal echocardiography, pathologies, level 2'
    },
    levels: ['intermediate', 'advanced'],
    desc: {
      hy: 'Պտղի սրտի ախտաբանությունների գնահատում էխոկարդիոգրաֆիայի միջոցով։',
      ru: 'Оценка патологий сердца плода с помощью эхокардиографии.',
      en: 'Assessment of fetal cardiac pathologies using echocardiography.'
    },
    img: null
  },
  {
    t: {
      hy: 'Պտղի նեյրոսոնոգրաֆիա',
      ru: 'Нейросонография плода',
      en: 'Fetal neurosonography'
    },
    levels: ['advanced'],
    desc: {
      hy: 'Պտղի կենտրոնական նյարդային համակարգի մանրամասն ուլտրաձայնային գնահատում։',
      ru: 'Детальная ультразвуковая оценка центральной нервной системы плода.',
      en: 'Detailed ultrasound assessment of the fetal central nervous system.'
    },
    img: null
  },
  {
    t: {
      hy: 'Վաղ հղիություն / Early pregnancy',
      ru: 'Ранняя беременность / Early pregnancy',
      en: 'Early pregnancy'
    },
    levels: ['basic'],
    desc: {
      hy: 'Վաղ հղիության ուլտրաձայնային գնահատման հիմունքները։',
      ru: 'Основы ультразвуковой оценки ранней беременности.',
      en: 'Fundamentals of early pregnancy ultrasound assessment.'
    },
    img: null
  },
  {
    t: {
      hy: 'ՈՒՁՀ ռեպրոդուկտոլոգիայում՝ արգանդի նորմալ հետազոտություն և ախտաբանություններ',
      ru: 'УЗИ в репродуктологии: нормальное исследование матки и патологии',
      en: 'Ultrasound in reproductive medicine: normal uterine examination and pathologies'
    },
    levels: ['basic', 'intermediate', 'advanced'],
    desc: {
      hy: 'Արգանդի նորմալ ուլտրաձայնային հետազոտություն և ախտաբանություններ ռեպրոդուկտոլոգիայում։',
      ru: 'Нормальное ультразвуковое исследование матки и патологии в репродуктологии.',
      en: 'Normal uterine ultrasound examination and pathologies in reproductive medicine.'
    },
    img: null
  },
  {
    t: {
      hy: 'Ֆոլիկուլների պունկցիայի տեխնիկա',
      ru: 'Техника пункции фолликулов',
      en: 'Follicle puncture technique'
    },
    levels: ['basic', 'intermediate'],
    note: { hy: 'IVF մասնագետների համար', ru: 'Для специалистов ЭКО', en: 'For IVF specialists' },
    desc: {
      hy: 'Ֆոլիկուլների պունկցիայի գործնական տեխնիկան IVF մասնագետների համար։',
      ru: 'Практическая техника пункции фолликулов для специалистов ЭКО.',
      en: 'Practical follicle puncture technique for IVF specialists.'
    },
    img: null
  },
  {
    t: {
      hy: 'Ամնիոցենտեզի և խորիոնի բիոպսիա',
      ru: 'Амниоцентез и биопсия хориона',
      en: 'Amniocentesis and chorionic villus biopsy'
    },
    levels: ['advanced'], soon: true,
    desc: {
      hy: 'Ամնիոցենտեզի և խորիոնի բիոպսիայի ինվազիվ ախտորոշիչ տեխնիկաները։',
      ru: 'Инвазивные диагностические техники амниоцентеза и биопсии хориона.',
      en: 'Invasive diagnostic techniques of amniocentesis and chorionic villus sampling.'
    },
    img: null
  }
];

const ICONS = ['◓', '◉', '◌', '✚', '♥', '❀', '✦', '◈', '☾', '✧', '⬡', '⚕'];
const LEVEL_LABEL = { basic: 'Basic', intermediate: 'Intermediate', advanced: 'Advanced' };
const ct = (field) => (field && (field[LANG] || field.hy)) || '';
const badgesHTML = (c) =>
  c.levels.map(l => `<span class="badge badge-${l}">${LEVEL_LABEL[l]}</span>`).join('') +
  (c.soon ? `<span class="badge badge-soon">${T('badge_soon')}</span>` : '');

// ===== Render course cards + form options =====
const grid = document.getElementById('courseGrid');
const select = document.getElementById('course');

function renderCourses() {
  if (!grid) return;
  grid.innerHTML = '';
  if (select) select.innerHTML = '';

  COURSES.forEach((c, i) => {
    c.icon = ICONS[i % ICONS.length];

    const card = document.createElement('article');
    card.className = 'card course-card' + (c.soon ? ' is-soon' : '');
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.dataset.idx = i;
    card.innerHTML =
      `<div class="card-icon">${c.icon}</div>
       <h3>${ct(c.t)}</h3>
       <div class="card-badges">${badgesHTML(c)}</div>
       <span class="card-open">${T('card_open')}</span>`;
    card.classList.add('reveal', 'in');
    grid.appendChild(card);

    if (select) {
      const opt = document.createElement('option');
      opt.textContent = ct(c.t);
      select.appendChild(opt);
    }
  });
}

// ===== Apply language =====
function applyLang(lang) {
  if (!LANGS.includes(lang)) lang = 'hy';
  LANG = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.title = T('title');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.innerHTML = T(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = T(el.dataset.i18nPh);
  });

  document.querySelectorAll('#langSwitch button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });

  renderCourses();

  // reset form button text if it was showing the "sent" state
  const submitBtn = document.querySelector('#enrollForm button[type="submit"]');
  if (submitBtn) submitBtn.textContent = T('form_submit');
}

document.getElementById('langSwitch')?.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-lang]');
  if (btn) applyLang(btn.dataset.lang);
});

// ===== Course modal =====
const modal = document.getElementById('courseModal');
const mTitle = document.getElementById('modalTitle');
const mDesc = document.getElementById('modalDesc');
const mBadges = document.getElementById('modalBadges');
const mMedia = document.getElementById('modalMedia');
const mNote = document.getElementById('modalNote');
let lastFocused = null;
let currentCourseIdx = null;

function openCourse(i) {
  const c = COURSES[i];
  if (!c) return;
  currentCourseIdx = i;
  lastFocused = document.activeElement;
  mTitle.textContent = ct(c.t);
  mDesc.textContent = ct(c.desc);
  mBadges.innerHTML = badgesHTML(c);

  if (c.note) { mNote.textContent = 'ⓘ ' + ct(c.note); mNote.hidden = false; }
  else { mNote.hidden = true; }

  if (c.img) {
    mMedia.className = 'modal-media';
    mMedia.innerHTML = `<img src="${c.img}" alt="${ct(c.t)}" />`;
  } else {
    mMedia.className = 'modal-media is-placeholder';
    mMedia.innerHTML = `<img src="assets/emblem.png" alt="" />`;
  }

  if (select) select.value = ct(c.t); // preselect in the enrollment form
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal-close').focus();
}

function closeCourse() {
  modal.hidden = true;
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}

grid?.addEventListener('click', (e) => {
  const card = e.target.closest('.course-card');
  if (card) openCourse(+card.dataset.idx);
});
grid?.addEventListener('keydown', (e) => {
  const card = e.target.closest('.course-card');
  if (card && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openCourse(+card.dataset.idx); }
});
modal?.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) closeCourse(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal && !modal.hidden) closeCourse(); });

// ===== Registration modal =====
// CONFIG: paste your Google Apps Script Web App URL between the quotes below.
// Empty = "demo mode" (nothing is saved).
const REG_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzwRBnptNhKmNXnl2oPM-33H1snGo1NZE-tGT_MLbfdCTdOPPhKouIx7iaUD0v3lEvL/exec";

const regModal = document.getElementById('regModal');
const regForm = document.getElementById('regForm');
const regCourseInput = document.getElementById('regCourse');
const regCourseName = document.getElementById('regCourseName');
const regNote = document.getElementById('regNote');
const regWorking = document.getElementById('regWorking');
const regWorkplaceField = document.getElementById('regWorkplaceField');

function openReg(idx) {
  const c = COURSES[idx];
  if (regForm) regForm.reset();
  if (regNote) regNote.hidden = true;
  if (regWorkplaceField) regWorkplaceField.hidden = true;
  // Show current-language course name to the visitor, but save the canonical
  // Armenian title so the CRM groups all registrations of a course together.
  regCourseInput.value = c ? c.t.hy : '';
  regCourseName.textContent = c ? ct(c.t) : '';
  // restore any hidden fields / button from a previous success
  regForm.querySelectorAll('.field').forEach(f => { f.style.display = ''; });
  if (regWorkplaceField) regWorkplaceField.style.display = '';
  regWorkplaceField.hidden = true;
  const submitBtn = regForm.querySelector('button[type="submit"]');
  if (submitBtn) { submitBtn.style.display = ''; submitBtn.disabled = false; submitBtn.textContent = T('reg_submit'); }
  regModal.hidden = false;
  document.body.style.overflow = 'hidden';
  regForm.querySelector('input[name="full_name"]').focus();
}

function closeReg() {
  regModal.hidden = true;
  document.body.style.overflow = '';
}

document.getElementById('modalEnroll')?.addEventListener('click', () => {
  const idx = currentCourseIdx;
  closeCourse();
  openReg(idx);
});

regModal?.addEventListener('click', (e) => { if (e.target.closest('[data-reg-close]')) closeReg(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && regModal && !regModal.hidden) closeReg(); });

// Show the workplace question only when "working = yes"
regWorking?.addEventListener('change', () => {
  regWorkplaceField.hidden = regWorking.value !== 'yes';
});

async function submitRegistration(payload) {
  if (REG_SCRIPT_URL) {
    try {
      await fetch(REG_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      });
      return true; // opaque response with no-cors — the script still runs
    } catch (e) { return false; }
  }
  // demo mode — not connected yet
  console.log('DEMO registration (not saved anywhere):', payload);
  return true;
}

regForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!regForm.checkValidity()) { regForm.reportValidity(); return; }

  const el = regForm.elements;
  const working = el.is_working.value === 'yes';
  const payload = {
    full_name: el.full_name.value.trim(),
    phone: el.phone.value.trim(),
    email: el.email.value.trim(),
    profession: el.profession.value.trim(),
    is_working: working,
    workplace: working ? el.workplace.value.trim() : '',
    ultrasound_experience: el.ultrasound_experience.value.trim(),
    course: el.course.value
  };

  const submitBtn = regForm.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = T('reg_sending');

  const ok = await submitRegistration(payload);

  if (ok) {
    regForm.querySelectorAll('.field').forEach(f => { f.style.display = 'none'; });
    submitBtn.style.display = 'none';
    regNote.hidden = false;
    setTimeout(closeReg, 3000);
  } else {
    submitBtn.disabled = false;
    submitBtn.textContent = T('reg_submit');
    alert(T('reg_error'));
  }
});

// ===== Mobile nav =====
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger?.addEventListener('click', () => nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// ===== Initial render (respects saved language) =====
applyLang(LANG);

// ===== Reveal on scroll =====
const revealEls = document.querySelectorAll('.section, .feature, .hero-card, .instructor');
revealEls.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// ===== Contact form (front-end only) =====
const form = document.getElementById('enrollForm');
const note = document.getElementById('formNote');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) { form.reportValidity(); return; }
  note.hidden = false;
  form.querySelector('button').textContent = T('form_sent');
  setTimeout(() => form.reset(), 400);
});
