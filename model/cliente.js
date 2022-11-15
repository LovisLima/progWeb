const db = require('./db')

const Cliente = db.sequelize.define('cliente', {  

    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,},
    
    nome: {type: db.Sequelize.STRING,
            allowNull: false},
    email: {type: db.Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true              }
        },
    senha: {type: db.Sequelize.STRING, //colocar hash
            allowNull: false}
});

Cliente.sync();
//Cliente.create({nome:'maria',email:'maria@norton.net.bt',senha:'345345'});
Cliente.sync({alter: true})
module.exports = Cliente;
