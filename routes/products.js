var express = require('express');
const mysql = require('../mysql');
var router = express.Router();

const ProductsController = require('../controllers/product-controler');


//ROTA DE LISTAR PRODUTOS
router.get('/', ProductsController.getProducts);

//ROTA DE LISTAR PRODUTO PELO ID
router.get('/:id', ProductsController.getProductByID);

//ROTA DE INSERIR PRODUTO
router.post('/', ProductsController.postProduct);

//ROTA DE ATUALIZAR PRODUTO
router.patch('/:id', ProductsController.updateProduct);

//ROTA DE DELETAR PRODUTO
router.delete('/:id', ProductsController.deleteProduct);











// Listar produtos
/* 
router.get('/', function (req, res, next) {
    pool.getConnection(function (err, connection) {
        connection.query("SELECT * FROM produtos", function (err, rows) {
            if (!err && rows.length > 0) {
                res.json(rows);
            } else {
                res.json([]);
            }
        });
    });
});

// Buscar produto pelo id
router.get('/:id', function (req, res, next) {
    pool.getConnection(function (err, connection) {
        var id = req.params.id;
        connection.query("SELECT * FROM produtos WHERE id='"
            + id + "' LIMIT 1", function (err, rows) {
                if (!err && rows.length > 0) {
                    res.json(rows);
                } else {
                    res.json([]);
                }
            });
    });
});

// Cadastrar produtos
router.post('/', function (req, res, next) {
    pool.getConnection(function (err, connection) {
        var dados = req.body;
        var nome = dados.nome;
        var quant = dados.quant;

        connection.query(
            "INSERT INTO produtos (nome, quant) VALUES ('"
            + nome + "','"
            + quant +
            "')", function (err, rows) {

                if (rows.affectedRows) {
                    connection.query("SELECT * FROM produtos WHERE id='" + rows.insertId
                        + "' LIMIT 1", function (err, rows) {
                            if (!err && rows.length > 0) {
                                res.json(rows);
                            } else {
                                res.json([]);
                            }
                        });
                }
            });
    });
});

// Excluir produto
router.delete('/:id', function (req, res, next) {
    pool.getConnection(function (err, connection) {
        var id = req.params.id;
        connection.query("DELETE FROM produtos WHERE id='" + id +
            "'", function (err, rows) {
                if (!err) {
                    res.json({
                        "Excluído": true
                    });
                } else {
                    res.json([]);
                }
            });
    });
});

// Modificar produto
router.put('/:id', function (req, res, next) {
    pool.getConnection(function (err, connection) {
        var dados = req.body;
        var id = req.params.id;
        var nome = dados.nome;
        var quant = dados.quant;

        connection.query(
            "UPDATE produtos SET nome='" + nome +
            "', quant='" + quant +
            "'WHERE id='" + id +
            "'", function (err, rows) {

                if (rows.affectedRows) {
                    connection.query("SELECT * FROM produtos WHERE id='" + id
                        + "' LIMIT 1", function (err, rows) {
                            if (!err && rows.length > 0) {
                                res.json(rows[0]);
                            } else {
                                res.json([]);
                            }
                        });
                }
            });
    });
});
 */
module.exports = router;