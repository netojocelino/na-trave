import jwt from 'jsonwebtoken'

import { validateHunch } from '../Hunch'


const HunchCreate = async (dbClient: any, context: any) => {

    try {
        const [_, token] = context.headers.authorization.split(' ')

        const UserData = jwt.verify(token, process.env.JWT_SECRET!)

        const hunch = {
            userId: `${UserData.sub}`,
            gameId: `${context.request.body.gameId}`,
            homeTeamScore: context.request.body.homeTeamScore,
            awayTeamScore: context.request.body.awayTeamScore,
        }
        if (!validateHunch(hunch)) {
            context.body = { 'message': 'Invalid hunch data' }
            context.status = 422
            return
        }

        const select = {
            id: true,
            gameId: true,
            homeTeamScore: true,
            awayTeamScore: true,
        }

        const data = {
            userId: hunch.userId,
            gameId: `${hunch.gameId}`,
            homeTeamScore: hunch.homeTeamScore,
            awayTeamScore: hunch.awayTeamScore,
        }

        const where = {
            userId: hunch.userId,
            gameId: `${hunch.gameId}`,
        }

        let response

        const [firstHunch] = await dbClient.hunch.findMany({
            select,
            where,
        })

        if (firstHunch) {
            response = await dbClient.hunch.update({
                select,
                where: { id: firstHunch.id },
                data,
            })
        } else {
            response = await dbClient.hunch.create({
                select,
                data,
            })
        }

        context.body = response
    } catch (error) {
        console.error(error)
        context.body = error
        context.status = 500
    }
}

export default {
    HunchCreate,
}
