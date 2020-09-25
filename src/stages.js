var stages = {
  0: {
    descricao: "Apresentação e menu",
    obj: require("./stages/0"),
  },
  1: {
    descricao: "Menu",
    obj: require("./stages/1"),
  },
  2: {
    descricao: "Escolha",
    obj: require("./stages/2"),
  },
  3: {
    descricao: "Quero contribuir",
    obj: require("./stages/3"),
  },
  4: {
    descricao: "Projetos em Andamento",
    obj: require("./stages/4"),
  },
  5: {
    descricao: "Rastreie sua doação ",
    obj: require("./stages/5"),
  },
  6: {
    descricao: "Perguntas Frequentes",
    obj: require("./stages/6"),
  },
};

exports.step = stages;
