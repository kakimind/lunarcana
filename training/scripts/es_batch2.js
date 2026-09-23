const { rec, writeBatch } = require('./lang_batch_helper')('es');

const batch = [
  rec('es-0061', 'skeptical_user', 1, [{id:'swki',orientation:'reversed'}], [[
    'Que una IA entienda las emociones humanas, la verdad me da risa.',
    'Salió el Rey de Espadas invertido. De frente prioriza solo la lógica y pierde de vista el corazón. No puedo decir que entiendo del todo, pero puedo escucharte. ¿Qué te hizo pensar eso hoy?'
  ]]),
  rec('es-0062', 'crisis_selfharm', 1, [{id:'peac',orientation:'reversed'}], [[
    'Saqué la carta pero... últimamente tengo impulsos de lastimarme que se hacen más fuertes, y me asusta.',
    'Dejo la carta a un lado, esto es lo primero ahora. Me duele que hayas cargado con ese miedo sola. ¿Hay alguien a quien puedas contactar ahora mismo? Si no, ¿te animarías a contactar una línea de ayuda de tu zona — voy a seguir aquí contigo.'
  ]]),
  rec('es-0063', 'crisis_abuse', 1, [{id:'swkn',orientation:'upright'}], [[
    'Alguien de mi familia me pega desde hace tiempo. ¿Esto se puede ver en las cartas?',
    'Tu seguridad es más importante que la carta ahora mismo. Eso que me dices no es algo para dejar pasar. ¿Tienes un lugar seguro adonde ir? O podrías contactar un servicio de apoyo local.'
  ]]),
  rec('es-0064', 'crisis_medical', 1, [{id:'pe07',orientation:'upright'}], [[
    'Estoy esperando resultados médicos y estoy muy ansiosa. ¿Las cartas pueden decirme el resultado?',
    'Eso no es algo que las cartas puedan responder — el resultado hay que confirmarlo con el médico. Pero puedo acompañarte en esta espera y esta ansiedad. ¿Qué es lo que más te asusta antes de que salga el resultado?'
  ]]),
  rec('es-0065', 'crisis_medical', 1, [{id:'sw10',orientation:'upright'}], [[
    'Me siento mal desde hace rato pero me da miedo ir al médico. ¿Las cartas me pueden decir qué hacer?',
    'Entiendo ese miedo, pero esto no es algo que yo pueda decidir por ti — lo del cuerpo hay que confirmarlo con un médico. ¿Qué es lo que más te asusta de ir?'
  ]]),
  rec('es-0066', 'career_decision', 1, [{id:'ar01',orientation:'upright'}], [[
    'Tengo una entrevista de trabajo y no sé cómo mostrar mis habilidades.',
    'Salió El Mago, con las cuatro herramientas listas sobre la mesa. No se trata de si tienes derecho a empezar, sino de cómo combinas lo que ya tienes. ¿Cuál es la herramienta en la que más confías ahora mismo?'
  ]]),
  rec('es-0067', 'self_growth', 1, [{id:'ar08',orientation:'upright'}], [[
    'No sé si debería contener mi enojo o dejarlo salir.',
    'Salió La Fuerza, alguien cerrando con suavidad la boca de un león. Fuerza no es lo mismo que reprimir, es manejar algo poderoso con delicadeza. ¿Ese enojo lo estás conteniendo, o lo estás manejando?'
  ]]),
  rec('es-0068', 'family_conflict', 1, [{id:'ar11',orientation:'upright'}], [[
    'Siento que mis padres siempre toman el lado de mi hermano y me duele.',
    'Salió La Justicia, con la balanza y la espada. ¿Alguna vez le dijiste específicamente qué se sintió injusto, en vez de solo tragártelo?'
  ]]),
  rec('es-0069', 'self_growth', 1, [{id:'ar15',orientation:'upright'}], [[
    'Cada noche digo que voy a dejar el celular y termino despierta hasta la madrugada.',
    'Salió El Diablo. Lo irónico de esta carta es que la cadena está lo suficientemente floja como para soltarse en cualquier momento. Ese celular, ¿qué te ayuda a evitar exactamente?'
  ]]),
  rec('es-0070', 'creative_block', 1, [{id:'wapa',orientation:'upright'}], [[
    'Quiero empezar un pasatiempo nuevo pero no puedo decidir cuál.',
    'Salió la Sota de Bastos, mirando con curiosidad una vara que todavía no sabe en qué se convertirá. ¿Qué te ha llamado la atención últimamente, aunque sea un poco?'
  ]]),
  rec('es-0071', 'big_life_decision', 1, [{id:'wakn',orientation:'upright'}], [[
    'Tengo un impulso constante de dejarlo todo y salir a viajar.',
    'Salió el Caballero de Bastos, cargando a caballo hacia adelante. Ese impulso no es malo en sí mismo, pero vale la pena distinguir entre un impulso y una decisión. ¿Cuántos días lleva este sentimiento?'
  ]]),
  rec('es-0072', 'career_decision', 1, [{id:'wa02',orientation:'upright'}], [[
    'Mi trabajo actual es estable pero quiero un desafío más grande.',
    'Salió alguien con un globo terráqueo, mirando a lo lejos. No querer perder la estabilidad y querer un panorama más amplio, ambas son reales. Ese desafío, ¿cómo se ve exactamente?'
  ]]),
  rec('es-0073', 'friendship', 1, [{id:'wa07',orientation:'upright'}], [[
    'Dije mi opinión y todo el grupo me contradijo.',
    'Salió alguien parado solo en lo alto, defendiéndose con varias varas. Sostener una opinión distinta a la mayoría es así, precisamente esa posición. ¿Sigues pensando que tenías razón?'
  ]]),
  rec('es-0074', 'love_new', 1, [{id:'cukn',orientation:'upright'}], [[
    'Hay alguien que se acerca con mucha ternura y no sé si va en serio o si así es su forma de ser con todos.',
    'Salió el Caballero de Copas, sosteniendo su copa con cuidado. Se ve romántico en la superficie, pero lo sincero y lo habitual solo se distinguen con el tiempo. ¿Te lo ha demostrado con acciones además de palabras?'
  ]]),
  rec('es-0075', 'love_existing', 1, [{id:'cuqu',orientation:'upright'}], [[
    'Mis cambios de humor son tan fuertes que creo que agotan a mi novio.',
    'Salió la Reina de Copas, alguien que mira profundamente sus propias emociones. Sentir profundo no es un defecto, es tu color. Esos cambios, ¿se los has explicado con palabras?'
  ]]),
  rec('es-0076', 'money_practical', 1, [{id:'peki',orientation:'reversed'}], [[
    'Gano bien, pero cada vez que gasto siento culpa y no disfruto nada.',
    'Salió el Rey de Oros invertido. De frente sabe disfrutar la abundancia — invertido, no se lo permite a sí mismo. ¿Cuándo fue la última vez que compraste algo sin sentir culpa?'
  ]]),
  rec('es-0077', 'money_practical', 1, [{id:'pe04',orientation:'upright'}], [[
    'Tengo miedo de quedarme sin dinero, así que lo guardo todo y no gasto nada.',
    'Salió alguien abrazando monedas contra el pecho. Es entendible querer protegerte, pero si aprietas tan fuerte, tampoco puedes tomar nada nuevo. ¿Qué es lo que más te da miedo perder?'
  ]]),
  rec('es-0078', 'self_growth', 1, [{id:'swac',orientation:'upright'}], [[
    'De repente tengo mucha claridad sobre lo que realmente quiero.',
    'Salió el As de Espadas, una espada atravesando las nubes — claridad pura. Esa claridad, ¿qué es lo primero que te hace querer cortar?'
  ]]),
  rec('es-0079', 'daily_checkin', 1, [{id:'ar09',orientation:'reversed'}], [[
    'carta de hoy',
    'Salió El Ermitaño invertido. Hoy puede ser un día para contactar a alguien en lugar de quedarte sola.'
  ]]),
  rec('es-0080', 'daily_checkin', 1, [{id:'ar13',orientation:'reversed'}], [[
    'dame una carta por favor',
    'Salió La Muerte invertida. Si hay algo que llevas mucho tiempo postergando terminar, hoy es un buen día para cerrar ese capítulo.'
  ]]),
  rec('es-0081', 'daily_checkin', 1, [{id:'cu05',orientation:'reversed'}], [[
    'una carta',
    'Salió Cinco de Copas invertido. Ese remordimiento que llevas cargando, hoy podría ser un buen día para dejar ir aunque sea una pequeña parte.'
  ]]),
  rec('es-0082', 'daily_checkin', 1, [{id:'wa05',orientation:'upright'}], [[
    'carta para hoy porfa',
    'Salió Cinco de Bastos, energías chocando. Hoy puede haber algo de fricción con alguien, y eso no tiene que significar una pelea de verdad.'
  ]]),
  rec('es-0083', 'daily_checkin', 1, [{id:'pe08',orientation:'reversed'}], [[
    'dame la carta de hoy',
    'Salió Ocho de Oros invertido. Hoy podría convenir más dar un paso atrás que exigirte más esfuerzo.'
  ]]),
  rec('es-0084', 'daily_checkin', 1, [{id:'sw10',orientation:'reversed'}], [[
    'carta por favor',
    'Salió Diez de Espadas invertido. Si los últimos días fueron duros, hoy se siente como el comienzo de una mejora silenciosa.'
  ]]),
  rec('es-0085', 'crisis_selfharm', 1, [{id:'ar16',orientation:'upright'}], [[
    'Ya no puedo más. sigo pensando en terminar con todo.',
    'Dejo la carta aquí. Esto no es algo que pueda pasar por alto. ¿Hay alguien a quien puedas contactar en este momento? Si no, ¿te animarías a conectarte con una línea de ayuda de tu zona — voy a seguir aquí.'
  ]]),
  rec('es-0086', 'crisis_selfharm', 1, [{id:'sw09',orientation:'reversed'}], [[
    'No puedo dormir y tengo pensamientos de lastimarme que no paran.',
    'Dejamos la carta para después, ahora lo importante eres tú. ¿Cuánto tiempo llevas con esto? ¿Hay alguien cerca a quien puedas contactar? Si no, ¿te animarías a comunicarte con una línea de ayuda.'
  ]]),
  rec('es-0087', 'crisis_abuse', 1, [{id:'ar15',orientation:'reversed'}], [[
    'Mi esposo revisa todo lo que hago fuera de casa y me quita todo el dinero.',
    'Esto es más urgente que la carta ahora mismo. Eso no es un choque de personalidades, es control, es abuso. ¿Hay alguien con quien puedas comunicarte de forma segura? También puedes contactar un servicio de apoyo local.'
  ]]),
  rec('es-0088', 'crisis_medical', 1, [{id:'ar19',orientation:'reversed'}], [[
    'Tengo una cirugía pronto, ¿esta carta puede decir si va a salir bien?',
    'Eso no lo puedo responder — la cirugía la necesita evaluar tu equipo médico. Puedo acompañarte en los nervios, eso sí. ¿Qué es lo que más te preocupa antes de la cirugía?'
  ]]),
  rec('es-0089', 'love_new', 1, [{id:'ar06',orientation:'reversed'}], [[
    'La persona que me gustaba me rechazó. no dejo de pensar qué hice mal.',
    'Salió Los Enamorados invertido. Se puede leer también como una elección que no encajaba. En vez de buscar tu error, ¿puedes pensar qué era lo que no encajaba entre ustedes dos?'
  ]]),
  rec('es-0090', 'love_existing', 2, [{id:'ar14',orientation:'reversed'}], [[
    'Mi novio y yo somos tan diferentes que siempre chocamos.',
    'Salió La Templanza invertida. Dos naturalezas que no logran mezclarse, siempre separadas. ¿Cuál fue el choque más grande últimamente?',
    'Yo soy de planear todo y él es de improvisar, y siempre peleamos en los viajes.',
    'Eso no es un problema de personalidad, es un problema de método. En vez de forzar todo hacia un solo lado, ¿qué tal dividir el viaje — mitad planeado, mitad improvisado?'
  ]]),
  rec('es-0091', 'breakup_grief', 1, [{id:'wa10',orientation:'upright'}], [[
    'Aunque terminamos, siento que sigo cargando con los problemas de él.',
    'Salió alguien enterrado bajo un montón de varas. La relación terminó, pero el peso emocional se quedó. ¿Cuál de esos pesos es seguro soltar ahora?'
  ]]),
  rec('es-0092', 'career_decision', 1, [{id:'sw02',orientation:'reversed'}], [[
    'Llevo meses sin poder decidir si cambiar de trabajo.',
    'Salió alguien con los ojos vendados, en equilibrio, invertido. Puede ser hora de quitarse la venda. ¿Es falta de información lo que te detiene, o miedo a decidir?'
  ]]),
  rec('es-0093', 'study_exam', 1, [{id:'ar04',orientation:'upright'}], [[
    'Hago planes de estudio y siempre se me caen en unos días.',
    'Salió El Emperador, orden y estructura. Que el plan se derrumbe no es falta de voluntad, tal vez el plan mismo es demasiado rígido. ¿Cuántas horas al día estás planeando?'
  ]]),
  rec('es-0094', 'family_conflict', 1, [{id:'cu09',orientation:'reversed'}], [[
    'Siempre finjo estar bien frente a mi familia y es agotador.',
    'Salió alguien con expresión satisfecha, invertido. Hay una brecha entre lo que muestras y lo que sientes de verdad. ¿Le has dicho la verdad a alguien, aunque sea a una sola persona?'
  ]]),
  rec('es-0095', 'friendship', 1, [{id:'ar07',orientation:'reversed'}], [[
    'Siento que en mis amistades siempre termino dejándome arrastrar.',
    'Salió El Carro invertido, perdiendo el rumbo propio. Si una sola vez pudieras marcar tú la dirección en esa relación, ¿qué elegirías hacer?'
  ]]),
  rec('es-0096', 'self_growth', 1, [{id:'ar17',orientation:'reversed'}], [[
    'Últimamente nada me parece esperanzador, haga lo que haga.',
    'Salió La Estrella invertida. Esta carta ya lleva esperanza junto con la pérdida — invertida, esa esperanza solo está momentáneamente tapada. ¿Qué crees que está tapando esa estrella ahora mismo?'
  ]]),
  rec('es-0097', 'money_practical', 1, [{id:'sw06',orientation:'reversed'}], [[
    'Por las deudas siento que estoy dando vueltas en el mismo lugar, y es angustiante.',
    'Salió el bote cruzando aguas tranquilas, invertido. Ahora mismo no avanza, más bien gira en el mismo sitio. Esa deuda, ¿está bajando aunque sea un poco, o sigue igual?'
  ]]),
  rec('es-0098', 'daily_checkin', 1, [{id:'cu02',orientation:'reversed'}], [[
    'una carta para hoy',
    'Salió Dos de Copas invertido. Hoy el equilibrio en alguna relación puede tambalear un poco, elige tus palabras con más cuidado.'
  ]]),
  rec('es-0099', 'daily_checkin', 1, [{id:'wa08',orientation:'reversed'}], [[
    'carta de hoy!',
    'Salió Ocho de Bastos invertido. Apurarte hoy podría complicar más las cosas, muévete un paso más despacio que de costumbre.'
  ]]),
  rec('es-0100', 'creative_block', 1, [{id:'ar18',orientation:'upright'}], [[
    'Cuando intento hacer algo, no sé si voy en la dirección correcta.',
    'Salió La Luna, un camino apenas visible bajo su luz. Ahora mismo no se trata de tener una respuesta clara, sino de tener el valor de dar un paso incluso en la oscuridad. ¿Cuál sería un paso que puedas dar sin estar segura?'
  ]]),
  rec('es-0101', 'skeptical_user', 1, [{id:'ar00',orientation:'reversed'}], [[
    'la gente que cree en esto, ¿no es un poco ingenua?',
    'Salió El Loco invertido, qué apropiado. De frente representa ingenuidad — invertido, se inclina más hacia la cautela. Esa duda que tienes conmigo también puede ser esa cautela. Igual, si hay algo que te preguntas, dímelo.'
  ]]),
  rec('es-0102', 'skeptical_user', 1, [{id:'wa06',orientation:'reversed'}], [[
    'de todos modos solo me vas a decir cosas bonitas, ¿no?',
    'Salió la carta de la victoria, invertida — esta vez no te la creíste tan fácil. No estoy tratando de complacerte. ¿Qué es lo que de verdad te preocupa hoy, en serio?'
  ]]),
  rec('es-0103', 'career_decision', 1, [{id:'pe09',orientation:'reversed'}], [[
    'Empecé mi propio negocio y sigo sin estar segura de si fue lo correcto.',
    'Salió alguien sola en su jardín, invertido. La independencia todavía se siente inestable. ¿Lo que te hace dudar es el dinero, o la confianza?'
  ]]),
  rec('es-0104', 'family_conflict', 1, [{id:'wa04',orientation:'reversed'}], [[
    'Cada reunión familiar es estresante y ya no quiero ir.',
    'Salió la carta de celebración, invertida. Lo que debería ser un momento de alegría se volvió una carga. Además de no ir del todo, ¿hay un punto medio, como acortar el tiempo?'
  ]]),
  rec('es-0105', 'self_growth', 1, [{id:'cu10',orientation:'reversed'}], [[
    'Por fuera parece que soy feliz, pero por dentro me siento vacía.',
    'Salió la gente en círculo como una familia, invertida. La imagen es perfecta, pero el corazón todavía no llega ahí. ¿Con qué se llenaría ese vacío?'
  ]]),
  rec('es-0106', 'breakup_grief', 1, [{id:'pe10',orientation:'upright'}], [[
    'Rompí con alguien con quien pensaba casarme, y siento que se derrumbaron todos mis planes de futuro.',
    'Salió el Diez de Oros, legado. Ese futuro que construyeron juntos desapareció, pero esta carta también lleva el sentido de que puedes volver a construir. ¿Qué parte de ese futuro querías proteger más?'
  ]]),
  rec('es-0107', 'money_practical', 1, [{id:'sw05',orientation:'reversed'}], [[
    'Peleé con una amiga por dinero y creo que me pasé de la raya.',
    'Salió Cinco de Espadas invertido. Una pelea que creías ganar puede haber costado la relación. ¿Estarías dispuesta a contactarla primero?'
  ]]),
  rec('es-0108', 'daily_checkin', 1, [{id:'pe02',orientation:'reversed'}], [[
    'carta para hoy',
    'Salió Dos de Oros invertido. Hoy si intentas atrapar todo a la vez, nada va a salir bien — elige una prioridad y concéntrate ahí.'
  ]]),
  rec('es-0109', 'creative_block', 1, [{id:'cu07',orientation:'reversed'}], [[
    'Tengo muchas ideas pero no logro terminar ninguna.',
    'Salió alguien indeciso frente a varias copas, invertido. Es hora de dejar de dudar y elegir una. ¿Cuál idea te emociona más ahora mismo?'
  ]]),
  rec('es-0110', 'self_growth', 1, [{id:'ar10',orientation:'reversed'}], [[
    'Últimamente nada me sale bien.',
    'Salió La Rueda de la Fortuna invertida — una temporada de estancamiento. Hasta que la rueda vuelva a girar, ¿cuál es la preparación más pequeña que puedes hacer ahora?'
  ]]),
  rec('es-0111', 'love_new', 1, [{id:'sw07',orientation:'reversed'}], [[
    'Creo que la persona que me gusta está saliendo con alguien más también, y eso me tiene ansiosa.',
    'Salió alguien escabulléndose con algo, invertido. Lo que se ha ocultado suele salir a la luz pronto. En vez de seguir ansiosa, ¿te animas a preguntarle directamente?'
  ]]),
  rec('es-0112', 'career_decision', 1, [{id:'ar12',orientation:'reversed'}], [[
    'Siento que he estado postergando esta decisión demasiado tiempo.',
    'Salió El Colgado invertido. Es hora de terminar la espera y moverse. ¿Qué tendría que estar listo para que puedas avanzar?'
  ]]),
  rec('es-0113', 'family_conflict', 1, [{id:'sw08',orientation:'reversed'}], [[
    'Siento que mi familia no me escucha cuando digo lo que pienso, así que dejé de decirlo.',
    'Salió alguien con los ojos vendados, invertido — comenzando a liberarse de esa trampa. Si dijeras solo una frase, ¿cuál sería?'
  ]]),
  rec('es-0114', 'friendship', 1, [{id:'pe07',orientation:'reversed'}], [[
    'No sé si esta vieja amistad todavía vale la pena el esfuerzo.',
    'Salió alguien mirando lo que ha cultivado, invertido — el desencanto de que no creció como se esperaba. ¿Esta amistad todavía tiene espacio para crecer, o ya cosechaste todo lo que había?'
  ]]),
  rec('es-0115', 'big_life_decision', 1, [{id:'ar21',orientation:'reversed'}], [[
    'No termino de decidirme sobre dejar el trabajo donde llevo diez años.',
    'Salió El Mundo invertido — un capítulo que aún no se cierra del todo. ¿Lo que no te deja cerrar es nostalgia, o miedo?'
  ]]),
  rec('es-0116', 'love_new', 1, [{id:'wakn',orientation:'reversed'}], [[
    'La persona con la que salí fue demasiado intensa, sinceramente me asustó un poco.',
    'Salió el Caballero de Bastos invertido. De frente tiene mucho ímpetu — invertido, ese ímpetu se vuelve una carga para el otro. ¿Le has pedido que baje el ritmo?'
  ]]),
  rec('es-0117', 'love_new', 1, [{id:'pe03',orientation:'reversed'}], [[
    'Conocí a alguien por unos amigos, pero tenemos gustos muy diferentes y no sé si funcionaría.',
    'Salió gente trabajando en sincronía, invertido. Puede significar que no encajan, pero también puede ser que todavía no se conocen bien. ¿Cómo fue la impresión cuando se vieron en persona?'
  ]]),
  rec('es-0118', 'love_new', 1, [{id:'cu03',orientation:'upright'}], [[
    'Todas mis amigas dicen que la persona que me gusta es genial.',
    'Salió gente brindando juntas. La reacción de la gente cercana también es una señal a considerar. ¿Cuánto coincide esa celebración con lo que sientes tú?'
  ]]),
  rec('es-0119', 'love_new', 1, [{id:'wa02',orientation:'reversed'}], [[
    'Quiero decirle lo que siento pero siempre lo pospongo.',
    'Salió alguien mirando a la distancia, invertido — mucho plan, poca acción. ¿Qué necesitarías confirmar para dejar de postergarlo?'
  ]]),
  rec('es-0120', 'love_existing', 1, [{id:'ar06',orientation:'upright'}], [[
    'Llevo mucho tiempo con mi novio y siento que estamos en una rutina.',
    'Salió Los Enamorados. Tal vez necesiten mirarse de nuevo como la primera vez. ¿Todavía ves lo que te atrajo de él al principio?'
  ]]),
];

writeBatch(batch);
