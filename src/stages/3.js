const banco = require("../banco");
//const stages = require("../stages");

function execute(user, msg) {
  if (msg === "0") {
    banco.db[user].stage = 1;
    return;
  }
   return [`*Para doações acesse o link:*
www.techo.org/brasil/doar/

*Para ser um voluntários acesse:*
https://www.techo.org/brasil/voluntariado-no-teto/

Para voltar no menu digite *0* e tecle enter e em sequida *s* e o enter para confirmar.`];
}

exports.execute = execute;