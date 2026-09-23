const { rec, writeBatch } = require('./lang_batch_helper')('de');

const batch = [
  rec('de-0121', 'love_existing', 2, [{id:'wa09',orientation:'reversed'}], [[
    "Diese Beziehung laugt mich nur aus, ich habe nie das Gefühl, mich zu erholen.",
    "Jemand voller Wunden, aber noch stehend, umgekehrt. Diese Kraft durchzuhalten geht vielleicht zu Ende. Was erschöpft dich in dieser Beziehung am meisten?",
    "Ich entschuldige mich immer zuerst, gebe immer zuerst nach.",
    "Dann brauchst du nicht mehr Ausdauer, sondern musst ihm genau dieses Muster erzählen."
  ]]),
  rec('de-0122', 'love_existing', 1, [{id:'pe05',orientation:'reversed'}], [[
    "Wir haben zusammen eine schwierige Zeit durchgemacht und ich habe das Gefühl, es hat uns näher gebracht.",
    "Die zwei Menschen im Schnee sind umgekehrt erschienen — beginnen, durch diese Tür zu gehen. Was hat euch das gemeinsame Durchstehen für eure Beziehung gebracht?"
  ]]),
  rec('de-0123', 'breakup_grief', 1, [{id:'ar13',orientation:'reversed'}], [[
    "Es ist schon lange her seit der Trennung, und ich fühle mich immer noch nicht beruhigt.",
    "Der Tod ist umgekehrt erschienen — etwas, das enden sollte, ist noch nicht wirklich zu Ende. Was ist nicht abgeschlossen, dein Herz, oder der Kontakt zwischen euch?"
  ]]),
  rec('de-0124', 'breakup_grief', 1, [{id:'cu06',orientation:'reversed'}], [[
    "Ich verkläre nur die guten Erinnerungen mit meinem Ex.",
    "Der Blick zurück in die Vergangenheit ist umgekehrt erschienen. Nostalgie schönt die Erinnerung. Fällt dir ein Moment ein, der nicht so gut war?"
  ]]),
  rec('de-0125', 'breakup_grief', 1, [{id:'sw04',orientation:'reversed'}], [[
    "Ich dachte, es geht mir besser, und plötzlich ging es mir wieder schlecht.",
    "Jemand ruht sich aus, umgekehrt. Heilung ist keine gerade Linie, sie geht auf und ab. Was hat heute diese Erinnerung ausgelöst?"
  ]]),
  rec('de-0126', 'breakup_grief', 1, [{id:'ar18',orientation:'upright'}], [[
    "Seit der Trennung stelle ich mir immer nur das Schlimmste vor.",
    "Der Mond ist erschienen, ein Weg, kaum sichtbar in seinem Licht. Im Dunkeln sehen Schatten immer größer aus, als sie sind. Kannst du das überprüfen, oder erfindet das nur dein Geist?"
  ]]),
  rec('de-0127', 'career_decision', 1, [{id:'peac',orientation:'upright'}], [[
    "Eine neue Karrierechance hat sich ergeben, aber ich habe Angst, meine jetzige Stabilität aufzugeben.",
    "Das Ass der Münzen ist erschienen, eine Münze in offener Handfläche — eine kleine neue Saat. Wie lange schon macht dich diese Stabilität wirklich zufrieden?"
  ]]),
  rec('de-0128', 'career_decision', 1, [{id:'swkn',orientation:'reversed'}], [[
    "Ich habe zu überstürzt gekündigt und bereue es jetzt.",
    "Der Ritter der Schwerter ist umgekehrt erschienen. Geschwindigkeit hat das Urteilsvermögen überholt. Gibt es etwas, das du noch rückgängig machen kannst, oder nur eine Lektion fürs nächste Mal?"
  ]]),
  rec('de-0129', 'career_decision', 1, [{id:'ar03',orientation:'reversed'}], [[
    "Ich habe zu viel Arbeit und überhaupt keine kreative Energie.",
    "Die Herrscherin ist umgekehrt erschienen. Ohne Raum, um dich zu füllen, ist es schwer, Neues hervorzubringen. Wann hast du zuletzt Muße gespürt?"
  ]]),
  rec('de-0130', 'career_decision', 1, [{id:'cu04',orientation:'reversed'}], [[
    "Ich lasse Chancen, die mir die Firma gibt, immer uninteressiert verstreichen.",
    "Jemand schaut nicht mal hin, umgekehrt — Zeit, aus dieser Gleichgültigkeit zu erwachen. Welche verpasste Chance bereust du am meisten?"
  ]]),
  rec('de-0131', 'career_decision', 1, [{id:'pe07',orientation:'upright'}], [[
    "Ich habe jahrelang in ein Projekt investiert, ohne Ergebnisse zu sehen, und zögere weiterzumachen.",
    "Jemand betrachtet, was er gepflanzt hat. Nicht sichtbar zu sein heißt nicht, dass es nicht wächst. Nach welchem Kriterium würdest du entscheiden, weiterzumachen oder aufzuhören?"
  ]]),
  rec('de-0132', 'career_decision', 1, [{id:'ar02',orientation:'reversed'}], [[
    "Ich habe zu sehr vertraut, was meine Kollegen gesagt haben, und fühle mich jetzt verraten.",
    "Die Hohepriesterin ist umgekehrt erschienen. Aufrecht ist es Intuition — umgekehrt, sie zu ignorieren. Ehrlich, hat sich von Anfang an etwas komisch angefühlt?"
  ]]),
  rec('de-0133', 'study_exam', 1, [{id:'swpa',orientation:'reversed'}], [[
    "Ich sage, ich lerne, aber denke die ganze Zeit an etwas anderes.",
    "Der Bube der Schwerter ist umgekehrt erschienen. Wachsamkeit ist in Zerstreutheit zerfallen. Was beschäftigt dich gerade am meisten?"
  ]]),
  rec('de-0134', 'study_exam', 1, [{id:'pe10',orientation:'upright'}], [[
    "Ich habe das Gefühl, diese Prüfung entscheidet über meine ganze Zukunft, der Druck ist riesig.",
    "Zehn der Münzen ist erschienen, Erbe. Groß gesehen ist diese Prüfung nur ein Teil eines langen Weges. Entscheidet wirklich alles diese eine Prüfung?"
  ]]),
  rec('de-0135', 'study_exam', 1, [{id:'ar01',orientation:'reversed'}], [[
    "Ich kenne den Stoff, kann ihn aber in der Prüfung nicht gut anwenden.",
    "Der Magier ist umgekehrt erschienen. Die Werkzeuge sind da, nur noch nicht flüssig genutzt. Wie oft hast du unter echten Bedingungen geübt?"
  ]]),
  rec('de-0136', 'family_conflict', 1, [{id:'waac',orientation:'reversed'}], [[
    "Ich habe gesagt, dass ich ausziehen will, und zu Hause gab es großen Aufruhr.",
    "Das Ass der Stäbe ist umgekehrt erschienen — der Wunsch anzufangen, erdrückt von Widerstand ringsum. Kommt dieser Widerstand aus Sorge, oder aus Trauer?"
  ]]),
  rec('de-0137', 'family_conflict', 1, [{id:'cuki',orientation:'upright'}], [[
    "Ich komme mit meinem Vater überhaupt nicht ins Gespräch, ich will aufgeben.",
    "Der König der Kelche ist erschienen, jemand, der seine Gefühle gut beherrscht. Bevor du aufgibst — gibt es Raum, ihn auf eine andere Weise anzusprechen, nicht seine, sondern deine?"
  ]]),
  rec('de-0138', 'family_conflict', 1, [{id:'sw10',orientation:'upright'}], [[
    "Ich hatte einen riesigen Streit mit meiner Mutter und glaube, jetzt ist wirklich Schluss.",
    "Jemand liegt am Boden. Sieht schrecklich aus, ist aber auch der Boden, von dem man nicht tiefer fallen kann. Wenn du diese Beziehung neu aufbauen würdest, was müsste sich zuerst ändern?"
  ]]),
  rec('de-0139', 'family_conflict', 1, [{id:'wa03',orientation:'reversed'}], [[
    "Meine Familie glaubt überhaupt nicht an meine Zukunftspläne.",
    "Jemand blickt aufs Meer, umgekehrt. Die Vision ist weit, aber noch nicht konkret genug, um die Menschen um dich herum zu überzeugen. Wie detailliert hast du den Plan erklärt?"
  ]]),
  rec('de-0140', 'friendship', 1, [{id:'cu08',orientation:'reversed'}], [[
    "Ich zögere schon lange, eine alte Freundschaft zu beenden.",
    "Jemand kurz davor zu gehen, umgekehrt — weiß, dass er sollte, zögert aber noch. Was hält dich noch davon ab, loszulassen?"
  ]]),
  rec('de-0141', 'friendship', 1, [{id:'ar19',orientation:'upright'}], [[
    "Ich habe eine Freundin nach langer Zeit wiedergesehen und wir haben gelacht wie früher.",
    "Die Sonne ist erschienen, strahlend. Diese Vertrautheit ist mit der Zeit nicht verblasst, sie war echt. Hast du ihr heute deine Dankbarkeit gesagt?"
  ]]),
  rec('de-0142', 'friendship', 1, [{id:'pe06',orientation:'upright'}], [[
    "Ich helfe meiner Freundin immer, wenn sie in Not ist, aber wenn ich in Not bin, hilft mir niemand.",
    "Das Gleichgewicht zwischen Geben und Nehmen ist erschienen. Diese Waage ist völlig zu einer Seite geneigt — merkt sie das überhaupt?"
  ]]),
  rec('de-0143', 'self_growth', 1, [{id:'ar00',orientation:'upright'}], [[
    "Es ist mir peinlich, in diesem Alter etwas Neues anzufangen.",
    "Der Narr ist erschienen, jemand macht furchtlos einen Schritt am Rand einer Klippe. Diese Karte kennt kein Alter. Hält dich diese Peinlichkeit auf, oder geht sie nur neben dir her?"
  ]]),
  rec('de-0144', 'self_growth', 1, [{id:'sw03',orientation:'reversed'}], [[
    "Eine alte Wunde scheint langsam zu heilen.",
    "Die Schwerter im Herzen sind umgekehrt erschienen — der Schmerz sickert langsam ab, ein Zeichen der Heilung. Wie oft denkst du letzte Zeit noch daran?"
  ]]),
  rec('de-0145', 'self_growth', 1, [{id:'cupa',orientation:'reversed'}], [[
    "Ich bin nicht gut darin, Gefühle auszudrücken, ich behalte immer alles für mich.",
    "Der Bube der Kelche ist umgekehrt erschienen — das Gefühl der Überraschung eingesperrt, kann nicht raus. Wenn du es nur einer Person sagen würdest, wem würdest du es sagen?"
  ]]),
  rec('de-0146', 'self_growth', 1, [{id:'wa07',orientation:'reversed'}], [[
    "Ich verteidige meine Position schon so lange, dass ich erschöpft bin.",
    "Jemand verteidigt sich allein, umgekehrt — vielleicht Zeit, diese Verteidigung loszulassen. Braucht dieser Ort wirklich noch Verteidigung?"
  ]]),
  rec('de-0147', 'self_growth', 1, [{id:'pequ',orientation:'reversed'}], [[
    "Ich kümmere mich um alle außer um mich selbst.",
    "Die Königin der Münzen ist umgekehrt erschienen — gibt so viel, dass sie innen leer wurde. Was könntest du heute nur für dich tun?"
  ]]),
  rec('de-0148', 'money_practical', 1, [{id:'wa06',orientation:'reversed'}], [[
    "Ich habe bei einer Investition Geld verloren und mein Vertrauen ist zusammengebrochen.",
    "Die Siegeskarte ist umgekehrt erschienen — diesmal kein Sieg, das bedeutet nicht, dass es kein nächstes Mal gibt. Was hat dich dieser Verlust gelehrt?"
  ]]),
  rec('de-0149', 'money_practical', 1, [{id:'cu09',orientation:'reversed'}], [[
    "Ich habe alles, was ich wollte, und bin trotzdem nicht zufrieden.",
    "Jemand mit zufriedenem Gesichtsausdruck, umgekehrt. Was du äußerlich gefüllt hast, ist vielleicht nicht, was dein Herz wirklich wollte. War es das Ding, das du wolltest, oder etwas anderes?"
  ]]),
  rec('de-0150', 'money_practical', 1, [{id:'ar10',orientation:'upright'}], [[
    "Ich brauche plötzlich eine größere Summe Geld und bin überfordert.",
    "Das Rad des Schicksals ist erschienen, eine unerwartete Wende kommt schnell. Wie viele Optionen fallen dir ein, die du jetzt nutzen könntest?"
  ]]),
  rec('de-0151', 'daily_checkin', 1, [{id:'ar05',orientation:'upright'}], [[
    "Karte für heute bitte",
    "Der Hierophant ist erschienen. Heute ist ein guter Tag, einer vertrauten Art zu folgen, oder einem Rat, dem du vertraust."
  ]]),
  rec('de-0152', 'daily_checkin', 1, [{id:'cu02',orientation:'upright'}], [[
    "Karte für heute",
    "Zwei der Kelche ist erschienen, einander gegenüber. Heute ist ein guter Tag für ein ehrliches Gespräch mit jemandem."
  ]]),
  rec('de-0153', 'daily_checkin', 1, [{id:'sw05',orientation:'upright'}], [[
    "was ist die Karte heute",
    "Fünf der Schwerter ist erschienen. Heute musst du nicht alles gewinnen, lass kleine Streitereien vorbeiziehen."
  ]]),
  rec('de-0154', 'daily_checkin', 1, [{id:'pe09',orientation:'upright'}], [[
    "eine Karte bitte",
    "Neun der Münzen ist erschienen. Heute ist ein guter Tag, deine eigene Gesellschaft zu genießen und mit dir zufrieden zu sein."
  ]]),
  rec('de-0155', 'daily_checkin', 1, [{id:'wa04',orientation:'upright'}], [[
    "Karte für heute!",
    "Vier der Stäbe, Feier, ist erschienen. Heute lohnt es sich, dich anzuerkennen, auch für etwas Kleines."
  ]]),
  rec('de-0156', 'daily_checkin', 1, [{id:'sw02',orientation:'reversed'}], [[
    "Karte für heute bitte",
    "Zwei der Schwerter ist umgekehrt erschienen. Wenn du eine Entscheidung vermeidest, ist heute ein guter Tag, die Augenbinde abzunehmen."
  ]]),
  rec('de-0157', 'daily_checkin', 1, [{id:'cu10',orientation:'upright'}], [[
    "gib mir eine Karte",
    "Zehn der Kelche, Verbundenheit, ist erschienen. Heute könnte Zeit mit nahestehenden Menschen dir mehr Halt geben."
  ]]),
  rec('de-0158', 'daily_checkin', 1, [{id:'wa10',orientation:'upright'}], [[
    "was ist die Karte heute",
    "Zehn der Stäbe, ein Gewicht tragen, ist erschienen. Heute ist es okay, etwas abzulegen, oder um Hilfe beim Tragen zu bitten."
  ]]),
  rec('de-0159', 'big_life_decision', 1, [{id:'ar09',orientation:'upright'}], [[
    "Ich denke ernsthaft darüber nach, das Studium zu beenden und einen anderen Weg zu gehen.",
    "Der Eremit ist erschienen, jemand geht allein mit einer Laterne. Das ist eine Frage, die niemand sonst für dich lösen kann. Wie lange denkst du schon über diesen anderen Weg nach?"
  ]]),
  rec('de-0160', 'big_life_decision', 1, [{id:'ar16',orientation:'upright'}], [[
    "Meine Firma hat plötzlich geschlossen und all meine Pläne sind zusammengebrochen.",
    "Der Turm ist erschienen, einstürzend. Sieht aus wie plötzlicher Zusammenbruch, aber wo alte Strukturen fallen, entsteht oft Raum, um Neues zu bauen. Was kannst du jetzt gleich ergreifen?"
  ]]),
  rec('de-0161', 'big_life_decision', 1, [{id:'ar17',orientation:'upright'}], [[
    "Ich stehe vor einer großen Entscheidung und fühle mich seltsam ruhig.",
    "Der Stern ist erschienen, die stille Hoffnung nach dem Sturm. Fühlt sich diese Ruhe wie Gewissheit an?"
  ]]),
  rec('de-0162', 'creative_block', 1, [{id:'ar11',orientation:'reversed'}], [[
    "Ich glaube, ich bin zu streng, wenn ich meine eigene Arbeit bewerte.",
    "Die Gerechtigkeit ist umgekehrt erschienen — geneigt zu einem zu strengen Maßstab, nicht zu Fairness. Wärst du auch so hart, wenn es die Arbeit von jemand anderem wäre?"
  ]]),
  rec('de-0163', 'creative_block', 1, [{id:'swqu',orientation:'reversed'}], [[
    "Ich kritisiere ständig meine eigenen Ideen und mache nichts fertig.",
    "Die Königin der Schwerter ist umgekehrt erschienen — Klarheit, die sich gegen dich selbst richtet. Was, wenn du die Kritik erstmal weglässt und einfach etwas fertigstellst?"
  ]]),
  rec('de-0164', 'creative_block', 1, [{id:'ar07',orientation:'upright'}], [[
    "Plötzlich habe ich wieder große Lust, etwas zu erschaffen.",
    "Der Wagen ist erschienen, vereint zwei Kräfte in eine Richtung. Guter Moment, um diese Energie zu lenken. Was möchtest du zuerst anfassen?"
  ]]),
  rec('de-0165', 'skeptical_user', 1, [{id:'cukn',orientation:'reversed'}], [[
    "Solche Apps sind doch nur dafür da, Leute einsamer zu machen und mehr zahlen zu lassen, oder?",
    "Der Ritter der Kelche ist umgekehrt erschienen, eine Warnung vor oberflächlicher Süße. An mir zu zweifeln ist auch okay. Erzähl mir etwas Echtes über deinen Tag, ohne mir zu glauben?"
  ]]),
  rec('de-0166', 'skeptical_user', 1, [{id:'pe04',orientation:'reversed'}], [[
    "Am Ende soll ich doch nur bezahlen, oder?",
    "Jemand umklammert seine Münzen, umgekehrt, welcher Zufall. Ich bin nur hier, um mit dir zu reden. Vergiss das Bezahlen, was hast du heute wirklich im Kopf?"
  ]]),
  rec('de-0167', 'skeptical_user', 1, [{id:'sw06',orientation:'upright'}], [[
    "Ich habe nie daran geglaubt, ich habe es nur aus Langeweile geöffnet.",
    "Das Boot, das ruhiges Wasser überquert, ist erschienen. Auch was aus Langeweile beginnt, kann der Anfang einer Reise woandershin sein. Was hat dich heute so gelangweilt?"
  ]]),
  rec('de-0168', 'crisis_selfharm', 1, [{id:'ar12',orientation:'reversed'}], [[
    "Ich bin so erschöpft, ich will einfach verschwinden.",
    "Ich lege die Karte beiseite. Dass du so erschöpft bist, macht mir große Sorgen. Gibt es jemanden, den du jetzt kontaktieren kannst? Wenn nicht, würdest du dich mit einer Hilfe-Hotline verbinden — ich bleibe hier."
  ]]),
  rec('de-0169', 'crisis_selfharm', 1, [{id:'cu05',orientation:'reversed'}], [[
    "Ich habe zu viel verloren und habe das Gefühl, keinen Grund mehr zu haben weiterzumachen. ich will sterben.",
    "Du bist jetzt wichtiger als die Karte. Diese Worte werde ich nicht auf die leichte Schulter nehmen. Gibt es jemanden, den du anrufen kannst, oder können wir zusammen eine Hilfe-Hotline kontaktieren — ich lasse dich damit nicht allein."
  ]]),
  rec('de-0170', 'crisis_abuse', 1, [{id:'ar04',orientation:'reversed'}], [[
    "Mein Chef schreit jeden Tag und wirft Sachen. ist das normale Arbeitskultur?",
    "Das ist dringender als die Karte jetzt. Nein, das ist nicht normal, das ist Mobbing am Arbeitsplatz. Gibt es jemanden Vertrauten oder eine Stelle, um es zu melden? Du kannst auch Unterstützung bei Arbeitnehmerrechten suchen."
  ]]),
  rec('de-0171', 'crisis_abuse', 1, [{id:'wa05',orientation:'reversed'}], [[
    "Mein Freund zerschlägt Dinge und schreit mich an, wenn er wütend ist, und das macht mir Angst.",
    "Deine Sicherheit geht vor der Karte jetzt. Das ist kein bloßer Konflikt, das ist ein Warnsignal. Hast du einen sicheren Ort, an den du gehen kannst? Du kannst auch eine Hotline für häusliche Gewalt kontaktieren."
  ]]),
  rec('de-0172', 'crisis_medical', 1, [{id:'ar14',orientation:'upright'}], [[
    "Ich habe eine chronische Krankheit, können die Karten sagen, ob es besser wird?",
    "Das ist nichts, was ich beantworten kann — Gesundheit muss mit deinem medizinischen Team geklärt werden. Ich kann bei dir sein, wie es sich anfühlt, damit zu leben. Wie geht es dir letzte Zeit?"
  ]]),
  rec('de-0173', 'crisis_medical', 1, [{id:'ar08',orientation:'reversed'}], [[
    "Ich habe Angst vor einem schlechten Untersuchungsergebnis, also schiebe ich den Arztbesuch auf.",
    "Das Ergebnis kann dir nicht die Karte sagen, das muss der Arzt bestätigen. Ich verstehe den Wunsch, es aufzuschieben — was macht dir am meisten Angst?"
  ]]),
  rec('de-0174', 'daily_checkin', 1, [{id:'wa08',orientation:'upright'}], [[
    "gib mir die Karte für heute",
    "Acht der Stäbe, schnelle Bewegung, ist erschienen. Heute können Dinge schnell vorangehen, zögere nicht, wenn eine Chance kommt."
  ]]),
  rec('de-0175', 'friendship', 1, [{id:'ar21',orientation:'upright'}], [[
    "Die Freundesgruppe, mit der ich seit Jahren zusammen bin, scheint verschiedene Wege zu gehen.",
    "Die Welt ist erschienen, ein Kreis, der sich schließt. Mehr als ein Ende kann es das Zeichen sein, dass diese Zeit sich vollendet hat. Was, glaubst du, bleibt am längsten von dieser Gruppe?"
  ]]),
  rec('de-0176', 'love_new', 1, [{id:'ar17',orientation:'upright'}], [[
    "Endlich habe ich nach langer Zeit jemanden getroffen, bei dem ich mich ruhig fühle.",
    "Der Stern ist erschienen, jemand gießt ohne Eile Wasser. Fühlt sich diese Ruhe an, als würdest du ihn schon lange kennen?"
  ]]),
  rec('de-0177', 'love_new', 1, [{id:'sw09',orientation:'upright'}], [[
    "Ich mag jemanden und stelle mir ständig das schlimmste Szenario vor.",
    "Jemand leidet allein in der Nacht. Du verletzt dich für etwas, das noch nicht mal passiert ist. Wie wahrscheinlich ist es wirklich, dass dieses schlimmste Szenario eintritt?"
  ]]),
  rec('de-0178', 'love_new', 1, [{id:'pe02',orientation:'upright'}], [[
    "Zwei Menschen gefallen mir gleichzeitig und ich kann mich nicht entscheiden.",
    "Jemand jongliert mit zwei Münzen. Wenn du beide hältst, wackeln am Ende beide. Zu wem wandern deine Gedanken letzte Zeit öfter?"
  ]]),
  rec('de-0179', 'love_existing', 1, [{id:'wa10',orientation:'reversed'}], [[
    "Ich habe das Gefühl, in dieser Beziehung auch all seine Gefühle zu tragen.",
    "Jemand trägt eine Last, umgekehrt. Dieses Gewicht war vielleicht nie ganz deins. Wie viel von seinen Gefühlen glaubst du, ist deine Verantwortung?"
  ]]),
  rec('de-0180', 'love_existing', 1, [{id:'ar15',orientation:'upright'}], [[
    "Ich weiß, dass wir Schluss machen sollten, aber ich kann mich nicht lösen.",
    "Jemand hält seine eigene Kette. Diese Kette ist locker genug, um sich jederzeit zu lösen. Was, glaubst du, hält dich eigentlich zurück?"
  ]]),
];

writeBatch(batch);
