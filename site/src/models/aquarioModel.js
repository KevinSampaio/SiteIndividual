var database = require("../database/config");

function buscarUsuarioPorEquipe(idUsuario) {

  instrucaoSql = ` select * from usuario where id = ${idUsuario};  `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(equipeId, nomeEquipe) {
  
  instrucaoSql = `insert into (nomeEquipe, fk_equipe) equipe values (${nomeEquipe}, ${equipeId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarUsuarioPorEquipe,
  cadastrar
}
