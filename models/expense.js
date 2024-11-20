module.exports = (sequelize, Sequelize) => {
    const Expense = sequelize.define("expense", {
      id_expense: {
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