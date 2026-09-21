const STORAGE_KEY = "italiano-vivo-progress-v1";

const store = {
  load() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultState();
    } catch {
      return defaultState();
    }
  },
  save(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  },
};

function defaultState() {
  return { xp: 0, completed: {}, quizBest: 0, seenCards: 0 };
}

let state = store.load();

function speak(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "it-IT";
  u.rate = 0.92;
  const voices = speechSynthesis.getVoices();
  const it = voices.find((v) => v.lang.toLowerCase().startsWith("it"));
  if (it) u.voice = it;
  speechSynthesis.speak(u);
}

if (window.speechSynthesis) {
  speechSynthesis.onvoiceschanged = () => {};
}

function lessonProgress(id) {
  return state.completed[id] || 0;
}

function markLesson(id, pct) {
  state.completed[id] = Math.max(lessonProgress(id), pct);
  state.xp += 8;
  store.save(state);
  renderXp();
}

function addXp(n) {
  state.xp += n;
  store.save(state);
  renderXp();
}

function renderXp() {
  document.getElementById("xpChip").textContent = `${state.xp} XP`;
}

function path() {
  return location.hash.replace(/^#/, "") || "/";
}

function navActive() {
  const p = path();
  document.querySelectorAll(".nav a").forEach((a) => {
    const href = a.getAttribute("href").replace(/^#/, "");
    a.classList.toggle("active", href === p || (href !== "/" && p.startsWith(href)));
  });
}

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content;
}

function render() {
  const app = document.getElementById("app");
  const p = path();
  navActive();
  renderXp();

  if (p === "/") app.replaceChildren(viewHome());
  else if (p === "/lessons") app.replaceChildren(viewLessons());
  else if (p.startsWith("/lesson/")) app.replaceChildren(viewLesson(p.split("/")[2]));
  else if (p === "/flashcards") app.replaceChildren(viewFlash());
  else if (p === "/quiz") app.replaceChildren(viewQuiz());
  else if (p === "/phrases") app.replaceChildren(viewPhrases());
  else app.replaceChildren(viewHome());
}

function viewHome() {
  const done = COURSE.lessons.filter((l) => lessonProgress(l.id) >= 100).length;
  const node = el(`
    <section>
      <div class="hero">
        <div>
          <p class="meta">Corso A1 · Tiếng Ý cho người Việt</p>
          <h1>Impara l’italiano<br /><em>con piacere.</em></h1>
          <p class="lead">${COURSE.hero.subtitle}</p>
          <div class="actions">
            <a class="btn" href="#/lessons" data-nav>Bắt đầu bài học</a>
            <a class="btn secondary" href="#/quiz" data-nav>Làm quiz nhanh</a>
          </div>
        </div>
        <aside class="hero-card">
          <p class="meta">Tiến độ của bạn</p>
          <div class="stats">
            <div class="stat"><b>${state.xp}</b><span>điểm XP</span></div>
            <div class="stat"><b>${done}/${COURSE.lessons.length}</b><span>bài hoàn thành</span></div>
            <div class="stat"><b>${state.quizBest}%</b><span>quiz tốt nhất</span></div>
          </div>
          <p class="meta" style="margin-top:16px">Mẹo phát âm: nhấn nút loa để nghe giọng Ý. C = “k” trước a/o/u, “ch” trước e/i.</p>
        </aside>
      </div>
      <h2 class="section-title">Chữ & âm hay gặp</h2>
      <div class="alpha">
        ${COURSE.alphabet
          .map(
            (a) => `
          <article>
            <strong>${a.letter}</strong>
            <div class="meta">${a.sound}</div>
            <p style="margin:8px 0 0"><em>${a.example}</em> — ${a.meaning}</p>
          </article>`
          )
          .join("")}
      </div>
    </section>
  `);
  return node;
}

function lessonCard(l) {
  const pct = lessonProgress(l.id);
  return `
    <a class="card" href="#/lesson/${l.id}" data-nav>
      <div class="meta">${l.icon} · ${l.level} · ${l.minutes} phút</div>
      <h3>${l.title}</h3>
      <p class="meta">${l.blurb}</p>
      <div class="progress-bar" aria-hidden="true"><span style="width:${pct}%"></span></div>
      <span class="meta">${pct}% hoàn thành</span>
    </a>`;
}

function viewLessons() {
  return el(`
    <section>
      <h1 class="section-title">Bài học</h1>
      <p class="lead">Chọn chủ đề, nghe phát âm, rồi đánh dấu đã học.</p>
      <div class="grid">${COURSE.lessons.map(lessonCard).join("")}</div>
    </section>
  `);
}

function viewLesson(id) {
  const lesson = COURSE.lessons.find((l) => l.id === id);
  if (!lesson) return viewLessons();
  const wrap = document.createElement("section");
  wrap.innerHTML = `
    <p class="meta"><a href="#/lessons" data-nav>← Tất cả bài học</a></p>
    <h1 class="section-title">${lesson.icon} ${lesson.title}</h1>
    <p class="lead">${lesson.blurb} · ${lesson.level}</p>
    <div class="hero-card" id="wordList"></div>
    <div class="actions" style="margin-top:16px">
      <button class="btn" id="completeBtn">Đánh dấu đã học (+XP)</button>
      <a class="btn secondary" href="#/flashcards" data-nav>Ôn flashcard</a>
    </div>
  `;
  const list = wrap.querySelector("#wordList");
  lesson.words.forEach((w) => {
    const row = document.createElement("div");
    row.className = "word-row";
    row.innerHTML = `
      <div>
        <p class="word-it">${w.it}</p>
        <p class="word-vi">${w.vi}</p>
        ${w.note ? `<p class="note">${w.note}</p>` : ""}
      </div>
      <button class="speak" type="button" aria-label="Phát âm">🔊</button>
    `;
    row.querySelector(".speak").addEventListener("click", () => speak(w.it));
    list.appendChild(row);
  });
  wrap.querySelector("#completeBtn").addEventListener("click", () => {
    markLesson(lesson.id, 100);
    wrap.querySelector("#completeBtn").textContent = "Đã lưu tiến độ";
    wrap.querySelector("#completeBtn").disabled = true;
  });
  return wrap;
}

function viewFlash() {
  const words = shuffle(allWords());
  let i = 0;
  let showVi = false;
  const awarded = new Set();
  const wrap = document.createElement("section");
  wrap.innerHTML = `
    <h1 class="section-title">Flashcard</h1>
    <p class="lead">Nhấn thẻ để lật nghĩa. Nghe rồi tự nói lại.</p>
    <div class="card flash" id="card"></div>
    <p class="meta" id="count"></p>
    <div class="actions">
      <button class="btn secondary" id="prev">Trước</button>
      <button class="btn" id="speak">Nghe</button>
      <button class="btn secondary" id="next">Tiếp</button>
    </div>
  `;
  const card = wrap.querySelector("#card");
  const count = wrap.querySelector("#count");
  function draw() {
    const w = words[i];
    showVi = false;
    card.innerHTML = `<p class="meta">${w.lessonTitle}</p><p class="it">${w.it}</p><p class="meta">Nhấn để xem nghĩa</p>`;
    count.textContent = `${i + 1} / ${words.length}`;
  }
  card.addEventListener("click", () => {
    const w = words[i];
    showVi = !showVi;
    card.innerHTML = showVi
      ? `<p class="meta">${w.lessonTitle}</p><p class="it">${w.vi}</p><p class="word-it">${w.it}</p>`
      : `<p class="meta">${w.lessonTitle}</p><p class="it">${w.it}</p><p class="meta">Nhấn để xem nghĩa</p>`;
    if (showVi && !awarded.has(i)) {
      awarded.add(i);
      state.seenCards += 1;
      addXp(1);
    }
  });
  wrap.querySelector("#next").addEventListener("click", () => {
    i = (i + 1) % words.length;
    draw();
  });
  wrap.querySelector("#prev").addEventListener("click", () => {
    i = (i - 1 + words.length) % words.length;
    draw();
  });
  wrap.querySelector("#speak").addEventListener("click", () => speak(words[i].it));
  draw();
  return wrap;
}

function viewQuiz() {
  const questions = shuffle(quizBank()).slice(0, 8);
  let i = 0;
  let score = 0;
  let locked = false;
  const wrap = document.createElement("section");
  wrap.innerHTML = `
    <h1 class="section-title">Quiz nhanh</h1>
    <p class="lead" id="qPrompt"></p>
    <div class="quiz-options" id="opts"></div>
    <p class="meta" id="qCount"></p>
    <div class="actions">
      <button class="btn" id="nextQ" disabled>Câu tiếp</button>
    </div>
  `;
  const prompt = wrap.querySelector("#qPrompt");
  const opts = wrap.querySelector("#opts");
  const next = wrap.querySelector("#nextQ");
  const qCount = wrap.querySelector("#qCount");

  function finish() {
    const pct = Math.round((score / questions.length) * 100);
    state.quizBest = Math.max(state.quizBest, pct);
    addXp(score * 5);
    wrap.innerHTML = `
      <h1 class="section-title">Kết quả</h1>
      <p class="result">Bạn đúng ${score}/${questions.length} (${pct}%).</p>
      <p class="lead">Điểm quiz tốt nhất: ${state.quizBest}%.</p>
      <div class="actions">
        <a class="btn" href="#/quiz" data-nav>Làm lại</a>
        <a class="btn secondary" href="#/lessons" data-nav>Học tiếp</a>
      </div>
    `;
  }

  function draw() {
    locked = false;
    const q = questions[i];
    prompt.textContent = `“${q.prompt}” nghĩa là gì?`;
    qCount.textContent = `Câu ${i + 1}/${questions.length}`;
    opts.innerHTML = "";
    next.disabled = true;
    q.options.forEach((opt) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = opt;
      b.addEventListener("click", () => {
        if (locked) return;
        locked = true;
        const ok = opt === q.answer;
        if (ok) score += 1;
        [...opts.children].forEach((el) => {
          if (el.textContent === q.answer) el.classList.add("correct");
          else if (el === b && !ok) el.classList.add("wrong");
        });
        next.disabled = false;
        speak(q.prompt);
      });
      opts.appendChild(b);
    });
  }

  next.addEventListener("click", () => {
    i += 1;
    if (i >= questions.length) finish();
    else draw();
  });
  draw();
  return wrap;
}

function viewPhrases() {
  const wrap = document.createElement("section");
  wrap.innerHTML = `
    <h1 class="section-title">Mẫu câu sống</h1>
    <p class="lead">Những câu dùng ngay ở quán cà phê, nhà hàng và khi lạc đường.</p>
    <div class="hero-card" id="list"></div>
  `;
  const list = wrap.querySelector("#list");
  COURSE.phrases.forEach((p) => {
    const row = document.createElement("div");
    row.className = "word-row";
    row.innerHTML = `
      <div>
        <p class="word-it">${p.it}</p>
        <p class="word-vi">${p.vi}</p>
      </div>
      <button class="speak" type="button" aria-label="Phát âm">🔊</button>
    `;
    row.querySelector(".speak").addEventListener("click", () => speak(p.it));
    list.appendChild(row);
  });
  return wrap;
}

window.addEventListener("hashchange", render);
window.addEventListener("load", render);
