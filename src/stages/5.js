const banco = require("../banco");
//const stages = require("../stages");

function execute(user, msg) {
  if (msg === "0") {
    banco.db[user].stage = 1;
    return;
  }

   return [
   `*Suas últimas doações ajudaram aos projetos:*
   
*Bahia*\nMuitas moradias e projetos foram concluídos na Bahia no último ano. 
Em um só fim de semana, foram colocadas de pé 21 moradias de emergência, o maior número
de construções da história da organização no Estado.
As comunidades atendidas foram a Fazenda Cajueiro
e o Quilombo Kingoma.

*Minas Gerais*
Em Minas, a TETO construiu 59 moradias de emergência
- e não parou por aí. Também foi entregue o primeiro projeto
comunitário do estado, uma escada na comunidade Terra
Nossa, conhecida pelo terreno íngreme e irregular,
e realizado o primeiro Mutirão de Habitat da organização,
no qual foram construídas, em um fim de semana,
21 moradias e um projeto comunitário.

*Se quiser mais detalhes dos projetos acesse:*
https://d335luupugsy2.cloudfront.net/cms/files/131216/1593466534relatrio_2019_teto_nacional_final_otimizado.pdf

Para voltar no menu digite *0* e tecle enter e em sequida *s* e o enter para confirmar.`
  ];
}

exports.execute = execute;
