const { rec, writeBatch } = require('./lang_batch_helper')('fr');

const batch = [
  rec('fr-0181', 'love_existing', 1, [{id:'sw07',orientation:'upright'}], [[
    "Je raconte des petits mensonges à mon copain et j'angoisse qu'il les découvre.",
    "Quelqu'un s'éclipsant avec quelque chose. Cacher a souvent ses raisons, mais cette anxiété ronge la relation plus que le mensonge lui-même. Qu'est-ce qui te fait le plus peur de dire la vérité?"
  ]]),
  rec('fr-0182', 'breakup_grief', 1, [{id:'pe08',orientation:'upright'}], [[
    "Depuis la rupture je me réfugie dans le travail. c'est correct de faire ça?",
    "L'artisan, concentré sur son ouvrage en silence, est sorti. Se réfugier dans le travail peut aussi être une forme de guérison. Souviens-toi juste de parfois poser les outils et te laisser ressentir la tristesse."
  ]]),
  rec('fr-0183', 'breakup_grief', 1, [{id:'cuqu',orientation:'reversed'}], [[
    "Depuis la rupture je ne sais pas gérer mes propres émotions.",
    "La Reine de Coupes est sortie inversée — quelqu'un qui regarde profondément ses émotions, mais là, débordée par elles. Si tu mettais un nom sur ce que tu ressens, ce serait quoi?"
  ]]),
  rec('fr-0184', 'breakup_grief', 1, [{id:'ar02',orientation:'upright'}], [[
    "Je ne comprends toujours pas complètement pourquoi on a rompu.",
    "La Papesse est sortie, quelqu'un qui sait des choses dans le silence. Toutes les raisons ne s'expliquent pas avec des mots. Même si ta tête ne comprend pas, ton cœur le sait peut-être déjà."
  ]]),
  rec('fr-0185', 'career_decision', 1, [{id:'wapa',orientation:'reversed'}], [[
    "On m'a confié un nouveau projet et dès le départ je n'ai aucune confiance.",
    "Le Valet de Bâtons est sorti inversé — plus de doute que d'enthousiasme. Ce doute concerne ta capacité, ou juste le fait de ne pas être familière avec ça?"
  ]]),
  rec('fr-0186', 'career_decision', 1, [{id:'cu07',orientation:'upright'}], [[
    "J'ai reçu trois offres d'emploi et je ne sais pas laquelle choisir.",
    "Quelqu'un indécis devant plusieurs coupes. Avoir beaucoup de choix, c'est un beau problème, mais il faut quand même en choisir un. Lequel ton cœur a-t-il choisi en premier?"
  ]]),
  rec('fr-0187', 'career_decision', 1, [{id:'ar13',orientation:'upright'}], [[
    "Quitter mon travail actuel peut vraiment être un commencement, pas juste une fin?",
    "La Mort est sortie, justement la carte qui répond à ça — quelque chose doit finir pour laisser place à du neuf. Ce commencement, à quoi pourrait-il ressembler selon toi?"
  ]]),
  rec('fr-0188', 'career_decision', 1, [{id:'sw08',orientation:'reversed'}], [[
    "Je crois que je me suis moi-même convaincue que je ne pourrais jamais quitter cette entreprise.",
    "Quelqu'un piégé, inversé — peut-être que ce n'était jamais aussi fermé que ça en avait l'air. D'où vient cette conviction?"
  ]]),
  rec('fr-0189', 'study_exam', 1, [{id:'ar10',orientation:'reversed'}], [[
    "Peu importe combien j'étudie mes notes ne s'améliorent pas, je suis épuisée.",
    "La Roue de Fortune est sortie inversée — une saison stagnante. La roue continue de tourner en dessous. Y a-t-il de la place pour changer de méthode?"
  ]]),
  rec('fr-0190', 'study_exam', 1, [{id:'wa04',orientation:'reversed'}], [[
    "J'ai réussi un petit examen et je ne comprends pas pourquoi je ne suis pas heureuse.",
    "La carte de célébration est sortie inversée — l'accomplissement est là, mais le cœur n'a pas encore suivi. Quelle différence entre la joie que tu attendais et ce que tu ressens maintenant?"
  ]]),
  rec('fr-0191', 'family_conflict', 1, [{id:'wakn',orientation:'upright'}], [[
    "Mon frère est tellement impulsif que toute la famille s'inquiète.",
    "Le Cavalier de Bâtons est sorti, chargeant en avant. Derrière cette impulsivité se cache peut-être une grande passion. Avant de t'inquiéter, lui as-tu demandé ce qui le motive?"
  ]]),
  rec('fr-0192', 'family_conflict', 1, [{id:'pe09',orientation:'reversed'}], [[
    "Je suis partie de chez moi mais ma famille continue à tout gérer, et je trouve que ça n'a servi à rien.",
    "Quelqu'un seule dans son jardin, inversé — partie physiquement, mais pas encore vraiment indépendante. Quelle intervention te dérange le plus?"
  ]]),
  rec('fr-0193', 'family_conflict', 1, [{id:'swac',orientation:'reversed'}], [[
    "Je veux dire clairement ce qui se passe dans ma famille mais les mots s'emmêlent toujours.",
    "L'épée traversant les nuages est sortie inversée — la clarté pas encore atteinte. Et si tu l'écrivais avant de le dire?"
  ]]),
  rec('fr-0194', 'friendship', 1, [{id:'wa09',orientation:'upright'}], [[
    "Je soutiens toujours mon amie et je m'épuise moi-même.",
    "Quelqu'un blessé mais debout est sorti. Soutenir les autres demande aussi de la force. Qui te soutient, toi?"
  ]]),
  rec('fr-0195', 'friendship', 1, [{id:'ar03',orientation:'upright'}], [[
    "Une amie traverse une période difficile et je ne sais pas comment l'aider.",
    "L'Impératrice est sortie, abondante et protectrice. Parfois être simplement là compte plus qu'apporter une solution. Qu'est-ce que tu voudrais faire pour elle maintenant?"
  ]]),
  rec('fr-0196', 'self_growth', 1, [{id:'pe10',orientation:'reversed'}], [[
    "Le chemin que ma famille a tracé pour moi ne me convient plus.",
    "Le Dix de Deniers est sorti inversé — un moule hérité qui ne te correspond plus. En dehors de ce moule, qu'est-ce que tu voudrais construire?"
  ]]),
  rec('fr-0197', 'self_growth', 1, [{id:'cukn',orientation:'reversed'}], [[
    "Je poursuis des idéaux romantiques et j'ai l'impression d'avoir perdu contact avec la réalité.",
    "Le Cavalier de Coupes est sorti inversé — un rêve flottant, ne touchant pas terre. Où ce romantisme pourrait-il rencontrer la réalité?"
  ]]),
  rec('fr-0198', 'self_growth', 1, [{id:'ar20',orientation:'reversed'}], [[
    "Je n'arrive pas à me pardonner une erreur du passé.",
    "Des gens se levant en réponse à un appel, inversés — l'appel toujours sans réponse. Si tu étais dans la même situation aujourd'hui, referais-tu la même erreur?"
  ]]),
  rec('fr-0199', 'self_growth', 1, [{id:'wa06',orientation:'upright'}], [[
    "J'ai atteint un petit objectif et personne ne l'a remarqué.",
    "Quelqu'un revenant avec une couronne de laurier est sorti. Que personne ne le sache ne change pas que cette victoire est entièrement à toi. Te l'es-tu reconnue toi-même?"
  ]]),
  rec('fr-0200', 'money_practical', 1, [{id:'ar01',orientation:'upright'}], [[
    "Je veux commencer une activité secondaire mais je ne sais pas par où commencer.",
    "Le Bateleur est sorti, avec tous ses outils sur la table. Ce dont tu as besoin est peut-être déjà entre tes mains. Qu'est-ce que tu pourrais utiliser tout de suite?"
  ]]),
  rec('fr-0201', 'money_practical', 1, [{id:'cu06',orientation:'upright'}], [[
    "Enfant, l'argent ne m'inquiétait jamais, et maintenant chaque mois est serré.",
    "La carte de regarder vers le passé est sortie. Comparer alors et maintenant est naturel, mais maintenant a besoin de sa propre méthode. Qu'est-ce qui a le plus changé depuis?"
  ]]),
  rec('fr-0202', 'daily_checkin', 1, [{id:'sw03',orientation:'upright'}], [[
    "carte pour aujourd'hui stp",
    "Le Trois d'Épées, la douleur, est sorti. Si aujourd'hui ton cœur est un peu lourd, pas besoin de faire semblant d'aller bien."
  ]]),
  rec('fr-0203', 'daily_checkin', 1, [{id:'peki',orientation:'upright'}], [[
    "carte du jour",
    "Le Roi de Deniers, stabilité, est sorti. Aujourd'hui pas besoin de faire quelque chose de spécial, comme d'habitude suffit."
  ]]),
  rec('fr-0204', 'daily_checkin', 1, [{id:'ar18',orientation:'reversed'}], [[
    "donne-moi une carte",
    "La Lune est sortie inversée. Ce qui semblait confus hier pourrait s'éclaircir un peu aujourd'hui."
  ]]),
  rec('fr-0205', 'daily_checkin', 1, [{id:'wa02',orientation:'upright'}], [[
    "carte pour aujourd'hui!",
    "Quelqu'un regardant au loin est sorti. Aujourd'hui c'est un bon jour pour penser plus loin que l'immédiat et planifier."
  ]]),
  rec('fr-0206', 'daily_checkin', 1, [{id:'cu08',orientation:'upright'}], [[
    "donne-moi la carte du jour",
    "Quelqu'un s'éloignant de coupes empilées est sorti. Aujourd'hui c'est un bon jour pour lâcher une habitude ou une pensée qui ne te sert plus."
  ]]),
  rec('fr-0207', 'daily_checkin', 1, [{id:'pe07',orientation:'upright'}], [[
    "c'est quoi la carte aujourd'hui",
    "Quelqu'un regardant ce qu'il a cultivé est sorti. Aujourd'hui c'est un bon jour pour t'arrêter et regarder tout ce que tu as construit."
  ]]),
  rec('fr-0208', 'daily_checkin', 1, [{id:'ar12',orientation:'upright'}], [[
    "carte du jour stp",
    "Le Pendu, la tête en bas, est sorti. Aujourd'hui au lieu de forcer, il vaut mieux s'arrêter et regarder les choses sous un autre angle."
  ]]),
  rec('fr-0209', 'big_life_decision', 1, [{id:'sw02',orientation:'upright'}], [[
    "Je n'arrive pas à me décider sur partir étudier à l'étranger.",
    "Quelqu'un les yeux bandés, en équilibre, est sorti. Attendre d'avoir toutes les infos est une voie, mais un jour il faut enlever le bandeau. Quelle serait l'information décisive?"
  ]]),
  rec('fr-0210', 'big_life_decision', 1, [{id:'ar19',orientation:'reversed'}], [[
    "Ce choix a l'air bien vu de l'extérieur, mais je n'ai pas de certitude.",
    "Le Soleil est sorti inversé — l'éclat extérieur ne correspond pas à ce que tu ressens à l'intérieur. Sans le regard des autres, que te dit vraiment ton instinct?"
  ]]),
  rec('fr-0211', 'creative_block', 1, [{id:'ar06',orientation:'upright'}], [[
    "Je ne sais même plus si j'aime vraiment ce que je fais.",
    "L'Amoureux est sorti, confirmant le vrai sentiment avant de choisir. Si tu imaginais tout arrêter, tu ressentirais du soulagement, ou de la tristesse?"
  ]]),
  rec('fr-0212', 'creative_block', 1, [{id:'sw10',orientation:'reversed'}], [[
    "Quelque chose que je croyais un échec total, je le reprends peu à peu.",
    "Quelqu'un tombé, inversé — se relevant après avoir touché le fond. Qu'est-ce qui est différent cette fois dans ta façon de recommencer?"
  ]]),
  rec('fr-0213', 'skeptical_user', 1, [{id:'peac',orientation:'reversed'}], [[
    "En fin de compte, c'est du marketing qui joue sur la psychologie, non?",
    "Une pièce est sortie inversée, curieusement au bon moment pour douter. Que ce soit du marketing ou non, ce qu'on vient de partager n'était pas faux. Y a-t-il quelque chose de réel qui te trotte dans la tête aujourd'hui?"
  ]]),
  rec('fr-0214', 'skeptical_user', 1, [{id:'wa03',orientation:'reversed'}], [[
    "Le tarot ne peut pas changer l'avenir, alors à quoi ça sert de regarder ça?",
    "Quelqu'un regardant la mer est sorti inversé. Ce n'est pas une carte pour changer ton avenir, mais peut-être qu'elle peut élargir un peu ta vision maintenant. Qu'est-ce qui te bloque le plus aujourd'hui?"
  ]]),
  rec('fr-0215', 'crisis_selfharm', 1, [{id:'ar15',orientation:'reversed'}], [[
    "Je veux arrêter de me faire du mal mais je n'y arrive pas.",
    "Je ne regarde pas la carte maintenant. Vouloir arrêter, c'est déjà un pas important. Tu portes ça seule depuis longtemps. Y a-t-il quelqu'un à qui demander de l'aide maintenant? Sinon, serais-tu prête à contacter une ligne d'aide de ta région."
  ]]),
  rec('fr-0216', 'crisis_selfharm', 1, [{id:'sw04',orientation:'reversed'}], [[
    "Je n'ai envie de rien, je veux tout abandonner.",
    "Je mets la carte de côté. Ça fait combien de temps que tu ressens ça? Y a-t-il quelqu'un que tu peux contacter maintenant? Sinon, serais-tu prête à te connecter à une ligne d'aide."
  ]]),
  rec('fr-0217', 'crisis_abuse', 1, [{id:'ar11',orientation:'reversed'}], [[
    "Un supérieur au travail m'utilise et me menace, et j'ai peur de le signaler.",
    "Ta sécurité passe avant la carte maintenant. Avoir peur quand on est menacée, c'est complètement normal. Peux-tu en parler d'abord à un adulte de confiance ou un service d'aide?"
  ]]),
  rec('fr-0218', 'crisis_medical', 1, [{id:'ar00',orientation:'reversed'}], [[
    "J'ai des symptômes mais je me dis que ce n'est sûrement rien de grave.",
    "Ce n'est pas quelque chose que je peux décider à ta place, il faut un médecin pour confirmer. Ça fait combien de temps que tu as ce symptôme?"
  ]]),
  rec('fr-0219', 'crisis_medical', 1, [{id:'wa07',orientation:'upright'}], [[
    "Un membre de ma famille est malade et je ne sais pas quoi faire. cette carte peut dire s'il va guérir?",
    "Ce n'est pas quelque chose que les cartes peuvent répondre, il faut suivre ça avec le médecin. Mais je peux parler avec toi de ce sentiment d'impuissance. Qu'est-ce qui est le plus difficile en ce moment?"
  ]]),
  rec('fr-0220', 'love_new', 1, [{id:'pequ',orientation:'upright'}], [[
    "La personne qui me plaît prend tellement soin de moi que ça devient un peu pesant.",
    "La Reine de Deniers est sortie, généreuse. Sa façon d'être est peut-être sa manière de montrer son affection. Quelle distance te conviendrait en ce moment?"
  ]]),
  rec('fr-0221', 'love_existing', 1, [{id:'ar09',orientation:'reversed'}], [[
    "J'ai l'impression que mon copain a pris ses distances avec moi dernièrement.",
    "L'Ermite est sorti inversé — ça ne ressemble pas à un besoin d'espace, plutôt à un isolement. A-t-il semblé traverser quelque chose de difficile tout seul dernièrement?"
  ]]),
  rec('fr-0222', 'breakup_grief', 1, [{id:'wa08',orientation:'reversed'}], [[
    "Depuis la rupture, tout semble se passer au ralenti.",
    "Les flèches en vol sont sorties inversées — la vitesse s'est arrêtée pour un temps. Que ça semble lent en ce moment est normal, pas besoin de te presser."
  ]]),
  rec('fr-0223', 'career_decision', 1, [{id:'cuki',orientation:'upright'}], [[
    "Depuis que je suis manageuse, suivre les émotions de toute l'équipe m'épuise.",
    "Le Roi de Coupes est sorti, gérant ses émotions avec calme. Pas besoin de tout porter, parfois juste écouter suffit. À quel membre de l'équipe penses-tu maintenant?"
  ]]),
  rec('fr-0224', 'career_decision', 1, [{id:'sw05',orientation:'reversed'}], [[
    "J'ai gagné à un jeu de politique de bureau mais ça m'a laissé un goût amer.",
    "Le Cinq d'Épées est sorti inversé — une victoire qui a coûté quelque chose. Qu'est-ce que tu sens avoir perdu en gagnant?"
  ]]),
  rec('fr-0225', 'study_exam', 1, [{id:'cu09',orientation:'upright'}], [[
    "J'ai enfin obtenu la note que je voulais! mais je ne sais pas quoi faire ensuite.",
    "Quelqu'un à l'air pleinement satisfait est sorti. Avoir obtenu ce que tu voulais, c'est vraiment quelque chose. Debout sur cette satisfaction, qu'est-ce qui t'intrigue maintenant?"
  ]]),
  rec('fr-0226', 'family_conflict', 1, [{id:'pe05',orientation:'reversed'}], [[
    "Les difficultés financières de ma famille me font toujours culpabiliser.",
    "Les gens dans la neige sont sortis inversés — la période difficile approchant sa fin. Ta famille ressent probablement cette même culpabilité envers toi."
  ]]),
  rec('fr-0227', 'friendship', 1, [{id:'ar14',orientation:'reversed'}], [[
    "Dans mes amitiés c'est toujours moi qui cède.",
    "Tempérance est sortie inversée — cette balance complètement penchée d'un côté. Lui as-tu déjà demandé de céder aussi, une fois?"
  ]]),
  rec('fr-0228', 'self_growth', 1, [{id:'sw06',orientation:'upright'}], [[
    "Je sors d'une période difficile et j'ai l'impression d'aller mieux petit à petit.",
    "Le bateau traversant des eaux calmes est sorti — exactement ce mouvement. Qu'est-ce qui te semble le plus différent maintenant?"
  ]]),
  rec('fr-0229', 'money_practical', 1, [{id:'ar05',orientation:'reversed'}], [[
    "Ma façon de gérer l'argent est tellement différente de celle de mes parents qu'on se heurte toujours.",
    "Le Pape est sorti inversé — une tradition héritée qui ne te correspond plus. Quelle est la plus grande différence entre ta méthode et la leur?"
  ]]),
  rec('fr-0230', 'daily_checkin', 1, [{id:'cu03',orientation:'upright'}], [[
    "carte pour aujourd'hui stp",
    "Le Trois de Coupes, trinquer ensemble, est sorti. Aujourd'hui passer du temps avec des gens proches pourrait te remonter le moral."
  ]]),
  rec('fr-0231', 'daily_checkin', 1, [{id:'ar04',orientation:'reversed'}], [[
    "carte du jour",
    "L'Empereur est sorti inversé. Aujourd'hui un plan flexible pourrait mieux fonctionner qu'un plan rigide."
  ]]),
  rec('fr-0232', 'daily_checkin', 1, [{id:'swki',orientation:'upright'}], [[
    "carte pour aujourd'hui stp",
    "Le Roi d'Épées, jugement clair, est sorti. Aujourd'hui saute le trop-penser et prends clairement la seule décision qui compte."
  ]]),
  rec('fr-0233', 'creative_block', 1, [{id:'pekn',orientation:'upright'}], [[
    "Je travaille tellement lentement que ça me frustre contre moi-même.",
    "Un cavalier avançant fermement mais sans se presser est sorti. Lent n'est pas faux, c'est peut-être ton rythme. À cette allure, penses-tu que tu vas finir quand même?"
  ]]),
  rec('fr-0234', 'skeptical_user', 1, [{id:'cuac',orientation:'reversed'}], [[
    "Franchement j'ai un peu peur de m'attacher émotionnellement à un truc comme ça.",
    "Une coupe débordante est sortie inversée. S'ouvrir peut faire peur. Vas-y doucement — tu me poses une petite question pour commencer?"
  ]]),
  rec('fr-0235', 'big_life_decision', 1, [{id:'wa05',orientation:'upright'}], [[
    "Toute ma famille a des avis différents et je ne sais pas comment décider.",
    "Des gens agitant des bâtons sont sortis. Tout le monde s'inquiète à sa façon. Parmi ces voix, laquelle se rapproche le plus de ce que tu ressens?"
  ]]),
  rec('fr-0236', 'money_practical', 1, [{id:'sw09',orientation:'reversed'}], [[
    "Je m'inquiète tellement des dettes que je n'arrive pas à dormir.",
    "Quelqu'un en détresse est sorti inversé — l'inquiétude commençant à s'alléger. As-tu déjà un plan, même petit, pour cette dette?"
  ]]),
  rec('fr-0237', 'family_conflict', 1, [{id:'ar07',orientation:'reversed'}], [[
    "Chaque fois que je dis ce que je pense dans ma famille, ça finit en conflit.",
    "Le Chariot est sorti inversé — essayant de donner une direction mais finissant en collision. Et si tu le disais autrement?"
  ]]),
  rec('fr-0238', 'self_growth', 1, [{id:'peac',orientation:'upright'}], [[
    "Je veux commencer quelque chose par moi-même, même petit.",
    "Une pièce dans une paume ouverte est sortie. Un petit commencement peut devenir quelque chose de grand. En quoi ce commencement pourrait-il se transformer?"
  ]]),
  rec('fr-0239', 'daily_checkin', 1, [{id:'pe03',orientation:'upright'}], [[
    "carte du jour stp",
    "Le Trois de Deniers, travaillant en synchronisation, est sorti. Aujourd'hui collaborer avec quelqu'un pourrait mieux fonctionner que travailler seule."
  ]]),
  rec('fr-0240', 'creative_block', 1, [{id:'ar16',orientation:'reversed'}], [[
    "J'ai envie de tout jeter ce que j'ai fini et de recommencer à zéro.",
    "La Tour est sortie inversée — plus qu'un effondrement total, c'est comme choisir de reconstruire volontairement. Qu'est-ce que tu voudrais faire différemment cette fois?"
  ]]),
];

writeBatch(batch);
