const opcoes = require("../opcoes");
const banco = require("../banco");

function execute(user) {
  let menu = "*OPÇÕES*\n";

  Object.keys(opcoes.menu).forEach((value) => {
    let element = opcoes.menu[value];
    menu += `*${value}* - ${element.descricao}\n`;
  });

  banco.db[user].stage = 2;

  return [
    `Olá sou o *TOTE*, meu trabalho na *TETO* é trazer mais doadores para superação da pobreza nas favelas mais precárias do país.\nSeja também um amigo da *TETO* doando um pequeno valor.\n
${menu}\nEscolha uma opção(*1* - *4*) e tecle enter e em sequida *s* e o enter para confirmar\n`,
  ];
}

exports.execute = execute;