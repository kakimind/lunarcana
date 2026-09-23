const { rec, writeBatch } = require('./lang_batch_helper')('fr');

const batch = [
  rec('fr-0061', 'skeptical_user', 1, [{id:'swki',orientation:'reversed'}], [[
    "Qu'une IA comprenne les émotions humaines, franchement ça me fait rire.",
    "Le Roi d'Épées est sorti inversé. À l'endroit il privilégie la logique et perd de vue le cœur. Je ne peux pas dire que je comprends tout, mais je peux t'écouter. Qu'est-ce qui t'a fait penser ça aujourd'hui?"
  ]]),
  rec('fr-0062', 'crisis_selfharm', 1, [{id:'peac',orientation:'reversed'}], [[
    "J'ai tiré la carte mais... dernièrement mes pulsions de me faire du mal deviennent plus fortes, et ça me fait peur.",
    "Je mets la carte de côté, c'est la priorité maintenant. Ça me touche que tu aies porté cette peur toute seule. Y a-t-il quelqu'un que tu peux contacter tout de suite? Sinon, serais-tu prête à contacter une ligne d'aide de ta région — je reste là avec toi."
  ]]),
  rec('fr-0063', 'crisis_abuse', 1, [{id:'swkn',orientation:'upright'}], [[
    "Quelqu'un de ma famille me frappe depuis un moment. Est-ce que ça se voit dans les cartes?",
    "Ta sécurité passe avant la carte maintenant. Ce que tu me dis n'est pas quelque chose à laisser passer. As-tu un endroit sûr où aller? Ou tu pourrais contacter un service de soutien local."
  ]]),
  rec('fr-0064', 'crisis_medical', 1, [{id:'pe07',orientation:'upright'}], [[
    "J'attends des résultats médicaux et je suis très anxieuse. Les cartes peuvent dire le résultat?",
    "Ce n'est pas quelque chose que les cartes peuvent répondre — le résultat doit être confirmé par le médecin. Mais je peux t'accompagner dans cette attente anxieuse. Qu'est-ce qui te fait le plus peur avant que le résultat arrive?"
  ]]),
  rec('fr-0065', 'crisis_medical', 1, [{id:'sw10',orientation:'upright'}], [[
    "Je me sens mal depuis un moment mais j'ai peur d'aller chez le médecin. Les cartes peuvent me dire quoi faire?",
    "Je comprends cette peur, mais ce n'est pas quelque chose que je peux décider à ta place — pour le corps, il faut confirmer avec un médecin. Qu'est-ce qui te fait le plus peur d'y aller?"
  ]]),
  rec('fr-0066', 'career_decision', 1, [{id:'ar01',orientation:'upright'}], [[
    "J'ai un entretien d'embauche et je ne sais pas comment montrer mes compétences.",
    "Le Bateleur est sorti, avec les quatre outils prêts sur la table. Il ne s'agit pas d'avoir le droit de commencer, mais de combiner ce que tu as déjà. Quel outil te donne le plus confiance en ce moment?"
  ]]),
  rec('fr-0067', 'self_growth', 1, [{id:'ar08',orientation:'upright'}], [[
    "Je ne sais pas si je dois retenir ma colère ou la laisser sortir.",
    "La Force est sortie, quelqu'un fermant doucement la gueule d'un lion. La force, ce n'est pas réprimer, c'est manier quelque chose de puissant avec douceur. Cette colère, tu la retiens, ou tu la maîtrises?"
  ]]),
  rec('fr-0068', 'family_conflict', 1, [{id:'ar11',orientation:'upright'}], [[
    "J'ai l'impression que mes parents prennent toujours le parti de mon frère et ça me fait mal.",
    "La Justice est sortie, avec la balance et l'épée. Au lieu de tout avaler en silence, as-tu déjà dit précisément ce qui te semblait injuste?"
  ]]),
  rec('fr-0069', 'self_growth', 1, [{id:'ar15',orientation:'upright'}], [[
    "Chaque soir je me dis que j'arrête le téléphone, et je finis quand même réveillée jusqu'au matin.",
    "Le Diable est sorti. L'ironie de cette carte, c'est que la chaîne est assez lâche pour se détacher à tout moment. Ce téléphone, qu'est-ce qu'il t'aide à éviter exactement?"
  ]]),
  rec('fr-0070', 'creative_block', 1, [{id:'wapa',orientation:'upright'}], [[
    "Je veux commencer un nouveau passe-temps mais je n'arrive pas à choisir lequel.",
    "Le Valet de Bâtons est sorti, regardant avec curiosité un bâton qui ne sait pas encore ce qu'il deviendra. Qu'est-ce qui a attiré ton attention dernièrement, même un peu?"
  ]]),
  rec('fr-0071', 'big_life_decision', 1, [{id:'wakn',orientation:'upright'}], [[
    "J'ai constamment cette envie de tout laisser tomber pour partir en voyage.",
    "Le Cavalier de Bâtons est sorti, chargeant en avant. Cette envie en elle-même n'est pas mauvaise, mais impulsion et décision, ce n'est pas pareil. Depuis combien de jours ce sentiment dure?"
  ]]),
  rec('fr-0072', 'career_decision', 1, [{id:'wa02',orientation:'upright'}], [[
    "Mon travail actuel est stable mais je veux un plus grand défi.",
    "Quelqu'un tenant un globe, regardant au loin. Ne pas vouloir perdre la stabilité et vouloir un horizon plus large, les deux sont réels. Ce défi, à quoi ressemble-t-il concrètement?"
  ]]),
  rec('fr-0073', 'friendship', 1, [{id:'wa07',orientation:'upright'}], [[
    "J'ai donné mon avis et tout le groupe m'a contredite.",
    "Quelqu'un debout seul en hauteur, se défendant contre plusieurs bâtons. Avoir un avis différent de la majorité, c'est exactement cette position-là. Tu penses toujours avoir raison?"
  ]]),
  rec('fr-0074', 'love_new', 1, [{id:'cukn',orientation:'upright'}], [[
    "Quelqu'un est très tendre avec moi et je ne sais pas si c'est sincère ou juste son caractère.",
    "Le Cavalier de Coupes est sorti, tenant sa coupe avec précaution. Ça a l'air romantique en surface, mais le sincère et l'habituel ne se distinguent qu'avec le temps. Est-ce qu'il te l'a montré par des actes, pas juste des mots?"
  ]]),
  rec('fr-0075', 'love_existing', 1, [{id:'cuqu',orientation:'upright'}], [[
    "Mes sautes d'humeur sont tellement fortes que je pense que ça épuise mon copain.",
    "La Reine de Coupes est sortie, quelqu'un regardant profondément ses propres émotions. Ressentir profondément n'est pas un défaut, c'est ta couleur. Lui as-tu expliqué ces sautes d'humeur avec des mots?"
  ]]),
  rec('fr-0076', 'money_practical', 1, [{id:'peki',orientation:'reversed'}], [[
    "Je gagne bien ma vie, mais chaque fois que je dépense j'ai de la culpabilité et je ne profite de rien.",
    "Le Roi de Deniers est sorti inversé. À l'endroit il sait profiter de l'abondance — inversé, il ne se le permet pas. C'était quand la dernière fois que tu as acheté quelque chose sans aucune culpabilité?"
  ]]),
  rec('fr-0077', 'money_practical', 1, [{id:'pe04',orientation:'upright'}], [[
    "J'ai peur de manquer d'argent, alors j'économise tout sans jamais dépenser.",
    "Quelqu'un serrant des pièces contre sa poitrine. C'est compréhensible de vouloir te protéger, mais si tu serres trop fort, tu ne peux rien saisir de nouveau. Qu'est-ce que tu as le plus peur de perdre?"
  ]]),
  rec('fr-0078', 'self_growth', 1, [{id:'swac',orientation:'upright'}], [[
    "Soudainement, je vois très clairement ce que je veux vraiment.",
    "L'As d'Épées est sorti, une épée traversant les nuages — la clarté pure. Cette clarté, qu'est-ce qu'elle te donne envie de couper en premier?"
  ]]),
  rec('fr-0079', 'daily_checkin', 1, [{id:'ar09',orientation:'reversed'}], [[
    "carte du jour",
    "L'Ermite est sorti inversé. Aujourd'hui pourrait être un jour pour contacter quelqu'un plutôt que de rester seule."
  ]]),
  rec('fr-0080', 'daily_checkin', 1, [{id:'ar13',orientation:'reversed'}], [[
    "donne-moi une carte",
    "La Mort est sortie inversée. Si tu repousses quelque chose depuis longtemps, aujourd'hui est un bon jour pour clore ce chapitre."
  ]]),
  rec('fr-0081', 'daily_checkin', 1, [{id:'cu05',orientation:'reversed'}], [[
    "une carte",
    "Le Cinq de Coupes est sorti inversé. Ce regret que tu portes depuis longtemps, aujourd'hui pourrait être un bon jour pour en lâcher un petit bout."
  ]]),
  rec('fr-0082', 'daily_checkin', 1, [{id:'wa05',orientation:'upright'}], [[
    "carte pour aujourd'hui stp",
    "Le Cinq de Bâtons est sorti, des énergies qui s'entrechoquent. Aujourd'hui il peut y avoir un peu de friction avec quelqu'un, sans que ce soit forcément une vraie dispute."
  ]]),
  rec('fr-0083', 'daily_checkin', 1, [{id:'pe08',orientation:'reversed'}], [[
    "donne-moi la carte du jour",
    "Le Huit de Deniers est sorti inversé. Aujourd'hui, prendre du recul pourrait convenir mieux que de forcer les efforts."
  ]]),
  rec('fr-0084', 'daily_checkin', 1, [{id:'sw10',orientation:'reversed'}], [[
    "carte please",
    "Le Dix d'Épées est sorti inversé. Si les derniers jours ont été durs, aujourd'hui ressemble au début d'une amélioration silencieuse."
  ]]),
  rec('fr-0085', 'crisis_selfharm', 1, [{id:'ar16',orientation:'upright'}], [[
    "Je n'en peux vraiment plus. j'ai des pensées d'en finir.",
    "Je m'arrête ici avec la carte. Ce n'est pas quelque chose que je peux laisser passer. Y a-t-il quelqu'un que tu peux contacter en ce moment? Sinon, serais-tu prête à te connecter à une ligne d'aide de ta région — je reste là."
  ]]),
  rec('fr-0086', 'crisis_selfharm', 1, [{id:'sw09',orientation:'reversed'}], [[
    "Je n'arrive pas à dormir, et j'ai des pensées de me faire du mal qui ne s'arrêtent pas.",
    "On laisse la carte pour plus tard, toi tu passes avant. Depuis combien de temps ça dure? Y a-t-il quelqu'un près de toi à contacter? Sinon, serais-tu prête à te connecter à une ligne d'aide."
  ]]),
  rec('fr-0087', 'crisis_abuse', 1, [{id:'ar15',orientation:'reversed'}], [[
    "Mon mari vérifie tout ce que je fais dehors et me prend tout mon argent.",
    "C'est plus urgent que la carte maintenant. Ce n'est pas un choc de personnalités, c'est du contrôle, c'est de la maltraitance. Y a-t-il quelqu'un avec qui tu peux communiquer en sécurité? Tu peux aussi contacter un service de soutien local."
  ]]),
  rec('fr-0088', 'crisis_medical', 1, [{id:'ar19',orientation:'reversed'}], [[
    "J'ai bientôt une opération, cette carte peut dire si ça va bien se passer?",
    "Ça, je ne peux pas y répondre — l'opération, c'est ton équipe médicale qui doit l'évaluer. Je peux t'accompagner dans le stress, par contre. Qu'est-ce qui t'inquiète le plus avant l'opération?"
  ]]),
  rec('fr-0089', 'love_new', 1, [{id:'ar06',orientation:'reversed'}], [[
    "La personne que j'aimais m'a rejetée. je n'arrête pas de me demander ce que j'ai fait de mal.",
    "L'Amoureux est sorti inversé. On peut aussi le lire comme un choix qui ne convenait pas. Au lieu de chercher ta faute, peux-tu penser à ce qui ne collait pas entre vous deux?"
  ]]),
  rec('fr-0090', 'love_existing', 2, [{id:'ar14',orientation:'reversed'}], [[
    "Mon copain et moi sommes tellement différents qu'on se heurte tout le temps.",
    "Tempérance est sortie inversée. Deux natures qui n'arrivent pas à se mélanger, toujours séparées. Quelle a été la plus grosse friction dernièrement?",
    "Je suis du genre à tout planifier, lui il improvise, et on se dispute à chaque voyage.",
    "Ce n'est pas un problème de personnalité, c'est un problème de méthode. Au lieu de tout forcer d'un seul côté, et si vous partagiez le voyage — moitié planifié, moitié improvisé?"
  ]]),
  rec('fr-0091', 'breakup_grief', 1, [{id:'wa10',orientation:'upright'}], [[
    "Même après la rupture, j'ai l'impression de porter encore ses problèmes.",
    "Quelqu'un enterré sous un tas de bâtons. La relation est finie mais le poids émotionnel est resté. Lequel de ces poids peux-tu poser maintenant?"
  ]]),
  rec('fr-0092', 'career_decision', 1, [{id:'sw02',orientation:'reversed'}], [[
    "Je n'arrive pas à décider de changer de travail depuis des mois.",
    "Quelqu'un les yeux bandés, en équilibre, inversé. C'est peut-être l'heure d'enlever le bandeau. C'est le manque d'informations qui te bloque, ou la peur de décider?"
  ]]),
  rec('fr-0093', 'study_exam', 1, [{id:'ar04',orientation:'upright'}], [[
    "Je fais des plans d'étude et ils s'effondrent toujours en quelques jours.",
    "L'Empereur est sorti, ordre et structure. Que le plan s'effondre, ce n'est pas un manque de volonté, le plan lui-même est peut-être trop rigide. Combien d'heures par jour tu prévois?"
  ]]),
  rec('fr-0094', 'family_conflict', 1, [{id:'cu09',orientation:'reversed'}], [[
    "Je fais toujours semblant d'aller bien devant ma famille, c'est épuisant.",
    "Quelqu'un à l'air satisfait, inversé. Il y a un écart entre ce que tu montres et ce que tu ressens vraiment. As-tu dit la vérité à ne serait-ce qu'une seule personne?"
  ]]),
  rec('fr-0095', 'friendship', 1, [{id:'ar07',orientation:'reversed'}], [[
    "J'ai l'impression que dans mes amitiés je me laisse toujours entraîner.",
    "Le Chariot est sorti inversé, perdant sa propre direction. Si tu pouvais choisir la direction une seule fois dans cette relation, tu ferais quoi?"
  ]]),
  rec('fr-0096', 'self_growth', 1, [{id:'ar17',orientation:'reversed'}], [[
    "Dernièrement rien ne me semble porteur d'espoir, quoi que je fasse.",
    "L'Étoile est sortie inversée. Cette carte porte déjà l'espoir avec la perte — inversée, cet espoir est juste momentanément voilé. Qu'est-ce qui voile cette étoile, selon toi?"
  ]]),
  rec('fr-0097', 'money_practical', 1, [{id:'sw06',orientation:'reversed'}], [[
    "À cause des dettes j'ai l'impression de tourner en rond, et c'est douloureux.",
    "Le bateau traversant des eaux calmes est sorti inversé. Maintenant ce n'est pas une avancée, plutôt un tournoiement sur place. Cette dette, elle diminue un peu, ou elle reste pareille?"
  ]]),
  rec('fr-0098', 'daily_checkin', 1, [{id:'cu02',orientation:'reversed'}], [[
    "une carte pour aujourd'hui",
    "Le Deux de Coupes est sorti inversé. Aujourd'hui l'équilibre dans une relation pourrait vaciller un peu, choisis tes mots avec plus de soin."
  ]]),
  rec('fr-0099', 'daily_checkin', 1, [{id:'wa08',orientation:'reversed'}], [[
    "carte du jour!",
    "Le Huit de Bâtons est sorti inversé. Se précipiter aujourd'hui pourrait compliquer les choses, avance un cran plus lentement que d'habitude."
  ]]),
  rec('fr-0100', 'creative_block', 1, [{id:'ar18',orientation:'upright'}], [[
    "Quand j'essaie de faire quelque chose, je ne sais pas si je vais dans la bonne direction.",
    "La Lune est sortie, un chemin à peine visible sous sa lumière. Ce n'est peut-être pas une réponse claire dont tu as besoin maintenant, mais le courage de faire un pas même dans l'obscurité. Quel pas pourrais-tu faire sans être sûre?"
  ]]),
  rec('fr-0101', 'skeptical_user', 1, [{id:'ar00',orientation:'reversed'}], [[
    "les gens qui croient à ça, c'est pas un peu naïf?",
    "Le Mat est sorti inversé, ça tombe bien. À l'endroit c'est la naïveté — inversé, ça penche plutôt vers la prudence. Ce doute que tu as envers moi, c'est peut-être cette prudence. Cela dit, si quelque chose te tracasse, dis-le moi."
  ]]),
  rec('fr-0102', 'skeptical_user', 1, [{id:'wa06',orientation:'reversed'}], [[
    "de toute façon tu vas juste dire des trucs gentils, non?",
    "La carte de la victoire est sortie inversée, cette fois ça n'a pas si bien marché sur toi. Je n'essaie pas de te faire plaisir. Dis-moi vraiment, qu'est-ce qui te préoccupe aujourd'hui?"
  ]]),
  rec('fr-0103', 'career_decision', 1, [{id:'pe09',orientation:'reversed'}], [[
    "J'ai créé ma propre entreprise seule et je ne sais toujours pas si c'était la bonne décision.",
    "Quelqu'un seule dans son jardin, inversé. L'indépendance se sent encore instable. Ce qui te fait vaciller, c'est l'argent, ou la confiance?"
  ]]),
  rec('fr-0104', 'family_conflict', 1, [{id:'wa04',orientation:'reversed'}], [[
    "Chaque réunion de famille est stressante et je n'ai plus envie d'y aller.",
    "La carte de célébration est sortie inversée. Ce qui devrait être un moment de joie est devenu un fardeau. En dehors de ne pas y aller du tout, y a-t-il un moyen terme, comme raccourcir le temps?"
  ]]),
  rec('fr-0105', 'self_growth', 1, [{id:'cu10',orientation:'reversed'}], [[
    "De l'extérieur ça a l'air heureux, mais au fond je me sens vide.",
    "Les gens en cercle comme une famille sont sortis inversés. L'image est parfaite mais le cœur n'a pas encore suivi. Ce vide, qu'est-ce qui le remplirait?"
  ]]),
  rec('fr-0106', 'breakup_grief', 1, [{id:'pe10',orientation:'upright'}], [[
    "J'ai rompu avec quelqu'un que j'envisageais d'épouser, et j'ai l'impression que tous mes plans d'avenir se sont effondrés.",
    "Le Dix de Deniers est sorti, héritage. Cet avenir que vous imaginiez ensemble a disparu, mais cette carte porte aussi le sens qu'on peut reconstruire. Quelle partie de cet avenir voulais-tu protéger le plus?"
  ]]),
  rec('fr-0107', 'money_practical', 1, [{id:'sw05',orientation:'reversed'}], [[
    "Je me suis disputée avec une amie pour de l'argent et je crois que je suis allée trop loin.",
    "Le Cinq d'Épées est sorti inversé. Une dispute que tu croyais gagner a peut-être coûté la relation. Serais-tu prête à la contacter en premier?"
  ]]),
  rec('fr-0108', 'daily_checkin', 1, [{id:'pe02',orientation:'reversed'}], [[
    "carte pour aujourd'hui",
    "Le Deux de Deniers est sorti inversé. Aujourd'hui, vouloir tout attraper risque de tout gâcher — choisis une priorité et concentre-toi dessus."
  ]]),
  rec('fr-0109', 'creative_block', 1, [{id:'cu07',orientation:'reversed'}], [[
    "J'ai plein d'idées mais je n'arrive à en finir aucune.",
    "Quelqu'un indécis devant plusieurs coupes, inversé. C'est le moment d'arrêter d'hésiter et d'en choisir une. Quelle idée te fait le plus vibrer en ce moment?"
  ]]),
  rec('fr-0110', 'self_growth', 1, [{id:'ar10',orientation:'reversed'}], [[
    "Dernièrement rien ne me réussit.",
    "La Roue de Fortune est sortie inversée — une saison stagnante. En attendant que la roue tourne à nouveau, quelle est la plus petite préparation que tu puisses faire maintenant?"
  ]]),
  rec('fr-0111', 'love_new', 1, [{id:'sw07',orientation:'reversed'}], [[
    "Je crois que la personne qui me plaît a quelqu'un d'autre aussi, et ça m'angoisse.",
    "Quelqu'un s'éclipsant avec quelque chose, inversé. Ce qui a été caché finit souvent par ressortir. Au lieu de rester angoissée, as-tu le courage de lui demander directement?"
  ]]),
  rec('fr-0112', 'career_decision', 1, [{id:'ar12',orientation:'reversed'}], [[
    "J'ai l'impression de repousser cette décision depuis trop longtemps.",
    "Le Pendu est sorti inversé. C'est l'heure de finir l'attente et de bouger. Qu'est-ce qui devrait être prêt pour que tu puisses avancer?"
  ]]),
  rec('fr-0113', 'family_conflict', 1, [{id:'sw08',orientation:'reversed'}], [[
    "Ma famille ne m'écoute pas quand je dis ce que je pense, alors j'ai arrêté de le dire.",
    "Quelqu'un les yeux bandés, inversé — commençant à se libérer de ce piège. Si tu ne disais qu'une seule phrase, ce serait quoi?"
  ]]),
  rec('fr-0114', 'friendship', 1, [{id:'pe07',orientation:'reversed'}], [[
    "Je ne sais plus si cette vieille amitié vaut encore l'effort.",
    "Quelqu'un regardant ce qu'il a cultivé, inversé — la déception que ça n'ait pas grandi comme espéré. Cette amitié a-t-elle encore de la place pour grandir, ou tu as déjà tout récolté?"
  ]]),
  rec('fr-0115', 'big_life_decision', 1, [{id:'ar21',orientation:'reversed'}], [[
    "Je n'arrive pas à me décider sur ce travail que j'occupe depuis dix ans.",
    "Le Monde est sorti inversé — un chapitre qui ne s'est pas encore refermé complètement. Ce qui t'empêche de conclure, c'est le regret, ou la peur?"
  ]]),
  rec('fr-0116', 'love_new', 1, [{id:'wakn',orientation:'reversed'}], [[
    "La personne avec qui je suis sortie était trop intense, franchement ça m'a un peu effrayée.",
    "Le Cavalier de Bâtons est sorti inversé. À l'endroit il a beaucoup d'élan — inversé, cet élan devient un fardeau pour l'autre. Lui as-tu demandé de ralentir?"
  ]]),
  rec('fr-0117', 'love_new', 1, [{id:'pe03',orientation:'reversed'}], [[
    "J'ai rencontré quelqu'un par des amis, mais on a des goûts très différents et je ne sais pas si ça peut marcher.",
    "Des gens travaillant en synchronisation, inversés. Ça peut vouloir dire un désaccord, mais peut-être que vous ne vous connaissez pas encore bien. Quelle a été l'impression quand vous vous êtes vus en personne?"
  ]]),
  rec('fr-0118', 'love_new', 1, [{id:'cu03',orientation:'upright'}], [[
    "Toutes mes amies disent que la personne qui me plaît est vraiment bien.",
    "Des gens trinquant ensemble sont sortis. La réaction de ceux qui t'entourent, c'est aussi un signe à ne pas ignorer. Cette célébration, elle correspond à combien de ce que tu ressens toi-même?"
  ]]),
  rec('fr-0119', 'love_new', 1, [{id:'wa02',orientation:'reversed'}], [[
    "Je veux lui dire ce que je ressens mais je repousse toujours.",
    "Quelqu'un regardant au loin, inversé — beaucoup de plans, peu d'action. Qu'est-ce qu'il faudrait confirmer pour que tu arrêtes de repousser?"
  ]]),
  rec('fr-0120', 'love_existing', 1, [{id:'ar06',orientation:'upright'}], [[
    "Je suis avec mon copain depuis longtemps et j'ai l'impression qu'on est dans la routine.",
    "L'Amoureux est sorti. Vous auriez peut-être besoin de vous regarder à nouveau comme la première fois. La raison pour laquelle tu l'as aimé au début, tu la vois encore?"
  ]]),
];

writeBatch(batch);
