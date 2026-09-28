/* ─────────────────────────────────────────────────────────────
   FİLM KİMLİĞİ / Film identity — scripts/build.mjs ile scenes/film.js'ten üretilir.
   Süreler altyazı uzunluğundan hesaplanır (okuma hızı: ~10 harf/sn).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const META = {
    "slug": "aglarin-pesinde",
    "title": "Ağların Peşinde",
    "titleEn": "On the Trail of Networks",
    "grade": 5,
    "theme": "Bilgisayar Ağları ve İletişim",
    "code": "BTY.5.3.1",
    "outcome": "Bilgisayar ağları ve bileşenlerini sorgulayabilme",
    "outcomeEn": "Inquiring into computer networks and their components",
    "duration": 139.3,
    "tempo": 1
  };
  const SCENES = [
    {
      "id": "s0",
      "t0": 0,
      "t1": 16.3,
      "name": "",
      "en": "",
      "concept": "",
      "noHeader": true
    },
    {
      "id": "s1",
      "t0": 16.3,
      "t1": 33.3,
      "name": "Sorgulama",
      "en": "Inquiry",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s2",
      "t0": 33.3,
      "t1": 61.7,
      "name": "Ağ nedir?",
      "en": "What is a network?",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s3",
      "t0": 61.7,
      "t1": 84.5,
      "name": "Evdeki ağ",
      "en": "The home network",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s4",
      "t0": 84.5,
      "t1": 106.4,
      "name": "Bilgi doğru mu?",
      "en": "Is it true?",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s5",
      "t0": 106.4,
      "t1": 123.1,
      "name": "Çıkarım yap",
      "en": "Draw conclusions",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s6",
      "t0": 123.1,
      "t1": 139.3,
      "name": "Aklında kalsın",
      "en": "Remember",
      "concept": "",
      "noHeader": false
    }
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = { META, SCENES };
  else { root.BF = root.BF || {}; root.BF.META = META; root.BF.SCENES = SCENES; }
})(typeof window !== 'undefined' ? window : globalThis);
