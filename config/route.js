var express = require("express");
const res = require("express/lib/response");
var router = express.Router();
var Cliente = require("../model/cliente");
var Produto = require("../model/produto");
var Categoria = require("../model/categoria");
var Fornecedor = require("../model/fornecedor")

//Cliente

router.get("/cliente", function (req, res) {
  Cliente.findAll().then(function(obj){    
      res.send(obj);
    }).catch(function(err){
      res.send('Oops! something went wrong, : ', err);
    });
  });

router.get("/cliente/:id", function (req, res) {
  Cliente.findAll({ where : {id: req.params.id }}).then(function(obj){    
      res.send(obj);
    }).catch(function(err){
      res.send('Oops! something went wrong, : ', err);
    });
  });

router.post("/cliente", function (req, res) {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
  Cliente.create({
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha}).then(
          function(){
            res.send("cliente criado com sucesso !!!"+ req.body.nome);
          }).catch(
            function(erro){
              res.send("ocorreu um erro !!");
            }
          );
});

router.put("/cliente/:id", function (req, res) { 
  Cliente.update({
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha},
    {
      where: {id: req.params.id}
    }).then(
        function(){
          res.send("cliente alterado com sucesso !!!"+ req.body.nome);
        }).catch(
          function(erro){
            res.send("ocorreu um erro !!");
          }
        );

});

router.delete("/cliente/:id", function (req, res) {  
  Cliente.destroy(    
    {where: {id: req.params.id}}
    ).then(
        function(){
          res.send("cliente removido com sucesso !!!"+req.params.id);
        }).catch(
          function(erro){
            res.send("ocorreu um erro !!");
          }
        );

});


//Produto

router.get("/produto", function (req, res) {
  Produto.findAll().then(function(obj){    
      res.send(obj);
    }).catch(function(err){
      res.send('Oops! something went wrong, : ', err);
    });
  });

router.get("/produto/:id", function (req, res) {
  Produto.findAll({ where : {id: req.params.id }}).then(function(obj){    
      res.send(obj);
    }).catch(function(err){
      res.send('Oops! something went wrong, : ', err);
    });
  });

router.post("/produto", function (req, res) {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
  Produto.create({
      titulo: req.body.titulo,
      valor: req.body.valor,
      descritivo: req.body.descritivo,
      estoque:req.body.estoque}).then(
          function(){
            res.send("produto criado com sucesso !!!"+ req.body.titulo);
          }).catch(
            function(erro){
              res.send("ocorreu um erro !!");
            }
          );
});

router.put("/produto/:id", function (req, res) { 
  Produto.update({
      titulo: req.body.nome,
      valor: req.body.email,
      descritivo: req.body.senha,
      estoque:req.body.estoque},
    {
      where: {id: req.params.id}
    }).then(
        function(){
          res.send("produto alterado com sucesso !!!"+ req.body.nome);
        }).catch(
          function(erro){
            res.send("ocorreu um erro !!");
          }
        );

});

router.delete("/produto/:id", function (req, res) {  
  Produto.destroy(    
    {where: {id: req.params.id}}
    ).then(
        function(){
          res.send("produto removido com sucesso !!!" + req.params.id);
        }).catch(
          function(erro){
            res.send("ocorreu um erro !!");
          }
        );

//Categoria
        router.get("/categoria", function (req, res) {
          Categoria.findAll().then(function(obj){    
              res.send(obj);
            }).catch(function(err){
              res.send('Oops! something went wrong, : ', err);
            });
          });
        
        router.get("/categoria/:id", function (req, res) {
          Categoria.findAll({ where : {id: req.params.id }}).then(function(obj){    
              res.send(obj);
            }).catch(function(err){
              res.send('Oops! something went wrong, : ', err);
            });
          });
        
        router.post("/categoria", function (req, res) {
        
          res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
          Categoria.create({
              titulo: req.body.titulo,
              }).then(
                  function(){
                    res.send("categoria criada com sucesso !!!" + req.body.titulo);
                  }).catch(
                    function(erro){
                      res.send("ocorreu um erro !!");
                    }
                  );
        });
        
        router.put("/categoria/:id", function (req, res) { 
          Categoria.update({
              titulo: req.body.nome,
             },
            {
              where: {id: req.params.id}
            }).then(
                function(){
                  res.send("categoria alterada com sucesso !!!" + req.body.nome);
                }).catch(
                  function(erro){
                    res.send("ocorreu um erro !!");
                  }
                );
        
        });
        
        router.delete("/categoria/:id", function (req, res) {  
          Categoria.destroy(    
            {where: {id: req.params.id}}
            ).then(
                function(){
                  res.send("categoria removida com sucesso !!!" + req.params.id);
                }).catch(
                  function(erro){
                    res.send("ocorreu um erro !!");
                  }
                );
          

        });
        

//Fornecedor
        router.get("/fornecedor", function (req, res) {
          Fornecedor.findAll().then(function(obj){    
              res.send(obj);
            }).catch(function(err){
              res.send('Oops! something went wrong, : ', err);
            });
          });

        router.get("/fornecedor/:id", function (req, res) {
          Fornecedor.findAll({ where : {id: req.params.id }}).then(function(obj){    
              res.send(obj);
            }).catch(function(err){
              res.send('Oops! something went wrong, : ', err);
            });
          });

        router.post("/fornecedor", function (req, res) {

          res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
          Fornecedor.create({
              titulo: req.body.titulo,
              }).then(
                  function(){
                    res.send("fornecedor criado com sucesso !!!" + req.body.titulo);
                  }).catch(
                    function(erro){
                      res.send("ocorreu um erro !!");
                    }
                  );
        });

        router.put("/fornecedor/:id", function (req, res) { 
          Fornecedor.update({
              titulo: req.body.nome,
            },
            {
              where: {id: req.params.id}
            }).then(
                function(){
                  res.send("fornecedor alterado com sucesso !!!" + req.body.nome);
                }).catch(
                  function(erro){
                    res.send("ocorreu um erro !!");
                  }
                );

        });

        router.delete("/fornecedor/:id", function (req, res) {  
          Fornecedor.destroy(    
            {where: {id: req.params.id}}
            ).then(
                function(){
                  res.send("fornecedor removido com sucesso !!!" + req.params.id);
                }).catch(
                  function(erro){
                    res.send("ocorreu um erro !!");
                  }
                );
          

});
  

});
module.exports = router;