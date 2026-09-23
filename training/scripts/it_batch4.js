const { rec, writeBatch } = require('./lang_batch_helper')('it');

const batch = [
  rec('it-0181', 'love_existing', 1, [{id:'sw07',orientation:'upright'}], [[
    "Racconto piccole bugie al mio ragazzo e sono ansiosa che le scopra.",
    "È uscito qualcuno che scappa con qualcosa. Nascondere ha spesso le sue ragioni, ma questa ansia logora la relazione più della bugia stessa. Cosa ti spaventa di più nel dire la verità?"
  ]]),
  rec('it-0182', 'breakup_grief', 1, [{id:'pe08',orientation:'upright'}], [[
    "Dalla rottura mi rifugio solo nel lavoro. va bene farlo?",
    "È uscito l'artigiano, concentrato sul suo mestiere in silenzio. Rifugiarsi nel lavoro può anche essere una forma di guarigione. Ricordati solo, ogni tanto, di posare gli attrezzi e lasciarti sentire la tristezza."
  ]]),
  rec('it-0183', 'breakup_grief', 1, [{id:'cuqu',orientation:'reversed'}], [[
    "Dalla rottura non so gestire le mie emozioni.",
    "È uscita la Regina di Coppe rovesciata — qualcuno che guarda a fondo nelle emozioni, ma ora ne è sopraffatta. Se dessi un nome a quello che senti, quale sarebbe?"
  ]]),
  rec('it-0184', 'breakup_grief', 1, [{id:'ar02',orientation:'upright'}], [[
    "Non capisco ancora del tutto perché ci siamo lasciati.",
    "È uscita La Papessa, qualcuno che conosce le cose nel silenzio. Non tutte le ragioni si spiegano a parole. Anche se la testa non capisce, il cuore forse lo sa già."
  ]]),
  rec('it-0185', 'career_decision', 1, [{id:'wapa',orientation:'reversed'}], [[
    "Mi hanno affidato un nuovo progetto e fin dall'inizio non ho nessuna fiducia.",
    "È uscito il Fante di Bastoni rovesciato — più dubbio che entusiasmo. Questo dubbio riguarda la tua capacità, o solo che non hai ancora familiarità?"
  ]]),
  rec('it-0186', 'career_decision', 1, [{id:'cu07',orientation:'upright'}], [[
    "Ho ricevuto tre offerte di lavoro e non so quale scegliere.",
    "È uscito qualcuno indeciso davanti a più coppe. Avere molte scelte è un bel problema, ma alla fine bisogna sceglierne una. A quale ha reagito per prima il tuo cuore?"
  ]]),
  rec('it-0187', 'career_decision', 1, [{id:'ar13',orientation:'upright'}], [[
    "Lasciare il mio lavoro attuale può davvero essere un inizio, non solo una fine?",
    "È uscita La Morte, proprio la carta che risponde a questo — qualcosa deve finire per lasciare spazio a qualcosa di nuovo. Cosa pensi che potrebbe diventare quell'inizio?"
  ]]),
  rec('it-0188', 'career_decision', 1, [{id:'sw08',orientation:'reversed'}], [[
    "Credo di essermi convinta da sola che non posso mai lasciare quest'azienda.",
    "È uscito qualcuno intrappolato, rovesciato — forse non era mai così chiuso come sembrava. Da dove viene questa convinzione?"
  ]]),
  rec('it-0189', 'study_exam', 1, [{id:'ar10',orientation:'reversed'}], [[
    "Per quanto studi i miei voti non migliorano, sono esausta.",
    "È uscita La Ruota della Fortuna rovesciata — una fase stagnante. La ruota continua a girare sotto. C'è spazio per cambiare metodo?"
  ]]),
  rec('it-0190', 'study_exam', 1, [{id:'wa04',orientation:'reversed'}], [[
    "Ho passato un piccolo esame e non capisco perché non sono felice.",
    "È uscita la carta della celebrazione rovesciata — il successo c'è, ma il cuore non l'ha ancora raggiunto. Qual è la differenza tra la gioia che ti aspettavi e quello che senti ora?"
  ]]),
  rec('it-0191', 'family_conflict', 1, [{id:'wakn',orientation:'upright'}], [[
    "Mio fratello è così impulsivo che tutta la famiglia si preoccupa.",
    "È uscito il Cavaliere di Bastoni, che carica in avanti. Dietro quell'impulsività può esserci una grande passione. Prima di preoccuparti, gli hai chiesto cosa lo motiva?"
  ]]),
  rec('it-0192', 'family_conflict', 1, [{id:'pe09',orientation:'reversed'}], [[
    "Sono andata via di casa ma la mia famiglia continua a intromettersi in tutto, e sembra inutile.",
    "È uscito qualcuno sola nel giardino, rovesciato — andata via fisicamente, ma ancora non del tutto indipendente. Quale intromissione ti disturba di più?"
  ]]),
  rec('it-0193', 'family_conflict', 1, [{id:'swac',orientation:'reversed'}], [[
    "Voglio dire chiaramente cosa succede nella mia famiglia ma le parole si aggrovigliano sempre.",
    "La spada che attraversa le nuvole è uscita rovesciata — la chiarezza non ancora afferrata. E se lo scrivessi prima di dirlo?"
  ]]),
  rec('it-0194', 'friendship', 1, [{id:'wa09',orientation:'upright'}], [[
    "Sostengo sempre la mia amica e mi sto esaurendo.",
    "È uscito qualcuno ferito ma in piedi. Sostenere gli altri richiede anche forza. Chi sostiene te?"
  ]]),
  rec('it-0195', 'friendship', 1, [{id:'ar03',orientation:'upright'}], [[
    "Un'amica sta attraversando un periodo difficile e non so come aiutarla.",
    "È uscita L'Imperatrice, generosa e protettiva. A volte esserci semplicemente conta più che offrire una soluzione. Cosa vorresti fare per lei adesso?"
  ]]),
  rec('it-0196', 'self_growth', 1, [{id:'pe10',orientation:'reversed'}], [[
    "La strada che la mia famiglia ha tracciato per me non mi si addice più.",
    "È uscito il Dieci di Denari rovesciato — uno stampo ereditato che non ti calza più. Fuori da quello stampo, cosa vorresti costruire?"
  ]]),
  rec('it-0197', 'self_growth', 1, [{id:'cukn',orientation:'reversed'}], [[
    "Inseguo ideali romantici e sento di aver perso contatto con la realtà.",
    "È uscito il Cavaliere di Coppe rovesciato — un sogno che fluttua, senza toccare terra. Dove potrebbe incontrarsi quel romanticismo con la realtà?"
  ]]),
  rec('it-0198', 'self_growth', 1, [{id:'ar20',orientation:'reversed'}], [[
    "Non riesco a perdonarmi per un vecchio errore.",
    "Le persone che rispondono a un richiamo sono uscite rovesciate — il richiamo ancora senza risposta. Se fossi nella stessa situazione oggi, faresti lo stesso errore?"
  ]]),
  rec('it-0199', 'self_growth', 1, [{id:'wa06',orientation:'upright'}], [[
    "Ho raggiunto un piccolo obiettivo e nessuno se n'è accorto.",
    "È uscito qualcuno che torna con una corona d'alloro. Che nessuno lo sappia non cambia il fatto che questa vittoria sia interamente tua. Te la sei riconosciuta tu stessa?"
  ]]),
  rec('it-0200', 'money_practical', 1, [{id:'ar01',orientation:'upright'}], [[
    "Voglio iniziare un lavoretto extra ma non so da dove cominciare.",
    "È uscito Il Mago, con tutti gli strumenti sul tavolo. Quello che ti serve forse è già nelle tue mani. Cosa potresti usare proprio ora?"
  ]]),
  rec('it-0201', 'money_practical', 1, [{id:'cu06',orientation:'upright'}], [[
    "Da bambina non mi preoccupavo mai dei soldi, e ora ogni mese è stretto.",
    "È uscito lo sguardo al passato. Confrontare allora e adesso è naturale, ma adesso serve un metodo tutto suo. Cosa è cambiato di più da allora?"
  ]]),
  rec('it-0202', 'daily_checkin', 1, [{id:'sw03',orientation:'upright'}], [[
    "carta per oggi per favore",
    "È uscito il Tre di Spade, dolore. Se oggi il cuore ti pesa, non serve fingere che vada tutto bene."
  ]]),
  rec('it-0203', 'daily_checkin', 1, [{id:'peki',orientation:'upright'}], [[
    "carta di oggi",
    "È uscito il Re di Denari, stabilità. Oggi non serve fare niente di speciale, il solito basta."
  ]]),
  rec('it-0204', 'daily_checkin', 1, [{id:'ar18',orientation:'reversed'}], [[
    "dammi una carta",
    "È uscita La Luna rovesciata. Quello che ieri sembrava confuso potrebbe chiarirsi un po' oggi."
  ]]),
  rec('it-0205', 'daily_checkin', 1, [{id:'wa02',orientation:'upright'}], [[
    "carta per oggi!",
    "È uscito qualcuno che guarda lontano. Oggi è un buon giorno per pensare oltre l'immediato e fare un piano."
  ]]),
  rec('it-0206', 'daily_checkin', 1, [{id:'cu08',orientation:'upright'}], [[
    "dammi la carta di oggi",
    "È uscito qualcuno che si allontana da coppe impilate. Oggi è un buon giorno per lasciar andare un'abitudine o un pensiero che non ti serve più."
  ]]),
  rec('it-0207', 'daily_checkin', 1, [{id:'pe07',orientation:'upright'}], [[
    "qual è la carta oggi",
    "È uscito qualcuno che guarda ciò che ha coltivato. Oggi è un buon giorno per fermarti a vedere cosa hai costruito."
  ]]),
  rec('it-0208', 'daily_checkin', 1, [{id:'ar12',orientation:'upright'}], [[
    "carta di oggi per favore",
    "È uscito L'Appeso, a testa in giù. Oggi è meglio fermarsi e guardare le cose da un'altra angolazione invece di forzare."
  ]]),
  rec('it-0209', 'big_life_decision', 1, [{id:'sw02',orientation:'upright'}], [[
    "Non riesco a decidere se studiare all'estero.",
    "È uscito qualcuno bendato, in equilibrio. Aspettare più informazioni è una strada, ma prima o poi va tolta la benda. Quale sarebbe l'informazione decisiva?"
  ]]),
  rec('it-0210', 'big_life_decision', 1, [{id:'ar19',orientation:'reversed'}], [[
    "Questa scelta sembra buona da fuori, ma io stessa non ho certezze.",
    "È uscito Il Sole rovesciato — la luce esteriore non combacia con quello che senti dentro. Senza lo sguardo degli altri, cosa dice davvero il tuo istinto?"
  ]]),
  rec('it-0211', 'creative_block', 1, [{id:'ar06',orientation:'upright'}], [[
    "Non so nemmeno più se mi piace quello che faccio.",
    "È uscito Gli Amanti, che conferma il sentimento vero prima di scegliere. Se immaginassi di smettere, sentiresti sollievo, o tristezza?"
  ]]),
  rec('it-0212', 'creative_block', 1, [{id:'sw10',orientation:'reversed'}], [[
    "Qualcosa che consideravo un fallimento totale, lo sto riprendendo piano piano.",
    "È uscito qualcuno caduto, rovesciato — che si rialza dopo aver toccato il fondo. Cosa è diverso in questo nuovo inizio?"
  ]]),
  rec('it-0213', 'skeptical_user', 1, [{id:'peac',orientation:'reversed'}], [[
    "alla fine è solo marketing che gioca con la psicologia della gente, no?",
    "È uscita una moneta rovesciata, curiosamente al momento giusto per dubitare. Marketing o no, quello che abbiamo condiviso non era falso. C'è qualcosa di vero che ti frulla in testa oggi?"
  ]]),
  rec('it-0214', 'skeptical_user', 1, [{id:'wa03',orientation:'reversed'}], [[
    "i tarocchi non possono cambiare il futuro, allora a che serve guardarli?",
    "È uscito qualcuno che guarda il mare, rovesciato. Non è una carta per cambiare il tuo futuro, ma forse allarga un po' la tua visione adesso. Cosa ti blocca di più oggi?"
  ]]),
  rec('it-0215', 'crisis_selfharm', 1, [{id:'ar15',orientation:'reversed'}], [[
    "Voglio smettere di farmi del male ma non ci riesco.",
    "Non guardo la carta adesso. Voler smettere è già un passo importante. Porti questo da sola da tempo. C'è qualcuno a cui chiedere aiuto ora? Se no, te la senti di collegarti con una linea di aiuto vicino a te."
  ]]),
  rec('it-0216', 'crisis_selfharm', 1, [{id:'sw04',orientation:'reversed'}], [[
    "Non ho voglia di niente, voglio arrendermi a tutto.",
    "Metto la carta da parte. Da quanto senti questo? C'è qualcuno che puoi contattare ora? Se no, te la senti di collegarti con una linea di aiuto."
  ]]),
  rec('it-0217', 'crisis_abuse', 1, [{id:'ar11',orientation:'reversed'}], [[
    "Un superiore al lavoro mi usa e mi minaccia, e ho paura a segnalarlo.",
    "La tua sicurezza viene prima della carta adesso. Avere paura quando si è minacciate è del tutto normale. Puoi parlarne prima con un adulto di fiducia o un servizio di supporto?"
  ]]),
  rec('it-0218', 'crisis_medical', 1, [{id:'ar00',orientation:'reversed'}], [[
    "Ho dei sintomi ma mi dico che sicuramente non è niente di grave.",
    "Questo non è qualcosa che posso decidere io per te, serve un medico a confermarlo. Da quanto hai questo sintomo?"
  ]]),
  rec('it-0219', 'crisis_medical', 1, [{id:'wa07',orientation:'upright'}], [[
    "Un familiare è malato e non so cosa posso fare. questa carta può dire se guarirà?",
    "Questo non è qualcosa a cui le carte rispondono, va seguito insieme al medico. Ma posso parlare con te di questo senso di impotenza. Cosa è più difficile adesso?"
  ]]),
  rec('it-0220', 'love_new', 1, [{id:'pequ',orientation:'upright'}], [[
    "La persona che mi piace si prende così tanta cura di me che a volte sembra un peso.",
    "È uscita la Regina di Denari, generosa. Il suo modo di fare forse è il suo modo di mostrare affetto. Quale distanza ti sembra giusta adesso?"
  ]]),
  rec('it-0221', 'love_existing', 1, [{id:'ar09',orientation:'reversed'}], [[
    "Sento che il mio ragazzo ultimamente ha preso le distanze da me.",
    "È uscito L'Eremita rovesciato — non sembra bisogno di spazio, più isolamento. È sembrato soffrire da solo con qualcosa ultimamente?"
  ]]),
  rec('it-0222', 'breakup_grief', 1, [{id:'wa08',orientation:'reversed'}], [[
    "Dalla rottura tutto sembra al rallentatore.",
    "Le frecce in volo sono uscite rovesciate — la velocità si è fermata per un po'. Che sembri lento adesso è normale, non c'è fretta."
  ]]),
  rec('it-0223', 'career_decision', 1, [{id:'cuki',orientation:'upright'}], [[
    "Da quando sono manager, seguire le emozioni di tutto il team mi esaurisce.",
    "È uscito il Re di Coppe, che guida le emozioni con calma. Non devi portare tutto, a volte basta ascoltare. A quale membro del team stai pensando adesso?"
  ]]),
  rec('it-0224', 'career_decision', 1, [{id:'sw05',orientation:'reversed'}], [[
    "Ho vinto un gioco di politica d'ufficio ma mi ha lasciato l'amaro in bocca.",
    "È uscito il Cinque di Spade rovesciato — una vittoria che è costata qualcosa. Cosa senti di aver perso vincendo?"
  ]]),
  rec('it-0225', 'study_exam', 1, [{id:'cu09',orientation:'upright'}], [[
    "Finalmente ho preso il voto che volevo! ma non so cosa fare dopo.",
    "È uscito qualcuno con espressione pienamente soddisfatta. Aver ottenuto ciò che volevi è davvero qualcosa. Su questa soddisfazione, cosa ti incuriosisce adesso?"
  ]]),
  rec('it-0226', 'family_conflict', 1, [{id:'pe05',orientation:'reversed'}], [[
    "Le difficoltà economiche della mia famiglia mi fanno sempre sentire in colpa.",
    "Le persone nella neve sono uscite rovesciate — il periodo difficile si avvicina alla fine. La tua famiglia probabilmente sente la stessa colpa verso di te."
  ]]),
  rec('it-0227', 'friendship', 1, [{id:'ar14',orientation:'reversed'}], [[
    "Nelle mie amicizie sono sempre io a cedere.",
    "La Temperanza è uscita rovesciata — quella bilancia completamente pendente da un lato. Le hai mai chiesto di cedere anche lei, una volta?"
  ]]),
  rec('it-0228', 'self_growth', 1, [{id:'sw06',orientation:'upright'}], [[
    "Sto uscendo da un periodo difficile e sento che sta migliorando piano piano.",
    "È uscita la barca che attraversa acque calme — esattamente quel movimento. Cosa senti più diverso adesso?"
  ]]),
  rec('it-0229', 'money_practical', 1, [{id:'ar05',orientation:'reversed'}], [[
    "Il mio modo di gestire i soldi è così diverso da quello dei miei genitori che ci scontriamo sempre.",
    "È uscito Il Papa rovesciato — una tradizione ereditata che non ti calza più. Qual è la differenza più grande tra il tuo metodo e il loro?"
  ]]),
  rec('it-0230', 'daily_checkin', 1, [{id:'cu03',orientation:'upright'}], [[
    "carta per oggi per favore",
    "È uscito il Tre di Coppe, brindare insieme. Oggi passare tempo con chi ti è vicino potrebbe sollevarti l'umore."
  ]]),
  rec('it-0231', 'daily_checkin', 1, [{id:'ar04',orientation:'reversed'}], [[
    "carta di oggi",
    "È uscito L'Imperatore rovesciato. Oggi un piano flessibile potrebbe funzionare meglio di uno rigido."
  ]]),
  rec('it-0232', 'daily_checkin', 1, [{id:'swki',orientation:'upright'}], [[
    "carta per oggi per favore",
    "È uscito il Re di Spade, giudizio chiaro. Oggi salta il rimuginare e prendi con chiarezza l'unica decisione che conta."
  ]]),
  rec('it-0233', 'creative_block', 1, [{id:'pekn',orientation:'upright'}], [[
    "Lavoro così lentamente che mi frustra con me stessa.",
    "È uscito un cavaliere che avanza fermo ma senza fretta. Lento non è sbagliato, forse è il tuo ritmo. A questo ritmo, pensi che finirai comunque?"
  ]]),
  rec('it-0234', 'skeptical_user', 1, [{id:'cuac',orientation:'reversed'}], [[
    "sinceramente ho un po' paura di affezionarmi emotivamente a una cosa così.",
    "È uscita una coppa traboccante, rovesciata. Aprirsi può fare paura. Vacci piano — mi chiedi qualcosa di piccolo per iniziare?"
  ]]),
  rec('it-0235', 'big_life_decision', 1, [{id:'wa05',orientation:'upright'}], [[
    "Tutta la mia famiglia ha opinioni diverse e non so come decidere.",
    "È uscita gente che agita bastoni. Tutti si preoccupano a modo loro. Di queste voci, quale si avvicina di più a quello che senti tu?"
  ]]),
  rec('it-0236', 'money_practical', 1, [{id:'sw09',orientation:'reversed'}], [[
    "Mi preoccupo così tanto dei debiti che non riesco a dormire.",
    "È uscito qualcuno angosciato, rovesciato — la preoccupazione che inizia ad alleviarsi. Hai già un piano, anche piccolo, per quel debito?"
  ]]),
  rec('it-0237', 'family_conflict', 1, [{id:'ar07',orientation:'reversed'}], [[
    "Ogni volta che dico quello che penso in famiglia, finisce in conflitto.",
    "È uscito Il Carro rovesciato — che cerca di dare una direzione ma finisce solo in scontri. E se lo dicessi in un altro modo?"
  ]]),
  rec('it-0238', 'self_growth', 1, [{id:'peac',orientation:'upright'}], [[
    "Voglio iniziare qualcosa con le mie forze, anche piccolo.",
    "È uscita una moneta nel palmo aperto. Un piccolo inizio può crescere in qualcosa di grande. In cosa potrebbe diventare quell'inizio?"
  ]]),
  rec('it-0239', 'daily_checkin', 1, [{id:'pe03',orientation:'upright'}], [[
    "carta per oggi per favore",
    "È uscito il Tre di Denari, lavorare in sincronia. Oggi collaborare con qualcuno potrebbe funzionare meglio che lavorare da sola."
  ]]),
  rec('it-0240', 'creative_block', 1, [{id:'ar16',orientation:'reversed'}], [[
    "Ho voglia di buttare via tutto quello che ho finito e ricominciare da zero.",
    "È uscita La Torre rovesciata — più che un crollo totale, sembra una scelta consapevole di ricostruire. Cosa vorresti fare diversamente questa volta?"
  ]]),
];

writeBatch(batch);
