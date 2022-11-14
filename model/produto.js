const db = require('./db')

const Produto = db.sequelize.define('produto', {  
    codigo: {type: db.Sequelize.STRING},
    titulo: {type: db.Sequelize.STRING},
    valor: {type: db.Sequelize.STRING},
    descritivo:{type: db.Sequelize.STRING},
    estoque:{type: db.Sequelize.STRING},
});

Produto.sync();
//Cliente.create({nome:'maria',email:'maria@norton.net.bt',senha:'345345'});

module.exports = Produto;