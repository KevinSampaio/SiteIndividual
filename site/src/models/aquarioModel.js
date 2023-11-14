var database = require("../database/config");

function buscarAquariosPorEmpresa(fk_equipe) {

  instrucaoSql = ` select * from usuario join equipe on fk_equipe = equipe.id
  where fk_equipe = ${fk_equipe};  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(equipeId, nomeEquipe) {
  
  instrucaoSql = `insert into (nomeEquipe, fk_equipe) equipe values (${nomeEquipe}, ${equipeId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}
