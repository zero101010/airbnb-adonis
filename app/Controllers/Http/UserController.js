'use strict'
const User = use("App/Models/User")
class UserController {
    async create({request}){
        const data = request.only(["username","password","email"])
        const user = await User.create(data)
        console.log(data)
        return data
    }
    async find({request}){
        const user = await User.all()
        return user
    }
}

module.exports = UserController
