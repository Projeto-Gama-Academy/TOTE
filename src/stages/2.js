const banco = require("../banco");
//const stages = require("../stages");

function execute(user, msg) {
  if (msg === "0") {
    banco.db[user].stage = 0;
    return ["Volta pro menu"];
  }

   return [`Para doações:\n Acesse o link abaixo\n www.techo.org/brasil/doar/\n\n
   Para ser um voluntários: Acesse o link abaixo:\n 
   https://www.techo.org/brasil/voluntariado-no-teto/\n\n
   Para voltar no menu digite 0`];
}

exports.execute = execute;