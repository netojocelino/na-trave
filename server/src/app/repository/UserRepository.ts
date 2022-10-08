import { createHash } from 'node:crypto'
import jwt from 'jsonwebtoken'

import { validateUser } from '../User'


const hash = (str: string) => createHash('sha256')
    .update(str)
    .digest('hex')


const UserCreate = async (dbClient: any, context: any) => {
    const body = context.request.body

    const password = hash(body.password)


    const data = {
        name: body.name,
        username: body.username,
        email: body.email,
        password,
    }

    if (!validateUser(data)) {
        context.body = { 'message': 'Invalid user data' }
        context.status = 422
        return
    }

    try {
        const user = await dbClient.user.create({
            select: {
                id: true,
                name: true,
                email: true,
                username: true,
            },
            data
        })

        context.body = user
        context.status = 201
    } catch (error) {
        context.body = error
        context.status = 500

    }

}

const UserList = async (dbClient: any, context: any) => {
    const users = await dbClient.user.findMany({
        select: { id: true, name: true },
        orderBy: { createdAt: 'asc' }
    })
    context.body = users
    context.status = 200
}

const UserLogin = async (dbClient: any, context: any) => {

    try {
        const [type, token] = context.headers.authorization.split(' ')

        const [username, password] = atob(token).split(':')

        const user = await dbClient.user.findFirst({
            where: { username, }
        })

        if (!user) {
            throw new Error('Invalid Username/Passoword')
        }

        if (hash(password) !== user.password) {
            throw new Error('Invalid Username/Passoword')
        }
        user.password = undefined

        const accessToken = jwt.sign({
            sub: user.id,
            name: user.username,
            expiredIn: '7d'
        }, process.env.JWT_SECRET!)


        context.body = {
            user,
            accessToken,
        }
    } catch (error) {
        console.error(error)
        context.body = error
        context.status = 500
    }
}

export default {
    UserCreate,
    UserList,
    UserLogin,
}
