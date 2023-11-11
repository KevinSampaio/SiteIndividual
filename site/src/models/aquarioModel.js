var database = require("../database/config");

function buscarAquariosPorEmpresa(equipeId) {

  instrucaoSql = `select * from equipe where fk_equipe = ${equipeId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(equipeId, nomeEquipe) {
  
  instrucaoSql = `insert into (nomeEquipe, fk_equipe ) equipe values (${nomeEquipe}, ${equipeId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}
