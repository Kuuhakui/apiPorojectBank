module.exports = (sequelize, Sequelize) => {
    const BankAccount = sequelize.define("bank_account", {
      id_count: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name_count: {
        type: Sequelize.STRING
      },
      balance: {
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      id_income: {
        type: Sequelize.INTEGER
      },
      id_expense: {
        type: Sequelize.INTEGER
      },
    })
  
    return BankAccount
  }