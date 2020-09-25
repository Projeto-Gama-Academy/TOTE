const opcoes = require("../opcoes");
const banco = require("../banco");

function execute(user, msg) {

  if (msg === "1") {
    banco.db[user].stage = 3;
    return stages.step[3];
  }

  if (msg === "2") {
    banco.db[user].stage = 4;
    console.log(stages.step[4]);
    return stages.step[4];
  }

  if (msg === "3") {
    banco.db[user].stage = 5;
    return stages.step[5];
  }

  if (msg === "4") {
    banco.db[user].stage = 6;
    return stages.step[6];
  }

  if (msg === "0") {
    banco.db[user].stage = 1;
    return ["Bloco 0 menu inicial"];
  }

  if (!opcoes.menu[msg]) {
    return ["Escolha as opções de 0 a 4"];
  }

  return [
    "```Não consegui tente de novo```",
  ];
}

exports.execute = execute;