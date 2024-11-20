module.exports = app => {
    const user = require("../controllers/user.controller")
    const router = require("express").Router()

    router.get("/autorization", user.autorization)
    router.post("/resetPassword", user.resetPassword)
    router.post("/registration", user.registration)

    router.get("/findAllExpenses",)
    router.get("/findAllIncomes",)

    app.use("/api", router)
}