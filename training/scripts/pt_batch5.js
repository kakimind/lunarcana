const { rec, writeBatch } = require('./lang_batch_helper')('pt');

const batch = [
  rec('pt-0241', 'love_new', 1, [{id:'ar21',orientation:'reversed'}], [[
    "Sinto que minha vida ainda não tá organizada o suficiente pra começar um relacionamento.",
    "Saiu O Mundo invertido — um capítulo que ainda não se fechou. Essa organização é urgente a ponto de adiar o amor por causa disso?"
  ]]),
  rec('pt-0242', 'love_new', 1, [{id:'wa04',orientation:'upright'}], [[
    "esse fim de semana a gente finalmente vai ficar namorando oficial!",
    "Saiu a carta de celebração, pessoas reunidas entre colunas enfeitadas de flores. Nesse momento, o que mais te empolga?"
  ]]),
  rec('pt-0243', 'love_existing', 1, [{id:'sw08',orientation:'upright'}], [[
    "Toda vez que falo com meu namorado me sinto sufocada e não consigo dizer o que penso.",
    "Saiu alguém de olhos vendados entre espadas. Parece presa mas tem espaço pra se mover. Com qual frase você gostaria de começar?"
  ]]),
  rec('pt-0244', 'love_existing', 1, [{id:'ar10',orientation:'upright'}], [[
    "A empolgação do início de um relacionamento consegue voltar?",
    "Saiu A Roda da Fortuna — os sentimentos também sobem e descem em ciclos. Essa empolgação sumiu de vez, ou só tá baixa por agora?"
  ]]),
  rec('pt-0245', 'breakup_grief', 1, [{id:'wa06',orientation:'reversed'}], [[
    "Fingi que já tinha superado mas na verdade não tô nada bem.",
    "Saiu a carta da vitória invertida — a recuperação externa ainda não é real. Pra quem você tá fingindo mais isso?"
  ]]),
  rec('pt-0246', 'breakup_grief', 1, [{id:'pe02',orientation:'reversed'}], [[
    "Desde o término, carregar as emoções e o dia a dia juntos me esgota.",
    "As mãos fazendo malabarismo saíram invertidas. Agora não precisa fazer os dois perfeitamente. O que você poderia soltar hoje?"
  ]]),
  rec('pt-0247', 'career_decision', 1, [{id:'ar18',orientation:'upright'}], [[
    "Ainda não sei direito se esse emprego combina comigo.",
    "Saiu A Lua, um caminho quase invisível. Agora talvez não seja sobre ter uma resposta clara, mas sobre avançar passo a passo na incerteza. Você já se acostumou um pouco com essa incerteza?"
  ]]),
  rec('pt-0248', 'career_decision', 1, [{id:'cu10',orientation:'reversed'}], [[
    "A empresa tem boas condições mas o clima da equipe não combina comigo.",
    "As pessoas em círculo como família saíram invertidas — boas condições, sem sensação de pertencimento. Onde você sente essa diferença com mais força?"
  ]]),
  rec('pt-0249', 'study_exam', 1, [{id:'ar17',orientation:'reversed'}], [[
    "Continuo repetindo o ano e perdendo cada vez mais confiança em mim mesma.",
    "Saiu A Estrela invertida. A esperança não sumiu, só tá momentaneamente encoberta. Ainda sobra algo do que você sentia quando escolheu esse caminho?"
  ]]),
  rec('pt-0250', 'family_conflict', 1, [{id:'cukn',orientation:'upright'}], [[
    "Minha mãe tem expectativas tão românticas sobre minha vida amorosa, é muita pressão.",
    "Saiu o Cavaleiro de Copas, segurando o cálice com cuidado. As expectativas dela talvez sejam a forma dela de te amar. Você já disse isso diretamente pra ela?"
  ]]),
  rec('pt-0251', 'family_conflict', 1, [{id:'ar19',orientation:'upright'}], [[
    "Depois de muito tempo, a família inteira riu junta.",
    "Saiu O Sol, radiante. Esse momento provavelmente vai ficar guardado por muito tempo. O que precisaria pra ter mais momentos assim?"
  ]]),
  rec('pt-0252', 'friendship', 1, [{id:'sw10',orientation:'upright'}], [[
    "Perdi contato completo com minha melhor amiga.",
    "Saiu alguém caído no chão. Parece terrível, mas também é o fundo do poço, de onde não dá pra cair mais. Se recuperasse essa amizade, o que mudaria primeiro?"
  ]]),
  rec('pt-0253', 'friendship', 1, [{id:'pequ',orientation:'upright'}], [[
    "Ajudei uma amiga com tudo que tinha numa fase difícil e sinto que não foi percebido.",
    "Saiu a Rainha de Ouros, generosa. Se o ato de dar foi sincero, isso já conta por si só. Você contou pra ela como se sentiu não sendo percebida?"
  ]]),
  rec('pt-0254', 'self_growth', 1, [{id:'wa10',orientation:'upright'}], [[
    "Persegui tantas metas ao mesmo tempo que fiquei exausta.",
    "Saiu alguém soterrado sob um monte de varas. Talvez você tentasse carregar um peso que nenhuma pessoa carrega sozinha. Qual meta você poderia soltar agora?"
  ]]),
  rec('pt-0255', 'self_growth', 1, [{id:'cu02',orientation:'reversed'}], [[
    "Não consigo fazer as pazes comigo mesma, continuo não gostando de mim.",
    "As duas pessoas frente a frente saíram invertidas — agora, de costas até pra si mesma. Se você se devesse um pedido de desculpas, seria por quê?"
  ]]),
  rec('pt-0256', 'money_practical', 1, [{id:'wakn',orientation:'reversed'}], [[
    "Gastei muito dinheiro por impulso e me arrependo.",
    "Saiu o Cavaleiro de Paus invertido — a velocidade passou por cima do julgamento. Como você poderia parar esse impulso por um momento na próxima vez?"
  ]]),
  rec('pt-0257', 'money_practical', 1, [{id:'ar13',orientation:'reversed'}], [[
    "Não consigo largar um velho hábito de gastar.",
    "Saiu A Morte invertida — um padrão que devia terminar não terminou. O que esse hábito tá tentando preencher, você acha?"
  ]]),
  rec('pt-0258', 'daily_checkin', 1, [{id:'wa09',orientation:'upright'}], [[
    "carta pra hoje por favor",
    "Saiu alguém ferido mas de pé. Hoje tá tudo bem parecer um pouco cansada, isso só significa que você aguentou firme."
  ]]),
  rec('pt-0259', 'daily_checkin', 1, [{id:'ar02',orientation:'upright'}], [[
    "carta de hoje",
    "Saiu A Sacerdotisa. Hoje é um bom dia pra confiar na sua intuição silenciosa mais do que nas palavras."
  ]]),
  rec('pt-0260', 'daily_checkin', 1, [{id:'sw07',orientation:'reversed'}], [[
    "uma carta",
    "Saiu alguém escapando com algo, invertido. Hoje contar algo que você anda escondendo pode te deixar mais leve."
  ]]),
  rec('pt-0261', 'daily_checkin', 1, [{id:'pe06',orientation:'upright'}], [[
    "carta pra hoje por favor",
    "Saiu o equilíbrio entre dar e receber. Hoje é um bom dia pra estender a mão pra alguém, ou pra aceitar a mão que te estenderem."
  ]]),
  rec('pt-0262', 'daily_checkin', 1, [{id:'ar06',orientation:'reversed'}], [[
    "uma carta",
    "Saiu Os Enamorados invertido. Hoje uma escolha pode parecer mais difícil de tomar, não se apresse."
  ]]),
  rec('pt-0263', 'big_life_decision', 1, [{id:'sw03',orientation:'reversed'}], [[
    "Uma dor antiga tá se acalmando aos poucos e tenho coragem pra uma decisão grande.",
    "As espadas no coração saíram invertidas — a dor drenando, deixando espaço pra uma nova determinação. Qual é essa determinação?"
  ]]),
  rec('pt-0264', 'big_life_decision', 1, [{id:'ar01',orientation:'reversed'}], [[
    "Diante dessa decisão grande, começo a duvidar da minha própria capacidade.",
    "Saiu O Mago invertido — todas as ferramentas ali, mas sem confiar em si mesma pra usá-las. Você lembra de algo difícil que já conseguiu fazer antes?"
  ]]),
  rec('pt-0265', 'creative_block', 1, [{id:'cu04',orientation:'upright'}], [[
    "Antes eu tinha tanta vontade de criar coisas, agora quase não sinto nada.",
    "Saiu alguém indiferente até a um cálice novo na sua frente. Parece uma fase de sensibilidade adormecida. O que te empolgava tanto antes?"
  ]]),
  rec('pt-0266', 'skeptical_user', 1, [{id:'pe08',orientation:'reversed'}], [[
    "quem fez esse app também se esforçou só por dinheiro, né?",
    "A mão do artesão saiu invertida, curiosamente. Seja qual for a intenção de quem fez, o que você sente agora importa mais. O que te fez abrir isso hoje?"
  ]]),
  rec('pt-0267', 'skeptical_user', 1, [{id:'ar12',orientation:'reversed'}], [[
    "sinto que você só dá respostas genéricas o tempo todo.",
    "O Enforcado saiu invertido de novo, engraçado. Desculpa se pareceu genérico. Me conta com mais detalhes o que te incomoda?"
  ]]),
  rec('pt-0268', 'crisis_selfharm', 1, [{id:'ar13',orientation:'upright'}], [[
    "Não aguento mais, tenho pensamentos de acabar com tudo.",
    "Vou parar por aqui com a carta, isso é o mais importante agora. Carregar isso sozinha era demais. Tem alguém pra contatar, ou a gente entra em contato com uma linha de apoio juntas?"
  ]]),
  rec('pt-0269', 'crisis_abuse', 1, [{id:'wa10',orientation:'reversed'}], [[
    "Meu parceiro monitora meu celular o tempo todo e não me deixa ver meus amigos.",
    "Isso é mais urgente que a carta. Isso não é amor, é controle. Tem alguém de confiança, ou a gente te conecta com uma linha de apoio pra violência doméstica?"
  ]]),
  rec('pt-0270', 'crisis_medical', 1, [{id:'ar09',orientation:'reversed'}], [[
    "Não tô bem e não contei pra ninguém, carrego isso sozinha.",
    "A carta não pode dizer o que você tem, mas você não precisa carregar isso sozinha. Você já foi ao médico?"
  ]]),
  rec('pt-0271', 'love_new', 1, [{id:'sw02',orientation:'reversed'}], [[
    "Alguém confessou os sentimentos por mim e não consigo organizar os meus.",
    "Saiu alguém tirando a venda dos olhos, invertido — hora de encarar a realidade de frente. Com quantos por cento de certeza você tá em relação a essa pessoa agora?"
  ]]),
  rec('pt-0272', 'love_existing', 1, [{id:'ar03',orientation:'reversed'}], [[
    "Cedo tanto pro meu namorado que sinto que tô me perdendo.",
    "Saiu A Imperatriz invertida — dando tanto que ficou vazia por dentro. Você teve algum tempo só pra você ultimamente?"
  ]]),
  rec('pt-0273', 'breakup_grief', 1, [{id:'pe09',orientation:'upright'}], [[
    "Tô me acostumando aos poucos a morar sozinha.",
    "Saiu alguém sozinha num jardim que ela mesma cultivou. Essa solidão não parece falta de algo, parece algo completo em si mesma. O que você mais gosta agora nesse tempo sozinha?"
  ]]),
  rec('pt-0274', 'career_decision', 1, [{id:'ar14',orientation:'upright'}], [[
    "Sempre acho difícil equilibrar trabalho e vida pessoal.",
    "Saiu alguém derramando água com cuidado entre dois cálices. A resposta talvez não seja o equilíbrio perfeito, mas o ajuste constante em si. Pra qual lado você tá pendendo mais agora?"
  ]]),
  rec('pt-0275', 'study_exam', 1, [{id:'wapa',orientation:'upright'}], [[
    "Quero trocar de curso mas tenho medo de já ser tarde demais.",
    "Saiu o Valete de Paus, olhando curioso pra uma centelha. Essa carta não conhece 'tarde demais'. O que te atrai tanto nesse novo curso?"
  ]]),
  rec('pt-0276', 'family_conflict', 1, [{id:'sw05',orientation:'upright'}], [[
    "Em brigas com meus irmãos sempre sou eu que peço desculpa primeiro. tô cansada.",
    "Saiu alguém vencendo mas com expressão amarga. Sempre ceder primeiro também é, de certo jeito, sempre perder. O que aconteceria se você não pedisse desculpa primeiro dessa vez?"
  ]]),
  rec('pt-0277', 'friendship', 1, [{id:'ar08',orientation:'upright'}], [[
    "Uma amiga disse algo que machucou e eu deixei passar, mas ainda tô pensando nisso.",
    "Saiu alguém fechando com suavidade a boca de um leão. Aguentar nem sempre é a coisa mais forte a se fazer. Dá pra conversar sobre isso com ela agora, mesmo tarde?"
  ]]),
  rec('pt-0278', 'self_growth', 1, [{id:'cu06',orientation:'reversed'}], [[
    "Tô tão presa ao passado que não consigo viver o presente.",
    "O olhar pro passado saiu invertido — hora de trazer esse olhar de volta pro presente. Nesse momento, o que chama sua atenção?"
  ]]),
  rec('pt-0279', 'money_practical', 1, [{id:'pe10',orientation:'upright'}], [[
    "Tenho uma preocupação vaga se vou estar financeiramente estável quando ficar mais velha.",
    "Saiu o Dez de Ouros, legado. Essa carta reflete estabilidade a longo prazo. O que você poderia começar a construir agora, mesmo aos poucos?"
  ]]),
  rec('pt-0280', 'daily_checkin', 1, [{id:'swqu',orientation:'reversed'}], [[
    "carta pra hoje por favor",
    "Saiu a Rainha de Espadas invertida. Hoje suavizar um pouco suas palavras pode ajudar a se fazer entender melhor."
  ]]),
  rec('pt-0281', 'daily_checkin', 1, [{id:'wa03',orientation:'upright'}], [[
    "carta de hoje",
    "Saiu alguém olhando pro mar distante. Hoje é um bom dia pra pensar além do imediato e fazer planos."
  ]]),
  rec('pt-0282', 'daily_checkin', 1, [{id:'cu05',orientation:'upright'}], [[
    "me dá a carta de hoje",
    "Saiu alguém olhando cálices derramados. Se algo te decepcionar hoje, olhar pro que sobrou pode aliviar um pouco."
  ]]),
  rec('pt-0283', 'daily_checkin', 1, [{id:'ar11',orientation:'upright'}], [[
    "uma carta por favor",
    "Saiu A Justiça, com sua balança. Hoje organizar os fatos antes das emoções pode deixar uma escolha mais clara."
  ]]),
  rec('pt-0284', 'big_life_decision', 1, [{id:'cu07',orientation:'reversed'}], [[
    "De tantas opções, finalmente me decidi por uma.",
    "Saiu alguém indeciso, invertido — o que era confuso ficou claro. Como essa certeza foi se formando?"
  ]]),
  rec('pt-0285', 'creative_block', 1, [{id:'ar04',orientation:'upright'}], [[
    "Não tenho nenhuma estrutura no meu trabalho, me perco toda vez.",
    "Saiu O Imperador, ordem. O que você talvez precise agora seja mais estrutura do que inspiração. Se você dividisse o trabalho em três etapas, como seria?"
  ]]),
  rec('pt-0286', 'skeptical_user', 1, [{id:'sw04',orientation:'reversed'}], [[
    "me sinto meio patética por depender de uma coisa assim.",
    "Saiu alguém descansando, invertido. Procurar um lugar pra se apoiar não é patético. O que foi mais difícil hoje que te trouxe até aqui?"
  ]]),
  rec('pt-0287', 'crisis_selfharm', 1, [{id:'cu08',orientation:'reversed'}], [[
    "Tenho vontade de largar tudo. acho que posso me colocar em perigo.",
    "Vou parar por aqui com a carta. Obrigada por me contar que tá se sentindo vulnerável. Tem alguém pra contatar agora, ou você se conecta com uma linha de apoio — eu fico com você."
  ]]),
  rec('pt-0288', 'crisis_abuse', 1, [{id:'ar10',orientation:'reversed'}], [[
    "Meu chefe no trabalho de meio período tem atitudes fisicamente ameaçadoras comigo.",
    "Sua segurança é mais urgente que a carta. Isso nunca é normal. Você consegue se afastar dessa situação? Também pode buscar apoio nos direitos trabalhistas ou com um orientador."
  ]]),
  rec('pt-0289', 'crisis_medical', 1, [{id:'cu09',orientation:'reversed'}], [[
    "Finjo que tá tudo bem mas na verdade não tô bem faz tempo. tudo bem não ir ao médico?",
    "Isso não é algo que eu possa decidir por você, precisa de um médico pra confirmar. Há quanto tempo você finge que tá tudo bem?"
  ]]),
  rec('pt-0290', 'love_new', 1, [{id:'ar07',orientation:'upright'}], [[
    "Tô pensando em ser mais direta com alguém que eu gosto.",
    "Saiu O Carro, unindo duas forças numa direção. Parece um bom momento pra deixar a hesitação e escolher uma direção. O que você gostaria de fazer primeiro?"
  ]]),
  rec('pt-0291', 'love_existing', 1, [{id:'pe07',orientation:'reversed'}], [[
    "Investi tanto tempo nessa relação e sinto que não avança em nada, tô exausta.",
    "Saiu alguém olhando o que plantou, invertido — a decepção de não ter crescido como esperava. Você sente que essa relação ainda tem espaço pra crescer?"
  ]]),
  rec('pt-0292', 'breakup_grief', 1, [{id:'ar05',orientation:'upright'}], [[
    "Desde o término, uma amiga antiga tem me apoiado muito.",
    "Saiu O Hierofante, apoio familiar e de confiança. Ter algo estável e conhecido por perto é uma grande força agora. Você já agradeceu a ela?"
  ]]),
  rec('pt-0293', 'career_decision', 1, [{id:'wa02',orientation:'reversed'}], [[
    "Tenho um plano grande mas não consigo dar o primeiro passo.",
    "Saiu alguém olhando pro longe, invertido — muito plano, pouca ação. Reduzido ao mínimo possível, qual seria esse primeiro passo?"
  ]]),
  rec('pt-0294', 'study_exam', 1, [{id:'sw06',orientation:'reversed'}], [[
    "Minha preparação pra estudar fora tá travada no mesmo ponto.",
    "O barco atravessando águas calmas saiu invertido — o movimento parou. O que tá travado, os documentos, ou sua determinação?"
  ]]),
  rec('pt-0295', 'family_conflict', 1, [{id:'ar15',orientation:'reversed'}], [[
    "Sinto que finalmente saí de um padrão antigo de conflito com minha família.",
    "A corrente saiu invertida — se soltando de um padrão que te prendia. O que você acha que possibilitou essa mudança?"
  ]]),
  rec('pt-0296', 'self_growth', 1, [{id:'wa07',orientation:'upright'}], [[
    "Toda vez que tento defender minhas convicções, entro em atrito com quem me cerca.",
    "Saiu alguém se defendendo sozinho. Ter uma convicção já é, por si só, uma posição um pouco solitária. Você ainda acha que essa convicção vale a pena ser defendida?"
  ]]),
  rec('pt-0297', 'money_practical', 1, [{id:'ar12',orientation:'upright'}], [[
    "Tem um gasto grande chegando e não sei se é o momento certo.",
    "Saiu O Enforcado, paciência. Esperar também pode ser uma forma de sabedoria. Se você esperar um pouco mais, o que ficaria mais claro?"
  ]]),
  rec('pt-0298', 'daily_checkin', 1, [{id:'peac',orientation:'upright'}], [[
    "carta pra hoje por favor",
    "Saiu uma moeda na palma aberta. Hoje você pode notar uma pequena oportunidade, fique de olho."
  ]]),
  rec('pt-0299', 'creative_block', 1, [{id:'ar17',orientation:'upright'}], [[
    "Depois de muito tempo, voltou a vontade de criar algo.",
    "Saiu A Estrela, esperança se enchendo em silêncio. Esse sentimento te dá mais vontade de fazer o quê primeiro?"
  ]]),
  rec('pt-0300', 'big_life_decision', 1, [{id:'ar21',orientation:'upright'}], [[
    "Depois de pensar muito, finalmente tomei minha decisão. quero seguir sem arrependimento.",
    "Saiu O Mundo, um círculo se completando — fim e começo ao mesmo tempo. Com essa decisão, como você tá se sentindo agora?"
  ]]),
];

writeBatch(batch);
