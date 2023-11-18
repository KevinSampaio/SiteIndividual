var express = require("express");
var router = express.Router();

var alunoController = require("../controllers/alunoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    alunoController.cadastrar(req, res);
})


module.exports = router;