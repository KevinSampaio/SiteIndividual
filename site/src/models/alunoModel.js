var database = require("../database/config");

function cadastrar(nome, dtNasc, faixa, peso, professorId, equipeId) {
  
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, dtNasc, faixa, peso, equipeId, professorId);

    var query = `insert into aluno (nome, dtNascimento, faixa, peso, fk_usuario, fk_equipe) values ('${nome}', '${dtNasc}','${faixa}', '${peso}','${equipeId}','${professorId}')`;
  
    return database.executar(query);
  }

  function atualizacao(nome, alunoId) {
  
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome,);
  
    var query = `update aluno set nome = '${nome}' where id = '${alunoId}'`;
    
      return database.executar(query);
    }

    function atualizacaoFaixa(faixa, alunoId) {
  
      console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",faixa,);
    
        var query = `update aluno set faixa = '${faixa}' where id = '${alunoId}'`;
      
        return database.executar(query);
      }

      function atualizacaoPeso(peso, alunoId) {
  
        console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", peso,);
      
        var query = `update aluno set peso = '${peso}' where id = '${alunoId}'`;
        
          return database.executar(query);
        }

    function listarAluno() {
      var query = `select * from aluno`;
    
      return database.executar(query);
    }

    function buscarPorFk(fkusuario) {
      var query = `select count(nome) as totalAluno from aluno where fk_usuario = '${fkusuario}'`;
    
      return database.executar(query);
    }
  
    function buscarPorNome(nome) {
      var query = `select * from aluno where nome = '${nome}'`;
    
      return database.executar(query);
    }

    function deletar(alunoId) {
  
      console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():");
    
      var query = `delete from aluno where id = '${alunoId}'`;
      
        return database.executar(query);
      }

      function listarTotalAluno(professorId) {
        var query = `select count(fk_usuario) as totalAluno from aluno where fk_usuario = '${professorId}'`;
      
        return database.executar(query);
      }

      function listarBranca(professorId) {
        var query = `select count(faixa) as totalBranca from aluno where faixa = 'Branca' AND fk_usuario = '${professorId}'`;
      
        return database.executar(query);
      }

      function listarAzul(professorId) {
        var query = `select count(faixa) as totalAzul from aluno where faixa = 'Azul' AND fk_usuario = '${professorId}'`;
      
        return database.executar(query);
      }

      function listarAmarela(professorId) {
        var query = `SELECT COUNT(*) AS totalAmarela FROM aluno 
        WHERE (faixa LIKE '%amarelo%' OR faixa LIKE '%amarela%') 
        AND fk_usuario = '${professorId}'`;
      
        return database.executar(query);
      }

      function listarLaranja(professorId) {
        var query = `select count(faixa) as totalLaranja from aluno where faixa = 'Laranja' AND fk_usuario = '${professorId}'`;
      
        return database.executar(query);
      }

      function listarVerde(professorId) {
        var query = `select count(faixa) as totalVerde from aluno where faixa = 'Verde' AND fk_usuario = '${professorId}'`;
      
        return database.executar(query);
      }

      function listarRoxa(professorId) {
        var query = `SELECT COUNT(*) AS totalRoxa FROM aluno 
        WHERE (faixa LIKE '%roxo%' OR faixa LIKE '%roxa%') 
        AND fk_usuario = '${professorId}'`;
      
        return database.executar(query);
      }

      function listarCandidato(professorId) {
        var query = `SELECT COUNT(*) AS totalCandidatos FROM aluno 
        WHERE (faixa LIKE '%marrom%' OR faixa LIKE '%preta%' OR faixa LIKE '%preto%') 
        AND fk_usuario = '${professorId}'`;
      
        return database.executar(query);
      }

      function listarAlunos(professorId) {
        var query = `select * from aluno where fk_usuario = '${professorId}'`;
      
        return database.executar(query);
      }

  module.exports = {
    cadastrar,
    listarAluno,
    atualizacao,
    buscarPorFk,
    buscarPorNome,
    atualizacaoPeso,
    atualizacaoFaixa,
    deletar,
    listarTotalAluno,
    listarCandidato,
    listarBranca,
    listarAzul,
    listarAmarela,
    listarLaranja,
    listarVerde,
    listarRoxa,
    listarAlunos
};

