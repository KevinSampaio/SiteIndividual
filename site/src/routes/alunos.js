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

router.post("/inserirCep", function (req, res) {
    alunoController.inserirCep(req, res);
})

// router = gets
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
router.get("/listarBranca/:professorId", function (req, res) {
    alunoController.listarBranca(req, res);
});
router.get("/listarAzul/:professorId", function (req, res) {
    alunoController.listarAzul(req, res);
});
router.get("/listarAmarela/:professorId", function (req, res) {
    alunoController.listarAmarela(req, res);
});
router.get("/listarLaranja/:professorId", function (req, res) {
    alunoController.listarLaranja(req, res);
});
router.get("/listarVerde/:professorId", function (req, res) {
    alunoController.listarVerde(req, res);
});
router.get("/listarRoxa/:professorId", function (req, res) {
    alunoController.listarRoxa(req, res);
});
router.get("/listarCandidato/:professorId", function (req, res) {
    alunoController.listarCandidato(req, res);
});

router.get("/listarAlunos/:professorId", function (req, res) {
    alunoController.listarAlunos(req, res);
});




module.exports = router;