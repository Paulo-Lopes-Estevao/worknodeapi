const Router = require("express")
const ExpressAdapter = require("../../adapter/ExpressAdapter")
const UserController = require("../../controller/UserController")

const router = Router()

router.get('/user', ExpressAdapter.create(UserController.getUser))
router.post('/user', ExpressAdapter.create(UserController.createUser))
router.put('/user/:id', ExpressAdapter.create(UserController.updateUser))
router.delete('/user/:id', ExpressAdapter.create(UserController.deleteUser))

module.exports = router