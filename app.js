(() => {
  const doc = document.documentElement;
  doc.classList.add('js');

  const T = {
    ka: {
      'nav.book': 'ჯავშანი', 'nav.nearby': 'როგორ მოვიდე', 'nav.faq': 'კითხვები', 'nav.contact': 'კონტაქტი',
      'hero.lead': 'სასტუმრო გუჯარეთის ქუჩა 35-ში, ისნის მეტროდან ფეხით ათ წუთში. მიმღები დღე და ღამე ღიაა. სტუმრების შეფასება — 8.6, 248 შეფასებიდან.',
      'hero.cta': 'დაჯავშნე WhatsApp-ით',
      'about.h': 'სახლი',
      'about.f1': 'ისანი, თბილისი', 'about.f2': 'მიმღები 24 საათი', 'about.f3': 'უფასო პარკინგი',
      'about.p1': 'ისნის მეტროდან ათ წუთშია: ერთი გაჩერება ავლაბრამდე, ორი — ძველ ქალაქამდე.',
      'about.p2': 'უფასო Wi-Fi და პარკინგი, მიმღები ნებისმიერ საათზე, ექსკურსიების მოწყობა და ტრანსფერი აეროპორტიდან მოთხოვნით. გვიან ჩამოხვალ? კარი ღიაა.',
      'book.h': 'მიწერე შენი თარიღები',
      'book.p': 'აირჩიე თარიღები და პირდაპირ სასტუმროს გაუგზავნე. არც საკომისიო, არც შუამავალი.',
      'book.in': 'შესვლა', 'book.out': 'გასვლა', 'book.g': 'სტუმრები', 'book.nights': 'ღამე',
      'book.shuttle': 'მჭირდება ტრანსფერი აეროპორტიდან', 'book.late': 'გვიან ღამით ჩამოვდივარ',
      'book.pv': 'შენი შეტყობინება', 'book.send': 'გაგზავნა WhatsApp-ით',
      'show.h': 'გორაზე და მდინარის გაღმა', 'show.t': 'სამების ტაძარი',
      'show.c': 'სამების ტაძარი, მეტეხის ეკლესია, რიყის პარკი და ისნის მეტრო.',
      'proof.h1': 'სახლი', 'proof.h2': 'ფაქტებში',
      't.r1a': 'სტუმრების შეფასება', 't.r1c': '248 შეფასება, HotelsCombined',
      't.r2a': 'მისამართი', 't.r2b': 'გუჯარეთის ქ. 35', 't.r2c': 'ისანი, თბილისი',
      't.r3a': 'მეტრო', 't.r3b': 'ისანი, ფეხით დაახლ. 10 წთ', 't.r3c': 'დაახლ. 760 მ',
      't.r4a': 'მიმღები', 't.r4b': 'ღიაა 24 საათი',
      't.r5a': 'ტრანსფერი აეროპორტიდან', 't.r5b': 'მოთხოვნით', 't.r5c': 'აეროპორტი დაახლ. 10.5 კმ',
      't.r6a': 'Wi-Fi და პარკინგი', 't.r6b': 'უფასო',
      't.r7a': 'ექსკურსიები', 't.r7b': 'მიმღებში მოგიწყობენ',
      't.r8a': 'გადახდა', 't.r8b': 'ნაღდი ფულით, ლარში',
      'near.h': 'როგორ მოვიდე',
      'near.b1': 'ფეხით', 'near.b1i1': 'ისნის მეტრო', 'near.b1i2': 'სამების ტაძარი',
      'near.b2': 'მეტროთი ისნიდან', 'near.b2i1': 'ავლაბარი, მეტეხი, რიყის პარკი', 'near.b2i2': 'თავისუფლების მოედანი, ძველი ქალაქი', 'near.b2i3': 'რუსთაველის გამზირი',
      'near.b3': 'აეროპორტიდან', 'near.b3i1': 'ტრანსფერი სასტუმროდან', 'near.b3i2': 'ტაქსი',
      'near.b4': 'ქალაქგარეთ', 'near.b4i1': 'ექსკურსიები: მცხეთა, ყაზბეგი, კახეთი',
      'w.10': 'დაახლ. 10 წთ', 'w.17': 'დაახლ. 1.7 კმ', 'w.s1': '1 გაჩერება', 'w.s2': '2 გაჩერება', 'w.s3': '3 გაჩერება',
      'w.req': 'მოთხოვნით', 'w.20': 'დაახლ. 20 წთ', 'w.desk': 'იკითხე მიმღებში',
      'faq.h': 'სანამ ჩამოხვალ',
      'q1': 'როგორ დავჯავშნო?', 'a1': 'მიწერე თარიღები WhatsApp-ზე: +995 568 77 17 86. სასტუმრო გიპასუხებს და ოთახს დაგიდასტურებს.',
      'q2': 'როგორ გადავიხადო?', 'a2': 'ნაღდი ფულით, ლარში, ადგილზე.',
      'q3': 'ღამით ჩამოვფრინდები. შემიშვებენ?', 'a3': 'კი. მიმღები 24 საათი ღიაა. ფორმაში მონიშნე „გვიან ღამით ჩამოვდივარ“, რომ სასტუმრომ იცოდეს.',
      'q4': 'როგორ მოვიდე აეროპორტიდან?', 'a4': 'მოითხოვე ტრანსფერი ფორმაში, ან აიყვანე ტაქსი: დაახლოებით 20 წუთი.',
      'q5': 'როგორ მივიდე ძველ ქალაქში?', 'a5': 'ფეხით ათი წუთი ისნის მეტრომდე. თავისუფლების მოედანი და ძველი ქალაქი ორი გაჩერებაა.',
      'q6': '18 წლამდე მარტო შეიძლება?', 'a6': 'არა. 18 წლამდე სტუმრები ზრდასრულთან ერთად ჩერდებიან.',
      'c.say': 'მიწერე სასტუმროს თარიღებზე, გვიან ჩამოსვლაზე ან ტრანსფერზე.',
      'c.addr': 'გუჯარეთის ქ. 35, ისანი, თბილისი',
      'f.addr': 'მისამართი', 'f.pages': 'გვერდები', 'f.phones': 'ტელეფონი', 'f.pay': 'გადახდა',
      'f.legal': 'საიტის კონცეფცია, მომზადებული შეთავაზებად Guest House Umbrella-სთვის. ეს არ არის ოფიციალური საიტი.',
      msg: (a, b, n, g) => `გამარჯობა! მინდა ოთახი ${a}-დან ${b}-მდე (${n} ღამე), ${g} სტუმარი. თავისუფალია?`,
      msgEmpty: (g) => `გამარჯობა! მინდა ოთახი ${g} სტუმრისთვის. რომელი დღეებია თავისუფალი?`,
      shuttle: ' ტრანსფერიც მჭირდება აეროპორტიდან.',
      late: ' გვიან ღამით ჩამოვალ.'
    },
    en: {
      msg: (a, b, n, g) => `Hello! I'd like a room from ${a} to ${b} (${n} ${n === 1 ? 'night' : 'nights'}) for ${g} ${g === '1' ? 'guest' : 'guests'}. Is it available?`,
      msgEmpty: (g) => `Hello! I'd like a room for ${g} ${g === '1' ? 'guest' : 'guests'}. Which dates are free?`,
      shuttle: ' I would also like the airport transfer.',
      late: ' I will arrive late at night.'
    },
    ru: {
      'nav.book': 'Бронь', 'nav.nearby': 'Как добраться', 'nav.faq': 'Вопросы', 'nav.contact': 'Контакты',
      'hero.lead': 'Гостевой дом на улице Гуджарети, 35, в десяти минутах пешком от метро «Исани». Ресепшен открыт днём и ночью. Оценка гостей — 8.6 по 248 отзывам.',
      'hero.cta': 'Забронировать в WhatsApp',
      'about.h': 'Дом',
      'about.f1': 'Исани, Тбилиси', 'about.f2': 'Ресепшен 24 часа', 'about.f3': 'Бесплатная парковка',
      'about.p1': '— в десяти минутах от метро «Исани»: одна станция до Авлабари, две — до Старого города.',
      'about.p2': 'Бесплатный Wi-Fi и парковка, ресепшен в любое время, помощь с экскурсиями и трансфер из аэропорта по запросу. Прилетаете поздно — дверь открыта.',
      'book.h': 'Напишите свои даты',
      'book.p': 'Выберите даты и отправьте их прямо в гостевой дом. Без комиссии и без посредников.',
      'book.in': 'Заезд', 'book.out': 'Выезд', 'book.g': 'Гости', 'book.nights': 'ноч.',
      'book.shuttle': 'Нужен трансфер из аэропорта', 'book.late': 'Приеду поздно ночью',
      'book.pv': 'Ваше сообщение', 'book.send': 'Отправить в WhatsApp',
      'show.h': 'На холме и за рекой', 'show.t': 'Собор Самеба',
      'show.c': 'Собор Самеба, церковь Метехи, парк Рике и метро «Исани».',
      'proof.h1': 'Дом', 'proof.h2': 'в фактах',
      't.r1a': 'Оценка гостей', 't.r1c': '248 отзывов, HotelsCombined',
      't.r2a': 'Адрес', 't.r2b': 'ул. Гуджарети, 35', 't.r2c': 'Исани, Тбилиси',
      't.r3a': 'Метро', 't.r3b': '«Исани», около 10 мин пешком', 't.r3c': 'Около 760 м',
      't.r4a': 'Ресепшен', 't.r4b': 'Открыт 24 часа',
      't.r5a': 'Трансфер из аэропорта', 't.r5b': 'По запросу', 't.r5c': 'До аэропорта около 10,5 км',
      't.r6a': 'Wi-Fi и парковка', 't.r6b': 'Бесплатно',
      't.r7a': 'Экскурсии', 't.r7b': 'Организуют на ресепшене',
      't.r8a': 'Оплата', 't.r8b': 'Наличными, в лари',
      'near.h': 'Как добраться',
      'near.b1': 'Пешком', 'near.b1i1': 'Метро «Исани»', 'near.b1i2': 'Собор Самеба',
      'near.b2': 'На метро от «Исани»', 'near.b2i1': 'Авлабари, Метехи, парк Рике', 'near.b2i2': 'Площадь Свободы, Старый город', 'near.b2i3': 'Проспект Руставели',
      'near.b3': 'Из аэропорта', 'near.b3i1': 'Трансфер от гостевого дома', 'near.b3i2': 'Такси',
      'near.b4': 'За город', 'near.b4i1': 'Экскурсии: Мцхета, Казбеги, Кахетия',
      'w.10': 'около 10 мин', 'w.17': 'около 1,7 км', 'w.s1': '1 станция', 'w.s2': '2 станции', 'w.s3': '3 станции',
      'w.req': 'по запросу', 'w.20': 'около 20 мин', 'w.desk': 'спросите на ресепшене',
      'faq.h': 'Перед приездом',
      'q1': 'Как забронировать?', 'a1': 'Напишите даты в WhatsApp: +995 568 77 17 86. Вам ответят и подтвердят комнату.',
      'q2': 'Как оплатить?', 'a2': 'Наличными, в лари, на месте.',
      'q3': 'Мой рейс ночью. Меня заселят?', 'a3': 'Да. Ресепшен работает 24 часа. Отметьте «Приеду поздно» в форме, чтобы вас ждали.',
      'q4': 'Как добраться из аэропорта?', 'a4': 'Закажите трансфер в форме или возьмите такси: около 20 минут.',
      'q5': 'Как доехать до Старого города?', 'a5': 'Десять минут пешком до метро «Исани», дальше две станции до площади Свободы.',
      'q6': 'Можно ли жить без взрослых до 18 лет?', 'a6': 'Нет. Гости младше 18 лет — только со взрослыми.',
      'c.say': 'Напишите о датах, позднем заезде или трансфере.',
      'c.addr': 'ул. Гуджарети, 35, Исани, Тбилиси',
      'f.addr': 'Адрес', 'f.pages': 'Разделы', 'f.phones': 'Телефон', 'f.pay': 'Оплата',
      'f.legal': 'Концепция сайта, подготовленная как предложение для Guest House Umbrella. Не официальный сайт.',
      msg: (a, b, n, g) => `Здравствуйте! Хочу комнату с ${a} по ${b} (${n} ноч.), гостей: ${g}. Есть свободные места?`,
      msgEmpty: (g) => `Здравствуйте! Хочу комнату, гостей: ${g}. Какие даты свободны?`,
      shuttle: ' Также нужен трансфер из аэропорта.',
      late: ' Приеду поздно ночью.'
    }
  };

  const nodes = [...document.querySelectorAll('[data-i18n]')];
  nodes.forEach(n => { n.dataset.en = n.textContent; });

  let lang = 'en';
  function setLang(l) {
    lang = T[l] ? l : 'en';
    doc.lang = lang;
    nodes.forEach(n => {
      const k = n.dataset.i18n;
      n.textContent = lang === 'en' ? n.dataset.en : (T[lang][k] ?? n.dataset.en);
    });
    document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    try { localStorage.setItem('umbrella-lang', lang); } catch (e) {}
    update();
  }
  document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

  const dIn = document.getElementById('d-in');
  const dOut = document.getElementById('d-out');
  const guests = document.getElementById('guests');
  const shuttle = document.getElementById('shuttle');
  const late = document.getElementById('late');
  const count = document.getElementById('n-count');
  const preview = document.getElementById('preview');
  const hidden = document.getElementById('wa-text');

  const iso = d => d.toISOString().slice(0, 10);
  const today = new Date();
  const plus = n => { const d = new Date(today); d.setDate(d.getDate() + n); return d; };
  dIn.min = iso(today);
  dIn.value = iso(plus(7));
  dOut.value = iso(plus(9));

  const RU = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
  const EN = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const fmt = v => {
    const [, m, d] = v.split('-').map(Number);
    if (lang === 'ka') return `${String(d).padStart(2, '0')}.${String(m).padStart(2, '0')}`;
    if (lang === 'ru') return `${d} ${RU[m - 1]}`;
    return `${d} ${EN[m - 1]}`;
  };

  function update() {
    if (dIn.value) dOut.min = dIn.value;
    let n = 0;
    if (dIn.value && dOut.value) n = Math.round((new Date(dOut.value) - new Date(dIn.value)) / 864e5);
    const ok = n > 0;
    count.textContent = ok ? n : '–';
    let text = ok ? T[lang].msg(fmt(dIn.value), fmt(dOut.value), n, guests.value) : T[lang].msgEmpty(guests.value);
    if (shuttle.checked) text += T[lang].shuttle;
    if (late.checked) text += T[lang].late;
    preview.textContent = text;
    hidden.value = text;
  }
  [dIn, dOut, guests, shuttle, late].forEach(el => el.addEventListener('input', update));
  [shuttle, late].forEach(el => el.addEventListener('change', update));

  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.15 });
  document.querySelectorAll('.reveal, .nearby, .faq').forEach(el => io.observe(el));

  let saved = 'en';
  try { saved = localStorage.getItem('umbrella-lang') || 'en'; } catch (e) {}
  setLang(saved);
})();
