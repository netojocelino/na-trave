import { createHash } from 'node:crypto'

import { PrismaClient } from "@prisma/client"
import { validateUser } from '../User'


const UserCreate = async (prisma: PrismaClient, context: any) => {
    const body = context.request.body

    const password = createHash('sha256')
        .update(body.password)
        .digest('hex')


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
        const user = await prisma.user.create({
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


export default {
    UserCreate,
}
