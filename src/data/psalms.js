/**
 * Exemplo de estrutura do salmo
 *
 * {
 *  titulo: 'Salmo 1b', // Título do salmo
 *
 *  estrofes: [
 *    [ // Primeira estrofe
 *      { // Primeiro verso
 *        cifra: 'F            C7  Dm     C F   Edim    F  C', // Cifra do verso, se não existir cifra não por esta linha
 *        texto: 'Quão bem aventurado é o homem que não anda'  // Texto do verso
 *      }
 *    ],
 *
 *    [ // Segunda estrofe
 *      {
 *        cifra: 'C7            Bb   F            Gm     F C7  F',
 *        texto: 'Conforme as ímpias sugestões de conselheiros maus.'
 *      }
 *    ]
 * ]
 *
 * }
 *
 */

const Psalms = [
  {
    titulo: 'Salmo 1b', // Título do salmo

    estrofes: [
      [
        // Primeira estrofe
        {
          // Primeiro verso
          cifra: '|F| | | | | | | |     C7  Dm     C F   Edim    F  C', // Cifra do verso, se não existir cifra não por esta linha
          texto: '|Q|u|ã|o| |b|e|m| aventurado é o homem que não anda', // Texto do verso
        },

        {
          // Segundo verso
          cifra: 'C7            Bb   F            Gm     F C7  F',
          texto: 'Conforme as ímpias sugestões de conselheiros maus.',
        },
      ],

      [
        // Segunda estrofe
        {
          // Primeiro verso
          cifra: 'F            C7  Dm     C F   Edim    F  C', // Cifra do verso, se não existir cifra não por esta linha
          texto: 'Não se detém no caminhar de homens pecadores', // Texto do verso
        },

        {
          // Segundo verso
          cifra: 'C7            Bb   F            Gm     F C7  F',
          texto: 'Nem se assenta em comunhão com o escarnecedor.',
        },
      ],

      [
        // 3
        {
          // Primeiro verso
          cifra: 'F            C7  Dm     C F   Edim    F  C', // Cifra do verso, se não existir cifra não por esta linha
          texto: 'Porém, o seu prazer está na santa lei de Deus', // Texto do verso
        },

        {
          // Segundo verso
          cifra: 'C7         Bb F           Gm   F   C7  F',
          texto: 'E dia e noite nessa lei medita sem cessar.',
        },
      ],
    ],
  },

  {
    titulo: 'Salmo 2b', // Título do salmo

    estrofes: [
      [
        // Primeira estrofe
        {
          // Primeiro verso
          cifra: 'F            C7  Dm     C F   Edim    F  C', // Cifra do verso, se não existir cifra não por esta linha
          texto: 'Quão bem aventurado é o homem que não anda', // Texto do verso
        },

        {
          // Segundo verso
          cifra: 'C7            Bb   F            Gm     F C7  F',
          texto: 'Conforme as ímpias sugestões de conselheiros maus.',
        },
      ],

      [
        // Segunda estrofe
        {
          // Primeiro verso
          cifra: 'F            C7  Dm     C F   Edim    F  C', // Cifra do verso, se não existir cifra não por esta linha
          texto: 'Não se detém no caminhar de homens pecadores', // Texto do verso
        },

        {
          // Segundo verso
          cifra: 'C7            Bb   F            Gm     F C7  F',
          texto: 'Nem se assenta em comunhão com o escarnecedor.',
        },
      ],
    ],
  },

  {
    titulo: 'Salmo 3b', // Título do salmo

    estrofes: [
      [
        // Primeira estrofe
        {
          // Primeiro verso
          texto: 'Quão bem aventurado é o homem que não anda', // Texto do verso
        },

        {
          // Segundo verso
          texto: 'Conforme as ímpias sugestões de conselheiros maus.',
        },
      ],

      [
        // Segunda estrofe
        {
          // Primeiro verso
          texto: 'Não se detém no caminhar de homens pecadores', // Texto do verso
        },

        {
          // Segundo verso
          texto: 'Nem se assenta em comunhão com o escarnecedor.',
        },
      ],
    ],
  },
];

export default Psalms;
