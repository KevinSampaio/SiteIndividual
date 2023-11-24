var alunoModel = require("../models/alunoModel");

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var dtNasc = req.body.dtNascServer;
    var faixa = req.body.faixaServer;
    var peso = req.body.pesoServer;
    var equipeId = req.body.equipeServer;
    var professorId = req.body.professorServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (dtNasc == undefined) {
        res.status(400).send("Seu dtNasc está undefined!");
    } else if (faixa == undefined) {
        res.status(400).send("Sua faixa está undefined!");
    } else if (equipeId == undefined) {
        res.status(400).send("Sua equipe está undefined!");
    } else if (peso == undefined) {
        res.status(400).send("Seu peso está undefined!");
    } else if (professorId == undefined) {
        res.status(400).send("Seu professor está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        alunoModel.cadastrar(nome, dtNasc, faixa, peso, equipeId, professorId)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


}

function listarAluno(req, res) {
    alunoModel.listarAluno().then((resultado) => {
      res.status(200).json(resultado);
    });
  }


function atualizacao(req, res) {
    var nome = req.body.nomeServer;
    var alunoId = req.body.alunoServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (alunoId == undefined) {
        res.status(400).send("Seu dtNasc está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        alunoModel.atualizacao(nome, alunoId)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a troca! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


}

function atualizacaoPeso(req, res) {
    var alunoId = req.body.alunoServer;
    var peso = req.body.pesoServer;

    if (alunoId == undefined) {
        res.status(400).send("Seu dtNasc está undefined!");
    } else if (peso == undefined) {
        res.status(400).send("Seu peso está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        alunoModel.atualizacaoPeso(peso, alunoId)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a troca! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


}

function atualizacaoFaixa(req, res) {
    var alunoId = req.body.alunoServer;
    var faixa = req.body.faixaServer;

    if (alunoId == undefined) {
        res.status(400).send("Seu dtNasc está undefined!");
    } else if (faixa == undefined) {
        res.status(400).send("Sua faixa está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        alunoModel.atualizacaoFaixa(faixa, alunoId)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a troca! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }


}

function buscarPorId(req, res) {
    var id = req.params.id;
    alunoModel.buscarPorId(id).then((resultado) => {
      res.status(200).json(resultado);
    });
  }

  function buscarPorNome(req, res) {
    var nomeAluno = req.query.nome;
  
    alunoModel.buscarPorNome(nomeAluno).then((resultado) => {
      res.status(200).json(resultado);
    });
  }

module.exports = {
    cadastrar,
    listarAluno,
    atualizacao,
    buscarPorId,
    buscarPorNome,
    atualizacaoPeso,
    atualizacaoFaixa
}