const db = require("../models")
const User = db.user

exports.resetPassword = (req, res) => {
    User.update({
        password: req.params.Password
    }, {
        where: {
            first_name: req.params.FirstName,
            last_name: req.params.LastName,
            patronymic: req.params.Patronymic,
            login: req.params.Login,
        }
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
};

exports.autorization = (req, res) => {
    User.findOne({
        where: {
            login: req.params.Login,
            password: req.params.Password
        }
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.send(err)
    })
}

exports.registration = (req, res) => {
    User.create({
        first_name: req.params.FirstName,
        last_name: req.params.LastName,
        patronymic: req.params.Patronymic,
        login: req.params.Login,
        password: req.params.Password
    }).then(result => {
        res.send(result)
    }).catch(err => {
        res.send(err)
    })
}

// два метода в другие контроллеры и создать модели для них
// Это получается расходы
/*exports.findAllExpenses = (req, res) => {
    .findAll({})
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
}

// А это доходы
exports.findAllIncome = (req, res) => {
    .findAll({})
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
}*/