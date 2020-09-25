const banco = require("../banco");
const stages = require("../stages");

function execute(user, msg) {
  if (msg === "0") {
    banco.db[user].stage = 1;
    return ["X"];
  }

   return [`*Projetos em Andamento:*\n 
Programa de moradia emergenciais\nhttps://www.facebook.com/watch/?v=10159019632383125&extid=esPIU0Chk3gdl3pm\n
Um Só Teto 2020
Encontro LatinoAmericano de Voluntariado
De 31 de agosto a 4 de setembro
Inscreva-se:\n
https://techoorg.wixsite.com/unsolotecho?lang=pt\n
Para voltar no menu digite *0* e tecle enter e em sequida *s* e o enter para confirmar
`];
}

exports.execute = execute;
