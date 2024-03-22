import { OrderSchema } from "../schema/order.schema"

export const OrderModule = mongoose.module('historyOrder', OrderSchema)