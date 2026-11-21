const missions = [
  {
    id: "op-yulakia-nektar",
    codename: "Operation Nektar",
    title: "Wie der Pheonix aus der Asche",
    status: "In Planung",
    mapName: "Yulakia",
    mapImage: "assets/maps/yulakia_tactical_map.png",

    scenario: "Yulakia ist eine fiktive Inselnation, die seit über zehn Jahren durch einen Bürgerkrieg zwischen West- und Ost-Yulakia gespalten ist. Der Westen wird politisch und militärisch durch NATO-Staaten unterstützt, während der Osten von Russland nahestehenden Separatisten kontrolliert wird. Offiziell erheben weder die NATO noch Russland Gebietsansprüche auf Yulakia.  Vor Kurzem wurden jedoch große Ölreserven unter der Insel entdeckt. Seitdem ist das internationale Interesse an Yulakia stark gestiegen.  Nach Jahren relativer Ruhe soll ein geheimes Special-Ops-Team den eingefrorenen Konflikt gezielt wieder eskalieren lassen. Ziel ist es, einen legitimen Vorwand für eine größere NATO-Intervention zu schaffen und langfristig Zugriff auf die Ölreserven zu sichern.",

    briefing: "Ihr seid Teil eines nicht offiziell existierenden Special-Ops-Teams. Euer Auftrag besteht darin, verdeckt in Ost-Yulakia einzudringen und mehrere Ziele so zu manipulieren, dass die Angriffe wie Aktionen der Separatisten oder der National-Truppen wirken. Die Lage soll bewusst destabilisiert werden, ohne dass eine direkte Verbindung zur NATO entsteht. Die NATO-FOB 'Flerik' auf Yulakia dient offiziell nur der Stabilisierung und Ausbildung west-yulakischer Kräfte daher erhaltet ihr eine eigene abgelegende FOB. Sie darf nicht mit eurer Operation in Verbindung gebracht werden. Sollte eure Identität auffliegen, wird jede Beteiligung abgestritten.",
    briefing2: "Ihr werdet zivil in XXX landen. Vor Ort werden euch Fahrzeuge bereitgestellt. Ab diesem Zeitpunkt seid ihr auf euch allein gestellt. Haltet zu Beginn den Kopf unten und vermeidet unnötige Aufmerksamkeit. Versucht, möglichst viele Informationen über die Region und lokale Kräfte zu sammeln. Wir haben einige Informanten vor Ort. Es kann jedoch notwendig sein, weitere Kontakte herzustellen oder Personen zu bestechen. Während der Operation entscheidet euer Truppführer über das weitere Vorgehen. Passt euch der Lage an, seit unauffällig oder aktiv und vermeidet jede Verbindung zu offiziellen NATO-Kräften oder der Polizei.",

    factions: [
      {
        name: "US Special Ops 'ZENSIERT'",
        role: "Spieler Fraktion"
      },
      {
        name: "Western Yulakia | National Partei",
        role: "Neutral / Gegnerische Fraktion"
      },
      {
        name: "Eastern Yulakia | Separatisten",
        role: "Gegnerische Fraktion"
      }
    ],

    markers: [
      {
        title: "FOB – Forward Operating Base",
        type: "friendly",
        x: 6.7,
        y: 45,
        info: "Eine FOB, ausgeschrieben Forward Operating Base, bezeichnet eine vorgeschobene Operationsbasis im Einsatzgebiet. Sie dient als taktischer Stützpunkt für Infanterie, Aufklärungskräfte, Fahrzeugverbände und Unterstützungseinheiten. Von einer FOB aus werden Patrouillen, Sicherungsoperationen, Aufklärungsmissionen, Evakuierungen und koordinierte Angriffe geplant und durchgeführt. Sie verfügt je nach Lage über Munitions- und Treibstoffvorräte, medizinische Versorgung, Funk- und Kommandoeinrichtungen sowie Stellplätze für Fahrzeuge oder Luftunterstützung. Da sich eine FOB näher an der Front oder in instabilem Gebiet befindet, ist sie meist stärker gefährdet als ein Hauptstützpunkt. Ihre Sicherheit hängt von Wachposten, Patrouillen, Befestigungen und der ständigen Einsatzbereitschaft der dort stationierten Kräfte ab."
      },
      {
        title: "FOB Flerik",
        type: "friendly",
        x: 10.95,
        y: 78,
        info: "Forward Operating Base - "
      },
      {
        title: "Kontrollpunkt SL",
        type: "objective",
        x: 29.85,
        y: 73.95,
        info: "Kontrollpunkt nahe der Frontlinie der perfekte Ort um Chaos zu stiften."
      },
      {
        title: "Öl Raffenarie",
        type: "objective",
        x: 16,
        y: 26,
        info: "Eine wertvolle Raffenarie und ihr Verlust würde sicher gutes Eskalationspotenzial bieten."
      },
      {
        title: "Artillerie Ziel 1",
        type: "objective",
        x: 30,
        y: 36,
        info: "Finden sie ein Geschütz und Zerstören sie das Ziel."
      },
      {
        title: "Artillerie Ziel 2",
        type: "objective",
        x: 37.5,
        y: 32,
        info: "Finden sie ein Geschütz und Zerstören sie das Ziel."
      },
      {
        title: "Extraktion",
        type: "extraction",
        x: 8,
        y: 4.5,
        info: ""
      },
    ],

    keybinds: [
      ["Karte öffnen", "M"],
      ["Kompass", "K"],
      ["GPS", "Rechts Strg + M"],
      ["Inventar", "I"],
      ["Interaktion", "Leertaste / Mausradmenü"],
      ["Funk", "Feststelltaste"]
    ]
  },


//==================================//
//          NEUE MISSION            //
//==================================//


  {
    id: "op-cytech-underground",
    codename: "CYTECH Underground Raid",
    title: "Atom für Atom",
    status: "In Planung",
    mapName: "CYTECH - Underground",
    mapImage: "assets/maps/placeholder_tactical_map.png",

    scenario: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores",

    briefing: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    briefing2: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur",

    factions: [
      {
        name: "Rusische Söldner 'Blackwatch'",
        role: "Spieler Fraktion"
      },
      {
        name: "ZENSIERT",
        role: "Gegnerische Fraktion"
      }
    ],

    markers: [
      {
        title: "",
        type: "",
        x: 500,
        y: 500,
        info: ""
      },
    ],

    keybinds: [
      ["Karte öffnen", "M"],
      ["Kompass", "K"],
      ["GPS", "Rechts Strg + M"],
      ["Inventar", "I"],
      ["Interaktion", "Leertaste / Mausradmenü"],
      ["Funk", "Feststelltaste"]
    ]
  },

//==================================//
//          NEUE MISSION            //
//==================================//

{
  id: "op-skeldmark-winterhilfe",
  codename: "Operation Winterhilfe",
  title: "Der letzte Weg durch den Schnee",
  status: "In Planung",
  mapName: "Napf Winter",
  mapImage: "assets/maps/placeholder_tactical_map.png",

  scenario: "Seit mehreren Jahren ist das Grenzgebiet zwischen Skeldmark und seinem Nachbarstaat politisch umstritten. Beide Nationen erheben Ansprüche auf die Region, deren Bevölkerung zunehmend unter den Folgen des Konflikts leidet. Besonders der harte Winter hat die humanitäre Lage verschärft. Straßen sind beschädigt, Versorgungswege unterbrochen und zahlreiche Ortschaften von regelmäßigen Hilfslieferungen abgeschnitten. Zwischen Münsingen und Worb befindet sich eine befestigte Stellung, die mittlerweile auch als Zufluchtsort für zahlreiche Zivilisten dient. Lebensmittel, Medikamente und medizinische Ausrüstung werden dringend benötigt. Skeldmark hat deshalb einen humanitären Versorgungskonvoi zusammengestellt. Die militärische Präsenz in der Region ist jedoch umstritten. Teile der Bevölkerung stehen den skeldmarkischen Streitkräften skeptisch gegenüber, während bewaffnete Gruppen und mögliche Minenfelder die Sicherheit der Straßen gefährden.",

  briefing: "Ihr seid Teil eines Vorauskommandos der Streitkräfte Skeldmarks. Eure Aufgabe besteht darin, die vorgesehene Versorgungsroute zwischen Münsingen und Worb zu erkunden und für einen nachfolgenden humanitären Konvoi freizumachen. Der Konvoi transportiert dringend benötigte Lebensmittel, Medikamente und medizinische Ausrüstung zu einer befestigten Stellung, in der zahlreiche Zivilisten Schutz suchen. Ihr fahrt dem Konvoi voraus und überprüft die Straße auf mögliche Gefahren. Dazu gehören Straßensperren, beschädigte Fahrzeuge, Minen und andere Hindernisse. Die Sicherheit des Konvois und der Zivilbevölkerung hat oberste Priorität. Ein Scheitern der Mission könnte die Versorgung der Menschen erheblich gefährden.",

  briefing2: "Rechnet während eures Einsatzes mit unvorhergesehenen Situationen. Nicht jede Straßensperre stellt eine feindliche Handlung dar. Zivilisten könnten aus Verzweiflung protestieren, Hilfe benötigen oder versuchen, den Konvoi aufzuhalten. Begegnet der Bevölkerung mit Respekt und versucht, Konflikte zunächst durch Kommunikation zu lösen. Unterstützt Zivilisten bei Verkehrsunfällen und medizinischen Notfällen, sofern die Sicherheitslage dies zulässt. Verdächtige Gegenstände und mögliche Sprengfallen sind zu melden und durch qualifiziertes Personal zu untersuchen. Haltet die Verbindung zum Konvoi aufrecht und meldet, wenn Streckenabschnitte sicher passierbar sind. Der Einsatz gilt als erfolgreich, wenn der Versorgungskonvoi sein Ziel erreicht und die Hilfsgüter übergeben werden können.",

  factions: [
    {
      name: "Streitkräfte Skeldmarks",
      role: "Spieler Fraktion"
    },
    {
      name: "Grenzbevölkerung",
      role: "Neutral / Zivilisten"
    },
    {
      name: "Bewaffnete Grenzmilizen",
      role: "Potenzielle Gegnerische Fraktion"
    },
    {
      name: "Humanitärer Versorgungskonvoi",
      role: "Verbündete Fraktion"
    }
  ],

  markers: [
  ],

  keybinds: [
    ["Karte öffnen", "M"],
    ["Kompass", "K"],
    ["GPS", "Rechts Strg + M"],
    ["Inventar", "I"],
    ["Interaktion", "Leertaste / Mausradmenü"],
    ["Funk", "Feststelltaste"]
  ]
},
  ];
