const banco = require("../banco");
const stages = require("../stages");

function execute(user, msg) {
  if (msg === "0") {
    banco.db[user].stage = 1;
    return;
  }

   return [`*PROJETOS EM ANDAMENTO:*
*Programa de moradia emergenciais*
https://www.facebook.com/watch/?v=10159019632383125&extid=esPIU0Chk3gdl3pm

*Um Só Teto 2020*
Encontro LatinoAmericano de Voluntariado
De 31 de agosto a 4 de setembro
*Inscreva-se:*
https://techoorg.wixsite.com/unsolotecho?lang=pt

Para voltar no menu digite *0* e tecle enter e em sequida *s* e o enter para confirmar.
`];
}

exports.execute = execute;
