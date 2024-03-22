import { UserModule } from "../DB/module/user.module"

export async function LogIn(user) {
    try {
        const userfind = await UserModule.findOne({email: user.email, password: user.password})
        return userfind
    } catch (error) {
        console.error(error)
        throw error
    }
    
}