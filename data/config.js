/* =====================================================================
   ROBIN'S HOMEGROWN – Konfiguration
   ---------------------------------------------------------------------
   Neue Sorte: Eintrag in "strains" kopieren, id/Name/Bilder anpassen,
   Bilder nach img/<id>/ legen. Fertig – kein weiterer Code nötig.
   Felder die du leer lässt (null oder weglassen) werden nicht angezeigt.
   ===================================================================== */
window.CONFIG = {

  site: {
    name: "Robin's Homegrown",
    tagline: "Übersicht der Kreuzungen",
    logo: "img/logo.png",
    about: "Übersicht der Kreuzungen von mir. Alle Infos an einem Ort für den Anbau der Sorten. Aktuelle und vergangene Projekte mit Generationen.",
    showComingSoon: true,                  // Platzhalter-Karte „bald mehr“
    comingSoonText: "Im Testlauf – bald mehr!",
    footer: "Reine Präsentationsseite. Kein Shop, kein Verkauf. Nur für Erwachsene (18+). Beachte die Gesetze deines Landes.",
    contact: null,                         // z. B. { label: "Instagram", url: "https://instagram.com/..." }
    legal: {
      operator: "",                        // Vollständiger Name der verantwortlichen Person
      street: "",
      postalCode: "",
      city: "",
      email: "",
      phone: "",                           // Optional
      hostingProvider: "GitHub Pages (GitHub, Inc. / GitHub B.V.; maßgebliche Gesellschaft laut Vertragsverhältnis prüfen)",
      hostingAddress: "GitHub B.V., Prins Bernhardplein 200, 1097 JB Amsterdam, Niederlande; GitHub, Inc., 88 Colin P. Kelly Jr. St., San Francisco, CA 94107, USA",
      hostingPrivacyUrl: "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement",
      hostingRegion: "GitHub verarbeitet Daten laut Datenschutzhinweisen in verschiedenen Ländern, einschließlich der USA; eine feste Hosting-Region für GitHub Pages ist dort nicht ausgewiesen.",
      logRetention: "GitHub gibt an, Besucher-IP-Adressen für Sicherheitszwecke zu protokollieren und zu speichern. Eine konkrete Speicherdauer für GitHub-Pages-Besuche ist in den verlinkten Angaben nicht genannt."
    }
  },

  /* Farbpalette der Seite (aus deiner Samenpackung) */
  theme: {
    yellow: "#e0d533",
    orange: "#e8531a",
    blue:   "#2d56a5",
    green:  "#2d5424",
    pink:   "#c98abf",
    paper:  "#fbf7e9",
    ink:    "#111111"
  },

  strains: [
    {
      id: "tulaberry",
      name: "Tulaberry",
      genetics: ["Sour Stomper", "Granite Haze"],
      type: "Feminisiert & Autoflower",
      born: "Jun 2026",
      packSize: "Samen",
      status: "Getestet",                 // frei wählbar: z. B. "Testphase", "Ausverkauft"
      filterTags: ["Fruchtig", "Zitrus", "Haze"],

      /* Farben der Detailseite (aus dem Cover) */
      accent: "#e8531a",
      bg: "#2d56a5",

      description: "Tulaberry ist eine Kreuzung aus einem wunderschönen Sour Stomper Phänotyp mit extrem fotoperiodischem Look und einer Granite Haze F7. Die Granite Haze bringt die ausufernde Struktur und den Haze-Charakter. Die Sour Stomper-Seite die frische Limetten-Note.",

      /* Eckdaten – null = ausblenden. Aktuell PROGNOSE aus den Eltern, bitte durch echte Werte ersetzen
         und dann forecast auf false stellen. */
      forecast: false,
      forecastNote: "Prognose aus der Genetik (Sour Stomper × Granite Haze). Echte Messwerte folgen nach den Testläufen.",
      stats: {
        totalDays: "65–80 Tage",
        generation: "F1",
        height: "60–100 cm",
        yield: "80–230 g / Pflanze",
      },

      aroma:   ["Sour Lime", "Zitrus", "Säuerlich", "Leicht erdig"],
      effect:  ["Klar", "Kreativ", "Energetisch"],
      parents: [
        { role: "Mutter", name: "Sour Stomper", fGen: "F7", breeder: "Mephisto Genetics" },
        { role: "Vater", name: "Granite Haze", fGen: "F7", breeder: "Speedrun Seeds" }
      ],
      notes: "Haze-Anteil heißt: etwas längere Blüte und viel Streckung zu Beginn. Früh LST oder Topping, genug Platz nach oben einplanen. Die Sour-Seite bringt die frische, scharfe Limetten-Note. Etwas Empfindlich auf Stickstoff.",
      cultivationInfo: [{ label: "Veg → Blüte", value: "z. B. ca. 3–4 Wochen ab Keimung" },
  { label: "Düngerempfindlichkeit", value: "z. B. eher empfindlich" } ],

      pack: {
        front: "img/tulaberry/pack-front.jpg",
        back:  "img/tulaberry/pack-back.jpg"
      },
      cover: "img/tulaberry/pack-front.jpg",   // Bild auf der Karte

      gallery: [
        { src: "img/tulaberry/tb-plant1.jpg", caption: "Tulaberry in der Blüte" },
        { src: "img/tulaberry/tb-plant2.jpg", caption: "Tulaberry Tag 65" }
      ]
    },
     {
      id: "fob3",
      name: "Fruit of the Bloom #3",
      genetics: ["Radical Juice Auto *Fanta Pheno*", "Granite Haze"],
      type: "Feminisiert & Autoflower",
      born: "Jun 2026",
      packSize: "Samen",
      status: "Getestet",                 // frei wählbar: z. B. "Testphase", "Ausverkauft"
      filterTags: ["Fruchtig", "Zitrus", "Haze"],

      /* Farben der Detailseite (aus dem Cover) */
      accent: "#1ae824",
      bg: "#33c9e0",

      description: "Fruit of the Bloom #3 ist eine Kreuzung aus Radical Juice Auto (Fanta Pheno) und Granite Haze. Fruchtiges Aroma, richtung Fanta und Capri-Sonne. Ausufernder Wuchs, dichte Blüten, sehr harzig.",

      /* Eckdaten – null = ausblenden. Aktuell PROGNOSE aus den Eltern, bitte durch echte Werte ersetzen
         und dann forecast auf false stellen. */
      forecast: false,
      forecastNote: "Prognose aus der Genetik (Radical Juice Auto × Granite Haze). Echte Messwerte folgen nach den Testläufen.",
      stats: {
        totalDays: "80–90 Tage",
        generation: "F1",
        height: "60–120 cm",
        yield: "100–150g / Pflanze",
      
      },

      aroma:   ["Sour", "Zitrus", "Fanta", "Capri-Sonne"],
      effect:  ["Hybrid", "Talking", "Energetisch"],
      parents: [
        { role: "Mutter", name: "Radical Juice Auto (Fanta-Phäno)", breeder: "Ripper Seeds" },
        { role: "Vater", name: "Granite Haze", breeder: "Speedrun Seeds" }
      ],
      notes: "Die Sorte ist eine Kreuzung aus Radical Juice Auto (Fanta Pheno) und Granite Haze. Sie hat einen ausufernden Wuchs, dichte Blüten und ein fruchtiges Aroma. Braucht Platz aber wird sehr harzig. Verträgt toppen und LST gut.",
      cultivationInfo: [],

      pack: {
        front: "img/fob3/fob3-front.jpg",
        back:  null
      },
      cover: "img/fob3/fob3-front.jpg",   // Bild auf der Karte

      gallery: [
        { src: "img/fob3/fob3-plant1.jpg", caption: "Fruit of the Bloom #3 in der Blüte" },
        { src: "img/fob3/fob3-plant2.jpg", caption: "Fruit of the Bloom #3 Tag 65" },
        { src: "img/fob3/fob3-plant3.jpg", caption: "Fruit of the Bloom #3 Tag 80" },
        { src: "img/fob3/fob3-plant4.jpg", caption: "Fruit of the Bloom #3 Tag 90" }
      ]
    },
    {
      id: "hbf",
      name: "Hidden Berry Freak",
      genetics: ["Frosty's Auto Freak", "Granite Haze"],
      type: "Feminisiert & Autoflower",
      born: "Jun 2026",
      packSize: "Samen",
      status: "Aktuell im Test",                 // frei wählbar: z. B. "Testphase", "Ausverkauft"
      filterTags: ["Fruchtig", "Beere", "Haze", "Im Test"],

      /* Farben der Detailseite (aus dem Cover) */
      accent: "rgb(63, 224, 51)",
      bg: "#cc33e0",

      description: "Hidden Berry Freak ist eine Kreuzung aus Frosty's Auto Freak und Granite Haze. Keine Freaky-Leafs, da Granite Haze keine Mutation. Berry Gelato-Noten von der Mutter, Haze-Charakter von Granite Haze. ",

      /* Eckdaten – null = ausblenden. Aktuell PROGNOSE aus den Eltern, bitte durch echte Werte ersetzen
         und dann forecast auf false stellen. */
      forecast: false,
      forecastNote: "Prognose aus der Genetik (Frosty's Auto Freak × Granite Haze). Echte Messwerte folgen nach den Testläufen.",
      stats: {
        totalDays: "80–90 Tage",
        generation: "F1",
        height: "60–140 cm",
        yield: "100–120g / Pflanze",
      },

      aroma:   ["Sour", "Zitrus", "Fanta", "Capri-Sonne"],
      effect:  ["Hybrid", "Talking", "Energetisch"],
      parents: [
        { role: "Mutter", name: "Frosty's Auto Freak", breeder: "Khalifa Genetics" },
        { role: "Vater", name: "Granite Haze", breeder: "Speedrun Seeds" }
      ],
      notes: "Die Sorte ist eine Kreuzung aus Frosty's Auto Freak (Fanta Pheno) und Granite Haze. Sie hat einen ausufernden Wuchs, dichte Blüten und ein fruchtiges Aroma. Braucht Platz aber wird sehr harzig. Verträgt toppen und LST gut.",
      cultivationInfo: [],

      pack: {
        front: "img/hbf/hbf-front.jpg",
        back:  null
      },
      cover: "img/hbf/hbf-front.jpg",   // Bild auf der Karte

      gallery: [
        { src: "img/hbf/hbf-plant1.jpg", caption: "Hidden Berry Freak Tag 23" },
        { src: "img/hbf/hbf-plant2.jpg", caption: "..." },
 
      ]
    }
  ]
};
