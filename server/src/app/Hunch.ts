export type Hunch = {
    userId: String
    gameId: String

    homeTeamScore: Number
    awayTeamScore: Number
}


export function validateHunch (hunch: any): hunch is Hunch {
    if (typeof hunch !== 'object') {
        console.error('Invalid Type')
        return false // throw new Error('Invalid Type')
    }

    if (typeof hunch.userId !== 'string') {
        console.error('`userId` is missing')
        return false // throw new Error('`userId` is missing')
    }

    if (typeof hunch.gameId !== 'string' && typeof hunch.gameId !== 'number') {
        console.error('`gameId` is missing')
        return false // throw new Error('`gameId` is missing')
    }

    if (typeof hunch.homeTeamScore !== 'string' && typeof hunch.homeTeamScore !== 'number') {
        console.error('`homeTeamScore` is missing')
        return false // throw new Error('`homeTeamScore` is missing')
    }

    if (typeof hunch.awayTeamScore !== 'string' && typeof hunch.awayTeamScore !== 'number') {
        console.error('`awayTeamScore` is missing')
        return false // throw new Error('`awayTeamScore` is missing')
    }

    return true
}
