import UserRepository from './UserRepository'

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()


const Repositories = {
    User: {
        UserCreate: (context: any) => UserRepository.UserCreate(prisma, context),
        UserList: (context: any) => UserRepository.UserList(prisma, context),
    },
}

export default Repositories
