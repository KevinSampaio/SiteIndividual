var database = require("../database/config");

function cadastrar(nome, dtNasc, faixa, peso, altura, professorId, equipeId) {
  
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, dtNasc, faixa, peso, altura, professorId, equipeId);

    var query = `insert into aluno (nome, dtNasc, faixa, peso, altura, fk_usuario, fk_equipe) values ('${nome}', '${dtNasc}','${faixa}', '${peso}', '${altura}','${professorId}','${equipeId}')`;
  
    return database.executar(query);
  }

  module.exports = {
    cadastrar
};

