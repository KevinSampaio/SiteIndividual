var alunoModel = require("../models/alunoModel");

function cadastrar(req, res){
var nome = req.body.nomeServer;
var dtNasc = req.body.dtNascServer;
var faixa = req.body.faixaServer;
var peso = req.body.pesoServer;
var altura = req.body.alturaServer;
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
}else if (peso == undefined) {
    res.status(400).send("Seu peso está undefined!");
} else if (altura == undefined) {
    res.status(400).send("Seu altura está undefined!");
} else if (professorId == undefined) {
    res.status(400).send("Seu professor está undefined!");
} else{

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    alunoModel.cadastrar(nome, dtNasc, faixa, peso, altura)
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

module.exports = {
    cadastrar
}