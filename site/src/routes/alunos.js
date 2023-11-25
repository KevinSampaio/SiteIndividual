var express = require("express");
var router = express.Router();

var alunoController = require("../controllers/alunoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    alunoController.cadastrar(req, res);
})
router.post("/atualizacao", function (req, res) {
    alunoController.atualizacao(req, res);
})

router.post("/atualizacaoPeso", function (req, res) {
    alunoController.atualizacaoPeso(req, res);
})

router.post("/atualizacaoFaixa", function (req, res) {
    alunoController.atualizacaoFaixa(req, res);
})

router.get("/listarAluno", function (req, res) {
    alunoController.listarAluno(req, res);
});

router.get("/buscar", function (req, res) {
    alunoController.buscarPorNome(req, res);
});

router.get("/buscar/:fk_usuario", function (req, res) {
    alunoController.buscarPorFk(req, res);
});

router.post("/deletar", function (req, res) {
    alunoController.deletar(req, res);
})

router.get("/listarTotalAluno/:professorId", function (req, res) {
    alunoController.listarTotalAluno(req, res);
});


module.exports = router;