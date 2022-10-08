import Router from '@koa/router'
import Repositories from '../app/repository/index.ts'

const router = new Router()

router.post('/user', Repositories.User.UserCreate)
router.post('/user/login', Repositories.User.UserLogin)
router.get('/users', Repositories.User.UserList)

router.post('/hunch', Repositories.Hunch.HunchCreate)

export default router
