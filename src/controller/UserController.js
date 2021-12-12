const User = require("../infra/repository/model/user")
const Presenter = require("./presenter")

module.exports = class UserController {

    static async getUser(params, body, res) {
        const user = await User.findAll()
        res.json(user)
    }

    static async createUser(params, body, res) {
        const user = await User.create({
            nome: body.nome,
            password: body.password
        })
        return Presenter.CREATED(res, user)
    }

    static async updateUser(params, body, res) {
        const user = await User.findByPk(params.id);
        user.nome = body.nome
        user.password = body.password
        const resultSave = await user.save();
        res.json(resultSave)
    }

    static async deleteUser(params, body, res) {
        const user = await User.findByPk(params.id)
        user.destroy();
        return Presenter.DELETED(res, user)
    }
}