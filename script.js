const root = document.documentElement;
const translations = {
  en: {
    'nav.about':'About','nav.work':'Work','nav.orbit':'Orbit','nav.contact':'Contact','available':'Available for 2026','scroll':'Scroll to observe',
    'hero.eyebrow':'Creative technologist / signal collector','hero.title':'I make<br><em>invisible</em><br>feel close.','hero.intro':'Interfaces, installations, and identities for people building a more curious future.','hero.cta':'Explore the work',
    'about.label':'The person behind the signal','about.title':'Not a designer.<br><span>A translator.</span>','about.lead':'I work where human instinct meets emerging technology — translating complex ideas into experiences you can feel in your hands.','about.body':'From a three-storey light instrument in Rotterdam to a quiet app for grieving families, my practice is built around one question: what should this make a person notice?','stats.years':'years making','stats.cities':'cities collaborated','stats.questions':'open questions',
    'work.label':'Selected transmissions','work.title':'Recent<br><span>fieldwork.</span>','project.one':'A living archive of coastal memory, built with 640 voices and one restless ocean.','project.two':'An identity system for a museum that lets visitors hear the future arriving.','project.three':'A generous operating system for public space, made with plants and patient code.',
    'orbit.label':'Current orbit','orbit.intro':'A small index of the things currently pulling my attention.','orbit.one':'Tactile interfaces','orbit.two':'Low-tech futures','orbit.three':'Listening as research','orbit.four':'Cities after dark',
    'quote':'Mira has the rare ability to make a room full of engineers talk about tenderness — and then turn that tenderness into a working system.','contact.label':'Open frequency','contact.title':'Have a signal?<br><span>Send it.</span>','contact.body':'Tell me what you are making, what is unclear, or what keeps returning in your dreams.','form.name':'Your name','form.email':'Email address','form.message':'A few words','form.submit':'Transmit message','footer':'Made between Los Angeles and everywhere the night train goes.'
  },
  ar: {
    'nav.about':'نبذة','nav.work':'الأعمال','nav.orbit':'المدار','nav.contact':'تواصل','available':'متاح لمشاريع ٢٠٢٦','scroll':'مرّر للمراقبة',
    'hero.eyebrow':'تقنية إبداعية / جامع إشارات','hero.title':'أجعل<br><em>اللامرئي</em><br>قريباً.','hero.intro':'واجهات وتركيبات وهويات لمن يبنون مستقبلاً أكثر فضولاً.','hero.cta':'استكشف الأعمال',
    'about.label':'الشخص خلف الإشارة','about.title':'لست مصممة.<br><span>أنا مترجمة.</span>','about.lead':'أعمل في المساحة التي تلتقي فيها الغريزة البشرية مع التقنية الناشئة، وأحوّل الأفكار المعقدة إلى تجارب يمكن لمسها.','about.body':'من آلة ضوء بارتفاع ثلاثة طوابق في روتردام إلى تطبيق هادئ للعائلات الثكلى، يدور عملي حول سؤال واحد: ما الذي ينبغي أن يلاحظه الإنسان؟','stats.years':'سنوات من الإبداع','stats.cities':'مدينة تعاونت معها','stats.questions':'سؤال مفتوح',
    'work.label':'إرسالات مختارة','work.title':'عمل<br><span>ميداني حديث.</span>','project.one':'أرشيف حي لذاكرة الساحل، بُني من ٦٤٠ صوتاً ومحيط لا يهدأ.','project.two':'نظام هوية لمتحف يتيح للزوار سماع المستقبل وهو يقترب.','project.three':'نظام تشغيل كريم للفضاء العام، صُنع بالنباتات والشفرة الصبورة.',
    'orbit.label':'مداري الحالي','orbit.intro':'فهرس صغير للأشياء التي تجذب انتباهي الآن.','orbit.one':'واجهات ملموسة','orbit.two':'مستقبل منخفض التقنية','orbit.three':'الإنصات كبحث','orbit.four':'المدن بعد حلول الظلام',
    'quote':'تمتلك ميرا قدرة نادرة على جعل غرفة مليئة بالمهندسين تتحدث عن الرقة، ثم تحويل تلك الرقة إلى نظام يعمل.','contact.label':'تردد مفتوح','contact.title':'لديك إشارة؟<br><span>أرسلها.</span>','contact.body':'أخبريني بما تصنعين، أو بما لا يزال غامضاً، أو بما يعود باستمرار في أحلامك.','form.name':'اسمك','form.email':'البريد الإلكتروني','form.message':'بضع كلمات','form.submit':'أرسل الرسالة','footer':'صُنع بين لوس أنجلوس وكل مكان يمر به قطار الليل.'
  }
};
const savedTheme = localStorage.getItem('mira-theme');
const savedLang = localStorage.getItem('mira-lang') || 'en';
if (savedTheme) root.dataset.theme = savedTheme;
function applyLanguage(lang) { document.querySelectorAll('[data-i18n]').forEach(el => { const value = translations[lang][el.dataset.i18n]; if (value) el.innerHTML = value; }); root.lang = lang; root.dir = lang === 'ar' ? 'rtl' : 'ltr'; localStorage.setItem('mira-lang', lang); }
applyLanguage(savedLang);
document.getElementById('langToggle').addEventListener('click', () => applyLanguage(root.lang === 'en' ? 'ar' : 'en'));
document.getElementById('themeToggle').addEventListener('click', () => { const theme = root.dataset.theme === 'dark' ? 'light' : 'dark'; root.dataset.theme = theme; localStorage.setItem('mira-theme', theme); });
const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav a');
const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`)); }), { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(section => sectionObserver.observe(section));
const form = document.getElementById('contactForm');
form.addEventListener('submit', event => { event.preventDefault(); const fields = [{ id:'name', message:'Please enter your name.' }, { id:'email', message:'Please enter a valid email.' }, { id:'message', message:'Please add a few words.' }]; let valid = true; fields.forEach(field => { const input = document.getElementById(field.id); const error = document.getElementById(`${field.id}Error`); let message = ''; if (!input.value.trim()) message = field.message; else if (field.id === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) message = field.message; error.textContent = message; input.setAttribute('aria-invalid', message ? 'true' : 'false'); if (message) valid = false; }); const status = document.getElementById('formStatus'); if (valid) { status.textContent = root.lang === 'ar' ? 'تم استلام الإشارة — سأعود إليك قريباً.' : 'Signal received — I will be in touch soon.'; form.reset(); } });