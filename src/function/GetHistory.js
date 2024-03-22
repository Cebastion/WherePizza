import { OrderModule } from "../DB/module/order.module"

export async function GetHistory(user) {
    try {
        const UserHistoryOrders = await OrderModule.find({user_id: user._id})
        return UserHistoryOrders
    } catch (error) {
        console.error(error)
        throw error
    }   
}