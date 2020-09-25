const cardapio = require("../opcoes");
const banco = require("../banco");

function execute(user, msg, contato) {
  let menu = " TETO\n";

  Object.keys(cardapio.menu).forEach((value) => {
    let element = opcoes.menu[value];
    menu += `${value} - ${element.descricao} \n`;
  });

  banco.db[user].stage = 2;

  return [
    menu,
  ];
}

exports.execute = execute;