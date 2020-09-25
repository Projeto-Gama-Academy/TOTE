const cardapio = require("../cardapio");
const banco = require("../banco");

function execute(user, msg) {

  if (msg === "1") {
    banco.db[user].stage = 2;
    return ["Bloco 2",
    stages.step[2]];
  }

  if (msg === "2") {
    banco.db[user].stage = 3;
    return ["Bloco 3",
    stages.step[3]];
  }

  if (msg === "3") {
    banco.db[user].stage = 4;
    return ["Bloco 4",
    stages.step[4]];
  }

  if (msg === "4") {
    banco.db[user].stage = 5;
    return ["Bloco 5",
    stages.step[5]];
  }

  if (msg === "0") {
    banco.db[user].stage = 0;
    return ["Bloco 0 menu inicial"];
  }

  if (msg === "#") {
    banco.db[user].stage = 2;
    return ["Estamos fechando seu pedido, ok?"];
  }

  if (!cardapio.menu[msg]) {
    return [
      "Código inválido, digite corretamente",
      "```Digite # para finalizar ou * para cancelar```",
    ];
  }

  banco.db[user].itens.push(cardapio.menu[msg]);

  return [
    `Item(${cardapio.menu[msg].descricao}) adiconado com sucesso`,
    "```Digite # para finalizar ou * para cancelar```",
  ];
}

exports.execute = execute;