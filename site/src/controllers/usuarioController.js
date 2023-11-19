var usuarioModel = require("../models/usuarioModel");
var equipeModel = require("../models/equipeModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        equipeModel.buscarPorId(resultadoAutenticar[0].equipeId)
                            .then((resultadoEquipes) => {
                                if (resultadoEquipes.length > 0) {
                                    res.json({
                                        id: resultadoAutenticar[0].id,
                                        email: resultadoAutenticar[0].email,
                                        nome: resultadoAutenticar[0].nome,
                                        cpf: resultadoAutenticar[0].cpf,
                                        senha: resultadoAutenticar[0].senha,
                                        equipeId: resultadoAutenticar[0].equipeId,
                                    });
                                } else {
                                    res.status(204).json({ equipes: [] });
                                }
                            })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var equipeId = req.body.equipeServer;
    var cpf = req.body.cpfServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (equipeId == undefined) {
        res.status(400).send("Sua equipe está undefined!");
    } else if (cpf == undefined) {
        res.status(400).send("Seu cpf está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, cpf, email, senha, equipeId)
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


function listarUsuarios(req, res) {
    usuarioModel.listarUsuarios().then((resultado) => {
      res.status(200).json(resultado);
    });
  }


  function buscarPorId(req, res) {
    var id = req.params.id;
    usuarioModel.buscarPorId(id).then((resultado) => {
      res.status(200).json(resultado);
    });
  }

  function buscarPorNome(req, res) {
    var nomeProfessor = req.query.nome;
  
    usuarioModel.buscarPorNome(nomeProfessor).then((resultado) => {
      res.status(200).json(resultado);
    });
  }

module.exports = {
    autenticar,
    cadastrar,
    listarUsuarios,
    buscarPorId,
    buscarPorNome
}