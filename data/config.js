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
    tagline: "Übersicht der Autoflower-Kreuzungen.",
    logo: "img/logo.png",
    about: {
      title: "Info",
      intro: "Ein Überblick über die Kreuzungen, ihre Entwicklung und die vorhandenen Anbauinfos.",
      topics: [
        { title: "Genetik", text: "Informationen zu den Samen zum Nachlesen" },
        { title: "Autoflower", text: "Aktuell nur Autoflower und Feminisiert" },
        { title: "Anbau & Beobachtungen", text: "Aroma, Wirkung und Anbauinfos." }
      ]
    },
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

  /* Wiederverwendbare Eltern-Genetiken */
  globalStrains: {
    graniteHaze: {
      name: "Granite Haze",
      fGen: "F7",
      breeder: "Speedrun Seeds",
      lineage: [
        { name: "Bear’s Breath ", breeder: "Dream Beans" },
        { name: "Hubba Bubba Smelloscope x No-name Haze", breeder: "Speedrun Seeds" }
      ]
    }
  },

  strains: [
    /*
     * Neue Sorte: diesen Block kopieren, Werte und Bildpfad anpassen.
     * {
     *   id: "neue-sorte",
     *   name: "Name der Sorte",
     *   parents: [
     *     { role: "Mutter", name: "Muttername", phenotype: "Phänotyp" },
     *     { role: "Vater", globalStrain: "graniteHaze" }
     *   ],
     *   pack: { front: "img/neue-sorte/pack-front.jpg", back: "img/neue-sorte/pack-back.jpg" },
     *   gallery: [{ src: "img/neue-sorte/plant-1.jpg", caption: "Pflanze" }]
     * }
     * Alle weiteren Felder wie stats, parents, aroma und notes sind optional.
     */
    {
      id: "tulaberry",
      name: "Tulaberry",
      type: "Feminisiert & Autoflower",
      born: "Jun 2026",
      packSize: "Samen",
      status: "Getestet",                 // frei wählbar: z. B. "Testphase", "Ausverkauft"
      filterTags: ["Sour", "Limette", "Haze", "Fruchtig"],

      /* Farben der Detailseite (aus dem Cover) */
      accent: "#e47f14",
      bg: "#5f1cdb",

      description: "Eine Kreuzung aus Sour Stomper und Granite Haze mit sehr guter Struktur und recht photoperiodisch wirkenden Blüten. Die Wuchskraft und Blütendichte liegen etwas unter der Granite Haze, dafür kommen positive Eigenschaften der Sour Stomper durch. Das Terpenprofil ist geprägt von Sour- und Limettennoten, tendenziell eher fruchtig als süß.",

      /* Nur belegte Eckdaten eintragen; nicht vorhandene Werte einfach weglassen. */
      stats: {
        totalDays: "65–80 Tage",
        generation: "F1",
        height: "60–100 cm",
        yield: "80–230 g / Pflanze",
      },

      aroma:   ["Sour Lime", "Kaum Candy", "Sour", "Nicht Zitrone"],
      effect:  ["Klar", "Kreativ", "Hybrid"],
      parents: [
        { role: "Mutter", name: "Sour Stomper", fGen: "F7", breeder: "Mephisto Genetics", lineage: [
      { name: "GrapeStomper OG", breeder: "Gage Green Genetics" },
      { name: "Sour Crack", breeder: "Mephisto Genetics", fGen: "F5" }
    ] },
        { role: "Vater", globalStrain: "graniteHaze" }
      ],
      notes: "Sehr schöne Pflanze die bei allen Testläufen recht einheitliche Ergebnisse bezogen auf Geschmack, Struktur und Wirkung geliefert hat. Die Blüten sind sehr kompakt, die Pflanze wächst eher photoperiodisch und reagiert empfindlich auf Stickstoff. Das Terpenprofil ist fruchtig-sauer mit Limettennoten, nicht zu süß. Die Wirkung ist klar, kreativ und hybrid.",
      cultivationInfo: [
        { label: "Düngerempfindlichkeit", value: "reagiert empfindlich auf Stickstoff, blautönung als Warnsignal" }, 
        { label: "EC-Empfehlungen", value: "Moderate EC-Werte empfohlen. Zwischen 1.6 und 2.2 mS/cm" }, 
      ],

      pack: {
        front: "img/tulaberry/pack-front.jpg",
        back:  "img/tulaberry/pack-back.jpg"
      },
      gallery: [
        { src: "img/tulaberry/tb-plant1.jpg", caption: "Tulaberry in der Blüte" },
        { src: "img/tulaberry/tb-plant2.jpg", caption: "Tulaberry in der Blüte" },
        { src: "img/tulaberry/tb-plant3.jpg", caption: "Tulaberry in der Blüte" },
        { src: "img/tulaberry/tb-plant4.jpg", caption: "Tulaberry dry Bud" },
      ]
    },
    {
      id: "fob2",
      name: "Fruit of the Bloom #2",
      type: "Feminisiert & Autoflower",
      born: "Jun 2026",
      packSize: "Samen",
      status: "Getestet",                 // frei wählbar: z. B. "Testphase", "Ausverkauft"
      filterTags: ["Candy", "Fruchtig", "Haze"],

      /* Farben der Detailseite (aus dem Cover) */
      accent: "#1adae8",
      bg: "#dfd51c",

      description: "Kreuzung aus Radical Juice Auto und Granite Haze. Kräftiges Wachstum und gute Verzweigung. Die Blüten entwickeln eine ordentliche Dichte und gute Harzproduktion. Terpenprofil: Orange, Limonade, Citrus und ein touch Haze.",

      /* Nur belegte Eckdaten eintragen; nicht vorhandene Werte einfach weglassen. */
      stats: {
        totalDays: "80–90 Tage",
        generation: "F1",
        height: "60–120 cm",
        yield: "100–150g / Pflanze",
      
      },

      aroma:   ["Fruchtgummi", "Candy", "Fruchtig", "Bubblegum"],
      effect:  ["Hybrid", "Redetauglich", "Fokusiert", "Kreativ"],
      parents: [
        { role: "Mutter", name: "Radical Juice", phenotype: "Runtz Pheno", breeder: "Ripper Seeds", lineage: [
          { name: "Tropicana Cookies" },
          { name: "Runtz", },
          { name: "Ruderalis", }
        ] },
        { role: "Vater", globalStrain: "graniteHaze" }
      ],
      notes: "Eine sehr wuchskräftige Kreuzung mit breitem Wuchs, kräftigen Seitentrieben und vielen Blütenansätzen. Die Pflanze entwickelt eine große Krone und benötigt entsprechend Platz. Die Blüten sind gut mit Harz überzogen und erreichen eine ordentliche Dichte. Das Terpenprofil ist frisch und deutlich citruslastig, mit Noten von Orange, Limonade und Haze. Verträgt LST und Toppen gut, sollte aber früh um die 5. Nodie getoppt werden.",
      pack: {
        front: "img/fob2/fob2-front.jpg",
        back:  "img/fob2/fob2-plant1.jpg",
      },
      gallery: [
        { src: "img/fob2/fob2-plant1.jpg", caption: "Fruit of the Bloom #2 in der Blüte" }
      ]
    },
     {
      id: "fob3",
      name: "Fruit of the Bloom #3",
      type: "Feminisiert & Autoflower",
      born: "Jun 2026",
      packSize: "Samen",
      status: "Getestet",                 // frei wählbar: z. B. "Testphase", "Ausverkauft"
      filterTags: ["Sour", "Fruchtig", "Haze"],

      /* Farben der Detailseite (aus dem Cover) */
      accent: "#1ae824",
      bg: "#d354b9",

      description: "Kreuzung aus Radical Juice Auto und Granite Haze. Kräftiges Wachstum und gute Verzweigung. Die Blüten entwickeln eine ordentliche Dichte und gute Harzproduktion. Terpenprofil: Orange, Limonade, Citrus und ein touch Haze.",

      /* Nur belegte Eckdaten eintragen; nicht vorhandene Werte einfach weglassen. */
      stats: {
        totalDays: "80–90 Tage",
        generation: "F1",
        height: "60–120 cm",
        yield: "100–150g / Pflanze",
      
      },

      aroma:   ["Frisch", "Orange", "Fanta", "Capri-Sonne"],
      effect:  ["Hybrid", "Redetauglich", "Fokusiert", "Kreativ"],
      parents: [
        { role: "Mutter", name: "Radical Juice", phenotype: "Fanta Pheno", breeder: "Ripper Seeds", lineage: [
          { name: "Tropicana Cookies" },
          { name: "Runtz", },
          { name: "Ruderalis", }
        ] },
        { role: "Vater", globalStrain: "graniteHaze" }
      ],
      notes: "Eine sehr wuchskräftige Kreuzung mit breitem Wuchs, kräftigen Seitentrieben und vielen Blütenansätzen. Die Pflanze entwickelt eine große Krone und benötigt entsprechend Platz. Die Blüten sind gut mit Harz überzogen und erreichen eine ordentliche Dichte. Das Terpenprofil ist frisch und deutlich citruslastig, mit Noten von Orange, Limonade und Haze. Verträgt LST und Toppen gut, sollte aber früh um die 5. Nodie getoppt werden.",
      pack: {
        front: "img/fob3/fob3-front.jpg",
        back:  "img/fob3/fob3-plant4.jpg",
      },
      gallery: [
        { src: "img/fob3/fob3-plant1.jpg", caption: "Fruit of the Bloom #3 in der Blüte" },
        { src: "img/fob3/fob3-plant2.jpg", caption: "Fruit of the Bloom #3 Tag 65" },
        { src: "img/fob3/fob3-plant3.jpg", caption: "Fruit of the Bloom #3 Tag 80" },
        { src: "img/fob3/fob3-plant4.jpg", caption: "Finale Blüten getrockent und getrimmt" }
      ]
    },
    {
      id: "hbf",
      name: "Hidden Berry Freak",
      type: "Feminisiert & Autoflower",
      born: "Jun 2026",
      packSize: "Samen",
      status: "Aktuell im Test",                 // frei wählbar: z. B. "Testphase", "Ausverkauft"
      filterTags: ["Skunky", "Beere", "Haze", "Fruchtig"],

      /* Farben der Detailseite (aus dem Cover) */
      accent: "rgb(63, 224, 51)",
      bg: "#cc33e0",

      description: "Hidden Berry Freak ist eine Kreuzung aus Frosty's Auto Freak und Granite Haze. Keine Freaky-Leafs, da Granite Haze keine Mutation. Berry Gelato-Noten von der Mutter, Sour-fruity Haze von Granite Haze. ",

      /* Nur belegte Eckdaten eintragen; nicht vorhandene Werte einfach weglassen. */
      forecast: true,
      forecastNote: "Prognose zur Kreuzung: Hidden Berry Freak F1. Echte Werte folgen nach den Testläufen.",
      forecastStamp: { label: "Aktuell im Test", icon: "sparkles", tone: "ink" },
      stats: {
        totalDays: "80–90 Tage",
        generation: "F1",
        height: "60–140 cm",
        yield: "100–120g / Pflanze",
      },

      aroma:   ["Berry", "Gelato", "Skunky", "Haze"],
      effect:  ["Hybrid", "Mehr Sofa", "Stark"],
      parents: [
        { role: "Mutter", name: "Frosty's Auto Freak", breeder: "Khalifa Genetics", lineage: [
          { name: "Frosty's Purple Freak", breeder: "Khalifa Genetics" },
          { name: "Guavalato Auto", breeder: "James Loud Genetics" }
        ] },
        { role: "Vater", globalStrain: "graniteHaze" }
      ],
      notes: "Die Sorte ist eine Kreuzung aus Frosty's Auto Freak und Granite Haze. Sie wächst sehr kräftig, verzweigt schon früh und alle Triebe kommen ohne Training auf die selbe höhe. Verträgt Nährstoffe und Licht gut. Starke Wurzelbildung. Die Frosty Mutter wurde selbst bei extremen Temperaturen weit über 30°C komplett lila bis schwarz. Die Sorte ist aktuell im Testlauf.",
      pack: {
        front: "img/hbf/hbf-front.jpg",
        back:  "img/hbf/hbf-plant1.jpg",
      },
      gallery: [
        { src: "img/hbf/hbf-plant1.jpg", caption: "Hidden Berry Freak Tag 23" },
        { src: "img/hbf/hbf-plant2.jpg", caption: "..." },
 
      ]
    },
    {
      id: "zii",
      name: "Zombii",
      type: "Feminisiert & Autoflower",
      born: "Jun 2026",
      packSize: "Samen",
      status: "Ungetestet",                 // frei wählbar: z. B. "Testphase", "Ausverkauft"
      filterTags: ["Kush", "Haze", "Pfeffer"],

      /* Farben der Detailseite (aus dem Cover) */
      accent: "rgb(224, 51, 51)",
      bg: "#79b779",

      description: "Zombii ist eine Kreuzung aus Zombie Kush Auto und Granite Haze. Die Zombie Kush Mutter ziemlich groß und frostig. Wird selbst in kleinen Töpfen sehr groß und blüht erst um Tag 40–45.",

      forecast: true,
      forecastNote: "Prognose aus der Genetik (Zombie Kush Auto × Granite Haze). Echte Messwerte folgen nach den Testläufen.",
      forecastStamp: { label: "Prognose", icon: "sparkles", tone: "orange" },
      stats: {
        totalDays: "85–100 Tage",
        height: "100–140 cm",
        yield: "100–120g / Pflanze",
        generation: "F1",
      },

      aroma:   ["Haze", "Sweet", "Lavendel", "Kush"],
      effect:  ["Hybrid", "Funktional", "LeichtEnergetisch"],
      parents: [
        { role: "Mutter", name: "Zombie Kush Auto", breeder: "Ripper Seeds", lineage: [
          { name: "Sideral", breeder: "Ripper Seeds" },
          { name: "Bubba Kush" },
          { name: "Ruderalis" }
        ] },
        { role: "Vater", globalStrain: "graniteHaze" }
      ],
      notes: "Die Zombie Kush Mutter war ziemlich groß und blüht erst um Tag 40–45. Granite Haze Vater typisch Wuchstark und Haze Fruity Sour Mint Aroma. Die Sorte ist aktuell ungetestet. Sollte ideal für Outdoor geeignet sein, da sie sehr groß wird und erst spät in die Blüte geht.",
      cultivationInfo: [{ label: "Veg → Blüte", value: "Später Blütestart. Tag 40-45" }, ],

      pack: {
        front: "img/zii/zii-front.jpg",
      },
    }, 
   /* {
      id: "santa",
      name: "Santas Crisis",
      type: "Feminisiert & Autoflower",
      born: "Jun 2026",
      packSize: "Samen",
      status: "Vorbereitung",                 // frei wählbar: z. B. "Testphase", "Ausverkauft"
      filterTags: ["Kush", "Haze", "Pfeffer"],

    
      accent: "rgb(224, 83, 51)",
      bg: "#0f6639",

      description: "Als Xmas-Special gibt es eine Haze-Psychose. Fugue State, welches eine Amnesia Haze Kreuzung ist, wurde mit Granite Haze vereint. Es ist zu erwarten, dass du unter dem Baum einen harten Film schiebst. Terpenprofil: Pfeffer, Gewürz, Pinie, Haze.",

      forecast: true,
      forecastNote: "Prognose aus der Genetik (Fugue State × Granite Haze). Echte Messwerte folgen nach den Testläufen.",
      forecastStamp: { label: "Im Test", icon: "thc", tone: "green" },
      stats: {
        totalDays: "75–85 Tage",
        height: "80–120 cm",
        yield: "80–150g / Pflanze",
        generation: "F1",
      },

      aroma:   ["Haze", "Pfeffer", "Gewürz", "Minty"],
      effect:  ["Hybrid", "Jingle Bells", "Xmas Haze Psychose"],
      parents: [
        { role: "Mutter", name: "Fugue State", breeder: "Mephisto Genetics", fGen: "F6", lineage: [
          { name: "Amnesia Haze", fGen: "BX1", breeder: "Archive Seeds" },
          { name: "Walter White", fGen: "F5", breeder: "Mephisto Genetics" }
        ] },
        { role: "Vater", globalStrain: "graniteHaze" }
      ],
      notes: "Als Xmas-Special gibt es eine Haze-Psychose. Fugue State, welches eine Amnesia Haze Kreuzung ist, wurde mit Granite Haze vereint. Es ist zu erwarten, dass du unter dem Baum einen harten Film schiebst. Terpenprofil: Pfeffer, Gewürz, Pinie, Haze.",

      pack: {
        front: "img/santa/santa-front.jpg",
      },
    } */
  ]
};
