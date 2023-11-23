var database = require("../database/config");

function cadastrar(nome, dtNasc, faixa, peso, altura, professorId, equipeId) {
  
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, dtNasc, faixa, peso, altura, equipeId, professorId);

    var query = `insert into aluno (nome, dtNasc, faixa, peso, altura, fk_usuario, fk_equipe) values ('${nome}', '${dtNasc}','${faixa}', '${peso}', '${altura}','${equipeId}','${professorId}')`;
  
    return database.executar(query);
  }

  function atualizacao(nome, dtNasc, faixa, peso, altura, professorId, equipeId) {
  
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, dtNasc, faixa, peso, altura, equipeId, professorId);
  
      var query = `insert into aluno (nome, dtNasc, faixa, peso, altura, fk_usuario, fk_equipe) values ('${nome}', '${dtNasc}','${faixa}', '${peso}', '${altura}','${equipeId}','${professorId}')`;
    
      return database.executar(query);
    }

    function listarAluno() {
      var query = `select * from aluno`;
    
      return database.executar(query);
    }

    function buscarPorId(id) {
      var query = `select * from aluno where id = '${id}'`;
    
      return database.executar(query);
    }
  
    function buscarPorNome(nome) {
      var query = `select * from aluno where nome = '${nome}'`;
    
      return database.executar(query);
    }

  module.exports = {
    cadastrar,
    listarAluno,
    atualizacao,
    buscarPorId,
    buscarPorNome
};

