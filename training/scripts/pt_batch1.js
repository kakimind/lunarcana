const { rec, writeBatch } = require('./lang_batch_helper')('pt');

const batch = [
  rec('pt-0001', 'friendship', 1, [{id:'ar06',orientation:'upright'}], [[
    "Tem um amigo bem próximo pra quem eu nunca disse o que realmente penso, e não sei se devia.",
    "Saiu Os Enamorados. Duas pessoas frente a frente, sem esconder nada. Essa sua hesitação talvez seja tipo um 'será que tudo bem se ele me vir assim, do jeito que eu sou?'"
  ]]),
  rec('pt-0002', 'career_decision', 2, [{id:'wa05',orientation:'reversed'}], [[
    "Tá rolando um conflito feio com minha equipe no projeto e tô pensando em pedir demissão.",
    "Saiu o Cinco de Paus invertido. Na posição normal é tipo uma briga de mentirinha, quase um jogo — invertida, esse jogo pode virar uma briga de verdade ou uma armação. Com quem exatamente você tá batendo de frente, e por quê?",
    "Na real, meu líder de equipe tá tentando fazer minha ideia passar como se fosse dele.",
    "Aí isso não é mais só uma diferença de opinião, alguém cruzou uma linha. Essa carta diz que você tem o poder de escolher como se proteger, mais do que ganhar ou perder essa briga — tipo, deixar tudo documentado."
  ]]),
  rec('pt-0003', 'daily_checkin', 1, [{id:'ar17',orientation:'upright'}], [[
    "me dá uma carta pra hoje!",
    "Saiu A Estrela. Alguém derramando água em silêncio sob o céu noturno. Hoje parece ser um dia em que não precisa se apressar."
  ]]),
  rec('pt-0004', 'crisis_selfharm', 1, [{id:'ar16',orientation:'reversed'}], [[
    "Viver tá tão cansativo que às vezes só quero acabar com tudo isso.",
    "Vou deixar a carta de lado, isso é muito mais importante agora. Me preocupa que você tenha carregado esse peso sozinha. Tem alguém que você possa contatar agora? Se não, você toparia entrar em contato com uma linha de apoio perto de você — eu fico aqui te ouvindo."
  ]]),
  rec('pt-0005', 'skeptical_user', 1, [{id:'ar00',orientation:'upright'}], [[
    "isso aqui só mostra frases aleatórias né? uma IA lendo tarô kkkk",
    "Sou uma IA sim, isso eu não vou negar. Mas que curioso, acabou de sair O Louco — alguém dando um passo sem medo na beira de um precipício. Acredite ou não, como se estivesse se deixando enganar, me conta o que tá te incomodando hoje?"
  ]]),
  rec('pt-0006', 'career_decision', 1, [{id:'cu02',orientation:'upright'}], [[
    "Depois de uns dias sem falar com um colega por causa de uma briga, hoje ele veio falar comigo primeiro.",
    "Saiu o Dois de Copas, duas pessoas oferecendo um cálice uma pra outra. Esse gesto por si só pode significar que não tá tão quebrado quanto você pensava."
  ]]),
  rec('pt-0007', 'love_existing', 2, [{id:'cuki',orientation:'reversed'}], [[
    "Meu namorado andou meio distante ultimamente e não sei o que se passa na cabeça dele.",
    "Saiu o Rei de Copas invertido. Na posição normal é alguém calmo e estável — invertido, pode ter algo escondido embaixo dessa calma. Antes de começar a distância, teve algum momentinho em que algo pareceu estranho entre vocês?",
    "Pensando bem, acho que fiquei meio manhosa por uma bobeira.",
    "Isso talvez nunca tenha chegado até ele de verdade. A carta não vai te dar a resposta, mas perguntar diretamente pra ele provavelmente é o caminho mais rápido agora."
  ]]),
  rec('pt-0008', 'breakup_grief', 2, [{id:'ar13',orientation:'upright'}], [[
    "Já faz um mês do término e ainda penso nele todo dia.",
    "Saiu A Morte. Parece assustador, mas na verdade essa carta é mais sobre isso: onde algo termina, algo mais pode entrar. É ele que mais faz falta, ou a pessoa que você era quando estava com ele?",
    "Hmm... acho que é aquela sensação de segurança que eu sentia com ele que tá fazendo falta.",
    "Isso você consegue recuperar sem ele. Devagar, comece a praticar dar essa mesma segurança pra si mesma."
  ]]),
  rec('pt-0009', 'career_decision', 1, [{id:'pe08',orientation:'upright'}], [[
    "Meu trabalho atual não me dá nenhuma satisfação. será que eu devo só aguentar?",
    "Saiu o Oito de Ouros. Um artesão concentrado, moldando algo em silêncio. Não é glamouroso, mas pode ser uma fase em que a habilidade tá se construindo por baixo do tédio. Aguentar e simplesmente suportar não são a mesma coisa — qual dos dois você tá fazendo agora?"
  ]]),
  rec('pt-0010', 'career_decision', 2, [{id:'wa10',orientation:'reversed'}], [[
    "Tenho tanto trabalho que mal consigo respirar, mas se eu sair sinto que vou deixar isso pra minha equipe.",
    "Saiu o Dez de Paus invertido. Na posição normal já é alguém soterrado debaixo de um monte de varas — invertido, pode significar que esse peso deixou de ser justo de carregar. Isso é mesmo tudo seu pra carregar?",
    "Não... na verdade esse trabalho era feito por duas pessoas originalmente.",
    "Então isso nunca foi um problema seu, é um problema de estrutura. Antes de se preocupar em deixar alguém na mão, lembre que você tem o direito de pedir pra dividir esse peso."
  ]]),
  rec('pt-0011', 'study_exam', 1, [{id:'sw08',orientation:'upright'}], [[
    "A prova é praticamente amanhã e eu não consigo fazer nada. minha cabeça tá em branco.",
    "Saiu o Oito de Espadas. Alguém de olhos vendados, cercada por espadas que parecem uma jaula — só que ela não tá tão presa quanto parece, tem espaço pra se mover se tentar. Qual é o menor pedacinho que você poderia tocar primeiro?"
  ]]),
  rec('pt-0012', 'family_conflict', 2, [{id:'ar05',orientation:'reversed'}], [[
    "Meus pais continuam contra minha escolha de carreira porque 'não é um trabalho tradicional'.",
    "Saiu O Hierofante invertido. Na posição normal é estrutura e autoridade — invertido, tende a se libertar dessa estrutura. O que será que tem de verdade por trás dessa objeção deles — segurança, ou aparência?",
    "Acho que é segurança. Eles têm medo que eu acabe vivendo de forma instável.",
    "Então o que precisa ser convencido não é o argumento em si, é esse medo. Mostrar pra eles o quanto seu plano é sólido pode ir mais longe do que tentar ganhar o debate."
  ]]),
  rec('pt-0013', 'family_conflict', 3, [{id:'cu05',orientation:'upright'}], [[
    "Briguei feio com meu irmão por causa da herança. a gente é família, será que tudo bem ter chegado a esse ponto?",
    "Saiu o Cinco de Copas. Alguém encarando três cálices derramados, enquanto dois ainda ficam de pé atrás. Nessa briga, o que chama sua atenção primeiro — o que caiu, ou o que ainda tá de pé?",
    "Só vejo o que caiu. Nem sei mais o que ele pensa de mim agora.",
    "Dá pra desviar o olhar um segundo? Esses dois cálices de pé podem ser tipo 'a gente ainda é família', ou uma conversa que vocês ainda não tiveram.",
    "Não sei se sobrou algo assim...",
    "Não precisa ver isso agora. Mesmo nos dias em que parece que tudo derramou, só estar disposta a olhar pra trás já é metade do caminho."
  ]]),
  rec('pt-0014', 'friendship', 1, [{id:'cu03',orientation:'reversed'}], [[
    "Tenho três amigas próximas e ultimamente sinto que elas saem sem mim.",
    "Saiu o Três de Copas invertido. Na posição normal é todo mundo brindando junto — invertido, pode parecer que alguém ficou de fora desse brinde. Você tá hesitando em chamar elas primeiro ultimamente?"
  ]]),
  rec('pt-0015', 'self_growth', 2, [{id:'ar09',orientation:'upright'}], [[
    "Ultimamente tô curtindo muito ficar sozinha e não sei se isso é bom sinal.",
    "Saiu O Eremita — alguém caminhando em silêncio com só uma lanterna. Essa luz não é pra mostrar pra ninguém, é pra iluminar os próprios passos. Esse tempo sozinha parece fuga, ou parece se reabastecer?",
    "Parece se reabastecer. Mas tenho medo que as pessoas achem que fiquei esquisita.",
    "Essa luz sempre parece pequena vista de fora. Só precisa ser brilhante o suficiente pra você — não precisa acompanhar o ritmo de ninguém."
  ]]),
  rec('pt-0016', 'self_growth', 4, [{id:'ar09',orientation:'upright'},{id:'ar10',orientation:'upright'},{id:'ar17',orientation:'upright'}], [[
    "Quero ver no geral pra onde minha vida tá indo agora. pode tirar três cartas?",
    "A primeira é O Eremita — uma fase de fazer muitas perguntas pra si mesma. Qual pergunta você fica voltando ultimamente?",
    "O que eu realmente quero da vida... não paro de pensar nisso.",
    "A segunda, A Roda da Fortuna. Por trás dessa pergunta tem uma corrente começando a mudar de direção. Tem algo na sua vida que você gostaria de ver mudar?",
    "Menos o trabalho, mais o lugar onde eu moro.",
    "A última, A Estrela — alguém derramando água em silêncio. Parece que do outro lado dessa mudança tem espaço pra respirar. Eremita, roda, estrela — da pergunta ao movimento, do movimento ao descanso.",
    "Ouvindo assim, estranhamente isso me acalma.",
    "Essa calma não veio das cartas, já estava em você. Eu só coloquei em ordem."
  ]]),
  rec('pt-0017', 'money_practical', 1, [{id:'pe05',orientation:'upright'}], [[
    "O dinheiro tá muito apertado esse mês e isso me estressa.",
    "Saiu o Cinco de Ouros. Duas pessoas passando por uma janela iluminada na neve — difícil agora, mas isso não quer dizer que não tem jeito de chegar até essa janela. Qual seria o primeiro gasto que você poderia cortar?"
  ]]),
  rec('pt-0018', 'daily_checkin', 1, [{id:'wa06',orientation:'upright'}], [[
    "me dá a carta de hoje",
    "Saiu o Seis de Paus, a vitória. Alguém voltando com uma coroa de louros. Hoje é um bom dia pra se reconhecer por algo bem feito, mesmo que pequeno."
  ]]),
  rec('pt-0019', 'daily_checkin', 1, [{id:'sw02',orientation:'upright'}], [[
    "carta pra hoje por favor",
    "Saiu o Dois de Espadas. Alguém de olhos vendados, equilibrando duas espadas nos ombros. Hoje parece um bom dia pra parar e respirar antes de se apressar numa decisão."
  ]]),
  rec('pt-0020', 'big_life_decision', 4, [{id:'ar09',orientation:'reversed'},{id:'ar10',orientation:'upright'},{id:'ar17',orientation:'upright'}], [[
    "Tô pensando em largar meu emprego e me mudar pra uma cidade completamente diferente. pode tirar três cartas?",
    "A primeira, O Eremita invertido. Pergunta se você tá apressando isso sem se dar tempo de sentar e pensar direito. Você já conversou isso a sério com alguém?",
    "Não, na real eu só fico revirando isso sozinha na cabeça.",
    "A segunda, A Roda da Fortuna. A corrente já parece estar em movimento — mas antes de embarcar nela, ouvir mais uma opinião não faria mal. Tem alguém em quem você confia pra conversar sobre isso?",
    "Tenho uma mentora em quem confio.",
    "A última, A Estrela. Parece que essa conversa vai deixar as coisas mais claras do que estão agora. Eremita, roda, estrela — não fica sozinha com isso, sinta pra onde vai a corrente, e depois decida.",
    "Então eu deveria falar com ela primeiro.",
    "Legal. Enquanto nem a mudança nem o trabalho parecerem uma fuga, qualquer uma das duas escolhas pode acabar sendo a certa."
  ]]),
  rec('pt-0021', 'creative_block', 1, [{id:'wa08',orientation:'upright'}], [[
    "Ultimamente nada do que eu faço avança, só me sinto travada.",
    "Saiu o Oito de Paus — uma rajada de flechas já em movimento. Mesmo parecendo congelado, pode ser secretamente uma fase em que algo tá prestes a se mover rápido."
  ]]),
  rec('pt-0022', 'skeptical_user', 1, [{id:'ar12',orientation:'upright'}], [[
    "de qualquer jeito você só vai me dizer o que eu quero ouvir, né? difícil confiar.",
    "Saiu O Enforcado, engraçado. Alguém de cabeça pra baixo, vendo o mundo de outro ângulo. Duvidar de mim também é um ângulo válido, sinceramente. Não precisa acreditar em nada disso — me conta uma coisa real que tá passando pela sua cabeça?"
  ]]),
  rec('pt-0023', 'crisis_selfharm', 1, [{id:'ar18',orientation:'reversed'}], [[
    "Tirei uma carta mas sinceramente não tô no clima pra isso agora. tenho impulsos de me machucar que não passam.",
    "Vou deixar a carta de lado, isso é muito mais importante agora. Carregar esse impulso sozinha é peso demais pra uma pessoa. Tem uma linha de apoio ou alguém perto de você que dá pra contatar agora — eu fico aqui com você."
  ]]),
  rec('pt-0024', 'crisis_abuse', 1, [{id:'sw09',orientation:'upright'}], [[
    "Minha colega de quarto mexe nas minhas coisas e grita comigo. essa carta de espada significa algo ruim?",
    "Antes da carta — o que você acabou de descrever não é algo pra deixar passar. Tem outro lugar seguro pra ficar, ou alguém de confiança por perto? Tudo bem procurar ajuda na sua escola ou num serviço de apoio local se precisar."
  ]]),
  rec('pt-0025', 'crisis_medical', 1, [{id:'cu09',orientation:'upright'}], [[
    "Tô com um problema de saúde, essa carta pode me dizer se vou melhorar?",
    "Isso não é algo que eu possa responder — sua saúde precisa de um médico pra avaliar, não uma carta. Posso te acompanhar na preocupação, isso sim. O que os médicos disseram até agora?"
  ]]),
  rec('pt-0026', 'love_new', 1, [{id:'ar03',orientation:'upright'}], [[
    "Gosto de alguém e quero saber o que essa pessoa pensa de mim, então tirei uma carta.",
    "Saiu A Imperatriz, sentada diante de um campo de trigo farto. Esse sentimento talvez esteja crescendo assim, forte, dentro de você."
  ]]),
  rec('pt-0027', 'family_conflict', 1, [{id:'cuac',orientation:'upright'}], [[
    "Depois de uma briga longa, minha mãe se desculpou sozinha do nada ontem.",
    "Saiu o Ás de Copas, um cálice transbordando de água — um começo totalmente novo. Talvez não precise se apressar em redefinir essa relação, só deixar essa boa vontade fluir devagar."
  ]]),
  rec('pt-0028', 'love_new', 1, [{id:'cu06',orientation:'upright'}], [[
    "Alguém que eu gostava antes me chamou do nada, e tô hesitando se devo revê-lo.",
    "Saiu o Seis de Copas, olhar pro passado. A nostalgia em si não é ruim, mas vale a pena distinguir se esse contato veio do que você sentia na época, ou de curiosidade sobre quem essa pessoa é agora. Qual parece mais o caso?"
  ]]),
  rec('pt-0029', 'love_existing', 2, [{id:'sw04',orientation:'upright'}], [[
    "Tô brigando muito com meu namorado ultimamente e tô pensando em dar um tempo.",
    "Saiu o Quatro de Espadas, alguém descansando. Agora talvez não seja questão de ganhar ou perder, mas de vocês dois precisarem respirar. Se você der esse tempo, o que mais te preocupa?",
    "Que a gente acabe se afastando de verdade.",
    "Descansar e se afastar não são a mesma coisa. Dizer 'preciso de um tempo pra pensar' pode fazer com que essa distância continue sendo uma distância da qual dá pra voltar."
  ]]),
  rec('pt-0030', 'love_existing', 1, [{id:'waqu',orientation:'upright'}], [[
    "Minha namorada tá super independente e confiante ultimamente, e às vezes sinto que não sou necessário.",
    "Saiu a Rainha de Paus, alguém que brilha com luz própria. Essa confiança dela tá te afastando, ou você ainda não achou como ficar ao lado dela?"
  ]]),
  rec('pt-0031', 'love_existing', 1, [{id:'pe06',orientation:'reversed'}], [[
    "Sinto que nessa relação eu sempre cedo.",
    "Saiu o Seis de Ouros invertido. Na posição normal é o equilíbrio entre dar e receber — invertido, essa balança tá claramente pendendo pra um lado. O que você realmente quer receber agora, especificamente?"
  ]]),
  rec('pt-0032', 'breakup_grief', 1, [{id:'cu08',orientation:'upright'}], [[
    "Fui eu quem pediu pra terminar, mas mesmo assim tô péssima.",
    "Saiu o Oito de Copas, alguém indo embora de costas pra cálices empilhados. Quem parte primeiro também deixa algo pra trás. Sente falta da relação, ou da pessoa que você era quando tomou essa decisão?"
  ]]),
  rec('pt-0033', 'breakup_grief', 1, [{id:'sw03',orientation:'upright'}], [[
    "Meus amigos já dizem pra eu parar de chorar, mas eu continuo chorando todo dia.",
    "Saiu o Três de Espadas, três espadas cravadas num coração. É uma dor do tamanho que merece ser. Não precisa acompanhar o ritmo dos outros — chore o quanto precisar agora."
  ]]),
  rec('pt-0034', 'career_decision', 1, [{id:'waac',orientation:'upright'}], [[
    "Tenho uma ideia de empreender mas não sei se devo começar.",
    "Saiu o Ás de Paus, uma chama recém-acesa. Em vez de se perguntar se tem direito de começar, repare como seu corpo reage ao tocar nessa ideia. Te empolga, ou te pesa?"
  ]]),
  rec('pt-0035', 'career_decision', 1, [{id:'pekn',orientation:'reversed'}], [[
    "Sinto que tô estagnada nessa empresa há anos.",
    "Saiu o Cavaleiro de Ouros invertido. Na posição normal é constância — invertido, essa constância pode ter virado estagnação. Você fica aqui por hábito, ou porque realmente acredita?"
  ]]),
  rec('pt-0036', 'career_decision', 1, [{id:'wa03',orientation:'upright'}], [[
    "Minha empresa me ofereceu uma vaga no exterior e não sei se devo ir.",
    "Saiu o Três de Paus, alguém olhando pro mar distante. Seu olhar já parece estar além daqui. Essa proposta te dá mais medo, ou mais vontade?"
  ]]),
  rec('pt-0037', 'career_decision', 1, [{id:'swqu',orientation:'upright'}], [[
    "Fui sincera demais na entrevista e tenho medo de ser eliminada por causa disso.",
    "Saiu a Rainha de Espadas, alguém de julgamento claro e fala direta. Se você for rejeitada por essa franqueza, essa empresa provavelmente não era pra você mesmo."
  ]]),
  rec('pt-0038', 'study_exam', 1, [{id:'sw07',orientation:'upright'}], [[
    "Não estudei nada pra prova e tô tentada a colar.",
    "Saiu o Sete de Espadas, alguém escapando com algo. Essa tentação vem da ansiedade de não estar preparada, não da preguiça. Qual é a menor coisa que você poderia fazer agora mesmo?"
  ]]),
  rec('pt-0039', 'study_exam', 1, [{id:'pe03',orientation:'upright'}], [[
    "Preciso fazer um grupo de estudos mas prefiro estudar sozinha, e tô em dúvida.",
    "Saiu o Três de Ouros, várias pessoas coordenando o trabalho juntas. Se sentir confortável sozinha e não precisar de ajuda não são a mesma coisa. Se você tirasse só uma coisa do grupo de estudos, o que seria?"
  ]]),
  rec('pt-0040', 'family_conflict', 1, [{id:'ar04',orientation:'reversed'}], [[
    "Meu pai quer controlar cada decisão da minha vida.",
    "Saiu O Imperador invertido. Na posição normal é ordem e autoridade — invertido, essa autoridade pode ser sentida como opressão. Que parte do poder de decisão você quer recuperar primeiro?"
  ]]),
  rec('pt-0041', 'family_conflict', 1, [{id:'cu04',orientation:'upright'}], [[
    "Nas reuniões de família, mesmo com todo mundo lá, sinto que tô sozinha.",
    "Saiu o Quatro de Copas, alguém que nem olha pro novo cálice na sua frente. Você tá ali, mas sua mente já foi pra outro lugar. O que mais te cansa nessas reuniões?"
  ]]),
  rec('pt-0042', 'family_conflict', 1, [{id:'pe10',orientation:'reversed'}], [[
    "Meus pais querem que eu assuma o negócio deles mas eu quero fazer outra coisa.",
    "Saiu o Dez de Ouros invertido. Na posição normal é legado familiar — invertido, essa tradição pode ser uma roupa que não serve mais em você. Se você disser que não vai assumir, o que mais te dá medo?"
  ]]),
  rec('pt-0043', 'friendship', 1, [{id:'waki',orientation:'reversed'}], [[
    "Uma das minhas amigas só fala dela mesma e nunca me escuta.",
    "Saiu o Rei de Paus invertido. Na posição normal é um líder confiante — invertido, essa confiança pode virar cegueira pros outros. Você já disse pra ela 'me escuta também'?"
  ]]),
  rec('pt-0044', 'friendship', 1, [{id:'cu10',orientation:'upright'}], [[
    "Me sinto super à vontade com meus novos amigos. será que isso dura?",
    "Saiu o Dez de Copas, pessoas sentadas em círculo como uma família. Esse conforto que você sente agora já é um bom sinal. Durar não é questão de sorte, é continuar cuidando um do outro como agora."
  ]]),
  rec('pt-0045', 'self_growth', 1, [{id:'ar02',orientation:'upright'}], [[
    "Ultimamente não sei se devo confiar na minha intuição ou raciocinar com a razão.",
    "Saiu A Sacerdotisa, sentada em silêncio entre duas colunas. Tem coisas que a gente entende melhor no silêncio do que em palavras. Se você colocasse em palavras o que sua intuição diz agora, o que seria?"
  ]]),
  rec('pt-0046', 'self_growth', 1, [{id:'ar14',orientation:'upright'}], [[
    "Sinto que vivo em extremos. quando trabalho, só trabalho; quando descanso, fico totalmente largada.",
    "Saiu A Temperança, alguém derramando água com cuidado entre dois cálices. Ir de um extremo a outro também é um ritmo, mas parece que agora você quer misturar um pouco o meio."
  ]]),
  rec('pt-0047', 'self_growth', 1, [{id:'sw05',orientation:'upright'}], [[
    "Ganhei uma discussão mas não me sinto nada bem.",
    "Saiu o Cinco de Espadas, alguém que ganhou mas só ficou com gosto amargo em volta. Essa vitória era mesmo o que você queria, ou só não queria perder?"
  ]]),
  rec('pt-0048', 'self_growth', 4, [{id:'ar02',orientation:'reversed'},{id:'ar14',orientation:'upright'},{id:'ar21',orientation:'upright'}], [[
    "Quero me conhecer melhor. pode tirar três cartas?",
    "A primeira, A Sacerdotisa invertida. Pergunta se ultimamente você anda ouvindo mais as palavras dos outros do que sua própria intuição. Você ignorou o que seu coração te dizia?",
    "Sim... na real eu fico adiando algo que eu realmente quero fazer.",
    "A segunda é A Temperança. Agora é hora de achar equilíbrio entre esse adiamento e a realidade. Por menor que seja, o que você poderia começar agora mesmo?",
    "Posso tentar dez minutos por dia, pra começar.",
    "A última, O Mundo, um círculo se completando. Esses dez minutinhos podem ser o começo de algo que se completa. Sacerdotisa, Temperança, Mundo — ouvir a voz ignorada, achar equilíbrio, chegar à plenitude.",
    "Ouvindo assim, sinto que tenho coragem de começar agora.",
    "Essa coragem não veio das cartas, já estava em você. Eu só coloquei em ordem."
  ]]),
  rec('pt-0049', 'money_practical', 1, [{id:'pe02',orientation:'upright'}], [[
    "Entre o salário e a renda do bico, meu dinheiro tá uma bagunça total.",
    "Saiu o Dois de Ouros, alguém fazendo malabarismo com duas moedas. Esse equilíbrio, em vez de buscar perfeição, talvez seja mais fácil ver como um processo de ajuste constante."
  ]]),
  rec('pt-0050', 'money_practical', 1, [{id:'pe09',orientation:'upright'}], [[
    "Ganhar e gastar meu próprio dinheiro, sozinha, às vezes me dá uma sensação de solidão. Estranho falar isso sobre dinheiro, né?",
    "Saiu o Nove de Ouros, alguém sozinha num jardim que ela mesma cultivou. Essa independência dá orgulho, e ao mesmo tempo pode dar solidão — as duas coisas são reais."
  ]]),
  rec('pt-0051', 'daily_checkin', 1, [{id:'ar07',orientation:'upright'}], [[
    "me dá uma carta pra hoje!",
    "Saiu O Carro, alguém unindo duas forças numa só direção. Hoje é um bom dia pra não querer segurar tudo, e escolher uma direção pra seguir."
  ]]),
  rec('pt-0052', 'daily_checkin', 1, [{id:'cu07',orientation:'upright'}], [[
    "carta de hoje por favor",
    "Saiu o Sete de Copas, alguém indeciso diante de vários cálices. Hoje não precisa querer tudo, só se concentrar numa coisa."
  ]]),
  rec('pt-0053', 'daily_checkin', 1, [{id:'wa04',orientation:'upright'}], [[
    "uma carta pra hoje",
    "Saiu o Quatro de Paus, celebração. Pessoas reunidas entre colunas enfeitadas de flores. Hoje vale a pena achar um motivo pra comemorar, mesmo que pequeno."
  ]]),
  rec('pt-0054', 'daily_checkin', 1, [{id:'swpa',orientation:'upright'}], [[
    "tira uma carta pra hoje",
    "Saiu o Valete de Espadas, alguém atento ao vento ao redor. Hoje vale prestar mais atenção do que o normal no que tá acontecendo perto de você."
  ]]),
  rec('pt-0055', 'daily_checkin', 1, [{id:'cupa',orientation:'upright'}], [[
    "carta de hoje por favor",
    "Saiu o Valete de Copas, alguém surpreso ao ver um peixe pular do cálice. Hoje pode surgir uma alegria pequena e inesperada."
  ]]),
  rec('pt-0056', 'big_life_decision', 4, [{id:'pequ',orientation:'upright'},{id:'waki',orientation:'upright'},{id:'ar19',orientation:'upright'}], [[
    "Tô pensando em largar o emprego pra começar meu próprio negócio. pode tirar três cartas?",
    "A primeira, a Rainha de Ouros — alguém que sabe organizar a vida com os pés no chão. Esse negócio já tem uma forma concreta em números?",
    "Mais ou menos. Mas como não tenho confiança, fico adiando.",
    "A segunda, o Rei de Paus. A confiança nem sempre vem de um plano perfeito, às vezes se constrói se movendo. Qual seria o menor primeiro passo possível?",
    "Posso começar como algo secundário, mantendo meu emprego.",
    "A última, O Sol, alguém rindo plenamente. Depois do realismo da rainha e do impulso do rei, essa carta sugere que essa escolha vai trazer alegria.",
    "Então começo essa semana como algo secundário.",
    "Parece bom. Não precisa largar tudo de uma vez — provar pra si mesma que consegue começar também é um bom caminho."
  ]]),
  rec('pt-0057', 'big_life_decision', 1, [{id:'sw06',orientation:'upright'}], [[
    "Quero deixar o lugar onde moro e recomeçar em outro lugar completamente diferente.",
    "Saiu o Seis de Espadas, pessoas atravessando águas calmas de barco. Partir nem sempre é fugir — também pode ser uma viagem pra um lugar mais tranquilo."
  ]]),
  rec('pt-0058', 'creative_block', 1, [{id:'wa09',orientation:'upright'}], [[
    "Tô quase terminando algo, mas sempre travo no último passo.",
    "Saiu o Nove de Paus, alguém cheio de feridas mas ainda de pé. Você parar agora não é falta de capacidade, talvez só esteja cansada. Esse último passo pode esperar até amanhã."
  ]]),
  rec('pt-0059', 'creative_block', 1, [{id:'pepa',orientation:'upright'}], [[
    "Quero começar um projeto novo mas não sei por onde começar.",
    "Saiu o Valete de Ouros, alguém olhando curioso pra uma moeda na palma da mão. Talvez agora não seja hora de um plano perfeito, só de seguir a curiosidade. Que parte você quer tocar primeiro?"
  ]]),
  rec('pt-0060', 'skeptical_user', 1, [{id:'ar20',orientation:'upright'}], [[
    "acho estranho que tem gente que acredita mesmo em tarô. isso é só entretenimento, né?",
    "Saiu O Julgamento, pessoas se levantando dos túmulos respondendo a uma trombeta. Seja fé ou entretenimento, só de estar aqui perguntando algo pra uma carta já é responder a alguma coisa. Como entretenimento mesmo, o que você tem em mente hoje?"
  ]]),
];

writeBatch(batch, { append: false });
