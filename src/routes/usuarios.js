var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function(req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function(req, res) {
    usuarioController.listar(req, res);
});

router.get("/select", function(req,res){
    usuarioController.selecionar(req,res);
})

router.post("/cadastrar", function(req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function(req, res) {
    usuarioController.entrar(req, res);
});

router.post("/inserir_quiz", function(req, res) {
    usuarioController.inserir_quiz(req, res);
});
  
router.get("/tudo", function(req, res) {
    usuarioController.tudo(req, res);
});
module.exports = router;