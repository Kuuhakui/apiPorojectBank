const db = require("../models");
const User = db.user;

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
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
};

// Это получается расходы
exports.findAllExpenses = ( req,res ) => {
    User.findAll( { } )
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving Picture"
        });
    });
};

// А это доходы
exports.findAllIncome = ( req,res ) => {
    User.findAll( { } )
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving Picture"
        });
    });
};

exports.autorization = (req, res) => {
    User.findOne(
        {
            where: {
                login: req.params.Login,
                password: req.params.Password
            }
        })
        .then(data=>{
            res.send(data);
            console.log(data)
        }).catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving Picture"
        });
    });
}