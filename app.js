// ===========================
// DATA: Topics & Vocabulary
// ===========================
const TOPICS = [
  {
    id: 'greetings',
    name: 'Chào hỏi',
    emoji: '👋',
    color: 'green',
    words: [
      { it: 'Ciao',         ph: '[ˈtʃaːo]',      vn: 'Xin chào / Tạm biệt',   ex: 'Ciao, come stai? — Xin chào, bạn khỏe không?' },
      { it: 'Buongiorno',   ph: '[ˌbwɔnˈdʒorno]', vn: 'Chào buổi sáng / Xin chào', ex: 'Buongiorno, signore! — Chào buổi sáng, thưa ông!' },
      { it: 'Buonasera',    ph: '[ˌbwɔnaˈseːra]', vn: 'Chào buổi tối',          ex: 'Buonasera a tutti! — Chào buổi tối mọi người!' },
      { it: 'Buonanotte',   ph: '[ˌbwɔnaˈnɔtte]', vn: 'Chúc ngủ ngon',          ex: 'Buonanotte, a domani! — Chúc ngủ ngon, hẹn gặp lại!' },
      { it: 'Arrivederci',  ph: '[arˌriveˈdertʃi]', vn: 'Tạm biệt (trang trọng)',  ex: 'Arrivederci e grazie! — Tạm biệt và cảm ơn!' },
      { it: 'Per favore',   ph: '[per faˈvoːre]',  vn: 'Làm ơn / Xin vui lòng', ex: 'Un caffè, per favore. — Một cà phê, làm ơn.' },
      { it: 'Grazie',       ph: '[ˈgraːtsje]',     vn: 'Cảm ơn',                 ex: 'Grazie mille! — Cảm ơn rất nhiều!' },
      { it: 'Prego',        ph: '[ˈpreːɡo]',       vn: 'Không có gì / Xin mời',  ex: 'Grazie! — Prego! — Cảm ơn! — Không có gì!' },
      { it: 'Scusi',        ph: '[ˈskuːzi]',       vn: 'Xin lỗi (trang trọng)',  ex: 'Scusi, dove è il bagno? — Xin lỗi, nhà vệ sinh ở đâu?' },
      { it: 'Mi dispiace',  ph: '[mi disˈpjaːtʃe]', vn: 'Tôi rất tiếc',         ex: 'Mi dispiace molto! — Tôi rất tiếc!' },
    ]
  },
  {
    id: 'numbers',
    name: 'Số đếm',
    emoji: '🔢',
    color: 'purple',
    words: [
      { it: 'Uno',     ph: '[ˈuːno]',   vn: 'Một (1)',    ex: 'Ho un figlio. — Tôi có một đứa con.' },
      { it: 'Due',     ph: '[ˈduːe]',   vn: 'Hai (2)',    ex: 'Due biglietti, per favore. — Hai vé, làm ơn.' },
      { it: 'Tre',     ph: '[ˈtrɛ]',    vn: 'Ba (3)',     ex: 'Sono le tre. — Bây giờ là 3 giờ.' },
      { it: 'Quattro', ph: '[ˈkwattro]', vn: 'Bốn (4)',   ex: 'Quattro stagioni. — Bốn mùa.' },
      { it: 'Cinque',  ph: '[ˈtʃiŋkwe]', vn: 'Năm (5)',  ex: 'Cinque minuti. — Năm phút.' },
      { it: 'Sei',     ph: '[ˈsɛi]',    vn: 'Sáu (6)',    ex: 'Sei euro. — Sáu euro.' },
      { it: 'Sette',   ph: '[ˈsette]',  vn: 'Bảy (7)',    ex: 'Sette giorni. — Bảy ngày.' },
      { it: 'Otto',    ph: '[ˈɔtto]',   vn: 'Tám (8)',    ex: 'Otto persone. — Tám người.' },
      { it: 'Nove',    ph: '[ˈnɔːve]',  vn: 'Chín (9)',   ex: 'Sono le nove. — Bây giờ là 9 giờ.' },
      { it: 'Dieci',   ph: '[ˈdjɛːtʃi]', vn: 'Mười (10)', ex: 'Dieci euro. — Mười euro.' },
    ]
  },
  {
    id: 'colors',
    name: 'Màu sắc',
    emoji: '🎨',
    color: 'red',
    words: [
      { it: 'Rosso',   ph: '[ˈrɔsso]',  vn: 'Màu đỏ',    ex: 'La rosa è rossa. — Hoa hồng màu đỏ.' },
      { it: 'Verde',   ph: '[ˈvɛrde]',  vn: 'Màu xanh lá', ex: 'L\'erba è verde. — Cỏ màu xanh lá.' },
      { it: 'Bianco',  ph: '[ˈbjaŋko]', vn: 'Màu trắng',  ex: 'La neve è bianca. — Tuyết màu trắng.' },
      { it: 'Nero',    ph: '[ˈneːro]',  vn: 'Màu đen',    ex: 'Il gatto è nero. — Con mèo màu đen.' },
      { it: 'Blu',     ph: '[ˈbluː]',   vn: 'Màu xanh dương', ex: 'Il cielo è blu. — Bầu trời màu xanh.' },
      { it: 'Giallo',  ph: '[ˈdʒallo]', vn: 'Màu vàng',   ex: 'Il sole è giallo. — Mặt trời màu vàng.' },
      { it: 'Arancione', ph: '[aranˈtʃoːne]', vn: 'Màu cam', ex: 'L\'arancia è arancione. — Cam màu cam.' },
      { it: 'Rosa',    ph: '[ˈroːza]',  vn: 'Màu hồng',   ex: 'La maglietta è rosa. — Áo thun màu hồng.' },
      { it: 'Viola',   ph: '[ˈvjɔːla]', vn: 'Màu tím',    ex: 'Il fiore è viola. — Bông hoa màu tím.' },
      { it: 'Grigio',  ph: '[ˈɡriːdʒo]', vn: 'Màu xám',  ex: 'Il cielo è grigio. — Bầu trời xám.' },
    ]
  },
  {
    id: 'food',
    name: 'Ẩm thực',
    emoji: '🍕',
    color: 'orange',
    words: [
      { it: 'Pizza',      ph: '[ˈpittsa]',   vn: 'Pizza',          ex: 'Una pizza margherita, per favore!' },
      { it: 'Pasta',      ph: '[ˈpasta]',    vn: 'Mì ống / Pasta',  ex: 'La pasta è pronta! — Pasta đã sẵn sàng!' },
      { it: 'Caffè',      ph: '[kafˈfɛ]',    vn: 'Cà phê',          ex: 'Un caffè, per favore. — Một cà phê làm ơn.' },
      { it: 'Gelato',     ph: '[dʒeˈlaːto]', vn: 'Kem Ý',           ex: 'Il gelato è delizioso! — Kem thật ngon!' },
      { it: 'Vino',       ph: '[ˈviːno]',    vn: 'Rượu vang',       ex: 'Un bicchiere di vino. — Một ly rượu vang.' },
      { it: 'Pane',       ph: '[ˈpaːne]',    vn: 'Bánh mì',         ex: 'Il pane fresco. — Bánh mì tươi.' },
      { it: 'Acqua',      ph: '[ˈakkwa]',    vn: 'Nước',            ex: 'Un\'acqua minerale. — Nước khoáng.' },
      { it: 'Formaggio',  ph: '[forˈmaddʒo]', vn: 'Phô mai',        ex: 'Il parmigiano è ottimo! — Phô mai parmesan thật tuyệt!' },
      { it: 'Frutta',     ph: '[ˈfrutta]',   vn: 'Trái cây',        ex: 'Mangio frutta ogni giorno. — Tôi ăn trái cây mỗi ngày.' },
      { it: 'Dolce',      ph: '[ˈdoltʃe]',   vn: 'Bánh ngọt / Ngọt', ex: 'Vuoi un dolce? — Bạn muốn ăn bánh ngọt không?' },
    ]
  },
  {
    id: 'family',
    name: 'Gia đình',
    emoji: '👨‍👩‍👧',
    color: 'pink',
    words: [
      { it: 'Famiglia',  ph: '[faˈmiʎʎa]',  vn: 'Gia đình',   ex: 'La mia famiglia è grande. — Gia đình tôi đông đúc.' },
      { it: 'Madre',     ph: '[ˈmaːdre]',   vn: 'Mẹ',         ex: 'Mia madre cucina bene. — Mẹ tôi nấu ăn ngon.' },
      { it: 'Padre',     ph: '[ˈpaːdre]',   vn: 'Cha / Bố',   ex: 'Mio padre lavora. — Bố tôi đi làm.' },
      { it: 'Fratello',  ph: '[fraˈtɛllo]', vn: 'Anh / Em trai', ex: 'Ho un fratello. — Tôi có một người anh trai.' },
      { it: 'Sorella',   ph: '[soˈrɛlla]',  vn: 'Chị / Em gái', ex: 'Mia sorella è bella. — Chị tôi xinh đẹp.' },
      { it: 'Nonno',     ph: '[ˈnɔnno]',    vn: 'Ông',         ex: 'Mio nonno è anziano. — Ông tôi đã lớn tuổi.' },
      { it: 'Nonna',     ph: '[ˈnɔnna]',    vn: 'Bà',          ex: 'La nonna fa la torta. — Bà làm bánh.' },
      { it: 'Figlio',    ph: '[ˈfiʎʎo]',    vn: 'Con trai',    ex: 'Ho un figlio di 5 anni. — Tôi có con trai 5 tuổi.' },
      { it: 'Figlia',    ph: '[ˈfiʎʎa]',    vn: 'Con gái',     ex: 'La mia figlia studia. — Con gái tôi đang học.' },
      { it: 'Amico',     ph: '[aˈmiːko]',   vn: 'Bạn bè (nam)', ex: 'È il mio migliore amico. — Đây là người bạn thân nhất của tôi.' },
    ]
  },
  {
    id: 'body',
    name: 'Cơ thể',
    emoji: '🫀',
    color: 'blue',
    words: [
      { it: 'Testa',   ph: '[ˈtɛsta]',  vn: 'Đầu',      ex: 'Ho mal di testa. — Tôi bị đau đầu.' },
      { it: 'Occhio',  ph: '[ˈɔkkjo]',  vn: 'Mắt',      ex: 'Ho gli occhi marroni. — Tôi có mắt nâu.' },
      { it: 'Naso',    ph: '[ˈnaːzo]',  vn: 'Mũi',      ex: 'Ho il naso freddo. — Mũi tôi lạnh.' },
      { it: 'Bocca',   ph: '[ˈbɔkka]',  vn: 'Miệng',    ex: 'Apri la bocca! — Mở miệng ra!' },
      { it: 'Orecchio',ph: '[oˈrekkjo]', vn: 'Tai',      ex: 'Ho mal d\'orecchio. — Tôi bị đau tai.' },
      { it: 'Mano',    ph: '[ˈmaːno]',  vn: 'Tay',      ex: 'Lavati le mani. — Rửa tay đi.' },
      { it: 'Piede',   ph: '[ˈpjɛːde]', vn: 'Chân',     ex: 'Ho il piede rotto. — Tôi gãy chân.' },
      { it: 'Cuore',   ph: '[ˈkwɔːre]', vn: 'Tim',      ex: 'Il mio cuore batte forte. — Tim tôi đập mạnh.' },
      { it: 'Schiena', ph: '[ˈskjɛːna]', vn: 'Lưng',    ex: 'Ho mal di schiena. — Tôi bị đau lưng.' },
      { it: 'Gambe',   ph: '[ˈɡambe]',  vn: 'Đôi chân / Cẳng chân', ex: 'Le gambe mi fanno male. — Đôi chân tôi bị đau.' },
    ]
  },
  {
    id: 'travel',
    name: 'Du lịch',
    emoji: '✈️',
    color: 'teal',
    words: [
      { it: 'Aeroporto', ph: '[aeroˈpɔrto]', vn: 'Sân bay',      ex: 'L\'aeroporto è lontano. — Sân bay ở xa.' },
      { it: 'Hotel',     ph: '[oˈtel]',       vn: 'Khách sạn',    ex: 'Ho prenotato l\'hotel. — Tôi đã đặt khách sạn.' },
      { it: 'Treno',     ph: '[ˈtrɛːno]',     vn: 'Tàu hỏa',      ex: 'Il treno è in ritardo. — Tàu bị trễ.' },
      { it: 'Biglietto', ph: '[biʎˈʎetto]',   vn: 'Vé',           ex: 'Quanto costa il biglietto? — Vé giá bao nhiêu?' },
      { it: 'Mappa',     ph: '[ˈmappa]',       vn: 'Bản đồ',       ex: 'Hai una mappa? — Bạn có bản đồ không?' },
      { it: 'Destra',    ph: '[ˈdɛstra]',      vn: 'Bên phải',     ex: 'Gira a destra. — Rẽ bên phải.' },
      { it: 'Sinistra',  ph: '[siˈnistra]',    vn: 'Bên trái',     ex: 'Gira a sinistra. — Rẽ bên trái.' },
      { it: 'Museo',     ph: '[muˈzɛːo]',      vn: 'Bảo tàng',     ex: 'Il museo è bello. — Bảo tàng rất đẹp.' },
      { it: 'Piazza',    ph: '[ˈpjattsa]',     vn: 'Quảng trường', ex: 'Ci vediamo in piazza. — Hẹn gặp ở quảng trường.' },
      { it: 'Farmacia',  ph: '[farˈmatʃa]',    vn: 'Nhà thuốc',    ex: 'Dov\'è la farmacia? — Nhà thuốc ở đâu?' },
    ]
  },
  {
    id: 'weather',
    name: 'Thời tiết',
    emoji: '⛅',
    color: 'gold',
    words: [
      { it: 'Sole',       ph: '[ˈsoːle]',     vn: 'Nắng / Mặt trời', ex: 'C\'è il sole oggi! — Hôm nay trời nắng!' },
      { it: 'Pioggia',    ph: '[ˈpjɔddʒa]',  vn: 'Mưa',             ex: 'Fuori piove. — Ngoài trời đang mưa.' },
      { it: 'Neve',       ph: '[ˈneːve]',     vn: 'Tuyết',           ex: 'Nevica oggi. — Hôm nay có tuyết.' },
      { it: 'Vento',      ph: '[ˈvɛnto]',     vn: 'Gió',             ex: 'C\'è molto vento. — Gió rất mạnh.' },
      { it: 'Nuvoloso',   ph: '[nuvoˈloːzo]', vn: 'Nhiều mây',       ex: 'Il cielo è nuvoloso. — Bầu trời nhiều mây.' },
      { it: 'Caldo',      ph: '[ˈkaldo]',     vn: 'Nóng',            ex: 'Fa molto caldo! — Nóng quá!' },
      { it: 'Freddo',     ph: '[ˈfrɛddo]',    vn: 'Lạnh',            ex: 'Fa freddo oggi. — Hôm nay lạnh.' },
      { it: 'Temporale',  ph: '[tempoˈraːle]', vn: 'Giông bão',      ex: 'C\'è un temporale. — Trời đang có giông bão.' },
      { it: 'Umido',      ph: '[ˈuːmido]',    vn: 'Ẩm ướt',          ex: 'È molto umido oggi. — Hôm nay rất ẩm ướt.' },
      { it: 'Nebbia',     ph: '[ˈnɛbbja]',    vn: 'Sương mù',        ex: 'C\'è la nebbia stamattina. — Sáng nay có sương mù.' },
    ]
  }
];

