const COURSE = {
  hero: {
    title: "Parliamo italiano",
    subtitle: "Học tiếng Ý từ chào hỏi đến đi ăn, du lịch và động từ cơ bản — nghe, lặp lại, rồi kiểm tra ngay.",
  },
  alphabet: [
    { letter: "A a", sound: "a", example: "amore", meaning: "tình yêu" },
    { letter: "C c", sound: "k / ch", example: "ciao / cena", meaning: "xin chào / bữa tối" },
    { letter: "G g", sound: "g / dʒ", example: "gatto / gelato", meaning: "mèo / kem" },
    { letter: "H h", sound: "câm", example: "ho", meaning: "tôi có" },
    { letter: "Gn gn", sound: "ɲ (nh)", example: "gnocchi", meaning: "bánh gnocchi" },
    { letter: "Gli gli", sound: "ʎ (ly)", example: "famiglia", meaning: "gia đình" },
  ],
  lessons: [
    {
      id: "saluti",
      title: "Chào hỏi",
      level: "A1",
      minutes: 8,
      icon: "👋",
      blurb: "Ciao, buongiorno và cách xưng hô lịch sự.",
      words: [
        { it: "Ciao", vi: "Xin chào / Tạm biệt (thân mật)", note: "Dùng với bạn bè." },
        { it: "Buongiorno", vi: "Chào buổi sáng / xin chào ban ngày", note: "Lịch sự hơn ciao." },
        { it: "Buonasera", vi: "Chào buổi tối", note: "Từ khoảng chiều muộn." },
        { it: "Buonanotte", vi: "Chúc ngủ ngon", note: "Khi chia tay buổi tối." },
        { it: "Arrivederci", vi: "Tạm biệt", note: "Lịch sự, dùng mọi lúc." },
        { it: "Come stai?", vi: "Bạn khỏe không?", note: "Thân mật (tu)." },
        { it: "Come sta?", vi: "Ông/bà khỏe không?", note: "Lịch sự (Lei)." },
        { it: "Sto bene, grazie", vi: "Tôi khỏe, cảm ơn", note: "Trả lời phổ biến." },
        { it: "Piacere", vi: "Rất vui được gặp", note: "Khi giới thiệu." },
        { it: "Mi chiamo…", vi: "Tôi tên là…", note: "Kèm tên của bạn." },
      ],
    },
    {
      id: "numeri",
      title: "Số đếm",
      level: "A1",
      minutes: 10,
      icon: "🔢",
      blurb: "Từ 0 đến 20 và số hay dùng khi mua hàng.",
      words: [
        { it: "zero", vi: "0", note: "Phát âm: DZE-ro." },
        { it: "uno", vi: "1", note: "" },
        { it: "due", vi: "2", note: "" },
        { it: "tre", vi: "3", note: "" },
        { it: "quattro", vi: "4", note: "QUAT-tro." },
        { it: "cinque", vi: "5", note: "CHIN-kwe." },
        { it: "sei", vi: "6", note: "" },
        { it: "sette", vi: "7", note: "" },
        { it: "otto", vi: "8", note: "" },
        { it: "nove", vi: "9", note: "" },
        { it: "dieci", vi: "10", note: "DYE-chi." },
        { it: "venti", vi: "20", note: "" },
        { it: "cento", vi: "100", note: "" },
      ],
    },
    {
      id: "cibo",
      title: "Đồ ăn & đồ uống",
      level: "A1",
      minutes: 12,
      icon: "🍝",
      blurb: "Gọi món, cà phê Ý và vài món kinh điển.",
      words: [
        { it: "acqua", vi: "nước", note: "Acqua naturale / frizzante." },
        { it: "pane", vi: "bánh mì", note: "" },
        { it: "formaggio", vi: "phô mai", note: "for-MAD-jo." },
        { it: "pasta", vi: "mì Ý", note: "" },
        { it: "pizza", vi: "pizza", note: "" },
        { it: "gelato", vi: "kem Ý", note: "" },
        { it: "caffè", vi: "cà phê espresso", note: "Nhỏ và đậm." },
        { it: "cappuccino", vi: "cappuccino", note: "Thường uống buổi sáng." },
        { it: "vino rosso", vi: "rượu vang đỏ", note: "" },
        { it: "il conto", vi: "hóa đơn", note: "Il conto, per favore." },
      ],
    },
    {
      id: "viaggio",
      title: "Du lịch",
      level: "A1–A2",
      minutes: 12,
      icon: "🚂",
      blurb: "Ga tàu, khách sạn, hỏi đường.",
      words: [
        { it: "stazione", vi: "nhà ga", note: "sta-TSYO-ne." },
        { it: "biglietto", vi: "vé", note: "" },
        { it: "treno", vi: "tàu hỏa", note: "" },
        { it: "aeroporto", vi: "sân bay", note: "" },
        { it: "albergo / hotel", vi: "khách sạn", note: "" },
        { it: "camera", vi: "phòng (khách sạn)", note: "Una camera per due." },
        { it: "Dov’è…?", vi: "…ở đâu?", note: "Dov’è il duomo?" },
        { it: "a destra", vi: "bên phải", note: "" },
        { it: "a sinistra", vi: "bên trái", note: "" },
        { it: "scusi", vi: "xin lỗi (để hỏi)", note: "Lịch sự, bắt đầu câu hỏi." },
      ],
    },
    {
      id: "verbi",
      title: "Động từ thiết yếu",
      level: "A2",
      minutes: 14,
      icon: "🔑",
      blurb: "essere, avere, volere, potere — xương sống của câu.",
      words: [
        { it: "essere", vi: "là / là (to be)", note: "io sono, tu sei, lui/lei è" },
        { it: "avere", vi: "có", note: "io ho, tu hai, lui/lei ha" },
        { it: "andare", vi: "đi", note: "io vado, tu vai" },
        { it: "fare", vi: "làm", note: "io faccio" },
        { it: "volere", vi: "muốn", note: "vorrei = tôi muốn (lịch sự)" },
        { it: "potere", vi: "có thể", note: "Posso…? = Tôi có thể…?" },
        { it: "dovere", vi: "phải", note: "Devo partire." },
        { it: "parlare", vi: "nói", note: "Parlo un po’ di italiano." },
        { it: "capire", vi: "hiểu", note: "Non capisco." },
        { it: "mangiare", vi: "ăn", note: "" },
      ],
    },
    {
      id: "quotidiano",
      title: "Giao tiếp hằng ngày",
      level: "A2",
      minutes: 10,
      icon: "☀️",
      blurb: "Cảm ơn, xin lỗi, đồng ý và từ chối lịch sự.",
      words: [
        { it: "grazie", vi: "cảm ơn", note: "Grazie mille = cảm ơn nhiều." },
        { it: "prego", vi: "không có gì / mời", note: "Đa năng." },
        { it: "per favore", vi: "làm ơn", note: "" },
        { it: "scusa / scusi", vi: "xin lỗi", note: "scusa thân mật, scusi lịch sự." },
        { it: "sì", vi: "vâng / có", note: "" },
        { it: "no", vi: "không", note: "" },
        { it: "forse", vi: "có lẽ", note: "" },
        { it: "va bene", vi: "được / ổn", note: "" },
        { it: "non lo so", vi: "tôi không biết", note: "" },
        { it: "aiuto", vi: "cứu / giúp", note: "" },
      ],
    },
  ],
  phrases: [
    { it: "Vorrei un caffè, per favore.", vi: "Tôi muốn một ly cà phê, làm ơn." },
    { it: "Quanto costa?", vi: "Cái này bao nhiêu tiền?" },
    { it: "Parla inglese?", vi: "Bạn có nói tiếng Anh không?" },
    { it: "Non parlo italiano molto bene.", vi: "Tôi nói tiếng Ý chưa giỏi lắm." },
    { it: "Può ripetere, per favore?", vi: "Làm ơn nói lại được không?" },
    { it: "Dov’è il bagno?", vi: "Nhà vệ sinh ở đâu?" },
    { it: "Un tavolo per due, per favore.", vi: "Một bàn cho hai người, làm ơn." },
    { it: "Sono vegetariano / vegetariana.", vi: "Tôi ăn chay (nam / nữ)." },
    { it: "Che ore sono?", vi: "Mấy giờ rồi?" },
    { it: "Mi piace l’Italia.", vi: "Tôi thích nước Ý." },
  ],
};

function allWords() {
  return COURSE.lessons.flatMap((lesson) =>
    lesson.words.map((w) => ({ ...w, lessonId: lesson.id, lessonTitle: lesson.title }))
  );
}

function quizBank() {
  const words = allWords();
  return words.map((w, i) => {
    const others = words.filter((x) => x.it !== w.it);
    const distractors = shuffle(others).slice(0, 3).map((x) => x.vi);
    const options = shuffle([w.vi, ...distractors]);
    return {
      id: `${w.lessonId}-${i}`,
      prompt: w.it,
      answer: w.vi,
      options,
      lessonId: w.lessonId,
    };
  });
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
