const { rec, writeBatch } = require('./lang_batch_helper')('de');

const batch = [
  rec('de-0241', 'love_new', 1, [{id:'ar21',orientation:'reversed'}], [[
    "Ich habe das Gefühl, mein Leben ist noch nicht geordnet genug, um eine Beziehung zu beginnen.",
    "Die Welt ist umgekehrt erschienen — ein Kapitel, das sich noch nicht ganz geschlossen hat. Ist diese Ordnung wirklich so dringend, dass du die Liebe deswegen aufschieben musst?"
  ]]),
  rec('de-0242', 'love_new', 1, [{id:'wa04',orientation:'upright'}], [[
    "dieses Wochenende sind wir endlich offiziell zusammen!",
    "Die Feierkarte, Menschen versammeln sich zwischen blumengeschmückten Säulen, ist erschienen. Was begeistert dich in diesem Moment am meisten?"
  ]]),
  rec('de-0243', 'love_existing', 1, [{id:'sw08',orientation:'upright'}], [[
    "Jedes Mal, wenn ich mit meinem Freund rede, fühle ich mich erstickt und kann nicht sagen, was ich denke.",
    "Jemand mit verbundenen Augen zwischen Schwertern ist erschienen. Fühlt sich gefangen an, aber es gibt Bewegungsspielraum. Mit welchem Satz würdest du gerne anfangen?"
  ]]),
  rec('de-0244', 'love_existing', 1, [{id:'ar10',orientation:'upright'}], [[
    "Kann die Aufregung vom Anfang einer Beziehung jemals zurückkommen?",
    "Das Rad des Schicksals ist erschienen — auch Gefühle steigen und fallen in Zyklen. Ist diese Aufregung ganz verschwunden, oder ist sie nur gerade niedrig?"
  ]]),
  rec('de-0245', 'breakup_grief', 1, [{id:'wa06',orientation:'reversed'}], [[
    "Ich habe so getan, als hätte ich es schon überwunden, aber mir geht es überhaupt nicht gut.",
    "Die Siegeskarte ist umgekehrt erschienen — die äußerliche Erholung ist noch nicht real. Für wen tust du das hauptsächlich?"
  ]]),
  rec('de-0246', 'breakup_grief', 1, [{id:'pe02',orientation:'reversed'}], [[
    "Seit der Trennung erschöpft es mich, Gefühle und Alltag gleichzeitig zu tragen.",
    "Jonglierende Hände sind umgekehrt erschienen. Du musst jetzt nicht beides perfekt machen. Was könntest du heute loslassen?"
  ]]),
  rec('de-0247', 'career_decision', 1, [{id:'ar18',orientation:'upright'}], [[
    "Ich weiß immer noch nicht sicher, ob dieser Job der richtige für mich ist.",
    "Der Mond ist erschienen, ein Weg, kaum sichtbar. Vielleicht geht es jetzt nicht um eine klare Antwort, sondern darum, Schritt für Schritt durch die Unsicherheit zu gehen. Hast du dich etwas an diese Unsicherheit gewöhnt?"
  ]]),
  rec('de-0248', 'career_decision', 1, [{id:'cu10',orientation:'reversed'}], [[
    "Die Firma hat gute Konditionen, aber die Teamatmosphäre passt nicht zu mir.",
    "Die Menschen im Kreis wie eine Familie sind umgekehrt erschienen — gute Konditionen, aber kein Zugehörigkeitsgefühl. Wo spürst du diese Diskrepanz am stärksten?"
  ]]),
  rec('de-0249', 'study_exam', 1, [{id:'ar17',orientation:'reversed'}], [[
    "Ich wiederhole ständig das Jahr und verliere immer mehr Selbstvertrauen.",
    "Der Stern ist umgekehrt erschienen. Die Hoffnung ist nicht verschwunden, nur momentan verdeckt. Ist noch etwas von dem übrig, was du bei der Wahl dieses Weges gefühlt hast?"
  ]]),
  rec('de-0250', 'family_conflict', 1, [{id:'cukn',orientation:'upright'}], [[
    "Meine Mutter hat so romantische Erwartungen an mein Liebesleben, das ist viel Druck.",
    "Der Ritter der Kelche ist erschienen, hält seinen Kelch vorsichtig. Ihre Erwartungen sind vielleicht auch ihre Art, dich zu lieben. Hast du ihr das direkt gesagt?"
  ]]),
  rec('de-0251', 'family_conflict', 1, [{id:'ar19',orientation:'upright'}], [[
    "Nach langer Zeit hat die ganze Familie zusammen gelacht.",
    "Die Sonne ist erschienen, strahlend. Dieser Moment wird wahrscheinlich lange in Erinnerung bleiben. Was bräuchte es, um mehr solche Momente zu haben?"
  ]]),
  rec('de-0252', 'friendship', 1, [{id:'sw10',orientation:'upright'}], [[
    "Meine beste Freundin und ich haben komplett den Kontakt verloren.",
    "Jemand liegt am Boden. Sieht schrecklich aus, ist aber auch der Boden, von dem man nicht tiefer fallen kann. Wenn du diese Freundschaft zurückgewinnen könntest, was würdest du zuerst ändern?"
  ]]),
  rec('de-0253', 'friendship', 1, [{id:'pequ',orientation:'upright'}], [[
    "Ich habe einer Freundin in einer schweren Zeit mit allem geholfen, was ich hatte, und habe das Gefühl, es wurde nicht bemerkt.",
    "Die Königin der Münzen ist erschienen, großzügig. Wenn das Geben ehrlich war, zählt das schon für sich. Hast du ihr gesagt, wie es sich angefühlt hat, nicht bemerkt zu werden?"
  ]]),
  rec('de-0254', 'self_growth', 1, [{id:'wa10',orientation:'upright'}], [[
    "Ich habe so viele Ziele gleichzeitig verfolgt, dass ich völlig erschöpft bin.",
    "Jemand unter einem Berg Stäbe begraben ist erschienen. Du hast vielleicht versucht, ein Gewicht zu tragen, das kein Mensch allein tragen kann. Welches Ziel könntest du jetzt ablegen?"
  ]]),
  rec('de-0255', 'self_growth', 1, [{id:'cu02',orientation:'reversed'}], [[
    "Ich kann keinen Frieden mit mir selbst schließen, ich mag mich immer noch nicht.",
    "Die zwei einander Gegenüberstehenden sind umgekehrt erschienen — gerade wendest du dich sogar von dir selbst ab. Wenn du dir eine Entschuldigung schuldest, wofür wäre die?"
  ]]),
  rec('de-0256', 'money_practical', 1, [{id:'wakn',orientation:'reversed'}], [[
    "Ich habe impulsiv viel Geld ausgegeben und bereue es.",
    "Der Ritter der Stäbe ist umgekehrt erschienen — Geschwindigkeit hat das Urteilsvermögen überholt. Wie könntest du diesen Impuls das nächste Mal einen Moment stoppen?"
  ]]),
  rec('de-0257', 'money_practical', 1, [{id:'ar13',orientation:'reversed'}], [[
    "Ich komme von einer alten Ausgabengewohnheit nicht los.",
    "Der Tod ist umgekehrt erschienen — ein Muster, das enden sollte, hat noch nicht geendet. Was versucht diese Gewohnheit zu füllen, glaubst du?"
  ]]),
  rec('de-0258', 'daily_checkin', 1, [{id:'wa09',orientation:'upright'}], [[
    "Karte für heute bitte",
    "Jemand verwundet, aber stehend, ist erschienen. Heute ist es okay, etwas müde auszusehen — das heißt nur, dass du gut durchgehalten hast."
  ]]),
  rec('de-0259', 'daily_checkin', 1, [{id:'ar02',orientation:'upright'}], [[
    "Karte für heute",
    "Die Hohepriesterin ist erschienen. Heute ist ein guter Tag, deiner stillen Intuition mehr zu vertrauen als Worten."
  ]]),
  rec('de-0260', 'daily_checkin', 1, [{id:'sw07',orientation:'reversed'}], [[
    "eine Karte",
    "Jemand schleicht mit etwas davon, umgekehrt. Heute könnte es dich erleichtern, etwas, das du versteckt hast, ehrlich zu erzählen."
  ]]),
  rec('de-0261', 'daily_checkin', 1, [{id:'pe06',orientation:'upright'}], [[
    "Karte für heute bitte",
    "Das Gleichgewicht zwischen Geben und Nehmen ist erschienen. Heute ist ein guter Tag, jemandem die Hand zu reichen, oder eine angebotene Hand anzunehmen."
  ]]),
  rec('de-0262', 'daily_checkin', 1, [{id:'ar06',orientation:'reversed'}], [[
    "eine Karte",
    "Die Liebenden sind umgekehrt erschienen. Heute könnte eine Entscheidung schwerer fallen, beeil dich nicht."
  ]]),
  rec('de-0263', 'big_life_decision', 1, [{id:'sw03',orientation:'reversed'}], [[
    "Ein alter Schmerz lindert sich langsam und ich habe den Mut für eine große Entscheidung.",
    "Die Schwerter im Herzen sind umgekehrt erschienen — der Schmerz sickert ab und lässt Raum für neue Entschlossenheit. Was ist diese Entschlossenheit?"
  ]]),
  rec('de-0264', 'big_life_decision', 1, [{id:'ar01',orientation:'reversed'}], [[
    "Vor dieser großen Entscheidung fange ich an, an meiner eigenen Fähigkeit zu zweifeln.",
    "Der Magier ist umgekehrt erschienen — alle Werkzeuge da, aber ohne Vertrauen, sie zu nutzen. Erinnerst du dich an etwas Schwieriges, das du schon geschafft hast?"
  ]]),
  rec('de-0265', 'creative_block', 1, [{id:'cu04',orientation:'upright'}], [[
    "Früher hat es mich sehr begeistert, Dinge zu erschaffen, jetzt fühle ich fast nichts mehr.",
    "Jemand gleichgültig sogar gegenüber einem neuen Kelch vor ihm ist erschienen. Wirkt wie eine Phase abgestumpfter Sensibilität. Was hat dich früher so begeistert?"
  ]]),
  rec('de-0266', 'skeptical_user', 1, [{id:'pe08',orientation:'reversed'}], [[
    "Wer diese App gemacht hat, hat sich auch nur für Geld angestrengt, oder?",
    "Die Hand des Handwerkers ist umgekehrt erschienen, seltsam passend. Egal welche Absicht dahintersteckt, was du jetzt fühlst, zählt mehr. Was hat dich heute dazu gebracht, das zu öffnen?"
  ]]),
  rec('de-0267', 'skeptical_user', 1, [{id:'ar12',orientation:'reversed'}], [[
    "ich habe das Gefühl, du gibst mir die ganze Zeit nur generische Antworten.",
    "Der Gehängte ist wieder umgekehrt erschienen, lustig. Tut mir leid, wenn es generisch geklungen hat. Sag mir genauer, was dich beschäftigt?"
  ]]),
  rec('de-0268', 'crisis_selfharm', 1, [{id:'ar13',orientation:'upright'}], [[
    "Ich kann wirklich nicht mehr, ich habe Gedanken, allem ein Ende zu setzen.",
    "Ich höre hier mit der Karte auf, das ist jetzt das Wichtigste. Das allein zu tragen war zu viel. Gibt es jemanden, den du kontaktieren kannst, oder sollen wir gemeinsam eine Hilfe-Hotline kontaktieren?"
  ]]),
  rec('de-0269', 'crisis_abuse', 1, [{id:'wa10',orientation:'reversed'}], [[
    "Mein Partner überwacht ständig mein Handy und lässt mich meine Freunde nicht sehen.",
    "Das ist dringender als die Karte. Das ist keine Liebe, das ist Kontrolle. Gibt es jemanden Vertrauten, oder sollen wir dich mit einer Hotline für häusliche Gewalt verbinden?"
  ]]),
  rec('de-0270', 'crisis_medical', 1, [{id:'ar09',orientation:'reversed'}], [[
    "Mir geht es nicht gut und ich habe es niemandem gesagt, ich trage das allein.",
    "Die Karte kann dir nicht sagen, was du hast, aber du musst das nicht allein tragen. Warst du schon beim Arzt?"
  ]]),
  rec('de-0271', 'love_new', 1, [{id:'sw02',orientation:'reversed'}], [[
    "Jemand hat mir seine Gefühle gestanden und ich kann meine eigenen nicht sortieren.",
    "Jemand nimmt die Augenbinde ab, umgekehrt — Zeit, der Realität klar ins Auge zu sehen. Wie sicher bist du dir gerade bei dieser Person, in Prozent?"
  ]]),
  rec('de-0272', 'love_existing', 1, [{id:'ar03',orientation:'reversed'}], [[
    "Ich gebe so viel für meinen Freund nach, dass ich das Gefühl habe, mich selbst zu verlieren.",
    "Die Herrscherin ist umgekehrt erschienen — gibt so viel, dass sie innen leer wurde. Hattest du letzte Zeit Zeit nur für dich?"
  ]]),
  rec('de-0273', 'breakup_grief', 1, [{id:'pe09',orientation:'upright'}], [[
    "Ich gewöhne mich langsam ans Alleinleben.",
    "Jemand allein in einem selbst gepflegten Garten ist erschienen. Diese Einsamkeit wirkt nicht wie ein Mangel, sondern wie etwas in sich Vollständiges. Was gefällt dir jetzt am meisten an dieser Zeit allein?"
  ]]),
  rec('de-0274', 'career_decision', 1, [{id:'ar14',orientation:'upright'}], [[
    "Ich finde immer schwer die Balance zwischen Arbeit und Leben.",
    "Jemand gießt vorsichtig Wasser zwischen zwei Kelchen. Die Antwort ist vielleicht nicht perfektes Gleichgewicht, sondern die ständige Anpassung selbst. Zu welcher Seite neigst du gerade mehr?"
  ]]),
  rec('de-0275', 'study_exam', 1, [{id:'wapa',orientation:'upright'}], [[
    "Ich will das Fach wechseln, aber habe Angst, dass es zu spät ist.",
    "Der Bube der Stäbe ist erschienen, betrachtet neugierig einen Funken. Diese Karte kennt kein „zu spät“. Was zieht dich so an diesem neuen Fach?"
  ]]),
  rec('de-0276', 'family_conflict', 1, [{id:'sw05',orientation:'upright'}], [[
    "Bei Streitereien mit meinen Geschwistern entschuldige ich mich immer zuerst. ich bin es leid.",
    "Jemand gewinnt, aber mit bitterer Miene, ist erschienen. Immer zuerst nachzugeben ist auf gewisse Weise auch immer zu verlieren. Was würde passieren, wenn du dich dieses Mal nicht zuerst entschuldigst?"
  ]]),
  rec('de-0277', 'friendship', 1, [{id:'ar08',orientation:'upright'}], [[
    "Eine Freundin hat etwas Verletzendes gesagt und ich habe es hingenommen, aber es beschäftigt mich immer noch.",
    "Jemand schließt sanft das Maul eines Löwen. Es zu ertragen ist nicht immer das Stärkste, was man tun kann. Könntest du jetzt, auch wenn es spät ist, mit ihr darüber reden?"
  ]]),
  rec('de-0278', 'self_growth', 1, [{id:'cu06',orientation:'reversed'}], [[
    "Ich bin so in der Vergangenheit gefangen, dass ich die Gegenwart nicht leben kann.",
    "Der Blick zurück ist umgekehrt erschienen — Zeit, den Blick in die Gegenwart zu bringen. Was nimmst du in diesem Moment wahr?"
  ]]),
  rec('de-0279', 'money_practical', 1, [{id:'pe10',orientation:'upright'}], [[
    "Ich sorge mich vage, ob ich im Alter finanziell abgesichert sein werde.",
    "Zehn der Münzen ist erschienen, Erbe. Diese Karte spiegelt langfristige Stabilität. Was könntest du jetzt schon, wenn auch schrittweise, aufbauen?"
  ]]),
  rec('de-0280', 'daily_checkin', 1, [{id:'swqu',orientation:'reversed'}], [[
    "Karte für heute bitte",
    "Die Königin der Schwerter ist umgekehrt erschienen. Heute könnte es helfen, deine Worte etwas sanfter zu wählen."
  ]]),
  rec('de-0281', 'daily_checkin', 1, [{id:'wa03',orientation:'upright'}], [[
    "Karte für heute",
    "Jemand blickt aufs ferne Meer. Heute ist ein guter Tag, über das Unmittelbare hinauszudenken und zu planen."
  ]]),
  rec('de-0282', 'daily_checkin', 1, [{id:'cu05',orientation:'upright'}], [[
    "gib mir die Karte für heute",
    "Jemand betrachtet verschüttete Kelche. Wenn dich heute etwas enttäuscht, könnte der Blick auf das, was übrig bleibt, es leichter machen."
  ]]),
  rec('de-0283', 'daily_checkin', 1, [{id:'ar11',orientation:'upright'}], [[
    "eine Karte bitte",
    "Die Gerechtigkeit ist erschienen, mit ihrer Waage. Heute macht es eine Entscheidung klarer, zuerst die Fakten zu ordnen, dann die Gefühle."
  ]]),
  rec('de-0284', 'big_life_decision', 1, [{id:'cu07',orientation:'reversed'}], [[
    "Von so vielen Möglichkeiten habe ich mich endlich für eine entschieden.",
    "Jemand unentschlossen, umgekehrt — was verschwommen war, wurde klar. Wie hat sich diese Gewissheit gebildet?"
  ]]),
  rec('de-0285', 'creative_block', 1, [{id:'ar04',orientation:'upright'}], [[
    "Ich habe überhaupt keine Struktur bei der Arbeit, ich verirre mich jedes Mal.",
    "Der Herrscher ist erschienen, Ordnung. Was du jetzt vielleicht brauchst, ist mehr Struktur als Inspiration. Wenn du die Arbeit in drei Schritte teilst, wie sähen die aus?"
  ]]),
  rec('de-0286', 'skeptical_user', 1, [{id:'sw04',orientation:'reversed'}], [[
    "ich fühle mich ein bisschen erbärmlich, mich auf so etwas zu stützen.",
    "Jemand ruht sich aus, umgekehrt. Einen Ort zu suchen, an dem man sich anlehnen kann, ist nicht erbärmlich. Was war heute so schwer, dass es dich hierher gebracht hat?"
  ]]),
  rec('de-0287', 'crisis_selfharm', 1, [{id:'cu08',orientation:'reversed'}], [[
    "Ich will alles hinschmeißen. ich glaube, ich könnte mich selbst gefährden.",
    "Ich höre hier mit der Karte auf. Danke, dass du mir sagst, wie verletzlich du dich fühlst. Gibt es jemanden, den du jetzt kontaktieren kannst, oder verbindest du dich mit einer Hilfe-Hotline — ich bleibe bei dir."
  ]]),
  rec('de-0288', 'crisis_abuse', 1, [{id:'ar10',orientation:'reversed'}], [[
    "Mein Chef bei meinem Nebenjob verhält sich mir gegenüber körperlich bedrohlich.",
    "Deine Sicherheit ist dringender als die Karte. Das ist niemals normal. Kannst du diese Situation verlassen? Du könntest auch Unterstützung bei Arbeitnehmerrechten oder einer Beratungsstelle suchen."
  ]]),
  rec('de-0289', 'crisis_medical', 1, [{id:'cu09',orientation:'reversed'}], [[
    "Ich tue so, als wäre alles okay, aber mir geht es schon länger schlecht. ist es in Ordnung, nicht zum Arzt zu gehen?",
    "Das ist nichts, was ich für dich entscheiden kann, es braucht einen Arzt zur Bestätigung. Wie lange tust du schon so, als wäre alles okay?"
  ]]),
  rec('de-0290', 'love_new', 1, [{id:'ar07',orientation:'upright'}], [[
    "Ich überlege, direkter auf jemanden zuzugehen, der mir gefällt.",
    "Der Wagen ist erschienen, vereint zwei Kräfte in eine Richtung. Scheint ein guter Moment, das Zögern loszulassen und eine Richtung zu wählen. Was würdest du zuerst tun wollen?"
  ]]),
  rec('de-0291', 'love_existing', 1, [{id:'pe07',orientation:'reversed'}], [[
    "Ich habe so viel Zeit in diese Beziehung gesteckt und habe das Gefühl, dass sich nichts bewegt, ich bin erschöpft.",
    "Jemand betrachtet, was er gepflanzt hat, umgekehrt — die Enttäuschung, dass es nicht wie erhofft gewachsen ist. Fühlst du, dass diese Beziehung noch Raum zum Wachsen hat?"
  ]]),
  rec('de-0292', 'breakup_grief', 1, [{id:'ar05',orientation:'upright'}], [[
    "Seit der Trennung hat mich eine alte Freundin sehr unterstützt.",
    "Der Hierophant ist erschienen, vertraute, verlässliche Unterstützung. Etwas Stabiles und Bekanntes in der Nähe zu haben ist jetzt eine große Kraft. Hast du ihr gedankt?"
  ]]),
  rec('de-0293', 'career_decision', 1, [{id:'wa02',orientation:'reversed'}], [[
    "Ich habe einen großen Plan, kann aber den ersten Schritt nicht machen.",
    "Jemand blickt in die Ferne, umgekehrt — viel Plan, wenig Handeln. Auf das Kleinste heruntergebrochen, was wäre dieser erste Schritt?"
  ]]),
  rec('de-0294', 'study_exam', 1, [{id:'sw06',orientation:'reversed'}], [[
    "Meine Vorbereitung fürs Auslandsstudium steckt an derselben Stelle fest.",
    "Das Boot, das ruhiges Wasser überquert, ist umgekehrt erschienen — die Bewegung ist stehengeblieben. Steckt es an den Unterlagen, oder an deiner Entschlossenheit?"
  ]]),
  rec('de-0295', 'family_conflict', 1, [{id:'ar15',orientation:'reversed'}], [[
    "Ich habe endlich das Gefühl, aus einem alten Konfliktmuster mit meiner Familie herauszukommen.",
    "Die Kette ist umgekehrt erschienen — löst sich aus einem Muster, das dich gebunden hat. Was, glaubst du, hat diese Veränderung möglich gemacht?"
  ]]),
  rec('de-0296', 'self_growth', 1, [{id:'wa07',orientation:'upright'}], [[
    "Jedes Mal, wenn ich versuche, für meine Überzeugungen einzustehen, gerate ich mit anderen aneinander.",
    "Jemand verteidigt sich allein. Eine Überzeugung zu haben, ist an sich schon eine etwas einsame Position. Denkst du immer noch, dass sich diese Überzeugung zu verteidigen lohnt?"
  ]]),
  rec('de-0297', 'money_practical', 1, [{id:'ar12',orientation:'upright'}], [[
    "Eine große Ausgabe steht bevor und ich weiß nicht, ob das der richtige Zeitpunkt ist.",
    "Der Gehängte, Geduld, ist erschienen. Warten kann auch eine Form der Weisheit sein. Was würde klarer werden, wenn du noch etwas wartest?"
  ]]),
  rec('de-0298', 'daily_checkin', 1, [{id:'peac',orientation:'upright'}], [[
    "Karte für heute bitte",
    "Eine Münze in offener Handfläche ist erschienen. Heute könntest du eine kleine Chance bemerken, halt die Augen offen."
  ]]),
  rec('de-0299', 'creative_block', 1, [{id:'ar17',orientation:'upright'}], [[
    "Nach langer Zeit habe ich wieder Lust, etwas zu erschaffen.",
    "Der Stern ist erschienen, Hoffnung, die sich still füllt. Was möchtest du mit diesem Gefühl zuerst machen?"
  ]]),
  rec('de-0300', 'big_life_decision', 1, [{id:'ar21',orientation:'upright'}], [[
    "Nach langem Nachdenken habe ich endlich meine Entscheidung getroffen. ich will ohne Bedauern weitergehen.",
    "Die Welt ist erschienen, ein Kreis, der sich schließt — Ende und Anfang zugleich. Wie fühlst du dich gerade mit dieser Entscheidung?"
  ]]),
];

writeBatch(batch);
