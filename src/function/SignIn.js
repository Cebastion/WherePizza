import {UserModule} from '../DB/module/user.module'

export async function SignIn(user) {
    try {
        const NewUser = await UserModule.create(user)
        return NewUser
    } catch (error) {
        console.error(error)
        throw error
    }
}