const db = require('./db')

const Produto = db.sequelize.define('produto', { 
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    
    titulo: {type: db.Sequelize.STRING,
             allowNull: false},
    valor: {type: db.Sequelize.STRING,
            allowNull: false},
    descritivo:{type: db.Sequelize.STRING},
    estoque:{type: db.Sequelize.STRING},
});

Produto.sync();
//Cliente.create({nome:'maria',email:'maria@norton.net.bt',senha:'345345'});

module.exports = Produto;