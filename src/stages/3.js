const banco = require("../banco");
//const stages = require("../stages");

function execute(user, msg) {
  if (msg === "0") {
    banco.db[user].stage = 1;
    return;
  }
   return [`*Para doações acesse o link:*\nwww.techo.org/brasil/doar/\n\n
*Para ser um voluntários acesse:*\n 
https://www.techo.org/brasil/voluntariado-no-teto/\n
Para voltar no menu digite *0* e tecle enter e em sequida *s* e o enter para confirmar`];
}

exports.execute = execute;