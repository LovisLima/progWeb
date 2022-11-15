const db = require('./db')

const Categoria = db.sequelize.define('categoria', {  
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,},
    
    nome: {type: db.Sequelize.STRING,
            allowNull: false},
    
});

Categoria.sync();
//Categoria.sync({alter: true})
module.exports = Categoria;