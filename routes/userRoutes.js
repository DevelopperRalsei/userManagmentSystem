const express = require("express")
const router = express.Router()

const userController = require("../controllers/userController")

router.get("/",userController.getAllUsersGET)
router.get("/:id",userController.getAllUsersGET)
router.post("/newUser",userController.newUserPOST)
router.put("/updateUser",userController.editUserPUT)

module.exports = router