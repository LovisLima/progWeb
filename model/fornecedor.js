const db = require('./db')

const Fornecedor = db.sequelize.define('fornecedor', { 
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    
    nome: {type: db.Sequelize.STRING,
             allowNull: false},
    cnpj: {type: db.Sequelize.STRING,
            allowNull: false,
            validate: {
                len: [17] }
            },
});



Fornecedor.sync();
//Cliente.create({nome:'maria',email:'maria@norton.net.bt',senha:'345345'});

module.exports = Fornecedor;