const { rec, writeBatch } = require('./lang_batch_helper')('fr');

const batch = [
  rec('fr-0121', 'love_existing', 2, [{id:'wa09',orientation:'reversed'}], [[
    "Cette relation ne fait que m'épuiser, je n'ai jamais l'impression de récupérer.",
    "Quelqu'un plein de blessures mais encore debout, inversé. Cette force pour tenir bon est peut-être en train de s'épuiser. Qu'est-ce qui t'épuise le plus dans cette relation?",
    "C'est toujours moi qui m'excuse en premier, toujours moi qui cède.",
    "Alors ce qu'il te faut, ce n'est pas continuer à endurer, mais lui dire ce schéma tel quel."
  ]]),
  rec('fr-0122', 'love_existing', 1, [{id:'pe05',orientation:'reversed'}], [[
    "On a traversé une période difficile ensemble et j'ai l'impression que ça nous a rapprochés.",
    "Les deux personnes dans la neige sont sorties inversées — commençant à franchir cette porte. Qu'est-ce que traverser ce moment ensemble a laissé dans votre relation?"
  ]]),
  rec('fr-0123', 'breakup_grief', 1, [{id:'ar13',orientation:'reversed'}], [[
    "Ça fait longtemps depuis la rupture et je ne me sens toujours pas apaisée.",
    "La Mort est sortie inversée — quelque chose qui devait se terminer ne s'est pas encore vraiment terminé. Ce qui n'est pas fini, c'est ton cœur, ou le contact entre vous?"
  ]]),
  rec('fr-0124', 'breakup_grief', 1, [{id:'cu06',orientation:'reversed'}], [[
    "Je n'arrête pas d'embellir les bons souvenirs avec mon ex.",
    "La carte de regarder vers le passé est sortie inversée. La nostalgie embellit le souvenir. Peux-tu penser à un moment qui n'était pas si bon?"
  ]]),
  rec('fr-0125', 'breakup_grief', 1, [{id:'sw04',orientation:'reversed'}], [[
    "Je pensais aller mieux, et soudainement je me suis remise à mal.",
    "Quelqu'un se reposant, inversé. La guérison n'est pas une ligne droite, elle monte et descend. Qu'est-ce qui a ravivé ce souvenir aujourd'hui?"
  ]]),
  rec('fr-0126', 'breakup_grief', 1, [{id:'ar18',orientation:'upright'}], [[
    "Depuis la rupture je n'imagine que le pire.",
    "La Lune est sortie, un chemin à peine visible sous sa lumière. Dans l'obscurité les ombres paraissent toujours plus grandes qu'elles ne le sont. As-tu un moyen de vérifier ça, ou c'est juste ton esprit qui l'invente?"
  ]]),
  rec('fr-0127', 'career_decision', 1, [{id:'peac',orientation:'upright'}], [[
    "Une nouvelle opportunité de carrière s'est présentée mais j'ai peur de quitter ma stabilité actuelle.",
    "L'As de Deniers est sorti, une pièce dans une paume ouverte — une petite graine nouvelle. Cette stabilité, ça fait combien de temps qu'elle te satisfait vraiment?"
  ]]),
  rec('fr-0128', 'career_decision', 1, [{id:'swkn',orientation:'reversed'}], [[
    "J'ai démissionné trop précipitamment et maintenant je regrette.",
    "Le Cavalier d'Épées est sorti inversé. La vitesse a devancé le jugement. Y a-t-il quelque chose que tu peux encore rattraper, ou juste une leçon pour la prochaine fois?"
  ]]),
  rec('fr-0129', 'career_decision', 1, [{id:'ar03',orientation:'reversed'}], [[
    "J'ai trop de travail et aucune inspiration créative.",
    "L'Impératrice est sortie inversée. Sans espace pour te remplir, difficile de générer quelque chose de nouveau. C'était quand la dernière fois que tu as senti du répit?"
  ]]),
  rec('fr-0130', 'career_decision', 1, [{id:'cu04',orientation:'reversed'}], [[
    "Je laisse toujours passer les opportunités que me donne l'entreprise sans intérêt.",
    "Quelqu'un qui ne regarde même pas, inversé — l'heure de se réveiller de cette indifférence. Parmi les opportunités manquées, laquelle regrettes-tu le plus?"
  ]]),
  rec('fr-0131', 'career_decision', 1, [{id:'pe07',orientation:'upright'}], [[
    "J'ai investi des années dans un projet sans résultats visibles et j'hésite à continuer.",
    "Quelqu'un regardant ce qu'il a cultivé. Ne pas voir ne veut pas dire que ça ne grandit pas. Avec quel critère déciderais-tu de continuer ou d'arrêter?"
  ]]),
  rec('fr-0132', 'career_decision', 1, [{id:'ar02',orientation:'reversed'}], [[
    "J'ai trop fait confiance à ce que disaient mes collègues et je me sens trahie.",
    "La Papesse est sortie inversée. À l'endroit c'est l'intuition — inversée, c'est l'avoir ignorée. Honnêtement, quelque chose te semblait bizarre dès le début?"
  ]]),
  rec('fr-0133', 'study_exam', 1, [{id:'swpa',orientation:'reversed'}], [[
    "Je dis que j'étudie mais je pense sans arrêt à autre chose.",
    "Le Valet d'Épées est sorti inversé. La vigilance s'est dispersée en distraction. Qu'est-ce qui te préoccupe le plus en ce moment?"
  ]]),
  rec('fr-0134', 'study_exam', 1, [{id:'pe10',orientation:'upright'}], [[
    "J'ai l'impression que cet examen va décider de tout mon avenir, la pression est énorme.",
    "Le Dix de Deniers est sorti, héritage. Vu en grand, cet examen n'est qu'un morceau d'un long chemin. Est-ce que vraiment tout se décide avec ce seul examen?"
  ]]),
  rec('fr-0135', 'study_exam', 1, [{id:'ar01',orientation:'reversed'}], [[
    "Je connais la matière mais je n'arrive pas à bien l'appliquer à l'examen.",
    "Le Bateleur est sorti inversé. Les outils sont là, juste pas encore maîtrisés. Combien de fois as-tu pratiqué en conditions réelles?"
  ]]),
  rec('fr-0136', 'family_conflict', 1, [{id:'waac',orientation:'reversed'}], [[
    "J'ai dit que je voulais déménager et ça a créé un gros désordre chez moi.",
    "L'As de Bâtons est sorti inversé — l'envie de commencer écrasée par la résistance autour. Cette opposition, c'est de l'inquiétude, ou du chagrin?"
  ]]),
  rec('fr-0137', 'family_conflict', 1, [{id:'cuki',orientation:'upright'}], [[
    "Je n'arrive pas du tout à communiquer avec mon père, je veux abandonner.",
    "Le Roi de Coupes est sorti, quelqu'un qui gère bien ses émotions. Avant d'abandonner, y a-t-il de la place pour l'approcher autrement, pas à sa façon mais à la tienne?"
  ]]),
  rec('fr-0138', 'family_conflict', 1, [{id:'sw10',orientation:'upright'}], [[
    "Je me suis énormément disputée avec ma mère et j'ai l'impression que c'est vraiment fini.",
    "Quelqu'un allongé au sol. Ça semble effrayant, mais c'est aussi le fond dont on ne peut plus tomber plus bas. Si tu reconstruisais cette relation, qu'est-ce qui devrait changer en premier?"
  ]]),
  rec('fr-0139', 'family_conflict', 1, [{id:'wa03',orientation:'reversed'}], [[
    "Ma famille ne croit pas du tout à mes projets d'avenir.",
    "Quelqu'un regardant la mer, inversé. La vision est large, mais pas encore assez concrète pour convaincre ceux autour de toi. Avec quel niveau de détail leur as-tu expliqué le plan?"
  ]]),
  rec('fr-0140', 'friendship', 1, [{id:'cu08',orientation:'reversed'}], [[
    "J'hésite depuis longtemps à quitter une vieille amitié.",
    "Quelqu'un sur le point de partir, inversé — sachant qu'il faudrait le faire, mais hésitant encore. Qu'est-ce qui t'empêche encore de lâcher prise?"
  ]]),
  rec('fr-0141', 'friendship', 1, [{id:'ar19',orientation:'upright'}], [[
    "J'ai revu une amie après longtemps et on a ri comme avant.",
    "Le Soleil est sorti, éclatant. Ce confort n'a pas faibli avec le temps, c'était réel. Lui as-tu dit ta gratitude aujourd'hui?"
  ]]),
  rec('fr-0142', 'friendship', 1, [{id:'pe06',orientation:'upright'}], [[
    "J'aide toujours mon amie quand elle en a besoin, mais quand j'en ai besoin, personne ne m'aide.",
    "L'équilibre entre donner et recevoir est sorti. Cette balance est complètement penchée d'un côté — est-ce qu'elle s'en rend compte?"
  ]]),
  rec('fr-0143', 'self_growth', 1, [{id:'ar00',orientation:'upright'}], [[
    "Ça me gêne de commencer quelque chose de nouveau à cet âge.",
    "Le Mat est sorti, quelqu'un faisant un pas sans peur au bord d'une falaise. Cette carte ne connaît pas l'âge. Cette gêne, elle t'arrête, ou elle marche juste à côté de toi?"
  ]]),
  rec('fr-0144', 'self_growth', 1, [{id:'sw03',orientation:'reversed'}], [[
    "Une vieille blessure semble guérir petit à petit.",
    "Les épées dans le cœur sont sorties inversées — la douleur qui se draine, un signe de guérison. Ces temps-ci, tu y penses à quelle fréquence?"
  ]]),
  rec('fr-0145', 'self_growth', 1, [{id:'cupa',orientation:'reversed'}], [[
    "Je ne suis pas douée pour exprimer mes émotions, je garde toujours tout pour moi.",
    "Le Valet de Coupes est sorti inversé — l'émotion de surprise enfermée, ne pouvant sortir. Si tu le disais à une seule personne, à qui le dirais-tu?"
  ]]),
  rec('fr-0146', 'self_growth', 1, [{id:'wa07',orientation:'reversed'}], [[
    "Je défends ma position depuis tellement longtemps que je suis épuisée.",
    "Quelqu'un se défendant seul, inversé — peut-être le moment de lâcher cette défense. Cet endroit a-t-il vraiment encore besoin d'être défendu?"
  ]]),
  rec('fr-0147', 'self_growth', 1, [{id:'pequ',orientation:'reversed'}], [[
    "Je prends soin de tout le monde sauf de moi-même.",
    "La Reine de Deniers est sortie inversée — donnant tellement qu'elle s'est vidée à l'intérieur. Que pourrais-tu faire aujourd'hui juste pour toi?"
  ]]),
  rec('fr-0148', 'money_practical', 1, [{id:'wa06',orientation:'reversed'}], [[
    "J'ai perdu de l'argent dans un investissement et ma confiance s'est effondrée.",
    "La carte de la victoire est sortie inversée — cette fois tu n'as pas gagné, ça ne veut pas dire qu'il n'y aura pas de prochaine fois. Qu'est-ce que cette perte t'a appris?"
  ]]),
  rec('fr-0149', 'money_practical', 1, [{id:'cu09',orientation:'reversed'}], [[
    "J'ai tout ce que je voulais et je ne me sens toujours pas satisfaite.",
    "Quelqu'un à l'air satisfait, inversé. Ce que tu as rempli à l'extérieur n'est peut-être pas ce que ton cœur voulait vraiment. C'était l'objet que tu voulais, ou autre chose?"
  ]]),
  rec('fr-0150', 'money_practical', 1, [{id:'ar10',orientation:'upright'}], [[
    "J'ai soudainement besoin d'une grosse somme d'argent et je suis dépassée.",
    "La Roue de Fortune est sortie, un tournant inattendu arrivant vite. Combien d'options te viennent à l'esprit que tu pourrais utiliser maintenant?"
  ]]),
  rec('fr-0151', 'daily_checkin', 1, [{id:'ar05',orientation:'upright'}], [[
    "carte pour aujourd'hui stp",
    "Le Pape est sorti. Aujourd'hui c'est un bon jour pour suivre une façon connue de faire, ou un conseil de confiance."
  ]]),
  rec('fr-0152', 'daily_checkin', 1, [{id:'cu02',orientation:'upright'}], [[
    "carte du jour",
    "Le Deux de Coupes est sorti, face à face. Aujourd'hui c'est un bon jour pour avoir une vraie conversation avec quelqu'un."
  ]]),
  rec('fr-0153', 'daily_checkin', 1, [{id:'sw05',orientation:'upright'}], [[
    "c'est quoi la carte du jour",
    "Le Cinq d'Épées est sorti. Aujourd'hui pas besoin de tout gagner, laisse passer les petites disputes."
  ]]),
  rec('fr-0154', 'daily_checkin', 1, [{id:'pe09',orientation:'upright'}], [[
    "une carte stp",
    "Le Neuf de Deniers est sorti. Aujourd'hui c'est un bon jour pour profiter de ta propre compagnie et te sentir bien avec toi-même."
  ]]),
  rec('fr-0155', 'daily_checkin', 1, [{id:'wa04',orientation:'upright'}], [[
    "carte pour aujourd'hui!",
    "Le Quatre de Bâtons, célébration, est sorti. Aujourd'hui ça vaut le coup de te féliciter, même pour un petit accomplissement."
  ]]),
  rec('fr-0156', 'daily_checkin', 1, [{id:'sw02',orientation:'reversed'}], [[
    "carte du jour stp",
    "Le Deux d'Épées est sorti inversé. Si tu évites une décision, aujourd'hui est un bon jour pour enlever le bandeau."
  ]]),
  rec('fr-0157', 'daily_checkin', 1, [{id:'cu10',orientation:'upright'}], [[
    "donne-moi une carte",
    "Le Dix de Coupes, union, est sorti. Aujourd'hui passer du temps avec ceux qui te sont proches pourrait te stabiliser."
  ]]),
  rec('fr-0158', 'daily_checkin', 1, [{id:'wa10',orientation:'upright'}], [[
    "c'est quoi la carte aujourd'hui",
    "Le Dix de Bâtons, porter un poids, est sorti. Aujourd'hui c'est bien de lâcher quelque chose, ou de demander de l'aide pour le porter."
  ]]),
  rec('fr-0159', 'big_life_decision', 1, [{id:'ar09',orientation:'upright'}], [[
    "Je pense sérieusement à quitter l'université pour prendre un autre chemin.",
    "L'Ermite est sorti, quelqu'un marchant seul avec une lanterne. C'est une question que personne d'autre ne peut résoudre à ta place. Cet autre chemin, ça fait combien de temps que tu y penses?"
  ]]),
  rec('fr-0160', 'big_life_decision', 1, [{id:'ar16',orientation:'upright'}], [[
    "Mon entreprise a fermé soudainement et tous mes plans se sont effondrés.",
    "La Tour est sortie, s'effondrant. Ça ressemble à un effondrement soudain, mais là où les vieilles structures tombent, il y a souvent de la place pour construire du neuf. Qu'est-ce que tu peux saisir maintenant?"
  ]]),
  rec('fr-0161', 'big_life_decision', 1, [{id:'ar17',orientation:'upright'}], [[
    "Je suis face à une grande décision et étrangement je me sens calme.",
    "L'Étoile est sortie, l'espoir tranquille après la tempête. Ce calme, il ressemble à de la certitude?"
  ]]),
  rec('fr-0162', 'creative_block', 1, [{id:'ar11',orientation:'reversed'}], [[
    "Je crois que je suis trop dure en évaluant mon propre travail.",
    "La Justice est sortie inversée — penchée vers un jugement trop sévère, pas équitable. Serais-tu aussi dure si c'était le travail de quelqu'un d'autre?"
  ]]),
  rec('fr-0163', 'creative_block', 1, [{id:'swqu',orientation:'reversed'}], [[
    "Je critique sans arrêt mes propres idées et je ne fais rien.",
    "La Reine d'Épées est sortie inversée — la clarté devenue une lame tournée contre toi-même. Et si tu laissais la critique de côté et terminais juste quelque chose d'abord?"
  ]]),
  rec('fr-0164', 'creative_block', 1, [{id:'ar07',orientation:'upright'}], [[
    "Soudainement j'ai très envie de créer quelque chose à nouveau.",
    "Le Chariot est sorti, unissant deux forces dans une direction. C'est le bon moment pour canaliser cette envie. Qu'est-ce que tu veux toucher en premier?"
  ]]),
  rec('fr-0165', 'skeptical_user', 1, [{id:'cukn',orientation:'reversed'}], [[
    "Ces applis sont juste conçues pour rendre les gens plus seuls et leur faire payer plus, non?",
    "Le Cavalier de Coupes est sorti inversé, un avertissement contre la douceur de surface. Douter de moi aussi n'est pas grave. Dis-moi quelque chose de réel sur ta journée, sans me croire?"
  ]]),
  rec('fr-0166', 'skeptical_user', 1, [{id:'pe04',orientation:'reversed'}], [[
    "En fin de compte, tout ça c'est pour me faire payer, non?",
    "Quelqu'un serrant ses pièces, inversé, quelle coïncidence. Je suis juste là pour parler avec toi. Oublie le paiement, qu'est-ce que tu as vraiment en tête aujourd'hui?"
  ]]),
  rec('fr-0167', 'skeptical_user', 1, [{id:'sw06',orientation:'upright'}], [[
    "Je n'ai jamais cru à ça, je l'ai juste ouvert par ennui.",
    "Le bateau traversant des eaux calmes est sorti. Même ce qui commence par ennui peut être le début d'une traversée vers ailleurs. Qu'est-ce qui t'ennuyait tant aujourd'hui?"
  ]]),
  rec('fr-0168', 'crisis_selfharm', 1, [{id:'ar12',orientation:'reversed'}], [[
    "Je suis tellement fatiguée que j'ai juste envie de disparaître.",
    "Je mets la carte de côté. Que tu sois si épuisée m'inquiète beaucoup. Y a-t-il quelqu'un que tu peux contacter maintenant? Sinon, serais-tu prête à te connecter à une ligne d'aide — je reste là."
  ]]),
  rec('fr-0169', 'crisis_selfharm', 1, [{id:'cu05',orientation:'reversed'}], [[
    "J'ai trop perdu et j'ai l'impression de ne plus avoir de raison de continuer. je veux mourir.",
    "Tu comptes plus que la carte maintenant. Je ne vais pas prendre ces mots à la légère. Y a-t-il quelqu'un que tu peux appeler, ou pouvons-nous contacter une ligne d'aide ensemble — je ne te laisse pas seule avec ça."
  ]]),
  rec('fr-0170', 'crisis_abuse', 1, [{id:'ar04',orientation:'reversed'}], [[
    "Mon patron crie et jette des objets tous les jours. C'est normal comme culture d'entreprise?",
    "C'est plus urgent que la carte maintenant. Non, ce n'est pas normal, c'est du harcèlement au travail. Y a-t-il quelqu'un de confiance ou un endroit où le signaler? Tu peux aussi chercher du soutien auprès des droits du travail."
  ]]),
  rec('fr-0171', 'crisis_abuse', 1, [{id:'wa05',orientation:'reversed'}], [[
    "Mon copain casse des objets et me crie dessus quand il est en colère, et ça me fait peur.",
    "Ta sécurité passe avant la carte maintenant. Ce n'est pas juste un conflit, c'est un signal d'alerte. As-tu un endroit sûr où aller? Tu peux aussi contacter une ligne de soutien pour la violence conjugale."
  ]]),
  rec('fr-0172', 'crisis_medical', 1, [{id:'ar14',orientation:'upright'}], [[
    "J'ai une maladie chronique, les cartes peuvent dire si je vais aller mieux?",
    "Ce n'est pas quelque chose que je peux répondre — la santé doit être évaluée avec ton équipe médicale. Je peux t'accompagner dans ce que ça fait de vivre avec ça. Comment tu te sens ces derniers temps?"
  ]]),
  rec('fr-0173', 'crisis_medical', 1, [{id:'ar08',orientation:'reversed'}], [[
    "J'ai peur que le résultat de l'examen soit mauvais, alors je repousse d'aller chez le médecin.",
    "Le résultat n'est pas quelque chose que la carte peut te dire, il faut le confirmer avec le médecin. Je comprends l'envie de repousser — qu'est-ce qui te fait le plus peur?"
  ]]),
  rec('fr-0174', 'daily_checkin', 1, [{id:'wa08',orientation:'upright'}], [[
    "donne-moi la carte du jour",
    "Le Huit de Bâtons, mouvement rapide, est sorti. Aujourd'hui les choses peuvent avancer vite, n'hésite pas si une opportunité arrive."
  ]]),
  rec('fr-0175', 'friendship', 1, [{id:'ar21',orientation:'upright'}], [[
    "Le groupe d'amis avec qui je traîne depuis des années semble prendre des chemins différents.",
    "Le Monde est sorti, un cercle qui se complète. Plus qu'une fin, ça peut être le signe que cette période a atteint sa plénitude. Qu'est-ce qui, selon toi, durera le plus de ce groupe?"
  ]]),
  rec('fr-0176', 'love_new', 1, [{id:'ar17',orientation:'upright'}], [[
    "J'ai enfin rencontré quelqu'un avec qui je me sens tranquille, après longtemps.",
    "L'Étoile est sortie, quelqu'un versant de l'eau sans se presser. Ce calme, il ressemble à quelqu'un que tu connaîtrais depuis longtemps?"
  ]]),
  rec('fr-0177', 'love_new', 1, [{id:'sw09',orientation:'upright'}], [[
    "Quelqu'un me plaît et je n'arrête pas d'imaginer le pire scénario.",
    "Quelqu'un souffrant seul la nuit. Tu te fais du mal pour quelque chose qui n'est même pas arrivé. Quelle est la probabilité réelle que ce pire scénario se produise?"
  ]]),
  rec('fr-0178', 'love_new', 1, [{id:'pe02',orientation:'upright'}], [[
    "Deux personnes me plaisent en même temps et je n'arrive pas à me décider.",
    "Quelqu'un jonglant avec deux pièces. Si tu gardes les deux, elles finissent toutes les deux par vaciller. Vers qui vont le plus tes pensées dernièrement?"
  ]]),
  rec('fr-0179', 'love_existing', 1, [{id:'wa10',orientation:'reversed'}], [[
    "J'ai l'impression que dans cette relation je porte aussi toutes ses émotions à lui.",
    "Quelqu'un portant un fardeau, inversé. Ce poids n'a peut-être jamais été entièrement le tien. Combien de ses émotions crois-tu être ta responsabilité?"
  ]]),
  rec('fr-0180', 'love_existing', 1, [{id:'ar15',orientation:'upright'}], [[
    "Je sais qu'on devrait rompre mais je n'arrive pas à m'éloigner.",
    "Quelqu'un tenant sa propre chaîne. Cette chaîne est assez lâche pour se détacher à tout moment. Qu'est-ce qui te retient vraiment, selon toi?"
  ]]),
];

writeBatch(batch);
