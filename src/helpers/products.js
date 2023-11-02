export const produtos = [
  {
    nome: "Coxinha de Frango",
    tipo: "unidade",
    descricao:
      "Perfeito para um lanche rápido ou para impressionar os convidados em qualquer ocasião.",
    preco: 6,
    disponivel: true,
    qtdDisponivel: 3,
    desconto: {
      tipo: "porcentagem",
      valor: 10,
    },
  },
  {
    nome: "Pão de Queijo",
    tipo: "peso",
    descricao:
      "A crosta dourada e crocante se abre para revelar um interior macio e recheado de queijo derretido, com um toque de umami que fará seus sentidos dançarem.",
    valorKG: 30,
    disponivel: true,
    qtdDisponivel: 2000,
    desconto: false,
  },
  {
    nome: "Novelo de Presunto, Queijo e Catupiry",
    tipo: "unidade/peso",
    descricao:
      "Camadas suculentas de presunto de alta qualidade, queijo derretido e o cremoso sabor do Catupiry, tudo cuidadosamente enrolado em uma massa macia e crocante.",
    valorKG: 40,
    disponivel: true,
    qtdDisponivel: 3,
    variacoes: [
      {
        peso: 800,
        preco: 33,
        qtdDisponivel: 2,
        desconto: {
          tipo: "porcentagem",
          valor: 10,
        },
      },
      {
        peso: 600,
        preco: 26,
        qtdDisponivel: 1,
        desconto: false,
      },
    ],
  },
];
