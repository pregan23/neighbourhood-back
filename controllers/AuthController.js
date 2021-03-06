const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
    try {
      const user = await User.findOne({
        where: { userName: req.body.userName },
        raw: true
      })
      if (
        user &&
        (await middleware.comparePassword(user.passwordDigest, req.body.password))
      ) {
        let payload = {
          id: user.id,
          userName: user.userName,
          firstName: user.firstName,
          avatar: user.avatar

        }
        let token = middleware.createToken(payload)
        return res.send({ user: payload, token })
      }
      res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
    } catch (error) {
      throw error
    }
  }
  

const Register = async (req, res) => {
    try {
      const { firstName, lastName, zipcode, age, userName, password, avatar  } = req.body
      let passwordDigest = await middleware.hashPassword(password)
      const user = await User.create({ firstName, lastName, zipcode, age, userName, passwordDigest, avatar })
      res.send(user)
    } catch (error) {
      throw error
    }
  }

const UpdatePassword = async (req, res) => {
  try {
    let { password } = req.body
    let id  = parseInt(req.params.id)
    console.log(id)
    let passwordDigest = await middleware.hashPassword(password)
    let updated = await User.update({passwordDigest}, {
      where: { id }
    })
    res.send(updated)
  } catch (error) {
    throw error
}
}

  const CheckSession = async (req, res) => {
    let { payload } = res.locals
    console.log(payload)
    res.send(payload)
    console.log('we there')
  }

  const UpdateAvatar = async (req, res) => {
    try {
    let id = req.params.id
    let updated = await User.update(req.body, {
      where: { id }
    })
    res.send(updated)
  } catch (error) {
    throw error
}
}
  

module.exports = {
  Login,
  Register,
  CheckSession,
  UpdateAvatar,
  UpdatePassword
}