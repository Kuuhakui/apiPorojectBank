module.exports = app => {
    const user = require("../controllers/user.controller");
    const router = require("express").Router();

    router.post("/resetPassword", user.resetPassword);
    router.get("/autorization", user.autorization);

    router.get("/findAllExpenses", );
    router.get("/findAllIncome", )

    app.use("/api", router);
};