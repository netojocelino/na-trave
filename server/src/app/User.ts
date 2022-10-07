export type User = {
    name: string
    username: string
    password: string
}


export function validateUser (user: any): user is User {
    if (typeof user !== 'object') {
        console.error('Invalid Type')
        return false // throw new Error('Invalid Type')
    }

    if (typeof user.name !== 'string') {
        console.error('`Name` is missing')
        return false // throw new Error('`Name` is missing')
    }

    if (typeof user.username !== 'string') {
        console.error('`Username` is missing')
        return false // throw new Error('`Username` is missing')
    }

    if (typeof user.password !== 'string') {
        console.error('`Password` is missing')
        return false // throw new Error('`Password` is missing')
    }

    return true
}