// ===========================
// STATE
// ===========================
let state = {
  currentSection: 'home',
  currentTopicId: null,
  currentCardIdx: 0,
  isFlipped: false,
  knownWords: [],   // indices of known words in current topic session
  progress: {},     // { topicId: { known: Set of word.it } }
  streak: 0,
  lastLearnedDate: null,
};

// Load from localStorage
function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem('impara_state') || '{}');
    if (saved.progress)         state.progress = saved.progress;
    if (saved.streak != null)   state.streak = saved.streak;
    if (saved.lastLearnedDate)  state.lastLearnedDate = saved.lastLearnedDate;
  } catch(e) {}
  // Convert arrays back to Sets
  Object.keys(state.progress).forEach(topicId => {
    if (Array.isArray(state.progress[topicId].known)) {
      state.progress[topicId].known = new Set(state.progress[topicId].known);
    }
  });
}

function saveState() {
  const toSave = {
    progress: {},
    streak: state.streak,
    lastLearnedDate: state.lastLearnedDate,
  };
  Object.keys(state.progress).forEach(topicId => {
    toSave.progress[topicId] = {
      known: [...state.progress[topicId].known]
    };
  });
  localStorage.setItem('impara_state', JSON.stringify(toSave));
}

// ===========================
// SECTION NAVIGATION
// ===========================
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.add('section--hidden'));
  const el = document.getElementById(id === 'topics' ? 'topics' : id === 'home' ? 'home' : id);
  if (el) el.classList.remove('section--hidden');

  // Update nav
  document.querySelectorAll('.nav__link').forEach(l => l.classList.remove('active'));
  const activeLink = document.querySelector(`.nav__link[onclick*="'${id}'"]`);
  if (activeLink) activeLink.classList.add('active');

  state.currentSection = id;

  if (id === 'home')     renderHomeTopics();
  if (id === 'topics')   renderTopicsMain();
  if (id === 'progress') renderProgress();
}

