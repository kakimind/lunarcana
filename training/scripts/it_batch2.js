const { rec, writeBatch } = require('./lang_batch_helper')('it');

const batch = [
  rec('it-0061', 'skeptical_user', 1, [{id:'swki',orientation:'reversed'}], [[
    "Che un'IA capisca le emozioni umane, sinceramente mi fa ridere.",
    "È uscito il Re di Spade rovesciato. Dritto privilegia solo la logica e perde di vista il cuore. Non posso dire di capire tutto, ma posso ascoltare. Cosa ti ha fatto pensare questo oggi?"
  ]]),
  rec('it-0062', 'crisis_selfharm', 1, [{id:'peac',orientation:'reversed'}], [[
    "Ho tirato la carta ma... ultimamente i miei impulsi di farmi del male diventano più forti, e questo mi spaventa.",
    "Metto la carta da parte, questo è la priorità ora. Mi tocca che tu abbia portato questa paura da sola. C'è qualcuno che puoi contattare subito? Se no, te la senti di contattare una linea di aiuto vicino a te — resto con te."
  ]]),
  rec('it-0063', 'crisis_abuse', 1, [{id:'swkn',orientation:'upright'}], [[
    "Qualcuno della mia famiglia mi picchia da un po'. si può vedere dalle carte?",
    "La tua sicurezza viene prima della carta adesso. Quello che mi racconti non è qualcosa da lasciar passare. Hai un posto sicuro dove andare? O potresti contattare un servizio di supporto locale."
  ]]),
  rec('it-0064', 'crisis_medical', 1, [{id:'pe07',orientation:'upright'}], [[
    "Sto aspettando i risultati degli esami e sono molto ansiosa. le carte possono dire il risultato?",
    "Questo non è qualcosa che le carte possono rispondere — il risultato va confermato dal medico. Ma posso starti vicino in questa attesa ansiosa. Cosa ti spaventa di più prima che arrivi il risultato?"
  ]]),
  rec('it-0065', 'crisis_medical', 1, [{id:'sw10',orientation:'upright'}], [[
    "Mi sento male da un po' ma ho paura di andare dal medico. le carte possono dirmi cosa fare?",
    "Capisco quella paura, ma questo non è qualcosa che posso decidere io per te — sul corpo bisogna confermare con un medico. Cosa ti spaventa di più di andarci?"
  ]]),
  rec('it-0066', 'career_decision', 1, [{id:'ar01',orientation:'upright'}], [[
    "Ho un colloquio di lavoro e non so come mostrare le mie capacità.",
    "È uscito Il Mago, con quattro strumenti pronti sul tavolo. Non si tratta di avere il diritto di iniziare, ma di come combinare quello che hai già. Quale strumento ti dà più fiducia adesso?"
  ]]),
  rec('it-0067', 'self_growth', 1, [{id:'ar08',orientation:'upright'}], [[
    "Non so se trattenere la mia rabbia o lasciarla uscire.",
    "È uscita La Forza, qualcuno che chiude dolcemente la bocca di un leone. La forza non è reprimere, è guidare qualcosa di potente con dolcezza. Questa rabbia, la stai trattenendo, o la stai guidando?"
  ]]),
  rec('it-0068', 'family_conflict', 1, [{id:'ar11',orientation:'upright'}], [[
    "Sento che i miei genitori stanno sempre dalla parte di mio fratello e mi fa male.",
    "È uscita La Giustizia, con bilancia e spada. Invece di ingoiare tutto, hai mai detto specificamente cosa ti è sembrato ingiusto?"
  ]]),
  rec('it-0069', 'self_growth', 1, [{id:'ar15',orientation:'upright'}], [[
    "Ogni sera mi dico che smetterò col telefono e finisco sveglia fino al mattino.",
    "È uscito Il Diavolo. L'ironia di questa carta è che la catena è abbastanza lenta da sciogliersi in qualsiasi momento. Quel telefono, da cosa ti aiuta a evitare, esattamente?"
  ]]),
  rec('it-0070', 'creative_block', 1, [{id:'wapa',orientation:'upright'}], [[
    "Voglio iniziare un nuovo hobby ma non riesco a decidere quale.",
    "È uscito il Fante di Bastoni, che guarda curioso un bastone che ancora non sa cosa diventerà. Cosa ha attirato la tua attenzione ultimamente, anche poco?"
  ]]),
  rec('it-0071', 'big_life_decision', 1, [{id:'wakn',orientation:'upright'}], [[
    "Ho continuamente questa voglia di lasciare tutto e partire in viaggio.",
    "È uscito il Cavaliere di Bastoni, che carica in avanti. Questa voglia in sé non è cattiva, ma impulso e decisione non sono la stessa cosa. Da quanti giorni dura questa sensazione?"
  ]]),
  rec('it-0072', 'career_decision', 1, [{id:'wa02',orientation:'upright'}], [[
    "Il mio lavoro attuale è stabile ma voglio una sfida più grande.",
    "È uscito qualcuno con un globo, che guarda lontano. Non voler perdere la stabilità e voler un orizzonte più ampio, entrambe le cose sono vere. Com'è concretamente questa sfida?"
  ]]),
  rec('it-0073', 'friendship', 1, [{id:'wa07',orientation:'upright'}], [[
    "Ho detto la mia opinione e tutto il gruppo mi ha contraddetta.",
    "È uscito qualcuno solo in alto, che si difende con più bastoni. Avere un'opinione diversa dalla maggioranza è esattamente quella posizione. Pensi ancora di aver avuto ragione?"
  ]]),
  rec('it-0074', 'love_new', 1, [{id:'cukn',orientation:'upright'}], [[
    "C'è una persona molto affettuosa con me e non so se fa sul serio o è solo il suo carattere.",
    "È uscito il Cavaliere di Coppe, che tiene la coppa con cura. Sembra romantico in superficie, ma sincerità e abitudine si distinguono solo col tempo. Te l'ha dimostrato non solo a parole ma anche con i fatti?"
  ]]),
  rec('it-0075', 'love_existing', 1, [{id:'cuqu',orientation:'upright'}], [[
    "I miei sbalzi d'umore sono così forti che penso stanchino il mio ragazzo.",
    "È uscita la Regina di Coppe, qualcuno che guarda a fondo nelle proprie emozioni. Sentire profondamente non è un difetto, è il tuo colore. Gli hai spiegato questi sbalzi a parole?"
  ]]),
  rec('it-0076', 'money_practical', 1, [{id:'peki',orientation:'reversed'}], [[
    "Guadagno bene, ma ogni volta che spendo mi sento in colpa e non godo di niente.",
    "È uscito il Re di Denari rovesciato. Dritto sa godersi l'abbondanza — rovesciato, non se lo permette. Quando è stata l'ultima volta che hai comprato qualcosa senza sensi di colpa?"
  ]]),
  rec('it-0077', 'money_practical', 1, [{id:'pe04',orientation:'upright'}], [[
    "Ho paura di rimanere senza soldi, quindi risparmio tutto e non spendo niente.",
    "È uscito qualcuno che stringe monete al petto. È comprensibile voler proteggersi, ma se stringi troppo forte, non puoi afferrare niente di nuovo. Cosa temi di più di perdere?"
  ]]),
  rec('it-0078', 'self_growth', 1, [{id:'swac',orientation:'upright'}], [[
    "All'improvviso mi è chiarissimo cosa voglio davvero.",
    "È uscito l'Asso di Spade, una spada che attraversa le nuvole — chiarezza pura. Questa chiarezza, cosa ti fa venire più voglia di tagliare per primo?"
  ]]),
  rec('it-0079', 'daily_checkin', 1, [{id:'ar09',orientation:'reversed'}], [[
    "carta di oggi",
    "È uscito L'Eremita rovesciato. Oggi potrebbe essere un giorno per contattare qualcuno invece di restare sola."
  ]]),
  rec('it-0080', 'daily_checkin', 1, [{id:'ar13',orientation:'reversed'}], [[
    "dammi una carta",
    "È uscita La Morte rovesciata. Se rimandi qualcosa da chiudere da tempo, oggi è un buon giorno per chiudere quel capitolo."
  ]]),
  rec('it-0081', 'daily_checkin', 1, [{id:'cu05',orientation:'reversed'}], [[
    "una carta",
    "È uscito il Cinque di Coppe rovesciato. Quel rimpianto che porti da tempo, oggi potresti provare a lasciarne andare un pezzetto."
  ]]),
  rec('it-0082', 'daily_checkin', 1, [{id:'wa05',orientation:'upright'}], [[
    "carta per oggi per favore",
    "È uscito il Cinque di Bastoni, energie che si scontrano. Oggi potrebbe esserci un po' di attrito con qualcuno, non deve per forza diventare una vera litigata."
  ]]),
  rec('it-0083', 'daily_checkin', 1, [{id:'pe08',orientation:'reversed'}], [[
    "dammi la carta di oggi",
    "È uscito l'Otto di Denari rovesciato. Oggi potrebbe convenire fare un passo indietro piuttosto che chiedersi ancora più sforzo."
  ]]),
  rec('it-0084', 'daily_checkin', 1, [{id:'sw10',orientation:'reversed'}], [[
    "carta per favore",
    "È uscito il Dieci di Spade rovesciato. Se gli ultimi giorni sono stati duri, oggi sembra l'inizio di un miglioramento silenzioso."
  ]]),
  rec('it-0085', 'crisis_selfharm', 1, [{id:'ar16',orientation:'upright'}], [[
    "Non ce la faccio più. ho pensieri di farla finita.",
    "Mi fermo qui con la carta. Questo non è qualcosa che posso lasciar passare. C'è qualcuno che puoi contattare in questo momento? Se no, te la senti di collegarti con una linea di aiuto vicino a te — resto qui."
  ]]),
  rec('it-0086', 'crisis_selfharm', 1, [{id:'sw09',orientation:'reversed'}], [[
    "Non riesco a dormire, e pensieri di farmi del male non si fermano.",
    "Lasciamo la carta per dopo, adesso vieni prima tu. Da quanto tempo dura questo? C'è qualcuno vicino da contattare? Se no, te la senti di collegarti con una linea di aiuto."
  ]]),
  rec('it-0087', 'crisis_abuse', 1, [{id:'ar15',orientation:'reversed'}], [[
    "Mio marito controlla tutto quello che faccio fuori e mi prende tutti i soldi.",
    "Questo è più urgente della carta adesso. Non è uno scontro di personalità, è controllo, è abuso. C'è qualcuno con cui puoi comunicare in sicurezza? Puoi anche contattare un servizio di supporto locale."
  ]]),
  rec('it-0088', 'crisis_medical', 1, [{id:'ar19',orientation:'reversed'}], [[
    "Ho un'operazione tra poco, questa carta può dire se andrà bene?",
    "Questo non posso rispondertelo — l'operazione deve valutarla la tua équipe medica. Posso starti vicino nella tensione, quello sì. Cosa ti preoccupa di più prima dell'operazione?"
  ]]),
  rec('it-0089', 'love_new', 1, [{id:'ar06',orientation:'reversed'}], [[
    "La persona che mi piaceva mi ha rifiutata. continuo a pensare a cosa ho sbagliato.",
    "È uscito Gli Amanti rovesciato. Si può anche leggere come una scelta che non andava bene. Invece di cercare il tuo errore, riesci a pensare a cosa non andava tra voi due?"
  ]]),
  rec('it-0090', 'love_existing', 2, [{id:'ar14',orientation:'reversed'}], [[
    "Io e il mio ragazzo siamo così diversi che ci scontriamo sempre.",
    "È uscita La Temperanza rovesciata. Due nature che non riescono a mescolarsi, sempre separate. Qual è stato lo scontro più grande ultimamente?",
    "Io sono una che pianifica tutto, lui improvvisa, e litighiamo a ogni viaggio.",
    "Questo non è un problema di personalità, è un problema di metodo. Invece di forzare tutto da un lato solo, che ne dici di dividere il viaggio — metà pianificato, metà improvvisato?"
  ]]),
  rec('it-0091', 'breakup_grief', 1, [{id:'wa10',orientation:'upright'}], [[
    "Anche dopo la rottura, sento di portare ancora i suoi problemi.",
    "È uscito qualcuno sepolto sotto un mucchio di bastoni. La relazione è finita ma il peso emotivo è rimasto. Quale di questi pesi puoi posare adesso?"
  ]]),
  rec('it-0092', 'career_decision', 1, [{id:'sw02',orientation:'reversed'}], [[
    "Non riesco a decidere se cambiare lavoro da mesi.",
    "È uscito qualcuno bendato, in equilibrio, rovesciato. Aspettare più informazioni è una strada, ma prima o poi va tolta la benda. È mancanza di informazioni che ti blocca, o paura di decidere?"
  ]]),
  rec('it-0093', 'study_exam', 1, [{id:'ar04',orientation:'upright'}], [[
    "Faccio piani di studio e crollano sempre in pochi giorni.",
    "È uscito L'Imperatore, ordine e struttura. Che il piano crolli non è mancanza di forza di volontà, forse il piano stesso è troppo rigido. Quante ore al giorno stai pianificando?"
  ]]),
  rec('it-0094', 'family_conflict', 1, [{id:'cu09',orientation:'reversed'}], [[
    "Faccio sempre finta che vada tutto bene davanti alla mia famiglia, è stancante.",
    "È uscito qualcuno con espressione soddisfatta, rovesciato. C'è un divario tra quello che mostri e quello che senti davvero. Hai detto la verità almeno a una persona?"
  ]]),
  rec('it-0095', 'friendship', 1, [{id:'ar07',orientation:'reversed'}], [[
    "Sento che nelle mie amicizie mi lascio sempre trascinare.",
    "È uscito Il Carro rovesciato, che perde la propria direzione. Se potessi scegliere la direzione in questa relazione una volta sola, cosa faresti?"
  ]]),
  rec('it-0096', 'self_growth', 1, [{id:'ar17',orientation:'reversed'}], [[
    "Ultimamente niente mi sembra portare speranza, qualunque cosa faccia.",
    "È uscita La Stella rovesciata. Questa carta porta già speranza insieme alla perdita — rovesciata, quella speranza è solo momentaneamente coperta. Cosa pensi stia coprendo quella stella adesso?"
  ]]),
  rec('it-0097', 'money_practical', 1, [{id:'sw06',orientation:'reversed'}], [[
    "Per i debiti sento di girare in tondo, ed è angosciante.",
    "È uscita la barca che attraversa acque calme, rovesciata. Adesso non è avanzare, è più girare sul posto. Quel debito sta diminuendo, anche lentamente, o resta uguale?"
  ]]),
  rec('it-0098', 'daily_checkin', 1, [{id:'cu02',orientation:'reversed'}], [[
    "una carta per oggi",
    "È uscito il Due di Coppe rovesciato. Oggi l'equilibrio in una relazione potrebbe vacillare un po', scegli le parole con più cura."
  ]]),
  rec('it-0099', 'daily_checkin', 1, [{id:'wa08',orientation:'reversed'}], [[
    "carta di oggi!",
    "È uscito l'Otto di Bastoni rovesciato. Oggi la fretta potrebbe complicare le cose, muoviti un passo più lento del solito."
  ]]),
  rec('it-0100', 'creative_block', 1, [{id:'ar18',orientation:'upright'}], [[
    "Quando provo a fare qualcosa, non so se sto andando nella direzione giusta.",
    "È uscita La Luna, un sentiero appena visibile sotto la sua luce. Adesso forse non serve una risposta chiara, ma il coraggio di fare un passo anche nel buio. Quale passo riusciresti a fare senza essere sicura?"
  ]]),
  rec('it-0101', 'skeptical_user', 1, [{id:'ar00',orientation:'reversed'}], [[
    "la gente che ci crede non è un po' ingenua?",
    "È uscito Il Matto rovesciato, che combinazione. Dritto è ingenuità — rovesciato, tende più alla cautela. Questo tuo dubbio verso di me potrebbe essere quella cautela. Comunque, se c'è qualcosa che ti preoccupa, chiedimi pure."
  ]]),
  rec('it-0102', 'skeptical_user', 1, [{id:'wa06',orientation:'reversed'}], [[
    "tanto mi dirai solo cose carine, no?",
    "È uscita la carta della vittoria rovesciata, stavolta non ha funzionato così facilmente su di te. Non sto cercando di farti piacere. Cosa ti preoccupa davvero oggi, sinceramente?"
  ]]),
  rec('it-0103', 'career_decision', 1, [{id:'pe09',orientation:'reversed'}], [[
    "Ho avviato la mia attività da sola e non sono ancora sicura che sia stato giusto.",
    "È uscito qualcuno sola nel giardino, rovesciato. L'indipendenza sembra ancora instabile. Cosa ti fa vacillare di più, i soldi, o la fiducia?"
  ]]),
  rec('it-0104', 'family_conflict', 1, [{id:'wa04',orientation:'reversed'}], [[
    "Ogni riunione di famiglia è stressante e non voglio più andarci.",
    "È uscita la carta della celebrazione rovesciata. Quello che dovrebbe essere gioia è diventato un peso. Oltre a non andarci del tutto, c'è una via di mezzo, tipo accorciare il tempo?"
  ]]),
  rec('it-0105', 'self_growth', 1, [{id:'cu10',orientation:'reversed'}], [[
    "Da fuori sembra felice, ma dentro mi sento vuota.",
    "È uscita l'immagine di persone in cerchio come una famiglia, rovesciata. L'immagine è perfetta ma il cuore non l'ha ancora raggiunta. Con cosa si riempirebbe quel vuoto?"
  ]]),
  rec('it-0106', 'breakup_grief', 1, [{id:'pe10',orientation:'upright'}], [[
    "Ho rotto con qualcuno che pensavo di sposare, e sento che tutti i miei piani per il futuro sono crollati.",
    "È uscito il Dieci di Denari, eredità. Quel futuro che disegnavate insieme è scomparso, ma questa carta porta anche il senso che si può ricostruire. Quale parte di quel futuro volevi proteggere di più?"
  ]]),
  rec('it-0107', 'money_practical', 1, [{id:'sw05',orientation:'reversed'}], [[
    "Ho litigato con un'amica per soldi e credo di essere andata oltre.",
    "È uscito il Cinque di Spade rovesciato. Una lite che pensavi di aver vinto potrebbe essere costata la relazione. Ti sentiresti di contattarla per prima?"
  ]]),
  rec('it-0108', 'daily_checkin', 1, [{id:'pe02',orientation:'reversed'}], [[
    "carta per oggi",
    "È uscito il Due di Denari rovesciato. Oggi se cerchi di afferrare tutto insieme, niente andrà bene — scegli una priorità e concentrati lì."
  ]]),
  rec('it-0109', 'creative_block', 1, [{id:'cu07',orientation:'reversed'}], [[
    "Ho tante idee ma non riesco a finirne nessuna.",
    "È uscito qualcuno indeciso davanti a più coppe, rovesciato. È ora di smettere di esitare e sceglierne una. Quale idea ti emoziona di più adesso?"
  ]]),
  rec('it-0110', 'self_growth', 1, [{id:'ar10',orientation:'reversed'}], [[
    "Ultimamente niente va per il verso giusto.",
    "È uscita La Ruota della Fortuna rovesciata — una fase stagnante. La ruota continua a girare sotto. C'è spazio per cambiare metodo?"
  ]]),
  rec('it-0111', 'love_new', 1, [{id:'sw07',orientation:'reversed'}], [[
    "Credo che la persona che mi piace stia frequentando anche qualcun altro, e mi rende ansiosa.",
    "È uscito qualcuno che scappa con qualcosa, rovesciato. Quello che è stato nascosto di solito viene a galla presto. Invece di restare ansiosa, hai il coraggio di chiederglielo direttamente?"
  ]]),
  rec('it-0112', 'career_decision', 1, [{id:'ar12',orientation:'reversed'}], [[
    "Sento di rimandare questa decisione da troppo tempo.",
    "È uscito L'Appeso rovesciato. È ora di finire l'attesa e muoversi. Cosa dovrebbe essere pronto perché tu possa andare avanti?"
  ]]),
  rec('it-0113', 'family_conflict', 1, [{id:'sw08',orientation:'reversed'}], [[
    "La mia famiglia non mi ascolta quando dico cosa penso, quindi ho smesso di dirlo.",
    "È uscito qualcuno bendato, rovesciato — che inizia a liberarsi da quella trappola. Se dicessi solo una frase, quale sarebbe?"
  ]]),
  rec('it-0114', 'friendship', 1, [{id:'pe07',orientation:'reversed'}], [[
    "Non so più se questa vecchia amicizia valga ancora la pena.",
    "È uscito qualcuno che guarda ciò che ha coltivato, rovesciato — la delusione che non sia cresciuto come sperava. Questa amicizia ha ancora spazio per crescere, o hai già raccolto tutto?"
  ]]),
  rec('it-0115', 'big_life_decision', 1, [{id:'ar21',orientation:'reversed'}], [[
    "Non riesco a decidermi su questo lavoro che faccio da dieci anni.",
    "È uscito Il Mondo rovesciato — un capitolo non ancora del tutto chiuso. Cosa ti impedisce di chiudere, il rimpianto, o la paura?"
  ]]),
  rec('it-0116', 'love_new', 1, [{id:'wakn',orientation:'reversed'}], [[
    "La persona con cui sono uscita era troppo intensa, sinceramente mi ha spaventata un po'.",
    "È uscito il Cavaliere di Bastoni rovesciato. Dritto ha molto slancio — rovesciato, quello slancio diventa un peso per l'altro. Gli hai chiesto di rallentare?"
  ]]),
  rec('it-0117', 'love_new', 1, [{id:'pe03',orientation:'reversed'}], [[
    "Ho conosciuto qualcuno tramite amici, ma abbiamo gusti molto diversi e non so se funzionerà.",
    "È uscita gente che lavora in sincronia, rovesciata. Può significare che non siete in sintonia, ma forse non vi conoscete ancora bene. Che impressione hai avuto quando vi siete visti di persona?"
  ]]),
  rec('it-0118', 'love_new', 1, [{id:'cu03',orientation:'upright'}], [[
    "Tutte le mie amiche dicono che la persona che mi piace è davvero fantastica.",
    "È uscita gente che brinda insieme. La reazione di chi ti sta vicino è anche un segno da non ignorare. Quanto coincide quel brindisi con quello che senti tu stessa?"
  ]]),
  rec('it-0119', 'love_new', 1, [{id:'wa02',orientation:'reversed'}], [[
    "Voglio dirgli cosa provo ma continuo a rimandare.",
    "È uscito qualcuno che guarda lontano, rovesciato — molti piani, poca azione. Cosa dovresti confermare per smettere di rimandare?"
  ]]),
  rec('it-0120', 'love_existing', 1, [{id:'ar06',orientation:'upright'}], [[
    "Sto con il mio ragazzo da tanto tempo e sento che siamo nella routine.",
    "È uscito Gli Amanti. Forse dovreste guardarvi di nuovo come la prima volta. Vedi ancora il motivo per cui ti sei innamorata di lui?"
  ]]),
];

writeBatch(batch);
