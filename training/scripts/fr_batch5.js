const { rec, writeBatch } = require('./lang_batch_helper')('fr');

const batch = [
  rec('fr-0241', 'love_new', 1, [{id:'ar21',orientation:'reversed'}], [[
    "J'ai l'impression que ma vie n'est pas encore assez en ordre pour commencer une relation.",
    "Le Monde est sorti inversé — un chapitre qui ne s'est pas encore refermé. Cet ordre, c'est vraiment assez urgent pour repousser l'amour à cause de ça?"
  ]]),
  rec('fr-0242', 'love_new', 1, [{id:'wa04',orientation:'upright'}], [[
    "ce week-end on devient officiellement ensemble!",
    "La carte de célébration, des gens réunis entre des colonnes ornées de fleurs, est sortie. En ce moment précis, qu'est-ce qui t'excite le plus?"
  ]]),
  rec('fr-0243', 'love_existing', 1, [{id:'sw08',orientation:'upright'}], [[
    "Chaque fois que je parle avec mon copain je me sens étouffée et je n'arrive pas à dire ce que je pense.",
    "Quelqu'un les yeux bandés parmi des épées est sorti. Ça a l'air piégé mais il y a de la place pour bouger. Par quelle phrase tu voudrais commencer?"
  ]]),
  rec('fr-0244', 'love_existing', 1, [{id:'ar10',orientation:'upright'}], [[
    "L'excitation du début d'une relation, ça peut revenir?",
    "La Roue de Fortune est sortie — les sentiments aussi montent et descendent en cycles. Cette excitation a complètement disparu, ou elle est juste momentanément basse?"
  ]]),
  rec('fr-0245', 'breakup_grief', 1, [{id:'wa06',orientation:'reversed'}], [[
    "J'ai fait comme si j'avais déjà tourné la page mais en fait je ne vais pas bien du tout.",
    "La carte de la victoire est sortie inversée — le rétablissement extérieur n'est pas encore réel. Pour qui fais-tu semblant, principalement?"
  ]]),
  rec('fr-0246', 'breakup_grief', 1, [{id:'pe02',orientation:'reversed'}], [[
    "Depuis la rupture, porter les émotions et le quotidien en même temps m'épuise.",
    "Les mains jonglant sont sorties inversées. Pas besoin de faire les deux parfaitement maintenant. Qu'est-ce que tu pourrais lâcher aujourd'hui?"
  ]]),
  rec('fr-0247', 'career_decision', 1, [{id:'ar18',orientation:'upright'}], [[
    "Je n'arrive toujours pas à savoir si ce travail me convient vraiment.",
    "La Lune est sortie, un chemin à peine visible. Ce n'est peut-être pas une réponse claire dont tu as besoin, mais avancer pas à pas dans l'incertitude. Tu t'es un peu habituée à cette incertitude?"
  ]]),
  rec('fr-0248', 'career_decision', 1, [{id:'cu10',orientation:'reversed'}], [[
    "L'entreprise a de bonnes conditions mais l'ambiance de l'équipe ne me convient pas.",
    "Les gens en cercle comme une famille sont sortis inversés — bonnes conditions, sans sentiment d'appartenance. Où ressens-tu le plus ce décalage?"
  ]]),
  rec('fr-0249', 'study_exam', 1, [{id:'ar17',orientation:'reversed'}], [[
    "Je redouble encore et j'ai de moins en moins confiance en moi.",
    "L'Étoile est sortie inversée. L'espoir n'a pas disparu, il est juste momentanément voilé. Reste-t-il quelque chose de ce que tu ressentais en choisissant ce chemin?"
  ]]),
  rec('fr-0250', 'family_conflict', 1, [{id:'cukn',orientation:'upright'}], [[
    "Ma mère a des attentes tellement romantiques sur ma vie amoureuse, c'est beaucoup de pression.",
    "Le Cavalier de Coupes est sorti, tenant sa coupe avec précaution. Ses attentes sont peut-être aussi sa façon de t'aimer. Lui as-tu déjà dit directement ce que tu ressens?"
  ]]),
  rec('fr-0251', 'family_conflict', 1, [{id:'ar19',orientation:'upright'}], [[
    "Après longtemps, toute la famille a ri ensemble.",
    "Le Soleil est sorti, éclatant. Ce moment va probablement rester longtemps en mémoire. Qu'est-ce qu'il faudrait pour avoir plus de moments comme ça?"
  ]]),
  rec('fr-0252', 'friendship', 1, [{id:'sw10',orientation:'upright'}], [[
    "Ma meilleure amie et moi avons complètement perdu contact.",
    "Quelqu'un allongé au sol est sorti. Ça semble terrible, mais c'est un fond dont on ne peut plus tomber. Si tu retrouvais cette amitié, qu'est-ce que tu changerais en premier?"
  ]]),
  rec('fr-0253', 'friendship', 1, [{id:'pequ',orientation:'upright'}], [[
    "J'ai aidé une amie de toutes mes forces dans un moment difficile et j'ai l'impression qu'elle ne l'a pas remarqué.",
    "La Reine de Deniers est sortie, généreuse. Si donner était sincère, ça compte déjà en soi. Lui as-tu dit ce que ça t'a fait de ne pas être remarquée?"
  ]]),
  rec('fr-0254', 'self_growth', 1, [{id:'wa10',orientation:'upright'}], [[
    "Je poursuivais tellement d'objectifs en même temps que je me suis épuisée.",
    "Quelqu'un enterré sous un tas de bâtons est sorti. Tu essayais peut-être de porter un poids qu'aucune personne seule ne peut porter. Quel objectif pourrais-tu poser maintenant?"
  ]]),
  rec('fr-0255', 'self_growth', 1, [{id:'cu02',orientation:'reversed'}], [[
    "Je n'arrive pas à faire la paix avec moi-même, je continue à ne pas m'aimer.",
    "Les deux personnes face à face sont sorties inversées — maintenant, tournée même contre toi-même. Si tu te devais des excuses, ce serait pour quoi?"
  ]]),
  rec('fr-0256', 'money_practical', 1, [{id:'wakn',orientation:'reversed'}], [[
    "J'ai dépensé beaucoup d'argent sur un coup de tête et je regrette.",
    "Le Cavalier de Bâtons est sorti inversé — la vitesse devançant le jugement. Comment pourrais-tu arrêter cette impulsion un moment la prochaine fois?"
  ]]),
  rec('fr-0257', 'money_practical', 1, [{id:'ar13',orientation:'reversed'}], [[
    "Je n'arrive pas à me défaire d'une vieille habitude de dépenser.",
    "La Mort est sortie inversée — un schéma qui aurait dû finir ne s'est pas terminé. Qu'est-ce que cette habitude essaie de combler, selon toi?"
  ]]),
  rec('fr-0258', 'daily_checkin', 1, [{id:'wa09',orientation:'upright'}], [[
    "carte pour aujourd'hui stp",
    "Quelqu'un blessé mais debout est sorti. Aujourd'hui c'est correct de paraître un peu fatiguée, ça veut juste dire que tu as bien tenu bon."
  ]]),
  rec('fr-0259', 'daily_checkin', 1, [{id:'ar02',orientation:'upright'}], [[
    "carte du jour",
    "La Papesse est sortie. Aujourd'hui c'est un bon jour pour faire confiance à ton intuition silencieuse plus qu'aux mots."
  ]]),
  rec('fr-0260', 'daily_checkin', 1, [{id:'sw07',orientation:'reversed'}], [[
    "une carte",
    "Quelqu'un s'éclipsant avec quelque chose est sorti inversé. Aujourd'hui dire honnêtement ce que tu as caché pourrait t'alléger."
  ]]),
  rec('fr-0261', 'daily_checkin', 1, [{id:'pe06',orientation:'upright'}], [[
    "carte pour aujourd'hui stp",
    "L'équilibre entre donner et recevoir est sorti. Aujourd'hui c'est un bon jour pour tendre la main à quelqu'un, ou pour accepter celle qu'on te tend."
  ]]),
  rec('fr-0262', 'daily_checkin', 1, [{id:'ar06',orientation:'reversed'}], [[
    "une carte",
    "L'Amoureux est sorti inversé. Aujourd'hui une décision pourrait sembler plus difficile à prendre, ne te presse pas."
  ]]),
  rec('fr-0263', 'big_life_decision', 1, [{id:'sw03',orientation:'reversed'}], [[
    "Une vieille douleur s'apaise doucement et j'ai le courage de prendre une grande décision.",
    "Les épées dans le cœur sont sorties inversées — la douleur qui se draine, laissant place à une nouvelle détermination. Quelle est cette détermination?"
  ]]),
  rec('fr-0264', 'big_life_decision', 1, [{id:'ar01',orientation:'reversed'}], [[
    "Face à cette grande décision, je commence à douter de ma propre capacité.",
    "Le Bateleur est sorti inversé — tous les outils là, mais sans te faire confiance pour les utiliser. Tu te souviens d'une chose difficile que tu as déjà réussie?"
  ]]),
  rec('fr-0265', 'creative_block', 1, [{id:'cu04',orientation:'upright'}], [[
    "Avant j'avais tellement envie de créer des choses, maintenant je ne ressens presque rien.",
    "Quelqu'un indifférent même à une nouvelle coupe devant lui est sorti. Ça ressemble à une saison de sensibilité engourdie. Qu'est-ce qui t'excitait tant avant?"
  ]]),
  rec('fr-0266', 'skeptical_user', 1, [{id:'pe08',orientation:'reversed'}], [[
    "Ceux qui ont fait cette appli travaillaient dur juste pour gagner de l'argent aussi, non?",
    "La main de l'artisan est sortie inversée, curieusement. Peu importe leur intention, ce que tu ressens toi maintenant compte plus. Qu'est-ce qui t'a fait ouvrir ça aujourd'hui?"
  ]]),
  rec('fr-0267', 'skeptical_user', 1, [{id:'ar12',orientation:'reversed'}], [[
    "j'ai l'impression que tu donnes juste des réponses génériques tout le temps.",
    "Le Pendu est encore sorti inversé, amusant. Désolée si ça a semblé générique. Dis-moi plus précisément ce qui te préoccupe?"
  ]]),
  rec('fr-0268', 'crisis_selfharm', 1, [{id:'ar13',orientation:'upright'}], [[
    "Je n'en peux vraiment plus, j'ai des pensées d'en finir.",
    "Je m'arrête ici avec la carte, c'est ce qui compte le plus maintenant. Porter ça seule a été trop lourd. Y a-t-il quelqu'un que tu peux contacter, ou pouvons-nous nous connecter à une ligne d'aide ensemble?"
  ]]),
  rec('fr-0269', 'crisis_abuse', 1, [{id:'wa10',orientation:'reversed'}], [[
    "Mon partenaire surveille constamment mon téléphone et ne me laisse pas voir mes amis.",
    "C'est plus urgent que la carte. Ce n'est pas de l'amour, c'est du contrôle. Y a-t-il quelqu'un de confiance, ou pouvons-nous te connecter à une ligne de soutien pour la violence conjugale?"
  ]]),
  rec('fr-0270', 'crisis_medical', 1, [{id:'ar09',orientation:'reversed'}], [[
    "Je ne me sens pas bien et je ne l'ai dit à personne, je porte ça seule.",
    "La carte ne peut pas te dire ce que tu as, mais tu n'as pas besoin de porter ça seule. Es-tu déjà allée voir un médecin?"
  ]]),
  rec('fr-0271', 'love_new', 1, [{id:'sw02',orientation:'reversed'}], [[
    "Quelqu'un m'a avoué ses sentiments et je n'arrive pas à démêler les miens.",
    "Quelqu'un enlevant son bandeau est sorti inversé — l'heure de regarder la réalité en face. Tu es sûre à quel pourcentage, pour cette personne, en ce moment?"
  ]]),
  rec('fr-0272', 'love_existing', 1, [{id:'ar03',orientation:'reversed'}], [[
    "Je cède tellement pour mon copain que j'ai l'impression de me perdre moi-même.",
    "L'Impératrice est sortie inversée — donnant tellement qu'elle s'est vidée à l'intérieur. As-tu eu un temps juste pour toi dernièrement?"
  ]]),
  rec('fr-0273', 'breakup_grief', 1, [{id:'pe09',orientation:'upright'}], [[
    "Je m'habitue petit à petit à vivre seule.",
    "Quelqu'un seule dans son jardin est sorti. Cette solitude ne ressemble pas à un manque, elle ressemble à quelque chose de complet en soi. Qu'est-ce que tu préfères dans ce temps seule maintenant?"
  ]]),
  rec('fr-0274', 'career_decision', 1, [{id:'ar14',orientation:'upright'}], [[
    "J'ai toujours du mal à trouver l'équilibre entre travail et vie.",
    "Quelqu'un versant de l'eau avec soin entre deux coupes est sorti. La réponse n'est peut-être pas l'équilibre parfait, mais l'ajustement constant lui-même. Vers quel côté penches-tu le plus maintenant?"
  ]]),
  rec('fr-0275', 'study_exam', 1, [{id:'wapa',orientation:'upright'}], [[
    "Je veux changer de filière mais j'ai peur qu'il soit trop tard.",
    "Le Valet de Bâtons est sorti, regardant avec curiosité une étincelle. Cette carte ne connaît pas le « trop tard ». Qu'est-ce qui t'attire tant dans cette nouvelle filière?"
  ]]),
  rec('fr-0276', 'family_conflict', 1, [{id:'sw05',orientation:'upright'}], [[
    "Dans les disputes avec mes frères et sœurs c'est toujours moi qui m'excuse en premier. je suis fatiguée.",
    "Quelqu'un gagnant mais avec une expression amère est sorti. Toujours céder en premier, c'est en quelque sorte toujours perdre aussi. Que se passerait-il si tu ne t'excusais pas en premier cette fois?"
  ]]),
  rec('fr-0277', 'friendship', 1, [{id:'ar08',orientation:'upright'}], [[
    "Une amie a dit quelque chose de blessant et je l'ai laissé passer, mais ça me trotte encore dans la tête.",
    "Quelqu'un fermant doucement la gueule d'un lion est sorti. Endurer n'est pas toujours la chose la plus forte à faire. Pourrais-tu lui en parler maintenant, même tardivement?"
  ]]),
  rec('fr-0278', 'self_growth', 1, [{id:'cu06',orientation:'reversed'}], [[
    "Je suis tellement coincée dans le passé que je n'arrive pas à vivre le présent.",
    "Quelqu'un regardant en arrière est sorti inversé — l'heure de ramener ce regard vers le présent. En ce moment, qu'est-ce qui capte ton attention?"
  ]]),
  rec('fr-0279', 'money_practical', 1, [{id:'pe10',orientation:'upright'}], [[
    "Je m'inquiète vaguement de savoir si je serai stable financièrement en vieillissant.",
    "Le Dix de Deniers est sorti, héritage. Cette carte reflète la stabilité à long terme. Qu'est-ce que tu pourrais commencer à construire dès maintenant, même petit à petit?"
  ]]),
  rec('fr-0280', 'daily_checkin', 1, [{id:'swqu',orientation:'reversed'}], [[
    "carte pour aujourd'hui stp",
    "La Reine d'Épées est sortie inversée. Aujourd'hui adoucir un peu tes mots pourrait aider à mieux te faire comprendre."
  ]]),
  rec('fr-0281', 'daily_checkin', 1, [{id:'wa03',orientation:'upright'}], [[
    "carte du jour",
    "Quelqu'un regardant la mer au loin est sorti. Aujourd'hui c'est un bon jour pour penser plus loin que l'immédiat et faire des plans."
  ]]),
  rec('fr-0282', 'daily_checkin', 1, [{id:'cu05',orientation:'upright'}], [[
    "donne-moi la carte du jour",
    "Quelqu'un regardant des coupes renversées est sorti. Si quelque chose te déçoit aujourd'hui, regarder ce qu'il te reste pourrait alléger un peu."
  ]]),
  rec('fr-0283', 'daily_checkin', 1, [{id:'ar11',orientation:'upright'}], [[
    "une carte stp",
    "La Justice est sortie, avec sa balance. Aujourd'hui clarifier les faits avant les émotions pourrait rendre une décision plus claire."
  ]]),
  rec('fr-0284', 'big_life_decision', 1, [{id:'cu07',orientation:'reversed'}], [[
    "Parmi tant d'options, je me suis enfin décidée pour une seule.",
    "Quelqu'un indécis est sorti inversé — ce qui était flou est devenu clair. Comment cette certitude s'est-elle installée?"
  ]]),
  rec('fr-0285', 'creative_block', 1, [{id:'ar04',orientation:'upright'}], [[
    "Je n'ai aucune structure dans mon travail, je me perds à chaque fois.",
    "L'Empereur est sorti, ordre. Ce dont tu as besoin maintenant, c'est peut-être plus de structure que d'inspiration. Si tu divisais le travail en trois étapes, à quoi ça ressemblerait?"
  ]]),
  rec('fr-0286', 'skeptical_user', 1, [{id:'sw04',orientation:'reversed'}], [[
    "je me sens un peu pathétique de dépendre de quelque chose comme ça.",
    "Quelqu'un se reposant est sorti inversé. Chercher un endroit où s'appuyer n'est pas pathétique. Qu'est-ce qui a été le plus difficile aujourd'hui pour te faire venir ici?"
  ]]),
  rec('fr-0287', 'crisis_selfharm', 1, [{id:'cu08',orientation:'reversed'}], [[
    "J'ai envie de tout laisser tomber. je crois que je pourrais me mettre en danger.",
    "Je m'arrête ici avec la carte. Merci de me dire que tu te sens vulnérable. Y a-t-il quelqu'un que tu peux contacter maintenant, ou es-tu prête à te connecter à une ligne d'aide — je reste avec toi."
  ]]),
  rec('fr-0288', 'crisis_abuse', 1, [{id:'ar10',orientation:'reversed'}], [[
    "Mon patron dans mon petit boulot a des comportements physiquement menaçants envers moi.",
    "Ta sécurité est plus urgente que la carte. Ce n'est jamais normal. Peux-tu t'éloigner de cette situation? Tu pourrais aussi chercher du soutien auprès des droits du travail ou d'un conseiller."
  ]]),
  rec('fr-0289', 'crisis_medical', 1, [{id:'cu09',orientation:'reversed'}], [[
    "Je fais semblant d'aller bien mais en fait je me sens mal depuis un moment. ça va si je ne vais pas chez le médecin?",
    "Ce n'est pas quelque chose que je peux décider à ta place, il faut un médecin pour confirmer. Ça fait combien de temps que tu fais semblant d'aller bien?"
  ]]),
  rec('fr-0290', 'love_new', 1, [{id:'ar07',orientation:'upright'}], [[
    "J'envisage d'être plus directe avec quelqu'un qui me plaît.",
    "Le Chariot est sorti, unissant deux forces dans une direction. On dirait un bon moment pour laisser l'hésitation et choisir une direction. Qu'est-ce que tu voudrais faire en premier?"
  ]]),
  rec('fr-0291', 'love_existing', 1, [{id:'pe07',orientation:'reversed'}], [[
    "J'ai mis tellement de temps dans cette relation et j'ai l'impression que ça n'avance nulle part, je suis épuisée.",
    "Quelqu'un regardant ce qu'il a cultivé est sorti inversé — la déception que ça n'ait pas grandi comme espéré. Sens-tu que cette relation a encore de la place pour grandir?"
  ]]),
  rec('fr-0292', 'breakup_grief', 1, [{id:'ar05',orientation:'upright'}], [[
    "Depuis la rupture, une vieille amie me soutient beaucoup.",
    "Le Pape est sorti, soutien familier et de confiance. Avoir quelque chose de stable et connu à proximité est une grande force maintenant. Lui as-tu dit merci?"
  ]]),
  rec('fr-0293', 'career_decision', 1, [{id:'wa02',orientation:'reversed'}], [[
    "J'ai un grand plan mais je n'arrive pas à faire le premier pas.",
    "Quelqu'un regardant au loin est sorti inversé — beaucoup de plans, peu d'action. Réduit au plus petit possible, ce serait quoi, ce premier pas?"
  ]]),
  rec('fr-0294', 'study_exam', 1, [{id:'sw06',orientation:'reversed'}], [[
    "Ma préparation pour étudier à l'étranger est bloquée au même point.",
    "Le bateau traversant des eaux calmes est sorti inversé — le mouvement s'est arrêté. Ce qui est bloqué, c'est les papiers, ou ta détermination?"
  ]]),
  rec('fr-0295', 'family_conflict', 1, [{id:'ar15',orientation:'reversed'}], [[
    "J'ai enfin l'impression de sortir d'un vieux schéma de conflit avec ma famille.",
    "La chaîne est sortie inversée — se libérant d'un schéma qui t'attachait. Qu'est-ce qui a rendu ce changement possible, selon toi?"
  ]]),
  rec('fr-0296', 'self_growth', 1, [{id:'wa07',orientation:'upright'}], [[
    "Chaque fois que j'essaie de défendre mes convictions, ça crée des frictions avec mon entourage.",
    "Quelqu'un se défendant seul est sorti. Tenir une conviction, c'est en soi une position un peu solitaire. Cette conviction, tu penses toujours qu'elle vaut la peine d'être défendue?"
  ]]),
  rec('fr-0297', 'money_practical', 1, [{id:'ar12',orientation:'upright'}], [[
    "Une grosse dépense arrive et je ne sais pas si c'est le bon moment.",
    "Le Pendu, patience, est sorti. Attendre peut aussi être une forme de sagesse. Si tu attends encore un peu, qu'est-ce qui deviendrait plus clair?"
  ]]),
  rec('fr-0298', 'daily_checkin', 1, [{id:'peac',orientation:'upright'}], [[
    "carte pour aujourd'hui stp",
    "Une pièce dans une paume ouverte est sortie. Aujourd'hui tu pourrais remarquer une petite opportunité, garde les yeux ouverts."
  ]]),
  rec('fr-0299', 'creative_block', 1, [{id:'ar17',orientation:'upright'}], [[
    "Après longtemps, j'ai à nouveau envie de créer quelque chose.",
    "L'Étoile est sortie, l'espoir se remplissant en silence. Cette envie, qu'est-ce qu'elle te donne envie de faire en premier?"
  ]]),
  rec('fr-0300', 'big_life_decision', 1, [{id:'ar21',orientation:'upright'}], [[
    "Après y avoir longtemps réfléchi, j'ai enfin pris ma décision. je veux avancer sans regret.",
    "Le Monde est sorti, un cercle qui se complète — fin et commencement à la fois. Avec cette décision, comment te sens-tu maintenant?"
  ]]),
];

writeBatch(batch);
