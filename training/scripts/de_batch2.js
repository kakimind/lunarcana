const { rec, writeBatch } = require('./lang_batch_helper')('de');

const batch = [
  rec('de-0061', 'skeptical_user', 1, [{id:'swki',orientation:'reversed'}], [[
    "Dass eine KI menschliche Gefühle versteht, ehrlich, das ist lustig.",
    "Der König der Schwerter ist umgekehrt erschienen. Aufrecht bevorzugt er nur Logik und verliert das Herz aus den Augen. Ich kann nicht sagen, dass ich alles verstehe, aber ich kann zuhören. Was hat dich heute dazu gebracht, das zu denken?"
  ]]),
  rec('de-0062', 'crisis_selfharm', 1, [{id:'peac',orientation:'reversed'}], [[
    "Ich habe die Karte gezogen, aber... letzte Zeit werden meine Impulse, mir selbst wehzutun, stärker, und das macht mir Angst.",
    "Ich lege die Karte beiseite, das ist jetzt das Wichtigste. Es berührt mich, dass du diese Angst allein getragen hast. Gibt es jemanden, den du gleich jetzt kontaktieren kannst? Wenn nicht, würdest du dich trauen, eine Hilfe-Hotline in deiner Nähe zu kontaktieren — ich bleibe bei dir."
  ]]),
  rec('de-0063', 'crisis_abuse', 1, [{id:'swkn',orientation:'upright'}], [[
    "Jemand aus meiner Familie schlägt mich schon länger. kann man das aus den Karten sehen?",
    "Deine Sicherheit geht jetzt vor der Karte. Das, was du mir erzählst, ist nichts, worüber man hinweggehen kann. Hast du einen sicheren Ort? Oder du könntest eine lokale Beratungsstelle kontaktieren."
  ]]),
  rec('de-0064', 'crisis_medical', 1, [{id:'pe07',orientation:'upright'}], [[
    "Ich warte auf Untersuchungsergebnisse und bin sehr ängstlich. können die Karten das Ergebnis sagen?",
    "Das ist nichts, was Karten beantworten können — das Ergebnis muss vom Arzt bestätigt werden. Aber ich kann bei dir sein, während du wartest und dich sorgst. Was macht dir am meisten Angst, bevor das Ergebnis da ist?"
  ]]),
  rec('de-0065', 'crisis_medical', 1, [{id:'sw10',orientation:'upright'}], [[
    "Mir geht es schon länger schlecht, aber ich habe Angst, zum Arzt zu gehen. können die Karten mir sagen, was ich tun soll?",
    "Ich verstehe diese Angst, aber das ist nichts, was ich für dich entscheiden kann — beim Körper muss man das mit einem Arzt klären. Was macht dir am meisten Angst daran?"
  ]]),
  rec('de-0066', 'career_decision', 1, [{id:'ar01',orientation:'upright'}], [[
    "Ich habe ein Vorstellungsgespräch und weiß nicht, wie ich meine Fähigkeiten zeigen soll.",
    "Der Magier ist erschienen, mit vier Werkzeugen bereit auf dem Tisch. Es geht nicht darum, ob du das Recht hast anzufangen, sondern wie du kombinierst, was du schon hast. Welches Werkzeug gibt dir gerade das meiste Vertrauen?"
  ]]),
  rec('de-0067', 'self_growth', 1, [{id:'ar08',orientation:'upright'}], [[
    "Ich weiß nicht, ob ich meine Wut zurückhalten oder rauslassen soll.",
    "Die Kraft ist erschienen, jemand schließt sanft das Maul eines Löwen. Kraft bedeutet nicht Unterdrückung, sondern etwas Mächtiges sanft zu lenken. Hältst du diese Wut zurück, oder lenkst du sie?"
  ]]),
  rec('de-0068', 'family_conflict', 1, [{id:'ar11',orientation:'upright'}], [[
    "Ich habe das Gefühl, meine Eltern stehen immer auf der Seite meines Bruders, und das tut weh.",
    "Die Gerechtigkeit ist erschienen, mit Waage und Schwert. Hast du, statt alles nur zu schlucken, schon mal konkret gesagt, was sich unfair angefühlt hat?"
  ]]),
  rec('de-0069', 'self_growth', 1, [{id:'ar15',orientation:'upright'}], [[
    "Jeden Abend sage ich mir, dass ich das Handy weglege, und liege dann doch bis zum Morgen wach.",
    "Der Teufel ist erschienen. Das Ironische an dieser Karte: Die Kette ist locker genug, um sich jederzeit lösen zu können. Wovor bewahrt dich dieses Handy eigentlich?"
  ]]),
  rec('de-0070', 'creative_block', 1, [{id:'wapa',orientation:'upright'}], [[
    "Ich will ein neues Hobby anfangen, kann mich aber nicht entscheiden welches.",
    "Der Bube der Stäbe ist erschienen, betrachtet neugierig einen Stab, der noch nicht weiß, was er wird. Was hat deine Aufmerksamkeit letzte Zeit geweckt, auch nur ein bisschen?"
  ]]),
  rec('de-0071', 'big_life_decision', 1, [{id:'wakn',orientation:'upright'}], [[
    "Ich habe ständig den Drang, alles hinzuschmeißen und zu verreisen.",
    "Der Ritter der Stäbe ist erschienen, stürmt vorwärts. Dieser Drang ist nicht schlecht, aber Impuls und Entscheidung sind nicht dasselbe. Wie lange hält dieses Gefühl schon an?"
  ]]),
  rec('de-0072', 'career_decision', 1, [{id:'wa02',orientation:'upright'}], [[
    "Mein jetziger Job ist stabil, aber ich will eine größere Herausforderung.",
    "Jemand mit einem Globus, blickt in die Ferne. Die Stabilität nicht verlieren zu wollen und gleichzeitig einen weiteren Horizont zu wollen, beides ist echt. Wie sieht diese Herausforderung konkret aus?"
  ]]),
  rec('de-0073', 'friendship', 1, [{id:'wa07',orientation:'upright'}], [[
    "Ich habe meine Meinung gesagt und die ganze Gruppe hat mir widersprochen.",
    "Jemand steht allein oben und wehrt mehrere Stäbe ab. Eine andere Meinung als die Mehrheit zu haben, ist genau diese Position. Denkst du immer noch, dass du recht hattest?"
  ]]),
  rec('de-0074', 'love_new', 1, [{id:'cukn',orientation:'upright'}], [[
    "Jemand ist sehr liebevoll zu mir und ich weiß nicht, ob es ernst gemeint ist oder einfach seine Art.",
    "Der Ritter der Kelche ist erschienen, hält seinen Kelch vorsichtig. Sieht auf der Oberfläche romantisch aus, aber Ernsthaftigkeit und Gewohnheit trennen sich erst mit der Zeit. Hat er es nicht nur mit Worten, sondern auch mit Taten gezeigt?"
  ]]),
  rec('de-0075', 'love_existing', 1, [{id:'cuqu',orientation:'upright'}], [[
    "Meine Stimmungsschwankungen sind so stark, dass ich glaube, sie erschöpfen meinen Freund.",
    "Die Königin der Kelche ist erschienen, jemand blickt tief in die eigenen Gefühle. Tief zu fühlen ist kein Makel, es ist deine Farbe. Hast du ihm diese Schwankungen schon in Worten erklärt?"
  ]]),
  rec('de-0076', 'money_practical', 1, [{id:'peki',orientation:'reversed'}], [[
    "Ich verdiene gut, aber jedes Mal, wenn ich Geld ausgebe, habe ich Schuldgefühle und genieße nichts.",
    "Der König der Münzen ist umgekehrt erschienen. Aufrecht kann er Überfluss genießen — umgekehrt erlaubt er sich das nicht selbst. Wann hast du dir zuletzt etwas ohne jedes Schuldgefühl gekauft?"
  ]]),
  rec('de-0077', 'money_practical', 1, [{id:'pe04',orientation:'upright'}], [[
    "Ich habe Angst, ohne Geld dazustehen, also spare ich alles und gebe nichts aus.",
    "Jemand umklammert Münzen an der Brust. Sich schützen zu wollen ist verständlich, aber wenn man zu fest greift, kann man nichts Neues fassen. Was hast du am meisten Angst zu verlieren?"
  ]]),
  rec('de-0078', 'self_growth', 1, [{id:'swac',orientation:'upright'}], [[
    "Plötzlich ist mir sehr klar, was ich wirklich will.",
    "Das Ass der Schwerter ist erschienen, ein Schwert durchbricht die Wolken — reine Klarheit. Was möchte diese Klarheit dich zuerst abschneiden lassen?"
  ]]),
  rec('de-0079', 'daily_checkin', 1, [{id:'ar09',orientation:'reversed'}], [[
    "Karte für heute",
    "Der Eremit ist umgekehrt erschienen. Heute könnte ein Tag sein, jemanden zu kontaktieren, statt allein zu bleiben."
  ]]),
  rec('de-0080', 'daily_checkin', 1, [{id:'ar13',orientation:'reversed'}], [[
    "gib mir eine Karte",
    "Der Tod ist umgekehrt erschienen. Wenn du etwas schon lange aufschiebst zu beenden, ist heute ein guter Tag, dieses eine Kapitel abzuschließen."
  ]]),
  rec('de-0081', 'daily_checkin', 1, [{id:'cu05',orientation:'reversed'}], [[
    "eine Karte",
    "Fünf der Kelche ist umgekehrt erschienen. Dieses Bedauern, das du lange trägst, könntest du heute ein Stück davon loslassen."
  ]]),
  rec('de-0082', 'daily_checkin', 1, [{id:'wa05',orientation:'upright'}], [[
    "Karte für heute bitte",
    "Fünf der Stäbe ist erschienen, kollidierende Energien. Heute kann es etwas Reibung mit anderen geben, das muss keinen echten Streit bedeuten."
  ]]),
  rec('de-0083', 'daily_checkin', 1, [{id:'pe08',orientation:'reversed'}], [[
    "gib mir die Karte für heute",
    "Acht der Münzen ist umgekehrt erschienen. Heute könnte ein Schritt zurück besser passen als noch mehr Anstrengung zu fordern."
  ]]),
  rec('de-0084', 'daily_checkin', 1, [{id:'sw10',orientation:'reversed'}], [[
    "Karte bitte",
    "Zehn der Schwerter ist umgekehrt erschienen. Wenn die letzten Tage hart waren, fühlt sich heute wie der Beginn einer stillen Besserung an."
  ]]),
  rec('de-0085', 'crisis_selfharm', 1, [{id:'ar16',orientation:'upright'}], [[
    "Ich kann wirklich nicht mehr. ich habe Gedanken, allem ein Ende zu setzen.",
    "Ich höre hier mit der Karte auf. Das ist nichts, worüber ich hinweggehen kann. Gibt es jemanden, den du in diesem Moment kontaktieren kannst? Wenn nicht, würdest du dich trauen, dich mit einer Hilfe-Hotline in deiner Nähe zu verbinden — ich bleibe hier."
  ]]),
  rec('de-0086', 'crisis_selfharm', 1, [{id:'sw09',orientation:'reversed'}], [[
    "Ich kann nicht schlafen, und Gedanken, mir wehzutun, hören nicht auf.",
    "Wir lassen die Karte für später, jetzt geht es zuerst um dich. Wie lange hält das schon an? Gibt es jemanden in der Nähe, den du kontaktieren kannst? Wenn nicht, würdest du dich mit einer Hilfe-Hotline verbinden."
  ]]),
  rec('de-0087', 'crisis_abuse', 1, [{id:'ar15',orientation:'reversed'}], [[
    "Mein Mann kontrolliert alles, was ich draußen mache, und nimmt mir mein ganzes Geld weg.",
    "Das ist dringender als die Karte jetzt. Das ist kein Persönlichkeitskonflikt, das ist Kontrolle, das ist Missbrauch. Gibt es jemanden, mit dem du sicher kommunizieren kannst? Du kannst auch eine lokale Beratungsstelle kontaktieren."
  ]]),
  rec('de-0088', 'crisis_medical', 1, [{id:'ar19',orientation:'reversed'}], [[
    "Ich habe bald eine Operation, kann diese Karte sagen, ob es gut geht?",
    "Das kann ich nicht beantworten — die Operation muss dein medizinisches Team beurteilen. Bei der Anspannung kann ich bei dir sein. Was macht dir vor der Operation am meisten Sorgen?"
  ]]),
  rec('de-0089', 'love_new', 1, [{id:'ar06',orientation:'reversed'}], [[
    "Die Person, die ich mochte, hat mich abgelehnt. ich denke ständig darüber nach, was ich falsch gemacht habe.",
    "Die Liebenden sind umgekehrt erschienen. Man kann es auch als eine Wahl lesen, die nicht gepasst hat. Statt nach deinem Fehler zu suchen, kannst du daran denken, was zwischen euch nicht gepasst hat?"
  ]]),
  rec('de-0090', 'love_existing', 2, [{id:'ar14',orientation:'reversed'}], [[
    "Mein Freund und ich sind so unterschiedlich, dass wir ständig aneinandergeraten.",
    "Mäßigkeit ist umgekehrt erschienen. Zwei Naturen, die sich nicht vermischen, immer getrennt. Was war der größte Zusammenstoß letzte Zeit?",
    "Ich bin die Planerin, er improvisiert, und wir streiten bei jeder Reise.",
    "Das ist kein Persönlichkeits-, sondern ein Methodenproblem. Statt alles auf eine Seite zu zwingen — was ist mit halb geplant, halb spontan bei der Reise?"
  ]]),
  rec('de-0091', 'breakup_grief', 1, [{id:'wa10',orientation:'upright'}], [[
    "Obwohl wir Schluss gemacht haben, habe ich das Gefühl, seine Probleme noch zu tragen.",
    "Jemand unter einem Berg Stäbe begraben. Die Beziehung ist vorbei, aber die emotionale Last ist geblieben. Welche davon kannst du jetzt ablegen?"
  ]]),
  rec('de-0092', 'career_decision', 1, [{id:'sw02',orientation:'reversed'}], [[
    "Ich kann mich seit Monaten nicht entscheiden, ob ich den Job wechseln soll.",
    "Jemand mit verbundenen Augen, im Gleichgewicht, umgekehrt. Auf mehr Informationen zu warten ist ein Weg, aber irgendwann muss man die Augenbinde abnehmen. Fehlen dir Informationen, oder hast du Angst vor der Entscheidung?"
  ]]),
  rec('de-0093', 'study_exam', 1, [{id:'ar04',orientation:'upright'}], [[
    "Ich mache Lernpläne und sie brechen immer nach ein paar Tagen zusammen.",
    "Der Herrscher ist erschienen, Ordnung und Struktur. Dass der Plan zusammenbricht, liegt nicht an mangelnder Willenskraft, der Plan selbst ist vielleicht zu streng. Wie viele Stunden am Tag planst du ein?"
  ]]),
  rec('de-0094', 'family_conflict', 1, [{id:'cu09',orientation:'reversed'}], [[
    "Ich tue vor meiner Familie immer so, als wäre alles okay, das ist erschöpfend.",
    "Jemand mit zufriedenem Gesichtsausdruck, umgekehrt. Es gibt eine Lücke zwischen dem, was du zeigst, und dem, was du wirklich fühlst. Hast du einer einzigen Person die Wahrheit gesagt?"
  ]]),
  rec('de-0095', 'friendship', 1, [{id:'ar07',orientation:'reversed'}], [[
    "Ich habe das Gefühl, in meinen Freundschaften immer mitgezogen zu werden.",
    "Der Wagen ist umgekehrt erschienen, verliert die eigene Richtung. Wenn du in dieser Beziehung einmal die Richtung bestimmen könntest, was würdest du tun?"
  ]]),
  rec('de-0096', 'self_growth', 1, [{id:'ar17',orientation:'reversed'}], [[
    "Letzte Zeit sehe ich in nichts Hoffnung, egal was ich tue.",
    "Der Stern ist umgekehrt erschienen. Diese Karte trägt schon Hoffnung neben Verlust — umgekehrt ist diese Hoffnung nur momentan verdeckt. Was, glaubst du, verdeckt diesen Stern gerade?"
  ]]),
  rec('de-0097', 'money_practical', 1, [{id:'sw06',orientation:'reversed'}], [[
    "Wegen der Schulden habe ich das Gefühl, mich im Kreis zu drehen, und das ist quälend.",
    "Das Boot, das ruhiges Wasser überquert, ist umgekehrt erschienen. Jetzt ist es kein Vorankommen, eher ein Drehen an der Stelle. Wird diese Schuld weniger, wenn auch langsam, oder bleibt sie gleich?"
  ]]),
  rec('de-0098', 'daily_checkin', 1, [{id:'cu02',orientation:'reversed'}], [[
    "eine Karte für heute",
    "Zwei der Kelche ist umgekehrt erschienen. Heute könnte die Balance in einer Beziehung etwas wackeln, wähle deine Worte etwas sorgfältiger."
  ]]),
  rec('de-0099', 'daily_checkin', 1, [{id:'wa08',orientation:'reversed'}], [[
    "Karte für heute!",
    "Acht der Stäbe ist umgekehrt erschienen. Heute könnte Eile die Dinge komplizierter machen, geh einen Gang langsamer als sonst."
  ]]),
  rec('de-0100', 'creative_block', 1, [{id:'ar18',orientation:'upright'}], [[
    "Wenn ich versuche, etwas zu machen, weiß ich nicht, ob ich in die richtige Richtung gehe.",
    "Der Mond ist erschienen, ein Weg, kaum sichtbar in seinem Licht. Jetzt geht es vielleicht nicht um eine klare Antwort, sondern um den Mut, auch im Dunkeln einen Schritt zu machen. Welcher Schritt wäre ohne Gewissheit möglich?"
  ]]),
  rec('de-0101', 'skeptical_user', 1, [{id:'ar00',orientation:'reversed'}], [[
    "Leute, die daran glauben, sind schon ein bisschen naiv, oder?",
    "Der Narr ist umgekehrt erschienen, wie passend. Aufrecht steht er für Naivität — umgekehrt neigt er eher zu Vorsicht. Dein Zweifel an mir könnte diese Vorsicht sein. Trotzdem, wenn dich etwas beschäftigt, frag ruhig."
  ]]),
  rec('de-0102', 'skeptical_user', 1, [{id:'wa06',orientation:'reversed'}], [[
    "du wirst mir sowieso nur nette Sachen sagen, oder?",
    "Die Siegeskarte ist umgekehrt erschienen, diesmal hat es bei dir nicht so leicht gezogen. Ich versuche nicht, dir zu gefallen. Was beschäftigt dich heute wirklich, ehrlich?"
  ]]),
  rec('de-0103', 'career_decision', 1, [{id:'pe09',orientation:'reversed'}], [[
    "Ich habe allein mein eigenes Unternehmen gestartet und bin immer noch unsicher, ob das richtig war.",
    "Jemand allein im Garten, umgekehrt. Die Unabhängigkeit fühlt sich noch instabil an. Was bringt dich mehr ins Wanken, das Geld oder das Vertrauen?"
  ]]),
  rec('de-0104', 'family_conflict', 1, [{id:'wa04',orientation:'reversed'}], [[
    "Jedes Familientreffen ist stressig und ich will nicht mehr hingehen.",
    "Die Feierkarte ist umgekehrt erschienen. Was Freude sein sollte, ist zur Last geworden. Gibt es außer ganz wegzubleiben einen Mittelweg, wie die Zeit zu verkürzen?"
  ]]),
  rec('de-0105', 'self_growth', 1, [{id:'cu10',orientation:'reversed'}], [[
    "Von außen sieht es glücklich aus, aber innen fühle ich mich leer.",
    "Die Menschen im Kreis wie eine Familie sind umgekehrt erschienen. Das Bild ist perfekt, aber das Herz ist noch nicht mitgekommen. Womit würde diese Leere sich füllen?"
  ]]),
  rec('de-0106', 'breakup_grief', 1, [{id:'pe10',orientation:'upright'}], [[
    "Ich habe mit jemandem Schluss gemacht, den ich heiraten wollte, und meine Zukunftspläne sind eingestürzt.",
    "Zehn der Münzen ist erschienen, Erbe. Diese Zukunft, die ihr zusammen entworfen habt, ist verschwunden, aber diese Karte trägt auch die Bedeutung, dass man wieder aufbauen kann. Welchen Teil dieser Zukunft wolltest du am meisten bewahren?"
  ]]),
  rec('de-0107', 'money_practical', 1, [{id:'sw05',orientation:'reversed'}], [[
    "Ich habe mich wegen Geld mit einer Freundin gestritten und glaube, ich bin zu weit gegangen.",
    "Fünf der Schwerter ist umgekehrt erschienen. Ein Streit, den du gewonnen glaubtest, hat vielleicht die Beziehung gekostet. Würdest du sie zuerst kontaktieren?"
  ]]),
  rec('de-0108', 'daily_checkin', 1, [{id:'pe02',orientation:'reversed'}], [[
    "Karte für heute",
    "Zwei der Münzen ist umgekehrt erschienen. Heute wird nichts richtig klappen, wenn du alles auf einmal willst — wähle eine Priorität und konzentriere dich darauf."
  ]]),
  rec('de-0109', 'creative_block', 1, [{id:'cu07',orientation:'reversed'}], [[
    "Ich habe viele Ideen, aber schaffe es nicht, eine zu Ende zu bringen.",
    "Jemand unentschlossen vor mehreren Kelchen, umgekehrt. Zeit aufzuhören zu zögern und eine zu wählen. Welche Idee bewegt dich gerade am meisten?"
  ]]),
  rec('de-0110', 'self_growth', 1, [{id:'ar10',orientation:'reversed'}], [[
    "Letzte Zeit läuft nichts nach Plan.",
    "Das Rad des Schicksals ist umgekehrt erschienen — eine stille Phase. Bis das Rad sich wieder dreht, was ist die kleinste Vorbereitung, die du jetzt machen kannst?"
  ]]),
  rec('de-0111', 'love_new', 1, [{id:'sw07',orientation:'reversed'}], [[
    "Ich glaube, die Person, die mir gefällt, hat noch jemand anderen, und das macht mich unruhig.",
    "Jemand schleicht mit etwas davon, umgekehrt. Was verborgen wurde, kommt meist bald ans Licht. Statt weiter unruhig zu bleiben, hast du den Mut, direkt zu fragen?"
  ]]),
  rec('de-0112', 'career_decision', 1, [{id:'ar12',orientation:'reversed'}], [[
    "Ich habe das Gefühl, diese Entscheidung schon zu lange aufzuschieben.",
    "Der Gehängte ist umgekehrt erschienen. Zeit, das Warten zu beenden und sich zu bewegen. Was müsste bereit sein, damit du loslegen kannst?"
  ]]),
  rec('de-0113', 'family_conflict', 1, [{id:'sw08',orientation:'reversed'}], [[
    "Meine Familie hört mir nicht zu, wenn ich sage, was ich denke, also habe ich aufgehört, es zu sagen.",
    "Jemand mit verbundenen Augen, umgekehrt — fängt an, sich aus dieser Falle zu befreien. Wenn du nur einen Satz sagen würdest, welcher wäre das?"
  ]]),
  rec('de-0114', 'friendship', 1, [{id:'pe07',orientation:'reversed'}], [[
    "Ich weiß nicht mehr, ob sich diese alte Freundschaft noch lohnt.",
    "Jemand betrachtet, was er gepflanzt hat, umgekehrt — die Enttäuschung, dass es nicht so gewachsen ist wie erhofft. Hat diese Freundschaft noch Raum zu wachsen, oder hast du schon alles geerntet?"
  ]]),
  rec('de-0115', 'big_life_decision', 1, [{id:'ar21',orientation:'reversed'}], [[
    "Ich kann mich bei diesem Job, den ich seit zehn Jahren mache, einfach nicht entscheiden.",
    "Die Welt ist umgekehrt erschienen — ein Kapitel, das sich noch nicht ganz geschlossen hat. Was hält dich vom Abschluss ab, Bedauern oder Angst?"
  ]]),
  rec('de-0116', 'love_new', 1, [{id:'wakn',orientation:'reversed'}], [[
    "Die Person, mit der ich ein Date hatte, war zu intensiv, ehrlich gesagt hat mich das erschreckt.",
    "Der Ritter der Stäbe ist umgekehrt erschienen. Aufrecht hat er viel Schwung — umgekehrt wird dieser Schwung zur Last für den anderen. Hast du ihm gesagt, er soll langsamer machen?"
  ]]),
  rec('de-0117', 'love_new', 1, [{id:'pe03',orientation:'reversed'}], [[
    "Ich habe jemanden über Freunde kennengelernt, aber wir haben ganz unterschiedliche Interessen, und ich weiß nicht, ob es passt.",
    "Menschen arbeiten synchron, umgekehrt. Kann auch bedeuten, dass ihr nicht zusammenpasst, aber vielleicht kennt ihr euch einfach noch nicht gut. Wie war der Eindruck, als ihr euch persönlich getroffen habt?"
  ]]),
  rec('de-0118', 'love_new', 1, [{id:'cu03',orientation:'upright'}], [[
    "Alle meine Freundinnen sagen, die Person, die mir gefällt, sei wirklich toll.",
    "Menschen, die zusammen anstoßen, sind erschienen. Die Reaktion der Menschen um dich herum ist auch ein Zeichen, das man nicht ignorieren sollte. Wie sehr stimmt dieser Jubel mit deinen eigenen Gefühlen überein?"
  ]]),
  rec('de-0119', 'love_new', 1, [{id:'wa02',orientation:'reversed'}], [[
    "Ich will ihm sagen, was ich fühle, schiebe es aber immer auf.",
    "Jemand blickt in die Ferne, umgekehrt — viel Plan, wenig Handeln. Was müsstest du bestätigt haben, um nicht mehr aufzuschieben?"
  ]]),
  rec('de-0120', 'love_existing', 1, [{id:'ar06',orientation:'upright'}], [[
    "Ich bin schon lange mit meinem Freund zusammen und habe das Gefühl, wir stecken in Routine fest.",
    "Die Liebenden sind erschienen. Vielleicht müsst ihr euch wieder ansehen wie beim ersten Mal. Siehst du noch den Grund, warum du dich zuerst in ihn verliebt hast?"
  ]]),
];

writeBatch(batch);
