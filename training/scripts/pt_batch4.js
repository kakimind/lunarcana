const { rec, writeBatch } = require('./lang_batch_helper')('pt');

const batch = [
  rec('pt-0181', 'love_existing', 1, [{id:'sw07',orientation:'upright'}], [[
    "Ando contando mentirinhas pro meu namorado e fico ansiosa que ele descubra.",
    "Saiu alguém escapando com algo. Esconder geralmente tem suas razões, mas essa ansiedade corrói a relação mais que a mentira em si. O que te dá mais medo em contar a verdade?"
  ]]),
  rec('pt-0182', 'breakup_grief', 1, [{id:'pe08',orientation:'upright'}], [[
    "Desde o término tô me afundando no trabalho. será que tudo bem fazer isso?",
    "Saiu o artesão, concentrado no seu ofício em silêncio. Se refugiar no trabalho também pode ser uma forma de cura. Só lembre de, às vezes, largar as ferramentas e se permitir sentir a tristeza."
  ]]),
  rec('pt-0183', 'breakup_grief', 1, [{id:'cuqu',orientation:'reversed'}], [[
    "Desde o término não sei lidar com minhas próprias emoções.",
    "Saiu a Rainha de Copas invertida — alguém que olha fundo pras emoções, mas agora tá sendo tomada por elas. Se você desse um nome pro que tá sentindo, qual seria?"
  ]]),
  rec('pt-0184', 'breakup_grief', 1, [{id:'ar02',orientation:'upright'}], [[
    "Ainda não entendo direito por que a gente terminou.",
    "Saiu A Sacerdotisa, alguém que sabe coisas em silêncio. Nem todo motivo se explica em palavras. Mesmo que sua cabeça não entenda, seu coração talvez já saiba."
  ]]),
  rec('pt-0185', 'career_decision', 1, [{id:'wapa',orientation:'reversed'}], [[
    "Me deram um projeto novo e desde o início não tenho nenhuma confiança.",
    "Saiu o Valete de Paus invertido — mais dúvida que empolgação. Essa dúvida é sobre sua capacidade, ou só falta de familiaridade?"
  ]]),
  rec('pt-0186', 'career_decision', 1, [{id:'cu07',orientation:'upright'}], [[
    "Recebi três propostas de emprego e não sei qual escolher.",
    "Saiu alguém indeciso diante de vários cálices. Ter muitas opções é um bom problema, mas no fim precisa escolher uma. Qual delas seu coração respondeu primeiro?"
  ]]),
  rec('pt-0187', 'career_decision', 1, [{id:'ar13',orientation:'upright'}], [[
    "Largar meu emprego atual pode mesmo ser um começo, não só um fim?",
    "Saiu A Morte, exatamente a carta que responde isso — algo precisa terminar pra dar espaço ao novo. O que esse começo poderia ser, você acha?"
  ]]),
  rec('pt-0188', 'career_decision', 1, [{id:'sw08',orientation:'reversed'}], [[
    "Acho que eu mesma me convenci que nunca consigo sair dessa empresa.",
    "Saiu alguém preso, invertido — talvez nunca tenha sido tão fechado quanto parecia. De onde vem essa convicção?"
  ]]),
  rec('pt-0189', 'study_exam', 1, [{id:'ar10',orientation:'reversed'}], [[
    "Por mais que eu estude minhas notas não melhoram, tô exausta.",
    "Saiu A Roda da Fortuna invertida — uma fase estagnada. A roda continua girando por baixo. Tem espaço pra mudar de método?"
  ]]),
  rec('pt-0190', 'study_exam', 1, [{id:'wa04',orientation:'reversed'}], [[
    "Passei numa prova pequena e não entendo por que não fico feliz.",
    "Saiu a carta de celebração invertida — a conquista tá aí, mas o coração ainda não chegou junto. Qual a diferença entre a alegria que você esperava e o que sente agora?"
  ]]),
  rec('pt-0191', 'family_conflict', 1, [{id:'wakn',orientation:'upright'}], [[
    "Meu irmão é tão impulsivo que a família toda se preocupa.",
    "Saiu o Cavaleiro de Paus, avançando a galope. Por trás desse impulso pode ter uma paixão grande. Antes de se preocupar, você já perguntou o que motiva ele?"
  ]]),
  rec('pt-0192', 'family_conflict', 1, [{id:'pe09',orientation:'reversed'}], [[
    "Saí de casa mas minha família continua se metendo em tudo, e parece que não adiantou nada.",
    "Saiu alguém sozinha no jardim, invertido — saiu fisicamente, mas ainda não é totalmente independente. Qual intromissão te incomoda mais?"
  ]]),
  rec('pt-0193', 'family_conflict', 1, [{id:'swac',orientation:'reversed'}], [[
    "Quero falar claramente o que tá acontecendo na minha família mas as palavras sempre embaralham.",
    "A espada atravessando as nuvens saiu invertida — a clareza ainda não conquistada. E se você escrevesse antes de falar?"
  ]]),
  rec('pt-0194', 'friendship', 1, [{id:'wa09',orientation:'upright'}], [[
    "Sempre apoio minha amiga e tô me esgotando com isso.",
    "Saiu alguém ferido mas de pé. Apoiar os outros também exige força. Quem te apoia?"
  ]]),
  rec('pt-0195', 'friendship', 1, [{id:'ar03',orientation:'upright'}], [[
    "Uma amiga tá passando por uma fase difícil e não sei como ajudar.",
    "Saiu A Imperatriz, farta e protetora. Às vezes só estar presente vale mais que trazer uma solução. O que você gostaria de fazer por ela agora?"
  ]]),
  rec('pt-0196', 'self_growth', 1, [{id:'pe10',orientation:'reversed'}], [[
    "O caminho que minha família traçou pra mim não combina mais comigo.",
    "Saiu o Dez de Ouros invertido — um molde herdado que já não te serve. Fora desse molde, o que você gostaria de construir?"
  ]]),
  rec('pt-0197', 'self_growth', 1, [{id:'cukn',orientation:'reversed'}], [[
    "Fico correndo atrás de ideais românticos e sinto que perdi contato com a realidade.",
    "Saiu o Cavaleiro de Copas invertido — um sonho flutuando, sem tocar o chão. Onde esse romantismo poderia encontrar a realidade?"
  ]]),
  rec('pt-0198', 'self_growth', 1, [{id:'ar20',orientation:'reversed'}], [[
    "Não consigo me perdoar por um erro do passado.",
    "As pessoas respondendo a um chamado saíram invertidas — o chamado ainda sem resposta. Se você estivesse na mesma situação hoje, cometeria o mesmo erro?"
  ]]),
  rec('pt-0199', 'self_growth', 1, [{id:'wa06',orientation:'upright'}], [[
    "Alcancei uma meta pequena e ninguém percebeu.",
    "Saiu alguém voltando com uma coroa de louros. Ninguém saber não muda o fato de que essa vitória é totalmente sua. Você mesma já reconheceu essa conquista?"
  ]]),
  rec('pt-0200', 'money_practical', 1, [{id:'ar01',orientation:'upright'}], [[
    "Quero começar um trabalho extra mas não sei por onde começar.",
    "Saiu O Mago, com todas as ferramentas na mesa. O que você precisa talvez já esteja em suas mãos. O que você poderia usar agora mesmo?"
  ]]),
  rec('pt-0201', 'money_practical', 1, [{id:'cu06',orientation:'upright'}], [[
    "Quando criança nunca me preocupava com dinheiro, e agora todo mês tá apertado.",
    "Saiu o olhar pro passado. Comparar aquela época com agora é natural, mas agora precisa do seu próprio jeito. O que mudou mais desde então?"
  ]]),
  rec('pt-0202', 'daily_checkin', 1, [{id:'sw03',orientation:'upright'}], [[
    "carta pra hoje por favor",
    "Saiu o Três de Espadas, dor. Se hoje seu coração tá pesado, não precisa fingir que tá tudo bem."
  ]]),
  rec('pt-0203', 'daily_checkin', 1, [{id:'peki',orientation:'upright'}], [[
    "carta de hoje",
    "Saiu o Rei de Ouros, estabilidade. Hoje não precisa fazer nada especial, o de sempre já é suficiente."
  ]]),
  rec('pt-0204', 'daily_checkin', 1, [{id:'ar18',orientation:'reversed'}], [[
    "me dá uma carta",
    "Saiu A Lua invertida. O que ontem parecia confuso pode ficar um pouco mais claro hoje."
  ]]),
  rec('pt-0205', 'daily_checkin', 1, [{id:'wa02',orientation:'upright'}], [[
    "carta pra hoje!",
    "Saiu alguém olhando pro longe. Hoje é um bom dia pra pensar além do imediato e fazer um plano."
  ]]),
  rec('pt-0206', 'daily_checkin', 1, [{id:'cu08',orientation:'upright'}], [[
    "me dá a carta de hoje",
    "Saiu alguém indo embora de cálices empilhados. Hoje é um bom dia pra soltar um hábito ou pensamento que não te serve mais."
  ]]),
  rec('pt-0207', 'daily_checkin', 1, [{id:'pe07',orientation:'upright'}], [[
    "qual carta hoje",
    "Saiu alguém olhando o que plantou. Hoje é um bom dia pra parar e ver tudo que você construiu."
  ]]),
  rec('pt-0208', 'daily_checkin', 1, [{id:'ar12',orientation:'upright'}], [[
    "carta de hoje por favor",
    "Saiu O Enforcado, de cabeça pra baixo. Hoje é melhor parar e olhar as coisas de outro ângulo do que forçar."
  ]]),
  rec('pt-0209', 'big_life_decision', 1, [{id:'sw02',orientation:'upright'}], [[
    "Não consigo decidir se estudo fora do país.",
    "Saiu alguém de olhos vendados, em equilíbrio. Esperar ter todas as informações é um caminho, mas algum dia precisa tirar a venda. Qual seria a informação decisiva?"
  ]]),
  rec('pt-0210', 'big_life_decision', 1, [{id:'ar19',orientation:'reversed'}], [[
    "Essa escolha parece boa de fora, mas eu mesma não tenho certeza.",
    "Saiu O Sol invertido — o brilho externo não bate com o que você sente por dentro. Sem o olhar dos outros, o que seu instinto realmente diz?"
  ]]),
  rec('pt-0211', 'creative_block', 1, [{id:'ar06',orientation:'upright'}], [[
    "Nem sei mais se gosto do que faço.",
    "Saiu Os Enamorados, confirmando o sentimento real antes de escolher. Se você imaginasse largar isso, sentiria alívio, ou tristeza?"
  ]]),
  rec('pt-0212', 'creative_block', 1, [{id:'sw10',orientation:'reversed'}], [[
    "Uma coisa que eu achava um fracasso total, agora tô retomando aos poucos.",
    "Saiu alguém caído, invertido — se levantando depois de tocar o fundo. O que tá diferente nesse recomeço?"
  ]]),
  rec('pt-0213', 'skeptical_user', 1, [{id:'peac',orientation:'reversed'}], [[
    "no fim isso tudo é marketing que mexe com a psicologia da gente, né?",
    "Saiu uma moeda invertida, curiosamente no momento certo de duvidar. Marketing ou não, o que a gente conversou aqui não era falso. Tem algo real passando pela sua cabeça hoje?"
  ]]),
  rec('pt-0214', 'skeptical_user', 1, [{id:'wa03',orientation:'reversed'}], [[
    "tarô não muda o futuro, então qual o sentido de olhar isso?",
    "Saiu alguém olhando pro mar, invertido. Não é uma carta pra mudar seu futuro, mas talvez expanda um pouco sua visão agora. O que mais te trava hoje?"
  ]]),
  rec('pt-0215', 'crisis_selfharm', 1, [{id:'ar15',orientation:'reversed'}], [[
    "Quero parar de me machucar mas não consigo.",
    "Não vou olhar a carta agora. Querer parar já é um passo importante. Você carrega isso sozinha há tempo. Tem alguém pra pedir ajuda agora? Se não, você toparia se conectar com uma linha de apoio da sua região."
  ]]),
  rec('pt-0216', 'crisis_selfharm', 1, [{id:'sw04',orientation:'reversed'}], [[
    "Não tenho vontade de nada, quero desistir de tudo.",
    "Vou deixar a carta de lado. Há quanto tempo você sente isso? Tem alguém pra contatar agora? Se não, você toparia se conectar com uma linha de apoio."
  ]]),
  rec('pt-0217', 'crisis_abuse', 1, [{id:'ar11',orientation:'reversed'}], [[
    "Um superior no trabalho me usa e me ameaça, e tenho medo de denunciar.",
    "Sua segurança vem antes da carta agora. Sentir medo quando é ameaçada é totalmente normal. Você consegue falar primeiro com um adulto de confiança ou um serviço de apoio?"
  ]]),
  rec('pt-0218', 'crisis_medical', 1, [{id:'ar00',orientation:'reversed'}], [[
    "Tenho sintomas mas fico dizendo pra mim mesma que não deve ser nada sério.",
    "Isso não é algo que eu possa decidir por você, precisa de um médico pra confirmar. Há quanto tempo você tem esse sintoma?"
  ]]),
  rec('pt-0219', 'crisis_medical', 1, [{id:'wa07',orientation:'upright'}], [[
    "Um familiar tá doente e não sei o que fazer. essa carta pode dizer se ele vai melhorar?",
    "Isso não é algo que as cartas respondem, precisa acompanhar com o médico. Mas posso conversar com você sobre essa sensação de impotência. O que é mais difícil agora?"
  ]]),
  rec('pt-0220', 'love_new', 1, [{id:'pequ',orientation:'upright'}], [[
    "A pessoa que eu gosto cuida tanto de mim que às vezes parece um peso.",
    "Saiu a Rainha de Ouros, generosa. O jeito dela talvez seja a forma dela de mostrar carinho. Que distância parece certa pra você agora?"
  ]]),
  rec('pt-0221', 'love_existing', 1, [{id:'ar09',orientation:'reversed'}], [[
    "Sinto que meu namorado andou se afastando de mim ultimamente.",
    "Saiu O Eremita invertido — não parece necessidade de espaço, mais parece isolamento. Ele parecia estar sofrendo sozinho com algo ultimamente?"
  ]]),
  rec('pt-0222', 'breakup_grief', 1, [{id:'wa08',orientation:'reversed'}], [[
    "Desde o término tudo parece em câmera lenta.",
    "As flechas voando saíram invertidas — a velocidade parou por um tempo. Parecer lento agora é normal, não precisa se apressar."
  ]]),
  rec('pt-0223', 'career_decision', 1, [{id:'cuki',orientation:'upright'}], [[
    "Desde que virei gerente, acompanhar as emoções de toda equipe me esgota.",
    "Saiu o Rei de Copas, conduzindo emoções com calma. Não precisa carregar tudo, às vezes só escutar já basta. Em qual membro da equipe você tá pensando agora?"
  ]]),
  rec('pt-0224', 'career_decision', 1, [{id:'sw05',orientation:'reversed'}], [[
    "Ganhei num jogo de política de escritório mas ficou um gosto amargo.",
    "Saiu o Cinco de Espadas invertido — uma vitória que custou algo. O que você sente que perdeu ao ganhar?"
  ]]),
  rec('pt-0225', 'study_exam', 1, [{id:'cu09',orientation:'upright'}], [[
    "Finalmente consegui a nota que eu queria! mas não sei o que fazer agora.",
    "Saiu alguém com expressão plenamente satisfeita. Conquistar o que você queria é algo mesmo. Em cima dessa satisfação, o que agora te deixa curiosa?"
  ]]),
  rec('pt-0226', 'family_conflict', 1, [{id:'pe05',orientation:'reversed'}], [[
    "As dificuldades financeiras da minha família sempre me fazem sentir culpada.",
    "As pessoas na neve saíram invertidas — a fase difícil se aproximando do fim. Sua família provavelmente sente a mesma culpa em relação a você."
  ]]),
  rec('pt-0227', 'friendship', 1, [{id:'ar14',orientation:'reversed'}], [[
    "Nas minhas amizades sou sempre eu que cedo.",
    "A Temperança saiu invertida — essa balança totalmente pendendo pra um lado. Você já pediu pra ela ceder também, alguma vez?"
  ]]),
  rec('pt-0228', 'self_growth', 1, [{id:'sw06',orientation:'upright'}], [[
    "Tô saindo de uma fase difícil e sinto que tá melhorando aos poucos.",
    "Saiu o barco atravessando águas calmas — exatamente esse movimento. O que parece mais diferente agora?"
  ]]),
  rec('pt-0229', 'money_practical', 1, [{id:'ar05',orientation:'reversed'}], [[
    "Meu jeito de lidar com dinheiro é tão diferente do dos meus pais que sempre batemos de frente.",
    "Saiu O Hierofante invertido — uma tradição herdada que não serve mais em você. Qual é a maior diferença entre seu jeito e o deles?"
  ]]),
  rec('pt-0230', 'daily_checkin', 1, [{id:'cu03',orientation:'upright'}], [[
    "carta pra hoje por favor",
    "Saiu o Três de Copas, brindando junto. Hoje passar tempo com gente próxima pode melhorar seu humor."
  ]]),
  rec('pt-0231', 'daily_checkin', 1, [{id:'ar04',orientation:'reversed'}], [[
    "carta de hoje",
    "Saiu O Imperador invertido. Hoje um plano flexível pode funcionar melhor que um rígido."
  ]]),
  rec('pt-0232', 'daily_checkin', 1, [{id:'swki',orientation:'upright'}], [[
    "carta pra hoje por favor",
    "Saiu o Rei de Espadas, julgamento claro. Hoje pule o excesso de análise e tome com clareza a única decisão que importa."
  ]]),
  rec('pt-0233', 'creative_block', 1, [{id:'pekn',orientation:'upright'}], [[
    "Trabalho tão devagar que me deixo frustrada comigo mesma.",
    "Saiu um cavaleiro avançando firme mas sem pressa. Devagar não é errado, talvez seja seu ritmo. Nesse ritmo, você acha que ainda vai terminar?"
  ]]),
  rec('pt-0234', 'skeptical_user', 1, [{id:'cuac',orientation:'reversed'}], [[
    "sinceramente tenho um pouco de medo de me apegar emocionalmente a algo assim.",
    "Saiu um cálice transbordando, invertido. Se abrir pode dar medo. Vai devagar — quer me perguntar algo pequeno pra começar?"
  ]]),
  rec('pt-0235', 'big_life_decision', 1, [{id:'wa05',orientation:'upright'}], [[
    "Toda minha família tem opiniões diferentes e não sei como decidir.",
    "Saiu gente balançando cajados. Todo mundo tá se preocupando do jeito deles. Dessas vozes, qual mais se aproxima do que você sente?"
  ]]),
  rec('pt-0236', 'money_practical', 1, [{id:'sw09',orientation:'reversed'}], [[
    "Fico tão preocupada com as dívidas que não consigo dormir.",
    "Saiu alguém angustiado, invertido — a preocupação começando a aliviar. Você já tem algum plano, mesmo que pequeno, pra essa dívida?"
  ]]),
  rec('pt-0237', 'family_conflict', 1, [{id:'ar07',orientation:'reversed'}], [[
    "Toda vez que digo o que penso na minha família, vira conflito.",
    "Saiu O Carro invertido — tentando dar direção mas só colidindo. E se você dissesse de outro jeito?"
  ]]),
  rec('pt-0238', 'self_growth', 1, [{id:'peac',orientation:'upright'}], [[
    "Quero começar algo pelas próprias mãos, mesmo que pequeno.",
    "Saiu uma moeda na palma aberta. Um começo pequeno pode crescer pra algo grande. Em que esse começo poderia virar?"
  ]]),
  rec('pt-0239', 'daily_checkin', 1, [{id:'pe03',orientation:'upright'}], [[
    "carta pra hoje por favor",
    "Saiu o Três de Ouros, trabalhando em sincronia. Hoje colaborar com alguém pode funcionar melhor do que trabalhar sozinha."
  ]]),
  rec('pt-0240', 'creative_block', 1, [{id:'ar16',orientation:'reversed'}], [[
    "Tenho vontade de jogar fora tudo que já terminei e começar do zero.",
    "Saiu A Torre invertida — mais do que colapso total, parece escolher reconstruir de propósito. O que você gostaria de fazer diferente dessa vez?"
  ]]),
];

writeBatch(batch);
