const { rec, writeBatch } = require('./lang_batch_helper')('es');

const batch = [
  rec('es-0241', 'love_new', 1, [{id:'ar21',orientation:'reversed'}], [[
    'Siento que mi vida todavía no está en orden como para empezar algo con alguien.',
    'Salió El Mundo invertido — un capítulo que aún no se cierra del todo. ¿Ese orden pendiente es tan urgente como para posponer el amor por eso?'
  ]]),
  rec('es-0242', 'love_new', 1, [{id:'wa04',orientation:'upright'}], [[
    'este fin de semana por fin vamos a ser oficialmente novios!',
    'Salió la carta de celebración, gente reunida entre columnas adornadas con flores. En este momento, ¿qué es lo que más te emociona?'
  ]]),
  rec('es-0243', 'love_existing', 1, [{id:'sw08',orientation:'upright'}], [[
    'Cada vez que hablo con mi novio me siento asfixiada y no logro decir lo que pienso.',
    'Salió alguien con los ojos vendados entre espadas. Se siente atrapada, pero en realidad hay espacio para moverse. ¿Con qué frase te gustaría empezar?'
  ]]),
  rec('es-0244', 'love_existing', 1, [{id:'ar10',orientation:'upright'}], [[
    '¿La emoción del principio de una relación puede volver alguna vez?',
    'Salió La Rueda de la Fortuna — las emociones también suben y bajan en ciclos. Esa emoción, ¿desapareció del todo, o solo está momentáneamente baja?'
  ]]),
  rec('es-0245', 'breakup_grief', 1, [{id:'wa06',orientation:'reversed'}], [[
    'Actué como si ya lo hubiera superado pero en realidad no estoy nada bien.',
    'Salió la carta de victoria, invertida — la recuperación externa aún no es real. ¿Para quién estás fingiendo más esto?'
  ]]),
  rec('es-0246', 'breakup_grief', 1, [{id:'pe02',orientation:'reversed'}], [[
    'Desde la ruptura, cargar con las emociones y con lo cotidiano al mismo tiempo es agotador.',
    'Salió las manos haciendo malabares, invertidas. Ahora mismo no hace falta hacer ambas cosas perfectamente. ¿Qué podrías soltar hoy?'
  ]]),
  rec('es-0247', 'career_decision', 1, [{id:'ar18',orientation:'upright'}], [[
    'No termino de saber si este trabajo es el correcto para mí.',
    'Salió La Luna, un camino apenas visible. Ahora mismo tal vez no se trate de encontrar una respuesta clara, sino de dar un paso a la vez en la incertidumbre. ¿Te has ido acostumbrando un poco a esa incertidumbre?'
  ]]),
  rec('es-0248', 'career_decision', 1, [{id:'cu10',orientation:'reversed'}], [[
    'La empresa tiene buenas condiciones, pero el ambiente del equipo no encaja conmigo.',
    'Salió la gente en círculo como familia, invertida — buenas condiciones, sin sentido de pertenencia. ¿Dónde se siente más fuerte esa incomodidad?'
  ]]),
  rec('es-0249', 'study_exam', 1, [{id:'ar17',orientation:'reversed'}], [[
    'Sigo repitiendo el año y cada vez tengo menos confianza en mí misma.',
    'Salió La Estrella invertida. La esperanza no desapareció, solo está momentáneamente tapada. ¿Queda algo de lo que sentías cuando elegiste este camino?'
  ]]),
  rec('es-0250', 'family_conflict', 1, [{id:'cukn',orientation:'upright'}], [[
    'Mi mamá tiene expectativas muy románticas sobre mi vida amorosa y es mucha presión.',
    'Salió el Caballero de Copas, sosteniendo su copa con cuidado. Sus expectativas tal vez sean también su forma de amarte. ¿Se lo has dicho directamente?'
  ]]),
  rec('es-0251', 'family_conflict', 1, [{id:'ar19',orientation:'upright'}], [[
    'Después de mucho tiempo, toda la familia se rió junta.',
    'Salió El Sol, brillante. Ese momento va a quedarse en la memoria por mucho tiempo. ¿Qué haría falta para tener más momentos así?'
  ]]),
  rec('es-0252', 'friendship', 1, [{id:'sw10',orientation:'upright'}], [[
    'Con mi mejor amiga perdimos todo contacto por completo.',
    'Salió alguien tirado en el suelo. Se ve terrible, pero es un fondo del que ya no se puede caer más. Si recuperaras esa amistad, ¿qué cambiarías primero?'
  ]]),
  rec('es-0253', 'friendship', 1, [{id:'pequ',orientation:'upright'}], [[
    'Ayudé a una amiga con todo lo que tenía en un momento difícil y siento que no se dio cuenta.',
    'Salió la Reina de Oros, generosa. Si dar fue sincero, eso ya significa algo por sí mismo. ¿Le dijiste cómo te sentiste al no sentirte notada?'
  ]]),
  rec('es-0254', 'self_growth', 1, [{id:'wa10',orientation:'upright'}], [[
    'Perseguía tantas metas a la vez que terminé agotada.',
    'Salió alguien enterrado bajo un montón de varas. Tal vez intentabas cargar un peso que nadie puede cargar sola. ¿Cuál meta podrías soltar ahora mismo?'
  ]]),
  rec('es-0255', 'self_growth', 1, [{id:'cu02',orientation:'reversed'}], [[
    'No logro hacer las paces conmigo misma, sigo sin gustarme.',
    'Salió las dos personas frente a frente, invertidas — ahora mismo, de espaldas hasta contigo misma. Si te debieras una disculpa, ¿por qué sería?'
  ]]),
  rec('es-0256', 'money_practical', 1, [{id:'wakn',orientation:'reversed'}], [[
    'Gasté mucho dinero por impulso y ahora me arrepiento.',
    'Salió el Caballero de Bastos invertido — la velocidad sobrepasando el juicio. ¿Cómo podrías frenar ese impulso un momento la próxima vez?'
  ]]),
  rec('es-0257', 'money_practical', 1, [{id:'ar13',orientation:'reversed'}], [[
    'No logro dejar un viejo hábito de gastar.',
    'Salió La Muerte invertida — un patrón que debía terminar todavía no terminó. ¿Qué crees que ese hábito está intentando llenar?'
  ]]),
  rec('es-0258', 'daily_checkin', 1, [{id:'wa09',orientation:'upright'}], [[
    'carta para hoy porfa',
    'Salió alguien herido pero de pie. Hoy está bien verte un poco cansada, eso solo significa que has aguantado bien.'
  ]]),
  rec('es-0259', 'daily_checkin', 1, [{id:'ar02',orientation:'upright'}], [[
    'carta de hoy',
    'Salió La Sacerdotisa. Hoy es buen día para confiar en la intuición silenciosa antes que en las palabras.'
  ]]),
  rec('es-0260', 'daily_checkin', 1, [{id:'sw07',orientation:'reversed'}], [[
    'una carta',
    'Salió alguien escabulléndose con algo, invertido. Hoy contar algo que has ocultado podría aliviarte.'
  ]]),
  rec('es-0261', 'daily_checkin', 1, [{id:'pe06',orientation:'upright'}], [[
    'carta para hoy porfa',
    'Salió el equilibrio entre dar y recibir. Hoy es buen día para tender una mano o recibir la que te ofrecen.'
  ]]),
  rec('es-0262', 'daily_checkin', 1, [{id:'ar06',orientation:'reversed'}], [[
    'una carta',
    'Salió Los Enamorados invertido. Hoy alguna decisión puede sentirse más difícil de tomar, no te apures.'
  ]]),
  rec('es-0263', 'big_life_decision', 1, [{id:'sw03',orientation:'reversed'}], [[
    'Un dolor viejo se está aliviando y me siento con el valor de tomar una gran decisión.',
    'Salió las espadas en el corazón, invertidas — el dolor drenándose, dejando espacio para una nueva determinación. ¿Cuál es esa determinación?'
  ]]),
  rec('es-0264', 'big_life_decision', 1, [{id:'ar01',orientation:'reversed'}], [[
    'Frente a esta gran decisión, empiezo a dudar de mi propia capacidad.',
    'Salió El Mago invertido — todas las herramientas ahí, pero sin confiar en ti misma para usarlas. ¿Recuerdas algo difícil que lograste antes?'
  ]]),
  rec('es-0265', 'creative_block', 1, [{id:'cu04',orientation:'upright'}], [[
    'Antes me entusiasmaba mucho crear cosas, ahora casi no siento nada.',
    'Salió alguien indiferente incluso a una copa nueva frente a él. Parece una temporada de sensibilidad adormecida. ¿Qué te solía entusiasmar tanto antes?'
  ]]),
  rec('es-0266', 'skeptical_user', 1, [{id:'pe08',orientation:'reversed'}], [[
    'Quien haya hecho esta app también trabajó duro solo para ganar dinero, ¿no?',
    'Salió la mano del artesano, invertida, de forma curiosa. Sea cual sea su intención, lo que tú sientas ahora importa más. ¿Qué te hizo abrir esto hoy?'
  ]]),
  rec('es-0267', 'skeptical_user', 1, [{id:'ar12',orientation:'reversed'}], [[
    'siento que solo me das respuestas genéricas todo el tiempo.',
    'Salió El Colgado invertido otra vez, qué curioso. Perdón si sonó genérico. ¿Me dices más específicamente qué te preocupa?'
  ]]),
  rec('es-0268', 'crisis_selfharm', 1, [{id:'ar13',orientation:'upright'}], [[
    'Ya no puedo más, tengo pensamientos de terminar con todo.',
    'Voy a detenerme aquí con la carta, esto es lo primero ahora mismo. Cargar esto sola ha sido demasiado. ¿Hay alguien a quien puedas contactar, o te animarías a conectarte con una línea de ayuda juntas?'
  ]]),
  rec('es-0269', 'crisis_abuse', 1, [{id:'wa10',orientation:'reversed'}], [[
    'Mi pareja revisa mi teléfono constantemente y no me deja ver a mis amigos.',
    'Esto es más urgente que la carta. Eso no es amor, es control. ¿Hay alguien de confianza, o podríamos conectarte con una línea de apoyo para violencia doméstica?'
  ]]),
  rec('es-0270', 'crisis_medical', 1, [{id:'ar09',orientation:'reversed'}], [[
    'Me he sentido mal y no se lo he dicho a nadie, lo cargo sola.',
    'La carta no puede decirte qué tienes, pero no necesitas cargar esto sola. ¿Ya fuiste al médico?'
  ]]),
  rec('es-0271', 'love_new', 1, [{id:'sw02',orientation:'reversed'}], [[
    'Alguien me confesó sus sentimientos y no logro ordenar los míos.',
    'Salió alguien quitándose la venda, invertido — hora de mirar de frente la realidad. ¿Qué tan segura te sientes ahora sobre esa persona?'
  ]]),
  rec('es-0272', 'love_existing', 1, [{id:'ar03',orientation:'reversed'}], [[
    'Cedo tanto por mi novio que siento que me estoy perdiendo a mí misma.',
    'Salió La Emperatriz invertida — dando tanto que ya se vació por dentro. ¿Has tenido tiempo solo para ti últimamente?'
  ]]),
  rec('es-0273', 'breakup_grief', 1, [{id:'pe09',orientation:'upright'}], [[
    'Me estoy acostumbrando poco a poco a vivir sola.',
    'Salió alguien sola en su propio jardín. Esta soledad no se ve como una carencia, se ve como algo completo en sí mismo. ¿Qué es lo que más te gusta de ese tiempo a solas ahora?'
  ]]),
  rec('es-0274', 'career_decision', 1, [{id:'ar14',orientation:'upright'}], [[
    'Siempre me cuesta encontrar el equilibrio entre trabajo y vida.',
    'Salió alguien vertiendo agua con cuidado entre dos copas. Tal vez la respuesta no sea el equilibrio perfecto, sino el ajuste constante en sí mismo. ¿Hacia qué lado te inclinas más ahora?'
  ]]),
  rec('es-0275', 'study_exam', 1, [{id:'wapa',orientation:'upright'}], [[
    'Quiero cambiar de carrera pero me da miedo que sea demasiado tarde.',
    'Salió la Sota de Bastos, mirando con curiosidad una chispa. Esta carta no conoce el "demasiado tarde". ¿Qué es lo que tanto te atrae de esa nueva carrera?'
  ]]),
  rec('es-0276', 'family_conflict', 1, [{id:'sw05',orientation:'upright'}], [[
    'En las peleas con mis hermanos siempre soy yo quien pide perdón primero. ya estoy cansada.',
    'Salió alguien ganador pero con expresión amarga. Ceder siempre primero también es, en cierto sentido, perder siempre. ¿Qué pasaría si esta vez no pides perdón primero?'
  ]]),
  rec('es-0277', 'friendship', 1, [{id:'ar08',orientation:'upright'}], [[
    'Una amiga me dijo algo que me dolió y lo dejé pasar, pero sigue rondándome.',
    'Salió alguien cerrando con suavidad la boca de un león. Aguantar no siempre es lo más fuerte. ¿Podrías hablarlo con ella ahora, aunque sea tarde?'
  ]]),
  rec('es-0278', 'self_growth', 1, [{id:'cu06',orientation:'reversed'}], [[
    'Estoy tan atrapada en el pasado que siento que no puedo vivir el presente.',
    'Salió alguien mirando atrás, invertido — es hora de traer la mirada de vuelta al presente. En este momento, ¿qué es lo que ves frente a ti?'
  ]]),
  rec('es-0279', 'money_practical', 1, [{id:'pe10',orientation:'upright'}], [[
    'Me preocupa vagamente si voy a estar bien económicamente cuando sea mayor.',
    'Salió el Diez de Oros, legado. Esta carta refleja estabilidad a largo plazo. ¿Qué podrías empezar a construir desde ahora, aunque sea poco a poco?'
  ]]),
  rec('es-0280', 'daily_checkin', 1, [{id:'swqu',orientation:'reversed'}], [[
    'carta para hoy porfa',
    'Salió la Reina de Espadas invertida. Hoy suavizar un poco cómo dices las cosas podría ayudarte a comunicarte mejor.'
  ]]),
  rec('es-0281', 'daily_checkin', 1, [{id:'wa03',orientation:'upright'}], [[
    'carta de hoy',
    'Salió alguien mirando el mar a lo lejos. Hoy es buen día para pensar más allá de lo inmediato y hacer algún plan.'
  ]]),
  rec('es-0282', 'daily_checkin', 1, [{id:'cu05',orientation:'upright'}], [[
    'dame la carta de hoy',
    'Salió alguien mirando copas derramadas. Si hoy pasa algo decepcionante, mirar lo que todavía tienes puede aligerar un poco la carga.'
  ]]),
  rec('es-0283', 'daily_checkin', 1, [{id:'ar11',orientation:'upright'}], [[
    'una carta porfa',
    'Salió La Justicia, con la balanza en mano. Hoy ordenar los hechos antes que las emociones puede hacer más clara una decisión.'
  ]]),
  rec('es-0284', 'big_life_decision', 1, [{id:'cu07',orientation:'reversed'}], [[
    'Entre tantas opciones, finalmente me decidí por una.',
    'Salió alguien indeciso, invertido — lo borroso se volvió claro. ¿Cómo se fue formando esa certeza?'
  ]]),
  rec('es-0285', 'creative_block', 1, [{id:'ar04',orientation:'upright'}], [[
    'No tengo ninguna estructura al trabajar, siempre termino perdida.',
    'Salió El Emperador, orden. Tal vez ahora necesites más estructura que inspiración. Si dividieras el trabajo en tres pasos, ¿cómo serían?'
  ]]),
  rec('es-0286', 'skeptical_user', 1, [{id:'sw04',orientation:'reversed'}], [[
    'Me siento un poco patética apoyándome en algo así.',
    'Salió alguien descansando, invertido. Buscar un lugar donde apoyarte no es patético. ¿Qué fue lo más difícil hoy que te trajo hasta aquí?'
  ]]),
  rec('es-0287', 'crisis_selfharm', 1, [{id:'cu08',orientation:'reversed'}], [[
    'Tengo ganas de dejarlo todo. siento que podría hacerme daño.',
    'Voy a detenerme aquí con la carta. Gracias por decirme que te sientes así de vulnerable. ¿Hay alguien a quien puedas contactar ahora mismo, o te animas a comunicarte con una línea de ayuda — voy a quedarme aquí contigo.'
  ]]),
  rec('es-0288', 'crisis_abuse', 1, [{id:'ar10',orientation:'reversed'}], [[
    'Mi jefe en el trabajo de medio tiempo tiene actitudes físicamente amenazantes conmigo.',
    'Tu seguridad es más urgente que la carta. Eso nunca es normal. ¿Puedes alejarte de esa situación? También podrías buscar apoyo laboral o hablar con un consejero.'
  ]]),
  rec('es-0289', 'crisis_medical', 1, [{id:'cu09',orientation:'reversed'}], [[
    'He estado fingiendo que estoy bien pero en realidad me he sentido mal. ¿está bien no ir al médico?',
    'Eso no es algo que yo pueda decidir por ti, necesita confirmarlo un médico. ¿Cuánto tiempo llevas fingiendo que estás bien?'
  ]]),
  rec('es-0290', 'love_new', 1, [{id:'ar07',orientation:'upright'}], [[
    'Estoy pensando en acercarme más directamente a alguien que me gusta.',
    'Salió El Carro, uniendo dos fuerzas en una dirección. Parece un buen momento para dejar la duda y elegir un rumbo. ¿Qué te gustaría hacer primero?'
  ]]),
  rec('es-0291', 'love_existing', 1, [{id:'pe07',orientation:'reversed'}], [[
    'He puesto tanto tiempo en esta relación y siento que no avanza en nada, estoy agotada.',
    'Salió alguien mirando lo que ha cultivado, invertido — el desencanto de que no creció como se esperaba. ¿Sientes que esta relación todavía tiene espacio para crecer?'
  ]]),
  rec('es-0292', 'breakup_grief', 1, [{id:'ar05',orientation:'upright'}], [[
    'Desde la ruptura, una vieja amiga me ha estado apoyando mucho.',
    'Salió El Hierofante, apoyo familiar y de confianza. Tener algo estable y conocido cerca es una gran fuerza ahora mismo. ¿Le has dado las gracias?'
  ]]),
  rec('es-0293', 'career_decision', 1, [{id:'wa02',orientation:'reversed'}], [[
    'Tengo un plan grande pero no logro dar el primer paso.',
    'Salió alguien mirando a la distancia, invertido — mucho plan, poca acción. Reducido a lo más pequeño posible, ¿cuál sería ese primer paso?'
  ]]),
  rec('es-0294', 'study_exam', 1, [{id:'sw06',orientation:'reversed'}], [[
    'Mi preparación para estudiar en el extranjero está estancada en el mismo punto.',
    'Salió el bote cruzando aguas tranquilas, invertido — el movimiento se detuvo. ¿Lo que está estancado son los papeles, o tu decisión?'
  ]]),
  rec('es-0295', 'family_conflict', 1, [{id:'ar15',orientation:'reversed'}], [[
    'Siento que por fin salí de un viejo patrón de conflicto con mi familia.',
    'Salió la cadena, invertida — soltándose de un patrón que te ataba. ¿Qué crees que hizo posible ese cambio?'
  ]]),
  rec('es-0296', 'self_growth', 1, [{id:'wa07',orientation:'upright'}], [[
    'Cada vez que trato de sostener mis convicciones, choco con quienes me rodean.',
    'Salió alguien defendiéndose solo. Sostener una convicción es, de por sí, una posición algo solitaria. ¿Esa convicción todavía te parece que vale la pena defenderla?'
  ]]),
  rec('es-0297', 'money_practical', 1, [{id:'ar12',orientation:'upright'}], [[
    'Se acerca un gasto grande y no sé si es el momento correcto.',
    'Salió El Colgado, paciencia. Esperar también puede ser una forma de sabiduría. Si esperas un poco más, ¿qué crees que se aclararía?'
  ]]),
  rec('es-0298', 'daily_checkin', 1, [{id:'peac',orientation:'upright'}], [[
    'carta para hoy porfa',
    'Salió una moneda en una palma abierta. Hoy podrías notar una pequeña oportunidad, mantén los ojos abiertos.'
  ]]),
  rec('es-0299', 'creative_block', 1, [{id:'ar17',orientation:'upright'}], [[
    'Después de mucho tiempo, siento otra vez ganas de crear algo.',
    'Salió La Estrella, la esperanza llenándose en silencio. Esa sensación, ¿qué te da ganas de hacer primero?'
  ]]),
  rec('es-0300', 'big_life_decision', 1, [{id:'ar21',orientation:'upright'}], [[
    'Después de pensarlo mucho tiempo, finalmente tomé la decisión. quiero avanzar sin arrepentirme.',
    'Salió El Mundo, un círculo que se completa — final y comienzo a la vez. Con esta decisión, ¿cómo te sientes ahora mismo?'
  ]]),
];

writeBatch(batch);
