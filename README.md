# Robin's Homegrown

Statische Seite, kein Build, kein Server nötig. `index.html` öffnen oder den Ordner hochladen
(Netlify Drop, GitHub Pages, eigener Webspace).

## Neue Sorte hinzufügen
1. Bilder nach `img/<id>/` legen (pack-front.jpg, optional pack-back.jpg, plant-1.jpg ...).
2. In `data/config.js` den Block der Sorte unter `strains` kopieren und anpassen.
3. Leere Felder (`null` / `[]`) werden automatisch ausgeblendet.

Mit `filterTags` (z. B. `["Fruchtig", "Haze"]`) bestimmst du die Filter-Chips der Übersicht.
Sie werden automatisch aus den Tags aller Sorten erzeugt.
Die beiden Bild-Icons daneben schalten die Karten zwischen Cover und erstem Galerie-Bild um.
Mit `cardPlantImage` kannst du pro Sorte ein anderes Pflanzenbild für diese Ansicht festlegen.

Auf der Unterseite einer Sorte kannst du zusätzliche Angaben unter `cultivationInfo` eintragen.
Jeder Eintrag besteht aus einer Beschriftung und einem Wert; die Liste kann beliebig erweitert
werden. Zum Beispiel:

```js
cultivationInfo: [
  { label: "Veg → Blüte", value: "z. B. ca. 3–4 Wochen ab Keimung" },
  { label: "Düngerempfindlichkeit", value: "z. B. eher empfindlich" }
]
```

Die Beispielwerte sind Platzhalter und sollten pro Sorte angepasst werden. Ohne Einträge wird der
Bereich „Anbauinfos“ auf der Unterseite nicht angezeigt.

Wenn `forecast` aktiv ist, lässt sich der Stempel pro Sorte anpassen:

```js
forecastStamp: { label: "Genetik-Prognose", icon: "sparkles", tone: "orange" }
```

`label` ist der Anzeigetext. Für `icon` stehen `sparkles`, `totalDays`, `generation`, `height`,
`yield`, `thc`, `cbd`, `aroma`, `effect` und `leaf` zur Verfügung. `tone` kann `orange`, `blue`,
`green`, `pink` oder `ink` sein. Ohne Angaben verwendet der Stempel „Prognose“ mit Sparkles-Icon
und Orangeton.

Die Eltern trägst du als getrennte Objekte ein. `breeder`, `fGen` (z. B. `F7`) und `lineage` sind optional.
Mit `lineage` kannst du die Genetik dieses Elternteils weiter aufschlüsseln:

```js
parents: [
  {
    role: "Mutter",
    name: "Sortenname",
    fGen: "F7",
    breeder: "Züchter",
    lineage: [
      { name: "Genetik 1", fGen: "F5" },
      { name: "Genetik 2" }
    ]
  },
  { role: "Vater", name: "Sortenname", breeder: "Züchter" }
]
```

Der Lineage-Abschnitt erscheint nach der Galerie, sobald mindestens ein Elternteil Lineage-Einträge hat.

Farben, Texte, Kontaktlink und der „Bald mehr“-Platzhalter stehen oben in `data/config.js`.
Die verwendeten Schriftarten Anton und Barlow Condensed liegen als WOFF2-Dateien unter `fonts/`
und werden lokal eingebunden. Die SIL-OFL-Lizenzen liegen jeweils bei den Fontdateien.

## Datenschutz und rechtliche Angaben

Impressum und Datenschutzhinweise sind über die Links im Footer erreichbar. Vor einer Veröffentlichung
musst du in `data/config.js` unter `site.legal` mindestens deinen vollständigen Namen, deine ladungsfähige
Anschrift und eine E-Mail-Adresse eintragen. Die Hosting-Angaben sind für GitHub Pages anhand der
veröffentlichten GitHub-Hinweise vorbelegt. Prüfe vor Veröffentlichung, welche GitHub-Gesellschaft für
dein Konto maßgeblich ist und ob die Angaben zu Hosting, Auftragsverarbeitung und Drittlandübermittlungen
zu deinem Vertrag passen. GitHub nennt für die IP-Protokolle von Pages-Besuchen keine konkrete
Speicherdauer in den verlinkten Angaben; kläre, ob dein Vertrag oder neuere Anbieterinformationen dazu
genauere Auskunft geben.

Die Seite lädt keine externen Inhalte, Analyse- oder Marketingdienste und setzt laut Quellcode keine
Cookies. Dadurch ist kein Cookie-Banner für diese Funktionen erforderlich. Änderungen an der Website,
Konfiguration oder beim Hosting können die Datenverarbeitung jedoch ändern; aktualisiere dann die
Datenschutzhinweise. Diese Vorlage ersetzt keine rechtliche Prüfung und ist erst nach Ergänzung und
Abgleich mit dem tatsächlichen Betrieb veröffentlichungsreif.
