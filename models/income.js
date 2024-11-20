module.exports = (sequelize, Sequelize) => {
    const Income = sequelize.define("income", {
      id_income: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      value: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      }
    })
  
    return Income
  }