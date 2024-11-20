module.exports = (sequelize, Sequelize) => {
    const Plan = sequelize.define("income", {
      id_plan: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      plan_income: {
        type: Sequelize.INTEGER
      },
      date_income: {
        type: Sequelize.DATE
      },
      plan_expense: {
        type: Sequelize.INTEGER
      },
      date_expense: {
        type: Sequelize.DATE
      }
    })
  
    return Plan
  }