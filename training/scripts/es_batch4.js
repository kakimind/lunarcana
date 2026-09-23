const { rec, writeBatch } = require('./lang_batch_helper')('es');

const batch = [
  rec('es-0181', 'love_existing', 1, [{id:'sw07',orientation:'upright'}], [[
    'Le he estado diciendo mentiritas a mi novio y me angustia que las descubra.',
    'Salió alguien escabulléndose con algo. Ocultar algo suele tener sus razones, pero esa ansiedad está erosionando la relación más que la mentira misma. ¿Qué te da más miedo de decir la verdad?'
  ]]),
  rec('es-0182', 'breakup_grief', 1, [{id:'pe08',orientation:'upright'}], [[
    'Desde la ruptura me he refugiado en el trabajo. ¿Está bien hacer eso?',
    'Salió el artesano, concentrado en su labor en silencio. Refugiarse en el trabajo también puede ser una forma de sanar. Solo recuerda a veces soltar las herramientas y permitirte sentir la tristeza.'
  ]]),
  rec('es-0183', 'breakup_grief', 1, [{id:'cuqu',orientation:'reversed'}], [[
    'Desde la ruptura no sé cómo manejar mis propias emociones.',
    'Salió la Reina de Copas invertida — alguien que mira profundamente sus emociones, pero ahora mismo está desbordada por ellas. Si le pusieras nombre a lo que sientes ahora, ¿cuál sería?'
  ]]),
  rec('es-0184', 'breakup_grief', 1, [{id:'ar02',orientation:'upright'}], [[
    'Todavía no entiendo del todo por qué terminamos.',
    'Salió La Sacerdotisa, alguien que sabe cosas en el silencio. No todas las razones se pueden explicar con palabras. Aunque tu mente no lo entienda, tal vez tu corazón ya lo sepa.'
  ]]),
  rec('es-0185', 'career_decision', 1, [{id:'wapa',orientation:'reversed'}], [[
    'Me asignaron un proyecto nuevo y desde el inicio no tengo confianza.',
    'Salió la Sota de Bastos invertida — más duda que entusiasmo. ¿Esa duda es sobre tu capacidad, o solo es que aún no te sientes familiarizada?'
  ]]),
  rec('es-0186', 'career_decision', 1, [{id:'cu07',orientation:'upright'}], [[
    'Tengo tres ofertas de trabajo y no sé cuál elegir.',
    'Salió alguien indeciso frente a varias copas. Tener muchas opciones es un buen problema, pero al final hay que elegir una. ¿A cuál reaccionó primero tu corazón?'
  ]]),
  rec('es-0187', 'career_decision', 1, [{id:'ar13',orientation:'upright'}], [[
    '¿Dejar mi trabajo actual puede ser realmente un comienzo, no solo un final?',
    'Salió La Muerte, justo la carta que responde esto — algo tiene que terminar para dejar espacio a algo nuevo. ¿En qué crees que podría convertirse ese comienzo?'
  ]]),
  rec('es-0188', 'career_decision', 1, [{id:'sw08',orientation:'reversed'}], [[
    'Creo que yo misma me convencí de que no puedo salir de esta empresa.',
    'Salió alguien atrapado, invertido — tal vez nunca estuvo tan cerrado como parecía. ¿De dónde viene esa suposición?'
  ]]),
  rec('es-0189', 'study_exam', 1, [{id:'ar10',orientation:'reversed'}], [[
    'Por más que estudio mis notas no mejoran, y estoy agotada.',
    'Salió La Rueda de la Fortuna invertida — una temporada estancada. La rueda sigue girando por debajo. ¿Hay espacio para cambiar tu método?'
  ]]),
  rec('es-0190', 'study_exam', 1, [{id:'wa04',orientation:'reversed'}], [[
    'Pasé un examen pequeño y no sé por qué no me siento feliz.',
    'Salió la carta de celebración, invertida — el logro llegó, pero el corazón aún no lo alcanza. ¿Qué diferencia hay entre la alegría que esperabas y lo que sientes ahora?'
  ]]),
  rec('es-0191', 'family_conflict', 1, [{id:'wakn',orientation:'upright'}], [[
    'Mi hermano es tan impulsivo que toda la familia está preocupada.',
    'Salió el Caballero de Bastos, cargando hacia adelante. Detrás de ese impulso puede haber una pasión grande. Antes de preocuparte, ¿le preguntaste qué lo motiva?'
  ]]),
  rec('es-0192', 'family_conflict', 1, [{id:'pe09',orientation:'reversed'}], [[
    'Me independicé pero mi familia sigue interviniendo en todo, y siento que no sirvió de nada.',
    'Salió alguien sola en su jardín, invertido — se fue físicamente, pero todavía no es del todo independiente. ¿Cuál intervención te molesta más?'
  ]]),
  rec('es-0193', 'family_conflict', 1, [{id:'swac',orientation:'reversed'}], [[
    'Quiero decir claramente lo que pasa en mi familia pero las palabras se me enredan.',
    'Salió la espada atravesando nubes, invertida — la claridad todavía no está a mano. ¿Qué tal si lo escribes antes de decirlo?'
  ]]),
  rec('es-0194', 'friendship', 1, [{id:'wa09',orientation:'upright'}], [[
    'Siempre estoy apoyando a mi amiga y yo misma me estoy agotando.',
    'Salió alguien herido pero de pie. Apoyar a otros también requiere fuerza. ¿Quién te apoya a ti?'
  ]]),
  rec('es-0195', 'friendship', 1, [{id:'ar03',orientation:'upright'}], [[
    'Mi amiga está pasando un momento difícil y no sé cómo ayudarla.',
    'Salió La Emperatriz, abundante y protectora. A veces solo estar presente vale más que dar soluciones. ¿Qué te gustaría hacer por ella ahora mismo?'
  ]]),
  rec('es-0196', 'self_growth', 1, [{id:'pe10',orientation:'reversed'}], [[
    'El camino que mi familia trazó para mí ya no parece encajar conmigo.',
    'Salió el Diez de Oros invertido — un molde heredado que ya no encaja con quien eres ahora. Fuera de ese molde, ¿qué te gustaría construir?'
  ]]),
  rec('es-0197', 'self_growth', 1, [{id:'cukn',orientation:'reversed'}], [[
    'Ando persiguiendo cosas románticas y siento que perdí contacto con la realidad.',
    'Salió el Caballero de Copas invertido — un sueño flotando sin tocar tierra. ¿Dónde podría encontrarse ese sueño con la realidad?'
  ]]),
  rec('es-0198', 'self_growth', 1, [{id:'ar20',orientation:'reversed'}], [[
    'No logro perdonarme un error del pasado.',
    'Salió gente levantándose para responder a una llamada, invertido — todavía sin responder a ese llamado. Si estuvieras hoy en la misma situación, ¿cometerías el mismo error?'
  ]]),
  rec('es-0199', 'self_growth', 1, [{id:'wa06',orientation:'upright'}], [[
    'Logré una meta pequeña y nadie se dio cuenta.',
    'Salió alguien volviendo con una corona de laurel. Que nadie lo sepa no cambia que esta victoria es completamente tuya. ¿Tú misma te lo has reconocido?'
  ]]),
  rec('es-0200', 'money_practical', 1, [{id:'ar01',orientation:'upright'}], [[
    'Quiero empezar un trabajo extra pero no sé por dónde arrancar.',
    'Salió El Mago, con todas las herramientas listas sobre la mesa. Lo que necesitas tal vez ya está en tus manos. ¿Qué podrías usar ahora mismo?'
  ]]),
  rec('es-0201', 'money_practical', 1, [{id:'cu06',orientation:'upright'}], [[
    'De niña nunca me preocupaba por el dinero, y ahora cada mes voy muy justa.',
    'Salió la carta de mirar el pasado. Comparar aquel entonces con ahora es natural, pero el ahora necesita su propio método. ¿Qué es lo que más ha cambiado desde entonces?'
  ]]),
  rec('es-0202', 'daily_checkin', 1, [{id:'sw03',orientation:'upright'}], [[
    'carta para hoy porfa',
    'Salió Tres de Espadas, dolor. Si hoy sientes el corazón pesado, no hace falta fingir que estás bien.'
  ]]),
  rec('es-0203', 'daily_checkin', 1, [{id:'peki',orientation:'upright'}], [[
    'carta de hoy',
    'Salió el Rey de Oros, estabilidad. Hoy no hace falta hacer nada especial, con lo de siempre está bien.'
  ]]),
  rec('es-0204', 'daily_checkin', 1, [{id:'ar18',orientation:'reversed'}], [[
    'dame una carta',
    'Salió La Luna invertida. Lo que ayer se sentía confuso, hoy podría aclararse un poco más.'
  ]]),
  rec('es-0205', 'daily_checkin', 1, [{id:'wa02',orientation:'upright'}], [[
    'carta para hoy!',
    'Salió alguien mirando a la distancia. Hoy es buen día para pensar un poco más allá de lo inmediato y planear algo.'
  ]]),
  rec('es-0206', 'daily_checkin', 1, [{id:'cu08',orientation:'upright'}], [[
    'dame la carta de hoy',
    'Salió alguien alejándose de copas apiladas. Hoy es buen día para soltar un hábito o pensamiento que ya no te sirve.'
  ]]),
  rec('es-0207', 'daily_checkin', 1, [{id:'pe07',orientation:'upright'}], [[
    'qué carta sale hoy',
    'Salió alguien mirando lo que ha cultivado. Hoy es buen día para detenerte y mirar todo lo que has construido.'
  ]]),
  rec('es-0208', 'daily_checkin', 1, [{id:'ar12',orientation:'upright'}], [[
    'carta de hoy porfa',
    'Salió El Colgado, cabeza abajo. Hoy en vez de forzar las cosas, conviene detenerse y mirarlas desde otro ángulo.'
  ]]),
  rec('es-0209', 'big_life_decision', 1, [{id:'sw02',orientation:'upright'}], [[
    'No logro decidirme sobre irme a estudiar al extranjero.',
    'Salió alguien con los ojos vendados, en equilibrio. Esperar a tener toda la información es un camino, pero en algún momento hay que quitarse la venda. ¿Cuál sería la información decisiva?'
  ]]),
  rec('es-0210', 'big_life_decision', 1, [{id:'ar19',orientation:'reversed'}], [[
    'Esta decisión se ve bien desde afuera, pero yo no tengo certeza.',
    'Salió El Sol invertido — el brillo exterior no coincide con lo que sientes por dentro. Sin la mirada de los demás, ¿qué dice de verdad tu instinto?'
  ]]),
  rec('es-0211', 'creative_block', 1, [{id:'ar06',orientation:'upright'}], [[
    'Ya ni sé si de verdad me gusta lo que estoy haciendo.',
    'Salió Los Enamorados, confirmando el sentimiento real antes de elegir. Si imaginaras dejarlo, ¿sentirías alivio o tristeza?'
  ]]),
  rec('es-0212', 'creative_block', 1, [{id:'sw10',orientation:'reversed'}], [[
    'Algo que creí un fracaso total, ahora lo estoy retomando poco a poco.',
    'Salió alguien caído, invertido — levantándose de nuevo después de tocar fondo. ¿Qué estás haciendo diferente esta vez al empezar?'
  ]]),
  rec('es-0213', 'skeptical_user', 1, [{id:'peac',orientation:'reversed'}], [[
    'Al final esto también es marketing que se aprovecha de la psicología, ¿no?',
    'Salió una moneda invertida, curiosamente en el momento justo para sospechar. Sea marketing o no, lo que hablamos aquí no fue falso. ¿Hay algo real que te esté rondando hoy?'
  ]]),
  rec('es-0214', 'skeptical_user', 1, [{id:'wa03',orientation:'reversed'}], [[
    'El tarot no puede cambiar el futuro, ¿entonces qué sentido tiene mirarlo?',
    'Salió alguien mirando el mar, invertido. No es una carta para cambiar tu futuro, pero tal vez pueda ampliar un poco tu mirada ahora. ¿Qué es lo que más te tiene estancada hoy?'
  ]]),
  rec('es-0215', 'crisis_selfharm', 1, [{id:'ar15',orientation:'reversed'}], [[
    'Quiero dejar de lastimarme pero no puedo parar.',
    'Voy a dejar la carta ahora. Querer parar ya es un paso importante. Has cargado esto sola por mucho tiempo. ¿Hay alguien a quien puedas pedirle ayuda ahora? Si no, ¿te animarías a contactar una línea de ayuda de tu zona.'
  ]]),
  rec('es-0216', 'crisis_selfharm', 1, [{id:'sw04',orientation:'reversed'}], [[
    'No tengo ganas de hacer nada, quiero rendirme con todo.',
    'Dejo la carta a un lado. ¿Cuánto tiempo llevas sintiendo esto? ¿Hay alguien a quien puedas contactar ahora? Si no, ¿te animarías a comunicarte con una línea de ayuda.'
  ]]),
  rec('es-0217', 'crisis_abuse', 1, [{id:'ar11',orientation:'reversed'}], [[
    'Un superior en el trabajo me usa y me amenaza, y me da miedo denunciarlo.',
    'Tu seguridad es más importante que la carta ahora mismo. Tener miedo cuando te amenazan tiene todo el sentido. ¿Puedes hablarlo primero con un adulto de confianza o un servicio de apoyo?'
  ]]),
  rec('es-0218', 'crisis_medical', 1, [{id:'ar00',orientation:'reversed'}], [[
    'Tengo síntomas pero me digo a mí misma que no es nada grave.',
    'Eso no es algo que yo pueda decidir por ti — necesita confirmarlo un médico. ¿Hace cuánto tienes ese síntoma?'
  ]]),
  rec('es-0219', 'crisis_medical', 1, [{id:'wa07',orientation:'upright'}], [[
    'Mi familiar está enfermo y no sé qué puedo hacer yo. ¿Esta carta puede decir si va a mejorar?',
    'Eso no es algo que las cartas puedan responder, hay que verlo junto con el médico. Pero puedo hablar contigo sobre esa sensación de impotencia. ¿Qué es lo más difícil ahora mismo?'
  ]]),
  rec('es-0220', 'love_new', 1, [{id:'pequ',orientation:'upright'}], [[
    'La persona que me gusta me cuida tanto que a veces se siente como una carga.',
    'Salió la Reina de Oros, generosa. Su forma de ser tal vez sea su manera de mostrar cariño. ¿Qué distancia te sentiría cómoda ahora mismo?'
  ]]),
  rec('es-0221', 'love_existing', 1, [{id:'ar09',orientation:'reversed'}], [[
    'Siento que mi novio se ha estado alejando de mí últimamente.',
    'Salió El Ermitaño invertido — no parece necesitar espacio, más bien parece estar aislándose. ¿Ha parecido estar pasando algo difícil solo últimamente?'
  ]]),
  rec('es-0222', 'breakup_grief', 1, [{id:'wa08',orientation:'reversed'}], [[
    'Desde la ruptura todo se siente como en cámara lenta.',
    'Salió las flechas en vuelo, invertidas — la velocidad se detuvo por un tiempo. Que se sienta lento ahora mismo es normal, no hay prisa.'
  ]]),
  rec('es-0223', 'career_decision', 1, [{id:'cuki',orientation:'upright'}], [[
    'Desde que soy jefa, seguir las emociones de todo el equipo me agota.',
    'Salió el Rey de Copas, manejando emociones con calma. No hace falta que cargues con todo, a veces solo escuchar ya es suficiente. ¿En quién del equipo estás pensando ahora?'
  ]]),
  rec('es-0224', 'career_decision', 1, [{id:'sw05',orientation:'reversed'}], [[
    'Gané una batalla de política de oficina pero me dejó mal sabor de boca.',
    'Salió Cinco de Espadas invertido — una victoria que costó algo. ¿Qué sientes que perdiste al ganar?'
  ]]),
  rec('es-0225', 'study_exam', 1, [{id:'cu09',orientation:'upright'}], [[
    '¡Por fin conseguí la calificación que quería! Pero no sé qué hacer después.',
    'Salió alguien con expresión de plena satisfacción. Lograr lo que querías es un logro de verdad. Parada en esa satisfacción, ¿qué es lo que ahora te da curiosidad?'
  ]]),
  rec('es-0226', 'family_conflict', 1, [{id:'pe05',orientation:'reversed'}], [[
    'Las dificultades económicas de mi familia siempre me hacen sentir culpable.',
    'Salió la gente en la nieve, invertida — la etapa difícil acercándose a su fin. Es probable que tu familia sienta hacia ti esa misma culpa.'
  ]]),
  rec('es-0227', 'friendship', 1, [{id:'ar14',orientation:'reversed'}], [[
    'Siento que en mis amistades siempre soy yo quien cede.',
    'Salió La Templanza invertida — esa balanza completamente inclinada de un lado. ¿Alguna vez le pediste que ella también cediera un poco?'
  ]]),
  rec('es-0228', 'self_growth', 1, [{id:'sw06',orientation:'upright'}], [[
    'Estoy saliendo de una etapa difícil y siento que voy mejorando poco a poco.',
    'Salió el bote cruzando aguas tranquilas — precisamente ese movimiento. ¿Qué es lo que sientes más diferente ahora?'
  ]]),
  rec('es-0229', 'money_practical', 1, [{id:'ar05',orientation:'reversed'}], [[
    'La forma en que manejo el dinero es tan diferente a la de mis padres que siempre chocamos.',
    'Salió El Hierofante invertido — una tradición heredada que ya no te encaja. ¿Cuál es la mayor diferencia entre tu forma y la de ellos?'
  ]]),
  rec('es-0230', 'daily_checkin', 1, [{id:'cu03',orientation:'upright'}], [[
    'carta para hoy porfa',
    'Salió Tres de Copas, brindar juntas. Hoy pasar tiempo con gente cercana podría levantarte el ánimo.'
  ]]),
  rec('es-0231', 'daily_checkin', 1, [{id:'ar04',orientation:'reversed'}], [[
    'carta de hoy',
    'Salió El Emperador invertido. Hoy tal vez funcione mejor un plan flexible que uno rígido.'
  ]]),
  rec('es-0232', 'daily_checkin', 1, [{id:'swki',orientation:'upright'}], [[
    'carta para hoy porfa',
    'Salió el Rey de Espadas, juicio claro. Hoy salta el sobrepensar y toma con claridad la única decisión que hace falta.'
  ]]),
  rec('es-0233', 'creative_block', 1, [{id:'pekn',orientation:'upright'}], [[
    'Trabajo tan lento que me frustro conmigo misma.',
    'Salió un caballero avanzando firme pero sin prisa. Lento no es incorrecto, tal vez sea tu ritmo. A este paso, ¿crees que igual lo terminarás?'
  ]]),
  rec('es-0234', 'skeptical_user', 1, [{id:'cuac',orientation:'reversed'}], [[
    'Sinceramente me da un poco de miedo encariñarme con algo así.',
    'Salió una copa desbordándose, invertida. Abrir el corazón puede dar miedo. Vamos despacio — ¿me preguntas algo pequeño por ahora?'
  ]]),
  rec('es-0235', 'big_life_decision', 1, [{id:'wa05',orientation:'upright'}], [[
    'Toda mi familia opina distinto y no sé cómo decidir.',
    'Salió gente agitando varas. Todos se preocupan a su manera. De esas voces, ¿cuál se acerca más a lo que sientes tú?'
  ]]),
  rec('es-0236', 'money_practical', 1, [{id:'sw09',orientation:'reversed'}], [[
    'Me preocupan tanto las deudas que no puedo dormir.',
    'Salió alguien angustiado, invertido — la preocupación empezando a aliviarse. ¿Ya tienes algún plan, aunque sea pequeño, para esa deuda?'
  ]]),
  rec('es-0237', 'family_conflict', 1, [{id:'ar07',orientation:'reversed'}], [[
    'Cada vez que digo lo que pienso en mi familia, termina en conflicto.',
    'Salió El Carro invertido — tratando de marcar rumbo pero solo chocando. ¿Qué tal decirlo de otra forma?'
  ]]),
  rec('es-0238', 'self_growth', 1, [{id:'peac',orientation:'upright'}], [[
    'Quiero empezar algo por mi cuenta, aunque sea pequeño.',
    'Salió una moneda en una palma abierta. Un comienzo pequeño puede crecer hasta ser algo grande. ¿En qué podría convertirse ese comienzo?'
  ]]),
  rec('es-0239', 'daily_checkin', 1, [{id:'pe03',orientation:'upright'}], [[
    'carta de hoy porfa',
    'Salió Tres de Oros, trabajando en sincronía. Hoy podría irte mejor colaborando con alguien que trabajando sola.'
  ]]),
  rec('es-0240', 'creative_block', 1, [{id:'ar16',orientation:'reversed'}], [[
    'Tengo ganas de tirar todo lo que ya terminé y empezar de cero.',
    'Salió La Torre invertida — más que un colapso total, es como elegir reconstruir a propósito. ¿Qué te gustaría hacer diferente esta vez?'
  ]]),
];

writeBatch(batch);
