var database = require("../database/config");

function buscarPorId(id) {
  var query = `select * from equipe where id = '${id}'`;

  return database.executar(query);
}

function listar() {
  var query = `select * from equipe`;

  return database.executar(query);
}

function buscarPorCnpj(cnpj) {
  var query = `select * from equipe where cnpj = '${cnpj}'`;

  return database.executar(query);
}

function cadastrar(nomeEquipe, cnpj) {
  var query = `insert into equipe (nomeEquipe, cnpj) values ('${nomeEquipe}', '${cnpj}')`;

  return database.executar(query);
}

module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar };
