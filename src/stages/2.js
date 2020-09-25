const opcoes = require("../opcoes");
const banco = require("../banco");

function execute(user, msg) {

  if (msg === "1") {
    banco.db[user].stage = 3;
    return;
  }

  if (msg === "2") {
    banco.db[user].stage = 4;
    return;
  }

  if (msg === "3") {
    banco.db[user].stage = 5;
    return;
  }

  if (msg === "4") {
    banco.db[user].stage = 6;
    return;
  }

  if (msg === "0") {
    banco.db[user].stage = 1;
    return;
  }  

  return [
    "```Digite uma opção válida, números de 0 e 4```",
  ];
}

exports.execute = execute;