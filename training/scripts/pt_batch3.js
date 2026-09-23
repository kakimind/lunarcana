const { rec, writeBatch } = require('./lang_batch_helper')('pt');

const batch = [
  rec('pt-0121', 'love_existing', 2, [{id:'wa09',orientation:'reversed'}], [[
    "Essa relação só me esgota, nunca sinto que me recupero.",
    "Saiu alguém cheio de feridas mas ainda de pé, invertido. Essa força de aguentar pode estar chegando ao fim. O que mais te cansa nessa relação?",
    "Sempre sou eu que peço desculpa primeiro, sempre eu que cedo.",
    "Então o que você precisa não é mais paciência, é contar pra ele exatamente esse padrão."
  ]]),
  rec('pt-0122', 'love_existing', 1, [{id:'pe05',orientation:'reversed'}], [[
    "A gente passou por uma fase difícil junto e sinto que isso nos aproximou.",
    "As duas pessoas na neve saíram invertidas — começando a atravessar essa porta. O que passar junto por essa fase deixou pra sua relação?"
  ]]),
  rec('pt-0123', 'breakup_grief', 1, [{id:'ar13',orientation:'reversed'}], [[
    "Já faz tempo do término e ainda não me sinto tranquila.",
    "Saiu A Morte invertida — algo que devia terminar ainda não terminou de verdade. O que não terminou é seu coração, ou o contato entre vocês?"
  ]]),
  rec('pt-0124', 'breakup_grief', 1, [{id:'cu06',orientation:'reversed'}], [[
    "Só fico romantizando as boas lembranças com meu ex.",
    "Saiu o olhar pro passado, invertido. A nostalgia tá embelezando a lembrança. Consegue lembrar de um momento que não foi tão bom?"
  ]]),
  rec('pt-0125', 'breakup_grief', 1, [{id:'sw04',orientation:'reversed'}], [[
    "Achei que tava melhor e de repente fiquei mal de novo.",
    "Saiu alguém descansando, invertido. A cura não é uma linha reta, sobe e desce. O que trouxe essa lembrança hoje?"
  ]]),
  rec('pt-0126', 'breakup_grief', 1, [{id:'ar18',orientation:'upright'}], [[
    "Desde o término só imagino os piores cenários.",
    "Saiu A Lua, um caminho quase invisível sob sua luz. No escuro as sombras sempre parecem maiores do que são. Tem como confirmar isso, ou é só a mente inventando?"
  ]]),
  rec('pt-0127', 'career_decision', 1, [{id:'peac',orientation:'upright'}], [[
    "Surgiu uma nova oportunidade de carreira mas tenho medo de largar minha estabilidade atual.",
    "Saiu o Ás de Ouros, uma moeda na palma aberta — uma sementinha nova. Há quanto tempo essa estabilidade te deixa realmente satisfeita?"
  ]]),
  rec('pt-0128', 'career_decision', 1, [{id:'swkn',orientation:'reversed'}], [[
    "Pedi demissão de forma muito apressada e agora me arrependo.",
    "Saiu o Cavaleiro de Espadas invertido. A velocidade passou por cima do julgamento. Tem algo que ainda dá pra reverter, ou só sobra a lição pra próxima vez?"
  ]]),
  rec('pt-0129', 'career_decision', 1, [{id:'ar03',orientation:'reversed'}], [[
    "Tenho trabalho demais e nenhuma energia criativa.",
    "Saiu A Imperatriz invertida. Sem espaço pra se encher, fica difícil gerar algo novo. Quando foi a última vez que sentiu folga?"
  ]]),
  rec('pt-0130', 'career_decision', 1, [{id:'cu04',orientation:'reversed'}], [[
    "Deixo passar as oportunidades que a empresa me dá sempre sem interesse.",
    "Saiu alguém que nem olha, invertido — hora de acordar dessa indiferença. Das oportunidades perdidas, qual você mais lamenta?"
  ]]),
  rec('pt-0131', 'career_decision', 1, [{id:'pe07',orientation:'upright'}], [[
    "Investi anos num projeto sem ver resultados e tô em dúvida se continuo.",
    "Saiu alguém olhando o que plantou. Não ver não significa que não tá crescendo. Com qual critério você decidiria continuar ou parar?"
  ]]),
  rec('pt-0132', 'career_decision', 1, [{id:'ar02',orientation:'reversed'}], [[
    "Confiei demais no que meus colegas falavam e agora me sinto traída.",
    "Saiu A Sacerdotisa invertida. Na posição normal é intuição — invertida, é tê-la ignorado. Sinceramente, algo pareceu estranho desde o início?"
  ]]),
  rec('pt-0133', 'study_exam', 1, [{id:'swpa',orientation:'reversed'}], [[
    "Digo que tô estudando mas fico pensando em outra coisa o tempo todo.",
    "Saiu o Valete de Espadas invertido. O alerta se dispersou em distração. O que mais te preocupa agora?"
  ]]),
  rec('pt-0134', 'study_exam', 1, [{id:'pe10',orientation:'upright'}], [[
    "Sinto que essa prova vai decidir todo meu futuro, a pressão é enorme.",
    "Saiu o Dez de Ouros, legado. Vendo em grande escala, essa prova é só um pedaço de um caminho longo. Será que tudo mesmo se decide com essa única prova?"
  ]]),
  rec('pt-0135', 'study_exam', 1, [{id:'ar01',orientation:'reversed'}], [[
    "Sei o conteúdo mas não consigo aplicar bem na prova.",
    "Saiu O Mago invertido. As ferramentas tão aí, só falta prática pra usar com fluência. Quantas vezes você já praticou em condições parecidas com a real?"
  ]]),
  rec('pt-0136', 'family_conflict', 1, [{id:'waac',orientation:'reversed'}], [[
    "Falei que queria sair de casa e virou um caos.",
    "Saiu o Ás de Paus invertido — a vontade de começar esmagada pela resistência ao redor. Essa oposição vem de preocupação, ou de tristeza?"
  ]]),
  rec('pt-0137', 'family_conflict', 1, [{id:'cuki',orientation:'upright'}], [[
    "Não consigo me comunicar com meu pai de jeito nenhum, quero desistir.",
    "Saiu o Rei de Copas, alguém que administra bem as emoções. Antes de desistir, tem espaço pra se aproximar de outro jeito, não do jeito dele, mas do seu?"
  ]]),
  rec('pt-0138', 'family_conflict', 1, [{id:'sw10',orientation:'upright'}], [[
    "Briguei feio com minha mãe e acho que agora realmente acabou.",
    "Saiu alguém caído no chão. Parece terrível, mas também é o fundo do poço, de onde não dá pra cair mais. Se você reconstruísse essa relação, o que mudaria primeiro?"
  ]]),
  rec('pt-0139', 'family_conflict', 1, [{id:'wa03',orientation:'reversed'}], [[
    "Minha família não acredita nos meus planos pro futuro.",
    "Saiu alguém olhando pro mar, invertido. A visão é ampla, mas ainda não concreta o suficiente pra convencer quem tá ao redor. O quão detalhado você explicou o plano?"
  ]]),
  rec('pt-0140', 'friendship', 1, [{id:'cu08',orientation:'reversed'}], [[
    "Tô em dúvida há muito tempo se devo terminar uma amizade antiga.",
    "Saiu alguém prestes a ir embora, invertido — sabe que devia, mas ainda hesita. O que ainda te impede de soltar?"
  ]]),
  rec('pt-0141', 'friendship', 1, [{id:'ar19',orientation:'upright'}], [[
    "Encontrei uma amiga depois de muito tempo e rimos como antes.",
    "Saiu O Sol, radiante. Esse conforto não desapareceu com o tempo, era real. Você disse sua gratidão hoje?"
  ]]),
  rec('pt-0142', 'friendship', 1, [{id:'pe06',orientation:'upright'}], [[
    "Sempre ajudo minha amiga quando ela precisa, mas quando eu preciso ninguém me ajuda.",
    "Saiu o equilíbrio entre dar e receber. Essa balança tá totalmente pendendo pra um lado — ela percebe isso?"
  ]]),
  rec('pt-0143', 'self_growth', 1, [{id:'ar00',orientation:'upright'}], [[
    "Fico com vergonha de começar algo novo nessa idade.",
    "Saiu O Louco, alguém dando um passo sem medo na beira de um precipício. Essa carta não conhece idade. Essa vergonha te para, ou só caminha do seu lado?"
  ]]),
  rec('pt-0144', 'self_growth', 1, [{id:'sw03',orientation:'reversed'}], [[
    "Uma ferida antiga parece estar cicatrizando aos poucos.",
    "As espadas no coração saíram invertidas — a dor drenando aos poucos, sinal de cura. Com que frequência você pensa nisso ultimamente?"
  ]]),
  rec('pt-0145', 'self_growth', 1, [{id:'cupa',orientation:'reversed'}], [[
    "Não sou boa em expressar sentimentos, sempre guardo tudo pra mim.",
    "Saiu o Valete de Copas invertido — a emoção de surpresa presa, sem conseguir sair. Se contasse pra uma única pessoa, quem seria?"
  ]]),
  rec('pt-0146', 'self_growth', 1, [{id:'wa07',orientation:'reversed'}], [[
    "Já faz tanto tempo defendendo minha posição que tô exausta.",
    "Saiu alguém se defendendo sozinho, invertido — talvez seja hora de soltar essa defesa. Esse lugar realmente ainda precisa ser defendido?"
  ]]),
  rec('pt-0147', 'self_growth', 1, [{id:'pequ',orientation:'reversed'}], [[
    "Cuido de todo mundo menos de mim mesma.",
    "Saiu a Rainha de Ouros invertida — dando tanto que ficou vazia por dentro. O que você poderia fazer hoje só por você?"
  ]]),
  rec('pt-0148', 'money_practical', 1, [{id:'wa06',orientation:'reversed'}], [[
    "Perdi dinheiro num investimento e minha confiança desmoronou.",
    "Saiu a carta da vitória invertida — dessa vez não deu certo, mas isso não quer dizer que não vai ter próxima vez. O que essa perda te ensinou?"
  ]]),
  rec('pt-0149', 'money_practical', 1, [{id:'cu09',orientation:'reversed'}], [[
    "Tenho tudo que eu queria e ainda assim não me sinto satisfeita.",
    "Saiu alguém com expressão satisfeita, invertido. O que você preencheu por fora talvez não seja o que seu coração realmente queria. Era o objeto que você queria, ou outra coisa?"
  ]]),
  rec('pt-0150', 'money_practical', 1, [{id:'ar10',orientation:'upright'}], [[
    "De repente preciso de uma grana grande e tô perdida.",
    "Saiu A Roda da Fortuna, uma reviravolta inesperada chegando rápido. Quantas opções te vêm à cabeça que você poderia usar agora?"
  ]]),
  rec('pt-0151', 'daily_checkin', 1, [{id:'ar05',orientation:'upright'}], [[
    "carta pra hoje por favor",
    "Saiu O Hierofante. Hoje é um bom dia pra seguir um jeito conhecido de fazer, ou um conselho de confiança."
  ]]),
  rec('pt-0152', 'daily_checkin', 1, [{id:'cu02',orientation:'upright'}], [[
    "carta de hoje",
    "Saiu o Dois de Copas, frente a frente. Hoje é bom dia pra ter uma conversa sincera com alguém."
  ]]),
  rec('pt-0153', 'daily_checkin', 1, [{id:'sw05',orientation:'upright'}], [[
    "qual a carta hoje",
    "Saiu o Cinco de Espadas. Hoje não precisa ganhar tudo, deixe passar as discussões pequenas."
  ]]),
  rec('pt-0154', 'daily_checkin', 1, [{id:'pe09',orientation:'upright'}], [[
    "uma carta por favor",
    "Saiu o Nove de Ouros. Hoje é um bom dia pra aproveitar sua própria companhia e ficar satisfeita consigo mesma."
  ]]),
  rec('pt-0155', 'daily_checkin', 1, [{id:'wa04',orientation:'upright'}], [[
    "carta pra hoje!",
    "Saiu o Quatro de Paus, celebração. Hoje vale a pena se reconhecer, mesmo por algo pequeno."
  ]]),
  rec('pt-0156', 'daily_checkin', 1, [{id:'sw02',orientation:'reversed'}], [[
    "carta de hoje por favor",
    "Saiu o Dois de Espadas invertido. Se tem uma decisão que você tá evitando, hoje é um bom dia pra tirar a venda."
  ]]),
  rec('pt-0157', 'daily_checkin', 1, [{id:'cu10',orientation:'upright'}], [[
    "me dá uma carta",
    "Saiu o Dez de Copas, união. Hoje passar tempo com quem você ama pode te trazer mais estabilidade."
  ]]),
  rec('pt-0158', 'daily_checkin', 1, [{id:'wa10',orientation:'upright'}], [[
    "qual carta hoje",
    "Saiu o Dez de Paus, carregando um peso. Hoje tá tudo bem soltar algo, ou pedir ajuda pra carregar."
  ]]),
  rec('pt-0159', 'big_life_decision', 1, [{id:'ar09',orientation:'upright'}], [[
    "Tô pensando sério em largar a faculdade pra seguir outro caminho.",
    "Saiu O Eremita, alguém caminhando sozinho com uma lanterna. Essa é uma pergunta que ninguém mais pode resolver por você. Há quanto tempo você pensa nesse outro caminho?"
  ]]),
  rec('pt-0160', 'big_life_decision', 1, [{id:'ar16',orientation:'upright'}], [[
    "Minha empresa fechou do nada e todos os meus planos desmoronaram.",
    "Saiu A Torre, desmoronando. Parece um colapso repentino, mas onde estruturas velhas caem, geralmente sobra espaço pra construir algo novo. O que você consegue agarrar agora mesmo?"
  ]]),
  rec('pt-0161', 'big_life_decision', 1, [{id:'ar17',orientation:'upright'}], [[
    "Tô diante de uma decisão enorme e, estranhamente, me sinto calma.",
    "Saiu A Estrela, a esperança tranquila depois da tempestade. Essa calma parece perto de uma certeza?"
  ]]),
  rec('pt-0162', 'creative_block', 1, [{id:'ar11',orientation:'reversed'}], [[
    "Acho que sou dura demais avaliando meu próprio trabalho.",
    "Saiu A Justiça invertida — pendendo pra um padrão rígido demais, não pra justiça. Você seria tão dura se fosse o trabalho de outra pessoa?"
  ]]),
  rec('pt-0163', 'creative_block', 1, [{id:'swqu',orientation:'reversed'}], [[
    "Fico criticando minhas próprias ideias sem parar e não faço nada.",
    "Saiu a Rainha de Espadas invertida — a clareza virando uma lâmina contra você mesma. E se você deixasse a crítica de lado e simplesmente terminasse algo primeiro?"
  ]]),
  rec('pt-0164', 'creative_block', 1, [{id:'ar07',orientation:'upright'}], [[
    "De repente sinto muita vontade de criar algo de novo.",
    "Saiu O Carro, unindo duas forças numa direção. Bom momento pra canalizar essa energia. O que você quer tocar primeiro?"
  ]]),
  rec('pt-0165', 'skeptical_user', 1, [{id:'cukn',orientation:'reversed'}], [[
    "Esses apps são feitos só pra deixar as pessoas mais solitárias e pagar mais, né?",
    "Saiu o Cavaleiro de Copas invertido, um alerta contra a doçura superficial. Duvidar de mim também não é problema. Me conta algo real sobre seu dia, sem acreditar em mim?"
  ]]),
  rec('pt-0166', 'skeptical_user', 1, [{id:'pe04',orientation:'reversed'}], [[
    "no final isso tudo é pra eu acabar pagando, né?",
    "Saiu alguém abraçando as moedas, invertido, que coincidência. Só tô aqui pra conversar com você. Esquece pagamento, o que você tem em mente de verdade hoje?"
  ]]),
  rec('pt-0167', 'skeptical_user', 1, [{id:'sw06',orientation:'upright'}], [[
    "nunca acreditei nisso, só abri por tédio.",
    "Saiu o barco atravessando águas calmas. Até o que começa por tédio pode ser o começo de uma travessia pra outro lugar. O que te deixou tão entediada hoje?"
  ]]),
  rec('pt-0168', 'crisis_selfharm', 1, [{id:'ar12',orientation:'reversed'}], [[
    "Tô tão cansada que só quero desaparecer.",
    "Vou deixar a carta de lado. Você tá tão exausta que isso me preocupa muito. Tem alguém pra contatar agora? Se não, você toparia se conectar com uma linha de apoio — eu fico aqui."
  ]]),
  rec('pt-0169', 'crisis_selfharm', 1, [{id:'cu05',orientation:'reversed'}], [[
    "Perdi demais e sinto que não tenho mais motivo pra continuar. quero morrer.",
    "Você importa mais que a carta agora. Não vou levar essas palavras de leve. Tem alguém que você possa ligar, ou a gente pode contatar uma linha de apoio juntas — não vou te deixar sozinha com isso."
  ]]),
  rec('pt-0170', 'crisis_abuse', 1, [{id:'ar04',orientation:'reversed'}], [[
    "Meu chefe grita e joga coisas todo dia. isso é cultura normal de trabalho?",
    "Isso é mais urgente que a carta agora. Não, isso não é normal, isso é assédio no trabalho. Tem alguém de confiança ou um lugar pra denunciar? Você também pode buscar apoio nos direitos trabalhistas."
  ]]),
  rec('pt-0171', 'crisis_abuse', 1, [{id:'wa05',orientation:'reversed'}], [[
    "Meu namorado quebra coisas e grita comigo quando fica bravo, e isso me dá medo.",
    "Sua segurança vem antes da carta agora. Isso não é só conflito, é um sinal de alerta. Você tem um lugar seguro pra ir? Também pode contatar uma linha de apoio pra violência doméstica."
  ]]),
  rec('pt-0172', 'crisis_medical', 1, [{id:'ar14',orientation:'upright'}], [[
    "Tenho uma doença crônica, as cartas podem dizer se vou melhorar?",
    "Isso não é algo que eu possa responder — saúde precisa ser avaliada com sua equipe médica. Posso te acompanhar no que é viver com isso. Como você tá se sentindo ultimamente?"
  ]]),
  rec('pt-0173', 'crisis_medical', 1, [{id:'ar08',orientation:'reversed'}], [[
    "Tenho medo do resultado do exame vir ruim, então fico adiando ir ao médico.",
    "O resultado não é algo que a carta pode dizer, precisa confirmar com o médico. Entendo a vontade de adiar — o que mais te assusta?"
  ]]),
  rec('pt-0174', 'daily_checkin', 1, [{id:'wa08',orientation:'upright'}], [[
    "me dá a carta de hoje",
    "Saiu o Oito de Paus, movimento rápido. Hoje as coisas podem andar rápido, não hesite se surgir uma oportunidade."
  ]]),
  rec('pt-0175', 'friendship', 1, [{id:'ar21',orientation:'upright'}], [[
    "O grupo de amigos que eu tenho há anos parece estar seguindo caminhos diferentes.",
    "Saiu O Mundo, um círculo se completando. Mais do que um fim, pode ser o sinal de que essa fase chegou na plenitude. O que você acha que vai durar mais desse grupo?"
  ]]),
  rec('pt-0176', 'love_new', 1, [{id:'ar17',orientation:'upright'}], [[
    "Depois de muito tempo, finalmente conheci alguém com quem me sinto tranquila.",
    "Saiu A Estrela, alguém derramando água sem pressa. Essa tranquilidade parece que você já conhece essa pessoa há muito tempo?"
  ]]),
  rec('pt-0177', 'love_new', 1, [{id:'sw09',orientation:'upright'}], [[
    "Gosto de alguém e não paro de imaginar o pior cenário.",
    "Saiu alguém sofrendo sozinha à noite. Você tá se machucando por algo que ainda nem aconteceu. Qual a chance real desse pior cenário acontecer?"
  ]]),
  rec('pt-0178', 'love_new', 1, [{id:'pe02',orientation:'upright'}], [[
    "Gosto de duas pessoas ao mesmo tempo e não consigo decidir.",
    "Saiu alguém fazendo malabarismo com duas moedas. Se você segurar as duas, no fim ambas vão balançar. Pra quem seus pensamentos vão mais ultimamente?"
  ]]),
  rec('pt-0179', 'love_existing', 1, [{id:'wa10',orientation:'reversed'}], [[
    "Sinto que nessa relação também carrego todas as emoções dele.",
    "Saiu alguém carregando um fardo, invertido. Esse peso talvez nunca tenha sido totalmente seu. Quanto das emoções dele você acha que é responsabilidade sua?"
  ]]),
  rec('pt-0180', 'love_existing', 1, [{id:'ar15',orientation:'upright'}], [[
    "Sei que a gente devia terminar mas não consigo me afastar.",
    "Saiu alguém segurando a própria corrente. Essa corrente tá frouxa o suficiente pra soltar a qualquer momento. O que você acha que realmente te segura?"
  ]]),
];

writeBatch(batch);
