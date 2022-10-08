import UserRepository from './UserRepository'
import HunchRepository from './HunchRepository'

import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()


const Repositories = {
    Hunch: {
        HunchCreate: (context: any) => HunchRepository.HunchCreate(prisma, context),
    },

    User: {
        UserCreate: (context: any) => UserRepository.UserCreate(prisma, context),
        UserList: (context: any) => UserRepository.UserList(prisma, context),
        UserLogin: (context: any) => UserRepository.UserLogin(prisma, context),
    },
}

export default Repositories
