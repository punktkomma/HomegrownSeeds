# Robin's Homegrown

Statische Seite, kein Build, kein Server nötig. `index.html` öffnen oder den Ordner hochladen
(Netlify Drop, GitHub Pages, eigener Webspace).

## Neue Sorte hinzufügen
1. Bilder nach `img/<id>/` legen (pack-front.jpg, optional pack-back.jpg, plant-1.jpg ...).
2. In `data/config.js` den Block der Sorte unter `strains` kopieren und anpassen.
3. Leere Felder (`null` / `[]`) werden automatisch ausgeblendet.

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
