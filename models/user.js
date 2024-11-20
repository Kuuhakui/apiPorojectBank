module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    patronymic: {
      type: Sequelize.STRING
    },
    login: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
  })

  return User
}