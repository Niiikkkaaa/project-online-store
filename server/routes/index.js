const Router = require('express')
const router = new Router()

const itemRouter = require('./itemRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const cartRouter = require('./cartRouter')

router.use('/item', itemRouter)
router.use('/user', userRouter)
router.use('/brand', brandRouter)
router.use('/type', typeRouter)
router.use('/cart', cartRouter)

module.exports = router