// ===========================
// RENDER TOPICS
// ===========================
function getTopicProgress(topicId) {
  if (!state.progress[topicId]) return 0;
  const topic = TOPICS.find(t => t.id === topicId);
  const known = state.progress[topicId].known;
  return Math.round((known.size / topic.words.length) * 100);
}

function renderTopicCard(topic, containerId) {
  const pct = getTopicProgress(topic.id);
  return `
    <div class="topic-card" data-color="${topic.color}" onclick="startTopic('${topic.id}')" id="card-${topic.id}-${containerId}">
      <span class="topic-card__emoji">${topic.emoji}</span>
      <div class="topic-card__name">${topic.name}</div>
      <div class="topic-card__count">${topic.words.length} từ vựng</div>
      <div class="topic-card__progress">
        <div class="topic-card__progress-fill" style="width:${pct}%"></div>
      </div>
      <div class="topic-card__footer">
        <span class="topic-card__pct">${pct}% hoàn thành</span>
        <span class="topic-card__cta">${pct === 100 ? '✅ Xem lại' : 'Học ngay →'}</span>
      </div>
    </div>
  `;
}

function renderHomeTopics() {
  const container = document.getElementById('topicsGrid');
  if (!container) return;
  container.innerHTML = TOPICS.map(t => renderTopicCard(t, 'home')).join('');
}

