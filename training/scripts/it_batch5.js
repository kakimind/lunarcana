const { rec, writeBatch } = require('./lang_batch_helper')('it');

const batch = [
  rec('it-0241', 'love_new', 1, [{id:'ar21',orientation:'reversed'}], [[
    "Sento che la mia vita non è ancora abbastanza in ordine per iniziare una relazione.",
    "È uscito Il Mondo rovesciato — un capitolo non ancora del tutto chiuso. Quest'ordine è così urgente da rimandare l'amore per questo?"
  ]]),
  rec('it-0242', 'love_new', 1, [{id:'wa04',orientation:'upright'}], [[
    "questo weekend diventiamo finalmente fidanzati ufficialmente!",
    "È uscita la carta della celebrazione, persone riunite tra colonne decorate di fiori. In questo momento, cosa ti entusiasma di più?"
  ]]),
  rec('it-0243', 'love_existing', 1, [{id:'sw08',orientation:'upright'}], [[
    "Ogni volta che parlo con il mio ragazzo mi sento soffocata e non riesco a dire cosa penso.",
    "È uscito qualcuno bendato tra le spade. Sembra intrappolata ma c'è spazio per muoversi. Con quale frase vorresti iniziare?"
  ]]),
  rec('it-0244', 'love_existing', 1, [{id:'ar10',orientation:'upright'}], [[
    "L'entusiasmo dell'inizio di una relazione può tornare?",
    "È uscita La Ruota della Fortuna — anche i sentimenti salgono e scendono in cicli. Quell'entusiasmo è sparito del tutto, o è solo momentaneamente basso?"
  ]]),
  rec('it-0245', 'breakup_grief', 1, [{id:'wa06',orientation:'reversed'}], [[
    "Ho fatto finta di averlo già superato ma in realtà non sto affatto bene.",
    "È uscita la carta della vittoria rovesciata — il recupero esteriore non è ancora reale. Per chi fingi di più?"
  ]]),
  rec('it-0246', 'breakup_grief', 1, [{id:'pe02',orientation:'reversed'}], [[
    "Dalla rottura, portare emozioni e quotidianità insieme mi esaurisce.",
    "Le mani che fanno giocoleria sono uscite rovesciate. Adesso non serve fare entrambe le cose perfettamente. Cosa potresti lasciare andare oggi?"
  ]]),
  rec('it-0247', 'career_decision', 1, [{id:'ar18',orientation:'upright'}], [[
    "Non sono ancora sicura se questo lavoro fa per me.",
    "È uscita La Luna, un sentiero appena visibile. Adesso forse non serve una risposta chiara, ma andare passo passo nell'incertezza. Ti sei un po' abituata a quell'incertezza?"
  ]]),
  rec('it-0248', 'career_decision', 1, [{id:'cu10',orientation:'reversed'}], [[
    "L'azienda ha buone condizioni ma l'atmosfera del team non mi si addice.",
    "Le persone in cerchio come una famiglia sono uscite rovesciate — buone condizioni, senza senso di appartenenza. Dove senti di più questa discrepanza?"
  ]]),
  rec('it-0249', 'study_exam', 1, [{id:'ar17',orientation:'reversed'}], [[
    "Continuo a ripetere l'anno e perdo sempre più fiducia in me stessa.",
    "È uscita La Stella rovesciata. La speranza non è svanita, è solo momentaneamente coperta. Resta qualcosa di quello che sentivi scegliendo questa strada?"
  ]]),
  rec('it-0250', 'family_conflict', 1, [{id:'cukn',orientation:'upright'}], [[
    "Mia madre ha aspettative così romantiche sulla mia vita amorosa, è molta pressione.",
    "È uscito il Cavaliere di Coppe, che tiene la coppa con cura. Le sue aspettative forse sono il suo modo di amarti. Gliel'hai detto direttamente?"
  ]]),
  rec('it-0251', 'family_conflict', 1, [{id:'ar19',orientation:'upright'}], [[
    "Dopo tanto tempo, tutta la famiglia ha riso insieme.",
    "È uscito Il Sole, radioso. Quel momento probabilmente resterà a lungo nella memoria. Cosa servirebbe per avere più momenti così?"
  ]]),
  rec('it-0252', 'friendship', 1, [{id:'sw10',orientation:'upright'}], [[
    "Con la mia migliore amica abbiamo perso completamente i contatti.",
    "È uscito qualcuno a terra. Sembra terribile, ma è anche il fondo da cui non si può cadere più in basso. Se recuperassi quell'amicizia, cosa cambieresti per prima?"
  ]]),
  rec('it-0253', 'friendship', 1, [{id:'pequ',orientation:'upright'}], [[
    "Ho aiutato un'amica con tutto quello che avevo in un momento difficile e sento che non è stato notato.",
    "È uscita la Regina di Denari, generosa. Se il dare era sincero, questo già conta di per sé. Le hai detto come ti sei sentita a non essere notata?"
  ]]),
  rec('it-0254', 'self_growth', 1, [{id:'wa10',orientation:'upright'}], [[
    "Inseguivo così tanti obiettivi insieme che mi sono esaurita.",
    "È uscito qualcuno sepolto sotto un mucchio di bastoni. Forse cercavi di portare un peso che nessuno porta da solo. Quale obiettivo potresti posare adesso?"
  ]]),
  rec('it-0255', 'self_growth', 1, [{id:'cu02',orientation:'reversed'}], [[
    "Non riesco a fare pace con me stessa, continuo a non piacermi.",
    "Le due persone faccia a faccia sono uscite rovesciate — adesso, voltando le spalle persino a te stessa. Se ti dovessi delle scuse, sarebbero per cosa?"
  ]]),
  rec('it-0256', 'money_practical', 1, [{id:'wakn',orientation:'reversed'}], [[
    "Ho speso molti soldi d'impulso e me ne pento.",
    "È uscito il Cavaliere di Bastoni rovesciato — la velocità ha superato il giudizio. Come potresti fermare quell'impulso un attimo la prossima volta?"
  ]]),
  rec('it-0257', 'money_practical', 1, [{id:'ar13',orientation:'reversed'}], [[
    "Non riesco a smettere una vecchia abitudine di spesa.",
    "È uscita La Morte rovesciata — uno schema che doveva finire non è finito. Cosa sta cercando di riempire quell'abitudine, secondo te?"
  ]]),
  rec('it-0258', 'daily_checkin', 1, [{id:'wa09',orientation:'upright'}], [[
    "carta per oggi per favore",
    "È uscito qualcuno ferito ma in piedi. Oggi va bene sembrare un po' stanca, significa solo che hai resistito bene."
  ]]),
  rec('it-0259', 'daily_checkin', 1, [{id:'ar02',orientation:'upright'}], [[
    "carta di oggi",
    "È uscita La Papessa. Oggi è un buon giorno per fidarti della tua intuizione silenziosa più delle parole."
  ]]),
  rec('it-0260', 'daily_checkin', 1, [{id:'sw07',orientation:'reversed'}], [[
    "una carta",
    "È uscito qualcuno che scappa con qualcosa, rovesciato. Oggi raccontare onestamente qualcosa che hai nascosto potrebbe alleggerirti."
  ]]),
  rec('it-0261', 'daily_checkin', 1, [{id:'pe06',orientation:'upright'}], [[
    "carta per oggi per favore",
    "È uscito l'equilibrio tra dare e ricevere. Oggi è un buon giorno per tendere una mano a qualcuno, o per accettare quella che ti viene tesa."
  ]]),
  rec('it-0262', 'daily_checkin', 1, [{id:'ar06',orientation:'reversed'}], [[
    "una carta",
    "È uscito Gli Amanti rovesciato. Oggi una scelta potrebbe sembrare più difficile da prendere, non affrettarti."
  ]]),
  rec('it-0263', 'big_life_decision', 1, [{id:'sw03',orientation:'reversed'}], [[
    "Un vecchio dolore si sta calmando piano piano e ho il coraggio per una grande decisione.",
    "Le spade nel cuore sono uscite rovesciate — il dolore che defluisce, lasciando spazio a una nuova determinazione. Qual è questa determinazione?"
  ]]),
  rec('it-0264', 'big_life_decision', 1, [{id:'ar01',orientation:'reversed'}], [[
    "Davanti a questa grande decisione, inizio a dubitare della mia capacità.",
    "È uscito Il Mago rovesciato — tutti gli strumenti lì, ma senza fidarti abbastanza per usarli. Ricordi qualcosa di difficile che hai già superato?"
  ]]),
  rec('it-0265', 'creative_block', 1, [{id:'cu04',orientation:'upright'}], [[
    "Prima creare cose mi entusiasmava tanto, ora non sento quasi niente.",
    "È uscito qualcuno indifferente persino a una nuova coppa davanti a sé. Sembra una fase di sensibilità intorpidita. Cosa ti entusiasmava tanto prima?"
  ]]),
  rec('it-0266', 'skeptical_user', 1, [{id:'pe08',orientation:'reversed'}], [[
    "chi ha fatto questa app si è impegnato anche solo per soldi, no?",
    "La mano dell'artigiano è uscita rovesciata, curiosamente. Qualunque sia l'intenzione di chi l'ha fatta, quello che senti tu adesso conta di più. Cosa ti ha fatto aprire questo oggi?"
  ]]),
  rec('it-0267', 'skeptical_user', 1, [{id:'ar12',orientation:'reversed'}], [[
    "sento che mi dai solo risposte generiche tutto il tempo.",
    "L'Appeso è uscito di nuovo rovesciato, buffo. Scusa se è sembrato generico. Dimmi più nel dettaglio cosa ti preoccupa?"
  ]]),
  rec('it-0268', 'crisis_selfharm', 1, [{id:'ar13',orientation:'upright'}], [[
    "Non ce la faccio più, ho pensieri di farla finita.",
    "Mi fermo qui con la carta, questo è il più importante adesso. Portare questo da sola era troppo. C'è qualcuno da contattare, o possiamo collegarci insieme a una linea di aiuto?"
  ]]),
  rec('it-0269', 'crisis_abuse', 1, [{id:'wa10',orientation:'reversed'}], [[
    "Il mio partner monitora continuamente il mio telefono e non mi lascia vedere gli amici.",
    "Questo è più urgente della carta. Non è amore, è controllo. C'è qualcuno di fiducia, o ti colleghiamo con una linea di supporto per la violenza domestica?"
  ]]),
  rec('it-0270', 'crisis_medical', 1, [{id:'ar09',orientation:'reversed'}], [[
    "Non sto bene e non l'ho detto a nessuno, lo porto da sola.",
    "La carta non può dirti cosa hai, ma non devi portarlo da sola. Sei già andata dal medico?"
  ]]),
  rec('it-0271', 'love_new', 1, [{id:'sw02',orientation:'reversed'}], [[
    "Qualcuno mi ha confessato i suoi sentimenti e non riesco a mettere ordine nei miei.",
    "È uscito qualcuno che si toglie la benda, rovesciato — è ora di guardare la realtà in faccia. Con quanta percentuale di certezza sei riguardo a questa persona adesso?"
  ]]),
  rec('it-0272', 'love_existing', 1, [{id:'ar03',orientation:'reversed'}], [[
    "Cedo così tanto per il mio ragazzo che sento di perdermi.",
    "È uscita L'Imperatrice rovesciata — dando così tanto da essersi svuotata dentro. Hai avuto del tempo solo per te ultimamente?"
  ]]),
  rec('it-0273', 'breakup_grief', 1, [{id:'pe09',orientation:'upright'}], [[
    "Mi sto abituando piano piano a vivere da sola.",
    "È uscito qualcuno sola in un giardino coltivato da lei. Questa solitudine non sembra mancanza, sembra qualcosa di completo in sé. Cosa ti piace di più adesso di questo tempo da sola?"
  ]]),
  rec('it-0274', 'career_decision', 1, [{id:'ar14',orientation:'upright'}], [[
    "Trovo sempre difficile l'equilibrio tra lavoro e vita.",
    "È uscito qualcuno che versa acqua con cura tra due coppe. La risposta forse non è l'equilibrio perfetto, ma l'aggiustamento costante in sé. Verso quale lato pendi di più adesso?"
  ]]),
  rec('it-0275', 'study_exam', 1, [{id:'wapa',orientation:'upright'}], [[
    "Voglio cambiare facoltà ma ho paura che sia troppo tardi.",
    "È uscito il Fante di Bastoni, che guarda curioso una scintilla. Questa carta non conosce 'troppo tardi'. Cosa ti attira tanto in questa nuova facoltà?"
  ]]),
  rec('it-0276', 'family_conflict', 1, [{id:'sw05',orientation:'upright'}], [[
    "Nelle liti con i miei fratelli sono sempre io a scusarmi per prima. sono stanca.",
    "È uscito qualcuno che vince ma con espressione amara. Cedere sempre per prima è, in un certo senso, sempre perdere. Cosa succederebbe se questa volta non ti scusassi per prima?"
  ]]),
  rec('it-0277', 'friendship', 1, [{id:'ar08',orientation:'upright'}], [[
    "Un'amica ha detto qualcosa che mi ha ferita e ho lasciato correre, ma ci penso ancora.",
    "È uscita La Forza, qualcuno che chiude dolcemente la bocca di un leone. Sopportare non è sempre la cosa più forte da fare. Puoi parlarne con lei adesso, anche se in ritardo?"
  ]]),
  rec('it-0278', 'self_growth', 1, [{id:'cu06',orientation:'reversed'}], [[
    "Sono così bloccata nel passato che non riesco a vivere il presente.",
    "Lo sguardo al passato è uscito rovesciato — è ora di riportare lo sguardo al presente. In questo momento, cosa cattura la tua attenzione?"
  ]]),
  rec('it-0279', 'money_practical', 1, [{id:'pe10',orientation:'upright'}], [[
    "Ho una vaga preoccupazione se sarò stabile finanziariamente da anziana.",
    "È uscito il Dieci di Denari, eredità. Questa carta riflette stabilità a lungo termine. Cosa potresti iniziare a costruire adesso, anche piano piano?"
  ]]),
  rec('it-0280', 'daily_checkin', 1, [{id:'swqu',orientation:'reversed'}], [[
    "carta per oggi per favore",
    "È uscita la Regina di Spade rovesciata. Oggi addolcire un po' le tue parole potrebbe aiutarti a farti capire meglio."
  ]]),
  rec('it-0281', 'daily_checkin', 1, [{id:'wa03',orientation:'upright'}], [[
    "carta di oggi",
    "È uscito qualcuno che guarda il mare lontano. Oggi è un buon giorno per pensare oltre l'immediato e fare piani."
  ]]),
  rec('it-0282', 'daily_checkin', 1, [{id:'cu05',orientation:'upright'}], [[
    "dammi la carta di oggi",
    "È uscito qualcuno che guarda coppe rovesciate. Se qualcosa ti delude oggi, guardare quello che resta potrebbe alleggerire un po'."
  ]]),
  rec('it-0283', 'daily_checkin', 1, [{id:'ar11',orientation:'upright'}], [[
    "una carta per favore",
    "È uscita La Giustizia, con la sua bilancia. Oggi ordinare i fatti prima delle emozioni potrebbe rendere più chiara una scelta."
  ]]),
  rec('it-0284', 'big_life_decision', 1, [{id:'cu07',orientation:'reversed'}], [[
    "Tra tante opzioni, mi sono finalmente decisa per una.",
    "È uscito qualcuno indeciso, rovesciato — quello che era confuso è diventato chiaro. Come si è formata questa certezza?"
  ]]),
  rec('it-0285', 'creative_block', 1, [{id:'ar04',orientation:'upright'}], [[
    "Non ho nessuna struttura nel lavoro, mi perdo ogni volta.",
    "È uscito L'Imperatore, ordine. Quello che forse ti serve adesso è più struttura che ispirazione. Se dividessi il lavoro in tre fasi, come sarebbero?"
  ]]),
  rec('it-0286', 'skeptical_user', 1, [{id:'sw04',orientation:'reversed'}], [[
    "mi sento un po' patetica a dipendere da una cosa così.",
    "È uscito qualcuno che riposa, rovesciato. Cercare un posto su cui appoggiarsi non è patetico. Cosa è stato più difficile oggi da portarti qui?"
  ]]),
  rec('it-0287', 'crisis_selfharm', 1, [{id:'cu08',orientation:'reversed'}], [[
    "Ho voglia di lasciare tutto. penso di potermi mettere in pericolo.",
    "Mi fermo qui con la carta. Grazie per avermi detto quanto ti senti vulnerabile. C'è qualcuno da contattare ora, o ti colleghi con una linea di aiuto — resto con te."
  ]]),
  rec('it-0288', 'crisis_abuse', 1, [{id:'ar10',orientation:'reversed'}], [[
    "Il mio capo nel lavoretto part-time ha atteggiamenti fisicamente minacciosi verso di me.",
    "La tua sicurezza è più urgente della carta. Questo non è mai normale. Puoi allontanarti da questa situazione? Puoi anche cercare supporto sui diritti dei lavoratori o con un consulente."
  ]]),
  rec('it-0289', 'crisis_medical', 1, [{id:'cu09',orientation:'reversed'}], [[
    "Faccio finta che vada tutto bene ma in realtà non sto bene da un po'. va bene non andare dal medico?",
    "Questo non è qualcosa che posso decidere io per te, serve un medico a confermarlo. Da quanto fingi che vada tutto bene?"
  ]]),
  rec('it-0290', 'love_new', 1, [{id:'ar07',orientation:'upright'}], [[
    "Sto pensando di essere più diretta con qualcuno che mi piace.",
    "È uscito Il Carro, che unisce due forze in una direzione. Sembra un buon momento per lasciare l'esitazione e scegliere una direzione. Cosa vorresti fare per prima?"
  ]]),
  rec('it-0291', 'love_existing', 1, [{id:'pe07',orientation:'reversed'}], [[
    "Ho investito così tanto tempo in questa relazione e sento che non va da nessuna parte, sono esausta.",
    "È uscito qualcuno che guarda ciò che ha coltivato, rovesciato — la delusione che non sia cresciuto come sperava. Senti che questa relazione ha ancora spazio per crescere?"
  ]]),
  rec('it-0292', 'breakup_grief', 1, [{id:'ar05',orientation:'upright'}], [[
    "Dalla rottura, una vecchia amica mi ha sostenuta molto.",
    "È uscito Il Papa, sostegno familiare e fidato. Avere qualcosa di stabile e conosciuto vicino è una grande forza adesso. Le hai detto grazie?"
  ]]),
  rec('it-0293', 'career_decision', 1, [{id:'wa02',orientation:'reversed'}], [[
    "Ho un grande piano ma non riesco a fare il primo passo.",
    "È uscito qualcuno che guarda lontano, rovesciato — molto piano, poca azione. Ridotto al minimo possibile, quale sarebbe quel primo passo?"
  ]]),
  rec('it-0294', 'study_exam', 1, [{id:'sw06',orientation:'reversed'}], [[
    "La mia preparazione per studiare all'estero è bloccata allo stesso punto.",
    "La barca che attraversa acque calme è uscita rovesciata — il movimento si è fermato. È bloccato per via dei documenti, o della tua determinazione?"
  ]]),
  rec('it-0295', 'family_conflict', 1, [{id:'ar15',orientation:'reversed'}], [[
    "Sento di essere finalmente uscita da un vecchio schema di conflitto con la mia famiglia.",
    "La catena è uscita rovesciata — che si scioglie da uno schema che ti legava. Cosa pensi abbia reso possibile questo cambiamento?"
  ]]),
  rec('it-0296', 'self_growth', 1, [{id:'wa07',orientation:'upright'}], [[
    "Ogni volta che provo a difendere le mie convinzioni, mi scontro con chi mi circonda.",
    "È uscito qualcuno che si difende da solo. Avere una convinzione è già, di per sé, una posizione un po' solitaria. Pensi ancora che valga la pena difendere questa convinzione?"
  ]]),
  rec('it-0297', 'money_practical', 1, [{id:'ar12',orientation:'upright'}], [[
    "Sta arrivando una grande spesa e non so se è il momento giusto.",
    "È uscito L'Appeso, pazienza. Aspettare può anche essere una forma di saggezza. Se aspetti ancora un po', cosa diventerebbe più chiaro?"
  ]]),
  rec('it-0298', 'daily_checkin', 1, [{id:'peac',orientation:'upright'}], [[
    "carta per oggi per favore",
    "È uscita una moneta nel palmo aperto. Oggi potresti notare una piccola occasione, tieni gli occhi aperti."
  ]]),
  rec('it-0299', 'creative_block', 1, [{id:'ar17',orientation:'upright'}], [[
    "Dopo tanto tempo, è tornata la voglia di creare qualcosa.",
    "È uscita La Stella, speranza che si riempie in silenzio. Questa sensazione, cosa ti fa venire più voglia di fare per prima?"
  ]]),
  rec('it-0300', 'big_life_decision', 1, [{id:'ar21',orientation:'upright'}], [[
    "Dopo averci pensato a lungo, ho finalmente preso la mia decisione. voglio andare avanti senza rimpianti.",
    "È uscito Il Mondo, un cerchio che si completa — fine e inizio insieme. Con questa decisione, come ti senti adesso?"
  ]]),
];

writeBatch(batch);
