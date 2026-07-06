// ===== Course data =====
// To add an image to a course, set `img` to a path, e.g. img:'assets/courses/echo.jpg'
const COURSES = [
  {
    t: 'Երկրաչափական վարժություններ՝ ձեռք–աչք համահունչ կոորդինացիայի բարելավման համար',
    levels: ['basic', 'intermediate'],
    desc: 'Գործնական վարժություններ՝ ձեռք–աչք համահունչ կոորդինացիան և ուլտրաձայնային տվիչի վստահ վերահսկումը զարգացնելու համար։',
    img: null
  },
  {
    t: 'Հղիության I եռամսյակի սքրինինգ հետազոտություն, մակարդակ 1',
    levels: ['basic', 'intermediate'], note: '1 օր ինտենսիվ դասընթաց',
    desc: 'Հղիության առաջին եռամսյակի սքրինինգային ուլտրաձայնային հետազոտության հիմունքները։',
    img: null
  },
  {
    t: 'Հղիության I եռամսյակի ախտաբանություններ, մակարդակ 2',
    levels: ['basic', 'intermediate'],
    desc: 'Առաջին եռամսյակի ախտաբանությունների հայտնաբերում և գնահատում։',
    img: null
  },
  {
    t: 'Հղիության II եռամսյակի նորմալ օրգանոգենեզ, 20+2 ձևաչափ',
    levels: ['basic', 'intermediate'],
    desc: 'Պտղի նորմալ օրգանների ձևավորման (օրգանոգենեզի) գնահատում 20+2 ձևաչափով։',
    img: null
  },
  {
    t: 'Հղիության II եռամսյակի ֆետալ անոմալիաներ, մակարդակ 2',
    levels: ['intermediate', 'advanced'],
    desc: 'Երկրորդ եռամսյակի պտղի անոմալիաների ուլտրաձայնային ախտորոշում։',
    img: null
  },
  {
    t: 'Պտղի նորմալ էխոկարդիոգրաֆիա, մակարդակ 1',
    levels: ['basic'], note: '1 օր ինտենսիվ դասընթաց',
    desc: 'Պտղի սրտի նորմալ էխոկարդիոգրաֆիայի հիմունքները։',
    img: null
  },
  {
    t: 'Պտղի էխոկարդիոգրաֆիա, ախտաբանություններ, մակարդակ 2',
    levels: ['intermediate', 'advanced'],
    desc: 'Պտղի սրտի ախտաբանությունների գնահատում էխոկարդիոգրաֆիայի միջոցով։',
    img: null
  },
  {
    t: 'Պտղի նեյրոսոնոգրաֆիա',
    levels: ['advanced'],
    desc: 'Պտղի կենտրոնական նյարդային համակարգի մանրամասն ուլտրաձայնային գնահատում։',
    img: null
  },
  {
    t: 'Վաղ հղիություն / Early pregnancy',
    levels: ['basic'],
    desc: 'Վաղ հղիության ուլտրաձայնային գնահատման հիմունքները։',
    img: null
  },
  {
    t: 'ՈՒՁՀ ռեպրոդուկտոլոգիայում՝ արգանդի նորմալ հետազոտություն և ախտաբանություններ',
    levels: ['basic', 'intermediate', 'advanced'],
    desc: 'Արգանդի նորմալ ուլտրաձայնային հետազոտություն և ախտաբանություններ ռեպրոդուկտոլոգիայում։',
    img: null
  },
  {
    t: 'Ֆոլիկուլների պունկցիայի տեխնիկա',
    levels: ['basic', 'intermediate'], note: 'IVF մասնագետների համար',
    desc: 'Ֆոլիկուլների պունկցիայի գործնական տեխնիկան IVF մասնագետների համար։',
    img: null
  },
  {
    t: 'Ամնիոցենտեզի և խորիոնի բիոպսիա',
    levels: ['advanced'], soon: true,
    desc: 'Ամնիոցենտեզի և խորիոնի բիոպսիայի ինվազիվ ախտորոշիչ տեխնիկաները։',
    img: null
  }
];

const ICONS = ['◓', '◉', '◌', '✚', '♥', '❀', '✦', '◈', '☾', '✧', '⬡', '⚕'];
const LEVEL_LABEL = { basic: 'Basic', intermediate: 'Intermediate', advanced: 'Advanced' };
const badgesHTML = (c) =>
  c.levels.map(l => `<span class="badge badge-${l}">${LEVEL_LABEL[l]}</span>`).join('') +
  (c.soon ? '<span class="badge badge-soon">Շուտով</span>' : '');

// ===== Render course cards + form options =====
const grid = document.getElementById('courseGrid');
const select = document.getElementById('course');

COURSES.forEach((c, i) => {
  c.icon = ICONS[i % ICONS.length];

  const card = document.createElement('article');
  card.className = 'card course-card' + (c.soon ? ' is-soon' : '');
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.dataset.idx = i;
  card.innerHTML =
    `<div class="card-icon">${c.icon}</div>
     <h3>${c.t}</h3>
     <div class="card-badges">${badgesHTML(c)}</div>
     <span class="card-open">Մանրամասն →</span>`;
  grid.appendChild(card);

  if (select) {
    const opt = document.createElement('option');
    opt.textContent = c.t;
    select.appendChild(opt);
  }
});

// ===== Course modal =====
const modal = document.getElementById('courseModal');
const mTitle = document.getElementById('modalTitle');
const mDesc = document.getElementById('modalDesc');
const mBadges = document.getElementById('modalBadges');
const mMedia = document.getElementById('modalMedia');
const mNote = document.getElementById('modalNote');
let lastFocused = null;

function openCourse(i) {
  const c = COURSES[i];
  if (!c) return;
  lastFocused = document.activeElement;
  mTitle.textContent = c.t;
  mDesc.textContent = c.desc || '';
  mBadges.innerHTML = badgesHTML(c);

  if (c.note) { mNote.textContent = 'ⓘ ' + c.note; mNote.hidden = false; }
  else { mNote.hidden = true; }

  if (c.img) {
    mMedia.className = 'modal-media';
    mMedia.innerHTML = `<img src="${c.img}" alt="${c.t}" />`;
  } else {
    mMedia.className = 'modal-media is-placeholder';
    mMedia.innerHTML = `<img src="assets/emblem.png" alt="" />`;
  }

  if (select) select.value = c.t; // preselect in the enrollment form
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal-close').focus();
}

function closeCourse() {
  modal.hidden = true;
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}

grid.addEventListener('click', (e) => {
  const card = e.target.closest('.course-card');
  if (card) openCourse(+card.dataset.idx);
});
grid.addEventListener('keydown', (e) => {
  const card = e.target.closest('.course-card');
  if (card && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openCourse(+card.dataset.idx); }
});
modal.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) closeCourse(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.hidden) closeCourse(); });

// ===== Mobile nav =====
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger?.addEventListener('click', () => nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// ===== Reveal on scroll =====
const revealEls = document.querySelectorAll('.section, .card, .feature, .hero-card, .instructor');
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
  form.querySelector('button').textContent = 'Ուղարկված է ✓';
  setTimeout(() => form.reset(), 400);
});
