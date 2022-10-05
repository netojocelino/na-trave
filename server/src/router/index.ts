import Router from '@koa/router'

const router = new Router()


type User = {
    name: string
    username: string
    password: string
}

const Users: User[] = []


router.get('/users', async (context) => {
    context.body = Users
})

router.post('/user', async (context) => {
    const user: User = {
        name: `${context.request!.body!.name}`,
        username: `${context.request!.body!.username}`,
        password: `${context.request!.body!.password}`,
    }

    Users.push(user)

    context.status = 201
    context.body = "Created"
})

export default router
