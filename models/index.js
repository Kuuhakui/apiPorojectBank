const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize( dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host:               dbConfig.HOST,
    dialect:            dbConfig.dialect,
    operatorAliases:    false,
    schema:'ProjectBank',
    pool: {
        max:            dbConfig.pool.max,
        min:            dbConfig.pool.min,
        acquire:        dbConfig.pool.acquire,
        idle:           dbConfig.pool.idle
    },
    define:{
        timestamps:     true,
        createdAt:      false,
        updatedAt:      false,
        freezeTableName:true
      }
});

const db = { };
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("./user")(sequelize,Sequelize);
module.exports = db;