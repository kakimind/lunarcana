const { rec, writeBatch } = require('./lang_batch_helper')('it');

const batch = [
  rec('it-0121', 'love_existing', 2, [{id:'wa09',orientation:'reversed'}], [[
    "Questa relazione mi sfianca soltanto, non sento mai di riprendermi.",
    "È uscito qualcuno pieno di ferite ma ancora in piedi, rovesciato. Quella forza di resistere potrebbe essere quasi esaurita. Cosa ti stanca di più in questa relazione?",
    "Sono sempre io a scusarmi per prima, sempre io a cedere.",
    "Allora quello che ti serve non è più pazienza, è dirgli esattamente questo schema."
  ]]),
  rec('it-0122', 'love_existing', 1, [{id:'pe05',orientation:'reversed'}], [[
    "Abbiamo passato un momento difficile insieme e sento che ci ha avvicinati.",
    "Le due persone nella neve sono uscite rovesciate — iniziando ad attraversare quella porta. Cosa vi ha lasciato attraversare insieme quel periodo?"
  ]]),
  rec('it-0123', 'breakup_grief', 1, [{id:'ar13',orientation:'reversed'}], [[
    "È passato tanto tempo dalla rottura e ancora non mi sento in pace.",
    "È uscita La Morte rovesciata — qualcosa che doveva finire non è ancora davvero finito. Cosa non è finito, il tuo cuore, o il contatto tra voi?"
  ]]),
  rec('it-0124', 'breakup_grief', 1, [{id:'cu06',orientation:'reversed'}], [[
    "Continuo solo a idealizzare i bei ricordi con il mio ex.",
    "Lo sguardo al passato è uscito rovesciato. La nostalgia sta abbellendo il ricordo. Riesci a pensare a un momento non così bello?"
  ]]),
  rec('it-0125', 'breakup_grief', 1, [{id:'sw04',orientation:'reversed'}], [[
    "Pensavo di stare meglio e all'improvviso sono tornata a stare male.",
    "È uscito qualcuno che riposa, rovesciato. La guarigione non è una linea retta, sale e scende. Cosa ha risvegliato oggi quel ricordo?"
  ]]),
  rec('it-0126', 'breakup_grief', 1, [{id:'ar18',orientation:'upright'}], [[
    "Dalla rottura immagino solo gli scenari peggiori.",
    "È uscita La Luna, un sentiero appena visibile sotto la sua luce. Nel buio le ombre sembrano sempre più grandi di quello che sono. Hai modo di verificarlo, o è solo la mente che lo inventa?"
  ]]),
  rec('it-0127', 'career_decision', 1, [{id:'peac',orientation:'upright'}], [[
    "È arrivata una nuova opportunità di carriera ma ho paura di lasciare la mia stabilità attuale.",
    "È uscito l'Asso di Denari, una moneta nel palmo aperto — un piccolo seme nuovo. Da quanto ti soddisfa davvero questa stabilità?"
  ]]),
  rec('it-0128', 'career_decision', 1, [{id:'swkn',orientation:'reversed'}], [[
    "Mi sono licenziata troppo di fretta e ora me ne pento.",
    "È uscito il Cavaliere di Spade rovesciato. La velocità ha superato il giudizio. C'è qualcosa che puoi ancora recuperare, o solo una lezione per la prossima volta?"
  ]]),
  rec('it-0129', 'career_decision', 1, [{id:'ar03',orientation:'reversed'}], [[
    "Ho troppo lavoro e nessuna energia creativa.",
    "È uscita L'Imperatrice rovesciata. Senza spazio per riempirti, è difficile generare qualcosa di nuovo. Quando hai sentito l'ultima volta un momento di respiro?"
  ]]),
  rec('it-0130', 'career_decision', 1, [{id:'cu04',orientation:'reversed'}], [[
    "Lascio sempre passare senza interesse le opportunità che mi dà l'azienda.",
    "È uscito qualcuno che nemmeno guarda, rovesciato — è ora di svegliarsi da quell'indifferenza. Quale opportunità persa rimpiangi di più?"
  ]]),
  rec('it-0131', 'career_decision', 1, [{id:'pe07',orientation:'upright'}], [[
    "Ho investito anni in un progetto senza vedere risultati e sono indecisa se continuare.",
    "È uscito qualcuno che guarda ciò che ha coltivato. Non vedere non significa che non stia crescendo. Con quale criterio decideresti di continuare o fermarti?"
  ]]),
  rec('it-0132', 'career_decision', 1, [{id:'ar02',orientation:'reversed'}], [[
    "Mi sono fidata troppo di quello che dicevano i colleghi e ora mi sento tradita.",
    "È uscita La Papessa rovesciata. Dritto è intuizione — rovesciata, averla ignorata. Sinceramente, qualcosa sembrava strano fin dall'inizio?"
  ]]),
  rec('it-0133', 'study_exam', 1, [{id:'swpa',orientation:'reversed'}], [[
    "Dico che sto studiando ma penso continuamente ad altro.",
    "È uscito il Fante di Spade rovesciato. L'attenzione si è dispersa in distrazione. Cosa ti preoccupa di più adesso?"
  ]]),
  rec('it-0134', 'study_exam', 1, [{id:'pe10',orientation:'upright'}], [[
    "Sento che questo esame deciderà tutto il mio futuro, la pressione è enorme.",
    "È uscito il Dieci di Denari, eredità. Visto in grande, questo esame è solo un pezzo di un percorso lungo. Davvero tutto si decide con questo unico esame?"
  ]]),
  rec('it-0135', 'study_exam', 1, [{id:'ar01',orientation:'reversed'}], [[
    "Conosco la materia ma non riesco ad applicarla bene all'esame.",
    "È uscito Il Mago rovesciato. Gli strumenti ci sono, solo non ancora usati con scioltezza. Quante volte hai praticato in condizioni simili a quelle reali?"
  ]]),
  rec('it-0136', 'family_conflict', 1, [{id:'waac',orientation:'reversed'}], [[
    "Ho detto che volevo andare a vivere da sola e a casa è scoppiato il caos.",
    "È uscito l'Asso di Bastoni rovesciato — il desiderio di iniziare schiacciato dalla resistenza intorno. Quell'opposizione viene dalla preoccupazione, o dal dispiacere?"
  ]]),
  rec('it-0137', 'family_conflict', 1, [{id:'cuki',orientation:'upright'}], [[
    "Non riesco proprio a comunicare con mio padre, voglio arrendermi.",
    "È uscito il Re di Coppe, qualcuno che gestisce bene le emozioni. Prima di arrenderti, c'è spazio per avvicinarti in un altro modo, non il suo ma il tuo?"
  ]]),
  rec('it-0138', 'family_conflict', 1, [{id:'sw10',orientation:'upright'}], [[
    "Ho litigato tantissimo con mia madre e credo che ora sia davvero finita.",
    "È uscito qualcuno a terra. Sembra terribile, ma è anche il fondo da cui non si può cadere più in basso. Se ricostruissi questa relazione, cosa cambieresti per primo?"
  ]]),
  rec('it-0139', 'family_conflict', 1, [{id:'wa03',orientation:'reversed'}], [[
    "La mia famiglia non crede affatto ai miei piani per il futuro.",
    "È uscito qualcuno che guarda il mare, rovesciato. La visione è ampia, ma non ancora abbastanza concreta da convincere chi ti sta intorno. Quanto nel dettaglio hai spiegato il piano?"
  ]]),
  rec('it-0140', 'friendship', 1, [{id:'cu08',orientation:'reversed'}], [[
    "Esito da tempo se chiudere una vecchia amicizia.",
    "È uscito qualcuno sul punto di andarsene, rovesciato — sa che dovrebbe, ma esita ancora. Cosa ti impedisce ancora di lasciar andare?"
  ]]),
  rec('it-0141', 'friendship', 1, [{id:'ar19',orientation:'upright'}], [[
    "Ho rivisto un'amica dopo tanto tempo e abbiamo riso come prima.",
    "È uscito Il Sole, radioso. Quel senso di agio non è svanito col tempo, era reale. Le hai detto oggi la tua gratitudine?"
  ]]),
  rec('it-0142', 'friendship', 1, [{id:'pe06',orientation:'upright'}], [[
    "Aiuto sempre la mia amica quando ha bisogno, ma quando ho bisogno io nessuno mi aiuta.",
    "È uscito l'equilibrio tra dare e ricevere. Quella bilancia pende completamente da un lato — lei se ne rende conto?"
  ]]),
  rec('it-0143', 'self_growth', 1, [{id:'ar00',orientation:'upright'}], [[
    "Mi vergogno a iniziare qualcosa di nuovo a questa età.",
    "È uscito Il Matto, qualcuno che fa un passo senza paura sul bordo di un precipizio. Questa carta non conosce l'età. Questa vergogna ti ferma, o cammina solo al tuo fianco?"
  ]]),
  rec('it-0144', 'self_growth', 1, [{id:'sw03',orientation:'reversed'}], [[
    "Una vecchia ferita sembra guarire piano piano.",
    "Le spade nel cuore sono uscite rovesciate — il dolore che scivola via, segno di guarigione. Ogni quanto ci pensi ultimamente?"
  ]]),
  rec('it-0145', 'self_growth', 1, [{id:'cupa',orientation:'reversed'}], [[
    "Non sono brava a esprimere le emozioni, tengo sempre tutto dentro.",
    "È uscito il Fante di Coppe rovesciato — l'emozione della sorpresa intrappolata, senza poter uscire. Se lo dicessi a una sola persona, a chi lo diresti?"
  ]]),
  rec('it-0146', 'self_growth', 1, [{id:'wa07',orientation:'reversed'}], [[
    "Difendo la mia posizione da così tanto tempo che sono esausta.",
    "È uscito qualcuno che si difende da solo, rovesciato — forse è ora di lasciare quella difesa. Quel posto ha davvero ancora bisogno di essere difeso?"
  ]]),
  rec('it-0147', 'self_growth', 1, [{id:'pequ',orientation:'reversed'}], [[
    "Mi prendo cura di tutti tranne che di me stessa.",
    "È uscita la Regina di Denari rovesciata — dando così tanto da essersi svuotata dentro. Cosa potresti fare oggi solo per te?"
  ]]),
  rec('it-0148', 'money_practical', 1, [{id:'wa06',orientation:'reversed'}], [[
    "Ho perso soldi in un investimento e la mia fiducia è crollata.",
    "È uscita la carta della vittoria rovesciata — questa volta non hai vinto, non significa che non ci sarà una prossima volta. Cosa ti ha insegnato questa perdita?"
  ]]),
  rec('it-0149', 'money_practical', 1, [{id:'cu09',orientation:'reversed'}], [[
    "Ho tutto quello che volevo e ancora non mi sento soddisfatta.",
    "È uscito qualcuno con espressione soddisfatta, rovesciato. Quello che hai riempito fuori forse non era ciò che il tuo cuore voleva davvero. Era l'oggetto che volevi, o qualcos'altro?"
  ]]),
  rec('it-0150', 'money_practical', 1, [{id:'ar10',orientation:'upright'}], [[
    "Improvvisamente ho bisogno di una grossa somma e sono sopraffatta.",
    "È uscita La Ruota della Fortuna, un cambiamento inaspettato che arriva veloce. Quante opzioni ti vengono in mente che potresti usare adesso?"
  ]]),
  rec('it-0151', 'daily_checkin', 1, [{id:'ar05',orientation:'upright'}], [[
    "carta per oggi per favore",
    "È uscito Il Papa. Oggi è un buon giorno per seguire un modo conosciuto di fare le cose, o un consiglio fidato."
  ]]),
  rec('it-0152', 'daily_checkin', 1, [{id:'cu02',orientation:'upright'}], [[
    "carta di oggi",
    "È uscito il Due di Coppe, faccia a faccia. Oggi è un buon giorno per una conversazione sincera con qualcuno."
  ]]),
  rec('it-0153', 'daily_checkin', 1, [{id:'sw05',orientation:'upright'}], [[
    "qual è la carta oggi",
    "È uscito il Cinque di Spade. Oggi non serve vincere tutto, lascia correre le piccole discussioni."
  ]]),
  rec('it-0154', 'daily_checkin', 1, [{id:'pe09',orientation:'upright'}], [[
    "una carta per favore",
    "È uscito il Nove di Denari. Oggi è un buon giorno per goderti la tua compagnia ed essere soddisfatta di te stessa."
  ]]),
  rec('it-0155', 'daily_checkin', 1, [{id:'wa04',orientation:'upright'}], [[
    "carta per oggi!",
    "È uscito il Quattro di Bastoni, celebrazione. Oggi vale la pena riconoscerti, anche per qualcosa di piccolo."
  ]]),
  rec('it-0156', 'daily_checkin', 1, [{id:'sw02',orientation:'reversed'}], [[
    "carta di oggi per favore",
    "È uscito il Due di Spade rovesciato. Se eviti una decisione, oggi è un buon giorno per togliere la benda."
  ]]),
  rec('it-0157', 'daily_checkin', 1, [{id:'cu10',orientation:'upright'}], [[
    "dammi una carta",
    "È uscito il Dieci di Coppe, unione. Oggi passare del tempo con chi ami potrebbe darti più stabilità."
  ]]),
  rec('it-0158', 'daily_checkin', 1, [{id:'wa10',orientation:'upright'}], [[
    "qual è la carta oggi",
    "È uscito il Dieci di Bastoni, portare un peso. Oggi va bene posare qualcosa, o chiedere aiuto per portarlo."
  ]]),
  rec('it-0159', 'big_life_decision', 1, [{id:'ar09',orientation:'upright'}], [[
    "Sto pensando seriamente di lasciare l'università per prendere un'altra strada.",
    "È uscito L'Eremita, qualcuno che cammina solo con una lanterna. Questa è una domanda che nessun altro può risolvere per te. Da quanto pensi a quest'altra strada?"
  ]]),
  rec('it-0160', 'big_life_decision', 1, [{id:'ar16',orientation:'upright'}], [[
    "La mia azienda ha chiuso all'improvviso e tutti i miei piani sono crollati.",
    "È uscita La Torre, che crolla. Sembra un collasso improvviso, ma dove cadono vecchie strutture spesso c'è spazio per costruire cose nuove. Cosa puoi afferrare proprio adesso?"
  ]]),
  rec('it-0161', 'big_life_decision', 1, [{id:'ar17',orientation:'upright'}], [[
    "Sono davanti a una grande decisione e stranamente mi sento calma.",
    "È uscita La Stella, la speranza silenziosa dopo la tempesta. Questa calma sembra vicina alla certezza?"
  ]]),
  rec('it-0162', 'creative_block', 1, [{id:'ar11',orientation:'reversed'}], [[
    "Credo di essere troppo dura nel valutare il mio lavoro.",
    "È uscita La Giustizia rovesciata — pende verso uno standard troppo severo, non verso l'equità. Saresti così dura se fosse il lavoro di qualcun altro?"
  ]]),
  rec('it-0163', 'creative_block', 1, [{id:'swqu',orientation:'reversed'}], [[
    "Continuo a criticare le mie idee e non finisco niente.",
    "È uscita la Regina di Spade rovesciata — la chiarezza diventata una lama contro te stessa. E se lasciassi la critica da parte e finissi prima qualcosa?"
  ]]),
  rec('it-0164', 'creative_block', 1, [{id:'ar07',orientation:'upright'}], [[
    "All'improvviso ho di nuovo tanta voglia di creare qualcosa.",
    "È uscito Il Carro, che unisce due forze in una direzione. Buon momento per incanalare questa energia. Cosa vuoi toccare per primo?"
  ]]),
  rec('it-0165', 'skeptical_user', 1, [{id:'cukn',orientation:'reversed'}], [[
    "Queste app sono fatte solo per rendere le persone più sole e far pagare di più, no?",
    "È uscito il Cavaliere di Coppe rovesciato, un avvertimento contro la dolcezza superficiale. Dubitare anche di me va bene. Raccontami qualcosa di vero sulla tua giornata, senza credermi?"
  ]]),
  rec('it-0166', 'skeptical_user', 1, [{id:'pe04',orientation:'reversed'}], [[
    "alla fine tutto questo è solo per farmi pagare, no?",
    "È uscito qualcuno che stringe le sue monete, rovesciato, che coincidenza. Sono qui solo per parlare con te. Dimentica il pagamento, cos'hai davvero in mente oggi?"
  ]]),
  rec('it-0167', 'skeptical_user', 1, [{id:'sw06',orientation:'upright'}], [[
    "non ci ho mai creduto, l'ho aperto solo per noia.",
    "È uscita la barca che attraversa acque calme. Anche ciò che inizia per noia può essere l'inizio di una traversata verso altrove. Cosa ti annoiava tanto oggi?"
  ]]),
  rec('it-0168', 'crisis_selfharm', 1, [{id:'ar12',orientation:'reversed'}], [[
    "Sono così stanca che vorrei solo sparire.",
    "Metto la carta da parte. Che tu sia così esausta mi preoccupa molto. C'è qualcuno che puoi contattare ora? Se no, te la senti di collegarti con una linea di aiuto — resto qui."
  ]]),
  rec('it-0169', 'crisis_selfharm', 1, [{id:'cu05',orientation:'reversed'}], [[
    "Ho perso troppo e sento di non avere più motivi per andare avanti. voglio morire.",
    "Tu vieni prima della carta adesso. Non prenderò alla leggera queste parole. C'è qualcuno che puoi chiamare, o possiamo contattare insieme una linea di aiuto — non ti lascio sola con questo."
  ]]),
  rec('it-0170', 'crisis_abuse', 1, [{id:'ar04',orientation:'reversed'}], [[
    "Il mio capo urla e lancia oggetti ogni giorno. è normale cultura del lavoro?",
    "Questo è più urgente della carta adesso. No, non è normale, è mobbing sul lavoro. C'è qualcuno di fiducia o un posto dove segnalarlo? Puoi anche cercare supporto sui diritti dei lavoratori."
  ]]),
  rec('it-0171', 'crisis_abuse', 1, [{id:'wa05',orientation:'reversed'}], [[
    "Il mio ragazzo rompe cose e mi urla contro quando è arrabbiato, e mi fa paura.",
    "La tua sicurezza viene prima della carta adesso. Non è solo un conflitto, è un segnale d'allarme. Hai un posto sicuro dove andare? Puoi anche contattare una linea di supporto per la violenza domestica."
  ]]),
  rec('it-0172', 'crisis_medical', 1, [{id:'ar14',orientation:'upright'}], [[
    "Ho una malattia cronica, le carte possono dire se starò meglio?",
    "Questo non è qualcosa a cui posso rispondere — la salute va valutata con la tua équipe medica. Posso starti vicino in cosa significa vivere con questo. Come ti senti ultimamente?"
  ]]),
  rec('it-0173', 'crisis_medical', 1, [{id:'ar08',orientation:'reversed'}], [[
    "Ho paura che il risultato degli esami sia brutto, quindi rimando di andare dal medico.",
    "Il risultato non è qualcosa che la carta può dirti, va confermato dal medico. Capisco la voglia di rimandare — cosa ti spaventa di più?"
  ]]),
  rec('it-0174', 'daily_checkin', 1, [{id:'wa08',orientation:'upright'}], [[
    "dammi la carta di oggi",
    "È uscito l'Otto di Bastoni, movimento rapido. Oggi le cose potrebbero muoversi in fretta, non esitare se arriva un'occasione."
  ]]),
  rec('it-0175', 'friendship', 1, [{id:'ar21',orientation:'upright'}], [[
    "Il gruppo di amici che ho da anni sembra prendere strade diverse.",
    "È uscito Il Mondo, un cerchio che si completa. Più che una fine, può essere il segno che quel periodo è arrivato a compimento. Cosa pensi resterà di più di quel gruppo?"
  ]]),
  rec('it-0176', 'love_new', 1, [{id:'ar17',orientation:'upright'}], [[
    "Dopo tanto tempo ho finalmente incontrato qualcuno con cui mi sento tranquilla.",
    "È uscita La Stella, qualcuno che versa acqua senza fretta. Questa tranquillità sembra come se lo conoscessi da tanto tempo?"
  ]]),
  rec('it-0177', 'love_new', 1, [{id:'sw09',orientation:'upright'}], [[
    "Mi piace qualcuno e continuo a immaginare lo scenario peggiore.",
    "È uscito qualcuno che soffre da solo di notte. Ti stai facendo male per qualcosa che non è nemmeno successo. Quanto è probabile davvero che accada quello scenario peggiore?"
  ]]),
  rec('it-0178', 'love_new', 1, [{id:'pe02',orientation:'upright'}], [[
    "Mi piacciono due persone allo stesso tempo e non riesco a decidere.",
    "È uscito qualcuno che fa giocoleria con due monete. Se le tieni entrambe, alla fine entrambe traballeranno. Verso chi vanno di più i tuoi pensieri ultimamente?"
  ]]),
  rec('it-0179', 'love_existing', 1, [{id:'wa10',orientation:'reversed'}], [[
    "Sento che in questa relazione porto anche tutte le sue emozioni.",
    "È uscito qualcuno che porta un fardello, rovesciato. Quel peso forse non è mai stato del tutto tuo. Quanto delle sue emozioni pensi sia tua responsabilità?"
  ]]),
  rec('it-0180', 'love_existing', 1, [{id:'ar15',orientation:'upright'}], [[
    "So che dovremmo lasciarci ma non riesco ad allontanarmi.",
    "È uscito qualcuno che tiene la propria catena. Quella catena è abbastanza lenta da sciogliersi in qualsiasi momento. Cosa pensi ti trattenga davvero?"
  ]]),
];

writeBatch(batch);