function renderTopicsMain() {
  const container = document.getElementById('topicsGridMain');
  if (!container) return;
  container.innerHTML = TOPICS.map(t => renderTopicCard(t, 'main')).join('');
}

// ===========================
// FLASHCARD LOGIC
// ===========================
function startTopic(topicId) {
  state.currentTopicId = topicId;
  state.currentCardIdx = 0;
  state.isFlipped = false;
  state.knownWords = [];

  if (!state.progress[topicId]) {
    state.progress[topicId] = { known: new Set() };
  }

  // Show flashcard section
  document.querySelectorAll('.section').forEach(s => s.classList.add('section--hidden'));
  document.getElementById('flashcard-section').classList.remove('section--hidden');

  // Reset UI
  document.getElementById('completionModal').classList.remove('is-open');
  document.getElementById('knownTags').innerHTML = '';
  document.getElementById('knownWrap').style.display = 'none';

  const topic = TOPICS.find(t => t.id === topicId);
  document.getElementById('cardTopicEmoji').textContent = topic.emoji;
  document.getElementById('cardTopicName').textContent = topic.name;
  document.getElementById('totalCards').textContent = topic.words.length;

  renderCard();
}

function renderCard() {
  const topic = TOPICS.find(t => t.id === state.currentTopicId);
  const word = topic.words[state.currentCardIdx];
  const total = topic.words.length;

  // Reset flip
  state.isFlipped = false;
  const card = document.getElementById('flashcard');
  card.classList.remove('is-flipped');

  // Update content
  document.getElementById('cardWordIT').textContent = word.it;
  document.getElementById('cardPhonetic').textContent = word.ph;
  document.getElementById('cardWordVN').textContent = word.vn;
  document.getElementById('cardExample').textContent = word.ex;

  // Counter
  document.getElementById('currentCard').textContent = state.currentCardIdx + 1;

  // Progress bar
  const pct = ((state.currentCardIdx) / total) * 100;
  document.getElementById('progressBar').style.width = pct + '%';

  // Animate in
  const scene = document.getElementById('flashcardScene');
  scene.style.animation = 'none';
  requestAnimationFrame(() => {
    scene.style.animation = 'popIn 0.35s ease';
  });
}

