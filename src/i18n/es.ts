import type { Copy } from './en'

export const es: Copy = {
  lang: 'es',
  title: 'F2+F3 — el gestor de capturas para Minecraft técnico',
  description:
    'Una app de escritorio que convierte tus capturas de Minecraft en un registro de coordenadas, biomas, mobs y builds, con un mod de Fabric que lo lleva dentro del juego.',
  nav: {
    use: 'Cómo funciona',
    app: 'La app',
    mod: 'El mod',
    tech: 'Por dentro',
    ai: 'IA',
    download: 'Descargar'
  },
  hero: {
    eyebrow: 'Gestor de capturas para Minecraft técnico',
    h1: 'Cada captura recuerda dónde se tomó',
    lead: 'F2+F3 lee las coordenadas, el bioma, los mobs y los builds de cada captura y los deja a un clic. Su mod de Fabric pone esa misma galería, tus planes del mapa y una lista de materiales dentro del juego.',
    platform: 'Plataforma',
    button: 'Descargar',
    meta: 'Gratis y de código abierto · MIT',
    caption: 'La galería, con los datos de cada captura leídos del juego.'
  },
  use: {
    eyebrow: 'En la práctica',
    h2: 'Tres teclas que ya conoces',
    lead: 'No hay nada que aprender. Sigues haciendo capturas como siempre.',
    steps: [
      {
        h: 'Pulsa F2',
        p: 'Haz la captura como siempre. Con el mod instalado, los datos exactos del juego se guardan junto a ella. Sin el mod, deja el F3 abierto y la app lo lee de la imagen.'
      },
      {
        h: 'Abre F2+F3',
        p: 'Tus capturas aparecen ordenadas por mundo y carpeta. Busca por bioma, dimensión o mob, y copia las coordenadas o un comando /tp con un clic.'
      },
      {
        h: 'Vuelve a ese lugar',
        p: 'Pulsa F6 en el juego, elige una captura y sigue la flecha. O fija en el HUD los materiales de un build y reúnelos.'
      }
    ]
  },
  app: {
    eyebrow: 'La app de escritorio',
    h2: 'Un launcher para tus capturas',
    lead: 'Se parece al Minecraft Launcher a propósito, para que se sienta parte del juego. Funciona con el launcher oficial y con launchers de instancias, con varias carpetas de juego a la vez.',
    features: [
      {
        img: 'gallery',
        h: 'Galería',
        p: 'Carpetas, favoritas, notas y etiquetas sobre tu carpeta real de capturas. Nada se copia ni queda encerrado en una base de datos.',
        li: [
          'Filtra por mundo, dimensión, bioma o mob',
          'Mueve, renombra y borra desde la app; los archivos de datos siguen a la imagen',
          'Un aviso te muestra cada captura nueva'
        ],
        alt: 'Galería de F2+F3 con una cuadrícula de capturas de Minecraft y etiquetas de bioma y coordenadas'
      },
      {
        img: 'details',
        h: 'Todo sobre una captura',
        p: 'Posición, chunk, orientación, luz, clima, modo de juego, el bloque y la entidad apuntados, mobs cercanos y estructuras. Cada dato indica de dónde salió.',
        li: [
          'Copia XYZ o un comando /tp listo para pegar',
          'Panel técnico: TPS y MSPT, mob caps, gamerules, señal de redstone, contenido de cofres',
          'Los tratos del aldeano al que apuntabas'
        ],
        alt: 'Visor de una captura con un panel de detalles: coordenadas, bioma, luz y datos técnicos'
      },
      {
        img: 'map',
        h: 'Mapa y planificadores',
        p: 'Cada captura es un punto en un mapa por mundo y dimensión. Cambia entre coordenadas del Overworld y del Nether, ve los bordes de chunks y regiones, y los chunks slime de tu semilla.',
        li: [
          'Planificador AFK: las esferas de aparición de 24 y 128 bloques y qué granjas quedan cargadas',
          'Planificador de portales: a dónde enlazará de verdad un portal',
          'Exporta waypoints para Xaero y JourneyMap'
        ],
        alt: 'Mapa con las capturas como puntos, cuadrícula de chunks, chunks slime y las esferas del planificador AFK'
      },
      {
        img: 'build',
        h: 'Builds que te puedes llevar',
        p: 'Con Mayús+F2 capturas un build junto a su foto. La app muestra su tamaño y sus materiales en stacks, exporta el .nbt o lo pega en otro mundo.',
        li: [
          'Formato estándar de estructura vanilla',
          'Lista de materiales lista para copiar',
          'Colócalo desde la galería del juego, girado hacia donde miras'
        ],
        alt: 'Sección de build con la lista de materiales en stacks'
      }
    ],
    extra: [
      {
        h: 'Respaldo en tu propio Google Drive',
        p: 'Inicia sesión con Google y las capturas y sus datos van a una carpeta de tu cuenta. La app solo ve los archivos que ella creó.'
      },
      {
        h: 'Español e inglés',
        p: 'Un botón cambia toda la interfaz. El mod sigue el idioma del juego.'
      },
      {
        h: 'Linux y Windows',
        p: 'AppImage e instalador para Windows. Puede iniciarse con el sistema y quedarse en la bandeja atenta a las capturas nuevas.'
      }
    ]
  },
  mod: {
    eyebrow: 'F2+F3 Companion · Fabric',
    h2: 'La app, dentro del juego',
    lead: 'Un mod de cliente para Minecraft 26.3, 1.21.1 y 1.20.1. No necesita ningún otro mod, ni siquiera Fabric API.',
    englishOnly: 'Las capturas del mod están tomadas con el juego en inglés; en español el mod sale en español.',
    cards: [
      {
        media: 'mod-gallery',
        h: 'Galería en el juego',
        keys: ['F6'],
        p: 'Tus capturas de este mundo con sus datos, notas y favoritas de la app. Copia las coordenadas o pide que te guíe hasta allí.'
      },
      {
        media: 'mod-materials',
        video: true,
        h: 'Lista de materiales fijada',
        keys: ['M'],
        p: 'Fija los materiales de un build a la derecha del HUD. Cuenta tu inventario mientras recolectas y marca cada línea hasta que lo tienes todo.'
      },
      {
        media: 'mod-plans',
        video: true,
        h: 'Tus planes del mapa en el mundo',
        keys: ['J', 'Mayús', 'J'],
        p: 'El punto AFK con sus esferas de 24 y 128 bloques, tus granjas, los portales enlazados y los chunks slime, dibujados donde están.'
      },
      {
        media: 'mod-build',
        h: 'Captura y coloca builds',
        keys: ['Mayús', 'F2'],
        p: 'Marca fondo, ancho y altura con la rueda, ponle nombre y queda guardado. Al colocarlo ves una caja que puedes girar y mover antes de confirmar, con deshacer.'
      },
      {
        media: 'mod-guide',
        h: 'Guía',
        keys: ['H'],
        p: 'Una flecha en el HUD con la distancia y cuánto subir o bajar. Entre el Overworld y el Nether apunta a las coordenadas equivalentes.'
      },
      {
        media: 'mod-sidecar',
        h: 'Datos exactos con cada F2',
        keys: ['F2'],
        p: 'Un pequeño archivo JSON junto a la imagen con lo que el juego sabe: semilla, bioma, estructuras en las que estás, mobs visibles, gamerules y tick rate.'
      }
    ]
  },
  tech: {
    eyebrow: 'Por dentro',
    h2: 'Cómo lo sabe',
    lead: 'Una captura puede describirse con hasta cinco fuentes. Cada una se guarda por separado y la app muestra siempre la más fiable disponible, indicando su origen.',
    ladder: [
      {
        name: 'Mod',
        badge: 'Exacto',
        tier: 'var(--green-light)',
        p: 'El archivo que escribe el mod en el momento de la captura. Leído directamente del juego, incluido lo que el F3 nunca muestra.'
      },
      {
        name: 'F3',
        badge: 'Exacto',
        tier: 'var(--green-light)',
        p: 'OCR de la pantalla de depuración. Sin aprendizaje automático: la app carga la fuente del juego de tu versión instalada y compara sus glifos píxel a píxel.'
      },
      {
        name: 'IA avanzada',
        badge: 'Estimado',
        tier: 'var(--blue)',
        p: 'Opcional, con tu propia clave o un Ollama local. Un modelo de visión describe la escena, incluidas las estructuras.'
      },
      {
        name: 'Modelo local',
        badge: 'Local',
        tier: 'var(--yellow)',
        p: 'Descarga opcional de 170 MB que funciona sin conexión en tu CPU. Bioma y mob apuntado, y solo cuando está seguro.'
      },
      {
        name: 'Colores',
        badge: 'Aproximado',
        tier: 'var(--text-3)',
        p: 'Siempre disponible. Dimensión y una idea general de la escena a partir de los colores de la imagen.'
      }
    ],
    ladderNote:
      'Un valor que pones a mano gana a todas. Reanalizar una captura conserva los resultados de la IA y los manuales, así que nada se paga dos veces.',
    ocr: {
      h: 'Leer el F3 sin adivinar',
      p: [
        'Minecraft dibuja su pantalla de depuración con una fuente de mapa de bits, así que cada carácter es un patrón exacto de píxeles. F2+F3 extrae esa fuente del jar de tu versión instalada, deduce la escala de la interfaz de la captura y compara los glifos directamente. El resultado es el número que imprimió el juego, no una aproximación.',
        'Después, el parser entiende la disposición de cada versión: posición, chunk, orientación, luz, el bloque apuntado con su estado y etiquetas, TPS y MSPT del servidor, estado de /tick, día y los contadores de mob cap por categoría.'
      ]
    },
    contract: {
      h: 'Un contrato pequeño entre mod y app',
      p: 'El mod y la app nunca hablan entre sí. Comparten cuatro archivos, validados con un esquema en el que cada sección falla por separado: un bloque de datos mal formado se descarta y el resto se conserva.',
      files: [
        ['NOMBRE.f2f3.json', 'mod → app', 'Datos exactos de una captura'],
        ['NOMBRE.f2f3.nbt', 'mod → app', 'El build, como estructura vanilla'],
        ['f2f3/app-index.json', 'app → mod', 'Notas, etiquetas y fichas para la galería del juego'],
        ['f2f3/plans.json', 'app → mod', 'Planes AFK y de portales por mundo']
      ],
      cols: ['Archivo', 'Sentido', 'Contenido']
    },
    arch: {
      h: 'Arquitectura',
      p: 'Electron, React y TypeScript, separados de modo que la lógica importante no depende de Electron y se prueba por su cuenta.',
      boxes: [
        ['core/', 'Lógica pura: fuente y OCR, parser del F3, lector de NBT, visión local, resolución del análisis. Sin Electron.'],
        ['main/', 'Servicios: biblioteca, pool de workers de análisis, miniaturas, vigilante de capturas, respaldo en Drive, proveedores de IA.'],
        ['shared/', 'Contrato IPC tipado, catálogos, chunks slime, planificadores, cálculo de colocación, traducciones.'],
        ['renderer/', 'React y Zustand. No puede importar core: solo ve el puente tipado.']
      ],
      li: [
        'El análisis corre en hilos de trabajo y se cachea por tamaño y fecha de modificación del archivo',
        'Aislamiento de contexto, sandbox y una CSP estricta; las claves de API no salen del proceso principal y se cifran con el llavero del sistema',
        '172 tests automáticos con datos reales: capturas del F3, archivos del mod y builds .nbt de cada versión soportada'
      ]
    },
    mechanics: {
      h: 'Mecánicas del juego, comprobadas contra el juego',
      p: 'Los planificadores no se fían del folclore de las wikis. Las reglas se leyeron del bytecode del juego y la fórmula de los chunks slime está validada contra el generador aleatorio del propio juego.',
      li: [
        'Los mobs aparecen entre 24 y 128 bloques del jugador, en una esfera 3D',
        'Un chunk genera mobs solo si su centro está a menos de 128 bloques en horizontal',
        'Los portales buscan en un cuadrado de ±16 bloques en el Nether y ±128 en el Overworld, en toda la altura, y eligen el más cercano en 3D',
        'Chunks slime calculados desde la semilla con aritmética de 64 bits'
      ]
    },
    modTech: {
      h: 'Un mod, tres versiones de Minecraft',
      p: 'El mod se escribe una vez contra 26.3, que ya viene sin ofuscar. Los ports a 1.21.1 y 1.20.1 conservan el mismo código y añaden una capa fina de compatibilidad que imita las clases nuevas, de modo que portar una función es copiarla.',
      li: [
        'Todos los ganchos son mixins: captura, tick, HUD, teclado y rueda del ratón',
        'Los archivos se escriben fuera del hilo del juego, a un temporal que luego se mueve, así la app nunca lee medio archivo',
        'Los builds se colocan a través del servidor integrado, no con comandos, así que funciona sin trucos'
      ],
      cols: ['Minecraft', 'Java', 'Mappings', 'Dibujo de formas en el mundo'],
      rows: [
        ['26.3', '25', 'No hacen falta', 'API de gizmos del juego'],
        ['1.21.1', '21', 'Oficiales de Mojang', 'Capa propia sobre Tesselator'],
        ['1.20.1', '17', 'Oficiales de Mojang', 'Capa propia, PoseStack']
      ]
    }
  },
  ai: {
    eyebrow: 'Inteligencia artificial',
    h2: 'IA, con los números sobre la mesa',
    lead: 'Cuando no hay mod ni F3 en pantalla, solo queda la imagen. Para ese caso F2+F3 tiene dos niveles de IA. Los dos son opcionales, los dos se marcan como estimaciones, y medimos cuánto acierta el local.',
    local: {
      h: 'El modelo local',
      p: [
        'Un modelo de visión CLIP ViT-B/32 en media precisión, ejecutado con ONNX en tu CPU. No se sube nada. Funciona zero-shot: en lugar de entrenar un clasificador, la imagen se compara con descripciones en texto de cada bioma y mob.',
        'Esas descripciones se convierten en vectores una sola vez, al compilar la app, y viajan como un pequeño archivo JSON. Por eso solo descargas la mitad de visión del modelo: 170 MB en lugar del par completo.'
      ],
      li: [
        'Dos recortes por captura: la escena sin las columnas del F3 ni la barra de objetos para el bioma, y la zona de la mira para el mob',
        'Los candidatos se limitan a la dimensión: no hay ghasts en el Overworld',
        'Solo responde por encima de un umbral de confianza y con margen claro sobre el segundo candidato',
        'Comprobaciones de color vetan respuestas imposibles: una arboleda de cerezos necesita rosa, un desierto necesita arena',
        'Las estructuras se dejan al nivel avanzado: los modelos zero-shot locales no las distinguían en nuestras pruebas'
      ]
    },
    results: {
      h: 'Medido, no prometido',
      p: 'Montamos un conjunto etiquetado dentro del juego: el mod escribió el bioma real de cada captura e invocamos cada mob frente a la mira. Después, el modelo local analizó las imágenes sin esos datos.',
      precisionBiome: 'precisión en biomas',
      precisionBiomeNote: 'acertó {c} de las {a} respuestas que dio',
      precisionMob: 'precisión en mobs',
      precisionMobNote: 'acertó {c} de las {a} respuestas que dio',
      falseAlarm: 'falsas alarmas de mob',
      falseAlarmNote: '{a} de {t} capturas sin mob en la mira',
      speed: 'por captura',
      speedNote: 'en CPU, con los dos recortes',
      chart: 'Qué hizo con cada captura',
      rows: {
        biomeKnown: 'Biomas que conoce',
        biomeUnknown: 'Biomas para los que no tiene etiqueta',
        mob: 'Mob en la mira'
      },
      legend: { ok: 'Acierta', bad: 'Falla', skip: 'No responde' },
      of: '{n} capturas',
      reading:
        'Con los mobs el modelo hace lo que se diseñó para hacer: calla la mayor parte del tiempo y, cuando habla, suele acertar. Los biomas son su punto débil. Un modelo de propósito general confunde biomas vecinos y no tiene etiqueta para muchos de ellos; por eso la app muestra su bioma como una estimación que puedes corregir, y por eso las fuentes exactas siempre ganan.',
      method: 'Método',
      methodLi: [
        '{n} capturas tomadas en Minecraft 26.3 a {res}, con el paquete de recursos por defecto, mediante un script que se teletransporta a cada bioma',
        'Cinco capturas por sitio de bioma desde puntos y ángulos distintos, cuatro a mediodía y una al anochecer; cada mob a entre tres y cinco bloques, en tres escenarios por dimensión, uno de ellos de noche',
        'Verdad de referencia: el bioma que da el juego en la posición del jugador y el mob invocado',
        'La dimensión se dio como dato, igual que la da el F3; el F3 en sí estaba oculto',
        'No se muestrearon biomas subterráneos, y el bioma es el del punto donde está el jugador, que cerca de un borde no siempre es el que se ve'
      ],
      perBiome: 'Resultados por bioma',
      perMob: 'Resultados por mob',
      cols: ['', 'Capturas', 'Acierta', 'Falla', 'No responde']
    },
    advanced: {
      h: 'El nivel avanzado',
      p: 'Para las capturas que importan, un modelo de visión grande describe lo que uno pequeño no puede: estructuras, clima, momento del día, todos los mobs del encuadre. Tú eliges el proveedor y usas tu propia clave.',
      li: [
        'Claude, OpenAI o cualquier endpoint compatible, Gemini, u Ollama en tu propia máquina',
        'La respuesta debe cumplir un esquema fijo y se valida antes de guardarse',
        'Lo que ya leyó el F3 se pasa como contexto, y se le pide al modelo que ignore el texto de depuración',
        'El análisis por lotes pide confirmación con el número de peticiones antes de gastar nada',
        'Las claves se guardan cifradas en tu equipo y nunca llegan al código de la interfaz'
      ]
    },
    built: {
      h: 'Hecho con IA, también',
      p: 'F2+F3 se desarrolló en pareja con Claude Code: la app, el mod y sus ports, los tests y esta evaluación. Cada commit de los dos repositorios lo indica.'
    }
  },
  download: {
    eyebrow: 'Descargar',
    h2: 'Consigue F2+F3',
    lead: 'Gratis y de código abierto. La app incluye el mod: Ajustes › Guardar el mod deja el jar correcto en tu carpeta mods.',
    appH: 'App de escritorio',
    modH: 'Mod Companion · Fabric',
    modNote: 'Solo cliente. Requiere Fabric Loader. No necesita Fabric API.',
    source: 'Código fuente'
  },
  footer: {
    disclaimer:
      'No es un producto oficial de Minecraft. No está aprobado por Mojang o Microsoft ni asociado con ellos.',
    made: 'Hecho por Moises Guevara.'
  }
}
