var database = require("../database/config");

function cadastrar(nome, dtNasc, faixa, peso, altura) {
  
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, dtNasc, faixa, peso, altura);

    var query = `insert into aluno (nome, dtNasc, faixa, peso, altura) values ('${nome}', '${dtNasc}','${faixa}', '${peso}', '${altura}')`;
  
    return database.executar(query);
  }

  module.exports = {
    cadastrar
};

