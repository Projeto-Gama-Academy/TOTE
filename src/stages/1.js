const opcoes = require("../opcoes");
const banco = require("../banco");

function execute(user, msg, contato) {
  let menu = "*TETO*\n";

  Object.keys(opcoes.menu).forEach((value) => {
    let element = opcoes.menu[value];
    menu += `*${value}* - ${element.descricao}\n`;
  });

  banco.db[user].stage = 2;

  return [
    `${menu}
Escolha uma opção entre *1* e *4* e tecle enter e em sequida *s* e o enter para confirmar.`
  ];
}

exports.execute = execute;