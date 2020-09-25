const opcoes = require("../opcoes");
const banco = require("../banco");

function execute(user, msg) {

  if (msg === "1") {
    banco.db[user].stage = 3;
    return ["Bloco 3",
    stages.step[2]];
  }

  if (msg === "2") {
    banco.db[user].stage = 4;
    return ["Bloco 3",
    stages.step[3]];
  }

  if (msg === "3") {
    banco.db[user].stage = 5;
    return ["Bloco 4",
    stages.step[4]];
  }

  if (msg === "4") {
    banco.db[user].stage = 6;
    return ["Bloco 5",
    stages.step[5]];
  }

  if (msg === "0") {
    banco.db[user].stage = 1;
    return ["Bloco 0 menu inicial"];
  }

  if (!opcoes.menu[msg]) {
    return [
      "Digite alguma coisa",
    ];
  }

  return [
    "```Não consegui tente de novo```",
  ];
}

exports.execute = execute;