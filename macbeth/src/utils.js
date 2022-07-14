export function mode(array) {
  if (array.length === 0) return null;
  var modeMap = {};
  var maxEl = array[0],
    maxCount = 1;
  for (var i = 0; i < array.length; i++) {
    var el = array[i];
    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;
    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    }
  }
  return maxEl;
}

export const questions = [
  {
    q: "Te gustaría obtener un ascenso en el trabajo ¿Qué harías?",
    n: 1,
    answers: [
      {
        char: "Macbeth",
        text: "Sabotear a tu jefe para que lo despidan y obtener su puesto.",
      },
      {
        char: "Lady Macbeth",
        text: "Convencer a tus colegas para que se revelen contra su jefe",
      },
      {
        char: "Banquo",
        text: "Esperar pacientemente con trabajo y esfuerzo",
      },
      {
        char: "Duncan",
        text: "Vos ya sos el jefe",
      },
      {
        char: "Macduff",
        text: "Presentando ideas innovadoras y creativas",
      },
    ],
  },
  {
    q: "¿A cuál de estos lugares preferís ir a comer?",
    n: 2,
    answers: [
      {
        char: "Macbeth",
        text: "Burger King",
      },
      {
        char: "Lady Macbeth",
        text: "Wendy's",
      },
      {
        char: "Banquo",
        text: "Mostaza",
      },
      {
        char: "Duncan",
        text: "McDonald's",
      },
      {
        char: "Macduff",
        text: "KFC",
      },
    ],
  },
  {
    q: "¿Cuál es tu materia preferida?",
    n: 3,
    answers: [
      {
        char: "Macbeth",
        text: "Ed. Física",
      },
      {
        char: "Lady Macbeth",
        text: "Ciencias Políticas",
      },
      {
        char: "Banquo",
        text: "ToK",
      },
      {
        char: "Duncan",
        text: "Historia",
      },
      {
        char: "Macduff",
        text: "Matemática",
      },
    ],
  },
  {
    q: "Si descubís que tu pareja te fue infiel…",
    n: 4,
    answers: [
      {
        char: "Macbeth",
        text: "Buscás al amante de tu pareja y lo/la agarrás a trompadas",
      },
      {
        char: "Lady Macbeth",
        text: "Nada. Están a mano.",
      },
      {
        char: "Banquo",
        text: "Lo/la perdonás y le propones matrimonio",
      },
      {
        char: "Duncan",
        text: "Le cortás.",
      },
      {
        char: "Macduff",
        text: "Tomás venganza.",
      },
    ],
  },
  {
    q: "¿A dónde te gustaría ir de vacaciones?",
    n: 5,
    answers: [
      {
        char: "Macbeth",
        text: "Roma",
      },
      {
        char: "Lady Macbeth",
        text: "El Caribe",
      },
      {
        char: "Banquo",
        text: "Disney",
      },
      {
        char: "Duncan",
        text: "Grecia",
      },
      {
        char: "Macduff",
        text: "Rusia",
      },
    ],
  },
  {
    q: "¿De qué signo sos o con cuál de estos signos tenés afinidad?",
    n: 6,
    answers: [
      {
        char: "Macbeth",
        text: "Cáncer",
      },
      {
        char: "Lady Macbeth",
        text: "Sagitario",
      },
      {
        char: "Banquo",
        text: "Escorpio",
      },
      {
        char: "Duncan",
        text: "Leo",
      },
      {
        char: "Macduff",
        text: "Capricornio",
      },
    ],
  },
  {
    q: "¿Cuál es tu recurso de estilo favorito?",
    n: 7,
    answers: [
      {
        char: "Macbeth",
        text: "Técnicas narrativas",
      },
      {
        char: "Lady Macbeth",
        text: "Figuras retóricas",
      },
      {
        char: "Banquo",
        text: "Maniobras narrativas",
      },
      {
        char: "Duncan",
        text: "Narrador y foco",
      },
      {
        char: "Macduff",
        text: "Los elementos sintáticos y gramaticales.",
      },
    ],
  },
];
