const cardapio = require("../cardapio");
const banco = require("../banco");

function execute(user, msg, contato) {
  let menu = " TETO\n";

  Object.keys(cardapio.menu).forEach((value) => {
    let element = cardapio.menu[value];
    menu += `${value} - ${element.descricao} \n`;
  });

  banco.db[user].stage = 1;

  return [
    `Olá sou o *TOTE*, meu trabalho na *TETO* é trazer mais doadores para superação da pobreza nas favelas mais precárias do país. 
    \nSeja também um amigo da *TETO* doando um pequeno valor.`,
    menu,
  ];
}

exports.execute = execute;