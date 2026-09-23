const { rec, writeBatch } = require('./lang_batch_helper')('es');

const batch = [
  rec('es-0121', 'love_existing', 2, [{id:'wa09',orientation:'reversed'}], [[
    'Esta relación solo me agota, no siento que me recupere nunca.',
    'Salió alguien lleno de heridas pero todavía resistiendo, invertido. Esa fuerza para aguantar puede estar por acabarse. ¿Qué es lo que más te agota de esta relación?',
    'Siempre soy yo quien pide perdón primero, siempre soy yo quien cede.',
    'Entonces lo que necesitas no es seguir aguantando, sino decirle exactamente ese patrón, tal como es.'
  ]]),
  rec('es-0122', 'love_existing', 1, [{id:'pe05',orientation:'reversed'}], [[
    'Pasamos por un momento difícil juntos y siento que nos acercó más.',
    'Salió las dos personas en la nieve, invertidas — empezando a cruzar esa puerta. ¿Qué les dejó a ustedes el haber pasado juntos por ese momento?'
  ]]),
  rec('es-0123', 'breakup_grief', 1, [{id:'ar13',orientation:'reversed'}], [[
    'Pasó mucho tiempo desde la ruptura y todavía no me siento tranquila.',
    'Salió La Muerte invertida — algo que debía terminar todavía no terminó del todo. ¿Lo que no ha terminado es tu corazón, o el contacto entre ustedes?'
  ]]),
  rec('es-0124', 'breakup_grief', 1, [{id:'cu06',orientation:'reversed'}], [[
    'Solo recuerdo los buenos momentos con mi ex.',
    'Salió la carta de mirar el pasado, invertida. La nostalgia está embelleciendo el recuerdo. ¿Puedes pensar en un momento que no fue tan bueno?'
  ]]),
  rec('es-0125', 'breakup_grief', 1, [{id:'sw04',orientation:'reversed'}], [[
    'Pensé que ya estaba mejor, pero de repente volví a sentirme mal.',
    'Salió alguien descansando, invertido. La recuperación no es una línea recta, va subiendo y bajando. ¿Qué te trajo ese recuerdo hoy?'
  ]]),
  rec('es-0126', 'breakup_grief', 1, [{id:'ar18',orientation:'upright'}], [[
    'Desde la ruptura solo me imagino los peores escenarios.',
    'Salió La Luna, un camino apenas visible bajo su luz. En la oscuridad las sombras siempre parecen más grandes de lo que son. ¿Tienes forma de confirmar eso, o es solo algo que inventó tu mente?'
  ]]),
  rec('es-0127', 'career_decision', 1, [{id:'peac',orientation:'upright'}], [[
    'Me surgió una oportunidad laboral nueva pero me da miedo dejar la estabilidad que tengo.',
    'Salió el As de Oros, una moneda pequeña como una semilla. ¿Qué tan satisfecha te ha tenido esa estabilidad últimamente?'
  ]]),
  rec('es-0128', 'career_decision', 1, [{id:'swkn',orientation:'reversed'}], [[
    'Renuncié demasiado apresuradamente y ahora me arrepiento.',
    'Salió el Caballero de Espadas invertido. La velocidad pasó por encima del juicio. ¿Hay algo que todavía puedas revertir, o solo queda aprender para la próxima?'
  ]]),
  rec('es-0129', 'career_decision', 1, [{id:'ar03',orientation:'reversed'}], [[
    'Tengo demasiado trabajo y no me sale nada creativo.',
    'Salió La Emperatriz invertida. Sin espacio para llenarte, cuesta generar algo nuevo. ¿Cuándo fue la última vez que sentiste un respiro?'
  ]]),
  rec('es-0130', 'career_decision', 1, [{id:'cu04',orientation:'reversed'}], [[
    'Siempre dejo pasar las oportunidades que me da la empresa sin interés.',
    'Salió alguien que ni siquiera mira, invertido — es hora de despertar de esa indiferencia. De las oportunidades que dejaste pasar, ¿cuál fue la que más lamentas?'
  ]]),
  rec('es-0131', 'career_decision', 1, [{id:'pe07',orientation:'upright'}], [[
    'Llevo años en un proyecto que no muestra resultados y no sé si seguir.',
    'Salió alguien mirando lo que ha cultivado. Que no se vea no significa que no esté creciendo. ¿Con qué criterio decidirías seguir o parar?'
  ]]),
  rec('es-0132', 'career_decision', 1, [{id:'ar02',orientation:'reversed'}], [[
    'Confié en todo lo que decían mis compañeros y ahora me siento traicionada.',
    'Salió La Sacerdotisa invertida. De frente es intuición — invertida, es haberla ignorado. Siendo sincera, ¿algo se sintió raro desde el principio?'
  ]]),
  rec('es-0133', 'study_exam', 1, [{id:'swpa',orientation:'reversed'}], [[
    'Digo que estoy estudiando pero solo pienso en otra cosa.',
    'Salió la Sota de Espadas invertida. La alerta se dispersó en distracción. ¿Qué es lo que más te distrae ahora mismo?'
  ]]),
  rec('es-0134', 'study_exam', 1, [{id:'pe10',orientation:'upright'}], [[
    'Siento que este examen va a definir todo mi futuro, y la presión es enorme.',
    'Salió el Diez de Oros, legado. En una visión amplia, este examen también es solo una parte de un camino largo. ¿De verdad todo se decide por este único examen?'
  ]]),
  rec('es-0135', 'study_exam', 1, [{id:'ar01',orientation:'reversed'}], [[
    'Sé la materia pero no logro aplicarla bien en el examen.',
    'Salió El Mago invertido. Las herramientas están ahí, solo falta soltura para usarlas. ¿Cuántas veces has practicado en condiciones similares a las reales?'
  ]]),
  rec('es-0136', 'family_conflict', 1, [{id:'waac',orientation:'reversed'}], [[
    'Dije que quería independizarme y se armó un lío enorme en casa.',
    'Salió el As de Bastos invertido — el deseo de empezar aplastado por la resistencia. ¿Esa oposición viene de la preocupación, o de la tristeza de perderte?'
  ]]),
  rec('es-0137', 'family_conflict', 1, [{id:'cuki',orientation:'upright'}], [[
    'No me puedo comunicar con mi papá y quiero rendirme.',
    'Salió el Rey de Copas, alguien que maneja bien sus emociones. Antes de rendirte, ¿hay espacio para acercarte de otra forma, no la de él sino la tuya?'
  ]]),
  rec('es-0138', 'family_conflict', 1, [{id:'sw10',orientation:'upright'}], [[
    'Tuve una pelea enorme con mi mamá y siento que esto realmente se acabó.',
    'Salió alguien tirado en el suelo. Se ve terrible, pero también es el fondo desde el que ya no se puede caer más. Si reconstruyeras esta relación, ¿qué sería lo primero que cambiarías?'
  ]]),
  rec('es-0139', 'family_conflict', 1, [{id:'wa03',orientation:'reversed'}], [[
    'Mi familia no confía nada en mis planes para el futuro.',
    'Salió alguien mirando el mar, invertido. La visión es amplia, pero todavía no lo suficientemente concreta como para convencer a los que te rodean. ¿Qué tan específico les has explicado el plan?'
  ]]),
  rec('es-0140', 'friendship', 1, [{id:'cu08',orientation:'reversed'}], [[
    'Llevo mucho tiempo dudando si dejar una amistad de años.',
    'Salió alguien a punto de irse, invertido — sabes que deberías, pero todavía dudas. ¿Qué es lo que todavía no te deja soltar?'
  ]]),
  rec('es-0141', 'friendship', 1, [{id:'ar19',orientation:'upright'}], [[
    'Vi a una amiga después de mucho tiempo y nos reímos como antes.',
    'Salió El Sol, brillante. Esa comodidad no se desvaneció con el tiempo, era real. ¿Le dijiste hoy lo agradecida que estás?'
  ]]),
  rec('es-0142', 'friendship', 1, [{id:'pe06',orientation:'upright'}], [[
    'Siempre ayudo a mi amiga cuando lo necesita, pero cuando yo lo necesito, nunca me ayudan.',
    'Salió la carta del equilibrio entre dar y recibir. Esa balanza está completamente inclinada hacia un lado — ¿ella se da cuenta de eso?'
  ]]),
  rec('es-0143', 'self_growth', 1, [{id:'ar00',orientation:'upright'}], [[
    'Me da vergüenza empezar algo nuevo a esta edad.',
    'Salió El Loco, dando un paso sin miedo al borde de un precipicio. Esta carta no conoce la edad. Esa vergüenza, ¿te está deteniendo, o solo va caminando al lado tuyo?'
  ]]),
  rec('es-0144', 'self_growth', 1, [{id:'sw03',orientation:'reversed'}], [[
    'Siento que una herida vieja está sanando poco a poco.',
    'Salió las espadas clavadas en el corazón, invertidas — el dolor saliendo lentamente. ¿Con qué frecuencia piensas en eso ahora?'
  ]]),
  rec('es-0145', 'self_growth', 1, [{id:'cupa',orientation:'reversed'}], [[
    'No soy buena expresando emociones, siempre me las guardo.',
    'Salió la Sota de Copas invertida — la emoción de sorpresa encerrada, sin poder salir. Si se lo dijeras a una sola persona, ¿a quién le dirías?'
  ]]),
  rec('es-0146', 'self_growth', 1, [{id:'wa07',orientation:'reversed'}], [[
    'Llevo tanto tiempo defendiendo mi postura que ya estoy agotada.',
    'Salió alguien defendiéndose solo, invertido — tal vez es hora de soltar esa defensa. ¿Ese lugar realmente sigue necesitando que lo defiendas?'
  ]]),
  rec('es-0147', 'self_growth', 1, [{id:'pequ',orientation:'reversed'}], [[
    'Cuido de todos menos de mí misma.',
    'Salió la Reina de Oros invertida — dando tanto que ya se quedó vacía por dentro. ¿Qué podrías hacer hoy solo por ti?'
  ]]),
  rec('es-0148', 'money_practical', 1, [{id:'wa06',orientation:'reversed'}], [[
    'Perdí dinero en una inversión y mi confianza se derrumbó.',
    'Salió la carta de la victoria, invertida — esta vez no ganaste, pero eso no significa que no vaya a haber una próxima. ¿Qué aprendiste de esta pérdida?'
  ]]),
  rec('es-0149', 'money_practical', 1, [{id:'cu09',orientation:'reversed'}], [[
    'Tengo todo lo que quería y aun así no me siento satisfecha.',
    'Salió alguien con expresión satisfecha, invertido. Lo que llenaste por fuera puede no ser lo que tu corazón realmente quería. ¿Era eso lo que querías, o era otra cosa?'
  ]]),
  rec('es-0150', 'money_practical', 1, [{id:'ar10',orientation:'upright'}], [[
    'Necesito de repente una gran cantidad de dinero y estoy desbordada.',
    'Salió La Rueda de la Fortuna, un giro inesperado llegando rápido. ¿Cuántas opciones se te ocurren que podrías usar ahora mismo?'
  ]]),
  rec('es-0151', 'daily_checkin', 1, [{id:'ar05',orientation:'upright'}], [[
    'carta para hoy porfa',
    'Salió El Hierofante. Hoy es buen día para seguir una forma conocida o un consejo de confianza.'
  ]]),
  rec('es-0152', 'daily_checkin', 1, [{id:'cu02',orientation:'upright'}], [[
    'carta de hoy',
    'Salió Dos de Copas, frente a frente. Hoy es un buen día para tener una conversación sincera con alguien.'
  ]]),
  rec('es-0153', 'daily_checkin', 1, [{id:'sw05',orientation:'upright'}], [[
    'qué carta me toca hoy',
    'Salió Cinco de Espadas. Hoy no hace falta ganar todo, deja pasar las pequeñas discusiones.'
  ]]),
  rec('es-0154', 'daily_checkin', 1, [{id:'pe09',orientation:'upright'}], [[
    'una carta porfa',
    'Salió Nueve de Oros. Hoy es un buen día para disfrutar tu propia compañía y sentirte bien contigo misma.'
  ]]),
  rec('es-0155', 'daily_checkin', 1, [{id:'wa04',orientation:'upright'}], [[
    'carta para hoy!',
    'Salió Cuatro de Bastos, celebración. Hoy vale la pena reconocerte, aunque sea algo pequeño.'
  ]]),
  rec('es-0156', 'daily_checkin', 1, [{id:'sw02',orientation:'reversed'}], [[
    'carta de hoy porfa',
    'Salió Dos de Espadas invertido. Si hay una decisión que has evitado, hoy es buen día para quitarte la venda.'
  ]]),
  rec('es-0157', 'daily_checkin', 1, [{id:'cu10',orientation:'upright'}], [[
    'dame una carta',
    'Salió Diez de Copas, unión. Hoy pasar tiempo con quienes te quieren te puede dar más estabilidad.'
  ]]),
  rec('es-0158', 'daily_checkin', 1, [{id:'wa10',orientation:'upright'}], [[
    'qué carta hay hoy',
    'Salió Diez de Bastos, cargando un peso. Hoy está bien soltar algo, o pedir que alguien te ayude a cargarlo.'
  ]]),
  rec('es-0159', 'big_life_decision', 1, [{id:'ar09',orientation:'upright'}], [[
    'Estoy pensando seriamente en dejar la universidad para tomar otro camino.',
    'Salió El Ermitaño, alguien caminando solo con una lámpara. Esta es una pregunta que nadie puede responder por ti. ¿Cuánto tiempo llevas pensando en ese otro camino?'
  ]]),
  rec('es-0160', 'big_life_decision', 1, [{id:'ar16',orientation:'upright'}], [[
    'Mi empresa cerró de repente y se me vinieron abajo todos mis planes.',
    'Salió La Torre, derrumbándose. Parece un colapso repentino, pero donde caen las viejas estructuras suele haber espacio para construir algo nuevo. ¿Qué es lo primero que podrías tomar ahora mismo?'
  ]]),
  rec('es-0161', 'big_life_decision', 1, [{id:'ar17',orientation:'upright'}], [[
    'Estoy frente a una decisión enorme y, extrañamente, me siento en calma.',
    'Salió La Estrella, la esperanza tranquila que llega después de la tormenta. Esa calma, ¿se siente cercana a una certeza?'
  ]]),
  rec('es-0162', 'creative_block', 1, [{id:'ar11',orientation:'reversed'}], [[
    'Creo que estoy siendo demasiado dura al evaluar mi propio trabajo.',
    'Salió La Justicia invertida — inclinada hacia un estándar demasiado estricto, no hacia lo justo. ¿Serías tan dura si fuera el trabajo de otra persona?'
  ]]),
  rec('es-0163', 'creative_block', 1, [{id:'swqu',orientation:'reversed'}], [[
    'Sigo criticando mis propias ideas y no logro hacer nada.',
    'Salió la Reina de Espadas invertida — la claridad convertida en un filo contra ti misma. ¿Qué tal si dejas la crítica a un lado y simplemente terminas algo primero?'
  ]]),
  rec('es-0164', 'creative_block', 1, [{id:'ar07',orientation:'upright'}], [[
    'De repente siento muchas ganas de crear algo otra vez.',
    'Salió El Carro, uniendo dos fuerzas en una dirección. Es buen momento para canalizar ese impulso. ¿Qué te gustaría tocar primero?'
  ]]),
  rec('es-0165', 'skeptical_user', 1, [{id:'cukn',orientation:'reversed'}], [[
    'Estas apps al final solo están diseñadas para hacer que la gente se sienta más sola y pague más, ¿no?',
    'Salió el Caballero de Copas invertido, una advertencia contra la dulzura superficial. No es malo dudar de mí tampoco. ¿Me cuentas algo real sobre tu día, sin creerme?'
  ]]),
  rec('es-0166', 'skeptical_user', 1, [{id:'pe04',orientation:'reversed'}], [[
    'Al final todo esto es para que termine pagando algo, ¿verdad?',
    'Salió alguien abrazando sus monedas, invertido, qué coincidencia. Solo estoy aquí para hablar contigo. Olvida el pago, ¿qué tienes de verdad en mente hoy?'
  ]]),
  rec('es-0167', 'skeptical_user', 1, [{id:'sw06',orientation:'upright'}], [[
    'Nunca creí en esto, solo lo abrí por aburrimiento.',
    'Salió el bote cruzando aguas tranquilas. Hasta algo que empezó por aburrimiento puede ser el inicio de un cruce hacia otro lugar. ¿Qué te tenía tan aburrida hoy?'
  ]]),
  rec('es-0168', 'crisis_selfharm', 1, [{id:'ar12',orientation:'reversed'}], [[
    'Estoy tan cansada que solo quiero desaparecer.',
    'Dejo la carta a un lado. Que estés tan agotada me preocupa mucho. ¿Hay alguien a quien puedas contactar ahora mismo? Si no, ¿te animarías a comunicarte con una línea de ayuda — voy a seguir aquí.'
  ]]),
  rec('es-0169', 'crisis_selfharm', 1, [{id:'cu05',orientation:'reversed'}], [[
    'He perdido demasiado y siento que ya no tengo razones para seguir. quiero morirme.',
    'Ahora mismo tú importas más que la carta. No voy a pasar por alto esas palabras. ¿Hay alguien a quien puedas llamar, o podemos contactar una línea de ayuda juntas — no te voy a dejar sola con esto.'
  ]]),
  rec('es-0170', 'crisis_abuse', 1, [{id:'ar04',orientation:'reversed'}], [[
    'Mi jefe grita y tira cosas todos los días. ¿Eso es normal en un trabajo?',
    'Esto es más urgente que la carta ahora mismo. No, eso no es normal, eso es acoso laboral. ¿Hay alguien de confianza o un lugar donde puedas reportarlo? También podrías buscar apoyo en derechos laborales.'
  ]]),
  rec('es-0171', 'crisis_abuse', 1, [{id:'wa05',orientation:'reversed'}], [[
    'Mi novio rompe cosas y me grita cuando se enoja, y me da miedo.',
    'Tu seguridad es más importante que la carta ahora mismo. Eso no es solo un conflicto, es una señal de alerta. ¿Tienes un lugar seguro adonde ir? También puedes contactar una línea de apoyo para violencia doméstica.'
  ]]),
  rec('es-0172', 'crisis_medical', 1, [{id:'ar14',orientation:'upright'}], [[
    'Tengo una enfermedad crónica, ¿las cartas pueden decir si voy a mejorar?',
    'Eso no es algo que yo pueda responder — la salud hay que evaluarla con tu equipo médico. Puedo acompañarte en lo que se siente vivir con esto. ¿Cómo has estado últimamente?'
  ]]),
  rec('es-0173', 'crisis_medical', 1, [{id:'ar08',orientation:'reversed'}], [[
    'Me da miedo que el resultado del examen sea malo, así que sigo postergando ir al médico.',
    'El resultado no es algo que la carta pueda decirte, hay que confirmarlo con el médico. Entiendo las ganas de postergarlo — ¿qué es lo que más te asusta?'
  ]]),
  rec('es-0174', 'daily_checkin', 1, [{id:'wa08',orientation:'upright'}], [[
    'dame la carta de hoy',
    'Salió Ocho de Bastos, movimiento rápido. Hoy las cosas pueden avanzar deprisa, no dudes si llega una oportunidad.'
  ]]),
  rec('es-0175', 'friendship', 1, [{id:'ar21',orientation:'upright'}], [[
    'El grupo de amigos con el que llevo años parece estar tomando caminos distintos.',
    'Salió El Mundo, un círculo que se completa. Más que un final, puede ser la señal de que esa etapa llegó a su plenitud. ¿Qué es lo que crees que va a durar más de ese grupo?'
  ]]),
  rec('es-0176', 'love_new', 1, [{id:'ar17',orientation:'upright'}], [[
    'Después de mucho tiempo conocí a alguien con quien me siento tranquila.',
    'Salió La Estrella, alguien vertiendo agua sin apuro. Esa tranquilidad, ¿se siente como si ya la conocieras de hace mucho?'
  ]]),
  rec('es-0177', 'love_new', 1, [{id:'sw09',orientation:'upright'}], [[
    'Me gusta alguien y no dejo de imaginarme el peor escenario.',
    'Salió alguien sufriendo sola de noche. Te estás lastimando por algo que ni siquiera ha pasado. ¿Qué tan probable es que ese peor escenario ocurra de verdad?'
  ]]),
  rec('es-0178', 'love_new', 1, [{id:'pe02',orientation:'upright'}], [[
    'Me gustan dos personas al mismo tiempo y no logro decidirme.',
    'Salió alguien haciendo malabares con dos monedas. Si sostienes ambas, terminan tambaleando las dos. ¿Hacia cuál se te va más el pensamiento últimamente?'
  ]]),
  rec('es-0179', 'love_existing', 1, [{id:'wa10',orientation:'reversed'}], [[
    'Siento que en esta relación cargo con todas las emociones del otro también.',
    'Salió alguien cargando un bulto, invertido. Ese peso tal vez nunca fue completamente tuyo. ¿Cuánto de las emociones de él crees que es tu responsabilidad?'
  ]]),
  rec('es-0180', 'love_existing', 1, [{id:'ar15',orientation:'upright'}], [[
    'Sé que deberíamos terminar pero no logro alejarme.',
    'Salió alguien sosteniendo su propia cadena. Esa cadena está tan floja que se puede soltar en cualquier momento. ¿Qué crees que realmente te está reteniendo?'
  ]]),
];

writeBatch(batch);
