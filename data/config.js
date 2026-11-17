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
    about: {
      title: "Info",
      intro: "Ein Überblick über die Kreuzungen, ihre Entwicklung und die vorhandenen Anbauinfos.",
      topics: [
        { title: "Genetik", text: "Eltern und Generationen der Kreuzungen – soweit bekannt." },
        { title: "Eckdaten", text: "Wuchs, Zeit und Ertrag. Prognosen sind als solche gekennzeichnet." },
        { title: "Anbau & Beobachtungen", text: "Aroma, Wirkung und Anbauinfos – sofern Angaben zur Sorte vorliegen." }
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
        { name: "Bear’s Breath " },
        { name: "Hubba Bubba Smelloscope x No-name Haze" }
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
     *   pack: { front: "img/neue-sorte/pack-front.jpg" },
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
      filterTags: ["Sour", "Limette", "Haze"],

      /* Farben der Detailseite (aus dem Cover) */
      accent: "#d58626",
      bg: "#1d8ee4",

      description: "Eine Kreuzung aus Sour Stomper und Granite Haze mit guter Pflanzenstruktur und sehr gutem Ertrag. Die Wuchskraft und Blütendichte liegen etwas unter der Granite Haze, dafür kommen viele Eigenschaften der Sour Stomper durch. Das Terpenprofil ist geprägt von Sour- und Limettennoten mit einer fruchtigen Süße. Dabei deutlich komplexer als ein reines Zitronenaroma.",

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
      notes: "Der Ertrag war sehr gut und auch optisch hat mich die Pflanze überzeugt. Besonders interessant ist allerdings das Terpenprofil. Dominant sind Sour- und Limettennoten, begleitet von einer fruchtigen Süße. Das Ganze erinnert nicht einfach an Zitrone, sondern hat eine deutlich komplexere und eigenständigere Richtung. Insgesamt eine Kreuzung, mit deren Ergebnis ich sehr zufrieden bin. Vor allem die Kombination aus Pflanzenstruktur, Ertrag und Geschmack macht sie für mich interessant.",
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
        { src: "img/tulaberry/tb-plant2.jpg", caption: "Tulaberry Tag 65" }
      ]
    },
     {
      id: "fob3",
      name: "Fruit of the Bloom #3",
      type: "Feminisiert & Autoflower",
      born: "Jun 2026",
      packSize: "Samen",
      status: "Getestet",                 // frei wählbar: z. B. "Testphase", "Ausverkauft"
      filterTags: ["Candy", "Fruchtig", "Haze"],

      /* Farben der Detailseite (aus dem Cover) */
      accent: "#1ae824",
      bg: "#d354b9",

      description: "Eine Kreuzung aus Radical Juice und Granite Haze mit kräftigem Wachstum und guter Verzweigung. Die Blüten entwickeln eine ordentliche Dichte und eine starke Harzproduktion. Besonders auffällig ist das Terpenprofil: Orange, Limonade, Candy und Haze ergeben eine sehr eigenständige Kombination.",

      /* Nur belegte Eckdaten eintragen; nicht vorhandene Werte einfach weglassen. */
      stats: {
        totalDays: "80–90 Tage",
        generation: "F1",
        height: "60–120 cm",
        yield: "100–150g / Pflanze",
      
      },

      aroma:   ["Candy", "Orange", "Fanta", "Capri-Sonne"],
      effect:  ["Hybrid", "Talking", "Energetisch"],
      parents: [
        { role: "Mutter", name: "Radical Juice Auto", phenotype: "Fanta Pheno", breeder: "Ripper Seeds" },
        { role: "Vater", globalStrain: "graniteHaze" }
      ],
      notes: "Fruit of the Bloom #3 ist eine Kreuzung aus Radical Juice und Granite Haze. Die Pflanzen zeigen eine ausgeprägte Wuchskraft und entwickeln eine kräftige Struktur mit vielen Seitentrieben und Blütenansätzen. Die Granite Haze bringt dabei ihre typischen Wachstumseigenschaften und einen Teil ihres Haze-Profils mit ein.",
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
      filterTags: ["Gelato", "Beere", "Haze", "Fruchtig"],

      /* Farben der Detailseite (aus dem Cover) */
      accent: "rgb(63, 224, 51)",
      bg: "#cc33e0",

      description: "Hidden Berry Freak ist eine Kreuzung aus Frosty's Auto Freak und Granite Haze. Keine Freaky-Leafs, da Granite Haze keine Mutation. Berry Gelato-Noten von der Mutter, Haze-Charakter von Granite Haze. ",

      /* Nur belegte Eckdaten eintragen; nicht vorhandene Werte einfach weglassen. */
      stats: {
        totalDays: "80–90 Tage",
        generation: "F1",
        height: "60–140 cm",
        yield: "100–120g / Pflanze",
      },

      aroma:   ["Sour", "Zitrus", "Fanta", "Capri-Sonne"],
      effect:  ["Hybrid", "Talking", "Energetisch"],
      parents: [
        { role: "Mutter", name: "Frosty's Auto Freak", breeder: "Khalifa Genetics", lineage: [
          { name: "Frosty's Purple Freak", breeder: "Khalifa Genetics" },
          { name: "Guavalato Auto", breeder: "James Loud Genetics" }
        ] },
        { role: "Vater", globalStrain: "graniteHaze" }
      ],
      notes: "Die Sorte ist eine Kreuzung aus Frosty's Auto Freak (Fanta Pheno) und Granite Haze. Sie hat einen ausufernden Wuchs, dichte Blüten und ein fruchtiges Aroma. Braucht Platz aber wird sehr harzig. Verträgt toppen und LST gut.",
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
      filterTags: ["Kush", "Haze", "Pfeffer", "Erdig"],

      /* Farben der Detailseite (aus dem Cover) */
      accent: "rgb(224, 51, 51)",
      bg: "#79b779",

      description: "Zombii ist eine Kreuzung aus Zombie Kush Auto und Granite Haze. Die Zombie Kush Mutter ziemlich groß und frostig. Wird selbst in kleinen Töpfen sehr groß unf blüht erst um Tag 40–45.",

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
        { role: "Mutter", name: "Zombie Kush Auto", breeder: "Ripper Seeds" },
        { role: "Vater", globalStrain: "graniteHaze" }
      ],
      notes: "Die Sorte ist eine Kreuzung aus Zombie Kush Auto (Zombie Kush Pheno) und Granite Haze. Sie hat einen ausufernden Wuchs, dichte Blüten und ein fruchtiges Aroma. Braucht Platz aber wird sehr harzig. Blüht erst spät, um Tag 40–45. Verträgt toppen und LST gut.",
      cultivationInfo: [{ label: "Veg → Blüte", value: "Später Blütestart. Tag 40-45" }, ],

      pack: {
        front: "img/zii/zii-front.jpg",
      },
    }
  ]
};