function flipCard() {
  state.isFlipped = !state.isFlipped;
  const card = document.getElementById('flashcard');
  card.classList.toggle('is-flipped', state.isFlipped);
}

function nextCard(known) {
  const topic = TOPICS.find(t => t.id === state.currentTopicId);
  const word = topic.words[state.currentCardIdx];
  const total = topic.words.length;

  if (known) {
    state.progress[state.currentTopicId].known.add(word.it);
    state.knownWords.push(word.it);
    updateKnownTags();
    updateStreak();
    saveState();
  }

  if (state.currentCardIdx >= total - 1) {
    // Done!
    showCompletionModal();
    return;
  }

  state.currentCardIdx++;
  renderCard();
}

function prevCard() {
  if (state.currentCardIdx <= 0) return;
  state.currentCardIdx--;
  renderCard();
}

function updateKnownTags() {
  const wrap = document.getElementById('knownWrap');
  const tags = document.getElementById('knownTags');
  wrap.style.display = 'block';
  tags.innerHTML = state.knownWords.map(w =>
    `<span class="known-tag">${w}</span>`
  ).join('');
}

function updateStreak() {
  const today = new Date().toDateString();
  if (state.lastLearnedDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (state.lastLearnedDate === yesterday.toDateString()) {
      state.streak++;          // Hôm qua có học → tiếp nối streak
    } else {
      state.streak = 1;        // Bị gián đoạn → reset về 1
    }
    state.lastLearnedDate = today;
  }
  document.getElementById('streakCount').textContent = state.streak;
}

