var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT id, nome, cpf, email, fk_equipe as equipeId FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, cpf, email, senha, equipeId) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, cpf, email, senha, fk_equipe) VALUES ('${nome}', '${cpf}', '${email}', '${senha}', '${equipeId}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarUsuarios() {
    var query = `select * from usuario`;
  
    return database.executar(query);
  }

  function buscarPorId(id) {
    var query = `select * from usuario where id = '${id}'`;
  
    return database.executar(query);
  }

  function buscarPorNome(nome) {
    var query = `select * from usuario where nome = '${nome}'`;
  
    return database.executar(query);
  }


module.exports = {
    autenticar,
    cadastrar,
    listarUsuarios,
    buscarPorId,
    buscarPorNome
};