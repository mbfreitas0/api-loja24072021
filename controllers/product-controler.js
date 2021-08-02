const mysql = require('../mysql');

// Lista todos os produtos
exports.getProducts = async (req, res, next) => {
    pool.getConnection(function (err, connection) {
        connection.query("SELECT * FROM produtos", function (err, rows) {
            if (!err && rows.length > 0) {
                res.json(rows);
            } else {
                res.json([]);
            }
        });
    });
}

// Lista um produto por ID
exports.getProductByID = async (req, res, next) => {
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
}

// Insere um novo produto
exports.postProduct = async (req, res, next) => {
             
    pool.getConnection(function (err, connection) {
        var dados = req.body;
        var id_grupo = dados.id_grupo;
        var id_marca = dados.id_marca;
        var id_locacao = dados.id_locacao;
        var status = dados.status;
        var descricao = dados.descricao;
        var estoque_min = dados.estoque_min;
        var estoque_max = dados.estoque_max;
        
        connection.query(
            "INSERT INTO produtos (id_grupo, id_marca, id_locacao, status, descricao, estoque_min, estoque_max) VALUES ('" 
                + id_grupo + "','"
                + id_marca + "','"
                + id_locacao + "','"
                + status + "','"
                + descricao + "','"
                + estoque_min + "','"
                + estoque_max + "')", function (err, rows) {

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
}

// Atualiza um produto
exports.updateProduct = async (req, res, next) => {
    pool.getConnection(function (err, connection) {
        var dados = req.body;
        var id = req.params.id;
        var id_grupo = dados.id_grupo;
        var id_marca = dados.id_marca;
        var id_locacao = dados.id_locacao;
        var status = dados.status;
        var descricao = dados.descricao;
        var estoque_min = dados.estoque_min;
        var estoque_max = dados.estoque_max;

        connection.query(
            "UPDATE produtos SET id_grupo='" + id_grupo +
            "', id_marca= '" + id_marca +
            "', id_locacao= '" + id_locacao +
            "', status= '" + status +
            "', descricao= '" + descricao +
            "', estoque_min= '" + estoque_min +
            "', estoque_max= '" + estoque_max +
            "'WHERE id= '" + id +
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
}

//Deleta um produto
exports.deleteProduct = async (req, res, next) => {
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
}