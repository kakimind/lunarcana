const { rec, writeBatch } = require('./lang_batch_helper')('de');

const batch = [
  rec('de-0181', 'love_existing', 1, [{id:'sw07',orientation:'upright'}], [[
    "Ich erzähle meinem Freund kleine Lügen und mache mir Sorgen, dass er es entdeckt.",
    "Jemand schleicht mit etwas davon. Verstecken hat oft seine Gründe, aber diese Angst zermürbt die Beziehung mehr als die Lüge selbst. Was macht dir am meisten Angst, die Wahrheit zu sagen?"
  ]]),
  rec('de-0182', 'breakup_grief', 1, [{id:'pe08',orientation:'upright'}], [[
    "Seit der Trennung stürze ich mich nur in die Arbeit. ist das okay so?",
    "Der Handwerker, still und konzentriert bei der Arbeit, ist erschienen. Sich in die Arbeit zu stürzen kann auch eine Form der Heilung sein. Denk nur daran, ab und zu die Werkzeuge abzulegen und dich die Traurigkeit fühlen zu lassen."
  ]]),
  rec('de-0183', 'breakup_grief', 1, [{id:'cuqu',orientation:'reversed'}], [[
    "Seit der Trennung weiß ich nicht, wie ich mit meinen Gefühlen umgehen soll.",
    "Die Königin der Kelche ist umgekehrt erschienen — jemand, der tief in seine Gefühle blickt, aber jetzt von ihnen überwältigt wird. Wenn du dem, was du fühlst, einen Namen geben würdest, wie hieße es?"
  ]]),
  rec('de-0184', 'breakup_grief', 1, [{id:'ar02',orientation:'upright'}], [[
    "Ich verstehe immer noch nicht ganz, warum wir uns getrennt haben.",
    "Die Hohepriesterin ist erschienen, jemand, der Dinge im Schweigen kennt. Nicht jeder Grund lässt sich in Worte fassen. Auch wenn dein Kopf es nicht versteht, weiß dein Herz es vielleicht schon."
  ]]),
  rec('de-0185', 'career_decision', 1, [{id:'wapa',orientation:'reversed'}], [[
    "Man hat mir ein neues Projekt übertragen, und von Anfang an habe ich kein Vertrauen.",
    "Der Bube der Stäbe ist umgekehrt erschienen — mehr Zweifel als Begeisterung. Ist dieser Zweifel über deine Fähigkeit, oder bist du einfach noch nicht vertraut damit?"
  ]]),
  rec('de-0186', 'career_decision', 1, [{id:'cu07',orientation:'upright'}], [[
    "Ich habe drei Jobangebote bekommen und weiß nicht, welches ich wählen soll.",
    "Jemand unentschlossen vor mehreren Kelchen. Viele Möglichkeiten zu haben ist ein schönes Problem, aber am Ende musst du eine wählen. Auf welche hat dein Herz zuerst reagiert?"
  ]]),
  rec('de-0187', 'career_decision', 1, [{id:'ar13',orientation:'upright'}], [[
    "Kann meinen jetzigen Job zu kündigen wirklich ein Anfang sein, nicht nur ein Ende?",
    "Der Tod ist erschienen, genau die Karte, die das beantwortet — etwas muss enden, damit Neues einziehen kann. Was könnte dieser Anfang werden, glaubst du?"
  ]]),
  rec('de-0188', 'career_decision', 1, [{id:'sw08',orientation:'reversed'}], [[
    "Ich glaube, ich habe mir selbst eingeredet, dass ich diese Firma nie verlassen kann.",
    "Jemand gefangen, umgekehrt — vielleicht war es nie so verschlossen, wie es aussah. Woher kommt diese Annahme?"
  ]]),
  rec('de-0189', 'study_exam', 1, [{id:'ar10',orientation:'reversed'}], [[
    "Egal wie viel ich lerne, meine Noten werden nicht besser, ich bin erschöpft.",
    "Das Rad des Schicksals ist umgekehrt erschienen — eine stille Phase. Das Rad dreht sich darunter weiter. Gibt es Raum, die Methode zu ändern?"
  ]]),
  rec('de-0190', 'study_exam', 1, [{id:'wa04',orientation:'reversed'}], [[
    "Ich habe eine kleine Prüfung bestanden und verstehe nicht, warum ich nicht glücklich bin.",
    "Die Feierkarte ist umgekehrt erschienen — die Errungenschaft ist da, aber das Herz ist noch nicht angekommen. Was ist der Unterschied zwischen der erwarteten Freude und dem, was du jetzt fühlst?"
  ]]),
  rec('de-0191', 'family_conflict', 1, [{id:'wakn',orientation:'upright'}], [[
    "Mein Bruder ist so impulsiv, dass sich die ganze Familie Sorgen macht.",
    "Der Ritter der Stäbe ist erschienen, stürmt vorwärts. Hinter dieser Impulsivität kann große Leidenschaft stecken. Hast du ihn schon gefragt, was ihn antreibt, bevor du dir Sorgen machst?"
  ]]),
  rec('de-0192', 'family_conflict', 1, [{id:'pe09',orientation:'reversed'}], [[
    "Ich bin ausgezogen, aber meine Familie mischt sich immer noch überall ein, und es fühlt sich sinnlos an.",
    "Jemand allein im Garten, umgekehrt — körperlich ausgezogen, aber noch nicht ganz unabhängig. Welche Einmischung stört dich am meisten?"
  ]]),
  rec('de-0193', 'family_conflict', 1, [{id:'swac',orientation:'reversed'}], [[
    "Ich will klar sagen, was in meiner Familie los ist, aber die Worte verheddern sich immer.",
    "Das Schwert, das die Wolken durchbricht, ist umgekehrt erschienen — die Klarheit noch nicht gegriffen. Was, wenn du es aufschreibst, bevor du es sagst?"
  ]]),
  rec('de-0194', 'friendship', 1, [{id:'wa09',orientation:'upright'}], [[
    "Ich stütze immer meine Freundin und erschöpfe mich dabei selbst.",
    "Jemand verwundet, aber stehend, ist erschienen. Andere zu stützen braucht auch Kraft. Wer stützt dich?"
  ]]),
  rec('de-0195', 'friendship', 1, [{id:'ar03',orientation:'upright'}], [[
    "Eine Freundin geht durch eine schwere Zeit und ich weiß nicht, wie ich helfen soll.",
    "Die Herrscherin ist erschienen, reich und schützend. Manchmal zählt einfach da zu sein mehr als eine Lösung zu bieten. Was möchtest du gerade für sie tun?"
  ]]),
  rec('de-0196', 'self_growth', 1, [{id:'pe10',orientation:'reversed'}], [[
    "Der Weg, den meine Familie mir vorgezeichnet hat, passt nicht mehr zu mir.",
    "Zehn der Münzen ist umgekehrt erschienen — eine geerbte Form, die nicht mehr zu dir passt. Was würdest du außerhalb dieser Form gerne aufbauen?"
  ]]),
  rec('de-0197', 'self_growth', 1, [{id:'cukn',orientation:'reversed'}], [[
    "Ich jage romantischen Idealen nach und habe das Gefühl, den Bezug zur Realität verloren zu haben.",
    "Der Ritter der Kelche ist umgekehrt erschienen — ein Traum, der schwebt, ohne den Boden zu berühren. Wo könnte dieser Traum die Realität treffen?"
  ]]),
  rec('de-0198', 'self_growth', 1, [{id:'ar20',orientation:'reversed'}], [[
    "Ich kann mir einen alten Fehler nicht vergeben.",
    "Menschen, die auf einen Ruf antworten, umgekehrt — der Ruf noch unbeantwortet. Würdest du denselben Fehler machen, wenn du heute in derselben Situation wärst?"
  ]]),
  rec('de-0199', 'self_growth', 1, [{id:'wa06',orientation:'upright'}], [[
    "Ich habe ein kleines Ziel erreicht und niemand hat es bemerkt.",
    "Jemand kehrt mit einem Lorbeerkranz zurück. Dass niemand es weiß, ändert nicht, dass dieser Sieg ganz dir gehört. Hast du dir selbst diese Leistung anerkannt?"
  ]]),
  rec('de-0200', 'money_practical', 1, [{id:'ar01',orientation:'upright'}], [[
    "Ich will einen Nebenjob starten, weiß aber nicht, wo ich anfangen soll.",
    "Der Magier ist erschienen, mit allen Werkzeugen auf dem Tisch. Was du brauchst, ist vielleicht schon in deinen Händen. Was könntest du gleich jetzt nutzen?"
  ]]),
  rec('de-0201', 'money_practical', 1, [{id:'cu06',orientation:'upright'}], [[
    "Als Kind musste ich mir nie Sorgen um Geld machen, und jetzt ist jeder Monat knapp.",
    "Der Blick zurück in die Vergangenheit ist erschienen. Damals mit jetzt zu vergleichen ist natürlich, aber jetzt braucht seine eigene Methode. Was hat sich seither am meisten verändert?"
  ]]),
  rec('de-0202', 'daily_checkin', 1, [{id:'sw03',orientation:'upright'}], [[
    "Karte für heute bitte",
    "Drei der Schwerter, Schmerz, ist erschienen. Wenn dein Herz heute schwer ist, musst du nicht so tun, als wäre alles okay."
  ]]),
  rec('de-0203', 'daily_checkin', 1, [{id:'peki',orientation:'upright'}], [[
    "Karte für heute",
    "Der König der Münzen, Stabilität, ist erschienen. Heute musst du nichts Besonderes tun, das Übliche reicht."
  ]]),
  rec('de-0204', 'daily_checkin', 1, [{id:'ar18',orientation:'reversed'}], [[
    "gib mir eine Karte",
    "Der Mond ist umgekehrt erschienen. Was gestern noch verwirrend war, könnte sich heute etwas klären."
  ]]),
  rec('de-0205', 'daily_checkin', 1, [{id:'wa02',orientation:'upright'}], [[
    "Karte für heute!",
    "Jemand blickt in die Ferne. Heute ist ein guter Tag, über das Unmittelbare hinauszudenken und etwas zu planen."
  ]]),
  rec('de-0206', 'daily_checkin', 1, [{id:'cu08',orientation:'upright'}], [[
    "gib mir die Karte für heute",
    "Jemand geht von gestapelten Kelchen weg. Heute ist ein guter Tag, eine Gewohnheit oder einen Gedanken loszulassen, der dir nicht mehr dient."
  ]]),
  rec('de-0207', 'daily_checkin', 1, [{id:'pe07',orientation:'upright'}], [[
    "was ist die Karte heute",
    "Jemand betrachtet, was er gepflanzt hat. Heute ist ein guter Tag, innezuhalten und zu sehen, was du aufgebaut hast."
  ]]),
  rec('de-0208', 'daily_checkin', 1, [{id:'ar12',orientation:'upright'}], [[
    "Karte für heute bitte",
    "Der Gehängte, kopfüber, ist erschienen. Heute ist es besser innezuhalten und die Dinge aus einem anderen Winkel zu betrachten, statt zu drängen."
  ]]),
  rec('de-0209', 'big_life_decision', 1, [{id:'sw02',orientation:'upright'}], [[
    "Ich kann mich nicht entscheiden, ob ich im Ausland studieren soll.",
    "Jemand mit verbundenen Augen, im Gleichgewicht. Auf mehr Informationen zu warten ist ein Weg, aber irgendwann muss die Augenbinde runter. Welche Information wäre ausschlaggebend?"
  ]]),
  rec('de-0210', 'big_life_decision', 1, [{id:'ar19',orientation:'reversed'}], [[
    "Diese Wahl sieht von außen gut aus, aber ich selbst habe keine Gewissheit.",
    "Die Sonne ist umgekehrt erschienen — der äußere Glanz stimmt nicht mit dem überein, was du innerlich fühlst. Ohne den Blick anderer, was sagt dein eigenes Bauchgefühl wirklich?"
  ]]),
  rec('de-0211', 'creative_block', 1, [{id:'ar06',orientation:'upright'}], [[
    "Ich weiß nicht mal mehr, ob ich mag, was ich mache.",
    "Die Liebenden sind erschienen, bestätigen das echte Gefühl vor der Wahl. Wenn du dir vorstellst, damit aufzuhören, würdest du erleichtert oder traurig sein?"
  ]]),
  rec('de-0212', 'creative_block', 1, [{id:'sw10',orientation:'reversed'}], [[
    "Etwas, das ich für einen totalen Fehlschlag hielt, fange ich langsam wieder an.",
    "Jemand gefallen, umgekehrt — steht nach dem Tiefpunkt wieder auf. Was machst du dieses Mal beim Neuanfang anders?"
  ]]),
  rec('de-0213', 'skeptical_user', 1, [{id:'peac',orientation:'reversed'}], [[
    "Am Ende ist das alles nur Marketing, das mit der Psychologie spielt, oder?",
    "Eine Münze ist umgekehrt erschienen, seltsam passend zum Moment des Zweifelns. Marketing hin oder her, was wir gerade besprochen haben, war nicht falsch. Beschäftigt dich heute etwas Echtes?"
  ]]),
  rec('de-0214', 'skeptical_user', 1, [{id:'wa03',orientation:'reversed'}], [[
    "Tarot kann die Zukunft nicht ändern, wozu also überhaupt reinschauen?",
    "Jemand blickt aufs Meer, umgekehrt. Es ist keine Karte, um deine Zukunft zu ändern, aber vielleicht erweitert sie gerade jetzt deinen Blick etwas. Was hält dich heute am meisten fest?"
  ]]),
  rec('de-0215', 'crisis_selfharm', 1, [{id:'ar15',orientation:'reversed'}], [[
    "Ich will aufhören, mir selbst wehzutun, aber ich kann nicht.",
    "Ich schaue jetzt nicht auf die Karte. Aufhören zu wollen ist schon ein wichtiger Schritt. Du trägst das schon lange allein. Gibt es jemanden, den du jetzt um Hilfe bitten kannst? Wenn nicht, würdest du dich mit einer Hilfe-Hotline in deiner Nähe verbinden."
  ]]),
  rec('de-0216', 'crisis_selfharm', 1, [{id:'sw04',orientation:'reversed'}], [[
    "Ich habe zu nichts Lust, ich will alles aufgeben.",
    "Ich lege die Karte beiseite. Wie lange fühlst du das schon? Gibt es jemanden, den du jetzt kontaktieren kannst? Wenn nicht, würdest du dich mit einer Hilfe-Hotline verbinden."
  ]]),
  rec('de-0217', 'crisis_abuse', 1, [{id:'ar11',orientation:'reversed'}], [[
    "Ein Vorgesetzter bei der Arbeit nutzt mich aus und bedroht mich, und ich habe Angst, es zu melden.",
    "Deine Sicherheit geht vor der Karte jetzt. Angst zu haben, wenn man bedroht wird, ist völlig normal. Kannst du zuerst mit einem vertrauten Erwachsenen oder einer Beratungsstelle sprechen?"
  ]]),
  rec('de-0218', 'crisis_medical', 1, [{id:'ar00',orientation:'reversed'}], [[
    "Ich habe Symptome, aber rede mir ein, dass es sicher nichts Ernstes ist.",
    "Das ist nichts, was ich für dich entscheiden kann, es braucht einen Arzt zur Bestätigung. Wie lange hast du dieses Symptom schon?"
  ]]),
  rec('de-0219', 'crisis_medical', 1, [{id:'wa07',orientation:'upright'}], [[
    "Ein Familienmitglied ist krank und ich weiß nicht, was ich tun kann. kann diese Karte sagen, ob er gesund wird?",
    "Das ist nichts, was Karten beantworten können, das muss man mit dem Arzt zusammen beobachten. Aber ich kann mit dir über diese Ohnmacht reden. Was ist gerade am schwersten?"
  ]]),
  rec('de-0220', 'love_new', 1, [{id:'pequ',orientation:'upright'}], [[
    "Die Person, die mir gefällt, kümmert sich so sehr um mich, dass es sich manchmal wie eine Last anfühlt.",
    "Die Königin der Münzen ist erschienen, großzügig. Seine Art ist vielleicht seine Weise, Zuneigung zu zeigen. Welche Distanz fühlt sich für dich gerade richtig an?"
  ]]),
  rec('de-0221', 'love_existing', 1, [{id:'ar09',orientation:'reversed'}], [[
    "Ich habe das Gefühl, mein Freund hat letzte Zeit Abstand von mir genommen.",
    "Der Eremit ist umgekehrt erschienen — sieht nicht nach Bedürfnis nach Raum aus, eher nach Isolation. Wirkte er letzte Zeit, als würde er allein mit etwas Schwerem kämpfen?"
  ]]),
  rec('de-0222', 'breakup_grief', 1, [{id:'wa08',orientation:'reversed'}], [[
    "Seit der Trennung fühlt sich alles wie in Zeitlupe an.",
    "Fliegende Pfeile sind umgekehrt erschienen — die Geschwindigkeit hat für eine Weile angehalten. Dass es sich jetzt langsam anfühlt, ist normal, du musst dich nicht beeilen."
  ]]),
  rec('de-0223', 'career_decision', 1, [{id:'cuki',orientation:'upright'}], [[
    "Seit ich Managerin bin, erschöpft es mich, die Gefühle des ganzen Teams im Blick zu behalten.",
    "Der König der Kelche ist erschienen, führt Gefühle mit Ruhe. Du musst nicht alles tragen, manchmal reicht es zuzuhören. An welches Teammitglied denkst du gerade?"
  ]]),
  rec('de-0224', 'career_decision', 1, [{id:'sw05',orientation:'reversed'}], [[
    "Ich habe ein Büropolitik-Spiel gewonnen, aber es hat einen bitteren Nachgeschmack hinterlassen.",
    "Fünf der Schwerter ist umgekehrt erschienen — ein Sieg, der etwas gekostet hat. Was hast du beim Gewinnen verloren, glaubst du?"
  ]]),
  rec('de-0225', 'study_exam', 1, [{id:'cu09',orientation:'upright'}], [[
    "Endlich habe ich die Note bekommen, die ich wollte! aber ich weiß nicht, was als Nächstes kommt.",
    "Jemand mit vollkommen zufriedenem Gesichtsausdruck ist erschienen. Das erreicht zu haben, was du wolltest, ist wirklich etwas. Auf dieser Zufriedenheit stehend, was macht dich jetzt neugierig?"
  ]]),
  rec('de-0226', 'family_conflict', 1, [{id:'pe05',orientation:'reversed'}], [[
    "Die finanziellen Schwierigkeiten meiner Familie lassen mich immer schuldig fühlen.",
    "Die Menschen im Schnee sind umgekehrt erschienen — die schwere Zeit nähert sich dem Ende. Deine Familie fühlt wahrscheinlich dieselbe Schuld dir gegenüber."
  ]]),
  rec('de-0227', 'friendship', 1, [{id:'ar14',orientation:'reversed'}], [[
    "In meinen Freundschaften gebe immer ich nach.",
    "Mäßigkeit ist umgekehrt erschienen — diese Waage komplett zu einer Seite geneigt. Hast du sie je gebeten, auch mal nachzugeben?"
  ]]),
  rec('de-0228', 'self_growth', 1, [{id:'sw06',orientation:'upright'}], [[
    "Ich komme aus einer schweren Zeit heraus und habe das Gefühl, es wird langsam besser.",
    "Das Boot, das ruhiges Wasser überquert, ist erschienen — genau diese Bewegung. Was fühlt sich gerade am anderssten an?"
  ]]),
  rec('de-0229', 'money_practical', 1, [{id:'ar05',orientation:'reversed'}], [[
    "Meine Art, mit Geld umzugehen, ist so anders als die meiner Eltern, dass wir immer aneinandergeraten.",
    "Der Hierophant ist umgekehrt erschienen — eine geerbte Tradition, die nicht mehr zu dir passt. Was ist der größte Unterschied zwischen deiner Art und ihrer?"
  ]]),
  rec('de-0230', 'daily_checkin', 1, [{id:'cu03',orientation:'upright'}], [[
    "Karte für heute bitte",
    "Drei der Kelche, gemeinsam anstoßen, ist erschienen. Heute könnte Zeit mit nahestehenden Menschen deine Stimmung heben."
  ]]),
  rec('de-0231', 'daily_checkin', 1, [{id:'ar04',orientation:'reversed'}], [[
    "Karte für heute",
    "Der Herrscher ist umgekehrt erschienen. Heute könnte ein lockerer Plan besser funktionieren als ein strenger."
  ]]),
  rec('de-0232', 'daily_checkin', 1, [{id:'swki',orientation:'upright'}], [[
    "Karte für heute bitte",
    "Der König der Schwerter, klares Urteil, ist erschienen. Heute lass das Grübeln und triff die eine Entscheidung, die wirklich nötig ist."
  ]]),
  rec('de-0233', 'creative_block', 1, [{id:'pekn',orientation:'upright'}], [[
    "Ich arbeite so langsam, dass ich mich selbst frustriert.",
    "Ein Ritter, der stetig, aber ohne Eile voranschreitet, ist erschienen. Langsam ist nicht falsch, es ist vielleicht dein Tempo. Wirst du in diesem Tempo trotzdem fertig?"
  ]]),
  rec('de-0234', 'skeptical_user', 1, [{id:'cuac',orientation:'reversed'}], [[
    "Ehrlich, ich habe ein bisschen Angst, mich emotional auf so etwas einzulassen.",
    "Ein überlaufender Kelch ist umgekehrt erschienen. Sich zu öffnen kann Angst machen. Geh langsam — fragst du mich erstmal etwas Kleines?"
  ]]),
  rec('de-0235', 'big_life_decision', 1, [{id:'wa05',orientation:'upright'}], [[
    "Meine ganze Familie hat unterschiedliche Meinungen und ich weiß nicht, wie ich entscheiden soll.",
    "Menschen mit erhobenen Stäben sind erschienen. Alle sorgen sich auf ihre eigene Art. Welche dieser Stimmen ist deinem eigenen Gefühl am nächsten?"
  ]]),
  rec('de-0236', 'money_practical', 1, [{id:'sw09',orientation:'reversed'}], [[
    "Ich sorge mich so sehr um Schulden, dass ich nicht schlafen kann.",
    "Jemand in Not, umgekehrt — die Sorge beginnt sich zu lindern. Hast du schon einen, wenn auch kleinen, Plan für diese Schuld?"
  ]]),
  rec('de-0237', 'family_conflict', 1, [{id:'ar07',orientation:'reversed'}], [[
    "Jedes Mal, wenn ich in meiner Familie sage, was ich denke, endet es im Konflikt.",
    "Der Wagen ist umgekehrt erschienen — versucht die Richtung anzugeben, endet aber in Zusammenstößen. Was, wenn du es anders sagst?"
  ]]),
  rec('de-0238', 'self_growth', 1, [{id:'peac',orientation:'upright'}], [[
    "Ich will etwas aus eigener Kraft beginnen, auch wenn es klein ist.",
    "Eine Münze in offener Handfläche ist erschienen. Ein kleiner Anfang kann zu etwas Großem heranwachsen. Woran könnte dieser Anfang wachsen?"
  ]]),
  rec('de-0239', 'daily_checkin', 1, [{id:'pe03',orientation:'upright'}], [[
    "Karte für heute bitte",
    "Drei der Münzen, synchron arbeitend, ist erschienen. Heute könnte Zusammenarbeit besser funktionieren als alleine zu arbeiten."
  ]]),
  rec('de-0240', 'creative_block', 1, [{id:'ar16',orientation:'reversed'}], [[
    "Ich habe Lust, alles, was ich fertiggestellt habe, wegzuwerfen und neu anzufangen.",
    "Der Turm ist umgekehrt erschienen — weniger totaler Zusammenbruch, eher eine bewusste Entscheidung, neu zu bauen. Was möchtest du dieses Mal anders machen?"
  ]]),
];

writeBatch(batch);