function showCompletionModal() {
  const topic = TOPICS.find(t => t.id === state.currentTopicId);
  const total = topic.words.length;
  const known = state.knownWords.length;

  // Update progress bar to 100%
  document.getElementById('progressBar').style.width = '100%';

  document.getElementById('modalKnown').textContent = known;
  document.getElementById('modalTotal').textContent = total;
  document.getElementById('modalDesc').textContent = known === total
    ? `Bạn đã nhớ hết tất cả ${total} từ trong chủ đề "${topic.name}"! Xuất sắc! 🌟`
    : `Bạn đã nhớ ${known}/${total} từ trong chủ đề "${topic.name}". Tiếp tục luyện tập nhé!`;

  document.getElementById('completionModal').classList.add('is-open');

  saveState();
}

function restartTopic() {
  document.getElementById('completionModal').classList.remove('is-open');
  startTopic(state.currentTopicId);
}

// ===========================
// PROGRESS PAGE
// ===========================
function renderProgress() {
  // Total learned
  let totalLearned = 0;
  let topicsCompleted = 0;
  Object.keys(state.progress).forEach(topicId => {
    const size = state.progress[topicId].known.size;
    totalLearned += size;
    const topic = TOPICS.find(t => t.id === topicId);
    if (topic && size === topic.words.length) topicsCompleted++;
  });

  document.getElementById('streakDisplay').textContent = state.streak;
  document.getElementById('totalLearnedDisplay').textContent = totalLearned;
  document.getElementById('topicsCompletedDisplay').textContent = topicsCompleted;

  // Topic list
  const list = document.getElementById('topicProgressList');
  list.innerHTML = TOPICS.map(topic => {
    const pct = getTopicProgress(topic.id);
    const known = state.progress[topic.id] ? state.progress[topic.id].known.size : 0;
    return `
      <div class="topic-progress-item">
        <span class="tpi-emoji">${topic.emoji}</span>
        <div class="tpi-info">
          <div class="tpi-name">${topic.name}</div>
          <div style="display:flex;align-items:center;gap:0.75rem;margin-top:0.3rem;">
            <div class="tpi-bar-wrap">
              <div class="tpi-bar" style="width:${pct}%"></div>
            </div>
          </div>
        </div>
        <div class="tpi-pct">${known}/${topic.words.length}</div>
        <button class="btn btn--primary" style="padding:0.5rem 1rem;font-size:0.82rem;" onclick="startTopic('${topic.id}')">
          ${pct === 100 ? '🔄 Xem lại' : '▶ Học'}
        </button>
      </div>
    `;
  }).join('');
}

// ===========================
// KEYBOARD SHORTCUTS
// ===========================
document.addEventListener('keydown', (e) => {
  const isFlashcard = !document.getElementById('flashcard-section').classList.contains('section--hidden');
  if (!isFlashcard) return;

  switch(e.key) {
    case ' ':
    case 'ArrowUp':
      e.preventDefault();
      flipCard();
      break;
    case 'ArrowRight':
      nextCard(true);
      break;
    case 'ArrowLeft':
      if (e.shiftKey) { prevCard(); } else { nextCard(false); }
      break;
  }
});

// ===========================
// INIT
// ===========================
loadState();
document.getElementById('streakCount').textContent = state.streak;
showSection('home');
