const banco = require("../banco");
//const stages = require("../stages");

function execute(user, msg) {
  if (msg === "0") {
    banco.db[user].stage = 1;
    return [""];
  }
   return [
  `*ESTOU INTERESSADO/A NO VOLUNTARIADO*\n
*Como posso ser um voluntário/a do TETO?*\n
Inscrevendo-se na página web do seu país ou se comunicando com o escritório do TETO mais próximo. 
Se você não tem tempo para se voluntariar, você pode se tornar um membro e contribuir com doações.\n
*Quando há atividades?*\n
Para conhecer as atividades do TETO em sua cidade, entre em contato com o escritório mais próximo.\n
*QUERO SABER MAIS SOBRE O TETO*
*TETO é o mesmo que “um Teto para o meu país”?*\n
Até 2012 fomos Um Teto para o meu país. Naquele ano, passamos por um processo de redefinição da visão, 
missão e novas abordagens de trabalho em comunidades precárias, até uma mudança de nome e imagem.
*O TETO continua construindo moradias de emergência?*\n
A situação de pobreza em que mais de 100 milhões de pessoas vivem em comunidades precárias é uma emergência permanente. É por isso que construímos moradias de emergência. No entanto, isso é apenas parte de um trabalho mais abrangente envolvendo jovens voluntários/as e habitantes de comunidades precárias. Saiba mais sobre o Modelo de Trabalho do TETO. Você também pode entrar em Gestão Social e Impacto e conhecer o efeito que a moradia de emergência tem nas famílias.
*O que é uma Comunidade Precária?*\n
O TETO define as comunidades precárias como um grupo de 8 ou mais famílias que vivem em uma terra que tem uma situação irregular em termos legais, e que tem a falta de acesso formal a pelo menos um serviço básico, como eletricidade, água e/ou esgoto. Saiba mais sobre a realidade das comunidades precárias.
Quer saber? Acesse esse link:
https://www.techo.org/brasil/perguntas-frequentes/`,
  ];
}

exports.execute = execute;