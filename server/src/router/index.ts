import Router from '@koa/router'
import Repositories from '../app/repository/index.ts'

import { User, validateUser } from '../app/User'

const router = new Router()
const Users: User[] = []


router.post('/user', Repositories.User.UserCreate)
router.get('/users', Repositories.User.UserList)

export default router
