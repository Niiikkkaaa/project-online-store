const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Cart} = require('../models/models')

const generateJwt = (id, email, role) => {
  return jwt.sign(
    {id, email, role}, 
    process.env.SECRET_KEY, 
    {expiresIn: '24h'})
}

class UserController {
  async registration(req, res, next) {

    const {email, password, role} = req.body 
    if(!email || !password) {
      return next(ApiError.badRequest('incorrect email or password'))
    } 

    const candidate = await User.findOne({where: {email}})//check
    if (candidate) {
      return next(ApiError.badRequest('There is user with this email')) 
    }

    const hashPassword = await bcrypt.hash(password, 5)
    const user = await User.create({email, password: hashPassword, role})

    const cart = await Cart.create({userId: user.id})
    const token = generateJwt(user.id, user.email, user.role)
    return res.json({token})
  }

  async login(req, res, next) {
    const {email, password} = req.body
    const user = await User.findOne({where: {email}})
    if (!user) {
      return next(ApiError.internal('Пользователь не найден'))
    }

    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      return next(ApiError.internal('Пароль не верный'))
    }

    const token = generateJwt(user.id, user.email, user.role)
    return res.json ({token})
  }

  async check(req, res, next) {//проверка авторизован ли пользователь
    //const query = req.query
    //res.json(query)// object query http://localhost:5000/api/user/auth?id=5%&message=hi
    //res.json({message: "ALL RIGHT"})
    const token = generateJwt(req.user.id, req.user.email, req.user.role)
    return res.json({token})
  }

  async update(req, res) {
    const {id, name} = req.body
    await User.update(
      { name },
      {where: {id}}
    )
    const users = await User.findAll()
    return res.json(users)
  }

  async delete(req, res) {
    const {id} = req.body
    await User.destroy({where: {id}})  
    const users = await User.findAll()
    return res.json(users)
  }
}

module.exports = new UserController()