/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir (metin). Zamanlar film saniyesidir.
   note: öğretmen için önerilen seslendirme cümlesi.
   Senaryo değişirse: node scripts/build.mjs (zamanlar yeniden hesaplanır).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 0.9, end: 8.5, tr: "Mesajım arkadaşımın telefonuna nasıl gidiyor?", en: "How does my message get to my friend's phone?",
      note: "Karo arkadaşına bir mesaj gönderdi. Mesaj bir saniyede ulaştı. Ama nasıl? Arada ne var?" },
    { scene: 1, start: 9.3, end: 15, tr: "Hadi, ağların peşine düşelim", en: "Let's go on the trail of networks",
      note: "Karo bu soruyu araştırmaya karar verdi. Sen de onunla birlikte sorgula." },
    { scene: 2, start: 17.8, end: 24.5, tr: "Önce neyi merak ettiğini belirle", en: "First decide what you wonder about",
      note: "Sorgulamak merakla başlar. Karo neyi merak ettiğini yazar ve bunu bir soruya dönüştürür: Mesajım hangi yoldan gider?" },
    { scene: 2, start: 25.3, end: 31.9, tr: "Bilgi topla, doğrula, çıkarım yap", en: "Gather, check and draw conclusions",
      note: "Sonra bilgi toplar, bilginin doğru olup olmadığını kontrol eder ve bir sonuca ulaşır. Her sonuç yeni bir soru doğurabilir." },
    { scene: 3, start: 34.8, end: 40.4, tr: "Ağda cihazlar vardır", en: "A network has devices",
      note: "Bir ağda bilgisayar, telefon, tablet, yazıcı gibi cihazlar bulunur." },
    { scene: 3, start: 41.3, end: 47.3, tr: "Cihazlar kabloyla ya da kablosuz bağlanır", en: "Devices connect with cables or wirelessly",
      note: "Cihazlar birbirine kabloyla ya da kablosuz olarak bağlanır." },
    { scene: 3, start: 48.1, end: 53.8, tr: "Ağ cihazları trafiği yönetir", en: "Network devices manage the traffic",
      note: "Yönlendirici ve modem gibi ağ cihazları, verinin doğru yere gitmesini sağlar." },
    { scene: 3, start: 54.6, end: 60.3, tr: "Hepsi birlikte: bilgisayar ağı", en: "All together: a computer network",
      note: "Balık ağındaki düğümler gibi birbirine bağlı cihazlara bilgisayar ağı denir. Ağ sayesinde veri ve yazıcı paylaşır, internete bağlanırız." },
    { scene: 4, start: 63.2, end: 69, tr: "Evdeki cihazlar yönlendiriciye bağlanır", en: "Home devices connect to the router",
      note: "Evimizdeki bilgisayar kabloyla, telefon ve yazıcı kablosuz olarak yönlendiriciye bağlanır." },
    { scene: 4, start: 69.8, end: 75.6, tr: "Bilgisayardan yazıcıya bir belge gider", en: "A document travels from the computer to the printer",
      note: "Bilgisayardan bir belge yazdıralım. Belge küçük veri paketleri halinde yönlendiriciden geçip yazıcıya ulaşır." },
    { scene: 4, start: 76.4, end: 83.1, tr: "Modem evimizi internete bağlar", en: "The modem connects our home to the internet",
      note: "Karo'nun mesajı ise telefondan yönlendiriciye, oradan modeme ve internete gider. Sonra arkadaşının telefonuna ulaşır." },
    { scene: 5, start: 85.9, end: 92, tr: "Kablosuz bağlantı da bir ağ bağlantısıdır", en: "A wireless link is a network link too",
      note: "Bir ansiklopedi sitesinde okuduk: Wi-Fi kablosuz bir ağ bağlantısıdır. Ders kitabımız da aynısını söylüyor. Doğru." },
    { scene: 5, start: 92.8, end: 98.5, tr: "İnternet tek bir dev bilgisayar mı?", en: "Is the internet one giant computer?",
      note: "Bir videonun yorumunda \"İnternet uzaydaki tek bir dev bilgisayardır\" yazıyor. Kaynak belirsiz ve bilgi yanlış: internet, dünyadaki pek çok ağın birbirine bağlanmasıdır." },
    { scene: 5, start: 99.3, end: 105, tr: "Birden fazla güvenilir kaynağa bak", en: "Check more than one reliable source",
      note: "Bir bilginin doğruluğunu anlamak için birden fazla güvenilir kaynağa bakarız: ders kitabı, öğretmen, resmi kurum siteleri." },
    { scene: 6, start: 107.8, end: 113.8, tr: "Topladığım bilgileri yan yana koyuyorum", en: "I put the facts I gathered side by side",
      note: "Karo topladığı bilgileri yan yana koyar: cihazlar yönlendiriciye bağlı, modem de evi internete bağlıyor." },
    { scene: 6, start: 114.5, end: 121.8, tr: "Buradan bir sonuç çıkarıyorum", en: "From this, I draw a conclusion",
      note: "Buradan bir çıkarım yapar: yönlendirici kapanırsa cihazlar birbirine ulaşamaz. Modem kapanırsa evdeki ağ çalışır ama internete çıkamayız." },
    { scene: 7, start: 124.5, end: 131.4, tr: "Aklında kalsın: iyi bir soru, iyi bir yolculuktur", en: "Remember: a good question is a good journey",
      note: "Aklında kalsın: merak ettiğin konuyu soruya dönüştür, bilgi topla ve doğrula." },
    { scene: 7, start: 132.3, end: 138, tr: "Ağlar dünyayı birbirine bağlar!", en: "Networks connect the world!",
      note: "Bilgisayar ağları sayesinde mesajlarımız bir saniyede dünyanın öbür ucuna gider." },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.BF = root.BF || {}; root.BF.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
